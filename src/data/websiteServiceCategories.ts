export interface WebsiteServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  services: string[];
  tag: string;
}

export const WEBSITE_SERVICE_CATEGORIES: WebsiteServiceCategory[] = [
  {
    id: 'business-corporate',
    number: '01',
    title: 'Business & Corporate Websites',
    description: 'Professional websites for companies, manufacturers, service providers and growing businesses.',
    tag: 'Corporate & Brand',
    services: [
      'Corporate Websites',
      'Company Profiles',
      'Service Websites',
      'Manufacturer Websites',
      'B2B Websites',
      'Multi-Page Websites',
      'Brand Websites'
    ]
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX & Web Design',
    description: 'User-focused interfaces designed to build trust, improve usability and encourage enquiries.',
    tag: 'Design & Experience',
    services: [
      'UI/UX Design',
      'Responsive Layouts',
      'Landing Page Design',
      'Design Systems',
      'Wireframes',
      'Prototyping',
      'Accessibility',
      'Brand Consistency'
    ]
  },
  {
    id: 'custom-web-dev',
    number: '03',
    title: 'Custom Website Development',
    description: 'Fast, secure, custom-built websites tailored to your business requirements.',
    tag: 'Engineering',
    services: [
      'Frontend Development',
      'Full-Stack Development',
      'Custom Components',
      'Interactive Websites',
      'API Integration',
      'Database Integration',
      'Admin Panels',
      'Web Applications'
    ]
  },
  {
    id: 'ecommerce-stores',
    number: '04',
    title: 'E-commerce & Online Stores',
    description: 'Online shopping experiences for product businesses, retailers and wholesalers.',
    tag: 'E-commerce',
    services: [
      'Product Catalogues',
      'Shopping Cart',
      'Secure Checkout',
      'Payment Gateway',
      'Order Tracking',
      'Inventory Integration',
      'Coupons',
      'Customer Accounts',
      'B2B Ordering'
    ]
  },
  {
    id: 'seo-visibility',
    number: '05',
    title: 'SEO & Search Visibility',
    description: 'Websites structured to help search engines understand pages and help customers discover your business.',
    tag: 'Organic Growth',
    services: [
      'Technical SEO',
      'On-Page SEO',
      'Keyword Research',
      'Metadata',
      'Schema Markup',
      'XML Sitemaps',
      'Canonical URLs',
      'Internal Linking',
      'Image SEO',
      'AEO',
      'Search Console Setup'
    ]
  },
  {
    id: 'speed-performance',
    number: '06',
    title: 'Website Speed & Performance',
    description: 'Optimisation focused on fast loading, responsive interactions and a stable visual experience.',
    tag: 'Speed & Vitals',
    services: [
      'Core Web Vitals',
      'Image Optimisation',
      'Code Splitting',
      'Caching',
      'Lazy Loading',
      'Font Optimisation',
      'Bundle Reduction',
      'Performance Audits',
      'CDN Configuration'
    ]
  },
  {
    id: 'local-seo',
    number: '07',
    title: 'Local SEO & Business Visibility',
    description: 'Help local customers find your business, services and physical locations online.',
    tag: 'Local Presence',
    services: [
      'Google Business Profile Setup',
      'Local Landing Pages',
      'Location Pages',
      'Maps Integration',
      'LocalBusiness Schema',
      'NAP Consistency',
      'Review Integration',
      'Local Keyword Targeting'
    ]
  },
  {
    id: 'cms-content',
    number: '08',
    title: 'CMS, Blogs & Content Management',
    description: 'Websites that let businesses update their own content without editing source code.',
    tag: 'Content & CMS',
    services: [
      'WordPress',
      'Headless CMS',
      'Blog Management',
      'Dynamic Pages',
      'Content Publishing',
      'Media Libraries',
      'Category Management',
      'Author Profiles',
      'Multilingual Content'
    ]
  },
  {
    id: 'lead-generation',
    number: '09',
    title: 'Lead Generation & Conversion Optimisation',
    description: 'Turn website traffic into qualified leads, enquiries and sales opportunities.',
    tag: 'Conversion & Leads',
    services: [
      'Landing Pages',
      'Contact Forms',
      'Quote Request Forms',
      'WhatsApp CTA',
      'Booking Forms',
      'CRM Integration',
      'Conversion Tracking',
      'A/B Testing',
      'Funnel Optimisation'
    ]
  },
  {
    id: 'integrations-automation',
    number: '10',
    title: 'Website Integrations & Automation',
    description: 'Connect websites with business tools and automate repetitive customer-facing processes.',
    tag: 'Workflows & APIs',
    services: [
      'CRM Integration',
      'WhatsApp Business',
      'Email Automation',
      'Payment Gateways',
      'Google Sheets',
      'Booking Systems',
      'REST APIs',
      'Webhooks',
      'n8n Workflows',
      'Analytics Integrations'
    ]
  },
  {
    id: 'security-reliability',
    number: '11',
    title: 'Website Security & Reliability',
    description: 'Protect website access, data and operational continuity with appropriate security measures.',
    tag: 'Security & Uptime',
    services: [
      'HTTPS & SSL',
      'Secure Authentication',
      'Form Spam Protection',
      'Access Controls',
      'Backup Strategy',
      'Dependency Updates',
      'Security Headers',
      'Uptime Monitoring',
      'Privacy Compliance Support'
    ]
  },
  {
    id: 'analytics-tracking',
    number: '12',
    title: 'Analytics & Tracking',
    description: 'Understand how visitors find, navigate and interact with your website.',
    tag: 'Data & Tracking',
    services: [
      'Google Analytics 4',
      'Google Search Console',
      'Microsoft Clarity',
      'Conversion Events',
      'Traffic Reports',
      'User Behaviour',
      'Campaign Tracking',
      'Form Submission Tracking'
    ]
  },
  {
    id: 'hosting-deployment',
    number: '13',
    title: 'Hosting, Deployment & Domain Setup',
    description: 'Deploy websites and configure the infrastructure needed to keep them accessible.',
    tag: 'Infrastructure',
    services: [
      'Domain Configuration',
      'DNS Setup',
      'Hosting Setup',
      'Vercel Deployment',
      'Cloud Hosting',
      'CI/CD',
      'Environment Configuration',
      'CDN',
      'SSL Setup',
      'Deployment Monitoring'
    ]
  },
  {
    id: 'maintenance-support',
    number: '14',
    title: 'Website Maintenance & Support',
    description: 'Keep websites updated, functional and aligned with changing business requirements.',
    tag: 'Long-term Support',
    services: [
      'Bug Fixes',
      'Content Updates',
      'Security Patches',
      'Dependency Updates',
      'Backup Checks',
      'Broken Link Fixes',
      'Performance Monitoring',
      'Technical Support',
      'Feature Enhancements'
    ]
  },
  {
    id: 'ai-powered-websites',
    number: '15',
    title: 'AI-Powered Websites',
    description: 'Add intelligent features that improve customer support and automate website interactions.',
    tag: 'AI Features',
    services: [
      'AI Chatbots',
      'AI Voice Agents',
      'RAG Knowledge Search',
      'AI Product Recommendations',
      'Smart Search',
      'Automated Lead Qualification',
      'AI Content Tools',
      'Support Assistants'
    ]
  },
  {
    id: 'industry-specific',
    number: '16',
    title: 'Industry-Specific Websites',
    description: 'Tailored website structures for specialised industries and business models.',
    tag: 'Verticals',
    services: [
      'Real Estate',
      'Travel & Tourism',
      'Manufacturing',
      'Agriculture',
      'CA & Professional Firms',
      'Restaurants',
      'Hotels',
      'Education',
      'Healthcare',
      'Logistics',
      'Portfolio Websites'
    ]
  }
];
