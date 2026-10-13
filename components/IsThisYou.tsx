import RequestButton from './request/RequestButton'

export default function IsThisYou() {
  return (
    <section className="is-you">
      <img className="tex" src="/img/bg/isyou.png" alt="" />
      <div className="container">
        <h2>Is this you? Let’s talk.</h2>
        <p>If one of those sounds like you, send us your link. We will tell you what we would fix first.</p>
        <div className="buttons">
          <RequestButton kind="audit" className="btn btn-dark">Request a free audit</RequestButton>
          <RequestButton kind="portfolio" className="btn btn-ghost-white">Request portfolio</RequestButton>
        </div>
      </div>
    </section>
  )
}
