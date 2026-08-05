function WaveLabel({ text }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="nav-wave-letters" aria-hidden="true">
        {Array.from(text).map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={char === ' ' ? 'is-space' : undefined}
            style={{ '--i': index }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </>
  )
}

export default function WaveLink({ href, label, className = '', onClick }) {
  return (
    <a href={href} className={`nav-wave ${className}`.trim()} onClick={onClick}>
      <WaveLabel text={label} />
    </a>
  )
}
