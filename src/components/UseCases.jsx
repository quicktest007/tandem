import { useReveal } from '../hooks/useReveal'

const cases = [
  {
    title: 'Read more consistently',
    body: 'Set a weekly reading goal and share what you’re learning with a friend.',
  },
  {
    title: 'Spend less time scrolling',
    body: 'Create healthier phone habits with someone pursuing the same change.',
  },
  {
    title: 'Finish the project',
    body: 'Keep making progress on the idea that has been sitting in your notes for months.',
  },
  {
    title: 'Move your body',
    body: 'Build a fitness rhythm—walks, workouts, or recovery—with someone cheering you on.',
  },
  {
    title: 'Protect your mornings',
    body: 'Stick with a morning or evening routine that sets the tone for the rest of your day.',
  },
  {
    title: 'Grow in your career',
    body: 'Ship portfolio pieces, practice interviews, or learn a skill with a trusted partner.',
  },
  {
    title: 'Build financial habits',
    body: 'Stay consistent with saving, budgeting, or debt paydown without turning it into a spectacle.',
  },
  {
    title: 'Make space for faith',
    body: 'Keep a gentle rhythm of reflection, prayer, or study with someone who understands why it matters.',
  },
  {
    title: 'Strengthen a relationship',
    body: 'Set shared intentions for connection—date nights, check-ins, or simply showing up.',
  },
  {
    title: 'Rewrite everyday routines',
    body: 'Build or break the small daily patterns that quietly shape how you feel.',
  },
]

export default function UseCases() {
  const ref = useReveal()

  const onKeyDown = (e) => {
    const el = e.currentTarget
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      el.scrollBy({ left: 280, behavior: 'smooth' })
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      el.scrollBy({ left: -280, behavior: 'smooth' })
    }
  }

  return (
    <section id="use-cases" className="section usecases-section" aria-labelledby="usecases-heading">
      <div className="container">
        <div className="section-intro reveal" ref={ref}>
          <p className="eyebrow">Use cases</p>
          <h2 id="usecases-heading">Whatever you’re working toward, don’t go it alone.</h2>
          <p className="sr-only">
            Horizontal list of examples. When focused, use the left and right arrow keys to scroll.
          </p>
        </div>

        <div
          className="usecase-scroll"
          tabIndex={0}
          role="region"
          aria-label="Use case examples. Use left and right arrow keys to scroll."
          onKeyDown={onKeyDown}
        >
          {cases.map((c) => (
            <article key={c.title} className="usecase-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
