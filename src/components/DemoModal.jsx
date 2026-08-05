import { useEffect, useId, useRef, useState } from 'react'

export default function DemoModal() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const lastFocusRef = useRef(null)
  const titleId = useId()
  const descId = useId()

  useEffect(() => {
    const onOpen = () => {
      lastFocusRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
      setOpen(true)
    }

    window.addEventListener('tandem:demo-open', onOpen)
    return () => window.removeEventListener('tandem:demo-open', onOpen)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    document.body.classList.add('has-demo-modal')
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.cancelAnimationFrame(frame)
      document.body.classList.remove('has-demo-modal')
      window.removeEventListener('keydown', onKeyDown)
      lastFocusRef.current?.focus?.()
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="demo-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false)
      }}
    >
      <div className="demo-modal-card">
        <p className="demo-modal-eyebrow">Coming soon</p>
        <h2 id={titleId}>Sorry, this is just a demo</h2>
        <p id={descId} className="demo-modal-body">
          Tandem isn’t available to download yet. You’re exploring a preview of the experience.
        </p>
        <button
          type="button"
          className="btn-primary"
          ref={closeRef}
          onClick={() => setOpen(false)}
        >
          Got it <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
