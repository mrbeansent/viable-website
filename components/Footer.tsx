import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Logo />
            </a>
            <p>A boutique digital agency helping small and growing businesses build cleaner marketing systems. Cebu · Working globally.</p>
            <div className="footer-socials">
              {/* TODO: Add real social media URLs */}
              <a href="#" className="social-dot">LI</a>
              <a href="#" className="social-dot">IG</a>
              <a href="#" className="social-dot">FB</a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Design &amp; Dev</a></li>
              <li><a href="#services">Social Media</a></li>
              <li><a href="#services">Email Marketing</a></li>
              <li><a href="#services">CRM &amp; Automation</a></li>
              <li><a href="#services">Video Editing</a></li>
              <li><a href="#services">Podcast Production</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#team">Who We Are</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#pricing">Engagement</a></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:vincentcanas@gmail.com">vincentcanas@gmail.com</a></li>
              <li><a href="#contact">Start a project</a></li>
              <li style={{ color: 'var(--text-3)', fontSize: '14px' }}>Cebu · GMT+8</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Viable Works. All rights reserved.</span>
          <span>Cebu, Philippines · Working globally</span>
        </div>
      </div>
    </footer>
  )
}
