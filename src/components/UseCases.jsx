function UseCases() {
  const cases = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.302 8.302 0 0112 3.382c1.787 0 3.5.584 4.924 1.612a8.318 8.318 0 016.063 2.22 8.302 8.302 0 0112.27 6.038 8.25 8.25 0 01-6.897 8.213" />
        </svg>
      ),
      title: 'Working out regularly',
      body: "Stay consistent with running, gym, or any fitness routine. A partner who checks in makes the difference between another skipped day and showing up.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      title: 'Studying for exams',
      body: "Preparing for a big test? A study partner who checks in keeps you accountable to your schedule when motivation runs low.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
        </svg>
      ),
      title: 'Writing consistently',
      body: "Blog, book, or journal—creative work needs rhythm. A partner who asks how the writing went keeps you coming back to the page.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Building a habit',
      body: "Meditation, reading, learning a language—habits are built through repetition. Accountability turns intention into routine.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
        </svg>
      ),
      title: 'Staying on track with personal goals',
      body: "Whatever you're working toward—career change, side project, personal growth—a partner helps you stay honest and consistent.",
    },
  ]

  return (
    <section id="use-cases" className="px-6 py-16 md:py-24 bg-white/50" aria-labelledby="use-cases-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="use-cases-heading" className="text-2xl font-semibold text-navy md:text-3xl text-center mb-4">
          Who Tandem is for
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-14">
          People who want to build consistency—without the noise.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-off-white/80 border border-navy/5 hover:border-navy/10 hover:shadow-md transition-all"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted/30 text-accent mb-4">
                {c.icon}
              </span>
              <h3 className="text-base font-semibold text-navy mb-2">{c.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
