import ProductMockup from './ProductMockup'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-orb hero-orb-a" />
        <span className="hero-orb hero-orb-b" />
        <span className="hero-path-line" />
      </div>

      <div className="hero-inner reveal" ref={ref}>
        <p className="eyebrow">Habits · Goals · Shared progress</p>
        <h1 id="hero-heading">Consistency is easier together.</h1>
        <p className="hero-sub">
          Build better habits, reach meaningful goals, and keep moving forward with someone beside you.
        </p>
        <div className="hero-ctas">
          <a href="#start" className="btn-primary">Start Your Tandem</a>
          <a href="#how-it-works" className="btn-secondary">See How It Works</a>
        </div>
        <p className="hero-note">Private by design. No public feed. No follower counts.</p>

        <ProductMockup />
      </div>
    </section>
  )
}
