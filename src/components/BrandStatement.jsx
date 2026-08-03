import { useEffect, useRef } from 'react'
import { noOrphan } from '../utils/noOrphan'

const base = import.meta.env.BASE_URL

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
      <div className="brand-layout" ref={ref}>
        <div className="brand-inner">
          <h2 id="brand-heading" className="brand-line brand-heading">
            {noOrphan('You don’t need more motivation.')}
          </h2>
          <p className="brand-line brand-end">{noOrphan('That’s Tandem.')}</p>
        </div>
        <figure className="brand-visual">
          <img
            src={`${base}lifestyle-brand.jpg`}
            alt="Illustration of kids on a tandem bicycle beside a Tandem mural."
            width={719}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
