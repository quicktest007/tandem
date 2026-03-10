function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner reveal">
        <p className="hero__micro reveal reveal-delay-1">TWO PEOPLE. ONE GOAL.</p>
        <h1 className="hero__headline reveal reveal-delay-2">
          Achieve your goals,
          <br />
          with a <span className="hero__accent">friend.</span>
        </h1>
        <p className="hero__subline reveal reveal-delay-3">
          Tandem is a privacy-first accountability tool that helps you stay
          consistent with your goals through genuine human connection without
          the hassle of constant scheduling.
        </p>
        <a href="#waitlist" className="hero__cta reveal reveal-delay-4">Join the Waitlist</a>
      </div>
      <div className="hero__preview reveal reveal-delay-4">
        <div className="hero__preview-glow" aria-hidden="true" />
        <div className="hero__preview-card">
          <div className="hero-preview__header">
            <div className="hero-preview__avatar" />
            <div className="hero-preview__title" />
          </div>
          <div className="hero-preview__row" />
          <div className="hero-preview__row" />
          <div className="hero-preview__row" />
        </div>
      </div>
    </section>
  )
}

export default Hero
