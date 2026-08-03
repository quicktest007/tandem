import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import WeekStory from './components/WeekStory'
import LifestyleBreak from './components/LifestyleBreak'
import WhyTandem from './components/WhyTandem'
import BrandStatement from './components/BrandStatement'
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
        <WeekStory />
        <LifestyleBreak />
        <WhyTandem />
        <BrandStatement />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
