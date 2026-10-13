import SectionHead from './SectionHead'

const FAQS = [
  { q: 'How long does a website take?', a: 'Live in 14 working days from the day we receive your content and logins, or you get 10% off your final invoice.' },
  { q: 'Do I own my domain and website?', a: 'Yes. Your domain, hosting and logins are always yours. We never hold them hostage.' },
  { q: 'Do I need a call?', a: 'No. You can request the free audit or the portfolio without a call. If you want to talk it through, a free 15-minute call is available.' },
  { q: 'Do you work outside Cebu?', a: 'Yes. We work with businesses across the Philippines and with clients abroad. Calls and projects run online.' },
  { q: 'What if I only need a small fix?', a: 'Start with a free audit or a Quick Fix. You do not need a full rebuild to get a better result.' },
  { q: 'What does it cost?', a: 'Starting prices are on the Services page. After the audit you get a fixed quote: 50% to start and 50% before go-live.' },
  { q: 'What is AEO, and do I need it?', a: 'AEO stands for Answer Engine Optimization. More people now ask ChatGPT, Google AI and similar tools instead of searching. AEO sets up your website and business details so those tools can find you and name you in their answers. If your customers could be asking AI for a business like yours, it is worth having. We set it up for you.' },
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
