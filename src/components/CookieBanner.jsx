import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const consented = localStorage.getItem('tandem-cookie-consent')
      if (!consented) setIsVisible(true)
    } catch {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    try { localStorage.setItem('tandem-cookie-consent', 'accepted') } catch {}
    setIsVisible(false)
  }

  const handleDecline = () => {
    try { localStorage.setItem('tandem-cookie-consent', 'declined') } catch {}
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-heading"
      aria-describedby="cookie-banner-desc"
      className="cookie-banner"
    >
      <div className="cookie-banner-inner">
        <div>
          <h2 id="cookie-banner-heading">Your privacy matters</h2>
          <p id="cookie-banner-desc">
            We use essential cookies to keep Tandem running smoothly. We never sell your data.
          </p>
        </div>
        <div className="cookie-buttons">
          <button type="button" onClick={handleDecline} className="cookie-decline">Decline</button>
          <button type="button" onClick={handleAccept} className="cookie-accept">Accept</button>
        </div>
      </div>
    </div>
  )
}
