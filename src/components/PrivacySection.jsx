function PrivacySection() {
  const CheckIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )

  const points = [
    { title: 'Your goals stay personal', body: "We don't turn your goals into content. No public streaks, no leaderboards, no performative pressure. What you share stays between you and your partner." },
    { title: 'No performative social pressure', body: "Accountability works when you can be honest. Tandem gives you a private space to share progress—and struggles—without the anxiety of public exposure." },
    { title: 'A calmer, more intentional experience', body: "We're not competing for your attention. No infinite scroll, no notifications designed to addict. Just thoughtful check-ins that support your growth." },
  ]

  return (
    <section id="privacy" className="section section-privacy" aria-labelledby="privacy-heading">
      <div className="container container-narrow">
        <h2 id="privacy-heading" className="section-title">Privacy-first by design</h2>
        <p className="section-desc">We built Tandem because accountability requires vulnerability. You deserve a place that honors that.</p>
        <div className="privacy-list">
          {points.map((point, i) => (
            <div key={i} className="privacy-item">
              <span className="privacy-check"><CheckIcon /></span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrivacySection
