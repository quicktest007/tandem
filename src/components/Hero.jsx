import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-word" aria-hidden="true">TANDEM</div>
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          TWO PEOPLE. ONE GOAL.
        </motion.p>
        <motion.h1
          className="hero__headline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Achieve your goals,
          <br />
          with a <span className="hero__accent">friend.</span>
        </motion.h1>
        <motion.p
          className="hero__subline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          A privacy-first accountability platform. Stay consistent with your goals
          through genuine human connection—without the hassle of constant scheduling.
        </motion.p>
        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a href="#waitlist" className="hero__cta">Join the Waitlist</a>
          <a href="#how-it-works" className="hero__cta-secondary">See how it works</a>
        </motion.div>
      </div>

      <motion.div
        className="hero__mockup-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="hero__mockup-glow" aria-hidden="true" />
        <div className="hero__mockup">
          <div className="hero__mockup-screen">
            <img
              src={`${import.meta.env.BASE_URL}phone-screen.png`}
              alt="Tandem app — set your goal"
              className="hero__mockup-img"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
