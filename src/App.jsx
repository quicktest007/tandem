import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import HowItWorks from './components/HowItWorks'
import WhyDifferent from './components/WhyDifferent'
import PrivacySection from './components/PrivacySection'
import UseCases from './components/UseCases'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="min-h-screen texture-overlay">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <WhyDifferent />
        <PrivacySection />
        <UseCases />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
