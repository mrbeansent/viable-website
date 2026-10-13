import RequestButton from './request/RequestButton'

export default function FinalCta() {
  return (
    <section id="book" className="final">
      <div className="glow" />
      <div className="container">
        <p className="urgency">Free audit · no call needed</p>
        <h2>Stop losing inquiries that could become customers.</h2>
        <p>Request your free audit and know in 2 working days what is costing you inquiries and what to fix first.</p>
        <div className="buttons">
          <RequestButton kind="audit">Request a free audit</RequestButton>
          <RequestButton kind="portfolio" className="btn btn-ghost">Request portfolio</RequestButton>
        </div>
      </div>
    </section>
  )
}
