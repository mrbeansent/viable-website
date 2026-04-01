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
        <Reveal>
          <div className="section-label">Start a Project</div>
          <h2 className="section-heading">Let&apos;s build something<br /><span className="gradient-text">together.</span></h2>
        </Reveal>
        <div className="contact-layout">
          <Reveal className="contact-info">
            <h3>Free Discovery Call</h3>
            <p>Tell us about your project and we&apos;ll come back with a clear scope, timeline, and quote — no obligation, no pressure. Most projects kick off within a week of first contact.</p>
            <div className="contact-detail">
              <div className="icon">📧</div>
              <div className="detail-text">
                <strong>Email</strong>
                hello@viable.agency
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">📍</div>
              <div className="detail-text">
                <strong>Location</strong>
                Sydney, Australia
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon">⏰</div>
              <div className="detail-text">
                <strong>Response Time</strong>
                Within 24 hours
              </div>
            </div>
          </Reveal>
          <Reveal className="contact-form">
            {submitted ? (
              <p style={{ color: 'var(--teal)', fontWeight: 600 }}>Thanks! We&apos;ll be in touch within 24 hours.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="jane@company.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>What do you need?</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Custom Website</option>
                    <option>E-Commerce Store</option>
                    <option>Brand Identity</option>
                    <option>Marketing &amp; SEO</option>
                    <option>Full Package (Website + Marketing)</option>
                    <option>Monthly Retainer</option>
                    <option>Not sure yet — let&apos;s chat</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell us about your project</label>
                  <textarea placeholder="What's your business? What are you looking to achieve? Any timeline or budget in mind?" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
