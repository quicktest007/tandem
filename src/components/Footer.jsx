function Footer() {
  const LogoIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
      <path d="M8 15h8" strokeWidth="1.5" />
    </svg>
  )

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href={import.meta.env.BASE_URL} className="footer-logo">
          <span className="logo-icon"><LogoIcon /></span>
          Tandem
        </a>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Tandem. Built for real connection.</p>
    </footer>
  )
}

export default Footer
