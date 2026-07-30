import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const base = import.meta.env.BASE_URL
const playlist = [`${base}hero.mp4`, `${base}hero-2.mp4`]

export default function Hero() {
  const ref = useReveal()
  const videoRef = useRef(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      return
    }

    const playCurrent = () => {
      const play = video.play()
      if (play?.catch) play.catch(() => {})
    }

    const onEnded = () => {
      indexRef.current = (indexRef.current + 1) % playlist.length
      video.src = playlist[indexRef.current]
      video.load()
      playCurrent()
    }

    video.addEventListener('ended', onEnded)
    playCurrent()

    return () => video.removeEventListener('ended', onEnded)
  }, [])

  return (
    <section className="hero hero--cinema" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-media-video"
          src={playlist[0]}
          autoPlay
          muted
          playsInline
          preload="auto"
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
    </section>
  )
}
