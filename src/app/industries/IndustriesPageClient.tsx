'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Code2, 
  MessageSquare,
  Layers,
  ArrowDown,
  Cpu,
  Workflow,
  Globe,
  Database,
  Smartphone,
  ShoppingBag,
  Puzzle,
  ChevronRight
} from 'lucide-react';
import { IndustryServicesDirectory } from '@/components/services/IndustryServicesDirectory';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

export function IndustriesPageClient() {
  const [callModalOpen, setCallModalOpen] = useState(false);

  const scrollToSolutions = () => {
    const el = document.getElementById('solutions-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutionCategories = [
    { name: 'Websites', desc: 'Fast, authoritative digital storefronts & portals', icon: Globe },
    { name: 'SaaS Platforms', desc: 'Multi-tenant apps with auth, billing & dashboards', icon: Cpu },
    { name: 'Business Software', desc: 'Bespoke ERP, internal workflows & databases', icon: Database },
    { name: 'Mobile Apps', desc: 'Cross-platform iOS & Android mobile applications', icon: Smartphone },
    { name: 'AI & Agents', desc: 'Custom LLM reasoning, document RAG & smart bots', icon: Sparkles },
    { name: 'Automation', desc: 'Deterministic workflow pipelines & CRM syncing', icon: Workflow },
    { name: 'E-commerce', desc: 'High-speed D2C stores & B2B distributor catalogs', icon: ShoppingBag },
    { name: 'Integrations', desc: 'Secure payment, WhatsApp & enterprise API bridges', icon: Puzzle },
  ];

  const workflowSteps = [
    { num: '01', title: 'Business Need', desc: 'Analyze bottlenecks & goals' },
    { num: '02', title: 'Discovery', desc: 'Scope audit & architecture map' },
    { num: '03', title: 'Product Strategy', desc: 'Tech stack & milestone roadmap' },
    { num: '04', title: 'Design', desc: 'User experience & high-fidelity UI' },
    { num: '05', title: 'Development', desc: 'Clean, type-safe engineering' },
    { num: '06', title: 'Integration', desc: 'APIs, payments & databases' },
    { num: '07', title: 'Launch', desc: 'Production deployment & CDN edge' },
    { num: '08', title: 'Growth', desc: 'Telemetry, scaling & iteration' },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#174BFF] selection:text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
               HERO SECTION
               ========================================================================= */}
        <section className="relative mb-16 pt-4 text-center max-w-4xl mx-auto space-y-6">
          

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.12] font-display">
            Digital Solutions Built for Your <span className="text-gradient-spectrum">Industry</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight font-display">
            Your business isn&apos;t a template. Your technology shouldn&apos;t be either.
          </p>

          {/* Body */}
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Every industry has different customers, workflows, operational challenges and growth opportunities. We build the right digital product around them — from high-performance websites and SaaS platforms to custom business software, mobile apps, AI automation and integrated business systems.
          </p>

          {/* Secondary Description */}
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore 50+ industry-specific solution possibilities designed around real business workflows, performance, scalability and long-term growth.
          </p>

          {/* Hero CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToSolutions}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#174BFF] to-[#8B2CFF] hover:from-[#133EC9] hover:to-[#7322D9] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#174BFF]/25 hover:shadow-[#174BFF]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCallModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-[#10121A] hover:bg-neutral-50 dark:hover:bg-[#171B26] text-neutral-900 dark:text-white border border-neutral-300 dark:border-[#242735] font-bold text-sm tracking-wide shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-[#174BFF]" />
            </button>
          </div>

          {/* Trust Points */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Source Code Ownership</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Performance-Optimized</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <Code2 className="w-4 h-4 text-[#174BFF]" />
              <span>Custom-Built Solutions</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
               INDUSTRY SERVICES DIRECTORY COMPONENT (FILTERING + 50+ CARDS)
               ========================================================================= */}
        <IndustryServicesDirectory />

        {/* =========================================================================
               SOLUTION MAP SECTION: "FROM IDEA TO DIGITAL PRODUCT"
               ========================================================================= */}
        <section className="mt-20 pt-16 border-t border-neutral-200 dark:border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#174BFF] dark:text-[#60A5FA] font-bold">
              LIFECYCLE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              From Idea to Digital Product
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Whatever your business needs to improve, we can design and build the technology around it.
            </p>
          </div>

          {/* Visual Step Sequence Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-14">
            {workflowSteps.map((step, idx) => (
              <div 
                key={step.num}
                className="p-4 rounded-xl bg-white dark:bg-[#10121A] border border-neutral-200 dark:border-[#242735] flex flex-col justify-between relative group hover:border-[#174BFF]/60 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#174BFF] dark:text-[#60A5FA]">
                    {step.num}
                  </span>
                  <h4 className="text-sm font-bold font-display text-neutral-900 dark:text-white mt-1 leading-snug">
                    {step.title}
                  </h4>
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-2 leading-tight">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {solutionCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={cat.name}
                  className="p-5 rounded-2xl bg-white dark:bg-[#10121A] border border-neutral-200 dark:border-[#242735] hover:border-[#174BFF]/50 hover:shadow-md transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#174BFF] dark:text-[#60A5FA] flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-display text-neutral-900 dark:text-white">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
               CUSTOM SOLUTION CTA: "DON'T SEE EXACTLY WHAT YOU NEED?"
               ========================================================================= */}
        <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#10121A] via-[#12151D] to-[#0A0C10] text-white border border-[#242735] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#174BFF]/10 via-[#8B2CFF]/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-bold">
              BESPOKE ENGINEERING
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              Don&apos;t see exactly what you need?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              Your business may need something that doesn&apos;t fit into a predefined category. Tell us what you&apos;re trying to build and we&apos;ll design the right digital solution around it.
            </p>
            
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setCallModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#174BFF] to-[#8B2CFF] hover:from-[#133EC9] hover:to-[#7322D9] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#174BFF]/25 transition-all cursor-pointer"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20a%20custom%20software%20idea%20and%20want%20to%20discuss%20it."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-xs sm:text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
               BOTTOM CTA: "HAVE A BUSINESS PROBLEM TO SOLVE?"
               ========================================================================= */}
        <section className="mt-20 py-16 px-6 sm:px-10 rounded-3xl bg-neutral-900 dark:bg-[#0C0E14] border border-neutral-800 dark:border-white/[0.08] text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#174BFF]/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6A00] font-bold">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Have a business problem to solve?<br />
              <span className="bg-gradient-to-r from-[#174BFF] via-[#8B2CFF] to-[#FF6A00] bg-clip-text text-transparent">
                Let&apos;s build the right digital solution for it.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              From a simple business website to a complete SaaS platform, internal business system or AI-powered workflow, Deep Digital Labs can help turn your idea into a working digital product.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setCallModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#174BFF] to-[#8B2CFF] text-white font-bold text-sm tracking-wider uppercase shadow-[0_10px_24px_rgba(23,75,255,0.3)] hover:shadow-[0_12px_32px_rgba(23,75,255,0.4)] transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm tracking-wider uppercase transition-all"
              >
                <span>View Our Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>
        </section>

      </div>

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
