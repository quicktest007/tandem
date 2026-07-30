const base = import.meta.env.BASE_URL

export default function LifestyleBreak() {
  return (
    <section className="lifestyle-break" aria-label="Tandem brand visual">
      <img
        className="lifestyle-break-image"
        src={`${base}lifestyle-together.jpg`}
        alt="Partners riding a bike together under the Tandem message Make Your Goals Happen, with Track Habits, Check In, and See Progress."
        width={1024}
        height={681}
        loading="lazy"
        decoding="async"
      />
    </section>
  )
}
