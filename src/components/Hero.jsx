import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'
import { showDemoNotice } from '../utils/showDemoNotice'

const base = import.meta.env.BASE_URL
const playlist = [`${base}hero.mp4`, `${base}hero-2.mp4`]

export default function Hero() {
  const ref = useReveal()
  const videoRef = useRef(null)
  const indexRef = useRef(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setPaused(true)
      return
    }

    const playCurrent = () => {
      const play = video.play()
      if (play?.catch) {
        play.catch(() => setPaused(true))
      } else {
        setPaused(false)
      }
    }

    const onEnded = () => {
      indexRef.current = (indexRef.current + 1) % playlist.length
      video.src = playlist[indexRef.current]
      video.load()
      if (!video.dataset.userPaused) playCurrent()
    }

    video.addEventListener('ended', onEnded)
    playCurrent()

    return () => video.removeEventListener('ended', onEnded)
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.dataset.userPaused = ''
      video.play().then(() => setPaused(false)).catch(() => setPaused(true))
    } else {
      video.dataset.userPaused = 'true'
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
          <p className="eyebrow hero-eyebrow">{noOrphan('Habits · Goals · Shared progress')}</p>
          <h1 id="hero-heading">{noOrphan('Small steps. Shared momentum.')}</h1>
          <p className="hero-sub">
            {noOrphan('Real change doesn’t happen overnight. Tandem helps you and someone you trust build momentum through everyday progress.')}
          </p>
          <div className="hero-ctas">
            <button type="button" className="btn-hero-primary" onClick={showDemoNotice}>
              Download Now
            </button>
          </div>
          <p className="hero-note">{noOrphan('Focus on what matters. Leave the noise behind.')}</p>
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
