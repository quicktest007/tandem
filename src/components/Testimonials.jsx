import { useReveal } from '../hooks/useReveal'

/* PLACEHOLDER TESTIMONIALS — replace with real quotes before launch */
const testimonials = [
  {
    quote: 'I finally stayed consistent with my morning walks because someone noticed when I showed up.',
    name: 'Maya R.',
    detail: 'Health habit · placeholder',
  },
  {
    quote: 'It feels encouraging, not judgmental. We celebrate small weeks the same way we celebrate big ones.',
    name: 'Chris & Sam',
    detail: 'Creative project · placeholder',
  },
  {
    quote: 'Simpler than every habit tracker I’ve abandoned. The check-ins take seconds and keep us connected.',
    name: 'Priya N.',
    detail: 'Reading goal · placeholder',
  },
  {
    quote: 'We’re making small but meaningful progress on a side project that used to live forever in our notes.',
    name: 'Owen L.',
    detail: 'Career development · placeholder',
  },
]

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section id="testimonials" className="section testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container reveal" ref={ref}>
        <div className="section-intro">
          <p className="eyebrow">Placeholder stories</p>
          <h2 id="testimonials-heading">Someone in your corner changes everything.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card" data-placeholder="true">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-detail">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
