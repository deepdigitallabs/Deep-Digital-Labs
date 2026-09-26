import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  X, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Smartphone, 
  Clock, 
  Star,
  Users,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Why Us | Deep Digital Labs — Pune's Trusted Web & App Studio",
  description: "Why Pune business owners choose Deep Digital Labs over generic agencies, templates, and freelancers. 100% code ownership, sub-second speed, and direct WhatsApp access to your developer.",
  keywords: [
    "why choose deep digital labs",
    "website development agency Pune",
    "custom software development Pune",
    "best web design company Pune",
    "freelancer vs agency Pune",
    "WordPress alternative Pune"
  ],
  openGraph: {
    title: "Why Deep Digital Labs | Web & App Development Company in Pune",
    description: "Built for Pune businesses that value speed, direct communication, and 100% code ownership. No confusing tech jargon.",
    url: "https://deepdigitallabs.com/why-us",
  }
};

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function WhyUsPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-[#12151D] text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-xs">
            <span className="font-bold text-neutral-900 dark:text-white">Why Deep Digital Labs</span>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <span>Pune, Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white font-display leading-[1.12]">
            Why Pune&apos;s Best Businesses Build With Deep Digital Labs
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            No confusing tech talk. No disappearing freelancers. No recurring template fees. Just fast, modern websites and apps built by developers who talk to you directly on WhatsApp and care about your revenue.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E8623C] hover:bg-[#F0744E] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25 hover:shadow-xl active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] hover:border-[#E8623C]/40 text-neutral-800 dark:text-neutral-200 font-semibold text-sm transition-all shadow-xs"
            >
              <span>Explore Real Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Proof Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>10+ Production Deployments</span>
            </span>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Source Code Ownership</span>
            </span>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Sub-Second Page Load Speed</span>
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPARISON MATRIX                                                         */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              The Real Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Deep Digital Labs vs. The Alternatives
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Why business owners switch from slow WordPress agencies and unvetted freelancers to our modern stack.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-[#12151D] shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-neutral-200/80 dark:border-white/[0.08] bg-neutral-50/70 dark:bg-white/[0.02]">
                  <th className="py-4 px-5 font-bold text-neutral-900 dark:text-white">Feature</th>
                  <th className="py-4 px-5 font-bold text-[#E8623C] bg-[#E8623C]/5 border-x border-[#E8623C]/20">
                    Deep Digital Labs
                  </th>
                  <th className="py-4 px-5 font-medium text-neutral-500 dark:text-neutral-400">
                    Traditional Agencies
                  </th>
                  <th className="py-4 px-5 font-medium text-neutral-500 dark:text-neutral-400">
                    Freelancers &amp; WordPress
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-white/[0.04]">
                <tr>
                  <td className="py-4 px-5 font-semibold text-neutral-800 dark:text-neutral-200">
                    Communication
                  </td>
                  <td className="py-4 px-5 font-bold text-neutral-900 dark:text-white bg-[#E8623C]/5 border-x border-[#E8623C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Direct WhatsApp with developer</span>
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Account managers &amp; email tickets
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Irregular replies, ghosting risks
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-neutral-800 dark:text-neutral-200">
                    Code Ownership
                  </td>
                  <td className="py-4 px-5 font-bold text-neutral-900 dark:text-white bg-[#E8623C]/5 border-x border-[#E8623C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% You own Git code &amp; domain</span>
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Proprietary lock-in &amp; annual fees
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Hard to transfer credentials
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-neutral-800 dark:text-neutral-200">
                    Speed &amp; Performance
                  </td>
                  <td className="py-4 px-5 font-bold text-neutral-900 dark:text-white bg-[#E8623C]/5 border-x border-[#E8623C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Sub-0.8s Next.js 15 SSR</span>
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Average (3s–5s on mobile)
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Bloated plugins (4s–8s load)
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-neutral-800 dark:text-neutral-200">
                    Delivery Timeline
                  </td>
                  <td className="py-4 px-5 font-bold text-neutral-900 dark:text-white bg-[#E8623C]/5 border-x border-[#E8623C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>2–3 Weeks turnkey launch</span>
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    2–4 Months with long delays
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Unpredictable milestones
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-neutral-800 dark:text-neutral-200">
                    Tech Stack
                  </td>
                  <td className="py-4 px-5 font-bold text-neutral-900 dark:text-white bg-[#E8623C]/5 border-x border-[#E8623C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Next.js 15, React, Flutter, Node</span>
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Outdated PHP or rigid CMS
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Generic pre-made Elementor theme
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-neutral-800 dark:text-neutral-200">
                    Pricing Transparency
                  </td>
                  <td className="py-4 px-5 font-bold text-neutral-900 dark:text-white bg-[#E8623C]/5 border-x border-[#E8623C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Fixed packages, 0 hidden costs</span>
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Hourly overages &amp; scope inflation
                  </td>
                  <td className="py-4 px-5 text-neutral-600 dark:text-neutral-400">
                    Low initial quote, surprise extras
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6 CORE PILLARS                                                            */}
        {/* ========================================================================= */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              The 6 Principles We Never Compromise On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                Direct WhatsApp Access
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You talk directly to the software engineer building your product. No middle managers, no customer care delays, and no waiting 48 hours for a ticket reply.
              </p>
            </div>

            {/* 2 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                100% Code &amp; Domain Ownership
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You own 100% of your source code, your GitHub repository, your domain, and your hosting. We never lock you into proprietary hosting platforms.
              </p>
            </div>

            {/* 3 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                Sub-Second Speed Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Built with Next.js 15 Server Components and edge CDN caching. Your site loads in under 0.8 seconds on Indian 4G mobile networks, maximizing conversion rates.
              </p>
            </div>

            {/* 4 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                Built for Pune Businesses
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We understand Pune&apos;s business landscape — from CA firms in Deccan and Swargate to manufacturing in Bhosari, agritech, and clinics across Kothrud and Baner.
              </p>
            </div>

            {/* 5 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-sm">
                05
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                Clear 2–3 Week Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We work in focused agile sprints. Your website is planned, designed, coded, tested, and live within 2 to 3 weeks with zero unnecessary delays.
              </p>
            </div>

            {/* 6 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-mono font-bold text-sm">
                06
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                Zero Tech Jargon
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We explain everything in plain language so you always understand what you are paying for, how your system works, and how it helps your business grow.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* REAL CLIENT PROOF                                                         */}
        {/* ========================================================================= */}
        <div className="mb-24 p-8 sm:p-10 rounded-3xl bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Real Client Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
              What Pune Business Owners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                &ldquo;Deep Digital Labs gave our CA firm an exceptional digital presence. The website loads in under a second and our inbound client inquiries grew by 35%.&rdquo;
              </p>
              <div className="pt-2 border-t border-neutral-100 dark:border-white/[0.04]">
                <div className="text-xs font-bold text-neutral-900 dark:text-white">Rahul B. Kavale</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Founder &amp; CA Partner · Pune</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                &ldquo;They built our inventory and billing portal from scratch. What took 3 days of manual paperwork is now handled in real time on our phones.&rdquo;
              </p>
              <div className="pt-2 border-t border-neutral-100 dark:border-white/[0.04]">
                <div className="text-xs font-bold text-neutral-900 dark:text-white">Operations Director</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Yashodeep Agro · Pune &amp; Solapur</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                &ldquo;The speed and reliability are unbelievable. 100/100 Core Web Vitals, zero monthly builder fees, and direct WhatsApp access to the developer.&rdquo;
              </p>
              <div className="pt-2 border-t border-neutral-100 dark:border-white/[0.04]">
                <div className="text-xs font-bold text-neutral-900 dark:text-white">Kishor Gunjal</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Dairy Flow Pro User · Pune</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT BOTTOM CTA                                                        */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 dark:bg-[#0E1118] border border-neutral-800 dark:border-white/[0.08] text-white text-center space-y-4 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(232,98,60,0.12),transparent_70%)]" />
          
          <div className="relative z-10 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20 text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Ready to Upgrade?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white">
              Ready to build something that actually drives revenue?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
              Tell us about your business goals. We’ll review your requirements and reply directly on WhatsApp with honest advice and a clear quote.
            </p>
            <div className="pt-3 flex justify-center">
              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
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
