import RequestButton from './request/RequestButton'

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-logo" aria-label="Viable Works home">
          <img src="/img/logo.png" alt="Viable" width={150} height={47} />
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="/services">Services</a>
          <a href="/#who-we-help">Who we help</a>
          <a href="/about">About</a>
          <a href="/quiz">Find your fix</a>
        </nav>
        <RequestButton kind="audit">Request a free audit</RequestButton>
      </div>
    </header>
  )
}
