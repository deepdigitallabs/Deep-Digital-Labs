'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Layers, 
  Smartphone, 
  TrendingUp, 
  Server, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare, 
  Sparkles, 
  Zap, 
  Clock, 
  Quote, 
  ChevronDown, 
  Star, 
  Calendar, 
  GitBranch,
  Copy,
  Check,
  Cpu,
  Database,
  Terminal,
  Activity,
  Maximize2,
  Lock,
  Workflow,
  Sliders,
  Eye,
  FileCode,
  Gauge
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { CASE_STUDIES } from '@/data/caseStudies';

// Kombai Laurel Leaf SVGs
function LaurelLeft() {
  return (
    <svg viewBox="-168.3 -94.3 90.6 166" className="h-6 w-auto shrink-0 text-[#E8623C] opacity-80" aria-hidden="true">
      <path d="M-80.9 58.78Q-107.95 40.84 -139.24 62.86Q-105.19 80.31 -80.9 58.78M-99.76 42.27Q-122 17.61 -158.61 31.47Q-129.31 57.42 -99.76 42.27M-113.92 21.58Q-129.06 -7.3 -167.26 -3.06Q-145.73 28.78 -113.92 21.58M-122.5 -1.97Q-129.38 -31.21 -164.44 -36.18Q-152.52 -2.84 -122.5 -1.97M-124.94 -26.92Q-124.39 -54.39 -154.32 -66.76Q-151.35 -34.51 -124.94 -26.92M-121.11 -51.69Q-114.43 -75.68 -137.92 -93.3Q-142.58 -64.31 -121.11 -51.69" fill="currentColor" />
      <path d="M-80.9 58.78A100 100 0 0 1 -121.11 -51.69" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg viewBox="-168.3 -94.3 90.6 166" className="h-6 w-auto shrink-0 text-[#E8623C] opacity-80 -scale-x-100" aria-hidden="true">
      <path d="M-80.9 58.78Q-107.95 40.84 -139.24 62.86Q-105.19 80.31 -80.9 58.78M-99.76 42.27Q-122 17.61 -158.61 31.47Q-129.31 57.42 -99.76 42.27M-113.92 21.58Q-129.06 -7.3 -167.26 -3.06Q-145.73 28.78 -113.92 21.58M-122.5 -1.97Q-129.38 -31.21 -164.44 -36.18Q-152.52 -2.84 -122.5 -1.97M-124.94 -26.92Q-124.39 -54.39 -154.32 -66.76Q-151.35 -34.51 -124.94 -26.92M-121.11 -51.69Q-114.43 -75.68 -137.92 -93.3Q-142.58 -64.31 -121.11 -51.69" fill="currentColor" />
      <path d="M-80.9 58.78A100 100 0 0 1 -121.11 -51.69" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [heroTab, setHeroTab] = useState<'design' | 'code' | 'context' | 'preview'>('design');
  const [codeCopied, setCodeCopied] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [caseFilter, setCaseFilter] = useState<'All' | 'SaaS' | 'Web' | 'Mobile'>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [accentTone, setAccentTone] = useState<'sunset' | 'emerald' | 'indigo'>('sunset');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`// Deep Digital Labs - Production Next.js 15 Server Action
export async function createEnterpriseWorkspace(data: WorkspaceInput) {
  'use server';
  const session = await auth();
  if (!session?.user) throw new UnauthorizedError();
  
  const workspace = await db.workspace.create({
    data: {
      name: data.name,
      slug: slugify(data.name),
      tier: 'SCALE_PRO',
      ownerId: session.user.id,
      telemetry: { edgeCache: true, latencyTargetMs: 45 }
    }
  });
  
  revalidateTag(\`workspace:\${workspace.slug}\`);
  return { success: true, workspace };
}`);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const filteredCaseStudies = caseFilter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.service === caseFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#E8623C] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* SECTION 1: KOMBAI-INSPIRED HERO WITH ATMOSPHERIC GLOW & CANVAS STUDIO     */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-6 max-w-7xl mx-auto text-center overflow-hidden">
        
        {/* Ambient Cosmic Radial Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#E8623C]/20 via-[#E8623C]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

        {/* Floating Top Proof Pill with Official Tagline */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white/70 dark:bg-[#12151D]/80 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8623C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8623C]"></span>
          </span>
          <span className="font-bold text-neutral-900 dark:text-white tracking-tight">Technology Builds Tomorrow</span>
          <span className="text-neutral-300 dark:text-neutral-600">•</span>
          <span>Pune Engineering Studio</span>
        </div>

        {/* Kombai Signature Headline: Strikethrough + Standout Accent */}
        <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12] max-w-4xl mx-auto font-display">
          Your AI-native engineering studio.
        </h1>

        <div className="mt-4 text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-300 font-medium max-w-3xl mx-auto leading-snug">
          Design + code <span className="relative inline-block text-neutral-400 dark:text-neutral-500 font-normal">
            slop
            <span className="absolute inset-x-[-0.05em] bg-[#E8623C] h-[2.5px] bottom-[48%] rounded-full"></span>
          </span>{' '}
          <span className="font-bold text-[#E8623C] underline decoration-[#E8623C]/40 decoration-wavy underline-offset-6">
            standout
          </span>{' '}
          websites and product UIs.
        </div>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          AI tools generate repetitive boilerplate. Legacy agencies deliver bloated codebases. We engineer bespoke, production-ready software systems with strict TypeScript, clean architecture, and sub-80ms response times.
        </p>

        {/* Kombai Dual-Tone CTA Group */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          
          {/* Kombai Signature Button */}
          <button
            onClick={() => setCallModalOpen(true)}
            className="group relative inline-flex items-center gap-3 bg-[#E8623C] hover:bg-[#F0744E] text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25 hover:shadow-xl hover:shadow-[#E8623C]/35 active:scale-98 cursor-pointer"
          >
            <span className="w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4 text-white" />
            </span>
            <span>Book a Technical Scoping Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Secondary WhatsApp CTA */}
          <a
            href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20software%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-neutral-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.06] font-semibold text-sm transition-all active:scale-98 text-center"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Direct WhatsApp Senior Dev Line</span>
          </a>

          {/* Tertiary Quick Jump */}
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium text-xs sm:text-sm transition-colors"
          >
            <span>View 7 Live Systems</span>
            <span className="text-xs bg-neutral-200 dark:bg-white/10 px-2 py-0.5 rounded-md font-mono">↓</span>
          </a>
        </div>

        {/* Kombai Proof Badge with Laurel Leaves */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <LaurelLeft />
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
            <span><strong className="text-neutral-900 dark:text-white">100+ Systems</strong> Shipped in Production</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span><strong className="text-[#E8623C]">99.98%</strong> Uptime SLA</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span>Zero Outsourcing</span>
          </div>
          <LaurelRight />
        </div>

        {/* Stack Badges under Hero */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06]">Next.js 15 App Router</span>
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06]">React 19 Server Components</span>
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06]">TypeScript Strict</span>
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06]">Claude 3.7 Agentic Pipelines</span>
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06]">AWS / Docker Serverless</span>
        </div>

        {/* ========================================================================= */}
        {/* KOMBAI INTERACTIVE STUDIO SHOWCASE WORKBENCH                               */}
        {/* ========================================================================= */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white dark:bg-[#0E1118]/95 border border-neutral-200 dark:border-white/[0.08] shadow-xl overflow-hidden text-left">
          
          {/* Top Window Chrome Bar */}
          <div className="px-4 py-3 bg-neutral-100/90 dark:bg-[#08090C]/90 border-b border-neutral-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="ml-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">deep-digital-labs / studio-canvas</span>
            </div>

            {/* Interactive Tab Switchers */}
            <div className="flex items-center p-1 rounded-xl bg-neutral-200/60 dark:bg-white/[0.04] border border-neutral-300/60 dark:border-white/[0.06]">
              <button
                onClick={() => setHeroTab('design')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  heroTab === 'design'
                    ? 'bg-[#E8623C] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>01 Design System</span>
              </button>
              <button
                onClick={() => setHeroTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  heroTab === 'code'
                    ? 'bg-[#E8623C] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>02 Production Code</span>
              </button>
              <button
                onClick={() => setHeroTab('context')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  heroTab === 'context'
                    ? 'bg-[#E8623C] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>03 Context Graph</span>
              </button>
              <button
                onClick={() => setHeroTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  heroTab === 'preview'
                    ? 'bg-[#E8623C] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>04 Live Preview</span>
              </button>
            </div>

            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Turbopack: 42ms · Clean Git</span>
            </div>

          </div>

          {/* Workbench Body */}
          <div className="p-6 text-neutral-800 dark:text-neutral-200">
            
            {/* TAB 1: DESIGN SYSTEM INSPECTOR */}
            {heroTab === 'design' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                      <span>Bespoke Design Token Engine</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8623C]/10 text-[#E8623C] border border-[#E8623C]/30">Active Config</span>
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      Curated typography hierarchy, WCAG contrast verification, and dynamic theme tokens.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Tone Palette:</span>
                    <button
                      onClick={() => setAccentTone('sunset')}
                      className={`w-6 h-6 rounded-full bg-[#E8623C] border-2 transition-transform ${accentTone === 'sunset' ? 'scale-110 border-neutral-900 dark:border-white' : 'border-transparent'}`}
                      title="Sunset Coral (Kombai)"
                    />
                    <button
                      onClick={() => setAccentTone('emerald')}
                      className={`w-6 h-6 rounded-full bg-[#10B981] border-2 transition-transform ${accentTone === 'emerald' ? 'scale-110 border-neutral-900 dark:border-white' : 'border-transparent'}`}
                      title="Electric Emerald"
                    />
                    <button
                      onClick={() => setAccentTone('indigo')}
                      className={`w-6 h-6 rounded-full bg-[#6366F1] border-2 transition-transform ${accentTone === 'indigo' ? 'scale-110 border-neutral-900 dark:border-white' : 'border-transparent'}`}
                      title="Deep Indigo"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Token Card 1: Typography Scale */}
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8623C] font-semibold">Typography Tokens</span>
                    <div className="space-y-2">
                      <div className="text-xl font-bold font-display text-neutral-900 dark:text-white">Space Grotesk 700</div>
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Plus Jakarta Sans 500</div>
                      <div className="text-xs font-mono text-neutral-500">JetBrains Mono Regular</div>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
                      <span>Letter Spacing</span>
                      <span className="text-emerald-600 dark:text-emerald-400">-0.035em tight</span>
                    </div>
                  </div>

                  {/* Token Card 2: Micro-Interactions & Radii */}
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8623C] font-semibold">Surface &amp; Elevation</span>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-600 dark:text-neutral-400">Card Radius:</span>
                        <span className="font-mono text-neutral-900 dark:text-white">16px (rounded-2xl)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-600 dark:text-neutral-400">Glass Blur:</span>
                        <span className="font-mono text-neutral-900 dark:text-white">backdrop-blur-xl</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-600 dark:text-neutral-400">Border Alpha:</span>
                        <span className="font-mono text-neutral-900 dark:text-white">rgba(0,0,0,0.06)</span>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
                      <span>Shadow Preset</span>
                      <span className="text-emerald-600 dark:text-emerald-400">kombai-deep-shadow</span>
                    </div>
                  </div>

                  {/* Token Card 3: Accessibility & Contrast */}
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8623C] font-semibold">WCAG Audit Checks</span>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-600 dark:text-neutral-300">Text Contrast:</span>
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">14.8:1 (AAA)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-600 dark:text-neutral-300">Accent Contrast:</span>
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">4.9:1 (AA+)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-600 dark:text-neutral-300">Focus Ring Outline:</span>
                        <span className="font-mono text-neutral-900 dark:text-white">3px offset</span>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
                      <span>Lighthouse UI</span>
                      <span className="text-emerald-600 dark:text-emerald-400">100/100 Accessibility</span>
                    </div>
                  </div>
                </div>

                {/* Live Component Demonstration Strip */}
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E8623C]/10 text-[#E8623C]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-white">Interactive Button Component Token</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Hover states with dynamic translate &amp; glow</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#E8623C] text-white shadow-md shadow-[#E8623C]/30 hover:bg-[#F0744E] transition-all">
                      Primary Brand Action
                    </button>
                    <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-200/80 hover:bg-neutral-300 text-neutral-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-neutral-300 dark:border-white/10 transition-all">
                      Subtle Ghost
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PRODUCTION CODE */}
            {heroTab === 'code' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="text-emerald-400">src/app/actions/workspace.ts</span>
                    <span>•</span>
                    <span>TypeScript Strict Mode</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-300 transition-colors cursor-pointer"
                  >
                    {codeCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{codeCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-[13px] font-mono text-neutral-300 overflow-x-auto leading-relaxed">
                  <code>{`// Deep Digital Labs - Production Next.js 15 Server Action
export async function createEnterpriseWorkspace(data: WorkspaceInput) {
  'use server';
  const session = await auth();
  if (!session?.user) throw new UnauthorizedError();
  
  const workspace = await db.workspace.create({
    data: {
      name: data.name,
      slug: slugify(data.name),
      tier: 'SCALE_PRO',
      ownerId: session.user.id,
      telemetry: { edgeCache: true, latencyTargetMs: 45 }
    }
  });
  
  revalidateTag(\`workspace:\${workspace.slug}\`);
  return { success: true, workspace };
}`}</code>
                </pre>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-1">
                  <span>Zero runtime overhead</span>
                  <span>Edge-ready · Zero cold start</span>
                </div>
              </div>
            )}

            {/* TAB 3: CONTEXT GRAPH ARCHITECTURE */}
            {heroTab === 'context' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                  Connected architecture graph: High-performance decoupled pipeline designed for sub-80ms global execution.
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#E8623C] font-semibold">LAYER 01</span>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white">Edge CDN</h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Cloudflare &amp; Vercel Anycast routing</p>
                    <span className="inline-block mt-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">18ms TTFB</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#E8623C] font-semibold">LAYER 02</span>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white">Next.js 15 App</h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">RSC streaming &amp; Server Actions</p>
                    <span className="inline-block mt-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">99.98% SLA</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#E8623C] font-semibold">LAYER 03</span>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white">AI Agent Mesh</h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Claude 3.7 &amp; Vector Embeddings</p>
                    <span className="inline-block mt-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">RAG Grounded</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#E8623C] font-semibold">LAYER 04</span>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white">PostgreSQL &amp; Redis</h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Partitioned tables &amp; sub-millisecond cache</p>
                    <span className="inline-block mt-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Automated Backup</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-center font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  🔒 End-to-end encrypted · ISO 27001 &amp; SOC2 ready architecture
                </div>
              </div>
            )}

            {/* TAB 4: LIVE INTERACTIVE APP PREVIEW */}
            {heroTab === 'preview' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#E8623C]" />
                      <span className="text-sm font-bold text-neutral-900 dark:text-white">Live Multi-Tenant Analytics Engine</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live Stream Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">MONTHLY GMV</span>
                      <div className="text-lg font-bold text-neutral-900 dark:text-white mt-1">₹48.2 Lakhs</div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">+24.8% vs last mo</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">API P99 LATENCY</span>
                      <div className="text-lg font-bold text-neutral-900 dark:text-white mt-1">42 ms</div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Global edge target</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">ACTIVE USERS</span>
                      <div className="text-lg font-bold text-neutral-900 dark:text-white mt-1">14,290</div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Zero dropped frames</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">UPTIME GUARANTEE</span>
                      <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-1">99.99%</div>
                      <span className="text-[10px] text-neutral-500 font-mono">AWS Mumbai DC</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION: CLIENT LOGO BAR (TRUSTED BY INNOVATIVE BRANDS)                   */}
      {/* ========================================================================= */}
      <section className="py-8 px-6 border-y border-neutral-200/80 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-white/[0.01]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold mb-6">
            Engineered For Innovative Companies Across India &amp; Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {[
              { name: 'Rahul B. Kavale & Co.', role: 'CA & Corporate Advisory' },
              { name: 'Yashodeep Agro', role: 'Agri-Tech Commerce' },
              { name: 'Dairy Flow Pro', role: 'In-House Dairy SaaS' },
              { name: 'Santosh Phadtare', role: 'Political Civic Tech' },
              { name: 'Trust Carry Logistics', role: 'Fleet & Supply Chain' },
              { name: 'Sangola Vikas Sankalp', role: 'Civic Development' },
              { name: 'Pasarnikar Payal Amit', role: 'Political Media & Branding' }
            ].map((client) => (
              <div
                key={client.name}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] flex flex-col items-center shadow-xs hover:border-[#E8623C]/50 transition-all select-none"
              >
                <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                  {client.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE THESIS ("Designed to stand out. Built to fit in.")          */}
      {/* ========================================================================= */}
      <section id="why-us" className="py-24 px-6 max-w-6xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            The Deep Digital Labs Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
            Designed to stand out. Built to fit in.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            AI generators repeat generic template choices across very different tasks, while missing the existing patterns in your codebase. We fix both.
          </p>
        </div>

        {/* Two Contrasting Bento Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Designs That Stand Out */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-xl space-y-5 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C]">
              <Sparkles className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">
              Designs that stand out
            </h3>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              We reject lazy AI slop and cookie-cutter themes. Every web interface and mobile screen is meticulously tailored with artistic taste, bespoke typography hierarchy, micro-interactions, and accessible contrast that commands authority.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E8623C]" />
                <span>Custom Type Hierarchy</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E8623C]" />
                <span>60fps Micro-Animations</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E8623C]" />
                <span>WCAG AAA Accessible</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E8623C]" />
                <span>Responsive Fluid Grid</span>
              </div>
            </div>
          </div>

          {/* Card 2: Code That Fits In */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-xl space-y-5 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C]">
              <Code2 className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">
              Code that fits in &amp; scales
            </h3>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              We consistently reuse existing design systems, database schemas, and conventions from your repo. We deliver production-grade TypeScript with strict type checking, zero vendor lock-in, and automated CI/CD deployment pipelines.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Code Ownership</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict TypeScript</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sub-80ms API Latency</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Automated Tests &amp; CI/CD</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: KOMBAI 4-STEP INTERACTIVE WALKTHROUGH (01, 02, 03, 04)         */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 bg-neutral-50/50 dark:bg-[#0E1015]/60 border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Step-by-Step Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
              How we take your product from concept to production.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 4 Numbered Steps */}
            <div className="lg:col-span-5 space-y-3">
              {[
                {
                  id: 0,
                  num: '01',
                  title: 'Better Engineering Decisions',
                  desc: 'High-quality architectural choices instead of AI defaults. We choose the optimal database models, caching strategies, and security primitives from day one.'
                },
                {
                  id: 1,
                  num: '02',
                  title: 'Explore and Iterate Faster',
                  desc: 'Test interactive canvas prototypes and flows before committing production code. Direct feedback over WhatsApp and Slack with Friday release cycles.'
                },
                {
                  id: 2,
                  num: '03',
                  title: 'Follow What’s Decided',
                  desc: 'Deep context graph integration. We inspect your existing repositories, design tokens, hooks, and database schemas and carry them into all new features.'
                },
                {
                  id: 3,
                  num: '04',
                  title: 'Built for Any Stack & AI Model',
                  desc: 'Native full-stack engineering with Next.js 15, Python FastAPI, Claude 3.7, OpenAI o3, Supabase, Flutter, and enterprise cloud infrastructure.'
                }
              ].map((step) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === step.id
                      ? 'bg-white dark:bg-[#12151D] border-[#E8623C] shadow-lg shadow-[#E8623C]/10 scale-[1.02]'
                      : 'bg-white/40 dark:bg-white/[0.02] border-neutral-200 dark:border-white/[0.06] hover:border-neutral-400 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-sm font-bold ${activeStep === step.id ? 'text-[#E8623C]' : 'text-neutral-400'}`}>
                      {step.num}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  {activeStep === step.id && (
                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                      {step.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Interactive Showcase Card */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-xl text-neutral-900 dark:text-white space-y-5">
                
                {/* Dynamic Step View 0 */}
                {activeStep === 0 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-xs font-mono text-[#E8623C] font-semibold">01 · ARCHITECTURE DECISION LEDGER</span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Status: Verified</span>
                    </div>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-700 dark:text-neutral-300">Rendering Mode</span>
                        <span className="text-[#E8623C] font-semibold">Next.js 15 Server Components (PPR)</span>
                      </div>
                      <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-700 dark:text-neutral-300">Data Caching</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Redis sub-5ms query cache</span>
                      </div>
                      <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-700 dark:text-neutral-300">Security Layer</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">CSRF + Rate Limiting + Row-Level Security</span>
                      </div>
                      <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-700 dark:text-neutral-300">Target P95 Latency</span>
                        <span className="text-[#E8623C] font-semibold">&lt; 80ms Global TTFB</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dynamic Step View 1 */}
                {activeStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-xs font-mono text-[#E8623C] font-semibold">02 · RAPID ITERATION SPRINT CANVAS</span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Weekly Cadence</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                        <div className="text-[10px] text-neutral-500">MONDAY</div>
                        <div className="font-bold text-neutral-900 dark:text-white">Sprint Planning &amp; Spec</div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Wireframes &amp; DB Schema locked</p>
                      </div>
                      <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                        <div className="text-[10px] text-neutral-500">WEDNESDAY</div>
                        <div className="font-bold text-neutral-900 dark:text-white">Interactive Staging Demo</div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Live URL for client testing</p>
                      </div>
                      <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                        <div className="text-[10px] text-neutral-500">FRIDAY</div>
                        <div className="font-bold text-emerald-600 dark:text-emerald-400">Production Code Release</div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Merged to main &amp; live deployment</p>
                      </div>
                      <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                        <div className="text-[10px] text-neutral-500">ALWAYS</div>
                        <div className="font-bold text-[#E8623C]">Direct WhatsApp Line</div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Zero ticket portals or delays</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dynamic Step View 2 */}
                {activeStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-xs font-mono text-[#E8623C] font-semibold">03 · REPO CONTEXT GRAPH SYNC</span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Zero Technical Debt</span>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                        <span>Reused Components:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">46 custom design tokens detected</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                        <span>Database Migrations:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Idempotent Prisma schema sync</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                        <span>Package Health:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">0 critical vulnerabilities (pnpm)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dynamic Step View 3 */}
                {activeStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                      <span className="text-xs font-mono text-[#E8623C] font-semibold">04 · MULTI-MODEL &amp; FULLSTACK ROUTER</span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">50+ Stack Capabilities</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 font-mono text-xs text-center">
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-white font-medium">Next.js 15</div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-white font-medium">Claude 3.7</div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-white font-medium">FastAPI</div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-white font-medium">Supabase</div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-white font-medium">Flutter</div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-white font-medium">AWS Lambda</div>
                    </div>
                  </div>
                )}

                {/* Quick Action inside Step Box */}
                <div className="pt-2 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">Ready to build your next breakthrough?</span>
                  <button
                    onClick={() => setCallModalOpen(true)}
                    className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Schedule Free Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>



      {/* ========================================================================= */}
      {/* SECTION 5: CURATED PRODUCTION CASE STUDIES (GALLERY VIEW)                 */}
      {/* ========================================================================= */}
      <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Proven Production Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Real systems. Real impact.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              Explore live systems engineered by Deep Digital Labs for CA firms, agro-commerce enterprises, civic platforms, and logistics fleets.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] self-start sm:self-auto">
            {(['All', 'Web', 'SaaS', 'Mobile'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setCaseFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  caseFilter === filter
                    ? 'bg-[#E8623C] text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All (7)' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.slug}
              className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Industry */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E8623C] font-bold">
                    {study.industry}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-400">
                    {study.service}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-snug">
                  {study.client}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {study.summary}
                </p>

                {/* Key Result Pill */}
                {study.keyResult && (
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.06] text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{study.keyResult}</span>
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {study.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] flex items-center gap-1"
                >
                  <span>Read Architecture Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors"
                    title="Visit Live Application"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CLIENT TESTIMONIALS BENTO                                      */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 bg-neutral-50/50 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              What Founders &amp; Leaders Say
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
              Loved by businesses who demand high performance.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Deep Digital Labs gave our firm an exceptional digital presence. The website loads instantly, looks world-class, and our inbound verified corporate clients grew by 35% in 90 days.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Rahul B. Kavale</div>
                  <div className="text-[11px] text-neutral-500 font-mono">Managing Partner, CA Firm</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Verified Client</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Moving our agricultural operations and inventory tracking to the web with Deep Digital Labs reduced billing cycle overheads from 3 days to real-time. No fluff, just working software every week.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Operations Director</div>
                  <div className="text-[11px] text-neutral-500 font-mono">Yashodeep Agro Tech</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Verified Client</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Our logistics clients now track their consignments online in real time rather than calling dispatch desks. The platform handled heavy traffic spikes without breaking a sweat.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Logistics Director</div>
                  <div className="text-[11px] text-neutral-500 font-mono">Trust Carry Logistics</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Verified Client</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: ENGAGEMENT MODELS (TRANSPARENT PRICING & SPRINT PODS)          */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Transparent Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
            Predictable sprints. Zero runaway costs.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Pick the engagement model that matches your product stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Model 1: MVP Sprint */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#E8623C] uppercase tracking-wider font-bold">Rapid Launch</span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">MVP Sprint</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                For startups &amp; founders validating product-market fit. We design and ship a production-ready MVP in 3 to 4 weeks.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Full UX Prototype &amp; Design</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Next.js 15 Full-Stack Repo</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Auth, DB &amp; Stripe/Razorpay</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 100% Code Ownership</li>
              </ul>
            </div>
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 hover:border-neutral-900 dark:hover:border-white text-xs font-bold text-neutral-900 dark:text-white transition-colors cursor-pointer"
            >
              Discuss MVP Sprint
            </button>
          </div>

          {/* Model 2: Dedicated Engineering Pod (Featured Kombai style) */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#151922] border-2 border-[#E8623C] shadow-xl shadow-[#E8623C]/15 flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#E8623C] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
              Most Popular
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#E8623C] uppercase tracking-wider font-bold">Continuous Shipping</span>
              <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white">Dedicated Pod</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                A dedicated senior engineering team working directly in your repository. Monthly retainer with guaranteed weekly Friday deploys.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-200 font-mono">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C]" /> Direct Senior Full-Stack Engineer</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C]" /> Direct WhatsApp &amp; Slack Access</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C]" /> Architecture, Backend &amp; Frontend</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C]" /> Priority Feature Backlog</li>
              </ul>
            </div>
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white text-xs font-bold transition-all shadow-md shadow-[#E8623C]/30 cursor-pointer"
            >
              Reserve Dedicated Pod
            </button>
          </div>

          {/* Model 3: Enterprise Architecture */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#E8623C] uppercase tracking-wider font-bold">Scale &amp; Modernize</span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">Enterprise Modernization</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                For established businesses scaling past bottlenecks. Cloud migration, database partitioning, and 99.98% uptime SLAs.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Monolith to Headless / Microservices</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Custom AI &amp; LLM Automation Agents</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Enterprise AWS / Cloudflare DevSecOps</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 24/7 SLA &amp; Incident Escalation</li>
              </ul>
            </div>
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 hover:border-neutral-900 dark:hover:border-white text-xs font-bold text-neutral-900 dark:text-white transition-colors cursor-pointer"
            >
              Discuss Enterprise Architecture
            </button>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: FAQ ACCORDION (KOMBAI STYLE)                                    */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Transparent Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
            Questions? We’ve got answers.
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'Do I own 100% of the code you write?',
              a: 'Yes, absolutely. All code, repository access, design assets, and database schemas are 100% your intellectual property from day one. We never use proprietary vendor-lock CMS software.'
            },
            {
              q: 'How does Deep Digital Labs produce standout software instead of generic templates?',
              a: 'Unlike agencies that reskin existing WordPress themes or copy paste ungrounded AI code, our engineers establish bespoke design token hierarchies, clean React 19/Next.js 15 components, and rigorous WCAG accessibility standards tailored specifically to your product.'
            },
            {
              q: 'How do you communicate during active sprints?',
              a: 'We eliminate slow ticketing queues and bureaucratic project managers. You get a direct WhatsApp and Slack channel connected directly with the senior engineer building your product, with deployed preview links delivered every Friday.'
            },
            {
              q: 'Can you work with our existing codebase or repo?',
              a: 'Yes. We inspect your existing repositories, design tokens, backend endpoints, and conventions to ensure all new features fit natively into your stack without breaking changes.'
            },
            {
              q: 'Where is your engineering team based?',
              a: 'Our engineering studio is headquartered in Pune, Maharashtra, India. We engineer software for companies across Mumbai, Pune, Delhi NCR, Bangalore, and international clients in North America and Europe.'
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] transition-all cursor-pointer"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                  {faq.q}
                </h3>
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180 text-[#E8623C]' : ''}`} />
              </div>
              {openFaq === idx && (
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-white/[0.04] pt-3 animate-in fade-in duration-150">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: KOMBAI SIGNATURE BOTTOM HIGH-IMPACT CTA BANNER                 */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden text-center">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#E8623C]/25 to-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 dark:bg-[#0E1118] border border-neutral-800 dark:border-white/[0.08] text-white shadow-2xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Technology Builds Tomorrow
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-display max-w-2xl mx-auto leading-tight">
            Design and code standout software today.
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Build high-performance web platforms, custom ERPs, and mobile apps that scale with your ambitions. Talk directly with senior engineers.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/30 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book a Technical Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20software%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-neutral-700 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 text-xs font-mono text-neutral-500">
            Pune, Maharashtra, India · direct senior developer access · 100% code ownership
          </div>
        </div>

      </section>

      {/* Discovery Call Modal */}
      {callModalOpen && (
        <DiscoveryCallModal
          isOpen={callModalOpen}
          onClose={() => setCallModalOpen(false)}
        />
      )}

    </div>
  );
}
