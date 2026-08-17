import { SiteContent } from '../models/content.models';

export const STATIC_SITE_CONTENT: SiteContent = {
  navigation: [
    { label: 'Home', route: '/' },
    { label: 'AARTO services', route: '/services' },
    { label: 'Understand AARTO', route: '/understand-aarto' },
    { label: 'Resources', route: '/resources' },
    { label: 'Tenders', route: '/tenders' },
    { label: 'Careers', route: '/careers' },
    { label: 'About RTIA', route: '/about' },
    { label: 'News & updates', route: '/news' },
    { label: 'Contact', route: '/contact' }
  ],
  hero: {
    eyebrow: 'Justice in adjudication',
    title: 'Know your notice.',
    accent: 'Know your next move.',
    description: 'A clearer way to access AARTO services, understand your options and find trusted information from RTIA.'
  },
  services: [
    {
      id: 'query', number: '01', title: 'Query my infringement',
      description: 'Check outstanding infringements and confirm their current status.',
      action: 'Open secure service', route: 'https://online.aarto.gov.za/', external: true, featured: true
    },
    {
      id: 'pay', number: '02', title: 'Pay an infringement',
      description: 'Review the amount due and complete payment through the secure AARTO platform.',
      action: 'Pay securely', route: 'https://online.aarto.gov.za/', external: true, featured: true
    },
    {
      id: 'nominate', number: '03', title: 'Nominate a driver',
      description: 'Nominate the person who was driving when the infringement occurred.',
      action: 'Review requirements', route: '/services#nominate'
    },
    {
      id: 'representation', number: '04', title: 'Make a representation',
      description: 'Submit reasons and supporting information for independent consideration.',
      action: 'Understand the process', route: '/services#representation', featured: true
    },
    {
      id: 'instalments', number: '05', title: 'Apply for instalments',
      description: 'Review the guidance for requesting an instalment payment arrangement.',
      action: 'View guidance', route: '/services#instalments'
    },
    {
      id: 'court', number: '06', title: 'Elect to be tried in court',
      description: 'Understand when the court option is available and what the choice means.',
      action: 'Understand this option', route: '/services#court'
    },
    {
      id: 'outlets', number: '07', title: 'Find a service outlet',
      description: 'Locate RTIA contact information and available in-person assistance.',
      action: 'Find assistance', route: '/contact#outlets'
    },
    {
      id: 'track', number: '08', title: 'Track my outcome',
      description: 'Return to the secure AARTO platform to check the latest recorded status.',
      action: 'Track online', route: 'https://online.aarto.gov.za/', external: true
    }
  ],
  journey: [
    {
      id: 'notice', number: '01', title: 'I received a notice',
      summary: 'Start by checking the notice details and response period.',
      guidance: 'Confirm the notice number, issuing authority, alleged infringement, penalty and the final date for taking action.',
      actionLabel: 'Understand the notice', actionRoute: '/understand-aarto#notice'
    },
    {
      id: 'options', number: '02', title: 'I need to choose an option',
      summary: 'Compare the actions available at your current stage.',
      guidance: 'Depending on the notice, options may include payment, nominating a driver, making a representation or another available election.',
      actionLabel: 'Compare my options', actionRoute: '/understand-aarto#options'
    },
    {
      id: 'action', number: '03', title: 'I am ready to act',
      summary: 'Use the correct channel and keep supporting documents.',
      guidance: 'Complete the chosen action before the deadline and retain payment confirmations, reference numbers and submitted documents.',
      actionLabel: 'View AARTO services', actionRoute: '/services'
    },
    {
      id: 'outcome', number: '04', title: 'I am awaiting an outcome',
      summary: 'Track the status using your reference details.',
      guidance: 'Use official channels to check progress. Keep your contact details current and respond promptly to any formal communication.',
      actionLabel: 'Track online', actionRoute: 'https://online.aarto.gov.za/'
    }
  ],
  impactStats: [
    { value: '32', label: 'day response period', detail: 'Always confirm the specific due date printed on your notice.' },
    { value: '50%', label: 'possible early-payment discount', detail: 'The applicable amount and period must be confirmed on the notice.' },
    { value: '9', label: 'provinces', detail: 'AARTO implementation is designed as a national administrative framework.' }
  ],
  publications: [
    { id: 'act-1998', title: 'AARTO Act 46 of 1998', category: 'Legislation', format: 'PDF', date: '1998', description: 'The principal legislation establishing the AARTO administrative framework.' },
    { id: 'amendment-2019', title: 'AARTO Amendment Act 4 of 2019', category: 'Legislation', format: 'PDF', date: '2019', description: 'Amendments relating to service, RTIA functions, rehabilitation and the Appeals Tribunal.' },
    { id: 'user-guide', title: 'AARTO website user guide', category: 'Guide', format: 'PDF', date: '2026', description: 'A step-by-step introduction to common online service journeys.' },
    { id: 'annual-report', title: 'RTIA Annual Report 2025/26', category: 'Annual report', format: 'PDF', date: '2026', description: 'Performance, governance and financial reporting for the year.' },
    { id: 'strategic-plan', title: 'RTIA Strategic Plan', category: 'Strategy', format: 'PDF', date: '2025', description: 'Strategic priorities, outcomes and implementation direction.' },
    { id: 'paia', title: 'PAIA Manual – English', category: 'PAIA', format: 'PDF', date: '2026', description: 'Information access guidance and formal request processes.' }
  ],
  news: [
    { id: 'phase-2', title: 'AARTO Phase 2 implementation proceeds as scheduled', category: 'Media statement', date: '01 July 2026', excerpt: 'An official update on the implementation programme, court outcome and service readiness.', featured: true },
    { id: 'outlets', title: 'AARTO service information for motorists', category: 'Public notice', date: '24 June 2026', excerpt: 'Plan your enquiry and understand the information to have ready before requesting assistance.' },
    { id: 'options-guide', title: 'Understand your options after receiving a notice', category: 'Public education', date: '12 June 2026', excerpt: 'A plain-language overview of the first decisions after an infringement notice.' },
    { id: 'road-safety', title: 'RTIA road-safety education programme', category: 'Programme update', date: '30 May 2026', excerpt: 'Highlights from public education, community engagement and road-user awareness activities.' }
  ],
  faqs: [
    { question: 'Where can I query an infringement?', answer: 'Use the secure AARTO online services platform or contact RTIA with your ID or notice number available.' },
    { question: 'Can I nominate another driver?', answer: 'Where this option is available, you may nominate the person who was in control of the vehicle and provide the required information.' },
    { question: 'How do I make a representation?', answer: 'Submit the reasons and supporting information through the approved AARTO channel before the applicable deadline.' },
    { question: 'What must I bring to an enquiry?', answer: 'Keep your South African ID or business details and the relevant infringement notice number ready.' }
  ],
  outlets: [
    {
      id: 'head-office', name: 'RTIA Head Office', province: 'Gauteng',
      address: '10 Matuka Close, Halfway House, Midrand, 1685', phone: '+27 87 285 0500',
      hours: 'Monday to Friday · operating hours to be confirmed',
      services: ['General enquiries', 'Public information', 'Stakeholder support']
    }
  ],
  tenders: [
    {
      id: 'ict-support-2026', reference: 'RTIA/ICT/2026/01',
      title: 'Managed application support and maintenance services', category: 'Information technology', status: 'Open',
      publishedDate: '12 August 2026', closingDate: '18 September 2026 · 11:00',
      briefing: 'Non-compulsory virtual briefing · date to be confirmed',
      description: 'Prototype procurement record for application support, service management and continuous improvement capabilities.',
      documents: ['Invitation to bid', 'Terms of reference', 'Pricing schedule', 'SBD forms']
    },
    {
      id: 'professional-panel-2026', reference: 'RTIA/SCM/2026/02',
      title: 'Panel of specialist professional services providers', category: 'Professional services', status: 'Upcoming',
      publishedDate: 'Publication date to be confirmed', closingDate: 'Closing date to be confirmed',
      briefing: 'Briefing arrangements will be published with the bid pack',
      description: 'Prototype record illustrating a future panel procurement opportunity and its CMS-managed publication lifecycle.',
      documents: ['Procurement notice', 'Scope of work', 'Evaluation criteria']
    },
    {
      id: 'facilities-2026', reference: 'RTIA/FAC/2026/03',
      title: 'Facilities management and office support services', category: 'Facilities', status: 'Open',
      publishedDate: '15 August 2026', closingDate: '25 September 2026 · 11:00',
      briefing: 'Compulsory site briefing · details to be confirmed',
      description: 'Prototype tender covering facilities coordination, planned maintenance and workplace support services.',
      documents: ['Bid specification', 'Site information', 'Service-level schedule', 'Returnable documents']
    },
    {
      id: 'annual-report-2026', reference: 'RTIA/COMMS/2026/04',
      title: 'Annual report design, production and distribution', category: 'Communications', status: 'Closed',
      publishedDate: '02 June 2026', closingDate: '03 July 2026 · 11:00',
      briefing: 'No briefing session',
      description: 'Prototype historical record showing how closed procurement opportunities remain searchable and transparent.',
      documents: ['Archived invitation', 'Archived specification', 'Closing register']
    }
  ],
  careers: [
    {
      id: 'applications-developer', reference: 'RTIA/HR/2026/18', title: 'Senior Applications Developer',
      department: 'Information and Communication Technology', location: 'Midrand, Gauteng', employmentType: 'Permanent', status: 'Open',
      closingDate: '04 September 2026', summary: 'Prototype vacancy for a senior developer supporting secure digital services, integration and software delivery capability.',
      requirements: ['Relevant ICT qualification', 'Full-stack application development experience', 'Secure SDLC and integration experience']
    },
    {
      id: 'scm-practitioner', reference: 'RTIA/HR/2026/19', title: 'Supply Chain Management Practitioner',
      department: 'Supply Chain Management', location: 'Midrand, Gauteng', employmentType: 'Permanent', status: 'Open',
      closingDate: '11 September 2026', summary: 'Prototype vacancy supporting compliant sourcing, bid administration, contract records and supplier coordination.',
      requirements: ['Relevant supply-chain qualification', 'Public-sector SCM knowledge', 'Strong governance and record-management capability']
    },
    {
      id: 'communications-officer', reference: 'RTIA/HR/2026/20', title: 'Stakeholder Communications Officer',
      department: 'Communications and Stakeholder Relations', location: 'National / Midrand', employmentType: 'Fixed term', status: 'Upcoming',
      closingDate: 'Opening date to be confirmed', summary: 'Prototype future opportunity supporting public education, campaigns and stakeholder communication.',
      requirements: ['Communications qualification', 'Public information writing capability', 'Stakeholder engagement experience']
    },
    {
      id: 'graduate-programme', reference: 'RTIA/GRAD/2027', title: 'Graduate Internship Programme',
      department: 'Multiple business units', location: 'Midrand, Gauteng', employmentType: '24-month programme', status: 'Upcoming',
      closingDate: 'Applications opening soon', summary: 'A structured prototype programme for emerging professionals across ICT, finance, legal, communications and administration.',
      requirements: ['South African graduate', 'Relevant completed qualification', 'Commitment to public service and professional growth']
    }
  ],
  supplierSteps: [
    { number: '01', title: 'Prepare your supplier profile', description: 'Keep CSD registration, tax compliance, ownership and contact information current.' },
    { number: '02', title: 'Review the complete bid pack', description: 'Confirm mandatory requirements, evaluation criteria, briefing details and submission instructions.' },
    { number: '03', title: 'Submit before closing', description: 'Use the stated channel, label submissions correctly and retain proof of submission.' },
    { number: '04', title: 'Track official outcomes', description: 'Monitor this portal for notices, clarifications, cancellations and award information.' }
  ],
  careerSteps: [
    { number: '01', title: 'Find the right opportunity', description: 'Review the purpose, minimum requirements, location and employment terms.' },
    { number: '02', title: 'Prepare your application', description: 'Use the prescribed form and include only the supporting information requested.' },
    { number: '03', title: 'Submit through the official channel', description: 'Apply before the closing time and retain the submission confirmation.' },
    { number: '04', title: 'Selection and feedback', description: 'Shortlisted candidates may be assessed, verified and contacted through official RTIA channels.' }
  ],
  cultureValues: [
    { number: '01', title: 'Public impact', description: 'Build services and programmes that make road-user journeys clearer, fairer and safer.' },
    { number: '02', title: 'Integrity', description: 'Work transparently, protect public trust and make responsible decisions.' },
    { number: '03', title: 'Professional growth', description: 'Strengthen specialist capability through learning, collaboration and purposeful delivery.' },
    { number: '04', title: 'Inclusive service', description: 'Design information and services around the diverse needs of South African road users.' }
  ],
  lastUpdated: '17 August 2026'
};
