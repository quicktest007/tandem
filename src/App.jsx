// Minimal version – confirms render. Swap to full by importing components below.
function App() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }} className="texture-overlay">
      <header style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a2744' }}>Tandem</span>
      </header>
      <main style={{ textAlign: 'center', maxWidth: '36rem', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a2744', lineHeight: 1.2, margin: 0 }}>
          Achieve your goals, with a friend.
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280', marginTop: '1.5rem', lineHeight: 1.6 }}>
          Tandem is a privacy-first accountability platform that helps two people stay consistent through simple check-ins and real human support.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            backgroundColor: '#1a2744',
            color: 'white',
            fontWeight: 600,
            borderRadius: '0.75rem',
            textDecoration: 'none',
          }}
        >
          Join the Waitlist
        </a>
      </main>
    </div>
  )
}

export default App
