import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import WhyTandem from './components/WhyTandem'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import DemoModal from './components/DemoModal'
import TrailPath from './components/TrailPath'

function App() {
  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <CookieBanner />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrailPath variant="a" />
        <ProblemSection />
        <TrailPath variant="b" />
        <HowItWorks />
        <TrailPath variant="c" />
        <WhyTandem />
        <TrailPath variant="a" />
        <FAQ />
        <TrailPath variant="b" />
        <CTASection />
      </main>
      <Footer />
      <DemoModal />
    </div>
  )
}

export default App
