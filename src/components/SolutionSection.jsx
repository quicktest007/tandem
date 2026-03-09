function SolutionSection() {
  const pillars = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: 'Paired accountability',
      body: "One person. One partner. Real commitment. Tandem connects you with someone who cares about staying on track—together.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Lightweight check-ins',
      body: "No meetings. No video calls. Quick check-ins when it fits your schedule. Consistency without the overhead.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: 'Private by design',
      body: "Your goals stay between you and your partner. No public posting. No performative pressure. Just honest progress.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      title: 'Human, not algorithmic',
      body: "Real empathy. Real encouragement. A partner who celebrates your wins and supports you through setbacks.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12a9 9 0 0018 0h-3.75m-3.75 0a9 9 0 00-18 0" />
        </svg>
      ),
      title: 'Flexible cadence',
      body: "You choose how often to check in. Daily, weekly, or somewhere in between. Tandem adapts to your life.",
    },
  ]

  return (
    <section id="solution" className="px-6 py-16 md:py-24 border-t border-navy/5" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="solution-heading" className="text-2xl font-semibold text-navy md:text-3xl text-center mb-4">
          Accountability that actually works
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-14">
          Tandem strips away everything that gets in the way. What remains is simple: two people, committed to showing up for each other.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl bg-white border border-navy/5 hover:border-navy/10 hover:shadow-lg hover:shadow-navy/5 transition-all"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted/30 text-accent">
                {pillar.icon}
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy mb-1">{pillar.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
