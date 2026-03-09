import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#why-tandem', label: 'Why Tandem' },
    { href: '#privacy', label: 'Privacy' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-off-white/90 backdrop-blur-sm border-b border-navy/5">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 transition-opacity hover:opacity-80" aria-label="Tandem home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy">
            <svg
              className="h-5 w-5 text-off-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="12" r="1.5" fill="currentColor" />
              <circle cx="15" cy="12" r="1.5" fill="currentColor" />
              <path d="M8 15h8" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="text-xl font-semibold text-navy tracking-tight">Tandem</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="text-sm font-medium text-navy bg-navy/5 hover:bg-navy/10 px-4 py-2 rounded-lg transition-colors"
          >
            Join the Waitlist
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav
          className="md:hidden border-t border-navy/5 bg-off-white px-6 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-muted hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-navy bg-navy/5 hover:bg-navy/10 px-4 py-2 rounded-lg w-fit transition-colors"
          >
            Join the Waitlist
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
