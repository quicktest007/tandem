import Logo from './Logo'

const productLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
]

const legalLinks = [
  { href: '#privacy-policy', label: 'Privacy' },
  { href: '#terms', label: 'Terms' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#top" className="footer-logo">
            <Logo />
            <span>Tandem</span>
            <span className="sr-only"> home</span>
          </a>
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

      <div className="footer-notices">
        <section id="privacy-policy" className="footer-notice" tabIndex={-1} aria-labelledby="privacy-heading">
          <h2 id="privacy-heading">Privacy</h2>
          <p>Full privacy policy coming soon. We never sell your data.</p>
        </section>
        <section id="terms" className="footer-notice" tabIndex={-1} aria-labelledby="terms-heading">
          <h2 id="terms-heading">Terms</h2>
          <p>Terms of service coming soon.</p>
        </section>
        <section id="contact" className="footer-notice" tabIndex={-1} aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>
            Reach us at{' '}
            <a href="mailto:hello@tandem.app">hello@tandem.app</a>.
          </p>
        </section>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Tandem. Stay connected. Keep going.</p>
    </footer>
  )
}
