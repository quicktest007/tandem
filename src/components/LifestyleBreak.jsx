import { noOrphan } from '../utils/noOrphan'

const base = import.meta.env.BASE_URL

export default function LifestyleBreak() {
  return (
    <section className="lifestyle-break" aria-labelledby="lifestyle-heading">
      <div className="lifestyle-break-copy">
        <h2 id="lifestyle-heading">
          Make Your <span className="accent">Goals</span>{'\u00A0'}Happen
        </h2>
        <p>{noOrphan('The tools. The progress. The momentum together.')}</p>
        <ul className="lifestyle-break-features">
          <li>{noOrphan('Track Habits')}</li>
          <li>{noOrphan('Check In')}</li>
          <li>{noOrphan('See Progress')}</li>
        </ul>
      </div>
      <img
        className="lifestyle-break-image"
        src={`${base}lifestyle-together.jpg`}
        alt="Partners joyfully riding a bicycle together on a sunlit path."
        width={1024}
        height={681}
        loading="lazy"
        decoding="async"
      />
    </section>
  )
}
