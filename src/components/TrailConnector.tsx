import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'

export type TrailDirection = 'left-to-right' | 'right-to-left'

export type TrailConnectorProps = {
  direction?: TrailDirection
  className?: string
  /** Stroke color for the dotted path. Defaults to Tandem blue. */
  color?: string
}

/** Left-to-right curve in a 1000×250 viewBox. */
const PATH_LTR =
  'M 90 25 C 55 115, 175 155, 360 155 C 560 155, 690 145, 910 220'

/**
 * TrailConnector
 *
 * Draws a dotted SVG path that is revealed with an SVG mask as it enters
 * the viewport. The visible path stays a static dotted stroke; only the
 * mask’s solid “reveal” stroke is animated via stroke-dashoffset. That keeps
 * dot spacing stable (animating a dotted stroke directly would squash gaps).
 */
export default function TrailConnector({
  direction = 'left-to-right',
  className = '',
  color = '#0B5F97',
}: TrailConnectorProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const revealPathRef = useRef<SVGPathElement | null>(null)
  const hasPlayedRef = useRef(false)

  const reactId = useId()
  // Colons from useId() are invalid / awkward in url(#…) references.
  const maskId = `trail-mask-${reactId.replace(/:/g, '')}`

  const [pathLength, setPathLength] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  // Measure the path once it is in the DOM (and if direction changes).
  useLayoutEffect(() => {
    const path = revealPathRef.current
    if (!path) return
    const length = path.getTotalLength()
    setPathLength(length)
  }, [direction])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      const prefersReduce = media.matches
      setReduceMotion(prefersReduce)
      if (prefersReduce) {
        hasPlayedRef.current = true
        setRevealed(true)
      }
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion || hasPlayedRef.current) return undefined

    const node = wrapperRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        // ~20% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          if (hasPlayedRef.current) return
          hasPlayedRef.current = true
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: [0, 0.2, 0.25, 0.5] },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduceMotion])

  const isRtl = direction === 'right-to-left'

  // Until getTotalLength() runs, keep the mask fully closed (no flash of the full trail).
  const lengthForMask = pathLength > 0 ? pathLength : 1
  const revealStyle: CSSProperties = {
    strokeDasharray: lengthForMask,
    strokeDashoffset: revealed ? 0 : lengthForMask,
    transition: reduceMotion
      ? 'none'
      : revealed
        ? 'stroke-dashoffset 1.8s cubic-bezier(0, 0, 0.2, 1)'
        : 'none',
  }

  return (
    <div
      ref={wrapperRef}
      className={['trail-connector', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <svg
        className="trail-connector-svg"
        viewBox="0 0 1000 250"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          {/*
            Mask technique:
            1) A solid white stroke is drawn along the same curve.
            2) We animate that stroke with dashoffset (length → 0).
            3) The visible dotted path references this mask, so it is
               uncovered progressively without changing its own dash pattern.
            White = visible in masks; black/transparent = hidden.
          */}
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1000"
            height="250"
          >
            <rect x="0" y="0" width="1000" height="250" fill="black" />
            <path
              ref={revealPathRef}
              d={PATH_LTR}
              fill="none"
              stroke="white"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={isRtl ? 'translate(1000 0) scale(-1 1)' : undefined}
              style={revealStyle}
            />
          </mask>
        </defs>

        <path
          className="trail-connector-dots"
          d={PATH_LTR}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1.75 14"
          transform={isRtl ? 'translate(1000 0) scale(-1 1)' : undefined}
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  )
}
