'use client'
import Reveal from './Reveal'
import type { MouseEvent } from 'react'

const services = [
  {
    num: '01 / Build',
    label: 'Service 01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 12l9 4 9-4" /><path d="M3 17l9 4 9-4" />
      </svg>
    ),
    title: 'Website Build',
    ledBy: 'Vincent',
    desc: 'Custom WordPress, Webflow, and WooCommerce sites built to load fast, look sharp, and convert. From discovery and wireframes to launch and post-launch support — full-stack delivery from local staging to production.',
    items: [
      'WordPress · Elementor · ACF · WPForms',
      'Webflow CMS & headless Next.js builds',
      'WooCommerce e-commerce stores',
      'SEO, performance & security hardening',
    ],
  },
  {
    num: '02 / Build',
    label: 'Service 02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18" />
        <path d="M12 3a14 14 0 010 18" /><path d="M12 3a14 14 0 000 18" />
      </svg>
    ),
    title: 'Social Media',
    ledBy: 'Belle',
    desc: 'Strategy, content design, and full-service management for Instagram, Facebook, TikTok, and LinkedIn. Built around a real audience and brand voice — not vanity metrics.',
    items: [
      'Content calendars & planning',
      'On-brand graphics, reels & carousels',
      'Community management',
      'Performance reporting & growth analysis',
    ],
  },
  {
    num: '03 / Grow',
    label: 'Service 03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" />
      </svg>
    ),
    title: 'Marketing & Brand',
    ledBy: 'Belle',
    desc: 'Email campaigns, advanced WooCommerce coupon promotions, SEO, and brand identity systems — the full marketing stack to drive traffic and turn it into revenue.',
    items: [
      'Email marketing & automation flows',
      'WooCommerce promotional campaigns',
      'Brand identity, logo & collateral',
      'SEO & content strategy',
    ],
  },
  {
    num: '04 / Automate',
    label: 'Service 04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9z" />
        <path d="M4 9h2M4 15h2M18 9h2M18 15h2M9 4v2M15 4v2M9 18v2M15 18v2" />
      </svg>
    ),
    title: 'AI & Automation Setup',
    ledBy: 'Vincent',
    desc: 'n8n workflows, self-hosted AI lead pipelines, custom GPTs, and CRM automations that replace hours of manual work. Built on real infrastructure — not toy Zapier flows.',
    items: [
      'n8n & multi-agent AI workflows',
      'Self-hosted LLM lead-gen pipelines',
      'GoHighLevel funnels & CRMs',
      'CI/CD & observability for production',
    ],
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
    e.currentTarget.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <article className="service-card" onMouseMove={handleMouseMove}>
      <div className="service-meta">
        <span className="num">{service.num}</span>
        <span>{service.label}</span>
      </div>
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <div className="led-by">led by <b>{service.ledBy}</b></div>
      <p className="service-desc">{service.desc}</p>
      <ul className="service-list">
        {service.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal className="section-head">
          <div className="left">
            <div className="section-eyebrow"><span className="plus">+</span> What we do</div>
            <h2>One team. <em>Every</em> skill you need.</h2>
          </div>
          <div className="right">
            We bring together web development, infrastructure, design, marketing, and automation — the full
            stack of skills under one roof, so your website doesn&apos;t just exist, it performs.
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((s) => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>
  )
}
