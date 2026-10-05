import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  GitBranch, 
  Cpu,
  MessageSquare,
  Zap,
  ShieldCheck,
  Headphones,
  Target
} from 'lucide-react';


export const metadata: Metadata = {
  title: 'About Deep Digital Labs | Websites, Business Software & Automation',
  description: 'Deep Digital Labs is a Pune-based digital development studio helping businesses build modern websites, custom software and automation.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-neutral-200 dark:border-white/10">

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            Deep Digital Labs <br />
            <span className="text-[#E8623C]">Websites, Business Software &amp; Automation</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            A Pune-based digital development studio helping businesses build modern websites, custom software and automation. Clean code, direct developer communication, and 100% source code ownership.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-all shadow-xl active:scale-95"
            >
              <span>Work With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-xl active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Origin & Engineering Baseline */}
        <div className="py-20 border-b border-neutral-200 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#D4FF00] font-semibold">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Modern Digital Development for Growing Businesses
            </h2>
            <div className="text-neutral-600 dark:text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Deep Digital Labs is a Pune-based digital development studio helping businesses build modern websites, custom software and automation without bloated overheads, slow timelines, or frustrating vendor lock-in.
              </p>
              <p>
                Based in Pune, Maharashtra, we build business websites, cross-platform Android/iOS mobile apps, and operational portals tailored to Indian businesses. Every project comes with 100% source code ownership, GST-compliant invoicing, and direct WhatsApp support with our developer team in Pune.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 space-y-6 shadow-sm dark:shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-gray-400 font-bold">
                Engineering Baseline
              </h3>
              <span className="text-xs font-mono text-neutral-900 dark:text-[#D4FF00] font-semibold">Verified Metrics</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 shadow-sm">
                <div className="text-neutral-900 dark:text-[#D4FF00] font-mono text-3xl font-extrabold mb-1">10+</div>
                <div className="font-semibold text-neutral-900 dark:text-white text-sm">Live Products</div>
                <div className="text-xs text-neutral-500 dark:text-gray-500 mt-1">SaaS, Civic &amp; Logistics</div>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 shadow-sm">
                <div className="text-neutral-900 dark:text-white font-mono text-3xl font-extrabold mb-1">&lt; 1.2s</div>
                <div className="font-semibold text-neutral-900 dark:text-white text-sm">Avg. Page Speed</div>
                <div className="text-xs text-neutral-500 dark:text-gray-500 mt-1">Lighthouse 95+ Vitals</div>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 shadow-sm">
                <div className="text-neutral-900 dark:text-[#D4FF00] font-mono text-3xl font-extrabold mb-1">99.9%</div>
                <div className="font-semibold text-neutral-900 dark:text-white text-sm">Uptime Maintained</div>
                <div className="text-xs text-neutral-500 dark:text-gray-500 mt-1">Edge CDN &amp; High Concurrency</div>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 shadow-sm">
                <div className="text-neutral-900 dark:text-white font-mono text-3xl font-extrabold mb-1">100%</div>
                <div className="font-semibold text-neutral-900 dark:text-white text-sm">IP Ownership</div>
                <div className="text-xs text-neutral-500 dark:text-gray-500 mt-1">Zero vendor lock-in</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Philosophy (3 Bento Cards) */}
        <div className="py-20 border-b border-neutral-200 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#D4FF00] font-semibold">
              The Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Our Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Principle 1 */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#D4FF00]/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-[#D4FF00] flex items-center justify-center shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Product-Led, Not Ticket-Led
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-400 leading-relaxed">
                We care about your business metrics, not just logging hours. If a requested feature will hurt performance or runway, we advise against it. We help you cut feature bloat and ship to market faster.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#D4FF00]/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-[#D4FF00] flex items-center justify-center shadow-sm">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Engineering Craftsmanship
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-400 leading-relaxed">
                We write clean, strictly typed, maintainable code. We build systems that your future in-house engineering team will love, backed by strict TypeScript types, automated testing, and CI/CD pipelines.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#D4FF00]/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-[#D4FF00] flex items-center justify-center shadow-sm">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Radical Transparency
              </h3>
              <p className="text-sm text-neutral-600 dark:text-gray-400 leading-relaxed">
                Zero black-box consulting. You get direct access to our GitHub repositories, daily asynchronous standups on Slack, and weekly sprint demos on Zoom. You see every commit in real-time.
              </p>
            </div>

          </div>
        </div>

        {/* Why Businesses Work With Us Section */}
        <div id="why-work-with-us" className="py-20 border-b border-neutral-200 dark:border-white/10">
          <div className="space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-semibold">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-display">
                Why Businesses Work With Us
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                We remove the layers, delays, and recurring platform taxes of traditional agencies. Here is why founders, CAs, and operations leaders partner with Deep Digital Labs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. Direct developer communication */}
              <div className="p-7 rounded-2xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Direct Developer Communication
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  You collaborate directly with the engineers writing your code on WhatsApp and weekly video sprints. No middle managers, no customer service queues, and no telephone games.
                </p>
              </div>

              {/* 2. Clear pricing */}
              <div className="p-7 rounded-2xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Clear, Milestone Pricing
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Fixed milestone scopes agreed upon upfront. No surprise hourly overages, no hidden builder subscription taxes, and no unexpected change-request fees.
                </p>
              </div>

              {/* 3. Fast delivery */}
              <div className="p-7 rounded-2xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-xs">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Fast Turnaround
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We work in focused agile sprints. Your website or software is architected, developed, and deployed to production in 2 to 3 weeks — not months of corporate bureaucracy.
                </p>
              </div>

              {/* 4. Ownership of code */}
              <div className="p-7 rounded-2xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-xs">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  100% Code &amp; Data Ownership
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  You own your complete GitHub repository, databases, domain, and cloud hosting infrastructure. You are never held hostage by proprietary vendor locks.
                </p>
              </div>

              {/* 5. Post-launch support */}
              <div className="p-7 rounded-2xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-xs">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Post-Launch Support
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We stay in your corner after launch day. Routine security updates, uptime telemetry, rapid bug fixes, and continuous feature additions via dedicated retainers.
                </p>
              </div>

              {/* 6. Business-focused solutions */}
              <div className="p-7 rounded-2xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Business-Focused Solutions
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We don’t build tech for tech’s sake. Every feature is aligned to measurable business outcomes: more qualified client inquiries, automated operational tasks, and higher conversion.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 sm:p-14 rounded-3xl bg-slate-900 text-white space-y-6 text-center shadow-lg transition-colors duration-200">
          <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-emerald-400 px-3.5 py-1 rounded-full">
            Pune Developer Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto text-white">
            Have a project you want to build?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Talk directly with our developer team in Pune. We’ll understand what you need, give you a clear timeline and fair pricing, and start building.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
