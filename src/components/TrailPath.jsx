import { useEffect, useRef } from 'react'

/** Vertical hand-sketched trail paths (viewBox 0 0 120 280). */
const PATHS = {
  a: 'M61 6 C 68 24, 49 38, 56 54 C 67 78, 44 96, 53 122 C 66 152, 43 174, 58 202 C 72 228, 48 248, 62 274',
  b: 'M48 8 C 38 30, 62 46, 52 68 C 38 96, 66 118, 54 146 C 40 176, 64 198, 50 226 C 36 248, 58 262, 46 276',
  c: 'M74 5 C 86 26, 62 44, 78 66 C 94 94, 68 116, 82 142 C 98 170, 70 194, 84 220 C 96 244, 72 258, 80 276',
}

export default function TrailPath({ variant = 'a' }) {
  const ref = useRef(null)
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
      { threshold: 0.25, rootMargin: '-6% 0px -6% 0px' },
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
        viewBox="0 0 120 280"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <path className="trail-path-ghost" pathLength="1" d={d} />
        <path className="trail-path-line" pathLength="1" d={d} />
      </svg>
    </div>
  )
}
