import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'

const steps = [
  {
    title: noOrphan('It starts with purpose.'),
    body: noOrphan('Choose one meaningful habit or goal.'),
  },
  {
    title: noOrphan('It stays personal.'),
    body: noOrphan('Invite someone who genuinely wants to see you succeed.'),
  },
  {
    title: noOrphan('It becomes a rhythm.'),
    body: noOrphan('Check in consistently, not perfectly.'),
  },
  {
    title: noOrphan('It becomes part of your life.'),
    body: noOrphan('Momentum replaces motivation.'),
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section id="how-it-works" className="section how-section" aria-labelledby="how-heading">
      <div className="container reveal" ref={ref}>
        <div className="section-intro">
          <h2 id="how-heading">{noOrphan('Why Tandem works')}</h2>
        </div>

        <ol className="why-flow">
          {steps.map((step, i) => (
            <li key={step.title} className="why-step">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {i < steps.length - 1 && (
                <span className="why-arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
