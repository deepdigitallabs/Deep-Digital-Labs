export interface Metric {
  label: string;
  value: string;
  change: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  category: string;
  industry: 'Corporate' | 'Agri-Tech' | 'Civic Tech' | 'Logistics' | 'Personal Branding' | 'FinTech' | 'HealthTech' | string;
  service: 'SaaS' | 'Web' | 'Mobile';
  liveUrl: string;
  summary: string;
  heroImage: string;
  accentColor: string;
  tags: string[];
  keyResult?: string;
  metrics?: Metric[];
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'rahul-b-kavale-and-co',
    title: 'Rahul B. Kavale & Co.',
    client: 'Rahul B. Kavale & Co.',
    location: 'Maharashtra, India',
    category: 'Corporate Web Presence & Client Portal',
    industry: 'Corporate',
    service: 'Web',
    liveUrl: 'https://rahulbkavaleandco.com/',
    summary: 'Architected a 100% Lighthouse-scoring corporate website for a premier professional services firm, generating a 35% increase in verified inbound client inquiries.',
    heroImage: '/images/case-studies/rahul-b-kavale.jpg',
    accentColor: '#06b6d4',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    keyResult: '35% surge in verified inbound corporate inquiries',
    metrics: [
      { label: 'Inbound Inquiries', value: '+35%', change: 'First 3 months' },
      { label: 'Edge Availability', value: '99.99%', change: 'Global CDN' }
    ],
    challenge: 'A prominent professional services firm needed a modern, trustworthy digital presence that reflected their expertise, loaded instantly, and provided a seamless way for clients to initiate contact securely.',
    solution: 'We architected a blazing-fast, SEO-optimized corporate website. We implemented a clean, professional UI with intuitive navigation, secure inquiry forms, and a mobile-first responsive design to ensure accessibility across all devices.',
    architectureHighlights: [
      'Edge-rendered cloud architecture deployed across global content delivery networks',
      '100% Lighthouse Performance, Accessibility, and Core Web Vitals rating',
      'Encrypted client inquiry pipeline with zero-latency spam protection',
      'Responsive design system tailored for high-net-worth client trust'
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
    slug: 'yashodeep-agro',
    title: 'Yashodeep Agro',
    client: 'Yashodeep Agro',
    location: 'Maharashtra, India',
    category: 'Agri-Tech Web Platform & Operations Digitization',
    industry: 'Agri-Tech',
    service: 'Web',
    liveUrl: 'https://yashodeep-agro.vercel.app/',
    summary: 'Developed a dynamic agri-tech platform modernizing agricultural commerce with ultra-responsive mobile accessibility for farmers and distributors.',
    heroImage: '/images/case-studies/yashodeep-agro.jpg',
    accentColor: '#10b981',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    techStack: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    keyResult: '3.5x digital catalog reach with instant mobile access',
    metrics: [
      { label: 'Digital Catalog Reach', value: '3.5x', change: 'Broadened buyer access' },
      { label: 'Order Processing', value: 'Instant', change: 'Direct phone & web orders' }
    ],
    challenge: 'An agricultural enterprise needed to digitize its operations and showcase its products/services to a broader market, moving away from manual, offline processes.',
    solution: 'We developed a dynamic, scalable web platform tailored for the agri-business sector. The solution includes a robust product/service catalog, intuitive admin dashboards for inventory management, and optimized content delivery for users in low-bandwidth rural areas.',
    architectureHighlights: [
      'Low-bandwidth performance optimization tailored for farmers and distributors on mobile devices',
      'Centralized digital product and service catalog with real-time stock availability',
      'Relational data schema for rapid SKU classification and batch logging',
      'Lightweight bundle footprint enabling sub-2-second loads even on spotty connections'
    ],
    testimonial: {
      quote: 'Moving our agricultural operations to the web with Deep Digital Labs reduced our paperwork by 40%. Farmers and partners can easily access our offerings directly from their phones.',
      author: 'Operations Director',
      role: 'Head of Supply Chain',
      company: 'Yashodeep Agro'
    },
    featured: true
  },
  {
    slug: 'dairy-flow-pro',
    title: 'Dairy Flow Pro',
    client: 'Dairy Flow Pro',
    location: 'Pune / Maharashtra, India',
    category: 'Enterprise Dairy ERP & Automated Billing SaaS',
    industry: 'Agri-Tech',
    service: 'SaaS',
    liveUrl: 'https://dairy-flow-pro.vercel.app/',
    summary: 'Engineered an end-to-end multi-tenant dairy ERP SaaS with real-time milk collection metrics, automated fat/SNF billing, and sub-second tabular query times.',
    heroImage: '/images/case-studies/dairy-flow-pro.jpg',
    accentColor: '#3b82f6',
    tags: ['Next.js', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    techStack: ['Next.js', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    keyResult: '15+ hours saved weekly on automated milk billing',
    metrics: [
      { label: 'Time Saved Weekly', value: '15+ hrs', change: 'Eliminated spreadsheets' },
      { label: 'Table Load Speed', value: '<300ms', change: 'Server-Side Rendering (SSR)' }
    ],
    challenge: 'Dairy management requires precise, real-time tracking of inventory, collections, and billing. The client needed a unified SaaS platform to replace fragmented spreadsheets and legacy software.',
    solution: 'We engineered "Dairy Flow Pro," a comprehensive, multi-tenant SaaS dashboard. Features include real-time milk collection tracking, automated billing generation, role-based access control (for admins, collectors, and farmers), and data visualization charts.',
    architectureHighlights: [
      'Sub-second Server-Side Rendering (SSR) for complex multi-thousand row collection sheets',
      'Automated dynamic rate calculation engine with instant farmer invoice dispatch',
      'Granular Role-Based Access Control (RBAC) separating Admins, Field Collectors, and Farmers',
      'Enterprise transaction isolation preventing double-entry discrepancies'
    ],
    testimonial: {
      quote: 'Dairy Flow Pro eliminated 15 hours of manual spreadsheet bookkeeping every week and wiped out 90% of billing reconciliation disputes. It is the backbone of our dairy operations.',
      author: 'Chief Executive Officer',
      role: 'Founder & Managing Director',
      company: 'Dairy Flow Pro'
    },
    featured: true
  },
  {
    slug: 'santosh-phadtare-portal',
    title: 'Karyala Jodo',
    client: 'Santosh Phadtare Campaign Office',
    location: 'Maharashtra, India',
    category: 'Political Tech & Grassroots Mobilization Portal',
    industry: 'Political Tech',
    service: 'Web',
    liveUrl: 'https://santosh-phadtare.vercel.app/',
    summary: 'Engineered a centralized political engagement portal mobilizing grassroots workers, digitizing 1,000+ volunteers, and guaranteeing 99.99% uptime during major announcements.',
    heroImage: '/images/case-studies/santosh-phadtare.jpg',
    accentColor: '#f59e0b',
    tags: ['Next.js', 'Firebase', 'Vercel Edge', 'Tailwind CSS'],
    techStack: ['Next.js', 'Firebase', 'Vercel Edge', 'Tailwind CSS'],
    keyResult: '1,000+ digitized volunteers with 99.99% peak uptime',
    metrics: [
      { label: 'Volunteers Mobilized', value: '1,000+', change: 'Direct digital signups' },
      { label: 'Peak Uptime', value: '99.99%', change: 'Zero downtime during rallies' }
    ],
    challenge: 'A prominent political leader needed a centralized, highly reliable digital hub to mobilize grassroots workers ("karyakartas"), manage volunteer data, and communicate their developmental vision directly to constituents, bypassing traditional media filters.',
    solution: 'We engineered "Karyala Jodo," a dynamic political engagement portal. It features streamlined volunteer onboarding workflows, a real-time event and rally calendar, a digital manifesto section, and a robust Headless CMS allowing the core team to publish press releases and updates in seconds.',
    architectureHighlights: [
      'Streamlined volunteer onboarding workflow optimized for mobile-first karyakarta signups',
      'Real-time political event and rally calendar with direct constituent engagement',
      'Digital manifesto repository and instantaneous press release publishing engine',
      'Firebase and Vercel Edge Network architecture guaranteeing 99.99% uptime during peak announcements'
    ],
    testimonial: {
      quote: 'Karyala Jodo allowed us to mobilize over 1,000 grassroots volunteers seamlessly and communicate our vision directly to the people with zero reliance on media intermediaries.',
      author: 'Santosh Phadtare Campaign Office',
      role: 'Chief Digital Strategist',
      company: 'Karyala Jodo Political Initiative'
    },
    featured: true
  },
  {
    slug: 'trust-carry-logistics',
    title: 'Trust Carry Logistics',
    client: 'Trust Carry Logistics',
    location: 'Navi Mumbai / Pune, India',
    category: 'Fleet Showcase & Supply Chain Tracking',
    industry: 'Logistics',
    service: 'Web',
    liveUrl: 'https://trustcarrylogistics.vercel.app/',
    summary: 'Engineered an interactive fleet and shipment tracking portal driving a 25% surge in B2B inquiries and a 30% decline in repetitive status inquiry calls.',
    heroImage: '/images/case-studies/trust-carry.jpg',
    accentColor: '#6366f1',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
    keyResult: '+25% B2B inquiries & 30% fewer support calls',
    metrics: [
      { label: 'B2B Inquiries', value: '+25%', change: 'Commercial partnerships' },
      { label: 'Support Calls', value: '-30%', change: 'Self-serve tracking' },
      { label: 'Tracking Lookup Speed', value: '<250ms', change: 'Instant database index' }
    ],
    challenge: 'A growing logistics company needed a professional web presence with functional capabilities to showcase their fleet, services, and provide basic shipment tracking visibility to build client trust.',
    solution: 'We developed a sleek, corporate logistics platform featuring interactive service breakdowns, a fleet showcase, and an intuitive "Track Your Shipment" interface. The backend was optimized for quick data retrieval and secure client inquiries.',
    architectureHighlights: [
      'Interactive shipment tracking search bar with instant waypoint status',
      'Commercial fleet specification showcase with payload and capacity details',
      'High-performance query pipeline delivering sub-250ms consignment lookups',
      'High-converting B2B quote request module connected directly to sales dispatch'
    ],
    testimonial: {
      quote: 'Our clients now check their shipment status online instead of calling our dispatch desk all day. It has noticeably boosted our credibility and won us larger enterprise shipping contracts.',
      author: 'Logistics Director',
      role: 'Operations Head',
      company: 'Trust Carry Logistics'
    },
    featured: true
  },
  {
    slug: 'shivsena-sangola',
    title: 'Sangola Vikas Sankalp',
    client: 'Shivsena Sangola Wing',
    location: 'Sangola, Maharashtra, India',
    category: 'Campaign Portal & Civic Development Tracker',
    industry: 'Political Tech',
    service: 'Web',
    liveUrl: 'https://shivsena-sangola.vercel.app/',
    summary: 'Architected a mobile-first SSG campaign portal with a local Development Tracker, sub-1.5s 3G speeds, and zero server degradation during viral traffic spikes.',
    heroImage: '/images/case-studies/shivsena-sangola.jpg',
    accentColor: '#ea580c',
    tags: ['Next.js SSG', 'Edge Caching', 'Tailwind CSS'],
    techStack: ['Next.js SSG', 'Edge Caching', 'Tailwind CSS'],
    keyResult: '100% peak uptime & sub-1.5s load speeds on rural 3G',
    metrics: [
      { label: 'Peak Uptime', value: '100%', change: 'Zero server degradation' },
      { label: '3G Load Speed', value: '<1.5s', change: 'Edge cached for rural voters' },
      { label: 'Digital Credibility', value: 'Modernized', change: 'Elevated regional wing' }
    ],
    challenge: 'The Shivsena Sangola wing required a high-performance, mobile-first campaign website to showcase local developmental work ("Vikas"), rally regional support, and provide a trusted source of information for the constituency during critical political cycles.',
    solution: 'We architected a Static Site Generation (SSG) powered portal optimized for extreme speed and low-bandwidth environments. Key features include a "Development Tracker" (showcasing local projects), Candidate Appeal video sections, localized news feeds, and a constituent feedback/grievance form.',
    architectureHighlights: [
      'Edge caching architecture handling massive, unpredictable traffic spikes',
      'Interactive "Development Tracker" showcasing localized infrastructure and public work progress',
      'Sub-1.5-second load times on 3G mobile networks for universal constituent accessibility',
      'Direct constituent feedback and grievance intake module connecting voters to campaign leaders'
    ],
    testimonial: {
      quote: 'During high-stakes campaign days when tens of thousands checked our candidate manifesto at once, the website never stuttered for a single millisecond. Flawless execution.',
      author: 'Campaign Coordinator',
      role: 'Chief Digital Strategist',
      company: 'Shivsena Sangola Wing'
    },
    featured: true
  },
  {
    slug: 'pasarnikar-payal-amit',
    title: 'Prasaraka (Payal & Amit Pasarnikar)',
    client: 'Payal & Amit Pasarnikar (Prasaraka)',
    location: 'India / Global',
    category: 'Political Personal Branding & Spokesperson Portal',
    industry: 'Political Tech',
    service: 'Web',
    liveUrl: 'https://pasarnikar-payal-amit.vercel.app/',
    summary: 'Designed an animation-rich personal branding hub centralizing media appearances, ideological journey, and high-converting supporter signups.',
    heroImage: '/images/case-studies/pasarnikar-payal-amit.jpg',
    accentColor: '#ec4899',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    keyResult: '3x growth in supporter outreach & speaking inquiries',
    metrics: [
      { label: 'Media & Press Routing', value: 'Centralized', change: 'Direct interview requests' },
      { label: 'Supporter Outreach', value: '3x Growth', change: 'Verified constituent reach' },
      { label: 'Speaking Inquiries', value: '+200%', change: 'Direct spokesperson requests' }
    ],
    challenge: 'Emerging political figures and spokespersons ("Prasaraka") need to build a strong, trustworthy, and modern personal brand to stand out in a crowded political landscape, while providing a central hub for media, supporters, and party workers.',
    solution: 'We designed and developed a premium, animation-rich personal branding website. Utilizing Framer Motion for smooth, professional scroll interactions, the site elegantly showcases their political journey, core ideologies, media gallery (rallies, interviews, speeches), and a direct "Join the Movement" supporter sign-up module.',
    architectureHighlights: [
      'Interactive scroll physics and micro-interactions creating an authoritative brand persona',
      'Comprehensive media archive organizing public rallies, television debates, and keynote speeches',
      'High-converting "Join the Movement" supporter onboarding pipeline with direct campaign integration',
      'Unified press kit and direct media contact routing for spokespersons'
    ],
    testimonial: {
      quote: 'The visual elegance and fluidity of the website created an unforgettable first impression for everyone who visits. Our speaking requests and partnership inquiries have tripled.',
      author: 'Payal & Amit Pasarnikar',
      role: 'Spokespersons & Founders',
      company: 'Prasaraka'
    },
    featured: true
  }
];
