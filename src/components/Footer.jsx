function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#" className="footer__logo">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tandem" className="footer__logo-img" />
          <span>Tandem</span>
        </a>
        <div className="footer__links">
          <a href="#privacy" className="footer__link">Privacy</a>
          <a href="#" className="footer__link">Terms</a>
          <a href="#" className="footer__link">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
