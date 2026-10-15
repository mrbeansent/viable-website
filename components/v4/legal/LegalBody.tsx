import type { LegalBlock, LegalSection } from './types'
import LegalToc from './LegalToc'

// Renders **bold** markers as semibold spans.
function Runs({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="legal-strong">{part}</strong> : part,
      )}
    </>
  )
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === 'p') {
    return <p className="legal-p"><Runs text={block.text} /></p>
  }
  if (block.type === 'table') {
    return (
      <div className="legal-table" role="table">
        <div className="legal-table__head" role="row">
          <span role="columnheader">{block.head[0]}</span>
          <span role="columnheader">{block.head[1]}</span>
        </div>
        {block.rows.map(([a, b]) => (
          <div className="legal-table__row" role="row" key={a}>
            <span className="legal-table__cell-a" role="cell">{a}</span>
            <span className="legal-table__cell-b" role="cell">{b}</span>
          </div>
        ))}
      </div>
    )
  }
  const ordered = block.type === 'ol'
  return (
    <ul className="legal-list" role="list">
      {block.items.map((item, i) => (
        <li className="legal-list__item" key={i}>
          <span className="legal-list__mark" aria-hidden="true">{ordered ? `${i + 1}.` : '—'}</span>
          <span className="legal-list__text"><Runs text={item} /></span>
        </li>
      ))}
    </ul>
  )
}

// Sticky contents column plus the sections of copy.
export default function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="legal-body" data-qa="legal-body">
      <div className="legal-body__inner">
        <LegalToc items={sections.map((s) => ({ id: s.id, title: s.title }))} />
        <div className="legal-content">
          {sections.map((s) => (
            <section className="legal-section" id={s.id} key={s.id}>
              <h2 className="legal-section__title">{s.title}</h2>
              {s.blocks.map((b, i) => (
                <Block block={b} key={i} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
