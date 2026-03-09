import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="min-h-screen texture-overlay">
      <Header />
      <main>
        <Hero />
        <Section
          id="how-it-works"
          title="How it works"
          content={[
            {
              heading: 'Match with a partner',
              body: "We connect you with someone who shares similar goals. No algorithms, no endless swiping—just a thoughtful match based on what you want to achieve.",
            },
            {
              heading: 'Check in regularly',
              body: "Set a cadence that works for you. Weekly? Daily? You decide. Simple check-ins keep you accountable without the stress of constant scheduling.",
            },
            {
              heading: 'Grow together',
              body: "Build a genuine connection over time. Celebrate wins, support through setbacks, and stay consistent—together.",
            },
          ]}
        />
        <Section
          id="why-tandem"
          title="Why Tandem"
          content={[
            {
              heading: 'Human connection, not notifications',
              body: "Apps can remind you. Only a real person can hold you accountable with empathy, understanding, and shared commitment.",
            },
            {
              heading: 'No scheduling headaches',
              body: "Forget the back-and-forth. Tandem works around your life. Check in when it fits—no meetings, no calendar Tetris.",
            },
            {
              heading: 'Designed for consistency',
              body: "Goals aren't sprints; they're marathons. Tandem helps you build lasting habits through steady support, not bursts of motivation.",
            },
          ]}
        />
        <Section
          id="privacy"
          title="Privacy-first by design"
          accent
          content={[
            {
              heading: 'Your data stays yours',
              body: "We collect only what we need to make Tandem work. No selling data, no creepy tracking. Your goals and conversations are private.",
            },
            {
              heading: 'Built for trust',
              body: "Accountability requires vulnerability. We've designed Tandem so you can be honest with your partner without worrying about where that information goes.",
            },
          ]}
        />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
