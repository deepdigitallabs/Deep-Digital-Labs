export interface IndustrySolutionItem {
  slug: string;
  solutionTitle: string;
  businessType: string;
  industryCategory: string;
  shortDescription: string;
  solutionTypes: string[];
  keyCapabilities: string[];
  possibleIntegrations: string[];
  techStack: string[];
  iconName: string;
}

export const SOLUTION_TYPES = [
  'All Solutions',
  'Websites',
  'SaaS Platforms',
  'Business Software',
  'Web Apps',
  'Mobile Apps',
  'AI & Automation',
  'E-commerce',
  'CRM & ERP',
  'Customer Portals',
  'Booking Systems',
  'Internal Tools',
  'Marketplaces',
  'API Integrations',
  'Dashboards',
] as const;

export const INDUSTRY_CATEGORIES = [
  'All Industries',
  'Business & Corporate',
  'Professional Services',
  'Education & Training',
  'Healthcare & Wellness',
  'E-commerce & Retail',
  'Real Estate & Construction',
  'Manufacturing',
  'Logistics & Transport',
  'Agriculture',
  'Hospitality & Travel',
  'Technology & Startups',
  'Finance',
  'Legal',
  'Other Services',
] as const;

export const INDUSTRY_SOLUTIONS: IndustrySolutionItem[] = [
  // 1. Business & Corporate
  {
    slug: 'corporate-website-development',
    solutionTitle: 'Corporate Digital Solutions',
    businessType: 'Enterprises & Corporate Groups',
    industryCategory: 'Business & Corporate',
    shortDescription: 'Digital products for companies that need a strong online presence, internal systems, customer portals and scalable business infrastructure.',
    solutionTypes: ['Websites', 'Customer Portals', 'Internal Tools', 'CRM & ERP', 'Dashboards', 'AI & Automation'],
    keyCapabilities: [
      'Corporate content and investor relations portals',
      'Secure customer and employee authenticated access',
      'Internal executive dashboards and workflow automation'
    ],
    possibleIntegrations: ['PostgreSQL', 'Google Workspace', 'AWS / S3', 'Zoho CRM'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'Building2'
  },
  {
    slug: 'consultant-website-development',
    solutionTitle: 'Consulting & Advisory Solutions',
    businessType: 'Management & Strategy Consultancies',
    industryCategory: 'Professional Services',
    shortDescription: 'Digital systems for advisory firms, management consultants, and specialists to capture high-value clients and manage engagements.',
    solutionTypes: ['Websites', 'Customer Portals', 'Booking Systems', 'Internal Tools', 'AI & Automation'],
    keyCapabilities: [
      'Automated discovery call and appointment scheduling',
      'Interactive client portal and document delivery',
      'AI proposal generation and case study repositories'
    ],
    possibleIntegrations: ['Calendly', 'WhatsApp API', 'Stripe', 'HubSpot'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Briefcase'
  },
  {
    slug: 'ca-accounting-firm-website-development',
    solutionTitle: 'CA & Accounting Solutions',
    businessType: 'Chartered Accountants & Tax Advisory',
    industryCategory: 'Finance',
    shortDescription: 'Digital systems for CA firms, accountants and tax consultants — from professional websites to client portals, calculators and automated workflows.',
    solutionTypes: ['Websites', 'Customer Portals', 'CRM & ERP', 'Dashboards', 'AI & Automation', 'Internal Tools'],
    keyCapabilities: [
      'Client document vault and GST/ITR collection portals',
      'Tax, gratuity, and loan amortization calculators',
      'Automated client deadline reminders via WhatsApp & SMS'
    ],
    possibleIntegrations: ['Tally / Zoho Books', 'WhatsApp Business API', 'Razorpay', 'AWS KMS'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    iconName: 'Calculator'
  },
  {
    slug: 'law-firm-website-development',
    solutionTitle: 'Legal Practice Solutions',
    businessType: 'Law Firms & Legal Advocates',
    industryCategory: 'Legal',
    shortDescription: 'Discreet, authoritative digital platforms for legal practitioners with secure client intake, case tracking, and consultation management.',
    solutionTypes: ['Websites', 'Customer Portals', 'Booking Systems', 'Internal Tools', 'AI & Automation'],
    keyCapabilities: [
      'Secure client intake and confidential matter intake forms',
      'Court calendar and attorney appointment management',
      'Legal insights publishing with categorized case law archive'
    ],
    possibleIntegrations: ['Google Calendar', 'WhatsApp API', 'Razorpay', 'AES-256 Storage'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Scale'
  },
  {
    slug: 'hr-recruitment-agency-website-development',
    solutionTitle: 'HR & Staffing Solutions',
    businessType: 'Recruitment Agencies & Talent Firms',
    industryCategory: 'Professional Services',
    shortDescription: 'Automated talent portals, candidate applicant tracking systems (ATS), and employer staffing dispatch engines.',
    solutionTypes: ['Web Apps', 'Customer Portals', 'Internal Tools', 'Dashboards', 'AI & Automation'],
    keyCapabilities: [
      'Resume parsing and automated applicant categorization',
      'Client employer portal to review shortlisted candidates',
      'Automated interview scheduling and candidate status alerts'
    ],
    possibleIntegrations: ['LinkedIn API', 'WhatsApp API', 'Zoho Recruit', 'SendGrid'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    iconName: 'Users'
  },
  {
    slug: 'manufacturing-company-website-development',
    solutionTitle: 'Manufacturing Digital Solutions',
    businessType: 'Industrial Plants & Equipment Manufacturers',
    industryCategory: 'Manufacturing',
    shortDescription: 'Connected digital systems for manufacturers, suppliers, and industrial businesses to manage RFQs, inventory, and dealer networks.',
    solutionTypes: ['Websites', 'CRM & ERP', 'Customer Portals', 'Internal Tools', 'Dashboards', 'API Integrations'],
    keyCapabilities: [
      'Interactive B2B product catalogs with technical spec sheets',
      'Instant RFQ quotation engine routing leads to regional reps',
      'Dealer/distributor ordering portal with inventory visibility'
    ],
    possibleIntegrations: ['SAP / Tally ERP', 'WhatsApp API', 'PostgreSQL', 'AWS S3'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    iconName: 'Factory'
  },
  {
    slug: 'logistics-transport-website-development',
    solutionTitle: 'Logistics & Transport Solutions',
    businessType: 'Fleet Operators & Freight Forwarders',
    industryCategory: 'Logistics & Transport',
    shortDescription: 'Digital systems for logistics companies, fleet operators and transport businesses to streamline tracking, dispatch, and customer accounts.',
    solutionTypes: ['Web Apps', 'Customer Portals', 'Mobile Apps', 'Dashboards', 'API Integrations', 'AI & Automation'],
    keyCapabilities: [
      'Real-time consignment tracking by airway bill / LR number',
      'Instant freight rate calculator and multi-city route lookup',
      'Driver dispatch dashboards and automated proof-of-delivery'
    ],
    possibleIntegrations: ['GPS Telematics API', 'WhatsApp API', 'SMS Gateway', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    iconName: 'Truck'
  },
  {
    slug: 'professional-services-website-development',
    solutionTitle: 'Professional Services Solutions',
    businessType: 'Auditors, Architects & Valuation Firms',
    industryCategory: 'Professional Services',
    shortDescription: 'High-polish digital workspaces and project showcase platforms for specialized technical and professional service firms.',
    solutionTypes: ['Websites', 'Customer Portals', 'Internal Tools', 'Booking Systems'],
    keyCapabilities: [
      'Credentialed case study and engagement portfolio viewer',
      'Automated quote calculation and client onboarding',
      'Interactive engagement scope builder and lead qualification'
    ],
    possibleIntegrations: ['Google Workspace', 'Calendly', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Briefcase'
  },
  {
    slug: 'travel-and-tourism-website-development',
    solutionTitle: 'Travel & Tourism Digital Platforms',
    businessType: 'Tour Operators & Destination Managers',
    industryCategory: 'Hospitality & Travel',
    shortDescription: 'Turnkey holiday package engines, multi-day itinerary builders, booking systems, and instant WhatsApp inquiry flows.',
    solutionTypes: ['Websites', 'Booking Systems', 'E-commerce', 'Mobile Apps', 'Customer Portals'],
    keyCapabilities: [
      'Interactive holiday package catalogs with day-by-day itineraries',
      'Custom travel inquiry builder with dates, hotel tier & headcount',
      'Secure partial advance payments and automated voucher issuance'
    ],
    possibleIntegrations: ['Razorpay / Stripe', 'WhatsApp Business API', 'Google Maps API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'Plane'
  },
  {
    slug: 'immigration-consultant-website-development',
    solutionTitle: 'Immigration & Visa Systems',
    businessType: 'Overseas Visa & Immigration Advisory',
    industryCategory: 'Professional Services',
    shortDescription: 'Lead qualification funnels, eligibility score calculators, and document upload portals for international visa firms.',
    solutionTypes: ['Web Apps', 'Customer Portals', 'AI & Automation', 'CRM & ERP'],
    keyCapabilities: [
      'Interactive points and visa eligibility calculator for applicants',
      'Country-specific requirement guides (Canada, UK, Australia, EU)',
      'Automated client CRM lead routing with priority tier alerts'
    ],
    possibleIntegrations: ['Zoho CRM', 'WhatsApp API', 'SendGrid', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    iconName: 'Globe'
  },

  // 2. Education & Training
  {
    slug: 'school-website-development',
    solutionTitle: 'School Digital Solutions',
    businessType: 'K-12 Schools, Academies & Trusts',
    industryCategory: 'Education & Training',
    shortDescription: 'Digital platforms for schools and academic trusts — from public institutional websites to student portals, admissions, and fee desks.',
    solutionTypes: ['Websites', 'Customer Portals', 'Internal Tools', 'Dashboards'],
    keyCapabilities: [
      'Online student admission and document collection desk',
      'Mandatory board disclosure and academic calendar repositories',
      'Parent announcement feed and fee receipt generation'
    ],
    possibleIntegrations: ['Payment Gateway', 'SMS / WhatsApp Gateway', 'Google Drive'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'School'
  },
  {
    slug: 'coaching-institute-website-development',
    solutionTitle: 'Coaching & Academy Platforms',
    businessType: 'Coaching Centers & Test Prep Hubs',
    industryCategory: 'Education & Training',
    shortDescription: 'High-conversion admission funnels, batch schedule viewers, faculty showcases, and topper result galleries for coaching institutes.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals', 'AI & Automation'],
    keyCapabilities: [
      'Live batch timetables, subject syllabi, and faculty directories',
      'Online demo class seat reservations and admission fee collection',
      'Instant WhatsApp counseling triggers for parents and students'
    ],
    possibleIntegrations: ['WhatsApp API', 'Razorpay', 'Zoom API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'GraduationCap'
  },
  {
    slug: 'tuition-classes-website-development',
    solutionTitle: 'Tuition Class Management Systems',
    businessType: 'Neighborhood & Specialized Tuition Centers',
    industryCategory: 'Education & Training',
    shortDescription: 'Mobile-first platforms for neighborhood coaching classes to capture local parents, broadcast schedules, and manage fees.',
    solutionTypes: ['Websites', 'Customer Portals', 'Booking Systems'],
    keyCapabilities: [
      'Standard-wise batch schedules and curriculum overviews',
      'Online seat reservation with direct parent WhatsApp notifications',
      'Student attendance and report card download portals'
    ],
    possibleIntegrations: ['WhatsApp Business API', 'Razorpay', 'Google Maps'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'BookOpen'
  },
  {
    slug: 'online-tutor-website-development',
    solutionTitle: 'Online Tutoring Platforms',
    businessType: 'Independent Educators & Ed-Creators',
    industryCategory: 'Education & Training',
    shortDescription: 'Personal educator brands, digital video lesson vaults, automated paid 1-on-1 bookings, and course sales funnels.',
    solutionTypes: ['Web Apps', 'SaaS Platforms', 'E-commerce', 'Booking Systems', 'Customer Portals'],
    keyCapabilities: [
      '1-on-1 private lesson booking with automated calendar synching',
      'Digital study notes and recorded lecture checkout with zero fees',
      'Student review showcases and student transformation proof'
    ],
    possibleIntegrations: ['Stripe / Razorpay', 'Calendly', 'Vimeo / YouTube', 'Zoom'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    iconName: 'Video'
  },
  {
    slug: 'competitive-exam-coaching-website-development',
    solutionTitle: 'Competitive Exam Hub Platforms',
    businessType: 'JEE, NEET, UPSC & MPSC Academies',
    industryCategory: 'Education & Training',
    shortDescription: 'Heavy-traffic examination portals featuring mock test registrations, rank predictor tools, and syllabus downloads.',
    solutionTypes: ['Web Apps', 'Customer Portals', 'Dashboards', 'AI & Automation'],
    keyCapabilities: [
      'Interactive rank predictor and cut-off score calculators',
      'Daily current affairs and downloadable question paper vaults',
      'Multi-branch batch registration with instant SMS seat confirmation'
    ],
    possibleIntegrations: ['SMS Gateway', 'WhatsApp API', 'Razorpay', 'PostgreSQL'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Award'
  },
  {
    slug: 'skill-development-institute-website-development',
    solutionTitle: 'Skill Academy & Vocational Systems',
    businessType: 'Design, Animation & Trade Academies',
    industryCategory: 'Education & Training',
    shortDescription: 'Career-focused course portfolios, student project showcases, internship placement trackers, and syllabus downloads.',
    solutionTypes: ['Websites', 'Customer Portals', 'E-commerce', 'Internal Tools'],
    keyCapabilities: [
      'Detailed curriculum outlines with downloadable PDF brochures',
      'Hiring partner directory and student placement showcase',
      'Early-bird installment fee payment integration'
    ],
    possibleIntegrations: ['Razorpay', 'WhatsApp API', 'HubSpot'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Sparkles'
  },
  {
    slug: 'it-professional-training-institute-website-development',
    solutionTitle: 'IT Training & Bootcamp Platforms',
    businessType: 'Software Bootcamps & Tech Academies',
    industryCategory: 'Education & Training',
    shortDescription: 'High-tech training portals with live code preview showcases, weekend batch enrollment, and corporate upskilling inquiry engines.',
    solutionTypes: ['Web Apps', 'Customer Portals', 'Booking Systems', 'Dashboards'],
    keyCapabilities: [
      'Full-stack and cloud certification syllabus interactive breakdowns',
      'Free weekend workshop seat reservation with reminder automation',
      'Corporate training proposal request customizer'
    ],
    possibleIntegrations: ['GitHub API', 'Zoom API', 'Razorpay', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Terminal'
  },
  {
    slug: 'language-test-prep-institute-website-development',
    solutionTitle: 'Language & IELTS Prep Portals',
    businessType: 'IELTS, TOEFL, German & French Centers',
    industryCategory: 'Education & Training',
    shortDescription: 'Diagnostic test schedulers, band score assessment tools, and study-abroad counseling funnels.',
    solutionTypes: ['Web Apps', 'Booking Systems', 'Customer Portals', 'AI & Automation'],
    keyCapabilities: [
      'Online band score evaluation and free diagnostic test booking',
      'Country language prerequisite guide and exam dates calendar',
      'Student visa success story feeds and video testimonials'
    ],
    possibleIntegrations: ['WhatsApp API', 'Calendly', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Languages'
  },

  // 3. E-Commerce & Retail
  {
    slug: 'jewellery-ecommerce-website-development',
    solutionTitle: 'Luxury Jewellery Commerce Systems',
    businessType: 'Fine Jewellery & Bridal Boutiques',
    industryCategory: 'E-commerce & Retail',
    shortDescription: 'High-aesthetic commerce architectures with BIS hallmark badges, gold rate calculators, custom ring builders, and insured checkout.',
    solutionTypes: ['E-commerce', 'Mobile Apps', 'Customer Portals', 'API Integrations'],
    keyCapabilities: [
      'Live daily gold & silver bullion price ticker synchronization',
      'High-resolution zoom galleries and ring size guide interactive tools',
      'Direct WhatsApp jewelry specialist concierge button'
    ],
    possibleIntegrations: ['Bullion Price Feed API', 'Razorpay / Cashfree', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'Gem'
  },
  {
    slug: 'fashion-apparel-website-development',
    solutionTitle: 'Fashion & D2C Apparel Platforms',
    businessType: 'Apparel Brands, Designers & Boutiques',
    industryCategory: 'E-commerce & Retail',
    shortDescription: 'Sub-second mobile D2C storefronts with lookbook carousels, size recommendation tools, and 1-click WhatsApp checkout.',
    solutionTypes: ['E-commerce', 'Mobile Apps', 'Customer Portals', 'Marketing & SEO'],
    keyCapabilities: [
      'Lookbook visual collections and rapid variant selection (size/color)',
      'Sub-second cart checkout with Cash on Delivery (COD) verification',
      'Automated courier order dispatch and real-time tracking integration'
    ],
    possibleIntegrations: ['Shiprocket API', 'Razorpay', 'Meta Pixel', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'ShoppingBag'
  },
  {
    slug: 'beauty-skincare-ecommerce-website-development',
    solutionTitle: 'Beauty & Skincare Commerce Systems',
    businessType: 'Organic Cosmetics & Skincare D2C',
    industryCategory: 'E-commerce & Retail',
    shortDescription: 'Clean ingredient transparency portals, skin type quiz builders, subscription repeat orders, and reviews.',
    solutionTypes: ['E-commerce', 'Customer Portals', 'AI & Automation', 'Mobile Apps'],
    keyCapabilities: [
      'Interactive skin-type quiz recommending personalized routine bundles',
      'Customer review galleries with before-and-after photo uploads',
      'Automated recurring replenishment subscription billing'
    ],
    possibleIntegrations: ['Razorpay Subscriptions', 'Shiprocket', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Sparkles'
  },
  {
    slug: 'electronics-gadget-store-website-development',
    solutionTitle: 'Electronics & Hardware Commerce',
    businessType: 'Gadgets, Appliances & Tech Retailers',
    industryCategory: 'E-commerce & Retail',
    shortDescription: 'Feature comparison matrix tools, warranty registration systems, EMI calculator widgets, and inventory synchronization.',
    solutionTypes: ['E-commerce', 'Dashboards', 'CRM & ERP', 'API Integrations'],
    keyCapabilities: [
      'Side-by-side technical specification comparison tool',
      'Instant bank debit/credit card EMI installment calculators',
      'Serial number lookup and post-purchase warranty activation'
    ],
    possibleIntegrations: ['Pine Labs / Razorpay', 'Tally ERP', 'Shiprocket'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    iconName: 'Cpu'
  },
  {
    slug: 'grocery-local-delivery-website-development',
    solutionTitle: 'Hyperlocal Grocery & Quick Commerce',
    businessType: 'Organic Supermarkets & Local Food Chains',
    industryCategory: 'E-commerce & Retail',
    shortDescription: 'Pincode validation engines, slot-based delivery scheduling, inventory management, and instant WhatsApp ordering.',
    solutionTypes: ['E-commerce', 'Mobile Apps', 'Internal Tools', 'Dashboards'],
    keyCapabilities: [
      'Delivery radius validation by GPS or pincode verification',
      'Morning/evening delivery time slot selection with cutoff times',
      'Express re-order lists and WhatsApp cart dispatch'
    ],
    possibleIntegrations: ['Google Maps API', 'WhatsApp Business API', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'ShoppingBasket'
  },
  {
    slug: 'wholesale-b2b-ecommerce-website-development',
    solutionTitle: 'B2B Wholesale & Distributor Portals',
    businessType: 'Distributors, Wholesalers & Importers',
    industryCategory: 'Manufacturing',
    shortDescription: 'Tiered wholesale pricing, minimum order quantities (MOQ), GST invoice generators, and credit account portals.',
    solutionTypes: ['Customer Portals', 'CRM & ERP', 'Internal Tools', 'E-commerce'],
    keyCapabilities: [
      'Tiered bulk discount pricing grids visible only to verified accounts',
      'Automated GST compliant tax invoice generation with PDF downloads',
      'Credit limit tracking and purchase order (PO) upload workflows'
    ],
    possibleIntegrations: ['Tally / Busy ERP', 'Razorpay B2B', 'PostgreSQL'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    iconName: 'Layers'
  },
  {
    slug: 'digital-products-website-development',
    solutionTitle: 'Digital Goods & Media Sales Engines',
    businessType: 'Software Creators, Authors & Template Sellers',
    industryCategory: 'E-commerce & Retail',
    shortDescription: 'Instant secure download delivery, license key generators, zero creator platform fees, and global payment support.',
    solutionTypes: ['Web Apps', 'E-commerce', 'Customer Portals', 'API Integrations'],
    keyCapabilities: [
      'Expiring single-use authenticated download URLs for files',
      'Automated unique software license key generation and validation',
      'Global currency conversions with Stripe & PayPal integration'
    ],
    possibleIntegrations: ['Stripe', 'Razorpay', 'AWS S3 CloudFront'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    iconName: 'Download'
  },

  // 4. Real Estate & Construction
  {
    slug: 'real-estate-consultant-broker-website-development',
    solutionTitle: 'Real Estate Broker & Property Portals',
    businessType: 'Property Consultants & Channel Partners',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Technology for brokers, developers, channel partners and property businesses to manage properties, leads, customers and site visits.',
    solutionTypes: ['Websites', 'CRM & ERP', 'Mobile Apps', 'Customer Portals', 'AI & Automation'],
    keyCapabilities: [
      'Advanced multi-parameter property filters (BHK, budget, micro-market)',
      '1-click site visit booking with automated WhatsApp calendar sync',
      'Interactive EMI calculators and verified RERA disclosure badges'
    ],
    possibleIntegrations: ['Google Maps API', 'WhatsApp Business API', 'LeadSquared / CRM'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'Building'
  },
  {
    slug: 'property-dealer-website-development',
    solutionTitle: 'Local Property Directory Platforms',
    businessType: 'Neighborhood Realtors & Rental Agents',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Localized rental and resale property inventory showcases with quick WhatsApp owner connect buttons and neighborhood maps.',
    solutionTypes: ['Websites', 'Internal Tools', 'Customer Portals'],
    keyCapabilities: [
      'Direct WhatsApp inquiry with auto-attached property ID',
      'Rental vs resale toggle with transparent price tags',
      'Locality highlight cards with nearby school and metro distances'
    ],
    possibleIntegrations: ['WhatsApp API', 'Google Maps API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Home'
  },
  {
    slug: 'builder-developer-website-development',
    solutionTitle: 'Real Estate Developer Showcase Platforms',
    businessType: 'Property Builders & Township Developers',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Luxury project launch micro-sites, interactive master layouts, construction milestone trackers, and RERA compliance data.',
    solutionTypes: ['Websites', 'Customer Portals', 'Dashboards', 'AI & Automation'],
    keyCapabilities: [
      'Interactive master plan layout and floor plan visualizers',
      'Live construction status timeline with progress photo galleries',
      'VIP preview brochure download with phone OTP verification'
    ],
    possibleIntegrations: ['Salesforce / Zoho CRM', 'WhatsApp API', 'AWS S3'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Landmark'
  },
  {
    slug: 'construction-company-website-development',
    solutionTitle: 'Construction & EPC Infrastructure Systems',
    businessType: 'Civil Contractors & EPC Engineering Firms',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Technical credential presentations, heavy equipment fleet showcases, safety records, and government tender capability profiles.',
    solutionTypes: ['Websites', 'Customer Portals', 'Internal Tools', 'Dashboards'],
    keyCapabilities: [
      'Completed project portfolio classified by commercial, industrial, & infra',
      'Machinery and fleet inventory technical capability manifests',
      'Safety, ISO compliance, and tender pre-qualification profile download'
    ],
    possibleIntegrations: ['AWS S3', 'Google Workspace'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'HardHat'
  },
  {
    slug: 'architect-website-development',
    solutionTitle: 'Architectural Studio Platforms',
    businessType: 'Architects & Urban Planners',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Minimalist editorial project visualizers, blueprint breakdown galleries, design philosophy portfolios, and consultation requests.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals'],
    keyCapabilities: [
      'High-resolution architectural visual galleries with blueprint overlays',
      'Award, editorial publication, and design citation archives',
      'Site evaluation and bespoke residential architectural inquiry intake'
    ],
    possibleIntegrations: ['Calendly', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Compass'
  },
  {
    slug: 'interior-designer-website-development',
    solutionTitle: 'Interior Design Studio Systems',
    businessType: 'Interior Designers & Decor Studios',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Immersive before-and-after room transformation sliders, budget estimation calculators, and turnkey package brochures.',
    solutionTypes: ['Websites', 'Customer Portals', 'Booking Systems', 'AI & Automation'],
    keyCapabilities: [
      'Interactive before/after transformation image comparison slider',
      'Per-sqft interior budget estimation calculator widget',
      '3D consultation appointment booking with floor plan upload'
    ],
    possibleIntegrations: ['WhatsApp API', 'Razorpay', 'Calendly'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Palette'
  },
  {
    slug: 'infrastructure-company-website-development',
    solutionTitle: 'Large-Scale Infrastructure Platforms',
    businessType: 'Highway, Bridge & Urban Infra Developers',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Enterprise credentials, megaproject showcases, CSR disclosures, and investor relations for public infrastructure developers.',
    solutionTypes: ['Websites', 'Dashboards', 'Customer Portals'],
    keyCapabilities: [
      'Megaproject case studies with technical engineering specifications',
      'Environmental Impact Assessment (EIA) & CSR initiative documentation',
      'Vendor and contractor registration portal with document submission'
    ],
    possibleIntegrations: ['PostgreSQL', 'AWS S3', 'Google Workspace'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Milestone'
  },
  {
    slug: 'project-management-consultant-website-development',
    solutionTitle: 'Construction Project Management Systems',
    businessType: 'PMC & Quantity Surveying Consultants',
    industryCategory: 'Real Estate & Construction',
    shortDescription: 'Cost audit capability profiles, construction milestone audit frameworks, and client login document portals for PMCs.',
    solutionTypes: ['Websites', 'Customer Portals', 'Internal Tools', 'Dashboards'],
    keyCapabilities: [
      'Value engineering and cost optimization case study metrics',
      'Client document portal for monthly audit and inspection reports',
      'Interactive project scope and PMC fee estimation intake'
    ],
    possibleIntegrations: ['PostgreSQL', 'Google Workspace', 'SendGrid'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'ClipboardCheck'
  },

  // 5. Healthcare & Wellness
  {
    slug: 'optometrist-eye-clinic-website-development',
    solutionTitle: 'Eye Care & Optical Clinic Solutions',
    businessType: 'Eye Clinics, Optometrists & Lasik Centers',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Vision test online scheduling, eye doctor profiles, Lasik eligibility assessments, and eyewear catalog showcases.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals', 'AI & Automation'],
    keyCapabilities: [
      'Slot-based computerized eye checkup appointment scheduling',
      'Treatment procedure guides (Cataract, Lasik, Glaucoma, Pediatric)',
      'Eyewear frame virtual catalog with prescription power upload'
    ],
    possibleIntegrations: ['WhatsApp API', 'SMS Gateway', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Eye'
  },
  {
    slug: 'doctor-medical-clinic-website-development',
    solutionTitle: 'Healthcare & Medical Clinic Systems',
    businessType: 'Multi-Specialty Clinics & Doctors',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Digital products for clinics, doctors, diagnostic centers and wellness businesses to manage appointments, patients, and communication.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals', 'Mobile Apps', 'AI & Automation'],
    keyCapabilities: [
      'Real-time doctor appointment booking with token numbering',
      'Specialist physician credentials, OPD schedules, and room numbers',
      'Patient document portal to access lab reports and prescription archives'
    ],
    possibleIntegrations: ['WhatsApp API', 'SMS Gateway', 'EMR Integration', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    iconName: 'Stethoscope'
  },
  {
    slug: 'dental-clinic-website-development',
    solutionTitle: 'Dental Practice & Clinic Platforms',
    businessType: 'Dental Clinics & Orthodontic Specialists',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Smile makeover transformation galleries, pain-free dental procedure explainers, and instant chair appointment bookings.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals'],
    keyCapabilities: [
      'Smile transformation before & after visual comparison galleries',
      'Transparent dental procedure pricing & EMI installment guidelines',
      'Emergency toothache quick WhatsApp consultation trigger'
    ],
    possibleIntegrations: ['WhatsApp API', 'Google Calendar', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Smile'
  },
  {
    slug: 'skin-hair-aesthetic-clinic-website-development',
    solutionTitle: 'Aesthetic & Dermatology Clinic Systems',
    businessType: 'Cosmetology & Hair Transplant Clinics',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Clinical transformation galleries, graft calculators, procedure consultation schedulers, and post-care guides.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals', 'AI & Automation'],
    keyCapabilities: [
      'Hair transplant graft count calculator and estimate generator',
      'High-definition clinical result showcases filtered by treatment type',
      'Private aesthetic consultation booking with direct doctor follow-up'
    ],
    possibleIntegrations: ['WhatsApp Business API', 'Razorpay', 'SendGrid'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Sparkle'
  },
  {
    slug: 'physiotherapy-clinic-website-development',
    solutionTitle: 'Physiotherapy & Rehab Systems',
    businessType: 'Rehab Centers & Physical Therapists',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Injury assessment questionnaires, home visit booking systems, rehabilitation protocol guides, and patient progress trackers.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals', 'Mobile Apps'],
    keyCapabilities: [
      'Interactive joint/pain symptom locator and preliminary care guide',
      'Home visit and clinic slot scheduling with physiotherapist selection',
      'Exercise video library access for enrolled rehabilitation patients'
    ],
    possibleIntegrations: ['WhatsApp API', 'Razorpay', 'Google Calendar'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Activity'
  },
  {
    slug: 'salon-website-development',
    solutionTitle: 'Salon & Beauty Studio Management',
    businessType: 'Hair Studios, Nail Bars & Premium Salons',
    industryCategory: 'Other Services',
    shortDescription: 'Stylist selection systems, menu ratecards, VIP package vouchers, and instant automated appointment confirmations.',
    solutionTypes: ['Websites', 'Booking Systems', 'Customer Portals', 'E-commerce'],
    keyCapabilities: [
      'Service ratecard with add-on bundles (haircut, spa, coloring)',
      'Preferred hair stylist / aesthetician selection and calendar booking',
      'Prepaid VIP membership cards and gift card checkout'
    ],
    possibleIntegrations: ['Razorpay', 'WhatsApp API', 'SMS Gateway'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Scissors'
  },
  {
    slug: 'spa-wellness-website-development',
    solutionTitle: 'Spa & Ayurvedic Wellness Platforms',
    businessType: 'Luxury Day Spas & Wellness Retreats',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Sensory package selectors, couples treatment reservations, gift certificate sales, and ambient service menus.',
    solutionTypes: ['Websites', 'Booking Systems', 'E-commerce', 'Customer Portals'],
    keyCapabilities: [
      'Therapeutic massage & Ayurvedic therapy curated treatment menu',
      'Couple & individual reservation booking with time-slot selection',
      'Digital gift card delivery with custom recipient message via WhatsApp'
    ],
    possibleIntegrations: ['Razorpay / Stripe', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Heart'
  },
  {
    slug: 'yoga-studio-website-development',
    solutionTitle: 'Yoga Studio & Retreat Portals',
    businessType: 'Yoga Academies & Meditation Studios',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Weekly class schedule calendars, membership pass sales, retreat registrations, and digital workshop streaming portals.',
    solutionTypes: ['Web Apps', 'Booking Systems', 'E-commerce', 'Customer Portals'],
    keyCapabilities: [
      'Weekly live yoga timetable with morning/evening batch passes',
      'Monthly recurring subscription plans and drop-in session passes',
      'Weekend wellness retreat registration and booking engine'
    ],
    possibleIntegrations: ['Razorpay Subscriptions', 'Zoom API', 'WhatsApp API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Sun'
  },
  {
    slug: 'fitness-trainer-website-development',
    solutionTitle: 'Fitness Coach & Trainer Systems',
    businessType: 'Personal Trainers & Strength Coaches',
    industryCategory: 'Healthcare & Wellness',
    shortDescription: 'Client body transformation case studies, training plan sales, nutrition portal logins, and consultation intake funnels.',
    solutionTypes: ['Websites', 'Customer Portals', 'Booking Systems', 'E-commerce'],
    keyCapabilities: [
      'Weight loss and muscle gain verified client transformation feeds',
      '12-week customized training program checkout with instant access',
      'Free fitness evaluation intake form with direct WhatsApp workout plan'
    ],
    possibleIntegrations: ['Razorpay', 'WhatsApp API', 'Stripe'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Dumbbell'
  },

  // 6. Technology & Startups
  {
    slug: 'it-services-company-website-development',
    solutionTitle: 'IT Services & Cloud Solutions',
    businessType: 'Managed IT & Cloud Engineering Firms',
    industryCategory: 'Technology & Startups',
    shortDescription: 'Enterprise IT capability architecture, SLA metrics, case studies, technology partner badges, and sales proposal funnels.',
    solutionTypes: ['Websites', 'Customer Portals', 'Internal Tools', 'Dashboards'],
    keyCapabilities: [
      'Cloud, DevOps, cybersecurity and managed infrastructure solution pages',
      'Interactive ROI cost savings estimator for enterprise cloud migrations',
      'Verified technology partnership showcases (AWS, Microsoft, Google Cloud)'
    ],
    possibleIntegrations: ['HubSpot / Salesforce', 'Google Workspace'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Server'
  },
  {
    slug: 'software-company-website-development',
    solutionTitle: 'Custom Software & Engineering Solutions',
    businessType: 'Software Agencies & Systems Integrators',
    industryCategory: 'Technology & Startups',
    shortDescription: 'Engineering portfolio showcases, technology stack benchmarks, agile sprint scopes, and direct CTO discovery bookings.',
    solutionTypes: ['Websites', 'Web Apps', 'Customer Portals', 'API Integrations'],
    keyCapabilities: [
      'Deep architectural case study breakdowns with code snippets & metrics',
      'Interactive sprint estimator calculating delivery timelines and cost',
      'Direct developer contact channel with senior engineering team'
    ],
    possibleIntegrations: ['GitHub API', 'Calendly', 'WhatsApp API'],
    techStack: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'Code'
  },
  {
    slug: 'saas-website-development',
    solutionTitle: 'SaaS Product Solutions',
    businessType: 'B2B & B2C SaaS Software Platforms',
    industryCategory: 'Technology & Startups',
    shortDescription: 'Digital products for startups and software companies — user authentication, subscription billing, product dashboards, and API development.',
    solutionTypes: ['SaaS Platforms', 'Web Apps', 'Dashboards', 'API Integrations', 'Customer Portals'],
    keyCapabilities: [
      'SaaS product development with multi-tenant PostgreSQL backend',
      'User authentication, RBAC permissions, and team organization invites',
      'Tiered subscription billing with monthly/annual discount toggles'
    ],
    possibleIntegrations: ['Stripe Billing / Razorpay', 'PostgreSQL', 'AWS S3', 'Resend'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    iconName: 'Cpu'
  },
  {
    slug: 'tech-startup-website-development',
    solutionTitle: 'Tech Startup MVP & Growth Engines',
    businessType: 'Early-Stage & Seed-Funded Startups',
    industryCategory: 'Technology & Startups',
    shortDescription: 'High-energy launch platforms with waitlist referral loops, investor pitch room repositories, and rapid product validation mechanics.',
    solutionTypes: ['Web Apps', 'SaaS Platforms', 'Mobile Apps', 'Dashboards', 'AI & Automation'],
    keyCapabilities: [
      'Viral early-access waitlist signup engine with queue positioning',
      'Password-protected investor data room for pitch decks & financial models',
      'High-velocity product feature changelog and public roadmap view'
    ],
    possibleIntegrations: ['PostgreSQL', 'Stripe', 'SendGrid', 'Mixpanel'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Rocket'
  },
  {
    slug: 'app-company-website-development',
    solutionTitle: 'Mobile App Product Portals',
    businessType: 'iOS & Android App Product Houses',
    industryCategory: 'Technology & Startups',
    shortDescription: 'App Store and Google Play smart badge redirectors, live mobile UI screen mockups, feature breakdowns, and support desks.',
    solutionTypes: ['Mobile Apps', 'Web Apps', 'Customer Portals', 'API Integrations'],
    keyCapabilities: [
      'Smart OS detection auto-directing clicks to Apple App Store or Google Play',
      'Interactive mobile device frame showcase featuring app interface workflows',
      'In-app help documentation repository and user ticket submit form'
    ],
    possibleIntegrations: ['App Store API', 'Google Play API', 'Firebase'],
    techStack: ['Next.js', 'Flutter', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Smartphone'
  },
  {
    slug: 'digital-agency-website-development',
    solutionTitle: 'Agency & Creative Studio Platforms',
    businessType: 'Performance Marketing & Creative Agencies',
    industryCategory: 'Professional Services',
    shortDescription: 'High-impact dynamic case studies, client metric counters, interactive pitch decks, and lead generation funnels.',
    solutionTypes: ['Websites', 'Customer Portals', 'Dashboards', 'AI & Automation'],
    keyCapabilities: [
      'Bold motion-driven visual portfolio with video preview integration',
      'Client revenue & ROAS transformation metric ticker counters',
      'Project scope configurator routing inquiries directly to founders'
    ],
    possibleIntegrations: ['WhatsApp API', 'Calendly', 'SendGrid'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    iconName: 'Wand2'
  },
  {
    slug: 'ai-automation-business-website-development',
    solutionTitle: 'AI & Automation Solutions',
    businessType: 'Autonomous AI & Workflow Automation Firms',
    industryCategory: 'Technology & Startups',
    shortDescription: 'Interactive workflow diagram visualizers, live prompt demo sandboxes, API documentation vaults, and automation pilot bookings.',
    solutionTypes: ['AI & Automation', 'SaaS Platforms', 'API Integrations', 'Internal Tools', 'Dashboards'],
    keyCapabilities: [
      'Interactive node-based automation workflow visual diagrams',
      'Live AI prompt demonstration simulator showing business outcomes',
      'Enterprise automation pilot discovery call and ROI assessment calendar'
    ],
    possibleIntegrations: ['OpenAI / Mistral APIs', 'n8n / Zapier', 'PostgreSQL', 'WhatsApp API'],
    techStack: ['Next.js', 'Python', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'Bot'
  },
  {
    slug: 'tours-and-travels-website-development',
    solutionTitle: 'Fleet & Rental Travel Platforms',
    businessType: 'Cab Services, Bus Fleets & Tour Planners',
    industryCategory: 'Hospitality & Travel',
    shortDescription: 'Distance fare calculators, outstation cab booking selectors, fleet galleries, and instant driver dispatch alerts.',
    solutionTypes: ['Booking Systems', 'Web Apps', 'Customer Portals', 'Mobile Apps'],
    keyCapabilities: [
      'Point-to-point and outstation per-kilometer taxi fare estimate calculator',
      'Vehicle fleet selection (Sedan, SUV, Tempo Traveller, Luxury Bus)',
      'Instant ride reservation with driver WhatsApp dispatch integration'
    ],
    possibleIntegrations: ['Google Maps Matrix API', 'WhatsApp API', 'Razorpay'],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    iconName: 'Car'
  }
];
