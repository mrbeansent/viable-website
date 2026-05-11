'use client'
import { useState, FormEvent } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-left">
            <div className="section-eyebrow"><span className="plus">+</span> Start a project</div>
            <h2>Let&apos;s build something <em>together</em>.</h2>
            <p>
              Tell us about your project and we&apos;ll come back with a clear scope, timeline, and quote —
              no obligation, no pressure. Most projects kick off within a week of first contact.
            </p>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">
                    <a href="mailto:vincentcanas@gmail.com">vincentcanas@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2a8 8 0 018 8c0 6-8 12-8 12S4 16 4 10a8 8 0 018-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">Cebu, Philippines</div>
                  <div className="info-sub">Working globally · GMT+8</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div>
                  <div className="info-label">Response time</div>
                  <div className="info-value">Within 24 hours</div>
                  <div className="info-sub">Usually much faster.</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form-card" onSubmit={handleSubmit}>
              {submitted ? (
                <p style={{ color: 'var(--mint-ink)', fontWeight: 600, padding: '20px 0' }}>
                  Thanks! We&apos;ll be in touch within 24 hours.
                </p>
              ) : (
                <>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="fname">Your name</label>
                      <input id="fname" type="text" placeholder="Jane Smith" required />
                    </div>
                    <div className="field">
                      <label htmlFor="femail">Email</label>
                      <input id="femail" type="email" placeholder="jane@company.com" required />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="fneed">What do you need?</label>
                    <select id="fneed">
                      <option>Select a service</option>
                      <option>Website Build</option>
                      <option>Social Media Management</option>
                      <option>Marketing &amp; Brand</option>
                      <option>AI &amp; Automation Setup</option>
                      <option>Ongoing Partner Retainer</option>
                      <option>Not sure yet — let&apos;s chat</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="fmsg">Tell us about your project</label>
                    <textarea
                      id="fmsg"
                      placeholder="A few sentences about what you're building, your timeline, and your goals."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message <span className="arrow">→</span>
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
