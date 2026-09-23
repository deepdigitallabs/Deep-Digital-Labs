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
  Clock
} from 'lucide-react';
import { CORE_SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services | SaaS, Mobile & Growth Engineering | Deep Digital Labs',
  description: 'Explore our services: SaaS & Web Development, Mobile App Development, Digital Growth & SEO, and Cloud & Ongoing Support.',
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-neutral-900 dark:text-[#D4FF00]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-neutral-900 dark:text-[#D4FF00]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-neutral-900 dark:text-[#D4FF00]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-neutral-900 dark:text-[#D4FF00]" />,
  };

  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            What We Do
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A full-cycle product and growth partner. We build, scale, and optimize your digital presence without the textbook jargon.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {CORE_SERVICES.map((service, index) => (
            <div 
              key={service.slug}
              className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#D4FF00]/50 transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-2xl group"
            >
              <div className="space-y-6">
                {/* Header with Icon and Pillar Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:border-neutral-900 dark:group-hover:border-[#D4FF00] transition-all shadow-sm">
                    {iconMap[service.icon] || <Layers className="w-6 h-6 text-neutral-900 dark:text-[#D4FF00]" />}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-neutral-200 dark:bg-white/10 text-neutral-800 dark:text-[#D4FF00]">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Plain English Headline */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors">
                    {service.title}
                  </h2>
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
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#D4FF00] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-500 font-semibold block mb-2">
                    Tech Stack &amp; Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Link */}
              <div className="pt-8 mt-6 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors"
                >
                  <span>Explore Deliverables &amp; Pricing →</span>
                </Link>
                <span className="text-xs text-neutral-400 dark:text-gray-500 font-mono">
                  Weekly Sprints
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why 4 Pillars? The Strategic Advantage */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#D4FF00] font-semibold">
              The Agency Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
              Why Our Focused Approach Wins
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400 mt-2">
              Instead of overwhelming you with a confusing laundry list of 15+ IT services, we focus on what moves the needle for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Zero Confusion</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                Founders and executives understand exactly how we solve their problem in under 5 seconds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="text-2xl mb-3">🎯</div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Strategic Partnership</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                We don’t act like one-off freelancers doing cheap tasks. We are your dedicated digital co-pilots.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="text-2xl mb-3">🚀</div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Fast Time-to-Market</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                Production MVPs delivered in 4-8 weeks with complete intellectual property transfer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="text-2xl mb-3">🛡️</div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">Ongoing Reliability</h4>
              <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                Guaranteed 99.9% uptime, monthly updates, and dedicated engineering retainers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white space-y-6 text-center shadow-lg transition-colors duration-200">
          <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-emerald-400 px-3.5 py-1 rounded-full">
            Direct Developer Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto text-white">
            Have a project you want to build?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Talk directly with our developer team in Pune. Tell us what you need, and we’ll give you a clear timeline, fair pricing, and clean code.
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
