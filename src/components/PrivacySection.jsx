function PrivacySection() {
  const points = [
    {
      title: 'Your goals stay personal',
      body: "We don't turn your goals into content. No public streaks, no leaderboards, no performative pressure. What you share stays between you and your partner.",
    },
    {
      title: 'No performative social pressure',
      body: "Accountability works when you can be honest. Tandem gives you a private space to share progress—and struggles—without the anxiety of public exposure.",
    },
    {
      title: 'A calmer, more intentional experience',
      body: "We're not competing for your attention. No infinite scroll, no notifications designed to addict. Just thoughtful check-ins that support your growth.",
    },
  ]

  return (
    <section id="privacy" className="px-6 py-16 md:py-24 bg-accent-muted/10 border-t border-navy/5" aria-labelledby="privacy-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="privacy-heading" className="text-2xl font-semibold text-navy md:text-3xl text-center mb-4">
          Privacy-first by design
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-14">
          We built Tandem because accountability requires vulnerability. You deserve a place that honors that.
        </p>
        <div className="space-y-8 md:space-y-10">
          {points.map((point, i) => (
            <div key={i} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent mt-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy mb-1">{point.title}</h3>
                <p className="text-muted leading-relaxed">{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrivacySection
