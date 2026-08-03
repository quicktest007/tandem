import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'

const moments = [
  {
    day: 'Monday',
    title: noOrphan('Set your intention'),
    quote: noOrphan('Walk for 30 minutes three times this week.'),
  },
  {
    day: 'Wednesday',
    title: noOrphan('Share a quick update'),
    quote: noOrphan('First walk complete. Almost skipped it, but I’m glad I went.'),
  },
  {
    day: 'Friday',
    title: noOrphan('Receive encouragement'),
    quote: noOrphan('Nice work. One more and you’ve got it.'),
  },
  {
    day: 'Sunday',
    title: noOrphan('Reflect together'),
    quote: noOrphan('What helped you make progress this week?'),
  },
]

export default function WeekStory() {
  const ref = useReveal()

  return (
    <section id="week-in-tandem" className="section week-section" aria-labelledby="week-heading">
      <div className="week-inner reveal" ref={ref}>
        <div className="section-intro light">
          <p className="eyebrow">{noOrphan('A week inside Tandem')}</p>
          <h2 id="week-heading">{noOrphan('Progress feels different when it’s shared.')}</h2>
        </div>

        <div className="week-rail" role="list">
          {moments.map((m, i) => (
            <article key={m.day} className="week-card" role="listitem" style={{ '--i': i }}>
              <p className="week-day">{m.day}</p>
              <h3>{m.title}</h3>
              <blockquote>“{m.quote}”</blockquote>
            </article>
          ))}
        </div>

        <p className="week-closer">{noOrphan('Small moments of connection create lasting momentum.')}</p>
      </div>
    </section>
  )
}
