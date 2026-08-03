import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'

export default function ProblemSection() {
  const ref = useReveal()

  return (
    <section id="problem" className="section problem-section" aria-labelledby="problem-heading">
      <div className="container reveal" ref={ref}>
        <div className="problem-copy">
          <h2 id="problem-heading">{noOrphan('Starting isn’t usually the hard part. Staying consistent is.')}</h2>
          <p>
            {noOrphan('People set goals with good intentions. They download another app, create a plan, and feel motivated for a few days. Then life gets busy, momentum fades, and the goal quietly disappears.')}
          </p>
          <p>
            {noOrphan('Tandem creates a simple rhythm that helps people keep going. Not through pressure, competition, or public performance—but through shared progress with someone they trust.')}
          </p>
        </div>

        <div className="problem-visual" aria-hidden="true">
          <div className="alone-card">
            <p className="visual-label">{noOrphan('Going alone')}</p>
            <div className="path-solo">
              <span className="solo-avatar">You</span>
              <span className="fade-trail" />
            </div>
            <p className="visual-caption">{noOrphan('Motivation fades. Progress gets quiet.')}</p>
          </div>
          <div className="together-card">
            <p className="visual-label">{noOrphan('With Tandem')}</p>
            <div className="path-pair">
              <span className="pair-avatar pair-a sm">You</span>
              <span className="shared-trail">
                <span />
                <span />
                <span />
              </span>
              <span className="pair-avatar pair-b sm">Partner</span>
            </div>
            <p className="visual-caption">{noOrphan('Two paths. Shared momentum.')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
