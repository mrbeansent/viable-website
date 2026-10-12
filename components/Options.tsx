import SectionHead from './SectionHead'

const ROWS = [
  ['Commitment', 'None', 'Monthly salary and benefits', 'No monthly commitment on projects'],
  ['Who is accountable', 'You', 'The employee, managed by you', 'We are. A named expert owns your project'],
  ['What you get', 'Fast drafts and quick pages', 'One person’s skills', 'A web expert, a marketing expert and specialist teams'],
  ['Speed to launch', 'Fast to start, slow to polish', 'Weeks to hire, weeks to ramp up', 'Live in 14 working days, or 10% off'],
  ['Cost to start', 'Low', 'High', 'Starting prices, fixed scope before you pay'],
  ['When something breaks', 'You work it out', 'Depends who is free', 'We fix it'],
]

export default function Options() {
  return (
    <section className="sec sec--white sec-options">
      <div className="container">
        <SectionHead
          eyebrow="Your options"
          eyebrowClassName="mint"
          title={
            <>
              AI tools, a full-time hire, or Viable Works.
              <br />
              Side by side.
            </>
          }
          lede="Each one can be the right choice. Here is where we fit."
        />
        <div className="table-wrap">
          <div className="compare" role="table">
            <div className="crow chead" role="row">
              <div className="head" role="columnheader" />
              <div className="head" role="columnheader">AI tools on their own</div>
              <div className="head" role="columnheader">A full-time hire</div>
              <div className="head vw" role="columnheader">Viable Works</div>
            </div>
            {ROWS.map(([label, ai, hire, vw]) => (
              <div key={label} className="crow" role="row">
                <div className="label" role="rowheader">{label}</div>
                <div role="cell" data-label="AI tools on their own">{ai}</div>
                <div role="cell" data-label="A full-time hire">{hire}</div>
                <div className="vw" role="cell" data-label="Viable Works">
                  <img src="/img/icons/check-green-sm.svg" alt="" width={20} height={20} />
                  {vw}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="closing">
          <img src="/img/icons/spark-green.svg" alt="" width={22} height={22} />
          <p>
            We use AI every day to move faster. We add the part it cannot: people who take responsibility for your
            results.
          </p>
        </div>
      </div>
    </section>
  )
}
