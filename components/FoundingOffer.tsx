import { BOOK_CALL } from './links'

const GET = ['Founding price on every package', 'Monthly rates locked for 6 months', 'Priority booking for your project']
const ASK = ['A short testimonial', 'Permission to share your results', 'Two introductions to people like you']

export default function FoundingOffer() {
  return (
    <section id="founding" className="sec sec--dark sec-founding">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="container">
        <div className="founding-border">
          <div className="founding">
            <div className="founding-copy">
              <span className="tag">
                <img src="/img/icons/award.svg" alt="" width={18} height={18} />
                Founding clients · first 5 only
              </span>
              <h2>Lock in founding rates for 6 months.</h2>
              <p>
                Be one of our first five clients and keep founding prices on every package and monthly plan for six
                months.
              </p>
              <div className="get-ask">
                <div className="get">
                  <h3>What you get</h3>
                  <ul>
                    {GET.map((item) => (
                      <li key={item}>
                        <img src="/img/icons/check-founding.svg" alt="" width={18} height={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ask">
                  <h3>What we ask</h3>
                  <ul>
                    {ASK.map((item) => (
                      <li key={item}>
                        <img src="/img/icons/plus-violet.svg" alt="" width={18} height={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="counter">
              <p className="label">Spots left</p>
              <p className="big grad-text">3 of 5</p>
              <img className="dots" src="/img/icons/spot-dots.svg" alt="" width={180} height={28} />
              <small>Closes Dec 31, or when 5 clients sign</small>
              <a href={BOOK_CALL} className="btn btn-primary btn-block">Claim a founding spot</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
