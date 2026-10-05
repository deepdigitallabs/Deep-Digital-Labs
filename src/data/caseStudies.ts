export interface Metric {
  label: string;
  value: string;
  change: string;
}

export type ProjectCategory = 'Business' | 'Civic & Public';
export type BusinessSector = 'CA' | 'Agriculture' | 'Dairy' | 'Logistics' | 'Manufacturing' | 'Healthcare' | 'Civic & Public';

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  category: string;
  projectType: ProjectCategory;
  sector: BusinessSector;
  industry: string;
  service: 'SaaS' | 'Web' | 'Mobile';
  liveUrl: string;
  summary: string;
  heroImage: string;
  accentColor: string;
  tags: string[];
  techStack: string[];
  
  // Structured evidence framework: Problem, What We Built, Result, Before -> After
  problem: string;
  whatWeBuilt: string;
  result: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  
  // Verifiable outcome highlights
  evidenceHighlights: {
    label: string;
    description: string;
  }[];
  
  architectureHighlights: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  // =========================================================================
  // 1. BUSINESS PROJECTS (Commercial Core: CA, Dairy, Agriculture, Logistics)
  // =========================================================================
  {
    slug: 'rahul-b-kavale-and-co',
    title: 'Rahul B. Kavale & Co.',
    client: 'Rahul B. Kavale & Co.',
    location: 'Pune / Maharashtra, India',
    category: 'Corporate Web Presence & Client Advisory Portal',
    projectType: 'Business',
    sector: 'CA',
    industry: 'Chartered Accountancy & Tax Advisory',
    service: 'Web',
    liveUrl: 'https://rahulbkavaleandco.com/',
    summary: 'Built a fast, authoritative corporate website and secure advisory inquiry pipeline for a prominent Chartered Accountancy firm.',
    heroImage: '/images/case-studies/rahul-b-kavale.jpg',
    accentColor: '#06b6d4',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    techStack: ['Next.js 15', 'React', 'Tailwind CSS', 'Vercel Edge'],
    problem: 'The firm relied primarily on offline word-of-mouth. Prospective corporate clients looking for corporate taxation and statutory audit services had no reliable way to verify credentials or submit confidential advisory inquiries online.',
    whatWeBuilt: 'A high-speed corporate web platform featuring structured practice area breakdowns, verified partner credentials, automated inquiry routing, and instant mobile responsiveness.',
    result: 'Prospective business clients can now review credentials, explore audit/tax solutions, and initiate advisory consultations directly through a secure, professional portal.',
    beforeAfter: {
      before: 'Zero digital presence, reliance on fragmented offline referrals, unverified contact channels.',
      after: 'Authoritative corporate web portal, instant mobile loading, and structured inbound client inquiries.'
    },
    evidenceHighlights: [
      { label: 'Mobile Performance', description: '95+ Google PageSpeed score with zero layout shift on mobile screens.' },
      { label: 'Inquiry Routing', description: 'Secure form-to-inbox dispatch with automated spam filtering and lead classification.' },
      { label: 'Practice Breakdown', description: 'Dedicated sections for Direct Tax, GST, Statutory Audit, and Corporate Advisory.' }
    ],
    architectureHighlights: [
      'High-performance Next.js SSR architecture delivering instant page transitions',
      'Clean typography and authoritative corporate color palette designed to build institutional trust',
      'Encrypted inquiry pipeline routing confidential client details directly to partners',
      'Automated SEO meta tags for local Pune CA and corporate tax search visibility'
    ],
    testimonial: {
      quote: 'Deep Digital Labs gave our firm an exceptional digital presence. The website loads instantaneously and our prospective corporate clients immediately comment on how professional and seamless the experience is.',
      author: 'Rahul B. Kavale',
      role: 'Managing Partner',
      company: 'Rahul B. Kavale & Co.'
    },
    featured: true
  },
  {
    slug: 'dairy-flow-pro',
    title: 'Dairy Flow Pro',
    client: 'Deep Digital Labs (In-House Product)',
    location: 'Pune / Maharashtra, India',
    category: 'Enterprise Dairy ERP & Automated Billing SaaS',
    projectType: 'Business',
    sector: 'Dairy',
    industry: 'Dairy Processing & Agri-Software',
    service: 'SaaS',
    liveUrl: 'https://dairy-flow-pro.vercel.app/',
    summary: 'Engineered an end-to-end multi-tenant dairy ERP platform solving milk collection logging, dynamic fat/SNF pricing, and billing reconciliation.',
    heroImage: '/images/case-studies/dairy-flow-pro.jpg',
    accentColor: '#3b82f6',
    tags: ['Next.js', 'PostgreSQL', 'Node.js', 'Tailwind CSS', 'In-House Product'],
    techStack: ['Next.js 15', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    problem: 'Milk collection centers managed procurement using handwritten physical registers. Calculating dynamic fat and SNF pricing by hand caused slow queues, billing discrepancies, and weekly disputes with farmers.',
    whatWeBuilt: 'A full-cycle cloud SaaS platform with automated rate-chart formula engines, real-time morning/evening collection sheets, SMS slip alerts, and role-based permissions.',
    result: 'Replaced manual register arithmetic with automated sub-second calculation, eliminating reconciliation disputes and giving management live visibility across all collection points.',
    beforeAfter: {
      before: 'Handwritten registers, delayed weekly rate calculations, frequent billing disputes with dairy farmers.',
      after: 'Automated digital collection logging, instant dynamic pricing calculations, and dispute-free farmer settlements.'
    },
    evidenceHighlights: [
      { label: 'Calculation Engine', description: 'Instant dynamic rate lookup based on FAT/SNF matrices computed in under 50ms.' },
      { label: 'Multi-Center Support', description: 'Multi-tenant database schema separating chilling centers while giving central admin oversight.' },
      { label: 'Reporting & Export', description: 'One-click daily procurement summary exports compatible with accounting software.' }
    ],
    architectureHighlights: [
      'Fast Server-Side Rendering (SSR) optimized for heavy tabular collection data',
      'Automated dynamic rate calculation engine with instant farmer invoice slip generation',
      'Granular Role-Based Access Control (RBAC) separating Admins, Field Operators, and Farmers',
      'Database transaction isolation preventing duplicate entries during concurrent collection rushes'
    ],
    testimonial: {
      quote: 'Dairy Flow Pro was built from firsthand fieldwork in dairy cooperatives. It eliminates manual register errors and gives collection managers complete operational and financial control.',
      author: 'Product Engineering Team',
      role: 'In-House Venture Lead',
      company: 'Dairy Flow Pro (Deep Digital Labs)'
    },
    featured: true
  },
  {
    slug: 'yashodeep-agro',
    title: 'Yashodeep Agro',
    client: 'Yashodeep Agro',
    location: 'Maharashtra, India',
    category: 'Agri-Tech Digital Catalog & Operations Portal',
    projectType: 'Business',
    sector: 'Agriculture',
    industry: 'Agri-Tech & Agricultural Commerce',
    service: 'Web',
    liveUrl: 'https://yashodeep-agro.vercel.app/',
    summary: 'Engineered a mobile-first digital product catalog and WhatsApp order funnel tailored for farmers and agricultural distributors.',
    heroImage: '/images/case-studies/yashodeep-agro.jpg',
    accentColor: '#10b981',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    techStack: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp Business API'],
    problem: 'Product pricing and inventory were shared manually through paper price sheets and phone calls, causing order delays, pricing confusion, and limited reach beyond local dealers.',
    whatWeBuilt: 'A lightweight, mobile-optimized digital catalog with real-time product specs, seed and fertilizer availability, and direct one-tap WhatsApp inquiry ordering.',
    result: 'Farmers and rural distributors can check accurate product details and place structured orders directly via WhatsApp, even on spotty 3G/4G connections.',
    beforeAfter: {
      before: 'Manual paper price sheets, constant phone coordination, delayed order confirmations.',
      after: 'Centralized live digital catalog with instant one-tap WhatsApp inquiries and rural mobile optimization.'
    },
    evidenceHighlights: [
      { label: 'Rural Connectivity', description: 'Ultra-lightweight bundle footprint designed to load smoothly under 2 seconds on 3G/4G networks.' },
      { label: 'WhatsApp Funnel', description: 'Pre-filled WhatsApp message generator with SKU code, pack size, and dealer location.' },
      { label: 'Product Organization', description: 'Categorized SKUs for seeds, crop nutrients, and bio-fertilizers with application guides.' }
    ],
    architectureHighlights: [
      'Low-bandwidth performance optimization tailored for farmers on budget smartphones',
      'Centralized digital product and service catalog easily manageable by the operations team',
      'Direct click-to-WhatsApp order dispatch removing customer onboarding friction',
      'Static page generation for maximum reliability during peak seasonal planting surges'
    ],
    testimonial: {
      quote: 'Moving our product catalog to the web with Deep Digital Labs replaced messy phone coordination with direct WhatsApp orders. Our distributors can check specifications and availability in seconds.',
      author: 'Operations Director',
      role: 'Head of Supply Chain',
      company: 'Yashodeep Agro'
    },
    featured: true
  },
  {
    slug: 'trust-carry-logistics',
    title: 'Trust Carry Logistics',
    client: 'Trust Carry Logistics',
    location: 'Navi Mumbai / Pune, India',
    category: 'Commercial Fleet Showcase & Consignment Tracking Portal',
    projectType: 'Business',
    sector: 'Logistics',
    industry: 'Logistics & Supply Chain',
    service: 'Web',
    liveUrl: 'https://trustcarrylogistics.vercel.app/',
    summary: 'Engineered a commercial logistics portal with self-serve consignment tracking and structured B2B freight quotation inquiries.',
    heroImage: '/images/case-studies/trust-carry.jpg',
    accentColor: '#6366f1',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
    problem: 'The customer service desk was constantly tied up answering repetitive phone calls for shipment status updates. Furthermore, the company lacked a professional digital fleet showcase when bidding for corporate freight tenders.',
    whatWeBuilt: 'A clean corporate logistics platform featuring an interactive "Track Shipment" waypoint lookup tool, detailed vehicle fleet payload specifications, and a streamlined B2B freight quote builder.',
    result: 'Commercial clients can now check shipment milestones independently online, reducing repetitive status phone calls and providing a credible portfolio for corporate contracts.',
    beforeAfter: {
      before: 'Endless status phone calls to dispatch desk, no digital fleet portfolio, lost corporate tender opportunities.',
      after: 'Self-serve shipment lookup online, authoritative fleet specs, and direct structured B2B freight inquiries.'
    },
    evidenceHighlights: [
      { label: 'Consignment Lookup', description: 'Simple waypoint tracker allowing clients to check consignment status using their LR/tracking number.' },
      { label: 'Fleet Showcase', description: 'Detailed specs (payload capacity, container dimensions, route coverage) for industrial clients.' },
      { label: 'B2B RFQ Funnel', description: 'Structured freight quote request capturing origin, destination, cargo weight, and schedule.' }
    ],
    architectureHighlights: [
      'Interactive shipment tracking search bar with instant waypoint status lookup',
      'Commercial fleet specification showcase with payload and capacity details',
      'High-performance query pipeline delivering quick consignment lookups',
      'High-converting B2B quote request module connected directly to sales dispatch'
    ],
    testimonial: {
      quote: 'Our enterprise clients now check consignment milestones online instead of calling dispatch. It raised our company profile immediately during corporate freight contract tenders.',
      author: 'Logistics Director',
      role: 'Operations Head',
      company: 'Trust Carry Logistics'
    },
    featured: true
  },

  // =========================================================================
  // 2. CIVIC & PUBLIC INITIATIVES (Separate Category: Civic & Public Portals)
  // =========================================================================
  {
    slug: 'santosh-phadtare-portal',
    title: 'Santosh Phadtare Civic Initiative',
    client: 'Santosh Phadtare Constituency Office',
    location: 'Maharashtra, India',
    category: 'Civic Outreach & Community Portal',
    projectType: 'Civic & Public',
    sector: 'Civic & Public',
    industry: 'Civic & Public Outreach',
    service: 'Web',
    liveUrl: 'https://santosh-phadtare.vercel.app/',
    summary: 'Engineered a centralized public portal mobilizing community volunteers and establishing a verified channel for civic initiatives.',
    heroImage: '/images/case-studies/santosh-phadtare.jpg',
    accentColor: '#f59e0b',
    tags: ['Next.js', 'Firebase', 'Vercel Edge', 'Tailwind CSS'],
    techStack: ['Next.js', 'Firebase', 'Vercel Edge Network', 'Tailwind CSS'],
    problem: 'Constituent communication and volunteer coordination were scattered across unverified social channels, making it difficult for citizens to access official development statements and join civic activities.',
    whatWeBuilt: 'An official engagement portal featuring verified volunteer onboarding forms, event schedules, development vision repository, and a direct press release publishing engine.',
    result: 'Established an authentic, verified digital headquarters that reliably handles viral traffic surges and routes volunteer registrations directly to coordinators.',
    beforeAfter: {
      before: 'Scattered social messaging, unverified updates, lack of central volunteer management.',
      after: 'Verified official web hub, structured volunteer intake forms, and direct constituent communication.'
    },
    evidenceHighlights: [
      { label: 'High-Traffic Stability', description: 'Edge-cached architecture engineered to maintain zero downtime during major public announcements.' },
      { label: 'Volunteer Intake', description: 'Streamlined mobile-friendly form funnel routing volunteer signups directly into a central database.' },
      { label: 'Press Archive', description: 'Searchable timeline of verified press releases, speeches, and developmental initiatives.' }
    ],
    architectureHighlights: [
      'Streamlined volunteer onboarding workflow optimized for mobile device signups',
      'Real-time public event and meeting calendar with localized venue directions',
      'Digital manifesto repository and instantaneous press release publishing engine',
      'Vercel Edge Network distribution ensuring reliable page loads during peak viral traffic'
    ],
    testimonial: {
      quote: 'The portal engineered by Deep Digital Labs gave our initiative a verified, authoritative home. It streamlined volunteer registrations and allowed us to reach citizens directly.',
      author: 'Constituency Office',
      role: 'Chief Digital Strategist',
      company: 'Santosh Phadtare Constituency Office'
    },
    featured: false
  },
  {
    slug: 'shivsena-sangola',
    title: 'Sangola Vikas Sankalp',
    client: 'Sangola Civic Development Initiative',
    location: 'Sangola, Maharashtra, India',
    category: 'Civic Development Tracker & Public Progress Portal',
    projectType: 'Civic & Public',
    sector: 'Civic & Public',
    industry: 'Civic Infrastructure & Public Works',
    service: 'Web',
    liveUrl: 'https://shivsena-sangola.vercel.app/',
    summary: 'Built a lightweight, mobile-first civic portal with an interactive Development Tracker for community projects and public feedback.',
    heroImage: '/images/case-studies/shivsena-sangola.jpg',
    accentColor: '#ea580c',
    tags: ['Next.js SSG', 'Edge Caching', 'Tailwind CSS'],
    techStack: ['Next.js SSG', 'Edge Caching', 'Tailwind CSS'],
    problem: 'Citizens had no single platform to inspect the status of public infrastructure projects, road works, and community initiatives, leading to misinformation and lack of transparency.',
    whatWeBuilt: 'A mobile-optimized civic tracker displaying completed and ongoing development works with photo documentation, milestone statuses, and a direct citizen grievance form.',
    result: 'Citizens can visually verify local development progress in their wards and submit community requests directly to coordinators.',
    beforeAfter: {
      before: 'Zero photographic records of civic works, citizen confusion, lack of verified progress channel.',
      after: 'Transparent visual development tracker with milestone photos and direct citizen grievance submission.'
    },
    evidenceHighlights: [
      { label: 'Visual Progress Tracker', description: 'Project cards showcasing photographic proof, project budgets, and completion milestones.' },
      { label: 'Low-Bandwidth Mobile', description: 'Pre-rendered static HTML that loads reliably on entry-level smartphones and 2G/3G connections.' },
      { label: 'Constituent Feedback', description: 'Direct grievance intake routing citizen issues to local ward representatives.' }
    ],
    architectureHighlights: [
      'Static site generation (SSG) for ultra-fast, resilient loading regardless of network congestion',
      'Interactive visual tracker showcasing completed and ongoing community projects',
      'Fast responsive design optimized for high-volume regional smartphone browsing',
      'Direct feedback intake connecting constituents directly to community coordinators'
    ],
    testimonial: {
      quote: 'The visual project tracker brought real transparency to our local civic works. Citizens can see verified photos and progress reports for their own neighbourhoods.',
      author: 'Campaign Coordinator',
      role: 'Civic Outreach Coordinator',
      company: 'Sangola Civic Development Initiative'
    },
    featured: false
  },
  {
    slug: 'pasarnikar-payal-amit',
    title: 'Pasarnikar Payal Amit',
    client: 'Pasarnikar Payal Amit',
    location: 'Maharashtra / India',
    category: 'Public Spokesperson & Media Archive Portal',
    projectType: 'Civic & Public',
    sector: 'Civic & Public',
    industry: 'Public Spokesperson & Media',
    service: 'Web',
    liveUrl: 'https://pasarnikar-payal-amit.vercel.app/',
    summary: 'Designed an authoritative personal branding hub organizing public speeches, television interviews, and press contact routing.',
    heroImage: '/images/case-studies/pasarnikar-payal-amit.jpg',
    accentColor: '#ec4899',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    problem: 'Media interviews, public statements, and conference speeches were scattered across various social media platforms without a unified official platform for journalists and event organizers.',
    whatWeBuilt: 'A polished, modern spokesperson portal featuring a curated multimedia archive, official biographical statements, key policy perspectives, and an official press inquiry channel.',
    result: 'Journalists, television networks, and event coordinators have a verified point of contact to access official press assets and submit interview requests.',
    beforeAfter: {
      before: 'Scattered social links, lost media interview inquiries, no central official bio or press kit.',
      after: 'Curated high-definition media archive, downloadable official press assets, and verified contact channel.'
    },
    evidenceHighlights: [
      { label: 'Media Archive', description: 'Structured catalog of televised debates, public rallies, and keynote video statements.' },
      { label: 'Press Inquiries', description: 'Dedicated interview and speaking engagement request channel for event organizers.' },
      { label: 'Brand Presentation', description: 'Smooth, elegant scroll physics and typography establishing a credible public presence.' }
    ],
    architectureHighlights: [
      'Interactive scroll animations creating an authoritative, modern public profile',
      'Comprehensive media archive organizing televised debates, public speeches, and press releases',
      'Direct press engagement funnel connecting journalists to official representatives',
      'Fast static image and video asset delivery optimized for smooth mobile viewing'
    ],
    testimonial: {
      quote: 'Having an official digital home for our public statements and speaking engagements brought tremendous clarity. Journalists and event organizers now reach us directly through our verified portal.',
      author: 'Payal & Amit Pasarnikar',
      role: 'Spokespersons & Leaders',
      company: 'Pasarnikar Payal Amit'
    },
    featured: false
  }
];
