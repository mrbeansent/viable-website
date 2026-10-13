import { BOOK_CALL } from './links'

const GET = ['Founding price on every package', 'Monthly rates locked for 6 months', 'Priority booking for your project']
const ASK = ['A short testimonial', 'Permission to share your results', 'Introductions to people like you. Optional']

const SPOTS_TAKEN = 2
const SPOTS_TOTAL = 5

// Two outlined circles (taken) and three filled ones (left), as in the design.
function SpotDots() {
  return (
    <svg className="dots" viewBox="0 0 180 28" width={180} height={28} role="img" aria-label={`${SPOTS_TOTAL - SPOTS_TAKEN} of ${SPOTS_TOTAL} spots left`}>
      <defs>
        <linearGradient id="spot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b6cf6" />
          <stop offset="1" stopColor="#43268f" />
        </linearGradient>
      </defs>
      {Array.from({ length: SPOTS_TOTAL }, (_, i) => {
        const cx = 14 + i * 38
        return i < SPOTS_TAKEN ? (
          <circle key={i} cx={cx} cy={14} r={13} fill="none" stroke="#a9a9c0" strokeWidth={1.5} />
        ) : (
          <circle key={i} cx={cx} cy={14} r={13} fill="url(#spot)" />
        )
      })}
    </svg>
  )
}

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
                <img src="/img/icons2/f-award.svg" alt="" width={18} height={18} />
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
                        <img src="/img/icons2/f-check.svg" alt="" width={18} height={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ask">
                  <h3>In return, only if you are happy</h3>
                  <ul>
                    {ASK.map((item) => (
                      <li key={item}>
                        <img src="/img/icons2/f-plus.svg" alt="" width={18} height={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="counter">
              <p className="label">Spots left</p>
              <p className="big">{SPOTS_TOTAL - SPOTS_TAKEN} of {SPOTS_TOTAL}</p>
              <SpotDots />
              <small>Closes Dec 31, or when all 5 spots are taken</small>
              <a href={BOOK_CALL} className="btn btn-primary btn-block">Claim a founding spot</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
