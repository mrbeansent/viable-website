// TODO: Wire up form handler (Formspree, Resend, or custom API route)
'use client'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <div className="container">
        <span className="section-eyebrow">Start a project</span>
        <h2>Let's build something <em>together</em>.</h2>
        <p className="section-sub">Tell us about your project and we'll come back with a clear scope, timeline, and quote — no obligation, no pressure. Most projects kick off within a week of first contact.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <div className="label">Email</div>
              <div className="value"><a href="mailto:vincentcanas@gmail.com">vincentcanas@gmail.com</a></div>
            </div>
            <div className="contact-block">
              <div className="label">Location</div>
              <div className="value">Cebu, Philippines</div>
              <div className="sub">Working with PH &amp; global clients · GMT+8</div>
            </div>
            <div className="contact-block">
              <div className="label">Response time</div>
              <div className="value">Within 24 hours</div>
              <div className="sub">Usually much faster.</div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <p style={{ color: '#5CE0D8', fontWeight: 500, padding: '20px 0', textAlign: 'center' }}>
                Thanks! We'll be in touch within 24 hours.
              </p>
            ) : (
              <>
                <div className="form-field">
                  <label>Your name</label>
                  <input type="text" placeholder="Juan dela Cruz" required />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="juan@business.com" required />
                </div>
                <div className="form-field">
                  <label>What do you need?</label>
                  <select required>
                    <option value="">Select a service</option>
                    <option>Web Design &amp; Development</option>
                    <option>Social Media &amp; Graphics</option>
                    <option>Email Marketing &amp; Automation</option>
                    <option>CRM Setup &amp; Automation</option>
                    <option>Short-Form Video Editing</option>
                    <option>Podcast Production &amp; Editing</option>
                    <option>Multiple services / Full retainer</option>
                    <option>Not sure — let's talk</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Tell us about your project</label>
                  <textarea placeholder="What are you working on? What's the challenge? Any timelines or budget in mind?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '14px 28px' }}>Send message →</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
