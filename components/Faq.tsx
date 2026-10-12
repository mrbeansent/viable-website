import SectionHead from './SectionHead'

const FAQS = [
  { q: 'How long does a website take?', a: 'Live in 14 working days from the day we receive your content, or you get 10% off your final invoice.' },
  { q: 'Do I own my domain and website?', a: 'Yes. Your domain, hosting and logins are always yours. We never hold them hostage.' },
  { q: 'What happens on the 15-minute call?', a: 'We look at your site and your inquiries together, tell you what we would fix first, and say honestly if we are not the right fit. No pitch deck.' },
  { q: 'Do you work outside Cebu?', a: 'Yes. We work with businesses across the Philippines and with clients abroad. Calls and projects run online.' },
  { q: 'What if I only need a small fix?', a: 'Start with a free audit or a Quick Fix. You do not need a full rebuild to get a better result.' },
  { q: 'What does it cost?', a: 'Starting prices are on the Services page. After the audit we send a fixed price, so there are no surprises.' },
]

export default function Faq() {
  return (
    <section className="sec sec--dark sec-faq">
      <div className="container">
        <SectionHead eyebrow="Questions" title="Things people ask before they book." />
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q} open>
              <summary>
                {f.q}
                <img src="/img/icons/plus-faq.svg" alt="" width={24} height={24} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
