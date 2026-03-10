function Hero() {
  return (
    <section className="hero hero--dark">
      {/* Oversized faded background word */}
      <div className="hero__bg-word" aria-hidden="true">TANDEM</div>

      {/* Soft glow orbs */}
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow reveal">TWO PEOPLE. ONE GOAL.</p>
        <h1 className="hero__headline reveal reveal-delay-1">
          Achieve your goals,
          <br />
          with a <span className="hero__accent">friend.</span>
        </h1>
        <p className="hero__subline reveal reveal-delay-2">
          A privacy-first accountability platform. Stay consistent with your goals
          through genuine human connection—without the hassle of constant scheduling.
        </p>
        <div className="hero__actions reveal reveal-delay-3">
          <a href="#waitlist" className="hero__cta">Join the Waitlist</a>
          <a href="#how-it-works" className="hero__cta-secondary">See how it works</a>
        </div>
      </div>

      {/* Floating product mockup */}
      <div className="hero__mockup-wrap">
        <div className="hero__mockup-glow" aria-hidden="true" />
        <div className="hero__mockup">
          <div className="hero__mockup-screen">
            <div className="hero-mockup__ui">
              <div className="hero-mockup__bar" />
              <div className="hero-mockup__card hero-mockup__card--main">
                <div className="hero-mockup__card-header">
                  <div className="hero-mockup__dot" />
                  <div className="hero-mockup__line" />
                </div>
                <div className="hero-mockup__card-row" />
                <div className="hero-mockup__card-row hero-mockup__card-row--short" />
              </div>
              <div className="hero-mockup__card">
                <div className="hero-mockup__card-row" />
                <div className="hero-mockup__card-row hero-mockup__card-row--short" />
              </div>
              <div className="hero-mockup__card">
                <div className="hero-mockup__card-row hero-mockup__card-row--short" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
