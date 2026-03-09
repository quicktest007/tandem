function Footer() {
  return (
    <footer className="px-6 py-12 md:py-16 border-t border-navy/5 mt-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2 text-navy font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
            <svg
              className="h-4 w-4 text-off-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="12" r="1.5" fill="currentColor" />
              <circle cx="15" cy="12" r="1.5" fill="currentColor" />
              <path d="M8 15h8" strokeWidth="1.5" />
            </svg>
          </span>
          Tandem
        </a>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="#privacy" className="hover:text-navy transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-navy transition-colors">
            Contact
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl mt-8 text-sm text-muted text-center sm:text-left">
        © {new Date().getFullYear()} Tandem. Built for real connection.
      </p>
    </footer>
  )
}

export default Footer
