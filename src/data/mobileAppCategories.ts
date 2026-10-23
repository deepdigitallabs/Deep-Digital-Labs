export interface MobileAppCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  tag: string;
}

export const MOBILE_APP_CATEGORIES: MobileAppCategory[] = [
  {
    id: 'cross-platform',
    number: '01',
    title: 'Cross-Platform App Development',
    description: 'Build applications for Android and iOS using a shared codebase where appropriate, reducing duplicated development effort.',
    tag: 'Flutter & React Native',
    capabilities: [
      'Flutter',
      'React Native',
      'Shared Codebases',
      'Responsive Mobile UI',
      'Reusable Components',
      'Cross-Platform Testing'
    ]
  },
  {
    id: 'native-android',
    number: '02',
    title: 'Native Android Applications',
    description: 'Android apps designed for platform-specific performance, device features and user experience.',
    tag: 'Android Native',
    capabilities: [
      'Kotlin',
      'Java',
      'Android SDK',
      'Material Design',
      'Camera Integration',
      'Location Services',
      'Background Tasks',
      'Google Play Release'
    ]
  },
  {
    id: 'native-ios',
    number: '03',
    title: 'Native iOS Applications',
    description: "iPhone and iPad applications built around Apple's platform conventions and device capabilities.",
    tag: 'Apple Ecosystem',
    capabilities: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Apple Sign-In',
      'Face ID',
      'Apple Push Notifications',
      'iOS Testing',
      'App Store Submission'
    ]
  },
  {
    id: 'offline-first',
    number: '04',
    title: 'Offline-First Applications & Synchronisation',
    description: 'Let users continue working without a stable internet connection, then synchronise changes when connectivity returns.',
    tag: 'Offline Engine',
    capabilities: [
      'Local Database',
      'Offline Forms',
      'Cached Data',
      'Sync Queues',
      'Conflict Resolution',
      'Retry Logic',
      'Connection Status',
      'Failed Sync Recovery'
    ]
  },
  {
    id: 'enterprise-mobile',
    number: '05',
    title: 'Business & Enterprise Mobile Apps',
    description: 'Extend business systems to mobile devices so employees and managers can access important workflows on the go.',
    tag: 'Enterprise Core',
    capabilities: [
      'Mobile CRM',
      'ERP Companion Apps',
      'HRMS',
      'Inventory',
      'Billing',
      'Approvals',
      'Employee Self-Service',
      'Management Dashboards'
    ]
  },
  {
    id: 'field-team-workforce',
    number: '06',
    title: 'Field-Team & Workforce Apps',
    description: 'Help distributed teams manage assignments, capture information and report job progress from the field.',
    tag: 'Field Operations',
    capabilities: [
      'Job Assignment',
      'Digital Checklists',
      'Attendance',
      'GPS Check-ins',
      'Photo Uploads',
      'Service Reports',
      'Work Orders',
      'Offline Data Capture'
    ]
  },
  {
    id: 'ecommerce-customer',
    number: '07',
    title: 'Ecommerce & Customer Apps',
    description: 'Create mobile shopping experiences for customers to discover products, place orders and track purchases.',
    tag: 'Mobile Commerce',
    capabilities: [
      'Product Catalogue',
      'Cart & Checkout',
      'Payment Gateway',
      'Order Tracking',
      'Wishlists',
      'Loyalty Programs',
      'Customer Accounts',
      'Delivery Updates'
    ]
  },
  {
    id: 'booking-on-demand',
    number: '08',
    title: 'Booking & On-Demand Apps',
    description: 'Allow customers to book services, select time slots and receive booking confirmations from their phones.',
    tag: 'Bookings & Services',
    capabilities: [
      'Appointment Scheduling',
      'Hotel Booking',
      'Travel Apps',
      'Salon & Clinic Apps',
      'Service Requests',
      'Availability',
      'Booking Payments',
      'Reminders'
    ]
  },
  {
    id: 'logistics-delivery-gps',
    number: '09',
    title: 'Logistics, Delivery & GPS Apps',
    description: 'Provide delivery teams and operations managers with mobile tools for tracking jobs, routes and delivery status.',
    tag: 'GPS & Telematics',
    capabilities: [
      'GPS Tracking',
      'Route Information',
      'Driver Apps',
      'Proof of Delivery',
      'Geofencing',
      'Dispatch Updates',
      'Trip Logs',
      'Delivery Status'
    ]
  },
  {
    id: 'payments-financial',
    number: '10',
    title: 'Payments & Financial Mobile Apps',
    description: 'Integrate mobile workflows with payment providers and transaction systems.',
    tag: 'UPI & Fintech',
    capabilities: [
      'UPI Integration',
      'Payment Gateway',
      'Transaction History',
      'Digital Receipts',
      'Subscription Payments',
      'Refund Status',
      'Payment Notifications'
    ]
  },
  {
    id: 'messaging-notifications',
    number: '11',
    title: 'Messaging, Notifications & Engagement',
    description: 'Keep users informed about important events and help them interact with your business.',
    tag: 'Engagement',
    capabilities: [
      'Push Notifications',
      'In-App Messaging',
      'Deep Links',
      'Email Integration',
      'WhatsApp Integration',
      'Reminders',
      'Announcement Feeds',
      'Notification Preferences'
    ]
  },
  {
    id: 'authentication-security',
    number: '12',
    title: 'Authentication & Mobile Security',
    description: 'Protect user accounts, sensitive information and application access.',
    tag: 'Security & Auth',
    capabilities: [
      'Secure Login',
      'OAuth',
      'Multi-Factor Authentication',
      'Biometric Login',
      'Role-Based Access',
      'Secure Token Storage',
      'Session Management',
      'Encryption'
    ]
  },
  {
    id: 'camera-hardware',
    number: '13',
    title: 'Camera, Scanning & Device Integrations',
    description: 'Use device capabilities to simplify data collection, verification and everyday tasks.',
    tag: 'Hardware Integration',
    capabilities: [
      'Camera & Gallery',
      'QR Code Scanning',
      'Barcode Scanning',
      'OCR',
      'Document Uploads',
      'GPS',
      'Bluetooth',
      'File Sharing',
      'Device Sensors'
    ]
  },
  {
    id: 'ai-mobile-apps',
    number: '14',
    title: 'AI-Powered Mobile Applications',
    description: 'Bring AI assistants and intelligent features directly into mobile workflows.',
    tag: 'Mobile AI',
    capabilities: [
      'AI Chatbots',
      'Voice Assistants',
      'AI Search',
      'Document Q&A',
      'Speech Recognition',
      'Smart Recommendations',
      'AI Data Extraction',
      'Automated Summaries'
    ]
  },
  {
    id: 'backend-cloud-apis',
    number: '15',
    title: 'Backend, APIs & Cloud Integration',
    description: 'Connect mobile apps to secure databases, business systems and cloud services.',
    tag: 'Cloud & Sync',
    capabilities: [
      'REST APIs',
      'GraphQL',
      'Authentication APIs',
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Firebase',
      'Cloud Storage',
      'Real-Time Events',
      'Webhooks'
    ]
  },
  {
    id: 'testing-maintenance',
    number: '16',
    title: 'Testing, Deployment & App Maintenance',
    description: 'Prepare applications for reliable releases and ongoing improvements after launch.',
    tag: 'DevOps & Stores',
    capabilities: [
      'Functional Testing',
      'Device Compatibility',
      'Automated Testing',
      'Crash Reporting',
      'Performance Monitoring',
      'CI/CD',
      'Play Store Publishing',
      'App Store Publishing',
      'Updates'
    ]
  }
];
