import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#about', label: 'About' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#" className="header-logo" aria-label="Tandem home">
          <Logo />
          <span>Tandem</span>
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href="#sign-in" className="header-signin">Sign In</a>
          <a href="#start" className="btn-primary btn-sm">Start Your Tandem</a>
        </nav>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="icon-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
        ))}
        <a href="#sign-in" onClick={close}>Sign In</a>
        <a href="#start" className="btn-primary" onClick={close}>Start Your Tandem</a>
      </nav>
    </header>
  )
}
