import Reveal from './Reveal'

const services = [
  {
    icon: '🌐',
    type: 't',
    title: 'Custom Websites',
    desc: 'WordPress, Webflow, or fully custom-coded sites built to load fast, look sharp, and convert visitors into customers. Responsive across every device.',
  },
  {
    icon: '🛒',
    type: 'p',
    title: 'E-Commerce Stores',
    desc: 'Shopify and WooCommerce stores designed to sell. Product setup, payment integration, and a branded shopping experience your customers will trust.',
  },
  {
    icon: '📈',
    type: 't',
    title: 'Marketing & SEO',
    desc: 'Social media management, content creation, email campaigns, and search engine optimisation. We drive traffic and turn it into revenue.',
  },
  {
    icon: '🎨',
    type: 'p',
    title: 'Brand Identity',
    desc: 'Logo design, visual identity systems, brand guidelines, and marketing collateral. Everything your brand needs to look professional and memorable.',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal>
          <div className="section-label">What We Do</div>
          <h2 className="section-heading">Two specialists.<br />Every skill you need.</h2>
          <p className="section-desc">We pair web development expertise with marketing and design strategy — so your website doesn&apos;t just exist, it performs.</p>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i + 1) * 0.1} className="service-card">
              <div className={`service-icon ${s.type}`}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
