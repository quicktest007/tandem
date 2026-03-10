import BackgroundLayers from './components/BackgroundLayers'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <BackgroundLayers />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
