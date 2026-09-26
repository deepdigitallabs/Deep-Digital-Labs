'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Database, 
  Activity, 
  Calendar,
  Layers,
  Star,
  CheckCircle2
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

interface DeepDigitalHeroProps {
  onOpenDiscovery?: () => void;
}

export function DeepDigitalHero({ onOpenDiscovery }: DeepDigitalHeroProps) {
  const [activeTab, setActiveTab] = useState<'saas' | 'civic' | 'code'>('saas');
  const [discoveryModalOpen, setDiscoveryModalOpen] = useState(false);

  const handleOpenDiscovery = () => {
    if (onOpenDiscovery) {
      onOpenDiscovery();
    } else {
      setDiscoveryModalOpen(true);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A0A0B] text-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-[#00FFA3]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle glowing grid background */}
      <div className="absolute inset-0 grid-background opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: HEADLINES, SUBHEADLINE & CTAS */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416] border border-[#27272A] text-xs font-semibold text-[#00FFA3] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00FFA3]" />
              <span>SaaS | Web | Mobile App Development</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.12]">
              We Engineer Scalable <span className="gradient-text-accent">SaaS &amp; Digital Products</span> for Global Brands.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed font-normal">
              From complex multi-tenant SaaS platforms to high-stakes civic tech portals. We turn ambitious product visions into high-performance, market-ready digital realities.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-bold text-sm text-[#0A0A0B] bg-[#00FFA3] hover:bg-[#00D48A] transition-all shadow-lg shadow-[#00FFA3]/20 hover:shadow-[#00FFA3]/35 active:scale-[0.98]"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary Button */}
              <button
                onClick={handleOpenDiscovery}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-slate-200 bg-[#141416] hover:bg-[#1c1c20] border border-[#27272A] hover:border-[#00FFA3]/60 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#00FFA3]" />
                <span>Book a Strategy Call →</span>
              </button>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#A1A1AA] border-t border-[#27272A]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#00FFA3]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00FFA3] text-[#00FFA3]" />
                  ))}
                </div>
                <span className="font-semibold text-white">7+ Live Products Deployed • 100% Verified Track Record</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                <span>Engineered in Pune • Deployed Globally</span>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3D TECH MOCKUP / SAAS DASHBOARD & CODE TERMINAL */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00FFA3]/20 to-cyan-500/10 blur-xl opacity-75" />

            {/* Main Interactive Terminal / Dashboard Container */}
            <div className="relative rounded-xl bg-[#141416] border border-[#27272A] shadow-2xl overflow-hidden">
              
              {/* Window Header with macOS dots and interactive tabs */}
              <div className="px-4 py-3 bg-[#0D0D0F] border-b border-[#27272A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-[#A1A1AA]">deep-digital-labs.engine</span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1 bg-[#141416] p-0.5 rounded-lg border border-[#27272A] text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab('saas')}
                    className={`px-2 py-1 rounded transition-colors ${activeTab === 'saas' ? 'bg-[#00FFA3] text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    SaaS ERP
                  </button>
                  <button
                    onClick={() => setActiveTab('civic')}
                    className={`px-2 py-1 rounded transition-colors ${activeTab === 'civic' ? 'bg-[#00FFA3] text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Civic Tech
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2 py-1 rounded transition-colors ${activeTab === 'code' ? 'bg-[#00FFA3] text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    &lt;Code /&gt;
                  </button>
                </div>
              </div>

              {/* Tab 1: SaaS ERP Dashboard (Dairy Flow Pro Real Architecture) */}
              {activeTab === 'saas' && (
                <div className="p-5 space-y-4 font-sans animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#00FFA3] font-semibold">
                        In-House SaaS Product • Live Production
                      </div>
                      <div className="text-base font-bold text-white">Dairy Flow Pro Multi-Tenant System</div>
                    </div>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Stream
                    </span>
                  </div>

                  {/* Telemetry Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#0D0D0F] border border-[#27272A]">
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Activity className="w-3 h-3 text-[#00FFA3]" /> Throughput
                      </div>
                      <div className="text-xl font-bold font-mono text-white mt-1">2,840 req/s</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Sub-second SSR</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0D0D0F] border border-[#27272A]">
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Database className="w-3 h-3 text-[#00FFA3]" /> Billing Ledger
                      </div>
                      <div className="text-xl font-bold font-mono text-[#00FFA3] mt-1">-90% Errors</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">Automated Calc</div>
                    </div>
                  </div>

                  {/* Live Transaction Preview */}
                  <div className="p-3 rounded-lg bg-[#0D0D0F] border border-[#27272A] font-mono text-xs space-y-1.5">
                    <div className="flex justify-between text-[11px] text-slate-400 pb-1 border-b border-[#27272A]">
                      <span>TENANT: dairy_pune_cluster</span>
                      <span className="text-[#00FFA3]">STATUS: 200 OK</span>
                    </div>
                    <div className="text-[11px] text-slate-300">
                      POST /api/v2/collection/dispatch &rarr; <span className="text-[#00FFA3]">14ms latency</span>
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Row-Level Isolation &bull; PostgreSQL &bull; Prisma &bull; Edge Edge CDN
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Civic Tech Portal (Sangola & Santosh Phadtare) */}
              {activeTab === 'civic' && (
                <div className="p-5 space-y-4 font-sans animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#00FFA3] font-semibold">
                        Civic Tech &amp; Campaign Infrastructure
                      </div>
                      <div className="text-base font-bold text-white">Sangola Vikas &amp; Santosh Phadtare</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#27272A] text-slate-300">
                      Edge SSG
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#0D0D0F] border border-[#27272A]">
                      <div className="text-[10px] font-mono text-slate-400">Peak Uptime</div>
                      <div className="text-xl font-bold font-mono text-[#00FFA3] mt-1">100.0%</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">Zero crash spikes</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0D0D0F] border border-[#27272A]">
                      <div className="text-[10px] font-mono text-slate-400">Volunteers</div>
                      <div className="text-xl font-bold font-mono text-white mt-1">1,000+</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Digitized mobile</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0D0D0F] border border-[#27272A] text-xs font-mono text-slate-300 space-y-1">
                    <div className="text-[11px] text-[#00FFA3]">&gt; Vercel Edge Cache: HIT (98.4% edge hit-rate)</div>
                    <div className="text-[10px] text-slate-400">&gt; Sub-1.5s load times for rural 3G mobile networks</div>
                  </div>
                </div>
              )}

              {/* Tab 3: Code Architecture */}
              {activeTab === 'code' && (
                <div className="p-5 bg-[#0D0D0F] font-mono text-xs space-y-2 text-slate-300 animate-in fade-in duration-200">
                  <div className="text-slate-500">// Deep Digital Labs Product Blueprint</div>
                  <div>
                    <span className="text-purple-400">export const</span> <span className="text-yellow-300">ProductArchitecture</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">clientTier</span>: <span className="text-emerald-300">&apos;Next.js 16 App Router&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">scalability</span>: <span className="text-emerald-300">&apos;Global Edge CDN + RLS Isolation&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">mobileEngine</span>: <span className="text-emerald-300">&apos;Flutter / React Native 60fps&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">location</span>: <span className="text-emerald-300">&apos;Pune &rarr; Global&apos;</span>,
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-[11px] text-[#00FFA3]">
                    $ git push origin main &bull; deployed successfully &check;
                  </div>
                </div>
              )}

              {/* Footer status bar */}
              <div className="px-4 py-2 bg-[#0A0A0B] border-t border-[#27272A] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00FFA3]" /> SOC-2 / Enterprise Ready
                </span>
                <span className="text-[#00FFA3]">&lt;ScalableArchitecture /&gt;</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Discovery Modal */}
      {discoveryModalOpen && (
        <DiscoveryCallModal
          isOpen={discoveryModalOpen}
          onClose={() => setDiscoveryModalOpen(false)}
        />
      )}
    </section>
  );
}
