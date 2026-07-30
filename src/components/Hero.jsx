import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()
  const videoRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const src = `${import.meta.env.BASE_URL}hero.mp4`

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const preferReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (preferReduced) {
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
    <section className="hero hero--cinema" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-media-video"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero-media-overlay" />
      </div>

      <div className="hero-shell">
        <div className="hero-inner reveal" ref={ref}>
          <p className="eyebrow hero-eyebrow">Habits · Goals · Shared progress</p>
          <h1 id="hero-heading">Consistency is easier together.</h1>
          <p className="hero-sub">
            Build better habits, reach meaningful goals, and keep moving forward with someone beside you.
          </p>
          <div className="hero-ctas">
            <a href="#start" className="btn-hero-primary">Start Your Tandem</a>
            <a href="#how-it-works" className="btn-hero-secondary">See How It Works</a>
          </div>
          <p className="hero-note">Private by design. No public feed. No follower counts.</p>
        </div>
      </div>

      <button
        type="button"
        className="hero-video-toggle"
        onClick={togglePlayback}
        aria-pressed={!paused}
        aria-label={paused ? 'Play hero video' : 'Pause hero video'}
      >
        {paused ? 'Play' : 'Pause'}
      </button>
    </section>
  )
}
