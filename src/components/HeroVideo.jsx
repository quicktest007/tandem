import { useEffect, useRef, useState } from 'react'

export default function HeroVideo() {
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
    <div className="hero-video">
      <div className="hero-video-glow" aria-hidden="true" />
      <div className="hero-video-frame">
        <video
          ref={videoRef}
          className="hero-video-el"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Tandem product preview video"
        />
        <button
          type="button"
          className="hero-video-toggle"
          onClick={togglePlayback}
          aria-pressed={!paused}
          aria-label={paused ? 'Play hero video' : 'Pause hero video'}
        >
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>
    </div>
  )
}
