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

export interface ServiceDetail {
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
  processTimeline: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

// 4 CORE PILLARS (Clean, Simple, High-Converting)
export const CORE_SERVICES: ServiceDetail[] = [
  {
    slug: 'saas-web-development',
    title: 'SaaS & Web Development',
    headline: 'We build scalable software, MVPs, and high-performance websites.',
    shortDescription: 'From complex multi-tenant SaaS platforms and rapid MVPs to corporate websites and high-traffic civic portals.',
    fullDescription: 'We build scalable web applications and SaaS platforms that launch fast and handle enterprise traffic without breaking. Clean architecture, modern frameworks, and transparent weekly progress.',
    icon: 'Layers',
    keyBenefits: [
      'Fast MVP launches in 4 to 8 weeks',
      'Multi-tenant architecture with Stripe billing & user management',
      'Sub-second load speeds with Next.js Server Components',
      '100% intellectual property ownership transferred on delivery'
    ],
    capabilities: [
      {
        title: 'Custom SaaS Platforms',
        description: 'Multi-tenant apps with subscriptions, user roles, databases, and third-party API integrations.'
      },
      {
        title: 'Startup MVPs',
        description: 'Turn your concept into a live, investor-ready product in weeks instead of months.'
      },
      {
        title: 'Corporate Web Applications',
        description: 'Fast, secure, responsive web portals and client dashboards that elevate your business brand.'
      },
      {
        title: 'High-Concurrency Civic Tech',
        description: 'Spike-tolerant portals engineered for election campaigns, non-profits, and public sector scale.'
      }
    ],
    deliverables: [
      'Production-ready Next.js / React application',
      'Configured database & secure user authentication',
      'Stripe or Razorpay payment integration',
      'Automated testing & deployment pipeline'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    processTimeline: [
      { step: '01', title: 'Scoping & Architecture', description: 'Aligning on core features, user flows, and timeline.', duration: 'Week 1' },
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
        answer: 'Most startup MVPs ship to production within 4 to 8 weeks, backed by weekly sprint demos and live progress tracking.'
      }
    ],
    metaTitle: 'SaaS & Web Development | Deep Digital Labs',
    metaDescription: 'Custom SaaS platforms, startup MVPs, and high-performance web applications built by Deep Digital Labs in Pune, India.'
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    headline: 'We build beautiful, fast iOS and Android applications.',
    shortDescription: 'Cross-platform mobile apps, native performance, and offline-first solutions that users love.',
    fullDescription: 'Launch your mobile app on both the Apple App Store and Google Play Store with a single high-performance codebase. Smooth animations, offline support, and seamless hardware integration.',
    icon: 'Smartphone',
    keyBenefits: [
      'One codebase reaching both iOS & Android without extra cost',
      'Offline-first architecture with automatic sync when connected',
      'Native camera, push notifications, and biometric authentication',
      'Guaranteed Apple App Store & Google Play Store approval'
    ],
    capabilities: [
      {
        title: 'Cross-Platform Flutter & React Native',
        description: 'Cost-effective mobile apps that look and feel 100% native on iPhone and Android.'
      },
      {
        title: 'Offline-First Apps',
        description: 'Local caching that keeps your app running smoothly even with poor internet connectivity.'
      },
      {
        title: 'In-App Subscriptions',
        description: 'Integrated Apple In-App Purchases and Google Play Billing for effortless monetization.'
      },
      {
        title: 'Real-Time Telemetry & Maps',
        description: 'GPS tracking, geofencing, and live updates for logistics and field services.'
      }
    ],
    deliverables: [
      'Production iOS (.ipa) and Android (.aab) app binaries',
      'Clean Dart/Flutter or React Native source code',
      'Configured push notification infrastructure',
      'Complete App Store submission & publishing support'
    ],
    techStack: ['Flutter', 'React Native', 'iOS', 'Android', 'Firebase', 'SQLite'],
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
    metaDescription: 'Fast, beautiful cross-platform mobile apps for iOS and Android using Flutter and React Native.'
  },
  {
    slug: 'digital-growth-seo',
    title: 'Digital Growth & SEO',
    headline: 'We help you rank higher, get found, and automate marketing.',
    shortDescription: 'Technical SEO, local business optimization, automated email workflows, and reputation management.',
    fullDescription: 'Great code needs real customers. We optimize your website code for top Google rankings, set up automated customer onboarding emails, and build review systems that turn visitors into paying clients.',
    icon: 'TrendingUp',
    keyBenefits: [
      'Top Google search rankings with sub-second Core Web Vitals',
      'Automated email sequences that onboard and retain users',
      'Local SEO to dominate Google Maps and regional searches',
      'Automated review collection on Google and Trustpilot'
    ],
    capabilities: [
      {
        title: 'Technical SEO & Core Web Vitals',
        description: 'Code-level speed optimization, structured schema markup, and crawl fixes that Google loves.'
      },
      {
        title: 'Email & Retention Automation',
        description: 'Event-driven onboarding emails, trial expiration reminders, and payment recovery drip campaigns.'
      },
      {
        title: 'Local SEO & Google Business Profile',
        description: 'Local directory listings and map rank optimization to drive phone calls and foot traffic.'
      },
      {
        title: 'Reputation & Review Management',
        description: 'Automated systems to collect and showcase 5-star customer reviews.'
      }
    ],
    deliverables: [
      'Complete Technical SEO Audit & Code-Level Fixes',
      'Dynamic XML Sitemap & Schema.org Implementation',
      'Automated Email Onboarding Funnel (SendGrid/Customer.io)',
      'Google Search Console & Performance Dashboard'
    ],
    techStack: ['Technical SEO', 'Schema.org', 'SendGrid', 'Google Search Console', 'Analytics'],
    processTimeline: [
      { step: '01', title: 'Audit & Keyword Plan', description: 'Identifying crawl errors, speed bottlenecks, and search targets.', duration: 'Week 1' },
      { step: '02', title: 'Code & Funnel Setup', description: 'Speed fixes, schema integration, and email sequences.', duration: 'Weeks 2-3' },
      { step: '03', title: 'Launch & Tracking', description: 'Connecting analytics, ranking monitors, and verification.', duration: 'Week 4' }
    ],
    faqs: [
      {
        question: 'Why is developer-led SEO better?',
        answer: 'Search engines rank websites based on speed, clean code, and structured data. Traditional marketers cannot touch code; as engineers, we fix performance bottlenecks directly in the codebase.'
      }
    ],
    metaTitle: 'Digital Growth & Technical SEO | Deep Digital Labs',
    metaDescription: 'Technical SEO, automated email retention, and local search growth engineered by developers.'
  },
  {
    slug: 'cloud-ongoing-support',
    title: 'Cloud & Ongoing Support',
    headline: 'We host, secure, and maintain your digital products.',
    shortDescription: 'Cloud server setup, website maintenance, security updates, and legacy system upgrades. 99.9% uptime guaranteed.',
    fullDescription: 'Stop worrying about servers, crashes, or security bugs. We manage your cloud infrastructure on AWS, Vercel, and Cloudflare, perform monthly updates, and provide direct developer support whenever you need it.',
    icon: 'ShieldCheck',
    keyBenefits: [
      'Guaranteed 99.9% server uptime with 24/7 automated monitoring',
      'Zero-downtime deployments with instant rollbacks if issues arise',
      'Monthly security audits, dependency updates, and bug fixes',
      'Direct Slack access to your dedicated engineering team in Pune'
    ],
    capabilities: [
      {
        title: 'Managed Cloud Hosting',
        description: 'Enterprise AWS and Vercel cloud setups with auto-scaling, SSL, and daily backups.'
      },
      {
        title: '24/7 Monitoring & Backups',
        description: 'Automated alarms that notify our on-call engineers before your customers notice any downtime.'
      },
      {
        title: 'Monthly Maintenance Retainers',
        description: 'Dedicated developer hours each month for feature tweaks, patches, and improvements.'
      },
      {
        title: 'Legacy System Modernization',
        description: 'Safely upgrade slow, outdated websites and software to modern Next.js systems with zero downtime.'
      }
    ],
    deliverables: [
      'Configured AWS / Vercel cloud architecture',
      'Automated daily backups with 1-click restore',
      'Monthly Security & Uptime Performance Report',
      'Dedicated private Slack channel for priority support'
    ],
    techStack: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'DevOps', '24/7 Monitoring'],
    processTimeline: [
      { step: '01', title: 'Cloud Audit', description: 'Reviewing current servers, security risks, and speed issues.', duration: 'Week 1' },
      { step: '02', title: 'Setup & Migration', description: 'Configuring hardened cloud servers and automated backups.', duration: 'Weeks 2-3' },
      { step: '03', title: '24/7 Monitoring Handover', description: 'Zero-downtime cutover and activating real-time alarms.', duration: 'Week 4' }
    ],
    faqs: [
      {
        question: 'What is included in ongoing support?',
        answer: 'Monthly retainers include server monitoring, security patches, library updates, daily backups, and dedicated developer hours for new features.'
      }
    ],
    metaTitle: 'Managed Cloud & Dedicated Support | Deep Digital Labs',
    metaDescription: 'Managed cloud infrastructure, 99.9% uptime SLAs, and dedicated engineering retainers by Deep Digital Labs.'
  }
];

// Compatibility aliases so existing detail pages resolve cleanly
export const ALIAS_SLUGS: Record<string, string> = {
  'saas-development': 'saas-web-development',
  'web-development': 'saas-web-development',
  'political-civic-tech': 'saas-web-development',
  'technical-seo-growth': 'digital-growth-seo',
  'managed-cloud-infrastructure': 'cloud-ongoing-support',
  'lifecycle-retention-automation': 'digital-growth-seo',
  'dedicated-sla-retainers': 'cloud-ongoing-support',
  'headless-commerce': 'saas-web-development',
  'enterprise-dashboards': 'saas-web-development',
  'ui-ux-modernization': 'cloud-ongoing-support',
  'local-seo-presence': 'digital-growth-seo',
  'brand-trust-reputation': 'digital-growth-seo',
  'headless-cms-architecture': 'saas-web-development'
};

export const SERVICES = CORE_SERVICES;

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const directMatch = CORE_SERVICES.find((s) => s.slug === slug);
  if (directMatch) return directMatch;
  const alias = ALIAS_SLUGS[slug];
  if (alias) return CORE_SERVICES.find((s) => s.slug === alias);
  return undefined;
}
