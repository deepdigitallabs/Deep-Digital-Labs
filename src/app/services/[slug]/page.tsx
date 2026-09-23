import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '@/data/services';
import { CASE_STUDIES } from '@/data/caseStudies';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.metaTitle} | Deep Digital Labs`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | Deep Digital Labs`,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related case studies
  const relatedCases = CASE_STUDIES.filter(
    (cs) => cs.service.toLowerCase().includes(service.slug.split('-')[0]) || cs.featured
  ).slice(0, 2);

  return (
    <div className="pt-32 pb-24 bg-white text-slate-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      
      {/* Breadcrumb Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400 font-mono">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 dark:text-white font-semibold">{service.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-slate-200 dark:border-white/10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {service.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {service.fullDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-all shadow-md active:scale-95"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-slate-700 dark:text-gray-200 bg-white dark:bg-[#0F0F11] border border-slate-300 dark:border-white/10 hover:bg-slate-50 dark:hover:border-white/30 transition-all shadow-xs"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>

        {/* Section: Architectural Capabilities */}
        <div className="py-16 border-b border-slate-200 dark:border-white/10">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              What We Build &amp; Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 dark:bg-[#0F0F11] dark:border-white/10 transition-colors space-y-3 shadow-xs"
              >
                <div className="text-xs font-mono text-slate-500 dark:text-gray-400 font-bold">
                  MOD-0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Process Timeline */}
        <div className="py-16 border-b border-slate-200 dark:border-white/10">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Engineering Process &amp; Milestones
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm mt-2 max-w-2xl">
              Transparent Git commits, scheduled sprint reviews, and direct WhatsApp communication with our developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.processTimeline.map((step) => (
              <div 
                key={step.step}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-gray-400 mb-2">
                    <span className="text-slate-900 dark:text-white font-bold">{step.step}</span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" /> {step.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Deliverables & Tech Stack */}
        <div className="py-16 border-b border-slate-200 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
                  Handover Guarantee
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  What You Receive Upon Handover
                </h2>
              </div>

              <div className="space-y-3 pt-2">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 text-sm text-slate-700 dark:text-gray-300 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
                  Tooling &amp; Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Production Stack
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 space-y-4 shadow-xs">
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Strictly modern industry standards chosen for maximum uptime, developer velocity, and maintainability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white border border-slate-200 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-300 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/40 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-3 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>100% Source Code &amp; GitHub Repository ownership transferred immediately on Day 1.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section: Related Case Studies */}
        {relatedCases.length > 0 && (
          <div className="py-16 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
                  Proven Track Record
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                  Related Case Studies
                </h2>
              </div>
              <Link href="/case-studies" className="text-xs font-semibold text-slate-900 dark:text-white hover:underline flex items-center gap-1">
                All Case Studies <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCases.map((cs) => (
                <Link 
                  key={cs.slug} 
                  href={`/case-studies/${cs.slug}`}
                  className="group p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-400 dark:bg-[#0F0F11] dark:border-white/10 transition-all block shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800 border border-slate-300 dark:bg-white/10 dark:text-white font-bold">
                      {cs.industry}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400">
                      {cs.client}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 dark:text-white dark:group-hover:text-gray-200 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {cs.summary}
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 dark:text-gray-400 font-medium">{cs.industry}</span>
                    <span className="text-slate-900 dark:text-white font-semibold group-hover:translate-x-1 transition-all flex items-center gap-1">
                      Read Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Section: Frequently Asked Questions */}
        <div className="py-16">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 space-y-2 shadow-xs">
                <div className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-slate-700 dark:text-gray-300 shrink-0" />
                  <span>{faq.question}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed pl-6.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 p-8 sm:p-14 rounded-3xl bg-slate-900 text-white space-y-6 text-center shadow-lg">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to build your {service.title}?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Talk directly with our developer team in Pune. We’ll understand your requirements and give you a clear timeline and fair pricing.
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
