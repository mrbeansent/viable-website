const TOOLS = [
  'Webflow', 'WordPress', 'Elementor', 'Shopify', 'WooCommerce', 'GoHighLevel', 'HubSpot', 'Zoho CRM',
  'Mailchimp', 'Meta Ads', 'Google Analytics', 'Figma', 'Canva', 'n8n', 'Zapier', 'Cloudflare', 'Kinsta',
]

export default function ToolsCarousel() {
  return (
    <section className="tools" aria-label="Tools we use">
      <p className="tools-label">The tools we work in every day</p>
      <div className="marquee">
        <div className="marquee-track">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={`${tool}-${i}`} className="tool-chip" aria-hidden={i >= TOOLS.length}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
