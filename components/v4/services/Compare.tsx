import SvcHeading from './Heading'
import { COMPARE_ROWS } from './data'

export default function Compare() {
  return (
    <section id="compare" className="svc-sec svc-sec--light svc-sec--lines svc-compare" data-qa="services-compare">
      <div className="container">
        <SvcHeading label="Compare" title="A freelancer, doing it yourself, or Viable Works." note={<>Each one can be the right choice.<br />Here’s where we fit, honestly.</>} />
        <div className="svc-table-wrap">
          <table className="svc-table">
            <thead>
              <tr>
                <td />
                <th scope="col">A freelancer</th>
                <th scope="col">DIY with Canva and AI</th>
                <th scope="col" className="svc-table__us">Viable Works</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([k, a, b, c]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{a}</td>
                  <td>{b}</td>
                  <td className="svc-table__us">
                    <div className="svc-us">
                      <span className="svc-check">✓</span>
                      <span>{c}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
