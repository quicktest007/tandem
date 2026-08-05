import { useEffect, useId, useRef } from 'react'

/** Gentle horizontal S-curves, sketched feel (viewBox 0 0 800 120). */
const PATHS = {
  a: 'M36 78 C 130 28, 230 108, 340 58 C 450 12, 560 98, 668 48 C 720 28, 760 42, 772 52',
  b: 'M28 42 C 140 96, 250 18, 360 72 C 470 122, 580 22, 690 68 C 740 88, 770 70, 780 58',
  c: 'M40 64 C 150 18, 260 104, 380 52 C 500 4, 600 108, 710 44 C 750 24, 775 48, 786 60',
}

const SEEDS = { a: 3, b: 7, c: 11 }

export default function TrailPath({ variant = 'a' }) {
  const ref = useRef(null)
  const reactId = useId().replace(/:/g, '')
  const filterId = `trail-rough-${variant}-${reactId}`
  const d = PATHS[variant] || PATHS.a

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('is-visible', entry.isIntersecting)
      },
      { threshold: 0.3, rootMargin: '-8% 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`trail-path trail-path--${variant}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 120"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <filter id={filterId} x="-4%" y="-40%" width="108%" height="180%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed={SEEDS[variant] || 3}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.35"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          className="trail-path-ghost"
          pathLength="1"
          d={d}
          filter={`url(#${filterId})`}
        />
        <path
          className="trail-path-line"
          pathLength="1"
          d={d}
          filter={`url(#${filterId})`}
        />
      </svg>
    </div>
  )
}
