'use client';

import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Database, 
  Zap, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers,
  Terminal as TerminalIcon
} from 'lucide-react';

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'architecture' | 'code'>('telemetry');
  const [latency, setLatency] = useState(38);
  const [reqCount, setReqCount] = useState(482910);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => 36 + Math.floor(Math.random() * 6));
      setReqCount(prev => prev + Math.floor(Math.random() * 25));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

      {/* Main Glassmorphic Terminal Card */}
      <div className="relative bg-[#0b1222]/90 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080d19] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <span className="text-cyan-400">deep-digital-labs</span>
              <span className="text-slate-600">/</span>
              <span>saas-core-v3.2</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            PRODUCTION • 99.995%
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center border-b border-slate-800/80 bg-[#070b16]/60 px-4 py-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'telemetry' 
                ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/60' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            Live Telemetry
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`ml-2 px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'architecture' 
                ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/60' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Topology
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`ml-2 px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'code' 
                ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/60' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            RSC Stream
          </button>
        </div>

        {/* Tab 1: Live Telemetry Dashboard */}
        {activeTab === 'telemetry' && (
          <div className="p-5 space-y-4">
            
            {/* Top Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#0e172d]/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-cyan-400" /> Global Edge Latency
                </div>
                <div className="text-xl font-bold font-mono text-cyan-300 mt-1">
                  {latency}ms
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">
                  -64% vs legacy
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0e172d]/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Server className="w-3 h-3 text-indigo-400" /> Active Requests
                </div>
                <div className="text-xl font-bold font-mono text-indigo-300 mt-1">
                  {reqCount.toLocaleString()}
                </div>
                <div className="text-[10px] text-cyan-400 mt-0.5">
                  Across 18 regions
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0e172d]/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Multi-Tenant RLS
                </div>
                <div className="text-xl font-bold font-mono text-emerald-300 mt-1">
                  100%
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">
                  Zero data leak
                </div>
              </div>
            </div>

            {/* Visual Stream Graph */}
            <div className="p-4 rounded-xl bg-[#070d1a] border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 font-mono">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  Cluster Throughput (US-East & EU-Central)
                </span>
                <span className="text-[11px] font-mono text-cyan-400">14.2k ops/sec</span>
              </div>
              
              {/* Animated visual bars */}
              <div className="h-16 flex items-end gap-1.5 pt-2">
                {[45, 62, 58, 80, 72, 90, 85, 94, 78, 88, 92, 98, 84, 91, 89, 96, 99].map((height, i) => (
                  <div key={i} className="flex-1 bg-slate-800 rounded-t-sm overflow-hidden h-full flex items-end">
                    <div 
                      className="w-full bg-gradient-to-t from-cyan-600 to-cyan-300 transition-all duration-500 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Live event logs */}
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-400 p-2 rounded-lg bg-[#070b16]/60 border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">Stripe Webhook: invoice.paid</span>
                  <span className="text-slate-500">$2,450.00 (Enterprise Tier)</span>
                </div>
                <span className="text-emerald-400">0.032s</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 p-2 rounded-lg bg-[#070b16]/60 border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-slate-300">Next.js 15 PPR Stream</span>
                  <span className="text-slate-500">Cache hit @ edge: bom1</span>
                </div>
                <span className="text-cyan-400">14ms</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Architecture Topology */}
        {activeTab === 'architecture' && (
          <div className="p-5 space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[#070d1a] border border-slate-800 text-slate-300 space-y-2">
              <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Production Multi-Tenant Mesh
              </div>
              <div className="text-slate-400 text-[11px] leading-relaxed">
                Edge routing via Vercel Edge Functions → Golang / Next.js Server Components → High-concurrency Postgres with Row-Level Security.
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-500">Tenancy Isolation:</span>
                  <div className="text-white font-semibold">Row-Level Security (RLS)</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-500">Cache Strategy:</span>
                  <div className="text-white font-semibold">Redis Cluster + Edge</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 px-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SOC-2 Type II audit ready baseline configuration</span>
            </div>
          </div>
        )}

        {/* Tab 3: Code Stream */}
        {activeTab === 'code' && (
          <div className="p-5 font-mono text-[11px] leading-relaxed bg-[#070d18] overflow-x-auto text-slate-300">
            <div className="text-slate-500">// Next.js 15 Server Component with Instant RLS Tenant Scoping</div>
            <div><span className="text-indigo-400">export async function</span> <span className="text-cyan-300">renderTenantLedger</span>(tenantId: <span className="text-emerald-300">string</span>) &#123;</div>
            <div className="pl-4">
              <span className="text-indigo-400">const</span> ledger = <span className="text-indigo-400">await</span> db.transaction(<span className="text-indigo-400">async</span> (tx) =&gt; &#123;
            </div>
            <div className="pl-8 text-emerald-400">
              <span className="text-slate-400">await tx.execute(sql`SET LOCAL app.current_tenant = $&#123;tenantId&#125;`);</span>
            </div>
            <div className="pl-8">
              <span className="text-indigo-400">return</span> tx.select().from(subscriptions).limit(<span className="text-amber-300">50</span>);
            </div>
            <div className="pl-4">&#125;);</div>
            <div className="pl-4">
              <span className="text-indigo-400">return</span> &lt;<span className="text-cyan-400">TenantLedgerView</span> data=&#123;ledger&#125; /&gt;;
            </div>
            <div>&#125;</div>
          </div>
        )}

        {/* Footer Bar */}
        <div className="px-4 py-2.5 bg-[#080d19] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>HQ: Pune, India • US/EU Cloud Zones</span>
          </div>
          <span className="font-mono text-slate-500">Deep Digital Labs v2026.1</span>
        </div>

      </div>
    </div>
  );
}
