import Link from 'next/link'
import { FREE_AUDIT } from '@/components/links'

export default function Founding() {
  return (
    <section className="home-dark home-founding" data-qa="home-founding">
      <div className="container">
        <div className="home-founding__border">
          <div className="home-founding__card">
            <div className="home-founding__main">
              <p className="t-label home-founding__label">Founding clients</p>
              <h2 className="home-founding__title">Be one of our first five clients and lock in founding rates for six months.</h2>
              <div className="home-founding__cols">
                <div>
                  <p className="t-label c-aqua">You get</p>
                  <p>— Founding price on every package</p>
                  <p>— Monthly rates locked for 6 months</p>
                  <p>— Priority booking for your project</p>
                </div>
                <div>
                  <p className="t-label c-violet">In return</p>
                  <p>— Permission to feature your project and results</p>
                  <p>— A short testimonial, only if you’re happy</p>
                  <p>— Introductions, only if you want</p>
                </div>
              </div>
            </div>
            <div className="home-founding__offer">
              <p className="t-label home-founding__open">Open to</p>
              <p className="home-founding__count">3/5</p>
              <p className="home-founding__text">founding clients, until Dec 31, 2026</p>
              <Link href={FREE_AUDIT} className="btn btn--primary">Claim a founding spot <span className="btn__arrow">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
