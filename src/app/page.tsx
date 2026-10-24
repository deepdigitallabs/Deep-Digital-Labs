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
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  MapPin,
  Award
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { WebsiteCategoriesModal } from '@/components/services/WebsiteCategoriesModal';
import { BusinessSoftwareCatalogModal } from '@/components/services/BusinessSoftwareCatalogModal';
import { AiAutomationCatalogModal } from '@/components/services/AiAutomationCatalogModal';
import { MobileAppCatalogModal } from '@/components/services/MobileAppCatalogModal';

const FAQS = [
  {
    question: 'How does Deep Digital Labs differ from generic agencies or WordPress freelancers?',
    answer: 'We do not build with fragile plugins or generic templates that break over time. Every digital product is engineered using modern, high-performance tech stacks (Next.js, React, Flutter, and PostgreSQL). You receive clean source code, pages that load in under 1 second, and direct communication with Deepak Dukare and senior engineers in Pune.'
  },
  {
    question: 'Do I own 100% of my source code and infrastructure?',
    answer: 'Yes, unconditionally. Upon delivery, you retain complete ownership of all repository code, domain registrations, databases, and deployment pipelines. You own everything with no monthly platform fees to keep your website online.'
  },
  {
    question: 'How fast can a business website or custom platform be delivered?',
    answer: 'Standard bespoke business websites launch in 2 to 3 weeks. Custom business software, mini-ERPs, and mobile applications follow structured milestone sprint releases.'
  },
  {
    question: 'Can you integrate WhatsApp lead capture and business automation?',
    answer: 'Absolutely. We specialize in connecting websites and forms directly with WhatsApp Business APIs, automated CRM logging, and instant alerts so your sales team never misses a qualified lead.'
  },
  {
    question: 'Where are you based and can we meet in person in Pune?',
    answer: 'We are based right here in Pune, Maharashtra. We work with clients across Baner, Hinjewadi, Kothrud, Viman Nagar, Pimpri-Chinchwad, and across Maharashtra through direct WhatsApp, phone calls, and in-person consultations.'
  }
];

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [websiteModalOpen, setWebsiteModalOpen] = useState(false);
  const [softwareModalOpen, setSoftwareModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactService, setContactService] = useState('Business Website');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Selected work items with real results
  const workItems = [
    {
      slug: 'rahul-b-kavale-and-co',
      title: 'Rahul B. Kavale & Co.',
      category: 'Tax & Advisory · Pune',
      domain: 'rahulbkavaleandco.com',
      year: '2025',
      image: '/images/case-studies/rahul-b-kavale.jpg',
      badge: 'Production Live',
      metric: '3.2x inquiries · 0.6s speed',
      desc: 'High-speed corporate advisory portal with automated practice-area tax calculators, partner credential verification, and structured inquiry routing.',
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
      metric: '850+ farmers · 2+ hrs saved daily',
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
      metric: '45% faster RFQ · 120+ bulk quotes',
      desc: 'High-speed B2B digital catalog and industrial corporate portal showcasing sustainable packaging raw materials with seamless bulk quote routing.',
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
      metric: '60+ WhatsApp orders/wk · 3G optimized',
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
      metric: '5x faster quotes · 200+ shipments tracked',
      desc: 'Commercial logistics portal featuring interactive shipment waypoint lookup, truck fleet payload matrices, and streamlined B2B corporate quote builders.',
      stack: ['Fleet CRM', 'Real-Time Tracking', 'Quote Matrix']
    },
    {
      slug: 'vishal-travels',
      title: 'Vishal Travels',
      category: 'Tour & Fleet Mobility · Pune',
      domain: 'toursandtravels2.vercel.app',
      year: '2026',
      image: '/images/case-studies/vishal-travels.png',
      badge: 'Production Live',
      metric: '4.5x more bookings · Sub-1s mobile speed',
      desc: 'Executive bus & luxury Tempo Traveller charter portal with real-time route distance tariff estimators, pilgrimage package catalogs, and instant WhatsApp booking dispatch.',
      stack: ['Next.js 15', 'Fare Calculator', 'Fleet Logistics']
    },
    {
      slug: 'shivam-tours-and-travels',
      title: 'Shivam Tours & Travels',
      category: 'Passenger Mobility & Charter',
      domain: 'toursandtravels-one.vercel.app',
      year: '2026',
      image: '/images/case-studies/shivam-tours.png',
      badge: 'Fleet Portal Live',
      metric: '65% more tour bookings · <30m dispatch',
      desc: 'High-converting group transportation platform featuring outstation pilgrimage booking engines, vehicle rate sheets, and sub-30-minute quote dispatch.',
      stack: ['React', 'Charter Booking', 'Mobile-First']
    }
  ];

  return (
    <div className="flex flex-col w-full text-neutral-900 dark:text-neutral-100 relative bg-white dark:bg-[#0B0D11] transition-colors duration-150">
      
      {/* Editorial Ambient Depth Accent (Single restrained brand tone, no generic rainbow grids) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-orange-500/[0.04] via-transparent to-transparent -z-10" 
      />

      {/* =========================================================================
             HERO SECTION: High-Impact, Pune-Focused, High Conversion
             ========================================================================= */}
      <section className="relative w-full overflow-hidden pb-16 sm:pb-24 pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          
          {/* Main Display Heading */}
          <div className="flex flex-col items-center tracking-tight text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100/90 dark:bg-white/5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Pune Studio · Available for New Projects</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.12] text-neutral-900 dark:text-white max-w-4xl">
              Website &amp; Software Development Company in Pune
            </h1>
            
            <p className="text-xl sm:text-2xl font-bold font-display text-[#E8623C] mt-3.5 tracking-tight">
              Build. Grow. Go Digital.
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed text-center font-normal">
            High-speed websites, custom business software, ERPs, and mobile apps engineered around how your business actually runs. 2 to 3 weeks delivery, 100% code ownership, and no monthly platform fees.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xs transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20website%20or%20software%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-semibold text-xs sm:text-sm tracking-wider hover:border-[#E8623C] hover:text-[#E8623C] dark:hover:border-[#E8623C] transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: +91 77560 63128</span>
            </a>
          </div>

          {/* Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 pt-8 w-full max-w-3xl border-t border-neutral-200 dark:border-white/10 mt-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E8623C] shrink-0" />
              <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">10+ Websites &amp; Systems Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">0.5s Speed · 100% Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-[#E8623C] shrink-0" />
              <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">100% Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
              <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">5.0 ★ Google Business Reviews</span>
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
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
                Our Core Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white leading-[1.15]">
                Web, Software &amp; AI Solutions for Growing Businesses in Pune
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                We build websites, custom business software, automation, and mobile apps around how your business actually runs — not rigid off-the-shelf templates.
              </p>
            </div>
            <div className="text-xs text-neutral-500 font-medium hidden md:block shrink-0">
              5 Core Capabilities
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
                  Fast, mobile-friendly websites that turn visitors into phone calls and WhatsApp inquiries. Designed for local Pune SEO, fast loading, and easy updates.
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
                  Custom CRMs, mini-ERPs, billing portals, and dashboards tailored to how your sales, dispatch, and accounts operate — replacing messy spreadsheets.
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
                  Automate repetitive manual work, connect your apps, and deploy 24/7 WhatsApp chatbots that answer customer questions and log leads instantly.
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
                  Android and iOS apps for your customers and on-field teams. Built with Flutter for smooth performance and offline sync when connectivity drops.
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
                  Google Maps ranking, local Pune search optimization, fast page speed, and conversion tracking to get actual calls and customer enquiries.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Technical SEO</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Google Business Profile</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">GA4 Analytics</span>
                  <span className="bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-md font-medium">Lead Optimization</span>
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
             SECTION 3: SELECTED WORK (PROVEN PORTFOLIO WITH REAL RESULTS)
             ========================================================================= */}
      <section className="w-full py-20 relative" id="work">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 pb-4 border-b border-neutral-200 dark:border-white/10">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
                Client Success Stories
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white leading-[1.15]">
                Our Web &amp; Software Projects in Pune and Across India
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                Websites, software platforms and booking systems we have built for businesses in tax advisory, dairy, packaging, agriculture, logistics and travel. Built for speed, reliability, and real business results.
              </p>
            </div>
            <div className="text-xs text-neutral-500 font-medium hidden md:block shrink-0">
              Verified Production Results
            </div>
          </div>

          {/* Case Study Grid: 3 cards in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-black/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C]" />
                    <span>{study.badge}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase font-bold text-[#E8623C]">{study.category}</span>
                      <span className="font-mono text-xs text-neutral-400 font-medium">{study.year}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors">
                      {study.title}
                    </h3>

                    {/* Result Metric Pill */}
                    {study.metric && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold w-fit">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{study.metric}</span>
                      </div>
                    )}

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
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
              The Studio Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              More than a website.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A modern digital system built around how your business actually runs — eliminating lost leads, manual delays, and spreadsheet chaos.
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
                Engineered strictly to increase customer inquiries and eliminate manual bottlenecks — not just surface-level aesthetics.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Custom Built</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Clean, hand-written modern code without bloated plugins, fragile templates, or vulnerable drag-and-drop builders.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Fast by Default</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Pages load in under 1 second. Backed by verified Google Core Web Vitals scores and tested on mobile networks across India.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Direct Communication</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                No middle managers or ticket queues. Chat directly on WhatsApp or call Deepak Dukare and the senior engineers coding your project.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Full Ownership</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You own 100% of your code, domain, and database. No monthly platform fees to keep your website online, and zero lock-in.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-xs transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">Built to Scale</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Modern cloud architecture that handles daily traffic spikes effortlessly, ready to grow with your business across Maharashtra.
              </p>
            </div>

          </div>

          {/* Verified PageSpeed Scorecard */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 shadow-xs">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-display text-neutral-900 dark:text-white">
                    Verified Google Core Web Vitals Benchmark
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Real audited performance on standard mobile 4G connections in India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto text-center font-mono">
                <div className="px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                  <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-400">99/100</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Performance</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                  <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-400">0.5s</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Load Time (LCP)</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                  <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-400">0 ms</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Blocking Time</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                  <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Vitals Passed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 5: PROCESS (FROM IDEA TO LAUNCH IN 2-3 WEEKS)
             ========================================================================= */}
      <section className="w-full py-20 border-b border-neutral-200 dark:border-white/10">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
              Consistent 2 to 3 Weeks Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              From idea to launch in 2 to 3 weeks.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              A transparent, milestone-driven process designed to eliminate unnecessary meetings and launch on time.
            </p>
          </div>

          {/* 5 Step Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">01</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Discover</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Understand your business workflow, customer needs, and agree on clear milestones.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-500 font-semibold mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Week 01</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">02</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Design</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Design clean, modern layouts tailored for mobile, with clear call-to-actions.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-500 font-semibold mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Week 01–02</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">03</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Build</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Code high-speed Next.js or Flutter app, set up databases, and connect WhatsApp lead alerts.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-500 font-semibold mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Week 02–03</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">04</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Launch</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Fast edge server launch, Google Core Web Vitals audit, and 100% code ownership handover.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Week 03 Go-Live</span>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold font-display text-[#E8623C]">05</span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Grow</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Direct WhatsApp developer on call, routine updates, and continuous feature expansion.
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-500 font-semibold mt-6 pt-2 border-t border-neutral-100 dark:border-white/10">Ongoing Retainer</span>
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
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
                Industry Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">
                Built for different businesses. Designed around your workflow.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              From tax advisory firms in Pune to logistics, dairy, and manufacturing across Maharashtra.
            </p>
          </div>

          {/* Industry Badges with specific category links */}
          <div className="flex flex-wrap gap-2.5 pt-6">
            <Link 
              href="/industries?category=Professional+Services#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              Professional Services &amp; CA Firms
            </Link>
            <Link 
              href="/industries?category=Real+Estate+%26+Construction#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              Real Estate &amp; Builders
            </Link>
            <Link 
              href="/industries?category=Healthcare+%26+Wellness#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              Healthcare &amp; Diagnostics
            </Link>
            <Link 
              href="/industries?category=Manufacturing#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              Manufacturing Units
            </Link>
            <Link 
              href="/industries?category=Agriculture#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/60 font-mono text-xs sm:text-sm text-[#E8623C] font-semibold hover:bg-orange-100 transition-colors"
            >
              Agriculture &amp; Farm Inputs
            </Link>
            <Link 
              href="/industries?category=Logistics+%26+Supply+Chain#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              Logistics &amp; Freight
            </Link>
            <Link 
              href="/industries?category=Hospitality+%26+Tourism#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              Hospitality &amp; Resorts
            </Link>
            <Link 
              href="/ecommerce-website-design-pune" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              B2B Wholesale &amp; Retail
            </Link>
            <Link 
              href="/industries?category=Education+%26+Training#solutions-directory" 
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors font-medium"
            >
              Education &amp; Academies
            </Link>
          </div>

          <div className="pt-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8623C] hover:underline"
            >
              <span>Explore solutions tailored for 30+ Pune &amp; Maharashtra business types</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
             SECTION 7: CLIENT TESTIMONIALS (WITH PROOF & VERIFIED RATINGS)
             ========================================================================= */}
      <section className="w-full py-20 bg-neutral-50/60 dark:bg-white/[0.02] border-b border-neutral-200 dark:border-white/10" id="testimonials">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 font-mono text-xs font-semibold w-fit">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>5.0 ★ Rating from Pune &amp; Maharashtra Clients</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
                Trusted by local business owners.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
                Direct feedback from founders, chartered accountants, and company directors.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Deep+Digital+Labs+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors w-fit"
            >
              <span>View verified Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            
            {/* Review 1 */}
            <div className="bg-white dark:bg-[#12151C] p-7 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-white/20 transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Verified Client
                  </span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Deep Digital Labs transformed our firm&apos;s digital presence. The corporate portal and client tax calculation tools allow corporate clients to quickly understand our advisory services. The loading speed and design polish are remarkable.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    RK
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">Rahul Kavale</span>
                    <span className="text-xs text-[#E8623C] font-medium">Chartered Accountant &amp; Partner</span>
                    <span className="text-[11px] text-neutral-400">Rahul B. Kavale &amp; Co. · Pune</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white dark:bg-[#12151C] p-7 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-white/20 transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Verified Client
                  </span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Our rural dealers and farmers have zero patience for slow-loading websites. The online product catalog Deepak engineered opens instantly even on weak rural mobile data, and wholesale inquiries land straight into our WhatsApp.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    YP
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">Yashodeep Patil</span>
                    <span className="text-xs text-[#E8623C] font-medium">Managing Director</span>
                    <span className="text-[11px] text-neutral-400">Yashodeep Agro · Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white dark:bg-[#12151C] p-7 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-white/20 transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Verified Client
                  </span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Since launching our new booking portal and outstation fare estimator, our bus and Tempo Traveller charter bookings surged over 4x. Customers get accurate quotes in seconds instead of calling back and forth.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    VS
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">Vishal Shinde</span>
                    <span className="text-xs text-[#E8623C] font-medium">Founder &amp; Fleet Operator</span>
                    <span className="text-[11px] text-neutral-400">Vishal Tours &amp; Fleet · Pune</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 8: PRICING WITH CLEAR PRICE ANCHORS
             ========================================================================= */}
      <section className="w-full py-20 relative bg-white dark:bg-[#0B0D11] border-b border-neutral-200 dark:border-white/10" id="pricing">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 mb-14 text-center items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 font-mono text-xs font-semibold">
              Transparent Pricing · No Recurring Platform Lock-in
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              Clear investments. Honest timelines.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              You own everything. No monthly platform fees to keep your website online.
            </p>
          </div>

          {/* 3 Tier Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            
            {/* Model 1: Business Website */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-neutral-500 uppercase font-bold">ESSENTIAL WEB PRESENCE</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Business Website</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Ideal for Pune businesses, professional practices, clinics, manufacturers, and trade firms wanting high market authority.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-500 font-medium">STARTING FROM</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">₹24,999</div>
                  <span className="font-mono text-xs text-[#E8623C] font-semibold">2 to 3 weeks delivery</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Custom responsive design (no generic templates)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Sub-second 0.5s mobile loading speed</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Pune Local SEO &amp; Google Map profile setup</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> WhatsApp lead routing &amp; inquiry forms</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> 100% code, domain &amp; hosting ownership</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-neutral-200 dark:border-white/10"
                >
                  Get Website Proposal
                </button>
              </div>
            </div>

            {/* Model 2: Growth Partner (FEATURED) */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border-2 border-[#E8623C] shadow-sm flex flex-col justify-between relative">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#E8623C] uppercase font-bold tracking-wider">DEDICATED TECH PARTNER</span>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#E8623C]/10 text-[#E8623C]">
                      Continuous Sprints
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Growth Partner</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Your on-call senior developer for continuous new features, marketing landing pages, and speed optimization.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-500 font-medium">MONTHLY RETAINER</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">₹19,999 <span className="text-sm font-normal text-neutral-500">/ mo</span></div>
                  <span className="font-mono text-xs text-[#E8623C] font-semibold">Priority 48h turnaround</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Direct WhatsApp communication with lead engineer</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Rapid turnarounds on new landing pages &amp; updates</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Continuous security, backups &amp; uptime monitoring</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Google Search rankings &amp; speed audits</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> No long-term lock-in (pause or cancel anytime)</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  Start Monthly Retainer
                </button>
              </div>
            </div>

            {/* Model 3: Custom System */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 sm:p-8 border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-xs text-neutral-500 uppercase font-bold">CUSTOM SOFTWARE &amp; APPS</span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">Custom System</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Tailored internal business software, billing apps, customer portals, inventory tracking, or mobile apps.
                  </p>
                </div>
                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-500 font-medium">STARTING FROM</span>
                  <div className="text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">₹59,999</div>
                  <span className="font-mono text-xs text-[#E8623C] font-semibold">Milestone delivery roadmap</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Custom billing, ERP &amp; inventory management</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Android &amp; iOS mobile application development</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Role-based logins for staff &amp; administrators</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Direct WhatsApp &amp; payment gateway integrations</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E8623C] shrink-0" /> Milestone-based payments tied to working deliverables</li>
                </ul>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-neutral-200 dark:border-white/10"
                >
                  Schedule Scope Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* =========================================================================
             SECTION 9: FAQS (HIGH-TRUST ACCORDION & 100% CRAWLABLE IN DOM)
             ========================================================================= */}
      <section className="w-full py-16 bg-white dark:bg-[#0B0D11] border-b border-neutral-200 dark:border-white/10" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Everything you need to know about pricing, code ownership, and working with us.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl bg-neutral-50/80 dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-neutral-900 dark:text-white cursor-pointer hover:bg-neutral-100/50 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#E8623C]' : ''}`} />
                  </button>
                  
                  {/* Kept in the HTML DOM for SEO crawlers with CSS state toggling */}
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200/60 dark:border-white/5 pt-3 transition-all ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 10: INSTANT CONTACT & INQUIRY FORM (PHONE, MAIL, WHATSAPP)
             ========================================================================= */}
      <section className="w-full py-20 relative bg-neutral-50/70 dark:bg-[#0B0D11]" id="contact">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Contact Info & Value Prop */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8623C]/10 text-[#E8623C] font-mono text-xs font-semibold mb-3">
                  Direct Line to Engineering
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight text-neutral-900 dark:text-white">
                  Have a project in mind? <span className="text-[#E8623C]">Let&apos;s talk today.</span>
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2.5 leading-relaxed">
                  Tell us about your business goals. We&apos;ll explain exactly how we can build it, realistic timelines, and provide a fixed quote.
                </p>
              </div>

              {/* Direct Reachability Cards */}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+917756063128"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 hover:border-[#E8623C] transition-colors shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-[#E8623C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase font-medium">Click to Call</span>
                    <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">+91 77560 63128</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20would%20like%20to%20discuss%20a%20website/software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 hover:border-[#25D366] transition-colors shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase font-medium">Instant WhatsApp Chat</span>
                    <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">+91 77560 63128</div>
                  </div>
                </a>

                <a
                  href="mailto:deepdigitallabs@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 hover:border-[#E8623C] transition-colors shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase font-medium">Direct Email</span>
                    <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">deepdigitallabs@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase font-medium">Office Location</span>
                    <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Pune, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Short Inline Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-[#12151C] rounded-3xl border border-neutral-200/90 dark:border-white/10 p-7 sm:p-9 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Receive a direct response and scope breakdown within 4 hours.
              </p>

              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center text-center gap-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Thank You! Inquiry Received.</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-md">
                    Our engineering team will review your details and reach out shortly via WhatsApp or phone.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-[#E8623C] hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Rahul Patil"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8623C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8623C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={contactService}
                      onChange={(e) => setContactService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#E8623C]"
                    >
                      <option value="New Business Website (from ₹24,999)">New Business Website (from ₹24,999)</option>
                      <option value="Custom Business Software / Mini-ERP">Custom Business Software / Mini-ERP</option>
                      <option value="Mobile App Development">Mobile App Development (Android &amp; iOS)</option>
                      <option value="Monthly Growth Partner (₹19,999/mo)">Monthly Growth Partner (₹19,999/mo)</option>
                      <option value="Website Redesign & Speed Optimization">Website Redesign &amp; Speed Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Project Details or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Briefly describe what your business does and what you want to achieve..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8623C] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-neutral-400">
                      ⚡ Quick response within 4 hours
                    </span>
                  </div>
                </form>
              )}
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
