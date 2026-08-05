import { useEffect, useRef } from 'react'

const PATHS = {
  a: 'M24 28 C 120 8, 200 72, 320 36 S 520 8, 640 40 S 780 88, 896 52',
  b: 'M24 56 C 140 92, 240 12, 360 48 S 540 96, 680 28 S 820 8, 896 44',
  c: 'M40 40 C 160 70, 280 10, 420 52 S 620 90, 760 24 S 860 36, 880 48',
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
      { threshold: 0.35, rootMargin: '-8% 0px -8% 0px' },
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
      <svg viewBox="0 0 920 100" preserveAspectRatio="none" focusable="false">
        <path className="trail-path-line" pathLength="1" d={d} />
      </svg>
    </div>
  )
}
