function WhyDifferent() {
  const nots = ['Not a social feed', 'Not a group chat', 'Not a habit app you ignore', 'Not expensive coaching', 'Not another productivity dashboard']

  return (
    <section id="why-tandem" className="section" aria-labelledby="why-heading">
      <div className="container container-narrow">
        <h2 id="why-heading" className="section-title">Why Tandem is different</h2>
        <p className="section-desc" style={{ marginBottom: '1rem' }}>We built Tandem because nothing else gets it right.</p>
        <div className="not-tags">
          {nots.map((item, i) => (
            <span key={i} className="not-tag">{item}</span>
          ))}
        </div>
        <div className="highlight-box">
          <p>Instead: focused accountability with one real person.</p>
          <p>No feeds. No noise. No performative posting. Just you and a partner who shows up for you—privately, consistently, and humanely.</p>
        </div>
      </div>
    </section>
  )
}

export default WhyDifferent
