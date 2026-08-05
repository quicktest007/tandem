import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'

const base = import.meta.env.BASE_URL

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
        </div>

        <figure className="problem-visual">
          <img
            src={`${base}lifestyle-problem.jpg`}
            alt="Someone reading a book on the floor beside a mug of hot cocoa."
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
