import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Styles are linked from index.html so the static Pages fallback still themed.

const el = document.getElementById('root')
if (el) {
  // Replaces the static HTML fallback once the Vite/React bundle loads.
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
