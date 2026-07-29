import { useEffect, useRef } from 'react'

const lines = [
  'You don’t need more motivation.',
  'You need a rhythm.',
  'A reason to check in.',
  'Someone who notices when you show up.',
  'And someone who reminds you that one missed day doesn’t erase your progress.',
]

export default function BrandStatement() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.querySelectorAll('.brand-line').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        root.querySelectorAll('.brand-line').forEach((el, i) => {
          window.setTimeout(() => el.classList.add('is-visible'), i * 160)
        })
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section brand-section" aria-labelledby="brand-heading">
      <div className="brand-inner" ref={ref}>
        <h2 id="brand-heading" className="sr-only">Brand statement</h2>
        {lines.map((line) => (
          <p key={line} className="brand-line">{line}</p>
        ))}
        <p className="brand-line brand-end">That’s Tandem.</p>
      </div>
    </section>
  )
}
