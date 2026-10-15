// Privacy Policy copy (Figma 225:407). **text** marks semibold runs.
import type { LegalSection } from './types'

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 's1',
    title: '1. Who is responsible for your information',
    blocks: [
      { type: 'p', text: `Viable Works is the brand of Viable Digital Marketing Services, a general partnership registered with the Securities and Exchange Commission of the Philippines. Our business address is **020 Central Biasong, Biasong, Cebu, Philippines**.` },
      { type: 'p', text: `We are the personal information controller for information used to manage inquiries, our website and client relationships.` },
      { type: 'p', text: `**Data Protection Officer:** Belinda Ely Berber, with Amiel Vincent Cañas as alternate. Contact **info@viable-works.com** with the subject "Privacy request."` },
      { type: 'p', text: `This policy covers website visitors, prospective clients, individual clients and people representing business clients.` },
    ],
  },
  {
    id: 's2',
    title: '2. Information we use',
    blocks: [
      { type: 'p', text: `Depending on how you interact with us, we use:` },
      {
        type: 'ul',
        items: [
          `**Contact and business details:** your name, business name, email address, phone or messaging details, and website or social page address.`,
          `**Inquiry and assessment information:** what you tell us about your business, goals, budget, timing, challenges and requested services, and any resulting audit, recommendation or quote.`,
          `**Communications:** messages, emails, call and appointment details, feedback and approvals.`,
          `**Client and project records:** agreements, billing details, invoices, payment references, tax documents such as BIR Form 2307, project files and information needed to deliver the service.`,
          `**Source information:** how you found us, and the form, quiz, button or offer linked to your inquiry.`,
          `**Technical information:** information needed to deliver and protect the website, such as IP address, browser details and service logs.`,
        ],
      },
      { type: 'p', text: `We get this information from you, from someone authorised by your business, from our dealings with you, and from public business pages you ask us to review. Banks, e-wallets, PayPal and Wise may send us payment confirmations.` },
      { type: 'p', text: `We mark required fields. If you don’t provide required information, we may not be able to answer your request or deliver a service. Optional details and marketing choices are never required to buy a service.` },
      { type: 'p', text: `Please do not send passwords, full card details, patient records or other sensitive personal information through public forms or chat. A project that needs such information uses a separately agreed, secure method.` },
    ],
  },
  {
    id: 's3',
    title: '3. Purposes and legal bases',
    blocks: [
      { type: 'p', text: `We use information to answer requests, understand your needs, prepare audits and quotes, deliver agreed services, manage payments, protect our operations and meet legal duties.` },
      {
        type: 'table',
        head: ['PURPOSE', 'LEGAL BASIS'],
        rows: [
          ['Answering your inquiry, preparing an audit or quote, delivering a service you contract for', 'Steps you ask for before a contract, and performance of the contract'],
          ['Dealing with representatives of business clients', 'Our legitimate interest in managing the business relationship'],
          ['Invoices, tax and accounting records', 'Legal obligation'],
          ['Security, complaints, legal claims, understanding where inquiries come from', 'Legitimate interests, balanced against your rights'],
          ['Optional follow-up emails and promotions', 'Your consent'],
        ],
      },
      { type: 'p', text: `We do not treat reading this policy as consent to unrelated uses.` },
    ],
  },
  {
    id: 's4',
    title: '4. Messages and marketing choices',
    blocks: [
      { type: 'p', text: `When you request information or a free audit, we send the response and the messages needed to deliver it. That does not sign you up for marketing.` },
      { type: 'p', text: `Our forms offer two separate, optional choices: up to two follow-up emails about your audit, and ongoing tips and offers. Neither is needed to receive the audit or buy a service. We record your choices, and a phone or messaging number you give us is not permission for promotions.` },
      { type: 'p', text: `You can unsubscribe through the link in any promotional email, or by emailing info@viable-works.com. Unsubscribing does not stop necessary messages about an active service, invoice, security issue or privacy request.` },
    ],
  },
  {
    id: 's5',
    title: '5. Recommendations, automation and AI',
    blocks: [
      { type: 'p', text: `Our "Find your fix" quiz matches your answers against fixed rules to suggest a starting service. A suggestion is a starting point for a conversation, not a price, a commitment or a decision about your rights. A team member reviews it on request. Budget and timing answers help us size a quote.` },
      { type: 'p', text: `We use ordinary workflow automation to route inquiries, send the messages you asked for and run the follow-ups you chose. We remain responsible for that processing.` },
      { type: 'p', text: `We may use business-grade AI tools to help draft and analyse work. We only use services whose terms do not allow them to train their models on what we enter, and we enter only the personal information needed for the task. We do not use AI tools to make decisions that have legal or similarly significant effects on you.` },
    ],
  },
  {
    id: 's6',
    title: '6. Who can access your information',
    blocks: [
      { type: 'p', text: `Authorised members of the Viable Works team access information as needed for their role. Specialists on a project get only the access their task needs and are bound by confidentiality.` },
      { type: 'p', text: `We use service providers for website hosting, forms, CRM, business email, scheduling, file storage, analytics and payments (bank, e-wallet, PayPal and Wise). They may process information only for the purposes in this policy, under terms requiring appropriate safeguards. Ask us for the providers relevant to your records.` },
      { type: 'p', text: `Banks, e-wallets, PayPal, Wise and messaging apps also process information for their own purposes under their own privacy policies. This policy covers only Viable’s handling.` },
      { type: 'p', text: `We may disclose information when the law requires it, to get professional advice, or to establish, exercise or defend legal rights, with appropriate limits.` },
    ],
  },
  {
    id: 's7',
    title: '7. Processing locations',
    blocks: [
      { type: 'p', text: `Viable operates in the Philippines. Our cloud providers and their support teams may process information in other countries. Where they do, we remain responsible and use contractual and other safeguards the law requires. Contact info@viable-works.com for details about the locations relevant to your records.` },
    ],
  },
  {
    id: 's8',
    title: '8. Cookies, analytics and similar technology',
    blocks: [
      { type: 'p', text: `Our website uses only the technical processing needed to deliver and secure it, unless you choose otherwise.` },
      { type: 'p', text: `Optional analytics and advertising tools, such as Google Analytics or a Meta pixel, run only after you accept them in our cookie banner. The banner explains each tool’s purpose, provider and duration, and you can change your choice at any time. We do not track email opens or clicks without first explaining it in the relevant sign-up.` },
    ],
  },
  {
    id: 's9',
    title: '9. Retention and deletion',
    blocks: [
      {
        type: 'table',
        head: ['INFORMATION', 'HOW LONG WE KEEP IT'],
        rows: [
          ['Inquiries and audits that do not become client work', '12 months after the last real interaction. An automated promotional email does not restart this period'],
          ['Client project files and correspondence', '2 years after the project ends or the service relationship ends, whichever is later'],
          ['Accounting records, invoices and tax documents', 'The period required by Philippine tax and recordkeeping laws'],
          ['Records needed for a dispute, claim or investigation', 'Until the matter is resolved and related legal duties are met'],
          ['Marketing preferences and consent records', 'While you are subscribed. After you opt out, only what we need to avoid contacting you again'],
          ['Technical logs and backups', 'Only as long as needed for security, recovery or a legal purpose'],
        ],
      },
      { type: 'p', text: `When a retention period ends, we delete or anonymise the information. Backups kept for recovery are never used to restart marketing or normal use of deleted records.` },
      { type: 'p', text: `Keep your own copies of project files after handover. Our retention rules are not a file-storage service.` },
    ],
  },
  {
    id: 's10',
    title: '10. Information we handle for clients',
    blocks: [
      { type: 'p', text: `Some projects require us to handle information a client controls, such as its customer list or website inquiries. We process it as the client’s personal information processor, only on the client’s documented instructions and under our service agreement. The client’s own privacy notice explains its collection and purposes.` },
      { type: 'p', text: `We return or delete that information within 30 calendar days after the work ends, unless the law requires otherwise. The 2-year rule for our own project records does not let us keep a client’s customer database.` },
      { type: 'p', text: `If you contact us about information a client controls, we will direct your request to that client and give the help required of us.` },
    ],
  },
  {
    id: 's11',
    title: '11. Security and breaches',
    blocks: [
      { type: 'p', text: `We apply reasonable organisational, physical and technical safeguards to the information we handle, and limit access to authorised people who need it. No online service is completely secure, so we cannot promise that it never will be breached.` },
      { type: 'p', text: `If a breach affects personal information, we assess it promptly. We notify the National Privacy Commission and affected people where the law requires. Where the information belongs to a client, we notify that client within 48 hours of becoming aware of the breach. Report a suspected privacy or security problem to info@viable-works.com.` },
    ],
  },
  {
    id: 's12',
    title: '12. Your rights and requests',
    blocks: [
      { type: 'p', text: `Subject to the law, you may:` },
      {
        type: 'ul',
        items: [
          `be informed about how we process your information;`,
          `access it and get a copy, including an electronic copy where applicable;`,
          `correct inaccurate information;`,
          `object to processing, or withdraw consent;`,
          `ask us to block, remove or delete it; and`,
          `claim damages and file a complaint with the National Privacy Commission (privacy.gov.ph).`,
        ],
      },
      { type: 'p', text: `Email info@viable-works.com with what you would like us to do. Our Data Protection Officer handles requests. We may ask for reasonable information to confirm your identity and find your records. We reply within the period the law requires and explain any lawful reason we cannot fully meet a request.` },
      { type: 'p', text: `Withdrawing consent does not undo earlier lawful processing. We may need to keep some information for a legal duty or a valid claim.` },
    ],
  },
  {
    id: 's13',
    title: '13. Age and changes to this policy',
    blocks: [
      { type: 'p', text: `Paid services are available only to people aged 18 or older. Our website is not directed to children. If you believe a child has given us personal information, contact us and we will deal with it.` },
      { type: 'p', text: `We update this policy when our practices change and show the latest date at the top. We give advance notice and ask for new consent where the law requires. An update does not by itself permit a new use of information we already hold.` },
    ],
  },
]
