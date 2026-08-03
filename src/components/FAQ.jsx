import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { noOrphan } from '../utils/noOrphan'

const faqs = [
  {
    q: noOrphan('Do both people need the app?'),
    a: noOrphan('Yes. Each person has their own account and can participate in shared check-ins, encouragement, and progress.'),
  },
  {
    q: noOrphan('Can I have more than one Tandem?'),
    a: noOrphan('You can build more than one Tandem over time—with different people and different goals—even if you start with a single partner.'),
  },
  {
    q: noOrphan('Is Tandem for coaches or groups?'),
    a: noOrphan('The initial experience is centered on two people, with room to grow into coaching and small-group features later.'),
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const ref = useReveal()

  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-heading">
      <div className="container narrow reveal" ref={ref}>
        <div className="section-intro">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading">{noOrphan('Questions, answered.')}</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-panel"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
