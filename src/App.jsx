import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import WeekStory from './components/WeekStory'
import UseCases from './components/UseCases'
import LifestyleBreak from './components/LifestyleBreak'
import WhyTandem from './components/WhyTandem'
import BrandStatement from './components/BrandStatement'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <WeekStory />
        <UseCases />
        <LifestyleBreak />
        <WhyTandem />
        <BrandStatement />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
