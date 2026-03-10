import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { title: 'Automatic Accountability Check-Ins', description: 'Set it once and Tandem handles the rest. Your check-ins happen at the right time, every time.', icon: '✓' },
  { title: 'Flexible Scheduling', description: 'No more back-and-forth. Tandem finds times that work for both of you automatically.', icon: '◇' },
  { title: 'Asynchronous Options', description: "Can't sync up? Share updates when it works for you. Your accountability partner stays in the loop.", icon: '↔' },
  { title: 'Privacy First', description: 'Your goals are yours. Share only what you want, when you want.', icon: '◉' },
  { title: 'Stay Consistent', description: 'Build lasting habits with gentle reminders and a partner who cares.', icon: '→' },
  { title: 'Supportive Community', description: 'Connect with people who get it. Find your accountability match.', icon: '♥' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

function FeatureCard({ title, description, icon }) {
  return (
    <motion.div className="feature-card" variants={item}>
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why" className="features" ref={ref}>
      <div className="features__inner">
        <motion.h2
          className="features__title"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Accountability, Simplified for Busy Lives
        </motion.h2>
        <motion.p
          className="features__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Tandem makes it easy to stay on track with your goals. No stress, no
          oversharing, and no complicated scheduling.
        </motion.p>
        <motion.div
          className="features__grid"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
