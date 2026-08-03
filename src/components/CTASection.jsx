import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'

export default function CTASection() {
  const ref = useReveal()
  const videoRef = useRef(null)
  const src = `${import.meta.env.BASE_URL}cta.mp4`
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setPaused(true)
      return
    }

    const play = video.play()
    if (play?.catch) play.catch(() => setPaused(true))
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setPaused(false)).catch(() => setPaused(true))
    } else {
      video.pause()
      setPaused(true)
    }
  }

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
        <h2 id="cta-heading">{noOrphan('Your next goal needs a partner.')}</h2>
        <p>{noOrphan('Start small, build momentum, and make progress with someone beside you.')}</p>
        <a href="mailto:hello@tandem.app?subject=Start%20Your%20Tandem" className="btn-cta-primary">
          {noOrphan('Start Your Tandem')}
        </a>
      </div>

      <button
        type="button"
        className="cta-video-toggle"
        onClick={togglePlayback}
        aria-pressed={!paused}
        aria-label={paused ? 'Play background video' : 'Pause background video'}
      >
        {paused ? 'Play' : 'Pause'}
      </button>
    </section>
  )
}
