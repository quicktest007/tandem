import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function CTASection() {
  const ref = useReveal()
  const videoRef = useRef(null)
  const src = `${import.meta.env.BASE_URL}cta.mp4`

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      return
    }

    const play = video.play()
    if (play?.catch) play.catch(() => {})
  }, [])

  return (
    <section id="start" className="section cta-section cta-section--cinema" aria-labelledby="cta-heading">
      <div className="cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="cta-media-video"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="cta-media-overlay" />
      </div>

      <div className="cta-inner reveal" ref={ref}>
        <h2 id="cta-heading">Your next goal needs a partner.</h2>
        <p>Start small, build momentum, and make progress with someone beside you.</p>
        <a href="#start" className="btn-cta-primary">Start Your Tandem</a>
        <p className="cta-sub">Better habits. Meaningful goals. Shared progress.</p>
      </div>
    </section>
  )
}
