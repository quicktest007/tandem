export default function Logo({ className = '' }) {
  return (
    <span className={`logo-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="9" fill="currentColor" className="logo-mark-bg" />
        <circle cx="12" cy="16" r="2.25" fill="var(--bg)" />
        <circle cx="20" cy="16" r="2.25" fill="var(--bg)" />
        <path d="M11 21h10" stroke="var(--bg)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    </span>
  )
}
