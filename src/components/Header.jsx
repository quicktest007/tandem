import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#why-tandem', label: 'Why Tandem' },
    { href: '#privacy', label: 'Privacy' },
    { href: '#use-cases', label: 'Use cases' },
  ]

  const LogoIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
      <path d="M8 15h8" strokeWidth="1.5" />
    </svg>
  )

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="header-logo" aria-label="Tandem home">
          <span className="logo-icon"><LogoIcon /></span>
          <span>Tandem</span>
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href="#join-waitlist" className="header-cta">Join the Waitlist</a>
        </nav>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="icon-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="icon-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href="#join-waitlist" className="header-cta" onClick={() => setMenuOpen(false)}>Join the Waitlist</a>
        </nav>
      )}
    </header>
  )
}

export default Header
