import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Smartphone, 
  Bot, 
  Database, 
  Server, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Factory, 
  Tractor, 
  Truck, 
  Stethoscope, 
  Calculator, 
  Globe, 
  Clock, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Tailored Software & Digital Solutions | Deep Digital Labs Pune",
  description: "End-to-end digital solutions for growing businesses in Pune and India. Custom ERPs, high-converting websites, cross-platform mobile apps, and automated workflows.",
  keywords: [
    "custom software solutions Pune",
    "business ERP software Pune",
    "mobile app solutions Pune",
    "manufacturing ERP Pune",
    "CA firm website solutions Pune",
    "dairy software Pune",
    "logistics software development Pune",
    "enterprise web applications"
  ],
  openGraph: {
    title: "Tailored Software & Digital Solutions | Deep Digital Labs",
    description: "Purpose-built engineering solutions for Pune enterprises, CAs, manufacturers, and growing startups. 100% code ownership & direct WhatsApp developer support.",
    url: "https://deepdigitallabs.com/solutions",
  }
};

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-[#12151D] text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-xs">
            <span className="font-bold text-neutral-900 dark:text-white">Enterprise &amp; Growth Solutions</span>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <span>Pune, Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white font-display leading-[1.12]">
            End-to-End Digital Solutions For Growing Businesses
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            From custom operational ERPs to ultra-fast modern websites, mobile apps, and automated WhatsApp workflows. Purpose-built to eliminate manual paperwork and drive measurable revenue.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20solution%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E8623C] hover:bg-[#F0744E] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25 hover:shadow-xl active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] hover:border-[#E8623C]/40 text-neutral-800 dark:text-neutral-200 font-semibold text-sm transition-all shadow-xs"
            >
              <span>Request Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] text-center">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white font-display">10+</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Live Production Systems</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] text-center">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white font-display">&lt;0.8s</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Avg Mobile Load Time</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] text-center">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white font-display">100%</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Code &amp; DB Ownership</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] text-center">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white font-display">2–3 Wks</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Sprint Turnaround</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5 MAIN CORE SOLUTION VERTICALS                                            */}
        {/* ========================================================================= */}
        <div className="mb-28 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              The 5 Flagship Solution Verticals
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Each solution is custom-engineered using modern, battle-tested technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Solution 1: Custom Business Software & ERPs */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8623C]/10 text-[#E8623C] font-mono font-bold text-xs">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Vertical 01 · Operations</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
                  Custom ERP &amp; Internal Business Portals
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Replace messy WhatsApp chats, disorganized Excel sheets, and paper invoices with a centralized, multi-user web software built specifically around your exact company workflows.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Automated GST Invoicing &amp; E-Way Bills</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Real-time Warehouse &amp; Stock Sync</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Multi-Role Access (Admin, Staff, Billing)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Offline-tolerant Smartphone Access</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Tech: PostgreSQL · Node.js · Next.js · Prisma</span>
                <Link href="/services/business-software-saas" className="text-[#E8623C] font-bold hover:underline flex items-center gap-1">
                  <span>Explore ERP details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Solution 2: High-Performance Web Apps */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8623C]/10 text-[#E8623C] font-mono font-bold text-xs">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Vertical 02 · Web &amp; E-Commerce</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">
                  Sub-Second Next.js 15 Web Applications
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Fast, responsive, mobile-first websites that look premium, rank top on Google, and convert casual visitors into high-paying client inquiries.
                </p>

                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>100/100 Google Core Web Vitals speed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Embedded Local Pune SEO Schemas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Razorpay &amp; WhatsApp payment links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Zero monthly plugin maintenance headaches</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Tech: Next.js 15 · React 19 · TypeScript</span>
                <Link href="/services/websites-web-apps" className="text-[#E8623C] font-bold hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Solution 3: Native & Cross-Platform Mobile Apps */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8623C]/10 text-[#E8623C] font-mono font-bold text-xs">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Vertical 03 · Mobile</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">
                  Cross-Platform Flutter Mobile Apps
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Single codebase deployable to both Google Play Store and Apple App Store. Smooth 60fps performance with native hardware access.
                </p>

                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Offline-first SQLite local caching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Instant Firebase push notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Biometric login &amp; camera barcode scan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Turnkey App Store &amp; Play Store launch</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Tech: Flutter · Dart · Firebase</span>
                <Link href="/services/mobile-app-development" className="text-[#E8623C] font-bold hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Solution 4: Automated WhatsApp Bots & Workflows */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8623C]/10 text-[#E8623C] font-mono font-bold text-xs">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Vertical 04 · Automation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
                  WhatsApp Business Bots &amp; Automated Workflows
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Engage Indian customers where they already are. We integrate the official WhatsApp Cloud API with your database so inquiries, invoices, and tracking links send automatically 24/7.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Instant Lead Qualification &amp; Routing</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Automated Payment &amp; Invoice Receipts</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Zero Human Delay Outside Office Hours</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>CRM &amp; Database Webhook Sync</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Tech: WhatsApp Cloud API · Node.js · Webhooks</span>
                <Link href="/services/chat-bot-development" className="text-[#E8623C] font-bold hover:underline flex items-center gap-1">
                  <span>Explore Bot Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SOLUTIONS BY INDUSTRY (TAILORED FOR PUNE & REGIONAL BUSINESSES)           */}
        {/* ========================================================================= */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Domain Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Solutions By Industry
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Tailored software patterns adapted to specific commercial operational models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. CA & Corporate Advisors */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.03] dark:text-white/[0.03] group-hover:text-blue-500/[0.12] dark:group-hover:text-blue-500/[0.12] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Calculator className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  CA Firms &amp; Corporate Advisors
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Secure client document portals, GST return filing status trackers, digital appointment booking, and authoritative corporate websites.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Live Proof: Rahul B. Kavale &amp; Co.
                </div>
              </div>
              <a
                href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20website%20or%20software%20solution%20for%20a%20CA%20or%20Legal%20firm."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-xs font-bold text-[#E8623C] hover:underline inline-flex items-center gap-1 pt-2 border-t border-neutral-100 dark:border-white/[0.06]"
              >
                <span>Discuss CA Solutions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* 2. Manufacturing & MIDC Units */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.03] dark:text-white/[0.03] group-hover:text-amber-500/[0.12] dark:group-hover:text-amber-500/[0.12] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Factory className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Manufacturing &amp; Industrial Units
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Bhosari &amp; Chakan manufacturing ERPs, production batch tracking, inventory dispatch, vendor PO approvals, and machine breakdown logs.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Built for Pune MIDC Runtimes
                </div>
              </div>
              <a
                href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20manufacturing%20software%20solution%20for%20our%20industrial%20unit."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-xs font-bold text-[#E8623C] hover:underline inline-flex items-center gap-1 pt-2 border-t border-neutral-100 dark:border-white/[0.06]"
              >
                <span>Discuss Manufacturing ERP</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* 3. Dairy & AgriTech */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.03] dark:text-white/[0.03] group-hover:text-emerald-500/[0.12] dark:group-hover:text-emerald-500/[0.12] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Tractor className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Agri-Commerce &amp; Dairy Operations
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Daily milk fat/SNF logging, farmer payout ledgers, distributor dispatch tracking, and fertilizer inventory systems.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Live Proof: Yashodeep Agro &amp; Dairy Flow Pro
                </div>
              </div>
              <a
                href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20an%20AgriTech%20or%20Dairy%20software%20solution."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-xs font-bold text-[#E8623C] hover:underline inline-flex items-center gap-1 pt-2 border-t border-neutral-100 dark:border-white/[0.06]"
              >
                <span>Discuss AgriTech Solutions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* 4. Logistics & Fleet */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.03] dark:text-white/[0.03] group-hover:text-purple-500/[0.12] dark:group-hover:text-purple-500/[0.12] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Truck className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Logistics &amp; Transport Fleets
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Consignment tracking numbers, driver phone proof-of-delivery (POD) camera uploads, freight billing, and multi-branch ledger sync.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Live Proof: Trust Carry Logistics
                </div>
              </div>
              <a
                href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20Logistics%20or%20Fleet%20software%20solution."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-xs font-bold text-[#E8623C] hover:underline inline-flex items-center gap-1 pt-2 border-t border-neutral-100 dark:border-white/[0.06]"
              >
                <span>Discuss Fleet Solutions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* 5. Healthcare & Specialty Clinics */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.03] dark:text-white/[0.03] group-hover:text-rose-500/[0.12] dark:group-hover:text-rose-500/[0.12] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Stethoscope className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Clinics, Hospitals &amp; Doctors
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Patient appointment booking calendars, automated WhatsApp appointment reminders, digital prescription records, and local clinic SEO.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  HIPAA &amp; Indian Medical Data Privacy
                </div>
              </div>
              <a
                href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20Clinic%20or%20Healthcare%20website%20solution."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-xs font-bold text-[#E8623C] hover:underline inline-flex items-center gap-1 pt-2 border-t border-neutral-100 dark:border-white/[0.06]"
              >
                <span>Discuss Healthcare Solutions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* 6. Retail & Local Brands */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.03] dark:text-white/[0.03] group-hover:text-teal-500/[0.12] dark:group-hover:text-teal-500/[0.12] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Building2 className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Retail Showrooms &amp; Local Brands
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Interactive digital product catalogs, click-to-WhatsApp orders, Google Maps local Pune discoverability, and customer reviews showcase.
                </p>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  High Local Conversion Rate
                </div>
              </div>
              <a
                href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20Retail%20or%20Local%20Brand%20website%20solution."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-xs font-bold text-[#E8623C] hover:underline inline-flex items-center gap-1 pt-2 border-t border-neutral-100 dark:border-white/[0.06]"
              >
                <span>Discuss Retail Solutions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* WHY OUR ARCHITECTURE STANDS APART                                         */}
        {/* ========================================================================= */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06]">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Engineering Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Why Our Solutions Never Need Rebuilding After 1 Year
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Most agencies build quick WordPress hacks that break when plugins update. We build enterprise-grade software from first principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Zero Builder Lock-In
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You get the complete GitHub source code, database access keys, and server infrastructure. You are never tied to us or a recurring platform tax.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-3">
              <Zap className="w-8 h-8 text-[#E8623C]" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Sub-Second Edge Latency
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Server-rendered on Next.js 15 and cached on Indian edge CDN nodes so pages paint in &lt;0.8s even on congested mobile connections.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-3">
              <Clock className="w-8 h-8 text-blue-500" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                2–3 Week Turnaround
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We work in dedicated weekly sprint milestones with live review URLs. You see working code from day 4, not after 3 months of waiting.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CTA BANNER                                                         */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 dark:bg-[#0E1118] border border-neutral-800 dark:border-white/[0.08] text-white text-center space-y-4 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(232,98,60,0.12),transparent_70%)]" />
          
          <div className="relative z-10 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20 text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Custom Scoping
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
              Have a specific problem in your business?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
              Tell us what you want to automate or launch. Our Pune developer will review your workflow and reply directly on WhatsApp with honest advice and a clear estimate.
            </p>
            <div className="pt-3 flex justify-center">
              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20solution%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#E8623C]/30 flex items-center gap-2 active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              Pune, Maharashtra HQ · Serving businesses worldwide
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
