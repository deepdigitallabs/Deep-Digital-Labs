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
import { SERVICES, getServiceBySlug, ALIAS_SLUGS } from '@/data/services';
import { CASE_STUDIES } from '@/data/caseStudies';
import { TechBadge } from '@/components/ui/TechBadge';

import { WebsiteCategoriesGrid } from '@/components/services/WebsiteCategoriesGrid';
import { BusinessSoftwareModulesGrid } from '@/components/services/BusinessSoftwareModulesGrid';
import { AiAutomationCategoriesGrid } from '@/components/services/AiAutomationCategoriesGrid';
import { MobileAppCategoriesGrid } from '@/components/services/MobileAppCategoriesGrid';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const directSlugs = SERVICES.map((service) => ({ slug: service.slug }));
  const aliasSlugs = Object.keys(ALIAS_SLUGS).map((alias) => ({ slug: alias }));
  return [...directSlugs, ...aliasSlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
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

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Find related case studies
  const relatedCases = CASE_STUDIES.filter(
    (cs) => cs.service.toLowerCase().includes(service.slug.split('-')[0]) || cs.featured
  ).slice(0, 2);

  return (
    <div className="pt-28 pb-0 bg-white text-[#4B5070] min-h-screen">
      
      {/* ========================================================================= */}
      {/* HERO: SERVICE DETAIL                                                      */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F5FF] via-[#F7F5FF]/60 to-white pt-10 pb-16 border-b border-neutral-200/60 bg-grid-dots">
        {/* Soft Background Mesh Blurs */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF7A1A]/15 via-[#E8338C]/15 to-[#6A3DE8]/15 rounded-full blur-3xl -z-10 animate-mesh-pulse" 
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs text-[#4B5070] font-medium">
              <Link href="/" className="hover:text-[#E8338C] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
              <Link href="/#services" className="hover:text-[#E8338C] transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
              <span className="text-[#1B1F4B] font-semibold">{service.title}</span>
            </div>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1F4B] tracking-tight leading-[1.15] font-display">
              {service.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#4B5070] leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-md shadow-[#25D366]/25 active:scale-95"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/case-studies"
                className="btn-secondary"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPABILITIES / SPECIALIZED DIRECTORY                                      */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.slug === 'websites-web-apps' || service.slug === 'web-development' ? (
            <WebsiteCategoriesGrid />
          ) : service.slug === 'business-software-saas' || service.slug === 'custom-software' ? (
            <BusinessSoftwareModulesGrid />
          ) : service.slug === 'chat-bot-development' || service.slug === 'ai-workflow-automation' ? (
            <AiAutomationCategoriesGrid />
          ) : service.slug === 'mobile-app-development' ? (
            <MobileAppCategoriesGrid />
          ) : (
            <>
              <div className="mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
                  Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] tracking-tight mt-1 font-display">
                  What We Build &amp; Deliver
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#E8338C]/40 transition-colors space-y-3 shadow-xs card-brand"
                  >
                    <h3 className="text-xl font-bold text-[#1B1F4B] tracking-tight font-display">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[#4B5070] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROCESS TIMELINE & MILESTONES                                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F7F5FF] border-b border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1F4B] tracking-tight mt-1 font-display">
              Engineering Process &amp; Milestones
            </h2>
            <p className="text-[#4B5070] text-sm mt-2 max-w-2xl leading-relaxed">
              Transparent Git commits, scheduled sprint reviews, and direct WhatsApp communication with our developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.processTimeline.map((step) => (
              <div 
                key={step.step}
                className="p-6 rounded-3xl bg-white border border-neutral-200/80 flex flex-col justify-between space-y-4 shadow-xs card-brand"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#E8338C] font-bold">{step.step}</span>
                    <span className="flex items-center gap-1 text-[#4B5070]">
                      <Clock className="w-3 h-3 text-[#FF7A1A]" /> {step.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#1B1F4B] mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#4B5070] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DELIVERABLES & PRODUCTION STACK                                           */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
                  Handover Guarantee
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1F4B] tracking-tight font-display">
                  What You Receive Upon Handover
                </h2>
              </div>

              <div className="space-y-3 pt-2">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F7F5FF] border border-neutral-200/70 text-sm text-[#1B1F4B] font-medium shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6A3DE8] font-semibold">
                  Tooling &amp; Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1F4B] tracking-tight font-display">
                  Production Stack
                </h2>
              </div>

              <div className="p-7 rounded-3xl bg-[#F7F5FF] border border-neutral-200/70 space-y-6 shadow-2xs">
                <p className="text-xs text-[#4B5070] leading-relaxed">
                  Strictly modern industry standards chosen for speed, security, and low maintenance.
                </p>

                {service.techSpecializations && service.techSpecializations.length > 0 ? (
                  <div className="space-y-5">
                    {service.techSpecializations.map((spec) => (
                      <div key={spec.category} className="space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#1B1F4B] block">
                          {spec.category}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {spec.skills.map((skill) => (
                            <TechBadge 
                              key={skill}
                              name={skill}
                              size="sm"
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2.5">
                    {service.techStack.map((tech) => (
                      <TechBadge 
                        key={tech}
                        name={tech}
                        size="sm"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3 font-semibold shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>100% Source Code &amp; GitHub Repository ownership transferred immediately upon launch.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* RELATED CASE STUDIES                                                      */}
      {/* ========================================================================= */}
      {relatedCases.length > 0 && (
        <section className="py-20 bg-[#F7F5FF] border-b border-neutral-200/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
                  Proven Track Record
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1F4B] tracking-tight mt-1 font-display">
                  Related Case Studies
                </h2>
              </div>
              <Link href="/case-studies" className="text-xs font-bold text-[#E8338C] hover:underline flex items-center gap-1">
                All Case Studies <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCases.map((cs) => (
                <Link 
                  key={cs.slug} 
                  href={`/case-studies/${cs.slug}`}
                  className="group p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#6A3DE8]/40 transition-all block shadow-xs hover:shadow-xl card-brand"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold uppercase px-3 py-1 rounded-full bg-[#E8338C]/10 text-[#E8338C] border border-[#E8338C]/20">
                      {cs.industry}
                    </span>
                    <span className="text-xs text-[#4B5070]">
                      {cs.client}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors font-display">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] mt-2 line-clamp-2 leading-relaxed">
                    {cs.summary}
                  </p>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-[#4B5070] font-medium">{cs.industry}</span>
                    <span className="text-[#E8338C] font-bold group-hover:translate-x-1 transition-all flex items-center gap-1">
                      Read Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS                                                */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1F4B] tracking-tight mt-1 font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#F7F5FF] border border-neutral-200/70 space-y-2 shadow-2xs">
                <div className="font-bold text-base text-[#1B1F4B] flex items-center gap-2.5 font-display">
                  <HelpCircle className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                  <span>{faq.question}</span>
                </div>
                <p className="text-sm text-[#4B5070] leading-relaxed pl-6.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BOTTOM CTA: WHITE SECTION WITH ANIMATED BRAND GRADIENT MESH               */}
      {/* ========================================================================= */}
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

        {/* Floating Decorative Rings (CSS Animated) */}
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
            <Sparkles className="w-4 h-4 text-[#FF7A1A] animate-pulse" />
            <span>Let&apos;s Build Together</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1F4B] font-display leading-[1.12]">
            Ready to build your{' '}
            <span className="brand-gradient-text">
              {service.title}
            </span>?
          </h2>

          <p className="text-base sm:text-lg text-[#4B5070] max-w-2xl mx-auto leading-relaxed">
            Talk directly with our developer team in Pune. We’ll understand your business, give you an honest recommendation and a fair fixed quote within 24 hours.
          </p>

          {/* 3 Value Guarantees */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#1B1F4B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Fixed-price quote</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Direct WhatsApp updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>100% code ownership</span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20my%20website%20project."
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
