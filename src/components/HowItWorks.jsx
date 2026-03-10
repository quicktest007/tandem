const steps = [
  {
    number: 1,
    text: 'Enter your goal and invite a friend in the Tandem app.',
  },
  {
    number: 2,
    text: 'Tandem schedules an accountability check-in that works for both of you.',
  },
  {
    number: 3,
    text: 'Connect for meaningful conversations about reaching your goals.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works__inner">
        <h2 className="how-it-works__title reveal">How Tandem Works</h2>
        <div className="how-it-works__grid">
          <div className="how-it-works__steps">
            {steps.map((step) => (
              <div key={step.number} className="step">
                <div className="step__number">{step.number}</div>
                <p className="step__text">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="how-it-works__mockup">
            <div className="phone-mockup">
              <div className="phone-mockup__screen">
                <div className="phone-mockup__content">
                  <div className="phone-mockup__header" />
                  <div className="phone-mockup__card" />
                  <div className="phone-mockup__card" />
                  <div className="phone-mockup__card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
