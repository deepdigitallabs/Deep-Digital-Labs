export interface AiAutomationCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  tag: string;
}

export const AI_AUTOMATION_CATEGORIES: AiAutomationCategory[] = [
  {
    id: 'ai-agents',
    number: '01',
    title: 'AI Agents & Autonomous Systems',
    description: 'AI agents that interpret requests, use approved tools and perform defined business tasks with appropriate controls.',
    tag: 'Autonomous AI',
    capabilities: [
      'AI Agents',
      'Multi-Agent Workflows',
      'Tool Calling',
      'Human Approval',
      'Task Orchestration',
      'AI Sales Agents'
    ]
  },
  {
    id: 'workflow-n8n',
    number: '02',
    title: 'Workflow Automation & n8n',
    description: 'Automate multi-step processes across applications, databases and business teams.',
    tag: 'Pipelines & Logic',
    capabilities: [
      'n8n Workflows',
      'Zapier Automation',
      'Scheduled Jobs',
      'Conditional Logic',
      'Approval Workflows',
      'Error Handling',
      'Retry Mechanisms'
    ]
  },
  {
    id: 'whatsapp-conversational',
    number: '03',
    title: 'WhatsApp & Conversational Automation',
    description: 'Automate customer conversations, lead qualification, notifications and support handoffs.',
    tag: 'Customer Channels',
    capabilities: [
      'WhatsApp Bots',
      'WhatsApp Business API',
      'Lead Capture',
      'Automated Follow-ups',
      'Customer Support',
      'Appointment Reminders',
      'Human Handoff'
    ]
  },
  {
    id: 'api-webhooks',
    number: '04',
    title: 'API Integrations & Webhooks',
    description: 'Connect software applications and trigger actions when business events occur.',
    tag: 'Event Architecture',
    capabilities: [
      'REST APIs',
      'Webhooks',
      'Instant Event Triggers',
      'OAuth Integrations',
      'Third-Party APIs',
      'Event-Driven Workflows',
      'Data Synchronisation'
    ]
  },
  {
    id: 'knowledge-rag',
    number: '05',
    title: 'AI Knowledge Bases & RAG',
    description: 'Let employees and customers retrieve answers from approved business documents and internal knowledge.',
    tag: 'Knowledge Retrieval',
    capabilities: [
      'RAG Systems',
      'Document Search',
      'Vector Databases',
      'Semantic Search',
      'Source Citations',
      'Internal Knowledge Assistants',
      'Access Controls'
    ]
  },
  {
    id: 'voice-call-agents',
    number: '06',
    title: 'AI Voice Agents & Call Automation',
    description: 'Automate supported inbound and outbound calls while maintaining records and escalation paths.',
    tag: 'Voice AI',
    capabilities: [
      'AI Voice Agents',
      'Call Transcription',
      'Speech-to-Text',
      'Appointment Calls',
      'Lead Qualification',
      'Call Summaries',
      'Agent Handoff'
    ]
  },
  {
    id: 'crm-sales-automation',
    number: '07',
    title: 'CRM, Sales & Lead Automation',
    description: 'Reduce manual sales administration and help teams follow up on opportunities consistently.',
    tag: 'Revenue Operations',
    capabilities: [
      'Lead Enrichment',
      'Lead Scoring',
      'CRM Updates',
      'Automated Follow-ups',
      'Email Sequences',
      'Sales Notifications',
      'Deal Summaries'
    ]
  },
  {
    id: 'document-ocr',
    number: '08',
    title: 'Document Processing & OCR',
    description: 'Extract information from business documents and route it through validation and approval workflows.',
    tag: 'Document Extraction',
    capabilities: [
      'OCR',
      'Invoice Extraction',
      'PDF Processing',
      'Form Recognition',
      'Data Validation',
      'Document Classification',
      'Structured Data Output'
    ]
  },
  {
    id: 'email-notification',
    number: '09',
    title: 'Email & Notification Automation',
    description: 'Send timely updates, alerts and personalised communications based on business events.',
    tag: 'Messaging & Alerts',
    capabilities: [
      'Email Triggers',
      'Automated Campaigns',
      'Transactional Emails',
      'SMS Notifications',
      'Reminder Sequences',
      'Brevo Integration',
      'Delivery Status Tracking'
    ]
  },
  {
    id: 'database-pipelines',
    number: '10',
    title: 'Database Integration & Data Pipelines',
    description: 'Synchronise information between existing systems and reduce duplicate data entry.',
    tag: 'Data Sync',
    capabilities: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Supabase',
      'Google Sheets',
      'ETL Pipelines',
      'Data Migration',
      'Scheduled Sync',
      'Legacy System Integration'
    ]
  },
  {
    id: 'business-process',
    number: '11',
    title: 'Business Process Automation',
    description: 'Digitise repeatable operational processes across departments.',
    tag: 'Operations',
    capabilities: [
      'Purchase Approvals',
      'Order Processing',
      'Employee Onboarding',
      'Invoice Routing',
      'Ticket Assignment',
      'Inventory Alerts',
      'Task Scheduling'
    ]
  },
  {
    id: 'ai-reporting-bi',
    number: '12',
    title: 'AI Reporting & Business Intelligence',
    description: 'Collect business data, generate summaries and deliver reports automatically.',
    tag: 'Intelligence & Insights',
    capabilities: [
      'Automated Reports',
      'AI Summaries',
      'KPI Alerts',
      'Data Aggregation',
      'Spreadsheet Automation',
      'Management Digests',
      'Anomaly Notifications'
    ]
  },
  {
    id: 'automation-monitoring',
    number: '13',
    title: 'Automation Monitoring & Reliability',
    description: 'Make automated workflows easier to monitor, troubleshoot and operate reliably.',
    tag: 'Reliability & Logs',
    capabilities: [
      'Execution Logs',
      'Failure Alerts',
      'Retry Logic',
      'Error Queues',
      'Workflow Monitoring',
      'Audit Trails',
      'Credential Management',
      'Human Escalation'
    ]
  }
];
