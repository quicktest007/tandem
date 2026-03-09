function Hero() {
  return (
    <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            Achieve your goals, with a friend.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Tandem is a privacy-first accountability platform that helps two people stay consistent through simple check-ins and real human support—no scheduling headaches, no performative feeds.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join-waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg shadow-navy/20 hover:bg-navy-dark transition-all duration-200 hover:shadow-xl hover:shadow-navy/25 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-navy/20 bg-white px-8 py-4 text-base font-medium text-navy hover:bg-navy/5 transition-all duration-200 w-full sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Hero mockup – partnership / check-in card */}
        <div className="mt-16 md:mt-20 mx-auto max-w-md">
          <div className="relative rounded-2xl bg-white border border-navy/10 shadow-xl shadow-navy/10 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
                <svg className="h-4 w-4 text-off-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                  <path d="M8 15h8" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-navy">Tandem</span>
            </div>
            <p className="text-sm text-muted mb-4">Check-in with Sarah</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent-muted/20 border border-accent/20">
                <span className="flex h-9 w-9 rounded-full bg-accent/30 items-center justify-center text-accent text-sm font-semibold">S</span>
                <div>
                  <p className="text-sm font-medium text-navy">Sarah checked in</p>
                  <p className="text-xs text-muted">Ran 3 miles · 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-navy/5">
                <span className="flex h-9 w-9 rounded-full bg-navy/20 items-center justify-center text-navy text-sm font-semibold">Y</span>
                <div className="flex-1">
                  <p className="text-sm text-muted">Your turn to check in</p>
                  <p className="text-xs text-navy font-medium">How did it go this week?</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted text-center">Lightweight. Private. Human.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
