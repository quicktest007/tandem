import { useReveal } from '../hooks/useReveal'

export default function CTASection() {
  const ref = useReveal()

  return (
    <section id="start" className="section cta-section" aria-labelledby="cta-heading">
      <div className="cta-inner reveal" ref={ref}>
        <h2 id="cta-heading">Your next goal needs a partner.</h2>
        <p>Start small, build momentum, and make progress with someone beside you.</p>
        <a href="#start" className="btn-primary btn-lg">Start Your Tandem</a>
        <p className="cta-sub">Better habits. Meaningful goals. Shared progress.</p>
      </div>
    </section>
  )
}
