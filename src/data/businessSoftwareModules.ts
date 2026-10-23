export interface SoftwareModule {
  id: string;
  number: string;
  title: string;
  audience: string;
  features: string[];
  tag: string;
}

export const BUSINESS_SOFTWARE_MODULES: SoftwareModule[] = [
  {
    id: 'crm-sales',
    number: '01',
    title: 'CRM & Sales Management',
    audience: 'For sales teams, brokers, agencies and B2B companies.',
    tag: 'Sales & Growth',
    features: [
      'Customer Relationship Management (CRM)',
      'Lead Management & Lead Tracking',
      'Sales Pipeline Management',
      'AI Sales Copilot',
      'Commission Management',
      'Follow-up & Task Management',
      'Customer Database & Interaction History'
    ]
  },
  {
    id: 'erp-business',
    number: '02',
    title: 'ERP & Business Management',
    audience: 'For manufacturers, distributors, wholesalers and growing companies.',
    tag: 'Enterprise Core',
    features: [
      'Enterprise Resource Planning (ERP)',
      'Manufacturing ERP',
      'Business Operations Management',
      'Multi-Branch Management',
      'Workflow & Approval Management',
      'Vendor & Procurement Management',
      'Integrated Business Dashboard'
    ]
  },
  {
    id: 'billing-finance',
    number: '03',
    title: 'Billing, Accounting & Finance',
    audience: 'For retailers, service providers, distributors and finance teams.',
    tag: 'Finance & GST',
    features: [
      'Billing & Invoicing',
      'GST Invoice Management',
      'Payment & Outstanding Tracking',
      'Accounts Receivable Management',
      'Accounts Payable Management',
      'Loan & Repayment Management',
      'Commission & Payout Statements',
      'Financial Reports'
    ]
  },
  {
    id: 'inventory-warehouse',
    number: '04',
    title: 'Inventory, Stock & Warehouse Management',
    audience: 'For retailers, warehouses, wholesalers and manufacturers.',
    tag: 'Supply Chain',
    features: [
      'Inventory & Stock Management',
      'Multi-Warehouse Stock Tracking',
      'Purchase & Goods Receipt',
      'Stock Transfers & Adjustments',
      'Barcode & SKU Management',
      'Warehouse Management System (WMS)',
      'Low-Stock Alerts',
      'Batch & Expiry Tracking'
    ]
  },
  {
    id: 'hrms-payroll',
    number: '05',
    title: 'HRMS, Payroll & Workforce Management',
    audience: 'For businesses managing employees, attendance and payroll.',
    tag: 'People & HR',
    features: [
      'Human Resource Management System (HRMS)',
      'Employee Database',
      'Attendance & Shift Management',
      'Leave & Holiday Management',
      'Payroll Processing',
      'Employee Self-Service Portal',
      'Recruitment & Onboarding',
      'Performance & Appraisal Management'
    ]
  },
  {
    id: 'booking-appointment',
    number: '06',
    title: 'Booking, Appointment & Reservation Systems',
    audience: 'For hotels, salons, clinics, studios and travel businesses.',
    tag: 'Scheduling',
    features: [
      'Online Booking & Reservations',
      'Appointment Scheduling',
      'Hotel & Room Reservation Management',
      'Restaurant Table Booking',
      'Salon & Spa Appointment Management',
      'Photography Session Booking',
      'Resource & Venue Booking',
      'Booking Payments & Notifications'
    ]
  },
  {
    id: 'ecommerce-pos',
    number: '07',
    title: 'Ecommerce, POS & Order Management',
    audience: 'For online stores, retailers, restaurants and product businesses.',
    tag: 'Commerce',
    features: [
      'Ecommerce Website & Storefront',
      'Shopping Cart & Checkout',
      'Point of Sale (POS)',
      'Order Management System (OMS)',
      'Returns & Refund Management',
      'Retail Outlet Management',
      'Customer Order Tracking',
      'Product Catalogue Management'
    ]
  },
  {
    id: 'fleet-logistics',
    number: '08',
    title: 'Fleet, Logistics & Field Service',
    audience: 'For transport companies, delivery teams and field operations.',
    tag: 'Logistics',
    features: [
      'Fleet Management',
      'Vehicle & Driver Management',
      'Trip & Dispatch Management',
      'Delivery Tracking',
      'Field Service Management',
      'Technician Scheduling',
      'Job Cards & Work Orders',
      'Vehicle Workshop Management'
    ]
  },
  {
    id: 'ai-automation',
    number: '09',
    title: 'AI, Automation & Intelligent Agents',
    audience: 'For businesses automating repetitive tasks and customer interactions.',
    tag: 'AI Engineering',
    features: [
      'AI Chatbots',
      'AI Voice Agents',
      'AI Sales Assistants',
      'AI Workflow Automation',
      'RAG Knowledge Base',
      'Document Processing & Data Extraction',
      'AI Content Generation',
      'AI Music Generation'
    ]
  },
  {
    id: 'dashboards-analytics',
    number: '10',
    title: 'Dashboards, Reporting & Analytics',
    audience: 'For owners, management teams and operations managers.',
    tag: 'Intelligence',
    features: [
      'Business Intelligence (BI)',
      'KPI Dashboards',
      'Sales & Revenue Reports',
      'Inventory & Stock Reports',
      'Employee Performance Reports',
      'Financial Analytics',
      'Custom Reports & Data Export',
      'Real-Time Business Monitoring'
    ]
  },
  {
    id: 'client-portals',
    number: '11',
    title: 'Client Portals & Document Management',
    audience: 'For agencies, consultants, service providers and B2B companies.',
    tag: 'Client Experience',
    features: [
      'Client Portal',
      'Customer Self-Service Portal',
      'Document Management System (DMS)',
      'File Sharing & Access Permissions',
      'Client Project Tracking',
      'Document Approval Workflows',
      'Digital Forms & Submissions',
      'Reports & Download Centre'
    ]
  },
  {
    id: 'education-lms',
    number: '12',
    title: 'Education & Learning Management',
    audience: 'For schools, colleges, training institutes and online educators.',
    tag: 'EdTech',
    features: [
      'School Management System',
      'College Management System',
      'Learning Management System (LMS)',
      'Student Admission & Attendance',
      'Course & Examination Management',
      'Fee Management',
      'Student & Parent Portals',
      'Learning Progress Reports'
    ]
  },
  {
    id: 'healthcare-lims',
    number: '13',
    title: 'Healthcare & Laboratory Management',
    audience: 'For clinics, diagnostic laboratories and healthcare providers.',
    tag: 'HealthTech',
    features: [
      'Clinic Management System',
      'Patient Registration & Appointments',
      'Consultation & Clinical Records',
      'Laboratory Information Management System (LIMS)',
      'Sample Tracking & Result Management',
      'Lab Reports & Approvals',
      'Billing & Payment Tracking',
      'Patient Communication'
    ]
  },
  {
    id: 'real-estate-property',
    number: '14',
    title: 'Real Estate & Property Management',
    audience: 'For property managers, developers, landlords and real estate agencies.',
    tag: 'PropTech',
    features: [
      'Property Management System',
      'Real Estate CRM',
      'Property Listing & Enquiry Management',
      'Tenant & Lease Management',
      'Rent Collection & Payment Tracking',
      'Renewal & Maintenance Tracking',
      'Broker & Commission Management',
      'Owner & Tenant Portals'
    ]
  },
  {
    id: 'professional-services',
    number: '15',
    title: 'Professional Services Management',
    audience: 'For agencies, law firms, consultants, insurance teams and studios.',
    tag: 'Advisory & Legal',
    features: [
      'Agency Management System',
      'Legal Practice Management',
      'Insurance Policy Management',
      'Loan Management System',
      'Photography Studio Management',
      'Client & Project Management',
      'Case & Deadline Tracking',
      'Service Delivery & Approvals'
    ]
  },
  {
    id: 'manufacturing-production',
    number: '16',
    title: 'Manufacturing & Production Management',
    audience: 'For factories, industrial suppliers and production businesses.',
    tag: 'Industrial',
    features: [
      'Manufacturing ERP',
      'Production Planning & Scheduling',
      'Bill of Materials (BOM)',
      'Work Orders & Job Cards',
      'Raw Material Management',
      'Quality Control & Inspection',
      'Machine & Maintenance Tracking',
      'Production Costing & Reports'
    ]
  },
  {
    id: 'marketing-seo',
    number: '17',
    title: 'Marketing, SEO & Brand Tools',
    audience: 'For businesses, agencies, marketers and website owners.',
    tag: 'Marketing Tech',
    features: [
      'AI Brand Audit',
      'SEO & AEO Checker',
      'Website Performance Audit',
      'Brand Consistency Analysis',
      'Marketing Campaign Management',
      'Lead Capture & Campaign Tracking',
      'Content Planning & Publishing',
      'Marketing Analytics'
    ]
  },
  {
    id: 'custom-saas',
    number: '18',
    title: 'Custom Software, SaaS & Integrations',
    audience: 'For businesses that need tailored workflows or connected systems.',
    tag: 'Custom SaaS',
    features: [
      'Custom Business Software',
      'SaaS Product Development',
      'Multi-Tenant Applications',
      'API & Third-Party Integrations',
      'Workflow Automation',
      'Custom Admin Panels',
      'Multi-Role Access & Permissions',
      'Legacy System Modernisation'
    ]
  }
];
