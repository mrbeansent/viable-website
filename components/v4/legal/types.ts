// Shared shape for legal copy. In text, **double asterisks** mark semibold runs.
export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'table'; head: [string, string]; rows: [string, string][] }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}
