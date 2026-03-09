function SolutionSection() {
  const pillars = [
    { icon: '👥', title: 'Paired accountability', body: "One person. One partner. Real commitment. Tandem connects you with someone who cares about staying on track—together." },
    { icon: '⏱', title: 'Lightweight check-ins', body: "No meetings. No video calls. Quick check-ins when it fits your schedule. Consistency without the overhead." },
    { icon: '🔒', title: 'Private by design', body: "Your goals stay between you and your partner. No public posting. No performative pressure. Just honest progress." },
    { icon: '💬', title: 'Human, not algorithmic', body: "Real empathy. Real encouragement. A partner who celebrates your wins and supports you through setbacks." },
    { icon: '↔', title: 'Flexible cadence', body: "You choose how often to check in. Daily, weekly, or somewhere in between. Tandem adapts to your life." },
  ]

  return (
    <section id="solution" className="section" aria-labelledby="solution-heading">
      <div className="container container-narrow">
        <h2 id="solution-heading" className="section-title">Accountability that actually works</h2>
        <p className="section-desc">Tandem strips away everything that gets in the way. What remains is simple: two people, committed to showing up for each other.</p>
        <div className="pillar-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-card">
              <span className="pillar-icon">{pillar.icon}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
