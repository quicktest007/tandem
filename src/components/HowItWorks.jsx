import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Choose what matters',
    body: 'Create a habit or goal around health, learning, creativity, work, relationships, digital wellness, or personal growth.',
  },
  {
    num: '02',
    title: 'Invite your person',
    body: 'Build your Tandem with a friend, spouse, coworker, coach, family member, or someone who shares your goal.',
  },
  {
    num: '03',
    title: 'Check in',
    body: 'Share quick updates, reflect on progress, celebrate wins, and be honest when the week does not go as planned.',
  },
  {
    num: '04',
    title: 'Keep moving',
    body: 'Receive gentle nudges, encouragement, and reminders that help small actions become lasting routines.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section id="how-it-works" className="section how-section" aria-labelledby="how-heading">
      <div className="container reveal" ref={ref}>
        <div className="section-intro">
          <p className="eyebrow">How it works</p>
          <h2 id="how-heading">A simple rhythm for lasting progress.</h2>
        </div>

        <ol className="timeline">
          {steps.map((step, i) => (
            <li key={step.num} className="timeline-step">
              <div className="timeline-rail" aria-hidden="true">
                <span className="timeline-node">{step.num}</span>
                {i < steps.length - 1 && <span className="timeline-connector" />}
              </div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
