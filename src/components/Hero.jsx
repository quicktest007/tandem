function Hero() {
  const LogoIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
      <path d="M8 15h8" strokeWidth="1.5" />
    </svg>
  )

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-connection">
          <span className="hero-connection-dot" />
          <span className="hero-connection-line" />
          <span className="hero-connection-dot" />
          <span className="hero-connection-label" style={{ marginLeft: '0.5rem' }}>Two people. One goal.</span>
        </div>

        <h1 id="hero-heading">
          Achieve your goals, with a <span className="accent-text">friend.</span>
        </h1>
        <p className="hero-sub">
          Tandem is a privacy-first accountability platform that helps two people stay consistent through simple check-ins and real human support—no scheduling headaches, no performative feeds.
        </p>
        <div className="hero-ctas">
          <a href="#join-waitlist" className="btn-primary">Join the Waitlist</a>
          <a href="#how-it-works" className="btn-secondary">See how it works</a>
        </div>

        <div className="hero-mockup">
          <div className="mockup-card">
            <div className="mockup-header">
              <span className="logo-icon"><LogoIcon /></span>
              <span className="mockup-title">Tandem</span>
            </div>
            <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Check-in with Sarah</p>
            <div className="mockup-item checkin">
              <span className="avatar avatar-accent">S</span>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)', margin: 0 }}>Sarah checked in</p>
                <p className="text-muted" style={{ fontSize: '0.75rem', margin: 0 }}>Ran 3 miles · 2 hours ago</p>
              </div>
            </div>
            <div className="mockup-item yours">
              <span className="avatar avatar-navy">Y</span>
              <div>
                <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>Your turn to check in</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--navy)', margin: 0 }}>How did it go this week?</p>
              </div>
            </div>
            <p className="text-muted" style={{ marginTop: '1rem', fontSize: '0.75rem', textAlign: 'center' }}>Lightweight. Private. Human.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
