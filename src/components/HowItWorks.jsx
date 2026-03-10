import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { number: 1, text: 'Enter your goal and invite a friend in the Tandem app.' },
  { number: 2, text: 'Tandem schedules an accountability check-in that works for both of you.' },
  { number: 3, text: 'Connect for meaningful conversations about reaching your goals.' },
]

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const mockupRef = useRef(null)
  const mockupInView = useInView(mockupRef, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works" className="how-it-works" ref={ref}>
      <div className="how-it-works__inner">
        <motion.h2
          className="how-it-works__title"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          How Tandem Works
        </motion.h2>
        <div className="how-it-works__grid">
          <div className="how-it-works__steps">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="step"
                variants={slideUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i}
              >
                <div className="step__number">{step.number}</div>
                <p className="step__text">{step.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="how-it-works__mockup" ref={mockupRef}>
            <div className="how-it-works__mockup-glow" aria-hidden="true" />
            <motion.div
              className="phone-mockup"
              initial={{ opacity: 0, x: 60 }}
              animate={mockupInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="phone-mockup__screen">
                <img
                  src={`${import.meta.env.BASE_URL}phone-screen.png`}
                  alt="Tandem app"
                  className="phone-mockup__img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
