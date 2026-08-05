import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import WhyTandem from './components/WhyTandem'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <CookieBanner />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <WhyTandem />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
