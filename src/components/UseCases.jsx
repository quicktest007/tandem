function UseCases() {
  const cases = [
    { emoji: '🏃', title: 'Working out regularly', body: "Stay consistent with running, gym, or any fitness routine. A partner who checks in makes the difference between another skipped day and showing up." },
    { emoji: '📚', title: 'Studying for exams', body: "Preparing for a big test? A study partner who checks in keeps you accountable to your schedule when motivation runs low." },
    { emoji: '✍️', title: 'Writing consistently', body: "Blog, book, or journal—creative work needs rhythm. A partner who asks how the writing went keeps you coming back to the page." },
    { emoji: '✓', title: 'Building a habit', body: "Meditation, reading, learning a language—habits are built through repetition. Accountability turns intention into routine." },
    { emoji: '🎯', title: 'Staying on track with personal goals', body: "Whatever you're working toward—career change, side project, personal growth—a partner helps you stay honest and consistent." },
  ]

  return (
    <section id="use-cases" className="section section-alt" aria-labelledby="use-cases-heading">
      <div className="container container-narrow">
        <h2 id="use-cases-heading" className="section-title">Who Tandem is for</h2>
        <p className="section-desc">People who want to build consistency—without the noise.</p>
        <div className="usecase-grid">
          {cases.map((c, i) => (
            <div key={i} className="usecase-card">
              <span className="usecase-icon">{c.emoji}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
