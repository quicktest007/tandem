import { useReveal } from '../hooks/useReveal'

const features = [
  {
    id: 'shared-progress',
    title: 'Shared Progress',
    body: 'See how you and your partner are moving toward your goals without turning progress into a competition.',
    visual: 'progress',
  },
  {
    id: 'quick-checkins',
    title: 'Quick Check-Ins',
    body: 'Share a simple update in seconds. Check-ins should feel lightweight enough to become part of everyday life.',
    visual: 'checkin',
  },
  {
    id: 'gentle-nudges',
    title: 'Gentle Nudges',
    body: 'Get thoughtful reminders when it is time to take action, reconnect, or reflect.',
    visual: 'nudge',
  },
  {
    id: 'encouragement',
    title: 'Encouragement',
    body: 'Celebrate milestones, send reactions, and remind each other that progress matters.',
    visual: 'encourage',
  },
  {
    id: 'flexible-goals',
    title: 'Flexible Goals',
    body: 'Use Tandem for recurring habits, weekly goals, personal challenges, or longer-term milestones.',
    visual: 'goals',
  },
  {
    id: 'private-by-design',
    title: 'Private by Design',
    body: 'No public profiles, follower counts, popularity metrics, or pressure to perform for an audience.',
    visual: 'private',
  },
]

function FeatureVisual({ type }) {
  if (type === 'progress') {
    return (
      <div className="feature-ui" aria-hidden="true">
        <div className="feature-ui-row">
          <span className="pair-avatar pair-a sm">A</span>
          <div className="mini-bars">
            <span style={{ width: '80%' }} />
            <span style={{ width: '55%' }} />
          </div>
          <span className="pair-avatar pair-b sm">J</span>
        </div>
        <p className="feature-ui-caption">Side by side — not head to head</p>
      </div>
    )
  }
  if (type === 'checkin') {
    return (
      <div className="feature-ui" aria-hidden="true">
        <div className="mini-checkin">
          <p>“Walked after dinner. Felt good to move.”</p>
          <span className="fake-btn">Send check-in</span>
        </div>
      </div>
    )
  }
  if (type === 'nudge') {
    return (
      <div className="feature-ui" aria-hidden="true">
        <div className="mini-nudge">
          <span className="reminder-dot" />
          <div>
            <p className="feed-title">Evening nudge</p>
            <p className="feed-body">Time for a quick check-in with Jordan?</p>
          </div>
        </div>
      </div>
    )
  }
  if (type === 'encourage') {
    return (
      <div className="feature-ui" aria-hidden="true">
        <div className="mini-reacts">
          <span>Nice work</span>
          <span>Proud of you</span>
          <span>Keep going</span>
        </div>
      </div>
    )
  }
  if (type === 'goals') {
    return (
      <div className="feature-ui" aria-hidden="true">
        <ul className="mini-goals">
          <li>Daily reading</li>
          <li>Weekly project sprint</li>
          <li>90-day milestone</li>
        </ul>
      </div>
    )
  }
  return (
    <div className="feature-ui" aria-hidden="true">
      <div className="mini-private">
        <span className="lock-dot" />
        <p>Only visible to people you invite</p>
      </div>
    </div>
  )
}

export default function Features() {
  const ref = useReveal()

  return (
    <section id="features" className="section features-section" aria-labelledby="features-heading">
      <div className="container">
        <div className="section-intro reveal" ref={ref}>
          <p className="eyebrow">Features</p>
          <h2 id="features-heading">Everything you need to keep going. Nothing you don’t.</h2>
        </div>

        <div className="feature-list">
          {features.map((feature, i) => (
            <FeatureRow key={feature.id} feature={feature} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureRow({ feature, reverse }) {
  const ref = useReveal()
  return (
    <article
      id={feature.id}
      className={`feature-row ${reverse ? 'is-reverse' : ''} reveal`}
      ref={ref}
    >
      <div className="feature-copy">
        <h3>{feature.title}</h3>
        <p>{feature.body}</p>
      </div>
      <FeatureVisual type={feature.visual} />
    </article>
  )
}
