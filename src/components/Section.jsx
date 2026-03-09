function Section({ id, title, content, accent = false }) {
  return (
    <section
      id={id}
      className={`px-6 py-16 md:py-24 border-t border-navy/5 ${accent ? 'bg-accent-muted/10' : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold text-navy md:text-3xl mb-12 md:mb-16"
        >
          {title}
        </h2>
        <div className="space-y-10 md:space-y-14">
          {content.map((item, index) => (
            <article key={index} className="group">
              <h3 className="text-lg font-semibold text-navy mb-3 transition-colors">
                {item.heading}
              </h3>
              <p className="text-muted leading-relaxed max-w-2xl">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section
