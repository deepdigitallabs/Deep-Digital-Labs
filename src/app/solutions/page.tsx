import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  Bot, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Factory, 
  Tractor, 
  Truck, 
  Stethoscope, 
  Calculator, 
  Clock, 
  Users,
  BarChart3,
  Package,
  FileText,
  RefreshCw,
  Lock,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  MessageCircle,
  Database
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Business Problem Solutions | Deep Digital Labs Pune",
  description: "We build custom business software, high-converting websites, and mobile apps around your real operational problems. Centralize orders, inventory, billing, and leads.",
  keywords: [
    "custom software solutions Pune",
    "business inventory software Pune",
    "replace excel business software Pune",
    "WhatsApp business automation Pune",
    "CA firm website solutions Pune",
    "manufacturing ERP Pune",
    "dairy collection software Pune",
    "logistics software development Pune",
    "local business website Pune"
  ],
  openGraph: {
    title: "Business Problem Solutions | Deep Digital Labs Pune",
    description: "Technology should solve real business headaches. We replace Excel & WhatsApp chaos with custom portals, websites, and mobile apps built for Pune businesses.",
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
        {/* HERO SECTION: BUYER-FIRST PROBLEM POSITIONING                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-[#12151D] text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-xs">
            <span className="font-bold text-[#E8623C]">Business-First Approach</span>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <span>Software Built For Real Operations</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white font-display leading-[1.12]">
            Software Built Around Your Real Business Problems
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            You don’t need technical jargon like Prisma, Redis, or frameworks. You care about managing your inventory, letting customers order on WhatsApp, tracking staff, seeing sales, and getting more local inquiries.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20an%20operational%20problem%20in%20my%20business%20I%20want%20to%20solve."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E8623C] hover:bg-[#F0744E] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25 hover:shadow-xl active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discuss Your Business Need</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] hover:border-[#E8623C]/40 text-neutral-800 dark:text-neutral-200 font-semibold text-sm transition-all shadow-xs"
            >
              <span>Schedule Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Real Buyer Questions Bar */}
          <div className="pt-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              What business owners ask us:
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/[0.08] text-neutral-800 dark:text-neutral-200 font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                &ldquo;Can I manage my inventory?&rdquo;
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/[0.08] text-neutral-800 dark:text-neutral-200 font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                &ldquo;Can customers order on WhatsApp?&rdquo;
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/[0.08] text-neutral-800 dark:text-neutral-200 font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                &ldquo;Can my staff use it easily?&rdquo;
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/[0.08] text-neutral-800 dark:text-neutral-200 font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                &ldquo;Can I see daily sales &amp; profit?&rdquo;
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/[0.08] text-neutral-800 dark:text-neutral-200 font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                &ldquo;Can I get qualified leads?&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CORE SOLUTIONS STRUCTURE: PROBLEM -> SOLUTION -> RESULT -> TECH           */}
        {/* ========================================================================= */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Structured By Business Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              How We Solve Common Business Headaches
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Every system is engineered from your business problem first. Technology remains the reliable engine under the hood.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* --------------------------------------------------------------------- */}
            {/* SOLUTION 1: REPLACE EXCEL & WHATSAPP CHAOS                            */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Problem & Solution */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Business Problem 01 · Operations</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
                      Replace Excel &amp; WhatsApp Chaos
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 mt-2">
                      The Problem:
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                      Customer orders are scattered across personal WhatsApp chats, inventory is manually tracked on conflicting Excel sheets, and billing takes hours of re-typing. Orders get delayed or lost.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/[0.06] space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E8623C]">
                      The Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                      Centralize your orders, inventory, billing, and staff operations in one simple custom business portal. Everyone works from the same live data.
                    </p>
                  </div>

                  {/* Secondary Tech Baseline */}
                  <div className="pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Built with: Next.js + PostgreSQL · 100% Owned by You</span>
                  </div>
                </div>

                {/* Right: What You'll Get (The Results & Deliverables) */}
                <div className="lg:col-span-7 bg-neutral-50/70 dark:bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-white/[0.06] space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/[0.06] pb-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-bold">
                      What You’ll Get In Your System:
                    </h4>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Ready in 2–3 Weeks</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <BarChart3 className="w-4 h-4 text-[#E8623C]" />
                        <span>Sales Dashboard</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        See today’s orders, pending dispatches, and total cash collected at a single glance.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Users className="w-4 h-4 text-[#E8623C]" />
                        <span>Staff Login &amp; Roles</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Separate logins for Admin, Sales, Warehouse, and Billing so staff only see what they need.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Package className="w-4 h-4 text-[#E8623C]" />
                        <span>Real-Time Inventory</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Stock deducts automatically upon dispatch. Automatic alert notifications when stock is low.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <FileText className="w-4 h-4 text-[#E8623C]" />
                        <span>1-Click GST Invoicing</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Generate clean GST bills, delivery challans, and PDF receipts in seconds.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <TrendingUp className="w-4 h-4 text-[#E8623C]" />
                        <span>Daily Business Reports</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Download customer outstanding ledgers, sales summaries, and profit statements to Excel.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <MessageCircle className="w-4 h-4 text-[#E8623C]" />
                        <span>WhatsApp Updates</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Send automatic order confirmations and dispatch tracking links straight to customer phones.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Live example: Dairy Flow Pro &amp; Yashodeep Agro</span>
                    <a
                      href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20replace%20Excel%20and%20WhatsApp%20in%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1"
                    >
                      <span>Discuss Your Operations</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* SOLUTION 2: GET QUALIFIED LOCAL INQUIRIES, NOT JUST A BROCHURE        */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Problem & Solution */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Business Problem 02 · Sales &amp; Growth</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
                      Turn Website Visitors Into Qualified Inquiries
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 mt-2">
                      The Problem:
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                      Your current website looks outdated, takes 5+ seconds to open on phones, and generates zero phone calls or WhatsApp messages. Prospective clients assume you are inactive.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/[0.06] space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E8623C]">
                      The Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                      A fast, conversion-engineered business website designed to establish instant authority and funnel local Pune and Indian buyers directly to your phone or WhatsApp.
                    </p>
                  </div>

                  {/* Secondary Tech Baseline */}
                  <div className="pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Built with: Next.js 15 Web Architecture · Zero Monthly Builder Fees</span>
                  </div>
                </div>

                {/* Right: What You'll Get */}
                <div className="lg:col-span-7 bg-neutral-50/70 dark:bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-white/[0.06] space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/[0.06] pb-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-bold">
                      What You’ll Get On Your Website:
                    </h4>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Mobile Speed 95+</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Zap className="w-4 h-4 text-[#E8623C]" />
                        <span>Performance-Optimized Websites</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Fast-loading websites optimized for Core Web Vitals and real-world mobile performance.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Building2 className="w-4 h-4 text-[#E8623C]" />
                        <span>Local Google Ranking</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Engineered with local search schemas so Pune buyers searching for your services find you first.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <MessageCircle className="w-4 h-4 text-[#E8623C]" />
                        <span>1-Tap WhatsApp Button</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Floating WhatsApp CTA that lets potential clients start a direct conversation with you in 1 tap.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <ShieldCheck className="w-4 h-4 text-[#E8623C]" />
                        <span>Client Proof &amp; Portfolio</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Highlight past work, client testimonials, GST verification, and industry certifications.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <FileText className="w-4 h-4 text-[#E8623C]" />
                        <span>Inquiry Lead Form</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Custom quotation forms with instant SMS or email notifications directly to your phone.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Lock className="w-4 h-4 text-[#E8623C]" />
                        <span>No Monthly Platform Taxes</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        No recurring monthly fees for website builders. You own your code and domain 100%.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Live example: Rahul B. Kavale &amp; Co.</span>
                    <Link
                      href="/services/websites-web-apps"
                      className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Website Packages</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* SOLUTION 3: FIELD STAFF & CUSTOMER MOBILE APP                         */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Problem & Solution */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Business Problem 03 · Mobile &amp; Field</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
                      Empower Field Staff With A Simple Mobile App
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 mt-2">
                      The Problem:
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                      Your field agents, delivery drivers, or service technicians cannot carry laptops. Paper registers get torn, offline areas cause delays, and dispatchers have no idea where jobs stand.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/[0.06] space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E8623C]">
                      The Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                      A fast, lightweight cross-platform mobile app that staff can use on any Android or iPhone smartphone—even without active cellular signal.
                    </p>
                  </div>

                  {/* Secondary Tech Baseline */}
                  <div className="pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Built with: Flutter + Secure Cloud Sync · Android &amp; iOS</span>
                  </div>
                </div>

                {/* Right: What You'll Get */}
                <div className="lg:col-span-7 bg-neutral-50/70 dark:bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-white/[0.06] space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/[0.06] pb-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-bold">
                      What You’ll Get In Your Mobile App:
                    </h4>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Play Store &amp; App Store</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Smartphone className="w-4 h-4 text-[#E8623C]" />
                        <span>One App, Both Platforms</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Single high-speed app works smoothly on both low-cost Android phones and iPhones.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <RefreshCw className="w-4 h-4 text-[#E8623C]" />
                        <span>Works Offline</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Staff can log collections, milk weights, or job notes without internet; it syncs once back online.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Package className="w-4 h-4 text-[#E8623C]" />
                        <span>Camera &amp; Barcode Scanning</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Scan package barcodes and take photo proof-of-delivery (POD) directly from the phone camera.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <MessageCircle className="w-4 h-4 text-[#E8623C]" />
                        <span>Push Notifications</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Send instant alerts to drivers or customers when an order is assigned, dispatched, or completed.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Lock className="w-4 h-4 text-[#E8623C]" />
                        <span>Fingerprint Login</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Quick, secure biometric login so employees don’t have to remember complex passwords every day.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#E8623C]" />
                        <span>Store Submission Support</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        App Store &amp; Google Play submission support included throughout the review process.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Live example: Trust Carry Logistics Fleet App</span>
                    <Link
                      href="/services/mobile-app-development"
                      className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Mobile App Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* SOLUTION 4: AUTOMATE 24/7 WHATSAPP INQUIRIES & WORKFLOWS              */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Problem & Solution */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Business Problem 04 · Customer Support</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
                      Automate Repetitive WhatsApp Inquiries 24/7
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 mt-2">
                      The Problem:
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                      Your staff wastes hours answering the same questions: &ldquo;What is your price?&rdquo;, &ldquo;Send catalog&rdquo;, &ldquo;Where is my order?&rdquo;. Inquiries that arrive in the evening go unanswered until the next morning, losing customers to competitors.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/[0.06] space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E8623C]">
                      The Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                      An official automated WhatsApp Business bot that answers questions, sends catalogs, takes orders, and qualifies leads 24 hours a day on your verified number.
                    </p>
                  </div>

                  {/* Secondary Tech Baseline */}
                  <div className="pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Built with: Official Meta WhatsApp Cloud API · Secure Webhooks</span>
                  </div>
                </div>

                {/* Right: What You'll Get */}
                <div className="lg:col-span-7 bg-neutral-50/70 dark:bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-white/[0.06] space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/[0.06] pb-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-bold">
                      What You’ll Get On WhatsApp:
                    </h4>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Zero Delay 24/7</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Clock className="w-4 h-4 text-[#E8623C]" />
                        <span>Instant 24/7 Replies</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Customers receive immediate answers in under 3 seconds, even on Sundays and late nights.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Package className="w-4 h-4 text-[#E8623C]" />
                        <span>Digital Product Catalog</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Customers can browse pictures, specs, and price lists directly inside their WhatsApp chat.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Users className="w-4 h-4 text-[#E8623C]" />
                        <span>Lead Qualification</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Collects customer requirement, quantity, and budget before notifying your sales executive.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <FileText className="w-4 h-4 text-[#E8623C]" />
                        <span>Automated Invoices &amp; Receipts</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Sends payment confirmation links, GST invoice PDFs, and dispatch tracking numbers automatically.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <MessageCircle className="w-4 h-4 text-[#E8623C]" />
                        <span>Multi-Agent Inbox</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Multiple staff members can reply to customers from one single official business number.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Database className="w-4 h-4 text-[#E8623C]" />
                        <span>CRM &amp; Excel Sync</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        All contact phone numbers and inquiries automatically save to your database or Google Sheets.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Official WhatsApp Cloud API Partner</span>
                    <Link
                      href="/services/chat-bot-development"
                      className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1"
                    >
                      <span>Explore WhatsApp Bots</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* SOLUTION 5: CONNECT ISOLATED SYSTEMS & PAYMENT FLOWS                   */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Problem & Solution */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono font-bold text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Business Problem 05 · Integrations</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
                      Connect Disconnected Systems &amp; Payment Flows
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 mt-2">
                      The Problem:
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                      Staff spend hours manually copying payment receipts, updating Tally, creating shipping waybills, and re-typing addresses across 3 different portals, resulting in avoidable human errors.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/[0.06] space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E8623C]">
                      The Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                      Custom software integrations that connect your payments, accounting, courier partners, and CRM into one seamless automated data pipeline.
                    </p>
                  </div>

                  {/* Secondary Tech Baseline */}
                  <div className="pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Built with: Secure REST APIs · Automated Webhooks</span>
                  </div>
                </div>

                {/* Right: What You'll Get */}
                <div className="lg:col-span-7 bg-neutral-50/70 dark:bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-white/[0.06] space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/[0.06] pb-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-bold">
                      What You’ll Get In Integrations:
                    </h4>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Zero Manual Re-typing</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#E8623C]" />
                        <span>Instant UPI &amp; QR Payments</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Automatic payment verification with instant invoice generation and WhatsApp receipt delivery.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Truck className="w-4 h-4 text-[#E8623C]" />
                        <span>Automated Courier AWBs</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Generate shipping labels, consignment tracking numbers, and pickup requests automatically.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <Calculator className="w-4 h-4 text-[#E8623C]" />
                        <span>Tally &amp; Accounting Sync</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Export formatted sales vouchers, customer ledgers, and tax summaries ready for your accountant.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                        <ShieldCheck className="w-4 h-4 text-[#E8623C]" />
                        <span>Automated Daily Backups</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Encrypted cloud backups of all orders, client lists, and accounts saved automatically every night.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Fast 2-week turnaround per integration</span>
                    <a
                      href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20integrate%20my%20software%20and%20payments."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1"
                    >
                      <span>Connect Your Systems</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SOLUTIONS BY INDUSTRY: FOCUS ON ACTUAL OPERATIONAL PROBLEMS SOLVED         */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Domain Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Solutions By Industry
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Tailored software patterns adapted to specific operational workflows across Pune and Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. CA & Tax Advisory */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E8623C] font-bold">
                  <Calculator className="w-4 h-4" />
                  <span>CA &amp; Tax Advisors</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Client Document &amp; GST Filing Portals
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Problem:</strong> Clients constantly call asking for past tax receipts and filing status.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Solution:</strong> Self-service client document vault + automated WhatsApp filing updates.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">You Get:</strong> Client login, tax document storage, digital appointment booking, authoritative web presence.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Live: Rahul B. Kavale &amp; Co.</span>
                <Link href="/industries/ca-firms" className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 2. Manufacturing & MIDC Units */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold">
                  <Factory className="w-4 h-4" />
                  <span>MIDC Manufacturing Units</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Batch Production &amp; Material Portals
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Problem:</strong> Material shortages, dispatch delays, and paper job cards lost on the shop floor.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Solution:</strong> Real-time production batch tracker and raw material stock ledger.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">You Get:</strong> Job card logs, low-stock warnings, gate pass generation, vendor PO approvals.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Bhosari &amp; Chakan Ready</span>
                <Link href="/industries/manufacturing" className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 3. Dairy & Agri-Commerce */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 font-bold">
                  <Tractor className="w-4 h-4" />
                  <span>Dairy &amp; Agri-Commerce</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Milk Collection &amp; Farmer Passbooks
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Problem:</strong> Disputed milk fat/SNF registers and delayed calculation of weekly farmer payouts.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Solution:</strong> Fast digital collection entry with instant SMS/WhatsApp slip to the farmer.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">You Get:</strong> Daily collection records, automated rate chart calculation, farmer passbook ledger, dispatch sync.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Live: Dairy Flow Pro</span>
                <Link href="/industries/dairy-farming" className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 4. Logistics & Fleet */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-500 font-bold">
                  <Truck className="w-4 h-4" />
                  <span>Logistics &amp; Transport Fleets</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Consignment Tracking &amp; Mobile POD
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Problem:</strong> Clients calling repeatedly asking &ldquo;Where is my consignment?&rdquo;; lost paper PODs.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Solution:</strong> Live public tracking URL + driver smartphone photo delivery proof.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">You Get:</strong> Online consignment tracking page, camera photo POD upload, multi-branch freight billing.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Live: Trust Carry Logistics</span>
                <Link href="/industries/logistics" className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 5. Healthcare & Specialty Clinics */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-rose-500 font-bold">
                  <Stethoscope className="w-4 h-4" />
                  <span>Clinics &amp; Healthcare</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Patient Booking &amp; WhatsApp Reminders
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Problem:</strong> High patient no-show rates and overcrowded waiting rooms due to phone booking delays.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Solution:</strong> Automated calendar booking with automated WhatsApp appointment reminders.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">You Get:</strong> Self-service appointment calendar, WhatsApp reminders, digital prescription vault, clinic local SEO.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Reduces No-Shows</span>
                <Link href="/industries/healthcare" className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 6. Retail & Local Showrooms */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-500 font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>Retail &amp; Showrooms</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Digital Catalog &amp; Click-to-WhatsApp Orders
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Problem:</strong> Customers leave without buying because they didn’t know your full catalog range.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">Solution:</strong> Visual mobile product catalog with 1-click WhatsApp order dispatch.</p>
                  <p><strong className="text-neutral-800 dark:text-neutral-200">You Get:</strong> Interactive catalog, WhatsApp cart checkout, local Google Maps optimization, zero platform commissions.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">High Local Conversion</span>
                <Link href="/industries/retail" className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BUYER FAQ: ANSWERING EXACT QUESTIONS BUSINESS OWNERS CARE ABOUT           */}
        {/* ========================================================================= */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06]">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Questions Business Owners Ask Us Before Starting
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Direct, honest answers without technical obfuscation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                <HelpCircle className="w-4 h-4 text-[#E8623C] shrink-0" />
                <span>&ldquo;Can I manage my inventory and see real-time stock?&rdquo;</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Yes. Every item, batch, and SKU is tracked. When an order is placed or dispatched, stock updates instantly across all user screens. You can also configure automatic alerts when stock drops below minimum thresholds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                <HelpCircle className="w-4 h-4 text-[#E8623C] shrink-0" />
                <span>&ldquo;Can customers order or inquire directly on WhatsApp?&rdquo;</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Yes. We integrate click-to-WhatsApp buttons and official WhatsApp Cloud API automation so customers can view your catalog and send orders directly with product details pre-filled.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                <HelpCircle className="w-4 h-4 text-[#E8623C] shrink-0" />
                <span>&ldquo;Can non-technical staff use this system easily?&rdquo;</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Yes. We design interfaces specifically for shop-floor operators, warehouse staff, and billing clerks. If your staff knows how to use WhatsApp or a smartphone, they can learn our system in under 15 minutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                <HelpCircle className="w-4 h-4 text-[#E8623C] shrink-0" />
                <span>&ldquo;Can I see daily sales, profits, and pending dues?&rdquo;</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Yes. You get an executive dashboard on your phone or laptop. At a glance, you see today’s collections, outstanding receivables from clients, pending dispatches, and monthly profit margins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                <HelpCircle className="w-4 h-4 text-[#E8623C] shrink-0" />
                <span>&ldquo;How will this help me get more qualified client leads?&rdquo;</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                We build fast, conversion-optimized websites tailored with local Pune search optimization. Clear trust credentials and direct WhatsApp actions make it easy for local buyers searching on Google to contact you immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white">
                <HelpCircle className="w-4 h-4 text-[#E8623C] shrink-0" />
                <span>&ldquo;Do I own the software, or is there a monthly subscription?&rdquo;</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                You own 100% of your source code, database, and system. We do not charge recurring monthly builder taxes or rental fees. The system is deployed on your own infrastructure with complete ownership.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* OUR PRACTICAL APPROACH: WHY TECH REMAINS SECONDARY                        */}
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
              We engineer with modern, maintainable technology from first principles — delivering robust code that scales reliably without fragile dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                100% Code &amp; Data Ownership
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You receive the complete source code, database access keys, and cloud infrastructure. You are never locked into proprietary platforms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-3">
              <Zap className="w-8 h-8 text-[#E8623C]" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Performance-Optimized Websites
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Fast-loading websites optimized for Core Web Vitals and real-world mobile performance across Pune and India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-3">
              <Clock className="w-8 h-8 text-blue-500" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Focused 2–3 Week Sprints
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We work in focused weekly sprint milestones with live review URLs. You see working screens and test real workflows from week one.
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
              Direct Developer Scoping
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
              Have an operational problem in your business?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
              Tell us what is slowing down your team or costing you sales. Our Pune developer will review your workflow and reply directly on WhatsApp with honest advice and a clear estimate.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-4">
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

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-all border border-white/15 flex items-center gap-2"
              >
                <span>Book Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              Pune, Maharashtra HQ · Serving businesses across Pune &amp; India
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
