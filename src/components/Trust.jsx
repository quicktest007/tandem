import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  { name: 'Communities', href: '#' },
  { name: 'Creators', href: '#' },
  { name: 'Teams', href: '#' },
]

export default function Trust() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="trust" ref={ref}>
      <div className="trust__inner">
        <motion.p
          className="trust__label"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted by communities, creators, and teams
        </motion.p>
        <motion.div
          className="trust__logos"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {partners.map((p) => (
            <a key={p.name} href={p.href} className="trust__logo">
              {p.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
