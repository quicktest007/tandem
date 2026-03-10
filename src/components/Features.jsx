const features = [
  {
    title: 'Automatic Accountability Check-Ins',
    description: 'Set it once and Tandem handles the rest. Your check-ins happen at the right time, every time.',
    icon: '✓',
  },
  {
    title: 'Flexible Scheduling',
    description: 'No more back-and-forth. Tandem finds times that work for both of you automatically.',
    icon: '◇',
  },
  {
    title: 'Asynchronous Options',
    description: 'Can\'t sync up? Share updates when it works for you. Your accountability partner stays in the loop.',
    icon: '↔',
  },
  {
    title: 'Privacy First',
    description: 'Your goals are yours. Share only what you want, when you want.',
    icon: '◉',
  },
  {
    title: 'Stay Consistent',
    description: 'Build lasting habits with gentle reminders and a partner who cares.',
    icon: '→',
  },
  {
    title: 'Supportive Community',
    description: 'Connect with people who get it. Find your accountability match.',
    icon: '♥',
  },
]

function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="features">
      <div className="features__inner">
        <h2 className="features__title">
          Accountability, Simplified for Busy Lives
        </h2>
        <p className="features__subtitle">
          Tandem makes it easy to stay on track with your goals. No stress, no
          oversharing, and no complicated scheduling.
        </p>
        <div className="features__grid">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
              icon={f.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
