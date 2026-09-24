'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  MapPin, 
  Code2, 
  Layers,
  Smartphone, 
  TrendingUp,
  Search, 
  Server,
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  Zap,
  Users,
  Clock,
  Quote,
  ChevronDown,
  Star,
  Calendar,
  GitBranch
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { TechBadge } from '@/components/ui/TechBadge';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#D4FF00] selection:text-black transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO (HONEST, GROUNDED, HUMAN) */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium mb-6 shadow-xs backdrop-blur-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Pune Engineering Studio • Serving Businesses Pan-India</span>
        </div>

        {/* Headline: Proportionate, Clean, Elegant */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] max-w-3xl mx-auto font-display">
          We Build Custom Software, Mobile Apps &amp; Websites for <span className="underline decoration-emerald-500/50 underline-offset-6">Indian Businesses</span>.
        </h1>

        {/* Subheadline: Refined, Readable Size */}
        <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          No outsourced interns, no locked code repositories, and no Silicon Valley textbook jargon. We build software that solves operational bottlenecks, communicates directly over WhatsApp, and delivers working code every Friday.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => setCallModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-7 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-98 shadow-sm cursor-pointer text-center"
          >
            <span>Book a Free Scoping Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <a
            href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20software%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-98 shadow-sm text-center"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 px-6 py-3.5 rounded-full font-semibold text-sm transition-all text-center"
          >
            <span>View 7 Live Projects</span>
            <span className="text-[11px] bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded-full font-mono">↓</span>
          </a>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION: TRUSTED BY LOGO / CLIENT BAR */}
      {/* ========================================================================= */}
      <section className="py-10 px-6 border-y border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-6">
            Trusted by Innovative Businesses Across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {[
              { name: 'Rahul B. Kavale & Co.', role: 'CA & Corporate Advisory' },
              { name: 'Yashodeep Agro', role: 'Agri-Tech Commerce' },
              { name: 'Dairy Flow Pro', role: 'In-House Dairy SaaS' },
              { name: 'Santosh Phadtare', role: 'Political Civic Tech' },
              { name: 'Trust Carry Logistics', role: 'Fleet & Supply Chain' },
              { name: 'Sangola Vikas Sankalp', role: 'Civic Development' },
              { name: 'Pasarnikar Payal Amit', role: 'Political Media & Branding' }
            ].map((client) => (
              <div
                key={client.name}
                className="px-4 py-2 rounded-2xl bg-white dark:bg-[#0c101c] border border-slate-200/80 dark:border-slate-800 flex flex-col items-center shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all select-none"
              >
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-slate-600 dark:text-slate-300">
                  {client.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================================================= */}
      {/* SECTION 3: WHAT WE DO / OUR SERVICES (EQUAL-SIZED CARDS GRID) */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base mt-3 leading-relaxed">
            We focus on building reliable software, mobile apps, and digital growth that deliver real business results.
          </p>
        </div>

        {/* 6 Equal-Sized Cards in a Balanced 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Websites & Web Apps */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-bold">
                  01 — Websites &amp; Web Apps
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Websites &amp; Web Applications
              </h3>

              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                High-performance business websites, e-commerce stores, custom web applications, and admin dashboards with seamless API integration.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Core Solutions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['E-commerce', 'Customer Portals', 'Admin Dashboards', 'Web Apps', 'Landing Pages', 'API Integration'].map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/80 dark:border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <Link
                href="/services/websites-web-apps"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Explore Websites &amp; Web Apps</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Business Software & SaaS */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-bold">
                  02 — Business Software
                </span>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Business Software &amp; SaaS
              </h3>

              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                Custom business software, CRM systems, ERP solutions, management dashboards, subscription platforms, and automated cloud workflows.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Core Solutions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Custom ERP', 'CRM Systems', 'SaaS Platforms', 'Workflows', 'Subscription Billing', 'Cloud DBs'].map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/80 dark:border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'FastAPI', 'Go', 'AWS', 'PostgreSQL', 'Docker'].map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <Link
                href="/services/business-software-saas"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>Explore Business Software</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 3: Mobile App Development */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-bold">
                  03 — Mobile Apps
                </span>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Mobile App Development
              </h3>

              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                High-performance Android, iOS, and cross-platform mobile apps with real-time push notifications and secure in-app payments.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Core Solutions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Cross-Platform', 'Android Apps', 'iOS Apps', 'Real-Time Sync', 'Push Alerts', 'Payment Gateways'].map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/80 dark:border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'].map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <Link
                href="/services/mobile-app-development"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span>Explore Mobile Apps</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 4: Digital Growth & SEO */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-bold">
                  04 — Digital Growth &amp; SEO
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Digital Growth &amp; SEO
              </h3>

              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                Developer-led SEO, local Google search domination, keyword research, website performance optimization, and conversion growth.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Core Solutions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Technical SEO', 'Local Search', 'Google Business', 'Keyword Research', 'Core Web Vitals', 'CRO'].map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/80 dark:border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Google Search Console', 'GA4', 'Schema Markup', 'Vercel Analytics'].map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <Link
                href="/services/digital-growth-seo"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <span>Explore Digital Growth</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 5: Cloud, Hosting & Technical Support */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-bold">
                  05 — Cloud &amp; Support
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Cloud, Hosting &amp; Technical Support
              </h3>

              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                AWS cloud hosting, Linux server setup, domain &amp; DNS routing, database management, 24/7 server monitoring, and ongoing maintenance.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Core Solutions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['AWS Cloud', 'Linux Setup', 'DNS Routing', 'Database Ops', '24/7 Monitoring', 'Disaster Recovery'].map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/80 dark:border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['AWS (EC2, S3, RDS)', 'Linux', 'Docker', 'GitHub Actions', 'CI/CD'].map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <Link
                href="/services/cloud-ongoing-support"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <span>Explore Technical Support</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 6: Custom Software & Advisory */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white dark:bg-[#0c101c] border border-slate-800 hover:border-slate-600 transition-all flex flex-col justify-between shadow-md group h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-emerald-400 font-bold">
                  06 — Custom Software
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Custom Architecture &amp; Advisory
              </h3>

              <p className="text-slate-300 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                Need a bespoke platform that doesn’t fit standard boxes? We architect tailored distributed systems, high-concurrency APIs, and fractional CTO consulting.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                    Core Solutions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Custom Systems', 'Legacy Modernize', 'API Gateways', 'Scalability Audits', 'Database Tuning', 'Fractional CTO'].map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200 text-[11px] font-medium border border-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js', 'Python', 'Go', 'AWS', 'Docker', 'PostgreSQL'].map((tech) => (
                      <TechBadge
                        key={tech}
                        name={tech}
                        size="sm"
                        className="bg-white/10 text-white border-white/10 hover:bg-white/15 dark:bg-white/10 dark:text-white dark:border-white/15"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setCallModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>Book Technical Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </section>
      {/* ========================================================================= */}
      {/* ADDITION 2: THE "HOW WE WORK" PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080c14]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
              Predictable, Transparent, Agile
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Our Engagement Model: Predictable, Transparent, Agile
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
              We don’t disappear for months and return with a broken product. Here is how we build together:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Discovery &amp; Scoping <span className="text-xs text-slate-600 dark:text-slate-400 font-normal block sm:inline">(Week 1)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  A free 30-minute technical consultation. We define your core requirements, outline the architecture, and provide a fixed-scope milestone proposal with transparent pricing.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Agile Development <span className="text-xs text-slate-600 dark:text-slate-400 font-normal block sm:inline">(Weekly Sprints)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  You get a dedicated WhatsApp group with our engineers, direct access to the GitHub repository, and a live demo every Friday to review working features.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Rigorous Testing &amp; Launch
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  We handle AWS cloud setup, security hardening, performance optimization (Lighthouse 95+), and seamless deployment with zero downtime.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Handover &amp; Ongoing Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  100% of the IP and credentials are transferred to you. We offer flexible, no-lock-in Annual Maintenance Contracts (AMC) for future scaling and updates.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: THE ANTI-AGENCY PROMISE & MEET THE CORE TEAM */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
              The Anti-Agency Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Why We Don’t Operate Like A Typical IT Agency
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Most Indian business owners have had a bad experience with software companies: junior developers swapped in secret, zero communication after payment, and code held hostage. Here is how we do things differently at Deep Digital Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">1</span>
                <span>You Own 100% of Your Code on GitHub</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                From Day 1, all code is pushed directly to your own GitHub or GitLab repository. If you ever want to bring development in-house or pause, you have all source files, passwords, and database access. Zero vendor lock-in.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">2</span>
                <span>Direct WhatsApp Communication With Developers</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                No slow email ticketing systems or non-technical account managers. You get a direct WhatsApp group with the developers writing your code for immediate status updates and quick fixes.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">3</span>
                <span>Built for Real Indian Internet &amp; Hardware</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                Software built in Silicon Valley assumes everyone has 1Gbps fiber. We build for Indian reality: offline local storage, instant OTP login, light bundle sizes that load in &lt;1.2 seconds on 4G, and bilingual English/Marathi/Hindi interfaces.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">4</span>
                <span>Transparent Milestone Billing with GST Invoices</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                Fixed-scope sprint estimates tied to measurable milestones (e.g. Prototype, Alpha, Production Launch). Every payment is backed by a valid 18% GST tax invoice for your business accounting and input tax credit.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* ADDITION 4: DIRECT CLIENT TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
            Client Proof &amp; Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
            Real feedback from business owners and operational leaders whose businesses run on our software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Testimonial 1 */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative shadow-xs">
            <Quote className="w-8 h-8 text-emerald-500/20 absolute top-6 right-6" />
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 ml-2 font-semibold">5.0 Verified Client</span>
              </div>
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                &ldquo;Deep Digital Labs delivered exactly what they promised. Having direct WhatsApp access to the developers and seeing the code in our own GitHub repository from Day 1 gave us complete peace of mind. The new portal loads instantly, even on rural 4G networks.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                Founder
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Yashodeep Agro • Agri-Commerce Platform
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative shadow-xs">
            <Quote className="w-8 h-8 text-emerald-500/20 absolute top-6 right-6" />
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 ml-2 font-semibold">5.0 Verified Client</span>
              </div>
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                &ldquo;Finally, an IT partner that understands business, not just code. They pushed back on unnecessary features to keep our MVP lean, saved us 3x compared to Mumbai-based agencies, and delivered the Dairy ERP ahead of schedule.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                Operations Head
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Dairy Flow Pro • In-House Dairy ERP SaaS
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: REAL CLIENT DELIVERABLES (PORTFOLIO PROOF) */}
      {/* ========================================================================= */}
      <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
              Verifiable Track Record
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Real Software Deployed in India
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Browse our delivered products across CA firm portals, agro-tech commerce, municipal civic systems, and dairy ERPs.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.slug}
              className="bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-700 transition-all group shadow-xs"
            >
              <div>
                {/* Visual Header */}
                <div className="h-48 rounded-2xl overflow-hidden relative mb-5 bg-slate-100 border border-slate-200/80 dark:border-white/10">
                  <div
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cs.heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full font-medium">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{cs.location}</span>
                  </div>

                  </div>

                {/* Category & Title */}
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-1">
                  {cs.category}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-[#D4FF00] transition-colors leading-snug">
                  {cs.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {cs.summary}
                </p>

                {/* Tech Stack Badges */}
                {cs.techStack && cs.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.techStack.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-[#D4FF00] transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 transition-colors font-medium"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 transition-all"
          >
            <span>View All 7 Client Case Studies →</span>
          </Link>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* ADDITION 5: FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Everything you need to know about code ownership, timelines, and how we work with Indian businesses.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Do I really own 100% of the code?",
              content: (
                <p>
                  Yes. We push all code to your GitHub/GitLab account from Day 1. You own the IP, the domain, and the database. There is zero vendor lock-in.
                </p>
              )
            },
            {
              q: "What is the typical timeline for a project?",
              content: (
                <div className="space-y-3">
                  <p>It depends on the scope, but here&apos;s a rough guide:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li><strong>Simple websites or landing pages:</strong> 2–3 weeks</li>
                    <li><strong>Custom web apps or MVPs:</strong> 4–8 weeks</li>
                    <li><strong>Complex SaaS platforms or ERPs:</strong> 3–6 months</li>
                  </ul>
                  <p>
                    We work in 2-week sprints, so you&apos;ll see working features every Friday. No disappearing for months and coming back with surprises.
                  </p>
                </div>
              )
            },
            {
              q: "Do you work with startups or only large enterprises?",
              content: (
                <p>
                  Both! We love helping early-stage startups build capital-efficient MVPs to secure funding, and we also work with established businesses to modernize legacy systems or scale operations. Whether you&apos;re a solo founder in Pune or a 500-person company in Mumbai, we&apos;ll tailor our approach to your budget and goals.
                </p>
              )
            },
            {
              q: "What happens after the product is launched?",
              content: (
                <div className="space-y-3">
                  <p>We don&apos;t just hand over the keys and disappear. After launch, you get:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li><strong>30 days of free bug fixes</strong> (our warranty period)</li>
                    <li><strong>100% of the code and credentials</strong> transferred to you</li>
                    <li><strong>Optional ongoing support</strong> through flexible monthly retainers or annual maintenance contracts (AMC) if you want us to keep monitoring servers, adding features, or scaling as you grow</li>
                  </ul>
                  <p>
                    You&apos;re never locked into a long-term contract. If you want to bring development in-house later, you have everything you need to do it.
                  </p>
                </div>
              )
            }
          ].map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-[#0c101c] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    {faq.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 text-center space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Still have questions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Chat with us on WhatsApp or book a free 30-minute discovery call. We&apos;ll answer everything honestly—no sales pitch, just real talk about your project.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919175152244?text=Hi,%20I%20have%20a%20question%20about%20starting%20a%20project%20with%20Deep%20Digital%20Labs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with us on WhatsApp</span>
            </a>
            <button
              onClick={() => setCallModalOpen(true)}
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
            >
              <span>Book a free 30-min discovery call</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FOOTER CALL TO ACTION (HONEST FOUNDER ACCESS) */}
      {/* ========================================================================= */}
      <footer className="px-6 pb-12 pt-6 max-w-6xl mx-auto w-full">
        <div className="bg-slate-900 dark:bg-[#0c101c] text-white border border-slate-800 rounded-3xl p-10 sm:p-14 text-center shadow-lg">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-400 font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Currently Taking New Projects</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Let’s Build Something That Scales.
          </h2>

          <p className="text-slate-300 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us about what you want to build. We’ll understand your requirements and get back to you directly with a clear timeline and fair pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all active:scale-98 shadow-md cursor-pointer"
            >
              Book a 30-Minute Discovery Call
            </button>
            <a
              href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all active:scale-98 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </footer>

      {/* Discovery Call Booking Modal */}
      <DiscoveryCallModal 
        isOpen={callModalOpen} 
        onClose={() => setCallModalOpen(false)} 
      />

    </div>
  );
}
