export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface TechSpecialization {
  category: string;
  skills: string[];
}

export interface ServiceDetail {
  number: string;
  shortTitle: string;
  displayHeading: string;
  slug: string;
  title: string;
  headline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  keyBenefits: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  techStack: string[];
  techSpecializations: TechSpecialization[];
  processTimeline: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

// 5 CORE PILLARS (Clean, Simple, High-Converting)
export const CORE_SERVICES: ServiceDetail[] = [
  {
    number: '01',
    shortTitle: 'Websites & Web Apps',
    displayHeading: '01 — Websites & Web Apps',
    slug: 'websites-web-apps',
    title: 'Websites & Web Applications',
    headline: 'High-performance business websites, e-commerce, and custom web applications.',
    shortDescription: 'Modern, blazing-fast web applications, e-commerce stores, and responsive corporate portals engineered for speed and conversion.',
    fullDescription: 'We design and code fast, accessible, and high-converting websites and web applications. Clean semantic HTML5, modern CSS3, responsive React and Next.js interfaces that rank at the top of Google and deliver sub-second load times.',
    icon: 'Code2',
    keyBenefits: [
      '100/100 Google Lighthouse speed and Core Web Vitals performance',
      'Pixel-perfect responsive design tailored for mobile, tablet, and desktop',
      'SEO-optimized architecture with automated schema and metadata',
      'Zero monthly builder fees — clean code on your own infrastructure'
    ],
    capabilities: [
      {
        title: 'Business Websites & Corporate Portals',
        description: 'Fast, secure, responsive web portals and company websites that elevate your business brand.'
      },
      {
        title: 'E-commerce Websites & Stores',
        description: 'High-converting online stores with fast checkouts, inventory tracking, and payment gateways.'
      },
      {
        title: 'Custom Web Applications & Portals',
        description: 'Interactive web tools, customer dashboards, calculators, and client appointment systems.'
      },
      {
        title: 'Admin Dashboards & API Integration',
        description: 'Internal dashboards giving your operational team full visibility and seamless 3rd-party integrations.'
      }
    ],
    deliverables: [
      'Production-ready Next.js / React application',
      'Responsive, mobile-first design across all screen sizes',
      'Interactive contact & booking forms with CRM / email notifications',
      'Technical SEO & Core Web Vitals optimization'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
    techSpecializations: [
      {
        category: 'Core Solutions',
        skills: [
          'Business Websites',
          'E-commerce Websites',
          'Custom Web Applications',
          'Customer Portals',
          'Admin Dashboards',
          'Booking & Appointment Systems',
          'API Integration'
        ]
      },
      {
        category: 'Technologies',
        skills: ['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL']
      }
    ],
    processTimeline: [
      { step: '01', title: 'Wireframes & UI Design', description: 'Crafting responsive layouts, content architecture, and design tokens.', duration: 'Week 1' },
      { step: '02', title: 'Frontend Engineering', description: 'Coding Next.js components, micro-animations, and responsive screens.', duration: 'Weeks 2-3' },
      { step: '03', title: 'Content & Integrations', description: 'Connecting forms, CMS, third-party APIs, and analytics.', duration: 'Week 4' },
      { step: '04', title: 'Testing & Launch', description: 'Cross-browser testing, Lighthouse 100 audits, and live launch.', duration: 'Week 5' }
    ],
    faqs: [
      {
        question: 'Will our website be mobile-responsive?',
        answer: 'Yes! Every page is engineered mobile-first and tested rigorously on iOS, Android, tablets, and desktop displays.'
      },
      {
        question: 'Can you integrate third-party APIs and booking systems?',
        answer: 'Yes, we integrate REST APIs, GraphQL, Stripe, PayPal, Razorpay, Calendly, CRM systems, and custom database backends.'
      }
    ],
    metaTitle: 'Websites & Web Applications | Deep Digital Labs',
    metaDescription: 'High-performance websites, e-commerce stores, and custom web applications built by Deep Digital Labs in Pune, India.'
  },
  {
    number: '02',
    shortTitle: 'Business Software',
    displayHeading: '02 — Business Software',
    slug: 'business-software-saas',
    title: 'Business Software & SaaS',
    headline: 'Custom business software, CRM/ERP systems, and scalable SaaS platforms.',
    shortDescription: 'Custom business software, CRM systems, ERP solutions, management dashboards, subscription platforms, and automation tools.',
    fullDescription: 'We architect and build bespoke business software and SaaS platforms that automate workflows, streamline operations, and scale effortlessly. Role-based access control, real-time analytics dashboards, automated billing, and secure cloud databases.',
    icon: 'Layers',
    keyBenefits: [
      'Tailored 100% to your internal business processes and workflows',
      'Automated subscription billing, user authentication, and RBAC permissions',
      'Sub-second query performance with PostgreSQL & Redis caching',
      '100% intellectual property ownership transferred on delivery'
    ],
    capabilities: [
      {
        title: 'CRM Systems & Customer Management',
        description: 'Centralized customer tracking, sales pipelines, lead management, and automated communications.'
      },
      {
        title: 'ERP Solutions & Operations Management',
        description: 'Comprehensive resource planning, inventory control, invoicing, and reporting systems.'
      },
      {
        title: 'Management Dashboards & Analytics',
        description: 'Real-time KPI visualization, automated reporting, and role-based operational oversight.'
      },
      {
        title: 'Subscription Platforms & Automation',
        description: 'Multi-tenant SaaS architectures, automated recurring billing, and API integrations.'
      }
    ],
    deliverables: [
      'Custom Business Software & SaaS Web Application',
      'Configured Cloud Database (PostgreSQL / MongoDB) & Auth',
      'Payment Gateway Integration (Stripe / Razorpay)',
      'Automated Testing & Secure CI/CD Pipeline'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'Redis', 'Docker'],
    techSpecializations: [
      {
        category: 'Solutions & Modules',
        skills: [
          'Custom Business Software',
          'CRM Systems',
          'ERP Solutions',
          'Management Dashboards',
          'Subscription Platforms',
          'Customer Management Systems',
          'Automation Platforms'
        ]
      },
      {
        category: 'Architecture & Backend',
        skills: [
          'Payment Integration',
          'User Authentication',
          'Cloud Databases',
          'API Development',
          'PostgreSQL',
          'Redis'
        ]
      }
    ],
    processTimeline: [
      { step: '01', title: 'Scoping & Architecture', description: 'Aligning on core features, tenant models, and database schema.', duration: 'Week 1' },
      { step: '02', title: 'Core Development', description: 'Building the database, authentication, and primary workflows.', duration: 'Weeks 2-4' },
      { step: '03', title: 'Payments & Integrations', description: 'Stripe setup, third-party APIs, and notifications.', duration: 'Weeks 5-6' },
      { step: '04', title: 'Testing & Launch', description: 'Performance checks, security audit, and live deployment.', duration: 'Weeks 7-8' }
    ],
    faqs: [
      {
        question: 'Do we own the source code?',
        answer: 'Yes, 100%. All intellectual property, source code, and assets belong entirely to you with zero vendor lock-in.'
      },
      {
        question: 'How fast can you deliver an MVP?',
        answer: 'Most startup MVPs and business tools ship to production within 4 to 8 weeks, backed by weekly sprint demos.'
      }
    ],
    metaTitle: 'Business Software & SaaS Development | Deep Digital Labs',
    metaDescription: 'Custom business software, CRM systems, ERP solutions, and SaaS platforms engineered by Deep Digital Labs.'
  },
  {
    number: '03',
    shortTitle: 'Mobile Apps',
    displayHeading: '03 — Mobile Apps',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    headline: 'Native-speed Android, iOS, and cross-platform mobile apps.',
    shortDescription: 'Cross-platform mobile apps, native performance, push notifications, payment integration, and offline-first solutions.',
    fullDescription: 'Launch your mobile app on both the Apple App Store and Google Play Store with a single high-performance codebase. Smooth animations, offline support, hardware camera/GPS integration, and secure in-app payments.',
    icon: 'Smartphone',
    keyBenefits: [
      'One codebase reaching both iOS & Android without extra cost',
      'Push notification infrastructure for high user engagement',
      'Native camera, biometrics, GPS, and in-app payment integration',
      'Guaranteed Apple App Store & Google Play Store approval'
    ],
    capabilities: [
      {
        title: 'Android & iOS Cross-Platform Apps',
        description: 'Cost-effective mobile apps built with Flutter and React Native that look and feel 100% native.'
      },
      {
        title: 'Native Android & iOS Engineering',
        description: 'Platform-specific Kotlin and Swift development for hardware-intensive and low-latency mobile solutions.'
      },
      {
        title: 'Push Notifications & Messaging',
        description: 'Targeted real-time push alerts, transactional notifications, and user retention messaging.'
      },
      {
        title: 'In-App Payment Integration',
        description: 'Apple In-App Purchases, Google Play Billing, and Stripe/Razorpay payment gateways.'
      }
    ],
    deliverables: [
      'Production iOS (.ipa) and Android (.aab) app binaries',
      'Clean Dart/Flutter or React Native source code',
      'Configured push notification & Firebase backend',
      'Complete App Store submission & publishing support'
    ],
    techStack: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase'],
    techSpecializations: [
      {
        category: 'Platforms & Apps',
        skills: ['Android Apps', 'iOS Apps', 'Cross-Platform Apps']
      },
      {
        category: 'Technologies',
        skills: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase']
      },
      {
        category: 'Mobile Features',
        skills: ['Push Notifications', 'Payment Integration']
      }
    ],
    processTimeline: [
      { step: '01', title: 'UI/UX & Mobile Ergonomics', description: 'Platform design guidelines and interactive prototypes.', duration: 'Weeks 1-2' },
      { step: '02', title: 'App Development', description: 'Screens, state management, and local database setup.', duration: 'Weeks 3-5' },
      { step: '03', title: 'API & Hardware Integration', description: 'Notifications, camera, background sync, and payments.', duration: 'Weeks 6-7' },
      { step: '04', title: 'Store Release', description: 'App Store review submission and store publication.', duration: 'Week 8' }
    ],
    faqs: [
      {
        question: 'Will the app work on both iPhone and Android?',
        answer: 'Yes! Using Flutter or React Native, your app runs natively on both iOS and Android with identical features and 60fps smoothness.'
      }
    ],
    metaTitle: 'Mobile App Development (iOS & Android) | Deep Digital Labs',
    metaDescription: 'Fast, beautiful cross-platform mobile apps for iOS and Android using Flutter, Kotlin, and Swift.'
  },
  {
    number: '04',
    shortTitle: 'Digital Growth & SEO',
    displayHeading: '04 — Digital Growth & SEO',
    slug: 'digital-growth-seo',
    title: 'Digital Growth & SEO',
    headline: 'Developer-led SEO, Google Business ranking, and conversion growth.',
    shortDescription: 'Technical SEO, Local SEO, Google Business Profile ranking, keyword research, analytics tracking, and conversion optimization.',
    fullDescription: 'Great code needs real customers. We optimize your website code for top Google rankings, set up automated customer onboarding emails, and build review systems that turn visitors into paying clients.',
    icon: 'TrendingUp',
    keyBenefits: [
      'Top Google search rankings with sub-second Core Web Vitals',
      'Local SEO dominance on Google Maps & Google Business Profile',
      'Actionable Google Analytics 4 and Search Console insights',
      'Code-level performance tweaks that maximize conversion rates'
    ],
    capabilities: [
      {
        title: 'Technical SEO & Website Performance',
        description: 'Code-level speed optimization, structured schema markup, and crawl fixes that Google algorithms reward.'
      },
      {
        title: 'Local SEO & Google Business Profile',
        description: 'Local directory listings, map rank optimization, and review management to drive phone calls and inquiries.'
      },
      {
        title: 'Keyword Research & Content SEO',
        description: 'High-intent search keyword strategies, on-page optimization, and content structuring.'
      },
      {
        title: 'Google Analytics & Conversion Optimization',
        description: 'GA4 tracking, event funnels, Google Search Console audits, and conversion rate optimization (CRO).'
      }
    ],
    deliverables: [
      'Complete Technical SEO Audit & Code-Level Fixes',
      'Dynamic XML Sitemap & Schema.org Implementation',
      'Google Business Profile Setup & Local Optimization',
      'Google Analytics 4 & Search Console Performance Dashboard'
    ],
    techStack: [
      'SEO',
      'Local SEO',
      'Technical SEO',
      'Google Business Profile',
      'Keyword Research',
      'Content SEO',
      'Google Analytics',
      'Google Search Console',
      'Conversion Optimization',
      'Website Performance'
    ],
    techSpecializations: [
      {
        category: 'Search Optimization',
        skills: ['SEO', 'Local SEO', 'Technical SEO', 'Keyword Research', 'Content SEO']
      },
      {
        category: 'Analytics & Performance',
        skills: [
          'Google Business Profile',
          'Google Analytics',
          'Google Search Console',
          'Conversion Optimization',
          'Website Performance'
        ]
      }
    ],
    processTimeline: [
      { step: '01', title: 'Audit & Keyword Plan', description: 'Identifying crawl errors, speed bottlenecks, and search targets.', duration: 'Week 1' },
      { step: '02', title: 'Code & Funnel Setup', description: 'Speed fixes, schema integration, and local presence optimization.', duration: 'Weeks 2-3' },
      { step: '03', title: 'Launch & Tracking', description: 'Connecting analytics, ranking monitors, and verification.', duration: 'Week 4' }
    ],
    faqs: [
      {
        question: 'Why is developer-led SEO better?',
        answer: 'Search engines rank websites based on speed, clean code, and structured data. As engineers, we fix performance bottlenecks directly in the codebase.'
      }
    ],
    metaTitle: 'Digital Growth & Technical SEO | Deep Digital Labs',
    metaDescription: 'Technical SEO, Local SEO, Google Business Profile optimization, and conversion growth engineered by developers.'
  },
  {
    number: '05',
    shortTitle: 'Cloud & Technical Support',
    displayHeading: '05 — Cloud & Technical Support',
    slug: 'cloud-ongoing-support',
    title: 'Cloud, Hosting & Technical Support',
    headline: 'Managed AWS cloud hosting, server setup, and dedicated maintenance.',
    shortDescription: 'AWS cloud hosting, server setup, domain/DNS management, database management, server monitoring, website maintenance, and security.',
    fullDescription: 'Stop worrying about servers, crashes, or security vulnerabilities. We manage your cloud infrastructure on AWS, configure domains and DNS, monitor server health 24/7, perform automated backups, and handle ongoing technical maintenance.',
    icon: 'ShieldCheck',
    keyBenefits: [
      'Guaranteed 99.9% server uptime with 24/7 automated monitoring',
      'Zero-downtime deployments with instant rollbacks if issues arise',
      'Regular security audits, access management, and automated daily backups',
      'Direct Slack/WhatsApp access to dedicated engineers in Pune'
    ],
    capabilities: [
      {
        title: 'AWS Cloud Hosting & Deployment',
        description: 'Hardened cloud servers, auto-scaling, SSL certificates, and zero-downtime CI/CD deployment pipelines.'
      },
      {
        title: 'Domain, DNS & Server Setup',
        description: 'Domain transfers, custom nameservers, DNS record routing, and complete Linux server configuration.'
      },
      {
        title: 'Database Management & Backups',
        description: 'Automated daily database backups, point-in-time recovery, query optimization, and Redis caching.'
      },
      {
        title: 'Server Monitoring & Website Maintenance',
        description: '24/7 uptime monitoring, security patches, library updates, and dedicated monthly technical support.'
      }
    ],
    deliverables: [
      'Configured AWS Cloud Architecture & Linux Servers',
      'Automated Daily Backups & Disaster Recovery System',
      'Domain & DNS SSL Configuration',
      'Monthly Security, Uptime & Performance Monitoring Report'
    ],
    techStack: [
      'AWS Cloud',
      'Website Hosting',
      'Server Setup',
      'Domain & DNS Setup',
      'Cloud Deployment',
      'Database Management',
      'Server Monitoring',
      'Website Maintenance',
      'Security & Access Management',
      'Backup & Recovery',
      'Docker',
      'Linux',
      'CI/CD'
    ],
    techSpecializations: [
      {
        category: 'Cloud & Hosting',
        skills: [
          'AWS Cloud',
          'Website Hosting',
          'Server Setup',
          'Domain & DNS Setup',
          'Cloud Deployment'
        ]
      },
      {
        category: 'Support & Reliability',
        skills: [
          'Database Management',
          'Server Monitoring',
          'Website Maintenance',
          'Security & Access Management',
          'Backup & Recovery'
        ]
      },
      {
        category: 'DevOps & Infrastructure',
        skills: ['Docker', 'Linux', 'CI/CD']
      }
    ],
    processTimeline: [
      { step: '01', title: 'Infrastructure Audit', description: 'Reviewing current servers, security risks, domain DNS, and bottlenecks.', duration: 'Week 1' },
      { step: '02', title: 'Setup & Migration', description: 'Configuring hardened cloud servers, DNS routing, and automated backups.', duration: 'Weeks 2-3' },
      { step: '03', title: '24/7 Monitoring Handover', description: 'Zero-downtime cutover and activating real-time alarms.', duration: 'Week 4' }
    ],
    faqs: [
      {
        question: 'What is included in technical support & maintenance?',
        answer: 'Monthly support includes 24/7 server monitoring, security patches, library updates, daily backups, DNS/domain management, and dedicated developer hours.'
      }
    ],
    metaTitle: 'Cloud, Hosting & Technical Support | Deep Digital Labs',
    metaDescription: 'Managed AWS cloud hosting, server setup, website maintenance, and 24/7 technical support by Deep Digital Labs.'
  }
];

// Compatibility aliases so existing detail pages resolve cleanly
export const ALIAS_SLUGS: Record<string, string> = {
  'websites-web-apps': 'websites-web-apps',
  'web-development': 'websites-web-apps',
  'saas-web-development': 'websites-web-apps',
  'business-software-saas': 'business-software-saas',
  'saas-development': 'business-software-saas',
  'mobile-app-development': 'mobile-app-development',
  'digital-growth-seo': 'digital-growth-seo',
  'cloud-ongoing-support': 'cloud-ongoing-support',
  'political-civic-tech': 'websites-web-apps',
  'technical-seo-growth': 'digital-growth-seo',
  'managed-cloud-infrastructure': 'cloud-ongoing-support',
  'lifecycle-retention-automation': 'digital-growth-seo',
  'dedicated-sla-retainers': 'cloud-ongoing-support',
  'headless-commerce': 'websites-web-apps',
  'enterprise-dashboards': 'business-software-saas',
  'ui-ux-modernization': 'cloud-ongoing-support',
  'local-seo-presence': 'digital-growth-seo',
  'brand-trust-reputation': 'digital-growth-seo',
  'headless-cms-architecture': 'websites-web-apps'
};

export const SERVICES = CORE_SERVICES;

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const directMatch = CORE_SERVICES.find((s) => s.slug === slug);
  if (directMatch) return directMatch;
  const alias = ALIAS_SLUGS[slug];
  if (alias) return CORE_SERVICES.find((s) => s.slug === alias);
  return undefined;
}
