import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'

const columns = [
  {
    title: noOrphan('Traditional habit apps'),
    tone: 'muted',
    points: [
      noOrphan('Built around solo tracking'),
      noOrphan('Easy to ignore'),
      noOrphan('Focused on streaks and data'),
      noOrphan('Progress stays isolated'),
    ],
  },
  {
    title: noOrphan('Social platforms'),
    tone: 'muted',
    points: [
      noOrphan('Public by default'),
      noOrphan('Driven by likes and followers'),
      noOrphan('Encourage comparison'),
      noOrphan('Turn growth into content'),
    ],
  },
  {
    title: 'Tandem',
    tone: 'accent',
    points: [
      noOrphan('Built around trusted relationships'),
      noOrphan('Private and focused'),
      noOrphan('Encourages honest progress'),
      noOrphan('Designed to help people keep going'),
    ],
  },
]

export default function WhyTandem() {
  const ref = useReveal()

  return (
    <section id="about" className="section why-section" aria-labelledby="why-heading">
      <div className="container reveal" ref={ref}>
        <div className="section-intro">
          <p className="eyebrow">{noOrphan('Why Tandem')}</p>
          <h2 id="why-heading">{noOrphan('Built for progress, not performance.')}</h2>
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

        <p className="why-tagline">{noOrphan('No followers. No public pressure. Just meaningful progress.')}</p>
      </div>
    </section>
  )
}
