function WhyDifferent() {
  const nots = [
    'Not a social feed',
    'Not a group chat',
    'Not a habit app you ignore',
    'Not expensive coaching',
    'Not another productivity dashboard',
  ]

  return (
    <section id="why-tandem" className="px-6 py-16 md:py-24 border-t border-navy/5" aria-labelledby="why-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="why-heading" className="text-2xl font-semibold text-navy md:text-3xl text-center mb-4">
          Why Tandem is different
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          We built Tandem because nothing else gets it right.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {nots.map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-navy/5 text-muted text-sm font-medium border border-navy/10"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="rounded-2xl bg-accent-muted/20 border border-accent/20 p-8 md:p-10 text-center">
          <p className="text-lg md:text-xl font-semibold text-navy mb-2">
            Instead: focused accountability with one real person.
          </p>
          <p className="text-muted max-w-xl mx-auto">
            No feeds. No noise. No performative posting. Just you and a partner who shows up for you—privately, consistently, and humanely.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyDifferent
