import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ArrowRight, MessageSquare, ShieldCheck, Zap, Code2 } from 'lucide-react';
import { IndustryServicesDirectory } from '@/components/services/IndustryServicesDirectory';

export const metadata: Metadata = {
  title: 'Industry Website Solutions | 50+ Specialized Web Development Niches | Deep Digital Labs',
  description: 'Explore 50+ specialized website development architectures built specifically for your industry — from CA firms and real estate to e-commerce, healthcare, and tour & travels. 100% source code ownership and direct Pune engineering support.',
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#E8623C] selection:text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <Link href="/services" className="hover:text-[#E8623C] inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Core Services</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-900 dark:text-white font-semibold">50+ Industry Solutions</span>
        </div>

        {/* Hero Section */}
        <div className="relative mb-14 text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E8623C]/10 via-[#7C3AED]/10 to-blue-500/10 border border-[#E8623C]/20 text-[#E8623C] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Industry Architecture • 50 Specialized Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15] font-display">
            Websites Engineered for Your <span className="text-gradient-spectrum">Exact Industry</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Generic website builders fail because each business sector has distinct customer journeys, compliance norms, and conversion triggers. Explore our 50 specialized website architectures built with sub-second speeds, direct WhatsApp inquiry engines, and 100% code ownership.
          </p>

          {/* Value Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Source Code Ownership</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Sub-Second Mobile Speeds</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <MessageSquare className="w-4 h-4 text-[#E8623C]" />
              <span>Direct WhatsApp Lead Triggers</span>
            </div>
          </div>
        </div>

        {/* Full Interactive 50-Item Directory with Search and Category Filters */}
        <IndustryServicesDirectory />

        {/* Need Custom Architecture CTA Bar */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-[#12151D] to-black text-white border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Custom Enterprise Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Don&apos;t see your specific business model listed?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We architect custom multi-branch platforms, SaaS engines, custom booking systems, and APIs. We will scope your custom digital platform within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#E8623C] to-[#F59E0B] hover:opacity-95 text-white shadow-lg shadow-[#E8623C]/25 transition-all"
            >
              <span>Discuss Custom Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>View Core Services</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
