import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  MessageSquare,
  Zap,
  Headphones,
  Target,
  Sparkles
} from 'lucide-react';

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'About Deep Digital Labs | Websites, Business Software & Automation',
  description: 'Deep Digital Labs is a Pune-based digital development studio helping businesses build modern websites, custom software and automation.',
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#4B5070] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        {/* Soft Blurred Gradient Orbs */}
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
            <span>Pune Digital Development Studio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1F4B] tracking-tight leading-tight font-display">
            About Deep <span className="brand-gradient-text">Digital</span> Labs
          </h1>

          {/* Tagline divider */}
          <div className="tagline-divider max-w-sm mx-auto text-xs font-medium tracking-wider">
            Build • Grow • Digital
          </div>

          <p className="text-base sm:text-xl text-[#4B5070] leading-relaxed max-w-3xl mx-auto">
            We are a Pune-based team building modern websites, custom business software, mobile apps, and smart automation. Clean code, direct developer access, and 100% source code ownership.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary"
            >
              <span>Work With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-all shadow-md shadow-[#25D366]/20 flex items-center gap-2 active:scale-98 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Origin & Track Record Section (Alternate #F7F5FF) */}
      <section className="py-20 bg-[#F7F5FF] border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] tracking-tight font-display">
              Modern Digital Development for <span className="brand-gradient-text">Growing</span> Businesses
            </h2>
            <div className="text-[#4B5070] space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Deep Digital Labs was created to replace slow, expensive traditional IT agencies. We help Pune and Indian business owners get high-quality web applications, mobile apps, and business tools without months of delays or recurring builder taxes.
              </p>
              <p>
                Based in Pune, Maharashtra, we build fast websites, cross-platform Android/iOS apps, and operational software that simplifies daily work. Every project comes with 100% source code ownership, GST-compliant invoicing, and direct WhatsApp support with our local team.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/80 space-y-6 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/60">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#1B1F4B] font-bold">
                Our Track Record
              </h3>
              <span className="text-xs font-mono text-[#E8338C] font-semibold">Real Numbers</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F7F5FF] border border-neutral-200/60">
                <div className="text-[#1B1F4B] font-mono text-3xl font-extrabold mb-1">10+</div>
                <div className="font-semibold text-[#1B1F4B] text-sm">Projects Delivered</div>
                <div className="text-xs text-[#4B5070] mt-1">Websites, ERPs &amp; apps</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#F7F5FF] border border-neutral-200/60">
                <div className="text-[#1B1F4B] font-mono text-3xl font-extrabold mb-1">&lt; 1s</div>
                <div className="font-semibold text-[#1B1F4B] text-sm">Mobile Speed</div>
                <div className="text-xs text-[#4B5070] mt-1">Fast on 4G in India</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#F7F5FF] border border-neutral-200/60">
                <div className="text-[#1B1F4B] font-mono text-3xl font-extrabold mb-1">99.9%</div>
                <div className="font-semibold text-[#1B1F4B] text-sm">Uptime</div>
                <div className="text-xs text-[#4B5070] mt-1">Always online for customers</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#F7F5FF] border border-neutral-200/60">
                <div className="text-[#1B1F4B] font-mono text-3xl font-extrabold mb-1">100%</div>
                <div className="font-semibold text-[#1B1F4B] text-sm">Ownership</div>
                <div className="text-xs text-[#4B5070] mt-1">You own your code &amp; site</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work (White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A1A] font-semibold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] tracking-tight font-display">
              How We Work With <span className="brand-gradient-text">You</span>
            </h2>
            <p className="text-sm sm:text-base text-[#4B5070]">
              Simple, transparent principles so your project moves smoothly from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Principle 1 */}
            <div className="card-brand p-8 space-y-4">
              <div className="icon-gradient-circle">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1B1F4B] font-display">
                Focused on Business Results
              </h3>
              <p className="text-sm text-[#4B5070] leading-relaxed">
                We focus on bringing you real customer inquiries and smooth operations. If a feature will not help your business succeed, we will honestly advise you to skip it.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="card-brand p-8 space-y-4">
              <div className="icon-gradient-circle">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1B1F4B] font-display">
                Clean, Fast Code
              </h3>
              <p className="text-sm text-[#4B5070] leading-relaxed">
                We write clean, lightweight code without heavy plugins or fragile templates. Your website opens quickly, stays secure, and will not break randomly.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="card-brand p-8 space-y-4">
              <div className="icon-gradient-circle">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1B1F4B] font-display">
                Direct WhatsApp Updates
              </h3>
              <p className="text-sm text-[#4B5070] leading-relaxed">
                No tickets, no wait times, and no middleman confusion. You chat directly with our lead software developers on WhatsApp with clear demos as we build.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Work With Us (Alternate #F7F5FF Section) */}
      <section id="why-work-with-us" className="py-20 bg-[#F7F5FF] border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] tracking-tight font-display">
              Why Businesses <span className="brand-gradient-text">Partner</span> With Us
            </h2>
            <p className="text-[#4B5070] text-sm sm:text-base leading-relaxed">
              We remove the delays, surprises, and recurring builder costs of traditional agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Direct developer communication */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Direct Developer Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                You talk directly to the engineers writing your code on WhatsApp. No account managers or endless support tickets.
              </p>
            </div>

            {/* 2. Clear pricing */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Pay in Stages as We Build
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                Pay in milestone stages as each part is completed and verified. No surprise hourly overages or hidden builder subscription taxes.
              </p>
            </div>

            {/* 3. Fast delivery */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Fast Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                Your website or software is designed, built, and launched in 2 to 3 weeks — not months of corporate delays.
              </p>
            </div>

            {/* 4. Ownership of code */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                100% Code &amp; Data Ownership
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                You own your complete GitHub repository, databases, domain, and cloud hosting accounts with full freedom.
              </p>
            </div>

            {/* 5. Post-launch support */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Post-Launch Support
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                We stay in your corner after launch. Friendly support, updates, and quick adjustments directly on WhatsApp.
              </p>
            </div>

            {/* 6. Business-focused solutions */}
            <div className="card-brand p-7 space-y-3">
              <div className="icon-gradient-circle">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
                Business-Focused Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                Every feature has one clear goal: bringing you more client calls, saving time on daily tasks, and building customer trust.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final Call to Action Section (Soft Lavender #F7F5FF With Animated Brand Mesh) */}
      <section className="py-24 sm:py-32 bg-[#F7F5FF] text-[#4B5070] relative overflow-hidden bg-[radial-gradient(rgba(27,31,75,0.08)_1.2px,transparent_1.2px)] [background-size:24px_24px] border-t border-neutral-200/70">
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
            Have a project you want to <span className="brand-gradient-text">build</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#4B5070] max-w-2xl mx-auto leading-relaxed">
            Talk directly with our developer team in Pune. We’ll understand what you need, give you a clear timeline and fair quote, and start building.
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
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project."
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
