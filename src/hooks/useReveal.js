import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '120px 0px' },
    )

    observer.observe(el)

    // Fail-safe so content never stays visually hidden
    const failSafe = window.setTimeout(() => {
      el.classList.add('is-visible')
      observer.disconnect()
    }, 2500)

    return () => {
      window.clearTimeout(failSafe)
      observer.disconnect()
    }
  }, [])

  return ref
}
