'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft,
  ArrowRight, 
  Check, 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  Star, 
  Globe, 
  Database, 
  Smartphone, 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Key, 
  Network, 
  TrendingUp, 
  Terminal, 
  Layers, 
  Code2, 
  ChevronDown, 
  HelpCircle,
  ExternalLink,
  Cpu,
  Activity,
  Workflow,
  Share2
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { CASE_STUDIES } from '@/data/caseStudies';

// Interactive Pipeline Step Definitions
const PIPELINE_STEPS = [
  {
    id: 1,
    title: 'Inbound Source',
    subtitle: 'WhatsApp / Form',
    desc: 'New payload received via webhook',
    icon: MessageSquare,
    color: 'text-primary',
    border: 'hover:border-primary',
    payload: {
      timestamp: '2026-04-01T10:14:22Z',
      event: 'inbound_lead',
      source: 'whatsapp_business_api',
      company: 'AgriCore Labs, Pune',
      intent: 'custom_erp_dashboard',
      sla_latency_ms: 384,
      status: 'payload_verified'
    }
  },
  {
    id: 2,
    title: 'AI Reasoning',
    subtitle: 'Intent Classifier',
    desc: 'Extract scope, urgency & budget',
    icon: Cpu,
    color: 'text-[#C026D3]',
    border: 'hover:border-[#C026D3]',
    payload: {
      timestamp: '2026-04-01T10:14:22Z',
      event: 'ai_intent_classified',
      confidence: 0.984,
      model: 'mistral-large-fast',
      extracted_entities: { scope: 'Bespoke ERP + Mobile App', budget_tier: 'Enterprise Sprint' },
      status: 'routed_to_orchestrator'
    }
  },
  {
    id: 3,
    title: 'Core Engine',
    subtitle: 'n8n Automation',
    desc: 'Deterministic parallel workflow',
    icon: Workflow,
    color: 'text-[#FF6A00]',
    border: 'border-[#FF6A00]',
    payload: {
      timestamp: '2026-04-01T10:14:23Z',
      event: 'orchestration_executed',
      flow_id: 'flow_lead_dispatch_v4',
      tasks_completed: ['sanitize_input', 'deduplicate_record', 'calculate_priority'],
      status: '200_SUCCESS'
    }
  },
  {
    id: 4,
    title: 'Data System',
    subtitle: 'CRM / ERP Sync',
    desc: 'PostgreSQL record created',
    icon: Database,
    color: 'text-blue-500',
    border: 'hover:border-blue-500',
    payload: {
      timestamp: '2026-04-01T10:14:23Z',
      event: 'db_transaction_committed',
      database: 'production_postgres_cluster',
      row_id: 'rec_8992_inbound',
      encryption: 'AES-256-GCM',
      status: 'persisted'
    }
  },
  {
    id: 5,
    title: 'Confirmation',
    subtitle: 'Instant Alert',
    desc: 'SMS + Founder WhatsApp alert',
    icon: Zap,
    color: 'text-emerald-500',
    border: 'hover:border-emerald-500',
    payload: {
      timestamp: '2026-04-01T10:14:23Z',
      event: 'notification_dispatched',
      channels: ['WhatsApp: +91 91751 52244', 'Slack: #client-inbound'],
      dispatch_time_ms: 48,
      status: 'team_alerted_instantly'
    }
  }
];

const FAQS = [
  {
    question: 'How does Deep Digital Labs differ from generic agencies or WordPress freelancers?',
    answer: 'We do not build with fragile plugins or generic templates that break over time. Every digital product is engineered using modern, high-performance tech stacks (Next.js 15, React, Flutter, and PostgreSQL). You receive clean source code, sub-second load times, and direct communication with senior engineers.'
  },
  {
    question: 'Do I own 100% of my source code and infrastructure?',
    answer: 'Yes, unconditionally. Upon delivery, you retain complete ownership of all repository code, domain registrations, databases, and deployment pipelines with zero platform hostage fees.'
  },
  {
    question: 'How fast can a business website or custom platform be delivered?',
    answer: 'Standard bespoke corporate websites typically launch within 2 to 3 weeks. Custom business software, ERP systems, and mobile applications follow structured 2-to-4 week agile sprint milestones.'
  },
  {
    question: 'Can you integrate WhatsApp lead capture and internal automation?',
    answer: 'Absolutely. We specialize in connecting websites and forms directly with WhatsApp Business APIs, automated CRM logging, and instant alerts so your sales team never misses a qualified lead.'
  }
];

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Selected work items
  const workItems = [
    {
      slug: 'rahul-b-kavale-and-co',
      title: 'Rahul B. Kavale & Co.',
      category: 'Tax & Advisory · Pune',
      domain: 'rahulbkavaleandco.com',
      year: '2025',
      image: '/images/case-studies/rahul-b-kavale.jpg',
      badge: 'Production Live',
      badgeColor: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
      desc: 'High-speed corporate portal featuring practice-area tax calculators, partner credential verification, and structured corporate inquiry routing with zero tracking latency.',
      stack: ['Next.js', 'Tailwind CSS', 'Fast CDN']
    },
    {
      slug: 'dairy-flow-pro',
      title: 'DairyFlow',
      category: 'Dairy Processing & Agri-Tech',
      domain: 'dairy-flow-pro.vercel.app',
      year: '2025',
      image: '/images/case-studies/dairy-flow-pro.jpg',
      badge: 'Cloud ERP',
      badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
      desc: 'Full-cycle cloud SaaS platform with automated FAT/SNF rate-chart calculation engines, live milk collection sheets, and instant SMS slip alerts for over 850 rural farmers.',
      stack: ['SaaS Architecture', 'SMS Gateway', 'Billing Engine']
    },
    {
      slug: 'yashodeep-agro',
      title: 'Yashodeep Agro',
      category: 'Agri-Inputs & Retail',
      domain: 'yashodeepagro.com',
      year: '2024',
      image: '/images/case-studies/yashodeep-agro.jpg',
      badge: '4.9k Catalog Hits',
      badgeColor: 'text-[#FF6A00] bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800',
      desc: 'Lightweight mobile catalog with real-time seed and fertilizer inventory specs, offline caching for weak rural connectivity, and direct one-tap WhatsApp wholesale order routing.',
      stack: ['WhatsApp Commerce', 'Offline Caching', 'PWA']
    },
    {
      slug: 'trust-carry',
      title: 'Trust Carry Logistics',
      category: 'Freight & Logistics',
      domain: 'trustcarrylogistics.in',
      year: '2024',
      image: '/images/case-studies/trust-carry.jpg',
      badge: 'Enterprise Fleet',
      badgeColor: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
      desc: 'Commercial logistics portal featuring interactive shipment waypoint lookup, truck fleet payload matrices, and streamlined B2B corporate quote builders.',
      stack: ['Fleet CRM', 'Waypoint Telemetry', 'Quote Matrix']
    }
  ];

  return (
    <div className="flex flex-col w-full text-neutral-900 dark:text-white relative bg-white dark:bg-[#08090C] transition-colors duration-200">
      
      {/* Global subtle ambient mesh / warm sunset and azure luxury studio tints */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(255,106,0,0.07)_0%,transparent_50%),radial-gradient(ellipse_at_85%_18%,rgba(23,75,255,0.06)_0%,transparent_50%),radial-gradient(circle_at_50%_75%,rgba(255,165,0,0.04)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_15%_10%,rgba(255,106,0,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_85%_18%,rgba(23,75,255,0.1)_0%,transparent_50%)]" />

      {/* =========================================================================
             HERO SECTION: High-impact technical visual + typography architecture
             ========================================================================= */}
      <section className="relative w-full overflow-hidden pb-16 sm:pb-24 pt-28 sm:pt-32 lg:pt-36">
        {/* Ambient soft glow highlights */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-[550px] w-[550px] rounded-full bg-[#FF6A00]/8 blur-[130px]" />
        <div className="pointer-events-none absolute top-48 right-10 h-[480px] w-[480px] rounded-full bg-[#174BFF]/8 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/10 shadow-xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00]" />
            </span>
            <span className="font-mono text-xs tracking-wider uppercase text-neutral-600 dark:text-neutral-300 font-medium">
              Digital Product Studio · Pune, India
            </span>
          </div>

          {/* Main Kinetic Display Heading */}
          <div className="flex flex-col tracking-tight">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.12] text-neutral-900 dark:text-white">
              Build.<span className="text-[#FF6A00]"> </span>Grow.<span className="text-[#FF6A00]"> </span><br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FF6A00] via-[#D51FFF] to-[#174BFF] bg-clip-text text-transparent">
                Go Digital.
              </span>
            </h1>
          </div>

          {/* Supporting Manifesto Copy */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Websites, business software, and AI automation built around the authentic way your business operates. Engineered for speed, stability, and zero vendor lock-in.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] via-[#E11D48] to-[#174BFF] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(255,106,0,0.25)] hover:shadow-[0_10px_28px_rgba(23,75,255,0.3)] transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-98"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/[0.05] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm tracking-wider hover:bg-neutral-50 dark:hover:bg-white/10 transition-all shadow-xs"
            >
              <Layers className="w-4 h-4 text-[#174BFF]" />
              <span>View Our Work</span>
            </a>
          </div>

          {/* Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 w-full max-w-2xl border-t border-neutral-200 dark:border-white/10 mt-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">10+ Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FF6A00] shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">Direct Dev Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Key className="w-5 h-5 text-[#C026D3] shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">100% Code Ownership</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 2: WHAT WE BUILD (SERVICES ARCHITECTURE)
             ========================================================================= */}
      <section className="w-full py-20 bg-slate-50/70 dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/[0.08] relative" id="services">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
                What we build.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
                Digital products designed strictly around your operational reality, not cookie-cutter layouts.
              </p>
            </div>
            <div className="font-mono text-xs text-neutral-500 font-medium hidden md:block">
              // 04_CORE_SPECIALIZATIONS
            </div>
          </div>

          {/* 4 High Precision Service Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service 01: Business Websites */}
            <div className="relative bg-white dark:bg-[#12151D] rounded-2xl p-7 sm:p-8 border border-neutral-200 dark:border-white/[0.08] hover:border-blue-500/50 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-bold">01 // IDENTITY &amp; CONVERSION</span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-[#174BFF] group-hover:bg-[#174BFF] group-hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#174BFF] transition-colors">
                  Business Websites
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Websites designed to turn visitors into enquiries, customers and long-term business opportunities. Hand-coded with sub-second speeds and flawless mobile performance.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-white/[0.08] font-mono text-xs text-neutral-600 dark:text-neutral-400">
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Web Design</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Core Web Vitals</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Local SEO</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">E-commerce</span>
              </div>
            </div>

            {/* Service 02: Business Software */}
            <div className="relative bg-white dark:bg-[#12151D] rounded-2xl p-7 sm:p-8 border border-neutral-200 dark:border-white/[0.08] hover:border-sky-500/50 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-bold">02 // OPERATIONS ARCHITECTURE</span>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800 flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                    <Database className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#0284C7] transition-colors">
                  Business Software
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Custom dashboards, bespoke mini-ERPs, and back-office management systems tailored directly to how your dispatch, accounting, and sales operations move.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-white/[0.08] font-mono text-xs text-neutral-600 dark:text-neutral-400">
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Custom CRM</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Agri/Fleet ERP</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Telemetry Dashboards</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Internal Tools</span>
              </div>
            </div>

            {/* Service 03: AI & Automation (FEATURED) */}
            <div className="relative bg-gradient-to-b from-white to-amber-50/40 dark:from-[#12151D] dark:to-orange-950/20 rounded-2xl p-7 sm:p-8 border-2 border-[#FF6A00] shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#FF6A00] font-bold">03 // INTELLIGENCE</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gradient-to-r from-[#FF6A00] to-[#E11D48] text-white font-bold uppercase tracking-wider">
                      Featured Solution
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 transition-transform">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#FF6A00] transition-colors">
                  AI &amp; Workflow Automation
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Automate repetitive busywork, connect legacy siloed databases, and implement conversational AI agents where they eliminate real human bottlenecks.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-orange-100 dark:border-orange-900/40 font-mono text-xs">
                <span className="bg-orange-50 dark:bg-orange-950/40 text-[#FF6A00] border border-orange-200/60 dark:border-orange-800/60 px-2.5 py-1 rounded-md font-medium">Autonomous Agents</span>
                <span className="bg-orange-50 dark:bg-orange-950/40 text-[#FF6A00] border border-orange-200/60 dark:border-orange-800/60 px-2.5 py-1 rounded-md font-medium">n8n Pipelines</span>
                <span className="bg-orange-50 dark:bg-orange-950/40 text-[#FF6A00] border border-orange-200/60 dark:border-orange-800/60 px-2.5 py-1 rounded-md font-medium">WhatsApp Bots</span>
                <span className="bg-orange-50 dark:bg-orange-950/40 text-[#FF6A00] border border-orange-200/60 dark:border-orange-800/60 px-2.5 py-1 rounded-md font-medium">Instant Webhooks</span>
              </div>
            </div>

            {/* Service 04: Mobile Apps */}
            <div className="relative bg-white dark:bg-[#12151D] rounded-2xl p-7 sm:p-8 border border-neutral-200 dark:border-white/[0.08] hover:border-purple-500/50 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-bold">04 // FIELD &amp; NATIVE ACCESS</span>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800 flex items-center justify-center text-[#C026D3] group-hover:bg-[#C026D3] group-hover:text-white transition-colors">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#C026D3] transition-colors">
                  Mobile Applications
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  High-performance customer-facing mobile applications and field-team tools built with smooth offline synchronization for uninterrupted operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-white/[0.08] font-mono text-xs text-neutral-600 dark:text-neutral-400">
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Flutter Engine</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Native Android</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">iOS Systems</span>
                <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Offline First</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 3: SELECTED WORK (RICH CASE STUDIES)
             ========================================================================= */}
      <section className="w-full py-20 relative" id="work">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#0284C7] font-bold">PROVEN IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              Selected Work.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              Real digital products delivering revenue velocity and operational calm to growing enterprises.
            </p>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workItems.map((study) => (
              <div 
                key={study.slug}
                className="bg-white dark:bg-[#12151D] rounded-2xl border border-neutral-200 dark:border-white/[0.08] overflow-hidden flex flex-col group hover:border-[#174BFF]/60 dark:hover:border-[#174BFF]/60 transition-all shadow-md hover:shadow-2xl"
              >
                <div className="relative w-full h-64 bg-neutral-100 dark:bg-neutral-900 overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    width={800} 
                    height={450} 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 shadow-xs"
                  />
                  <div className={`absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md border font-mono text-xs font-semibold shadow-xs ${study.badgeColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    <span>{study.badge}</span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#174BFF] dark:text-blue-400 uppercase font-bold">{study.category}</span>
                      <span className="font-mono text-xs text-neutral-400 font-medium">{study.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white group-hover:text-[#174BFF] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {study.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/[0.08] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 font-mono text-xs text-neutral-500">
                      {study.stack.map((t, idx) => (
                        <span key={idx}>
                          {t}{idx < study.stack.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-xs sm:text-sm text-[#174BFF] dark:text-blue-400 hover:underline"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Case Studies Link */}
          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-semibold text-sm transition-all border border-neutral-200 dark:border-white/10"
            >
              <span>Explore All Case Studies &amp; Proven Architectures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 4: WHY US (MORE THAN A WEBSITE)
             ========================================================================= */}
      <section className="w-full py-20 bg-slate-50/70 dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/[0.08] relative">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14 text-center items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              More than a website.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A digital system built around your actual business mechanics, eliminating human error and manual drag.
            </p>
          </div>

          {/* 6 Clean Feature Blocks in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white dark:bg-[#12151D] p-7 rounded-2xl border border-neutral-200 dark:border-white/[0.08] hover:border-blue-500/50 shadow-md transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-[#174BFF]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Business First</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Engineered strictly to solve actual revenue leakage and operational bottlenecks, not just win surface-level design awards.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-7 rounded-2xl border border-neutral-200 dark:border-white/[0.08] hover:border-orange-500/50 shadow-md transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-800 flex items-center justify-center text-[#FF6A00]">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Custom Built</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Handcrafted modern software without bloated WordPress plugins, brittle templates, or vulnerable drag-and-drop page builders.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-7 rounded-2xl border border-neutral-200 dark:border-white/[0.08] hover:border-purple-500/50 shadow-md transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800 flex items-center justify-center text-[#C026D3]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Fast by Default</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Sub-second load times engineered for Google Core Web Vitals and stress-tested on real 4G networks across semi-urban and rural India.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-7 rounded-2xl border border-neutral-200 dark:border-white/[0.08] hover:border-sky-500/50 shadow-md transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800 flex items-center justify-center text-[#0284C7]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Direct Communication</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                No middle managers or ticket queues. Chat directly on WhatsApp or jump on a call with the senior developer actually coding your system.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-7 rounded-2xl border border-neutral-200 dark:border-white/[0.08] hover:border-amber-500/50 shadow-md transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-800 flex items-center justify-center text-amber-600">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Full Ownership</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                100% code, domain, database, and asset ownership on completion. Zero recurring platform ransom fees or hostage agreements.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-7 rounded-2xl border border-neutral-200 dark:border-white/[0.08] hover:border-indigo-500/50 shadow-md transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center text-indigo-600">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Built to Scale</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Modular cloud-native architecture that scales seamlessly when your daily user count or transaction rate spikes 10x.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 5: AI & WORKFLOW AUTOMATION (HIGH-CONTRAST DEDICATED PIPELINE)
             ========================================================================= */}
      <section className="w-full py-20 relative overflow-hidden bg-white dark:bg-[#08090C]">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-r from-orange-200/20 via-sky-200/20 to-purple-200/20 dark:from-orange-500/5 dark:via-blue-500/5 dark:to-purple-500/5 blur-[150px]" />

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3 mb-14">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF6A00] px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 font-bold shadow-xs">
              ZERO BUSYWORK INITIATIVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              Your business has repetitive work.<br />
              <span className="text-neutral-400 dark:text-neutral-500 font-light">It doesn&apos;t have to.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              We connect your existing tools and automate repetitive business operations using deterministic logic, secure APIs, and autonomous AI agents.
            </p>
          </div>

          {/* Interactive Workflow Canvas */}
          <div className="w-full bg-white/95 dark:bg-[#12151D]/95 rounded-2xl border border-neutral-200 dark:border-white/[0.08] p-6 sm:p-8 shadow-xl backdrop-blur-xl mb-12">
            
            {/* Workflow Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 dark:border-white/[0.08] mb-8 gap-3">
              <div className="flex items-center gap-2.5">
                <Workflow className="w-5 h-5 text-[#0284C7]" />
                <span className="text-base sm:text-lg font-bold font-display text-neutral-900 dark:text-white">
                  Pipeline: Enterprise Inbound Qualification &amp; ERP Sync
                </span>
              </div>
              <div className="flex items-center gap-4 font-mono text-xs">
                <span className="text-neutral-500">LATENCY: <strong className="text-[#0284C7]">&lt; 450ms</strong></span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#174BFF] dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#174BFF] animate-pulse" /> ACTIVE TRIGGER
                </span>
              </div>
            </div>

            {/* Connected Nodes Flow (Interactive selector) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative items-center">
              {PIPELINE_STEPS.map((step) => {
                const IconComponent = step.icon;
                const isSelected = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    type="button"
                    className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-gradient-to-b from-orange-50/70 to-white dark:from-orange-950/30 dark:to-[#12151D] border-[#FF6A00] shadow-md ring-2 ring-[#FF6A00]/20' 
                        : 'bg-neutral-50 dark:bg-white/[0.03] border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-bold">
                        0{step.id} // {step.title.toUpperCase()}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-ping" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <IconComponent className={`w-4 h-4 ${step.color}`} />
                      <span className="font-bold text-sm text-neutral-900 dark:text-white">
                        {step.subtitle}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                      {step.desc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Terminal Payload Telemetry Preview */}
            <div className="mt-6 bg-neutral-950 p-4 sm:p-5 rounded-xl border border-neutral-800 font-mono text-xs text-neutral-300 flex flex-col gap-1.5 shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-[#FF6A00] font-bold">// LIVE PIPELINE PAYLOAD TRACE — STEP 0{activeStep}</span>
                <span className="text-emerald-400 font-medium">200_SUCCESS</span>
              </div>
              <pre className="text-sky-300 overflow-x-auto text-xs py-1 whitespace-pre-wrap font-mono">
                {JSON.stringify(PIPELINE_STEPS[activeStep - 1].payload, null, 2)}
              </pre>
            </div>

          </div>

          {/* Section Action Trigger */}
          <div className="flex justify-center">
            <button
              onClick={() => setCallModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#174BFF] text-white font-bold text-sm tracking-wider uppercase shadow-[0_10px_24px_rgba(255,106,0,0.25)] hover:shadow-[0_12px_32px_rgba(23,75,255,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Automate My Business</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 6: PROCESS (FROM IDEA TO LAUNCH)
             ========================================================================= */}
      <section className="w-full py-20 bg-slate-50/70 dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/[0.08]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              From idea to launch.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              A transparent, linear deployment sequence designed to minimize meetings and accelerate time-to-market.
            </p>
          </div>

          {/* 5 Step Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            <div className="bg-white dark:bg-[#12151D] p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#174BFF]">01</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Discover</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Understand the core business model, target audience mechanics, and strict technical goals.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/[0.08]">Week 01</span>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#0284C7]">02</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Design</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Architect high-fidelity UI structures, interactive user journeys, and tactile brand aesthetics.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/[0.08]">Week 02</span>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#C026D3]">03</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Build</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Hand-write clean Next.js/Flutter code, configure database schemas, and integrate critical webhooks.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/[0.08]">Weeks 03-04</span>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#FF6A00]">04</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Launch</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Deploy to low-latency edge servers, conduct Core Web Vitals audit, and complete total asset handover.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/[0.08]">Production Go-Live</span>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-emerald-500">05</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Grow</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Continuous performance monitoring, new operational feature iterations, and developer-on-call SLA.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/[0.08]">Ongoing Scale</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 7: INDUSTRIES (DESIGNED AROUND YOUR WORKFLOW)
             ========================================================================= */}
      <section className="w-full py-16 bg-white dark:bg-[#08090C]" id="industries">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-white/[0.08]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white">
                Built for different businesses. Designed around your workflow.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              From industrial supply chains to high-trust advisory firms across Maharashtra.
            </p>
          </div>

          {/* High Contrast Industry Badges */}
          <div className="flex flex-wrap gap-3 pt-6">
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#174BFF] transition-colors shadow-xs font-medium">
              Professional Services &amp; CA Firms
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#0284C7] transition-colors shadow-xs font-medium">
              Real Estate &amp; Builders
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#C026D3] transition-colors shadow-xs font-medium">
              Healthcare &amp; Diagnostics
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#174BFF] transition-colors shadow-xs font-medium">
              Manufacturing Units
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 font-mono text-xs sm:text-sm text-[#FF6A00] font-bold shadow-xs">
              Agriculture &amp; Farm Inputs
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#174BFF] transition-colors shadow-xs font-medium">
              Logistics &amp; Freight
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#0284C7] transition-colors shadow-xs font-medium">
              Hospitality &amp; Resorts
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#C026D3] transition-colors shadow-xs font-medium">
              B2B Wholesale Retail
            </Link>
            <Link href="/industries" className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#174BFF] transition-colors shadow-xs font-medium">
              Education &amp; Academies
            </Link>
          </div>

          <div className="pt-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#174BFF] dark:text-blue-400 hover:underline"
            >
              <span>Explore full directory of 50+ specialized business models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 8: CLIENT TESTIMONIALS
             ========================================================================= */}
      <section className="w-full py-20 bg-slate-50/70 dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/[0.08]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              Trusted by businesses we&apos;ve worked with.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              Direct accounts from company founders and managing partners.
            </p>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-[#12151D] p-7 sm:p-8 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Deep Digital Labs transformed our firm&apos;s digital authority. The corporate portal and tax calculation tools they built allow prospective corporate clients to quickly grasp our advisory scope. The speed and polish are unmatched.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/[0.08] flex flex-col">
                <span className="text-base font-bold text-neutral-900 dark:text-white">Rahul Kavale</span>
                <span className="font-mono text-xs text-[#174BFF] dark:text-blue-400 font-medium">Managing Partner, Rahul B. Kavale &amp; Co.</span>
                <span className="font-mono text-[11px] text-neutral-400">Pune, MH</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-7 sm:p-8 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Our rural dealers and farmers have zero patience for slow-loading web pages. The catalog Deep Digital Labs designed works instantly even on patchy network coverage, and orders come straight into our WhatsApp.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/[0.08] flex flex-col">
                <span className="text-base font-bold text-neutral-900 dark:text-white">Yashodeep Patil</span>
                <span className="font-mono text-xs text-[#FF6A00] font-medium">Founder, Yashodeep Agro</span>
                <span className="font-mono text-[11px] text-neutral-400">Solapur / Pune Region</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#12151D] p-7 sm:p-8 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;DairyFlow automated our daily milk billing sheets and farmer rate chart logic entirely. Eliminating billing calculation errors saved our collection center dozens of manual hours every single morning.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/[0.08] flex flex-col">
                <span className="text-base font-bold text-neutral-900 dark:text-white">Sanjay Deshmukh</span>
                <span className="font-mono text-xs text-[#174BFF] dark:text-blue-400 font-medium">Director, DairyFlow Enterprise System</span>
                <span className="font-mono text-[11px] text-neutral-400">Maharashtra</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 9: PRICING & ENGAGEMENT MODELS
             ========================================================================= */}
      <section className="w-full py-20 relative bg-white dark:bg-[#08090C]" id="pricing">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14 text-center items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              Start with what your business needs.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              Transparent studio investment models. No recurring builder lock-ins or hidden royalties.
            </p>
          </div>

          {/* 3 Tier Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Model 1: Business Website */}
            <div className="bg-white dark:bg-[#12151D] rounded-2xl p-7 sm:p-8 border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-neutral-500 uppercase font-bold">PROJECT ENGAGEMENT</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Business Website</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Ideal for established enterprises seeking to upgrade their corporate market authority and conversion rate.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/[0.08]">
                  <span className="font-mono text-xs text-neutral-500 font-medium">INVESTMENT</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">Fixed Quote</div>
                  <span className="font-mono text-xs text-[#0284C7] font-semibold">2 to 3 weeks delivery</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0284C7] shrink-0" /> Custom bespoke responsive UI</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0284C7] shrink-0" /> 100% Core Web Vitals optimization</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0284C7] shrink-0" /> Google Local &amp; Technical SEO</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0284C7] shrink-0" /> 100% code &amp; domain ownership</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-neutral-200 dark:border-white/10"
                >
                  Request Scope &amp; Timeline
                </button>
              </div>
            </div>

            {/* Model 2: Growth Partner (FEATURED) */}
            <div className="bg-gradient-to-b from-white to-orange-50/40 dark:from-[#12151D] dark:to-orange-950/20 rounded-2xl p-7 sm:p-8 border-2 border-[#FF6A00] shadow-xl flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#E11D48] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md">
                Most Popular
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-[#FF6A00] uppercase font-bold">ONGOING DEDICATED SPRINT</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Growth Partner</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Your on-call digital engineering team. Continuous feature additions, speed audits, and workflow automation.
                  </p>
                </div>
                <div className="py-4 border-y border-orange-200/60 dark:border-orange-800/60">
                  <span className="font-mono text-xs text-neutral-500 font-medium">RETAINER MODEL</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">Sprint Based</div>
                  <span className="font-mono text-xs text-[#FF6A00] font-bold">Monthly agile allocation</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6A00] shrink-0" /> Direct WhatsApp developer access</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6A00] shrink-0" /> Rapid turnarounds on new features</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6A00] shrink-0" /> Continuous database &amp; uptime checks</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6A00] shrink-0" /> Automation pipeline expansions</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#174BFF] text-white font-bold text-xs uppercase tracking-wider shadow-[0_8px_20px_rgba(255,106,0,0.25)] hover:shadow-[0_10px_26px_rgba(23,75,255,0.35)] transition-all cursor-pointer"
                >
                  Join as Growth Partner
                </button>
              </div>
            </div>

            {/* Model 3: Custom System */}
            <div className="bg-white dark:bg-[#12151D] rounded-2xl p-7 sm:p-8 border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-neutral-500 uppercase font-bold">BESPOKE CLOUD SOFTWARE</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Custom System</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Tailor-made internal business software, mobile applications, multi-tenant SaaS, or complex AI pipelines.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/[0.08]">
                  <span className="font-mono text-xs text-neutral-500 font-medium">MILESTONE MODEL</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">Architecture SLA</div>
                  <span className="font-mono text-xs text-[#C026D3] font-semibold">Phased deliverable roadmap</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C026D3] shrink-0" /> Full-stack ERP &amp; SaaS engineering</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C026D3] shrink-0" /> Flutter mobile app development</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C026D3] shrink-0" /> Multi-tier permission &amp; role matrices</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C026D3] shrink-0" /> Custom API integration architecture</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-neutral-200 dark:border-white/10"
                >
                  Schedule Architecture Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 10: FAQS (HIGH-TRUST SEO ACCORDION)
             ========================================================================= */}
      <section className="w-full py-16 bg-slate-50/70 dark:bg-white/[0.02] border-t border-neutral-200 dark:border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-neutral-900 dark:text-white cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#FF6A00]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-white/[0.05] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 11: FINAL DRAMATIC CALL TO ACTION
             ========================================================================= */}
      <section className="w-full py-20 relative overflow-hidden bg-slate-50/70 dark:bg-[#08090C] border-t border-neutral-200 dark:border-white/[0.08]">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-orange-200/30 via-blue-200/20 to-transparent dark:from-orange-500/10 dark:via-blue-500/10 blur-[120px] rounded-full" />

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white dark:bg-[#12151D] rounded-3xl border border-neutral-200 dark:border-white/[0.08] p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            
            <div className="flex flex-col gap-3 max-w-2xl text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold font-display leading-tight text-neutral-900 dark:text-white">
                Have an idea?<br />
                <span className="bg-gradient-to-r from-[#FF6A00] via-[#D51FFF] to-[#174BFF] bg-clip-text text-transparent">
                  Let&apos;s build it.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Tell us what operational bottlenecks you want to dismantle or what digital product you want to deploy. We&apos;ll outline the exact architecture and path forward.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => setCallModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#174BFF] text-white font-bold text-sm tracking-wider uppercase shadow-[0_10px_24px_rgba(255,106,0,0.25)] hover:shadow-[0_12px_32px_rgba(23,75,255,0.35)] transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20an%20idea%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-semibold text-sm tracking-wider hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-xs"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp (+91 91751 52244)</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Discovery Call Modal */}
      {callModalOpen && (
        <DiscoveryCallModal
          isOpen={callModalOpen}
          onClose={() => setCallModalOpen(false)}
        />
      )}

    </div>
  );
}
