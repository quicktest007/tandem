import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="waitlist" className="cta" ref={ref}>
      <div className="cta__spotlight" aria-hidden="true" />
      <motion.div
        className="cta__inner"
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 className="cta__headline">Stay accountable. Together.</h2>
        <a href="#" className="cta__button">Join the Waitlist</a>
      </motion.div>
    </section>
  )
}
