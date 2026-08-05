import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import { showDemoNotice } from '../utils/showDemoNotice'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuBtnRef = useRef(null)
  const mobileNavRef = useRef(null)

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

  useEffect(() => {
    if (!menuOpen) return undefined

    const nav = mobileNavRef.current
    const firstLink = nav?.querySelector('a, button')
    firstLink?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
        return
      }

      if (e.key !== 'Tab' || !nav) return

      const focusable = [
        menuBtnRef.current,
        ...nav.querySelectorAll('a, button'),
      ].filter(Boolean)

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const onDownloadClick = (e) => {
    close()
    showDemoNotice(e)
  }

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="header-logo">
          <Logo />
          <span>Tandem</span>
          <span className="sr-only"> home</span>
        </a>

        <nav className="header-nav" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <button type="button" className="btn-primary btn-sm" onClick={showDemoNotice}>
            Download Now
          </button>
        </nav>

        <button
          type="button"
          ref={menuBtnRef}
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
        ref={mobileNavRef}
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
        ))}
        <button type="button" className="btn-primary" onClick={onDownloadClick}>
          Download Now
        </button>
      </nav>
    </header>
  )
}
