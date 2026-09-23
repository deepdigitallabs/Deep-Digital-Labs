import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Quote, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.slug === slug);
  if (!cs) return { title: 'Case Study Not Found' };

  return {
    title: `${cs.title} | Case Study | Deep Digital Labs`,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} | Deep Digital Labs`,
      description: cs.summary,
      images: [{ url: cs.heroImage }],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const cs = CASE_STUDIES[currentIndex];

  if (!cs) {
    notFound();
  }

  const nextCase = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <div className="pt-32 pb-24 bg-white text-slate-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400 font-mono">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Case Studies</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 dark:text-white font-semibold">{cs.client}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Case Study Header */}
        <div className="space-y-6 pb-12 border-b border-slate-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase font-bold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-white/5 dark:text-white dark:border-white/10">
                {cs.industry}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase font-bold bg-slate-100 text-slate-600 border border-slate-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10">
                {cs.service} Architecture
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{cs.location}</span>
              </div>
            </div>

            {cs.liveUrl && (
              <div>
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl">
            {cs.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {cs.summary}
          </p>
        </div>

        {/* Section: The Impact (Metrics if present) */}
        {cs.metrics && cs.metrics.length > 0 && (
          <div className="py-12 border-b border-slate-200 dark:border-white/10">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
                Deliverables
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                Technical Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cs.metrics.map((metric, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 space-y-2 shadow-xs">
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-gray-400 font-semibold">
                    {metric.label}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visual Mockup Card */}
        <div className="py-12 border-b border-slate-200 dark:border-white/10">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg h-[380px] sm:h-[480px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${cs.heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-md text-white shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-1">
                <div className="text-xs font-mono text-emerald-400 font-bold">Production Deployment</div>
                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-white hover:underline"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <div className="text-sm font-semibold text-white">{cs.client} Live System</div>
              <div className="text-xs text-slate-300 mt-1 leading-relaxed">Engineered, deployed, and maintained by Deep Digital Labs.</div>
            </div>
          </div>
        </div>

        {/* Narrative: The Challenge & The Solution */}
        <div className="py-16 border-b border-slate-200 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 1. The Challenge */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-gray-400 font-semibold uppercase">
              <span className="text-slate-900 dark:text-white font-bold">01 //</span> The Challenge
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              The Client Problem
            </h2>
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 shadow-xs">
              <p>{cs.challenge}</p>
            </div>
          </div>

          {/* 2. The Solution */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-gray-400 font-semibold uppercase">
              <span className="text-slate-900 dark:text-white font-bold">02 //</span> Technical Execution
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              The Engineering Solution
            </h2>
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 shadow-xs">
              <p>{cs.solution}</p>
            </div>
          </div>

        </div>

        {/* Architecture Highlights & Tech Stack */}
        <div className="py-16 border-b border-slate-200 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 font-bold">
                Architecture Specification
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Key Engineering Highlights
              </h2>
            </div>

            <div className="space-y-3">
              {cs.architectureHighlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 text-sm text-slate-700 dark:text-gray-300 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Testimonial */}
          <div className="lg:col-span-5 space-y-6">


            {/* Testimonial Quote */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 relative shadow-xs">
              <Quote className="w-8 h-8 text-slate-300 dark:text-white/10 absolute top-4 right-4" />
              <p className="text-sm text-slate-700 dark:text-gray-300 italic leading-relaxed relative z-10 mb-4">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <div className="text-xs">
                <div className="font-bold text-slate-900 dark:text-white">{cs.testimonial.author}</div>
                <div className="text-slate-500 dark:text-gray-400">{cs.testimonial.role}, {cs.testimonial.company}</div>
              </div>
            </div>

          </div>

        </div>

        {/* Navigation to Next Study */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <Link
            href={`/case-studies/${nextCase.slug}`}
            className="inline-flex items-center gap-3 p-4 px-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 dark:bg-[#0F0F11] dark:border-white/10 transition-all text-right group shadow-xs"
          >
            <div>
              <div className="text-[10px] uppercase font-mono text-slate-500 dark:text-gray-400">Next Case Study</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-slate-700 dark:text-white transition-colors">{nextCase.title}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-700 dark:text-white transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}
