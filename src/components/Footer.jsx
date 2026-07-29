import Logo from './Logo'

const productLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#about', label: 'About' },
]

const legalLinks = [
  { href: '#privacy', label: 'Privacy' },
  { href: '#terms', label: 'Terms' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer" id="privacy">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#top" className="footer-logo" aria-label="Tandem home">
            <Logo />
            <span>Tandem</span>
          </a>
          <p>
            Tandem helps people build lasting habits and achieve meaningful goals through shared progress.
          </p>
        </div>

        <div className="footer-cols">
          <div>
            <p className="footer-heading" id="footer-product">Product</p>
            <ul aria-labelledby="footer-product">
              {productLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-heading" id="footer-company">Company</p>
            <ul aria-labelledby="footer-company">
              {legalLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-heading" id="footer-social">Social</p>
            <ul aria-labelledby="footer-social">
              <li>
                <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                  Instagram
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="terms" className="sr-only" tabIndex={-1}>Terms of service coming soon.</div>
      <div id="contact" className="sr-only" tabIndex={-1}>Contact: hello@tandem.app</div>
      <div id="sign-in" className="sr-only" tabIndex={-1}>Sign in coming soon.</div>
      <p className="footer-copy">© {new Date().getFullYear()} Tandem. Stay connected. Keep going.</p>
    </footer>
  )
}
