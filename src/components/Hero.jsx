function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__micro">TWO PEOPLE. ONE GOAL.</p>
        <h1 className="hero__headline">
          Achieve your goals,
          <br />
          with a <span className="hero__accent">friend.</span>
        </h1>
        <p className="hero__subline">
          Tandem is a privacy-first accountability tool that helps you stay
          consistent with your goals through genuine human connection without
          the hassle of constant scheduling.
        </p>
        <a href="#waitlist" className="hero__cta">Join the Waitlist</a>
      </div>
    </section>
  )
}

export default Hero
