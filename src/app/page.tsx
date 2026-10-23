'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Zap, 
  Star, 
  Globe, 
  Database, 
  Smartphone, 
  Bot, 
  ShieldCheck, 
  Key, 
  Network, 
  TrendingUp, 
  Terminal, 
  Layers, 
  ChevronDown, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { WebsiteCategoriesModal } from '@/components/services/WebsiteCategoriesModal';
import { BusinessSoftwareCatalogModal } from '@/components/services/BusinessSoftwareCatalogModal';
import { AiAutomationCatalogModal } from '@/components/services/AiAutomationCatalogModal';
import { MobileAppCatalogModal } from '@/components/services/MobileAppCatalogModal';

const FAQS = [
  {
    question: 'How does Deep Digital Labs differ from generic agencies or WordPress freelancers?',
    answer: 'We do not build with fragile plugins or generic templates that break over time. Every digital product is engineered using modern, high-performance tech stacks (Next.js, React, Flutter, and PostgreSQL). You receive clean source code, sub-second load times, and direct communication with senior engineers.'
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
  const [websiteModalOpen, setWebsiteModalOpen] = useState(false);
  const [softwareModalOpen, setSoftwareModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
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
      desc: 'Full-cycle cloud SaaS platform with automated FAT/SNF rate-chart calculation engines, live milk collection sheets, and instant SMS slip alerts for over 850 rural farmers.',
      stack: ['SaaS Architecture', 'SMS Gateway', 'Billing Engine']
    },
    {
      slug: 'onedesk-packaging',
      title: 'Onedesk Packaging',
      category: 'Sustainable Packaging · B2B Web',
      domain: 'onedesk-packaging.web.app',
      year: '2025',
      image: '/images/case-studies/onedesk-packaging.png',
      badge: 'B2B Catalog Live',
      desc: 'High-speed B2B digital catalog and industrial corporate portal showcasing sustainable packaging raw materials (kraft paper, water-based inks, adhesives) with seamless bulk quote routing.',
      stack: ['Web Architecture', 'B2B Catalog', 'RFQ Engine']
    },
    {
      slug: 'yashodeep-agro',
      title: 'Yashodeep Agro',
      category: 'Agri-Inputs & Retail',
      domain: 'yashodeepagro.com',
      year: '2024',
      image: '/images/case-studies/yashodeep-agro.jpg',
      badge: 'Catalog Live',
      desc: 'Lightweight mobile catalog with real-time seed and fertilizer inventory specs, offline caching for weak rural connectivity, and direct one-tap WhatsApp wholesale order routing.',
      stack: ['WhatsApp Commerce', 'Offline Caching', 'PWA']
    },
    {
      slug: 'trust-carry-logistics',
      title: 'Trust Carry Logistics',
      category: 'Freight & Logistics',
      domain: 'trustcarrylogistics.in',
      year: '2024',
      image: '/images/case-studies/trust-carry.jpg',
      badge: 'Enterprise Fleet',
      desc: 'Commercial logistics portal featuring interactive shipment waypoint lookup, truck fleet payload matrices, and streamlined B2B corporate quote builders.',
      stack: ['Fleet CRM', 'Waypoint Telemetry', 'Quote Matrix']
    },
    {
      slug: 'vishal-travels',
      title: 'Vishal Travels',
      category: 'Tour & Fleet Mobility · Pune',
      domain: 'toursandtravels2.vercel.app',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop&q=80',
      badge: 'Production Live',
      desc: 'Executive bus & luxury Tempo Traveller charter portal with real-time route distance tariff estimators, pilgrimage package catalogs, and instant WhatsApp booking dispatch.',
      stack: ['Next.js 15', 'Fare Calculator', 'Fleet Logistics']
    },
    {
      slug: 'shivam-tours-and-travels',
      title: 'Shivam Tours & Travels',
      category: 'Passenger Mobility & Charter',
      domain: 'toursandtravels-one.vercel.app',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
      badge: 'Fleet Portal Live',
      desc: 'High-converting group transportation platform featuring outstation pilgrimage booking engines, vehicle rate sheets, and sub-30-minute quote dispatch.',
      stack: ['React', 'Charter Booking', 'Mobile-First']
    }
  ];

  return (
    <div className="flex flex-col w-full text-neutral-900 dark:text-white relative bg-white dark:bg-[#0B0D11] transition-colors duration-150">
      
      {/* Background Subtle Grid Pattern */}
      <div className="pointer-events-none fixed inset-0 -z-10 subtle-grid opacity-75" />

      {/* =========================================================================
             HERO SECTION: Clean, Cohesive, High-Impact Architecture
             ========================================================================= */}
      <section className="relative w-full overflow-hidden pb-16 sm:pb-24 pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8623C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8623C]" />
            </span>
            <span className="font-mono text-xs tracking-wider uppercase text-neutral-600 dark:text-neutral-300 font-medium">
              Digital Product Studio · Pune, India
            </span>
          </div>

          {/* Main Display Heading */}
          <div className="flex flex-col tracking-tight">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.12] text-neutral-900 dark:text-white">
              Build. Grow.<br className="hidden sm:inline" />
              <span className="text-[#E8623C]">
                Go Digital.
              </span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Websites, business software, and automation engineered around the authentic way your business operates. Speed, stability, and zero vendor lock-in.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xs transition-all active:scale-98 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm tracking-wider hover:bg-neutral-50 dark:hover:bg-white/[0.08] transition-all shadow-xs"
            >
              <Layers className="w-4 h-4 text-[#E8623C]" />
              <span>View Our Work</span>
            </a>
          </div>

          {/* Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 w-full max-w-2xl border-t border-neutral-200 dark:border-white/10 mt-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E8623C] shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">10+ Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#E8623C] shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">Direct Dev Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-[#E8623C] shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">100% Code Ownership</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 2: WHAT WE BUILD (SERVICES)
             ========================================================================= */}
      <section className="w-full py-20 bg-neutral-50/60 dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/10 relative" id="services">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 pb-4 border-b border-neutral-200 dark:border-white/10">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white leading-[1.15]">
                Web, Software &amp; AI Solutions for Growing Businesses in Pune
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Deep Digital Labs builds websites, custom software, automation and mobile apps around how your business actually runs, not off-the-shelf templates.
              </p>
            </div>
            <div className="font-mono text-xs text-neutral-500 font-medium hidden md:block shrink-0">
              // 05_CORE_SERVICES
            </div>
          </div>

          {/* 5 Precision Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7">
            
            {/* Service 01: Business Website Development */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group lg:col-span-2">
              <div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#E8623C] transition-colors">
                  Business Website Development
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Fast, mobile-friendly websites that turn visitors into enquiries and customers. We handle design, development, local SEO and e-commerce, built to pass Core Web Vitals.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Web Design</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Core Web Vitals</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Local SEO</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">E-commerce</span>
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end">
                <Link
                  href="/services/websites-web-apps"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors group-hover:translate-x-0.5"
                >
                  <span>Explore website development →</span>
                </Link>
              </div>
            </div>

            {/* Service 02: Custom Business Software & SaaS */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group lg:col-span-2">
              <div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#E8623C] transition-colors">
                  Custom Business Software &amp; SaaS
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Custom CRMs, mini-ERPs, dashboards and internal tools that match how your sales, dispatch and accounting teams work, replacing spreadsheets and disconnected apps.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Custom CRM</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">ERP Systems</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Analytics Dashboards</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Internal Tools</span>
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end">
                <Link
                  href="/services/business-software-saas"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors group-hover:translate-x-0.5"
                >
                  <span>Explore business software →</span>
                </Link>
              </div>
            </div>

            {/* Service 03: AI Chatbots & Workflow Automation */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group lg:col-span-2">
              <div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#E8623C] transition-colors">
                  AI Chatbots &amp; Workflow Automation
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Automate repetitive tasks, connect your existing systems, and deploy AI chatbots and WhatsApp bots that handle customer queries and lead follow-ups around the clock.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">AI Chatbots</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">WhatsApp Bots</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">n8n Automation</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">API Integrations</span>
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end">
                <Link
                  href="/services/chat-bot-development"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors group-hover:translate-x-0.5"
                >
                  <span>Explore AI &amp; automation →</span>
                </Link>
              </div>
            </div>

            {/* Service 04: Mobile App Development */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group lg:col-span-3">
              <div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#E8623C] transition-colors">
                  Mobile App Development
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Android and iOS apps for customers and field teams, built with Flutter and native tech, with offline-first sync so work continues without connectivity.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Flutter Apps</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Android</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">iOS</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Offline-First</span>
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end">
                <Link
                  href="/services/mobile-app-development"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors group-hover:translate-x-0.5"
                >
                  <span>Explore mobile app development →</span>
                </Link>
              </div>
            </div>

            {/* Service 05: SEO & Digital Growth */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group md:col-span-2 lg:col-span-3">
              <div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3 group-hover:text-[#E8623C] transition-colors">
                  SEO &amp; Digital Growth
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Technical SEO, Google Maps and local search ranking, GA4 tracking and conversion optimization to bring in qualified traffic, calls and measurable leads.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Technical SEO</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Local SEO &amp; Google Maps</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">GA4 Analytics</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Conversion Optimization</span>
                </div>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end">
                <Link
                  href="/services/digital-growth-seo"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors group-hover:translate-x-0.5"
                >
                  <span>Explore SEO services →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 3: SELECTED WORK (PROVEN PORTFOLIO)
             ========================================================================= */}
      <section className="w-full py-20 relative" id="work">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 pb-4 border-b border-neutral-200 dark:border-white/10">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white leading-[1.15]">
                Our Web &amp; Software Projects in Pune and Across India
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                Websites, software platforms and booking systems we have built for businesses in tax advisory, dairy, packaging, agriculture, logistics and travel. Each project is built for speed, reliability and real business results.
              </p>
            </div>
            <div className="font-mono text-xs text-neutral-500 font-medium hidden md:block shrink-0">
              // PRODUCTION_RECORDS
            </div>
          </div>

          {/* Case Study Grid: 3 cards in one row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workItems.map((study) => (
              <div 
                key={study.slug}
                className="bg-white dark:bg-[#12151C] rounded-2xl border border-neutral-200/90 dark:border-white/10 overflow-hidden flex flex-col group hover:border-[#E8623C]/60 transition-all shadow-xs hover:shadow-md"
              >
                <div className="relative w-full h-52 bg-neutral-100 dark:bg-neutral-900 overflow-hidden flex items-center justify-center p-3">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    width={800} 
                    height={450} 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C]" />
                    <span>{study.badge}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase font-bold text-[#E8623C]">{study.category}</span>
                      <span className="font-mono text-xs text-neutral-400 font-medium">{study.year}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {study.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-neutral-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1 font-mono text-[11px] text-neutral-500">
                      {study.stack.map((t, idx) => (
                        <span key={idx}>
                          {t}{idx < study.stack.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {study.domain && (
                        <a
                          href={`https://${study.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-xs text-neutral-500 hover:text-[#E8623C] transition-colors"
                          title={`Visit live site ${study.domain}`}
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link 
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-xs text-[#E8623C] hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Case Studies Link */}
          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-semibold text-sm transition-all border border-neutral-200 dark:border-white/10"
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
      <section className="w-full py-20 bg-neutral-50/60 dark:bg-white/[0.02] border-y border-neutral-200 dark:border-white/10 relative">
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
            
            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Business First</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Engineered strictly to solve actual revenue leakage and operational bottlenecks, not just surface-level aesthetics.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Custom Built</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Handcrafted modern software without bloated plugins, brittle templates, or vulnerable drag-and-drop builders.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Fast by Default</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Sub-second load times engineered for Google Core Web Vitals and stress-tested on real mobile networks across India.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Direct Communication</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                No middle managers or ticket queues. Chat directly on WhatsApp or jump on a call with the senior developer actually coding your system.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Full Ownership</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                100% code, domain, database, and asset ownership on completion. Zero recurring platform ransom fees or hostage agreements.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Network className="w-5 h-5" />
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
             SECTION 5: PROCESS (FROM IDEA TO LAUNCH)
             ========================================================================= */}
      <section className="w-full py-20 border-b border-neutral-200 dark:border-white/10">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              From idea to launch.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              A transparent, linear deployment sequence designed to minimize meetings and accelerate time-to-market.
            </p>
          </div>

          {/* 5 Step Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">01</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Discover</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Understand the core business model, target audience mechanics, and strict technical goals.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Week 01</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">02</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Design</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Architect high-fidelity UI structures, interactive user journeys, and tactile brand aesthetics.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Week 02</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">03</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Build</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Hand-write clean Next.js/Flutter code, configure database schemas, and integrate critical webhooks.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Weeks 03-04</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">04</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Launch</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Deploy to low-latency edge servers, conduct Core Web Vitals audit, and complete total asset handover.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Production Go-Live</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">05</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Grow</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Continuous performance monitoring, new operational feature iterations, and developer-on-call SLA.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 font-medium mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Ongoing Scale</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 6: INDUSTRIES (PROVEN DOMAIN FOCUS)
             ========================================================================= */}
      <section className="w-full py-16 bg-white dark:bg-[#0B0D11] border-b border-neutral-200 dark:border-white/10" id="industries">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-white/10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white">
                Built for different businesses. Designed around your workflow.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              From industrial supply chains to high-trust advisory firms across Maharashtra.
            </p>
          </div>

          {/* Industry Badges */}
          <div className="flex flex-wrap gap-2.5 pt-6">
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              Professional Services &amp; CA Firms
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              Real Estate &amp; Builders
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              Healthcare &amp; Diagnostics
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              Manufacturing Units
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/60 font-mono text-xs sm:text-sm text-[#E8623C] font-semibold">
              Agriculture &amp; Farm Inputs
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              Logistics &amp; Freight
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              Hospitality &amp; Resorts
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              B2B Wholesale Retail
            </Link>
            <Link href="/industries" className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium">
              Education &amp; Academies
            </Link>
          </div>

          <div className="pt-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8623C] hover:underline"
            >
              <span>Explore full directory of 50+ specialized business models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 7: CLIENT TESTIMONIALS
             ========================================================================= */}
      <section className="w-full py-20 bg-neutral-50/60 dark:bg-white/[0.02] border-b border-neutral-200 dark:border-white/10">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            
            <div className="bg-white dark:bg-[#12151C] p-7 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
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
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10 flex flex-col">
                <span className="text-base font-bold text-neutral-900 dark:text-white">Rahul Kavale</span>
                <span className="font-mono text-xs text-[#E8623C] font-medium">Managing Partner, Rahul B. Kavale &amp; Co.</span>
                <span className="font-mono text-[11px] text-neutral-400">Pune, MH</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
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
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10 flex flex-col">
                <span className="text-base font-bold text-neutral-900 dark:text-white">Yashodeep Patil</span>
                <span className="font-mono text-xs text-[#E8623C] font-medium">Founder, Yashodeep Agro</span>
                <span className="font-mono text-[11px] text-neutral-400">Solapur / Pune Region</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
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
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10 flex flex-col">
                <span className="text-base font-bold text-neutral-900 dark:text-white">Sanjay Deshmukh</span>
                <span className="font-mono text-xs text-[#E8623C] font-medium">Director, DairyFlow Enterprise System</span>
                <span className="font-mono text-[11px] text-neutral-400">Maharashtra</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 8: PRICING & ENGAGEMENT MODELS
             ========================================================================= */}
      <section className="w-full py-20 relative bg-white dark:bg-[#0B0D11] border-b border-neutral-200 dark:border-white/10" id="pricing">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            
            {/* Model 1: Business Website */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-neutral-500 uppercase font-bold">PROJECT ENGAGEMENT</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Business Website</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Ideal for established enterprises seeking to upgrade their corporate market authority and conversion rate.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-500 font-medium">INVESTMENT</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">Fixed Quote</div>
                  <span className="font-mono text-xs text-[#E8623C] font-semibold">2 to 3 weeks delivery</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Custom bespoke responsive UI</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> 100% Core Web Vitals optimization</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Google Local &amp; Technical SEO</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> 100% code &amp; domain ownership</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-neutral-200 dark:border-white/10"
                >
                  Request Scope &amp; Timeline
                </button>
              </div>
            </div>

            {/* Model 2: Growth Partner (FEATURED) */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border-2 border-[#E8623C] shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#E8623C] text-white font-mono text-xs uppercase tracking-wider font-bold">
                Most Popular
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-[#E8623C] uppercase font-bold">ONGOING DEDICATED SPRINT</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Growth Partner</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Your on-call digital engineering team. Continuous feature additions, speed audits, and workflow automation.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-500 font-medium">RETAINER MODEL</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">Sprint Based</div>
                  <span className="font-mono text-xs text-[#E8623C] font-semibold">Monthly agile allocation</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Direct WhatsApp developer access</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Rapid turnarounds on new features</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Continuous database &amp; uptime checks</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Automation pipeline expansions</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Join as Growth Partner
                </button>
              </div>
            </div>

            {/* Model 3: Custom System */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-neutral-500 uppercase font-bold">BESPOKE CLOUD SOFTWARE</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Custom System</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Tailor-made internal business software, mobile applications, multi-tenant SaaS, or complex AI pipelines.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-500 font-medium">MILESTONE MODEL</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">Architecture SLA</div>
                  <span className="font-mono text-xs text-[#E8623C] font-semibold">Phased deliverable roadmap</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Full-stack ERP &amp; SaaS engineering</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Flutter mobile app development</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Multi-tier permission &amp; role matrices</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Custom API integration architecture</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-neutral-200 dark:border-white/10"
                >
                  Schedule Architecture Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 9: FAQS (HIGH-TRUST ACCORDION)
             ========================================================================= */}
      <section className="w-full py-16 bg-neutral-50/60 dark:bg-white/[0.02] border-b border-neutral-200 dark:border-white/10">
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
                  className="rounded-xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-neutral-900 dark:text-white cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#E8623C]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-white/5 pt-3">
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
             SECTION 10: FINAL CLEAN CALL TO ACTION
             ========================================================================= */}
      <section className="w-full py-20 relative bg-white dark:bg-[#0B0D11]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-neutral-50 dark:bg-[#12151C] rounded-3xl border border-neutral-200/90 dark:border-white/10 p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            
            <div className="flex flex-col gap-2.5 max-w-2xl text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight text-neutral-900 dark:text-white">
                Have an idea? <span className="text-[#E8623C]">Let&apos;s build it.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Tell us what operational bottlenecks you want to dismantle or what digital product you want to deploy. We&apos;ll outline the exact architecture and path forward.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => setCallModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20an%20idea%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm tracking-wider hover:border-[#E8623C] hover:text-[#E8623C] transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#E8623C]" />
                <span>WhatsApp</span>
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

      {/* Website Categories Catalog Modal */}
      <WebsiteCategoriesModal
        isOpen={websiteModalOpen}
        onClose={() => setWebsiteModalOpen(false)}
        onSelectCategory={() => setCallModalOpen(true)}
      />

      {/* Business Software Catalog Modal */}
      <BusinessSoftwareCatalogModal
        isOpen={softwareModalOpen}
        onClose={() => setSoftwareModalOpen(false)}
        onSelectModule={() => setCallModalOpen(true)}
      />

      {/* AI & Automation Catalog Modal */}
      <AiAutomationCatalogModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onSelectCategory={() => setCallModalOpen(true)}
      />

      {/* Mobile App Catalog Modal */}
      <MobileAppCatalogModal
        isOpen={mobileModalOpen}
        onClose={() => setMobileModalOpen(false)}
        onSelectCategory={() => setCallModalOpen(true)}
      />

    </div>
  );
}
