import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Layers, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Code2, 
  Clock, 
  Bot, 
  Target, 
  Rocket, 
  MessageSquare,
  Check,
  Building2,
  ShoppingCart,
  Database,
  HelpCircle
} from 'lucide-react';
import { CORE_SERVICES } from '@/data/services';
import { TechBadge } from '@/components/ui/TechBadge';

export const metadata: Metadata = {
  title: 'Services & Project Deliverables | Deep Digital Labs Pune',
  description: 'Explore our services: Business Websites, E-commerce Stores, Custom Business Software, Mobile Apps, and WhatsApp Automation. 100% source code ownership.',
  keywords: [
    'website development company Pune',
    'custom software development Pune',
    'mobile app development Pune',
    'ecommerce website development Pune',
    'business website developer Pune',
    'software engineering studio Pune'
  ]
};

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-blue-500 dark:text-[#D4FF00]" />,
    Layers: <Layers className="w-6 h-6 text-indigo-500 dark:text-[#D4FF00]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-cyan-500 dark:text-[#D4FF00]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-500 dark:text-[#D4FF00]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-500 dark:text-[#D4FF00]" />,
    Bot: <Bot className="w-6 h-6 text-[#E8623C] dark:text-[#D4FF00]" />,
  };

  // Structured Project Packages & Deliverables
  const SERVICE_PACKAGES = [
    {
      title: 'Business Website',
      turnaround: '1–2 Weeks',
      bestFor: 'Companies, CA firms, clinics, consultants, manufacturers wanting authority & local Google inquiries.',
      icon: <Building2 className="w-5 h-5 text-[#E8623C]" />,
      highlights: [
        '5–7 custom responsive pages (Home, About, Services, Case Studies, Contact)',
        'Fast-loading pages optimized for Core Web Vitals and real-world mobile performance',
        'Local Pune SEO architecture & Google Business schemas',
        'Direct 1-tap WhatsApp lead button & contact forms',
        '100% source code ownership & zero monthly builder taxes'
      ],
      ctaText: 'Start Business Website',
      href: '/services/websites-web-apps',
      popular: true
    },
    {
      title: 'E-commerce Website',
      turnaround: '2–3 Weeks',
      bestFor: 'Brands, wholesalers, and retail showrooms selling physical products direct-to-consumer or B2B.',
      icon: <ShoppingCart className="w-5 h-5 text-blue-500" />,
      highlights: [
        'Product catalog with categories, variants & instant search',
        'UPI & Razorpay payment gateway integration with instant receipts',
        'Customer order tracking & automatic WhatsApp order alerts',
        'Admin inventory, order status & discount coupon management',
        'Fast mobile checkout with zero recurring platform commission'
      ],
      ctaText: 'Start E-commerce Store',
      href: '/services/websites-web-apps'
    },
    {
      title: 'Custom Business Software / ERP',
      turnaround: '2–4 Weeks',
      bestFor: 'Dairies, factories, logistics fleets, and distributors replacing messy Excel sheets & WhatsApp chaos.',
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      highlights: [
        'Multi-user staff logins with role permissions (Admin, Sales, Warehouse)',
        'Real-time inventory deduction & low-stock alerts',
        '1-click GST invoicing, delivery challans & PDF generation',
        'Daily sales, cash collection & customer dues balance sheets',
        'Automated daily encrypted cloud backups & complete database ownership'
      ],
      ctaText: 'Discuss Software Scope',
      href: '/services/business-software-saas',
      popular: true
    },
    {
      title: 'Mobile App (Android + iOS)',
      turnaround: '3–5 Weeks',
      bestFor: 'Field technicians, delivery drivers, offline data collection, and customer mobile portals.',
      icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
      highlights: [
        'Unified Flutter codebase for both Google Play Store & Apple App Store',
        'Offline-first data entry that syncs automatically when reconnected',
        'Phone camera barcode scanning & delivery proof photo uploads',
        'Instant push notifications & biometric login (Fingerprint / Face ID)',
        'App Store & Google Play submission support'
      ],
      ctaText: 'Start Mobile App',
      href: '/services/mobile-app-development'
    },
    {
      title: 'WhatsApp Business Automation',
      turnaround: '3–5 Days',
      bestFor: 'Businesses receiving frequent inquiries, catalog requests, or order status calls.',
      icon: <Bot className="w-5 h-5 text-purple-500" />,
      highlights: [
        'Official Meta WhatsApp Cloud API setup on your business number',
        '24/7 automated FAQ bot for pricing, catalog, and service inquiries',
        'Interactive digital product catalog browser directly inside WhatsApp',
        'Lead qualification and instant handover to your sales team',
        'Multi-agent shared team inbox & Google Sheets / CRM sync'
      ],
      ctaText: 'Set Up WhatsApp Bot',
      href: '/services/chat-bot-development'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Milestone Scoping · Zero Hidden Platform Fees</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight font-display">
            Services &amp; Project Deliverables
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            From modern responsive websites to automated business software and cross-platform mobile apps. You get clear milestone delivery, clean maintainable code, and 100% intellectual property ownership.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E8623C] hover:bg-[#F0744E] text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-[#E8623C]/25 active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discuss Your Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-900 dark:text-white font-semibold text-sm transition-all border border-neutral-300 dark:border-white/10"
            >
              <span>Schedule Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SERVICE PACKAGES & DELIVERABLES                                           */}
        {/* ========================================================================= */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Project Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Solutions By Project Type
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Clear project scopes, estimated turnaround, and verified deliverables. Tailored to your exact business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {SERVICE_PACKAGES.map((pkg, idx) => (
              <div 
                key={idx}
                className={`p-7 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border ${
                  pkg.popular 
                    ? 'border-[#E8623C]/60 dark:border-[#E8623C]/50 shadow-md ring-1 ring-[#E8623C]/30' 
                    : 'border-neutral-200 dark:border-white/10 shadow-xs'
                } flex flex-col justify-between space-y-6 relative group hover:border-[#E8623C] transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-6 bg-[#E8623C] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                    Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center shadow-xs">
                      {pkg.icon}
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      {pkg.turnaround}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                      {pkg.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-200/80 dark:border-white/5 pt-3">
                    {pkg.bestFor}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-200/80 dark:border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold block">
                      What’s Included:
                    </span>
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-white/10">
                  <Link
                    href={pkg.href}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100 transition-all shadow-xs"
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Custom Enterprise Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-900 text-white dark:bg-[#12151D] border border-neutral-800 dark:border-white/10 flex flex-col justify-between space-y-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E8623C]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    Custom Milestone
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Tailored Enterprise Solutions
                  </h3>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed border-t border-white/10 pt-3">
                  Best for multi-branch corporations, existing database migrations, high-concurrency systems, or complex SaaS billing engines.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                    What’s Included:
                  </span>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0 mt-0.5" />
                    <span>Dedicated senior Pune software architect</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0 mt-0.5" />
                    <span>Itemized milestone delivery contract</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0 mt-0.5" />
                    <span>Weekly live sprint demos on staging URLs</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0 mt-0.5" />
                    <span>Complete IP and source code repository transfer</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs bg-[#E8623C] hover:bg-[#F0744E] text-white transition-all shadow-md shadow-[#E8623C]/20"
                >
                  <span>Request Custom Scoping</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* SPRINT SCOPING GUARANTEE */}
          <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm">
            <div className="w-8 h-8 rounded-full bg-[#E8623C]/10 flex items-center justify-center shrink-0 text-[#E8623C] font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <strong className="font-bold text-neutral-900 dark:text-white block">
                Itemized milestone scoping for every project.
              </strong>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
                Every project begins with a clear, itemized milestone agreement and fixed sprint scope before any code is written. We tailor deliverables to your exact business workflows, and you retain 100% intellectual property ownership with zero monthly lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DETAILED 5 CORE PILLARS GRID                                              */}
        {/* ========================================================================= */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Comprehensive Service Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Each discipline is backed by direct developer communication and clean architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_SERVICES.map((service, index) => (
              <div 
                key={service.slug}
                className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#E8623C]/50 transition-all duration-300 flex flex-col justify-between shadow-xs dark:shadow-2xl group"
              >
                <div className="space-y-6">
                  {/* Header with Icon and Pillar Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:border-neutral-900 dark:group-hover:border-[#E8623C] transition-all shadow-sm">
                      {iconMap[service.icon] || <Layers className="w-6 h-6 text-neutral-900 dark:text-[#E8623C]" />}
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-neutral-200 dark:bg-white/10 text-neutral-800 dark:text-[#E8623C]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#E8623C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-800 dark:text-gray-200 mt-2">
                      {service.headline}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2.5 pt-2 border-t border-neutral-200 dark:border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-500 font-semibold block">
                      What You Get
                    </span>
                    {service.keyBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-500 font-semibold block">
                      Core Technologies &amp; Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <TechBadge
                          key={tech}
                          name={tech}
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA & Delivery Cadence */}
                <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors"
                  >
                    <span>View Deliverables &amp; Architecture →</span>
                  </Link>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Weekly development sprints</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 50+ DEDICATED INDUSTRY SOLUTIONS BANNER                                   */}
        {/* ========================================================================= */}
        <div className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#12151D] via-neutral-900 to-black border border-neutral-800 p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8623C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8623C]/20 border border-[#E8623C]/30 text-[#E8623C] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>50+ Dedicated Industry Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-display">
              Looking for a website tailored to your <span className="text-gradient-spectrum">specific industry?</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
              We engineer specialized web architectures with industry-specific workflows, booking systems, and lead qualification funnels — from CA &amp; law firms to real estate developers, e-commerce stores, healthcare clinics, and tours &amp; travel agencies.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Tours & Travels (WhatsApp Queries)',
                'CA & Accounting Portals',
                'Real Estate & Construction',
                'E-Commerce & Retail Stores',
                'Doctors & Medical Clinics',
                'Schools & IT Institutes',
                'Manufacturing & RFQ Portals',
                'Corporate & SaaS Platforms'
              ].map((niche) => (
                <span
                  key={niche}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium"
                >
                  {niche}
                </span>
              ))}
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/industries"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-[#E8623C] via-[#F0744E] to-[#F59E0B] hover:opacity-95 text-white shadow-xl shadow-[#E8623C]/25 transition-all active:scale-98"
              >
                <span>Explore All 50 Industry Website Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I'm%20looking%20for%20an%20industry-specific%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* WHY OUR FOCUSED APPROACH WINS                                             */}
        {/* ========================================================================= */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-xs dark:shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-semibold">
              Our Studio Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
              Why Our Focused Approach Wins
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400 mt-2">
              Instead of overwhelming you with a confusing laundry list of 15+ generic IT services, we focus on what moves the needle for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="w-9 h-9 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Zero Confusion</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                Founders and executives understand exactly how we solve their problem in under 5 seconds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="w-9 h-9 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Strategic Partnership</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                We work directly with you as technical partners with transparent milestone deliverables.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="w-9 h-9 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center mb-3">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Fast Turnaround</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                Production-ready websites and software delivered in 2–4 weeks with complete IP transfer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="w-9 h-9 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Ongoing Reliability</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                Post-launch developer support, security updates, and direct WhatsApp communication.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CTA BLOCK                                                          */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white space-y-6 text-center shadow-lg transition-colors duration-200">
          <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-emerald-400 px-3.5 py-1 rounded-full">
            Direct Developer Access in Pune
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto text-white">
            Have a project you want to build?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Talk directly with our developer team in Pune. Tell us what you need, and we’ll give you a clear timeline, fair pricing, and clean code.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20get%20a%20quote%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
