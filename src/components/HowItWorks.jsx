function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Choose your goal',
      body: "Fitness, study, creative work, habits—whatever you want to build. Pick something real and meaningful to you.",
    },
    {
      step: '2',
      title: 'Pair with someone you trust',
      body: "Connect with a friend, a colleague, or get matched with someone who shares similar goals. One person. One partnership.",
    },
    {
      step: '3',
      title: 'Check in consistently',
      body: "Lightweight updates when it fits your schedule. No meetings, no video calls. Just honest check-ins that keep you both on track.",
    },
    {
      step: '4',
      title: 'Build momentum together',
      body: "Celebrate wins. Support through setbacks. Watch consistency compound over time. You're not doing it alone anymore.",
    },
  ]

  return (
    <section id="how-it-works" className="px-6 py-16 md:py-24 bg-white/50" aria-labelledby="how-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="how-heading" className="text-2xl font-semibold text-navy md:text-3xl text-center mb-4">
          How it works
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-14">
          Four steps. No complexity.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative p-6 rounded-xl bg-off-white/80 border border-navy/5 text-center hover:border-navy/10 transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white text-sm font-bold mb-4">
                {s.step}
              </span>
              <h3 className="text-base font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
