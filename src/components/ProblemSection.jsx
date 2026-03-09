function ProblemSection() {
  const pains = [
    { headline: 'Going it alone is exhausting', body: "It's hard to stay consistent when no one's watching. Motivation fades. Accountability to yourself only gets you so far." },
    { headline: 'Habit trackers are easy to ignore', body: "Apps can remind you—but they can't understand, encourage, or hold you accountable. You'll swipe away another notification." },
    { headline: 'Group accountability gets noisy', body: "Big communities and group chats drown you in updates. You need focused support from one person who actually gets your goals." },
    { headline: 'Scheduling becomes a burden', body: "Constant meetings and check-ins add friction to your life. You need accountability without the calendar Tetris." },
  ]

  return (
    <section id="problem" className="section section-alt" aria-labelledby="problem-heading">
      <div className="container container-narrow">
        <h2 id="problem-heading" className="section-title">Staying consistent shouldn't be this hard</h2>
        <p className="section-desc">You know what you want to achieve. The gap is between intention and follow-through.</p>
        <div className="pain-grid">
          {pains.map((pain, i) => (
            <div key={i} className="pain-card">
              <h3>{pain.headline}</h3>
              <p>{pain.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
