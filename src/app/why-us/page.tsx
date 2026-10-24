import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Star,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Why Us | Deep Digital Labs — Pune's Trusted Web & App Studio",
  description: "Why Pune business owners choose Deep Digital Labs for fast, custom web and app engineering. 100% code ownership, responsive mobile performance, and direct developer communication.",
  keywords: [
    "why choose deep digital labs",
    "website development agency Pune",
    "custom software development Pune",
    "best web design company Pune",
    "direct developer model Pune",
    "modern web development Pune"
  ],
  openGraph: {
    title: "Why Deep Digital Labs | Web & App Development Company in Pune",
    description: "A direct, transparent development experience. Built for Pune businesses that value speed, direct collaboration, and 100% code ownership.",
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
    <div className="bg-white text-[#4B5070] min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        {/* Soft Blurred Gradient Circles */}
        <div 
          aria-hidden="true" 
          className="absolute top-16 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FF7A1A]/15 to-[#E8338C]/15 blur-3xl pointer-events-none -z-10" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-28 right-1/4 translate-x-1/3 w-96 h-96 rounded-full bg-gradient-to-bl from-[#6A3DE8]/15 to-[#E8338C]/15 blur-3xl pointer-events-none -z-10" 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8338C]/20 bg-[#F7F5FF] text-xs font-mono font-semibold text-[#E8338C] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Deep Digital Labs • Pune, Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1F4B] tracking-tight leading-tight font-display">
            Why Pune Businesses Build With <span className="brand-gradient-text">Us</span>
          </h1>

          <div className="tagline-divider max-w-sm mx-auto text-xs font-medium tracking-wider">
            Build • Grow • Digital
          </div>

          <p className="text-base sm:text-xl text-[#4B5070] leading-relaxed max-w-3xl mx-auto">
            A direct, honest development experience. We build fast, high-converting websites and business software — with 100% code ownership, stage-wise payments, and direct WhatsApp communication with your developers.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-all shadow-md shadow-[#25D366]/20 flex items-center gap-2 active:scale-98 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/case-studies"
              className="btn-secondary"
            >
              <span>Explore Real Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Proof Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#4B5070] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
              <span>10+ Projects Delivered</span>
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E8338C]" />
              <span>100% Code &amp; Site Ownership</span>
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#6A3DE8]" />
              <span>Fast on Indian 4G/5G</span>
            </span>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX (Alternate #F7F5FF Section) */}
      <section className="py-20 bg-[#F7F5FF] border-y border-neutral-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-bold">
              Development Models
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] tracking-tight font-display">
              Why Our Direct Model Works <span className="brand-gradient-text">Better</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5070]">
              How our direct developer partnership compares with traditional agencies and template builders.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-neutral-200/80 bg-[#F7F5FF]">
                  <th className="py-4 px-5 font-bold text-[#1B1F4B]">Capability &amp; Approach</th>
                  <th className="py-4 px-5 font-bold text-[#E8338C] bg-[#E8338C]/5 border-x border-[#E8338C]/20">
                    Deep Digital Labs (Direct)
                  </th>
                  <th className="py-4 px-5 font-medium text-[#4B5070]">
                    Traditional Agencies
                  </th>
                  <th className="py-4 px-5 font-medium text-[#4B5070]">
                    Generic Site Builders
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="py-4 px-5 font-semibold text-[#1B1F4B]">
                    Communication
                  </td>
                  <td className="py-4 px-5 font-bold text-[#1B1F4B] bg-[#E8338C]/5 border-x border-[#E8338C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Direct WhatsApp with developer</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Middle managers &amp; slow ticket queues
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Automated bots &amp; forum threads
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-[#1B1F4B]">
                    Code Ownership
                  </td>
                  <td className="py-4 px-5 font-bold text-[#1B1F4B] bg-[#E8338C]/5 border-x border-[#E8338C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>100% You own Git, code &amp; domain</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Hosting lock-in &amp; retainer contracts
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Closed platform dependencies (Wix/Shopify)
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-[#1B1F4B]">
                    Speed &amp; Performance
                  </td>
                  <td className="py-4 px-5 font-bold text-[#1B1F4B] bg-[#E8338C]/5 border-x border-[#E8338C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Sub-second load times on 4G/5G</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Heavier CMS stacks (3s–6s mobile)
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Plugin-heavy templates (4s–8s load)
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-[#1B1F4B]">
                    Turnaround Time
                  </td>
                  <td className="py-4 px-5 font-bold text-[#1B1F4B] bg-[#E8338C]/5 border-x border-[#E8338C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Ready in 2–3 weeks</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    2 to 4 months of corporate delays
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Do-it-yourself trial and error
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-5 font-semibold text-[#1B1F4B]">
                    Pricing Transparency
                  </td>
                  <td className="py-4 px-5 font-bold text-[#1B1F4B] bg-[#E8338C]/5 border-x border-[#E8338C]/20 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Pay in stages as each part is done</span>
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Hourly overages &amp; scope-creep bills
                  </td>
                  <td className="py-4 px-5 text-[#4B5070]">
                    Monthly subscription tiers that increase
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6 CORE PILLARS (White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A1A] font-bold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] tracking-tight font-display">
              6 Rules We <span className="brand-gradient-text">Never</span> Compromise On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1 */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Direct WhatsApp Access
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                You talk directly to the software engineer building your product. No middle managers and no waiting 48 hours for a ticket reply.
              </p>
            </div>

            {/* 2 */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                100% Code &amp; Domain Ownership
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                You own 100% of your source code, your GitHub repository, your domain, and your hosting. We never lock you in.
              </p>
            </div>

            {/* 3 */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Fast on Mobile Phones
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                Fast-loading websites optimized for real-world mobile performance on Indian 4G/5G connections.
              </p>
            </div>

            {/* 4 */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Built for Pune Businesses
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                We understand Pune&apos;s business landscape — from CA firms in Deccan and Swargate to manufacturing in Bhosari, clinics, and traders.
              </p>
            </div>

            {/* 5 */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle font-mono font-bold text-sm">
                05
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Clear 2–3 Week Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                We work in focused sprints. Your project is designed, coded, tested, and live within 2 to 3 weeks with zero unnecessary delays.
              </p>
            </div>

            {/* 6 */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle font-mono font-bold text-sm">
                06
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Zero Tech Jargon
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                We explain everything in plain language so you always understand what you are getting and how it helps your business grow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REAL CLIENT PROOF (Alternate #F7F5FF Section) */}
      <section className="py-20 bg-[#F7F5FF] border-t border-neutral-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-bold">
              Real Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] font-display">
              What Pune Business Owners <span className="brand-gradient-text">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-brand p-6 space-y-4">
              <div className="flex text-[#FFB81C] gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                &ldquo;Deep Digital Labs gave our CA firm an exceptional digital presence. The website loads instantaneously and our inbound corporate inquiries are now pre-qualified through structured forms.&rdquo;
              </p>
              <div className="pt-2 border-t border-neutral-100">
                <div className="text-xs font-bold text-[#1B1F4B]">Rahul B. Kavale</div>
                <div className="text-[11px] text-[#4B5070]">CA Partner · Pune</div>
              </div>
            </div>

            <div className="card-brand p-6 space-y-4">
              <div className="flex text-[#FFB81C] gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                &ldquo;They built our inventory and billing portal from scratch. What took 3 days of manual paperwork is now handled in real time on our phones.&rdquo;
              </p>
              <div className="pt-2 border-t border-neutral-100">
                <div className="text-xs font-bold text-[#1B1F4B]">Operations Director</div>
                <div className="text-[11px] text-[#4B5070]">Yashodeep Agro · Pune &amp; Solapur</div>
              </div>
            </div>

            <div className="card-brand p-6 space-y-4">
              <div className="flex text-[#FFB81C] gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                &ldquo;The speed and reliability are exceptional. High Google speed scores, zero recurring builder fees, and direct WhatsApp access to the developer who actually built it.&rdquo;
              </p>
              <div className="pt-2 border-t border-neutral-100">
                <div className="text-xs font-bold text-[#1B1F4B]">Kishor Gunjal</div>
                <div className="text-[11px] text-[#4B5070]">GoNidhi User · Pune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION (White Background With Animated Brand Mesh) */}
      <section className="py-24 sm:py-32 bg-white text-[#4B5070] relative overflow-hidden bg-[radial-gradient(rgba(27,31,75,0.08)_1.2px,transparent_1.2px)] [background-size:24px_24px] border-t border-neutral-200/70">
        {/* Animated Background Mesh Orbs (Tuned for Soft Lavender) */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-32 -left-20 w-[600px] h-[450px] bg-gradient-to-br from-[#FF7A1A]/16 via-[#E8338C]/14 to-transparent rounded-full blur-3xl -z-10 animate-mesh-pulse" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-32 -right-20 w-[650px] h-[500px] bg-gradient-to-tl from-[#6A3DE8]/18 via-[#E8338C]/12 to-transparent rounded-full blur-3xl -z-10 animate-float-slow" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-[#FFB81C]/14 via-[#FF7A1A]/10 to-[#E8338C]/10 rounded-full blur-3xl -z-10 animate-float-reverse" 
        />

        {/* Floating Decorative Rings */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-12 w-40 h-40 rounded-full border border-[#1B1F4B]/10 animate-float-slow -z-10 hidden md:block" 
        />
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute bottom-12 left-12 w-28 h-28 rounded-full border border-[#1B1F4B]/10 animate-float -z-10 hidden md:block" 
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 text-xs font-semibold text-[#1B1F4B] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A] animate-pulse" />
            <span>Direct WhatsApp &amp; Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1F4B] font-display leading-[1.12]">
            Ready to build something that <span className="brand-gradient-text">works</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#4B5070] max-w-2xl mx-auto leading-relaxed">
            Tell us about your business goals. We’ll review your requirements and reply directly on WhatsApp with honest advice and a clear quote.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-lg shadow-[#25D366]/30 active:scale-95 hover:-translate-y-0.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (+91 77560 63128)</span>
            </a>
          </div>

          <p className="text-xs text-[#4B5070]/80 font-medium pt-1">
            ⚡ Quick response under 15 minutes · No sales pressure · Free consultation
          </p>
        </div>
      </section>

    </div>
  );
}
