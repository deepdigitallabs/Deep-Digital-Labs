'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  MapPin, 
  Code2, 
  Smartphone, 
  Search, 
  Server,
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  Zap,
  Users
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);

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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-6 py-3 rounded-full font-semibold text-sm transition-all active:scale-98 shadow-xs cursor-pointer text-center"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <a
            href="https://wa.me/919823012345?text=Hi,%20I%20want%20to%20discuss%20a%20software%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-full font-semibold text-sm transition-all active:scale-98 shadow-xs text-center"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 px-6 py-3 rounded-full font-semibold text-sm transition-all text-center"
          >
            <span>View 7 Live Projects</span>
            <span className="text-[11px] bg-slate-200 dark:bg-white/10 px-1.5 py-0.2 rounded-full font-mono">↓</span>
          </a>
        </div>


      </section>



      {/* ========================================================================= */}
      {/* SECTION 3: THE 4 CORE PILLARS (CLEAN EDITORIAL BENTO GRID) */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            We focus on building reliable web applications, mobile apps, and digital growth that deliver real business results.
          </p>
        </div>

        {/* 4 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: SaaS & Web Development (2 columns) */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-bold">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                SaaS &amp; Web Development
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                We build custom cloud software, internal ERPs, billing portals, and corporate websites. Clean Next.js architecture with role-based user access, database management, and payment integrations.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/services/saas-web-development"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:underline"
              >
                <span>View Deliverables &amp; Timeline →</span>
              </Link>
              <span className="text-xs text-slate-500 font-mono">
                Ships in 4–8 Weeks
              </span>
            </div>
          </div>

          {/* Card 2: Mobile App Development (1 column) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-bold">
                  02
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Mobile App Development
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Fast Android and iOS apps built with Flutter and React Native. Built for Indian network realities: works offline, caches data, and syncs seamlessly.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Flutter', 'React Native', 'Android', 'iOS', 'Offline Sync'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/services/mobile-app-development"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:underline"
              >
                <span>Mobile Details →</span>
              </Link>
              <span className="text-xs text-slate-500 font-mono">
                Single Codebase
              </span>
            </div>
          </div>

          {/* Card 3: Digital Growth & SEO (1 column) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-bold">
                  03
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                  <Search className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Digital Growth &amp; SEO
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Technical SEO and local Google Maps optimization to rank your business in Pune, Mumbai, or pan-India without paying endless agency retainer fees.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Technical SEO', 'Google Maps', 'Schema Markup', 'Analytics'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/services/digital-growth-seo"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:underline"
              >
                <span>Growth Details →</span>
              </Link>
              <span className="text-xs text-slate-500 font-mono">
                Organic Traffic
              </span>
            </div>
          </div>

          {/* Card 4: Cloud & Ongoing Support (2 columns) */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white transition-all flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/15 text-white font-bold">
                  04 • Cloud &amp; Support
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Server className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                AWS Cloud &amp; Dedicated Support
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-xl">
                We host and maintain your applications on high-performance cloud infrastructure. Routine security audits, daily automated backups, and 24/7 emergency uptime monitoring.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Cloud Hosting', 'Docker', 'Vercel', 'Daily Backups', '24/7 SLA'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/10 border border-white/10 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/services/cloud-ongoing-support"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:underline"
              >
                <span>Explore Support Retainers →</span>
              </Link>
              <span className="text-xs text-emerald-400 font-mono font-semibold">
                99.9% Uptime Guarantee
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: THE ANTI-AGENCY PROMISE (FOUNDER TRANSPARENCY) */}
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
              className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-400 transition-all group shadow-xs"
            >
              <div>
                {/* Visual Header */}
                <div className="h-48 rounded-2xl overflow-hidden relative mb-5 bg-slate-100 border border-slate-200/80 dark:border-white/10">
                  <div
                    className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cs.heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20" />


                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cs.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors leading-snug">
                  {cs.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-5 line-clamp-2 leading-relaxed">
                  {cs.summary}
                </p>


              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-900 hover:underline"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors font-medium"
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
          >
            <span>View All 7 Client Case Studies →</span>
          </Link>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FOOTER CALL TO ACTION (HONEST FOUNDER ACCESS) */}
      {/* ========================================================================= */}
      <footer className="px-6 pb-12 pt-6 max-w-6xl mx-auto w-full">
        <div className="bg-slate-900 text-white rounded-3xl p-10 sm:p-14 text-center shadow-lg">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-400 font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Currently Taking New Projects</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Have a project in mind? <br /> Let’s talk and build it.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Talk directly with our developer team in Pune. We’ll understand what you need, give you a clear timeline and fair pricing, and build working software.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all active:scale-98 shadow-md cursor-pointer"
            >
              Book a Quick Call →
            </button>
            <a
              href="https://wa.me/919823012345?text=Hi,%20I%20want%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all active:scale-98 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp (+91)</span>
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
