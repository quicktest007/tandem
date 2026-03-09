function CTASection() {
  return (
    <section
      id="join-waitlist"
      className="px-6 py-20 md:py-28 border-t border-navy/5"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="cta-heading" className="text-3xl font-bold text-navy md:text-4xl leading-tight">
          Two people. One goal. Real accountability.
        </h2>
        <p className="mt-5 text-lg text-muted">
          Join the waitlist and be first to try Tandem—privacy-first accountability that actually works.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-navy px-10 py-4 text-base font-semibold text-white shadow-lg shadow-navy/20 hover:bg-navy-dark transition-all duration-200 hover:shadow-xl hover:shadow-navy/25 hover:-translate-y-0.5"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
