export default function Logo({ className = '' }) {
  const src = `${import.meta.env.BASE_URL}logo.png`

  return (
    <span className={`logo-mark ${className}`} aria-hidden="true">
      <img src={src} alt="" width="36" height="36" />
    </span>
  )
}
