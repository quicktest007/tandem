function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tandem" className="header__logo-img" />
          <span className="header__logo-text">Tandem</span>
        </a>
        <nav className="header__nav">
          <a href="#how-it-works" className="header__link">How it works</a>
          <a href="#why" className="header__link">Why Tandem</a>
          <a href="#privacy" className="header__link">Privacy</a>
          <a href="#use-cases" className="header__link">Use cases</a>
        </nav>
        <a href="#waitlist" className="header__cta">Join the Waitlist</a>
      </div>
    </header>
  )
}

export default Header
