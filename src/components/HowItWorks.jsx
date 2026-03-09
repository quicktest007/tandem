function HowItWorks() {
  const steps = [
    { step: '1', title: 'Choose your goal', body: "Fitness, study, creative work, habits—whatever you want to build. Pick something real and meaningful to you." },
    { step: '2', title: 'Pair with someone you trust', body: "Connect with a friend, a colleague, or get matched with someone who shares similar goals. One person. One partnership." },
    { step: '3', title: 'Check in consistently', body: "Lightweight updates when it fits your schedule. No meetings, no video calls. Just honest check-ins that keep you both on track." },
    { step: '4', title: 'Build momentum together', body: "Celebrate wins. Support through setbacks. Watch consistency compound over time. You're not doing it alone anymore." },
  ]

  return (
    <section id="how-it-works" className="section section-alt" aria-labelledby="how-heading">
      <div className="container container-narrow">
        <h2 id="how-heading" className="section-title">How it works</h2>
        <p className="section-desc">Four steps. No complexity.</p>
        <div className="step-grid">
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <span className="step-num">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
