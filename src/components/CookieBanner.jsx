import { useState, useEffect } from 'react'

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const consented = localStorage.getItem('tandem-cookie-consent')
      if (!consented) {
        setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage.setItem('tandem-cookie-consent', 'accepted')
    } catch {}
    setIsVisible(false)
  }

  const handleDecline = () => {
    try {
      localStorage.setItem('tandem-cookie-consent', 'declined')
    } catch {}
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-heading"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-50 mx-auto max-w-2xl rounded-2xl bg-white shadow-xl shadow-navy/10 border border-navy/10 p-6 md:p-8 animate-slide-up"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <h2 id="cookie-banner-heading" className="text-lg font-semibold text-navy">
            We Value Your Privacy
          </h2>
          <p id="cookie-banner-desc" className="mt-2 text-sm text-muted leading-relaxed">
            We use essential cookies to keep Tandem running smoothly and to improve your experience. We never sell your data. You can accept to continue or decline non-essential cookies.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:shrink-0">
          <button
            onClick={handleDecline}
            className="rounded-xl border border-navy/20 bg-white px-6 py-3 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors shadow-md shadow-navy/15"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
