function ProblemSection() {
  const pains = [
    {
      headline: 'Going it alone is exhausting',
      body: "It's hard to stay consistent when no one's watching. Motivation fades. Accountability to yourself only gets you so far.",
    },
    {
      headline: 'Habit trackers are easy to ignore',
      body: "Apps can remind you—but they can't understand, encourage, or hold you accountable. You'll swipe away another notification.",
    },
    {
      headline: 'Group accountability gets noisy',
      body: "Big communities and group chats drown you in updates. You need focused support from one person who actually gets your goals.",
    },
    {
      headline: 'Scheduling becomes a burden',
      body: "Constant meetings and check-ins add friction to your life. You need accountability without the calendar Tetris.",
    },
  ]

  return (
    <section id="problem" className="px-6 py-16 md:py-24 bg-white/50" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="problem-heading" className="text-2xl font-semibold text-navy md:text-3xl text-center mb-4">
          Staying consistent shouldn't be this hard
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-14">
          You know what you want to achieve. The gap is between intention and follow-through.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-off-white/80 border border-navy/5 hover:border-navy/10 transition-colors"
            >
              <h3 className="text-base font-semibold text-navy mb-2">{pain.headline}</h3>
              <p className="text-sm text-muted leading-relaxed">{pain.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
