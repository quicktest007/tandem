function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl leading-[1.1]"
        >
          Achieve your goals, with a friend.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto">
          Tandem is a privacy-first accountability tool that helps you stay consistent with your goals through genuine human connection—without the hassle of constant scheduling.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg shadow-navy/20 hover:bg-navy-dark transition-all duration-200 hover:shadow-xl hover:shadow-navy/25 hover:-translate-y-0.5"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
