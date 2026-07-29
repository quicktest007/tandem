import { useReveal } from '../hooks/useReveal'

const columns = [
  {
    title: 'Traditional habit apps',
    tone: 'muted',
    points: [
      'Built around solo tracking',
      'Easy to ignore',
      'Focused on streaks and data',
      'Progress stays isolated',
    ],
  },
  {
    title: 'Social platforms',
    tone: 'muted',
    points: [
      'Public by default',
      'Driven by likes and followers',
      'Encourage comparison',
      'Turn growth into content',
    ],
  },
  {
    title: 'Tandem',
    tone: 'accent',
    points: [
      'Built around trusted relationships',
      'Private and focused',
      'Encourages honest progress',
      'Designed to help people keep going',
    ],
  },
]

export default function WhyTandem() {
  const ref = useReveal()

  return (
    <section id="about" className="section why-section" aria-labelledby="why-heading">
      <div className="container reveal" ref={ref}>
        <div className="section-intro">
          <p className="eyebrow">Why Tandem</p>
          <h2 id="why-heading">Built for progress, not performance.</h2>
        </div>

        <div className="compare-grid">
          {columns.map((col) => (
            <div key={col.title} className={`compare-col tone-${col.tone}`}>
              <h3>{col.title}</h3>
              <ul>
                {col.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="why-tagline">No followers. No public pressure. Just meaningful progress.</p>
      </div>
    </section>
  )
}
