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
  ExternalLink,
  ShieldCheck,
  Layers,
  Sparkles,
  XCircle,
  Code2
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
    title: `${cs.title} — Client Case Study & Verification | Deep Digital Labs`,
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
  const prevCase = CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];

  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/case-studies" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Case Studies</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#E8623C] font-semibold">{cs.client}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* ========================================================================= */}
        {/* 1. CASE STUDY HEADER                                                      */}
        {/* ========================================================================= */}
        <div className="space-y-6 pb-12 border-b border-neutral-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase font-bold bg-[#E8623C]/10 text-[#E8623C] border border-[#E8623C]/20">
                {cs.industry}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase font-semibold bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10">
                {cs.service} Architecture
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#E8623C]" />
                <span>{cs.location}</span>
              </div>
            </div>

            {cs.liveUrl && (
              <div>
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Visit Verified Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
              Client Case Study: {cs.client}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight max-w-4xl font-display">
              {cs.title}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            {cs.summary}
          </p>

          {/* Quick Technology Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold mr-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#E8623C]" /> Technology:
            </span>
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE TRANSFORMATION: BEFORE → AFTER                                     */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#0D0E12] border border-neutral-200 dark:border-white/10 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E8623C]" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8623C]">
              Operational Transformation
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12141B] border border-rose-200 dark:border-rose-950/60 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm font-mono uppercase tracking-wider">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>Before Deep Digital Labs</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {cs.beforeAfter.before}
              </p>
            </div>

            {/* After Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12141B] border border-emerald-200 dark:border-emerald-950/60 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>After Deep Digital Labs</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {cs.beforeAfter.after}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CORE CASE BREAKDOWN: PROBLEM → WHAT WE BUILT → RESULT                  */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Engineering Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mt-1 font-display">
              Problem, Execution &amp; Measurable Result
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Problem Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12141B] border border-neutral-200 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 font-mono font-bold text-xs">
                  01
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  The Client Problem
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {cs.problem}
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/5 text-[11px] font-mono text-rose-600 dark:text-rose-400 font-semibold">
                Operational friction identified
              </div>
            </div>

            {/* What We Built Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12141B] border border-[#E8623C]/30 dark:border-[#E8623C]/30 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C] font-mono font-bold text-xs">
                  02
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  What We Built
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {cs.whatWeBuilt}
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/5 text-[11px] font-mono text-[#E8623C] font-semibold">
                Tailored engineering solution
              </div>
            </div>

            {/* Result Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12141B] border border-emerald-500/30 dark:border-emerald-500/30 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                  03
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  The Result
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 font-medium leading-relaxed">
                  {cs.result}
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 dark:border-white/5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                Direct business impact
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. VERIFIED SCREENSHOTS & LIVE DEPLOYMENT                                 */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
                Production Artifact
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mt-1 font-display">
                Live Deployment &amp; Interface Preview
              </h2>
            </div>

            {cs.liveUrl && (
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8623C] hover:underline"
              >
                <span>Open {cs.client} live system</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-300 dark:border-white/10 shadow-2xl bg-neutral-900">
            {/* Browser chrome header */}
            <div className="px-5 py-3.5 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-[11px] text-neutral-300 hidden sm:inline">
                  {cs.liveUrl || 'https://deepdigitallabs.com'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Production Deployment</span>
              </div>
            </div>

            {/* Visual preview */}
            <div className="relative h-[380px] sm:h-[520px] bg-neutral-950">
              <div 
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${cs.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto bg-neutral-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-lg text-white shadow-xl">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="text-xs font-mono text-[#E8623C] font-bold uppercase tracking-wider">
                    {cs.category}
                  </div>
                  {cs.liveUrl && (
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white hover:text-[#E8623C] underline"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <div className="text-base font-bold text-white">{cs.client}</div>
                <div className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  Engineered, launched, and supported by Deep Digital Labs. 100% source code ownership.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. VERIFIABLE OUTCOME HIGHLIGHTS & ARCHITECTURE SPEC                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-neutral-200 dark:border-white/10">
          
          {/* Left: Verifiable Outcome Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
                Deliverable Verification
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight font-display">
                Key Technical Deliverables
              </h2>
            </div>

            <div className="space-y-3.5">
              {cs.evidenceHighlights.map((highlight, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#12141B] border border-neutral-200 dark:border-white/10 space-y-1 shadow-xs"
                >
                  <div className="text-xs font-mono font-bold text-[#E8623C] uppercase tracking-wider">
                    {highlight.label}
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Architecture Highlights & Testimonial */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                System Architecture
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight font-display">
                Engineering Highlights
              </h2>
            </div>

            <div className="space-y-3">
              {cs.architectureHighlights.map((arch, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-[#12141B] border border-neutral-200 dark:border-white/10 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="mt-8 p-7 rounded-3xl bg-neutral-900 text-white border border-neutral-800 relative shadow-xl">
              <Quote className="w-10 h-10 text-white/10 absolute top-6 right-6" />
              <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed relative z-10 mb-5">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <div className="text-xs border-t border-white/10 pt-4">
                <div className="font-bold text-white text-sm">{cs.testimonial.author}</div>
                <div className="text-neutral-400">{cs.testimonial.role}, {cs.testimonial.company}</div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 6. NAVIGATION TO PREVIOUS / NEXT CASE STUDY                               */}
        {/* ========================================================================= */}
        <div className="pt-12 border-t border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/case-studies/${prevCase.slug}`}
            className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-white/10 hover:border-[#E8623C] text-xs font-bold text-neutral-700 dark:text-neutral-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevCase.title}</span>
          </Link>

          <Link
            href="/case-studies"
            className="w-full sm:w-auto text-center text-xs font-bold text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            View All 10+ Portfolio Projects
          </Link>

          <Link
            href={`/case-studies/${nextCase.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-end gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-[#E8623C] text-white dark:bg-white dark:text-black dark:hover:bg-[#E8623C] dark:hover:text-white text-xs font-bold transition-colors"
          >
            <span>Next: {nextCase.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
