'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Briefcase,
  GraduationCap, 
  ShoppingBag, 
  Building, 
  HeartPulse, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  MessageSquare,
  X,
  Factory,
  Truck,
  Scale,
  Calculator,
  Layers,
  Code2,
  Workflow,
  Smartphone,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  Globe,
  SlidersHorizontal,
  Bot,
  RotateCcw
} from 'lucide-react';
import { 
  INDUSTRY_SOLUTIONS, 
  SOLUTION_TYPES, 
  INDUSTRY_CATEGORIES, 
  IndustrySolutionItem 
} from '@/data/industrySolutionsData';

export function IndustryServicesDirectory() {
  const [selectedSolution, setSelectedSolution] = useState<string>('All Solutions');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Industries');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isFiltered = selectedSolution !== 'All Solutions' || selectedCategory !== 'All Industries' || searchQuery.trim() !== '';

  const handleReset = () => {
    setSelectedSolution('All Solutions');
    setSelectedCategory('All Industries');
    setSearchQuery('');
  };

  const filteredSolutions = useMemo(() => {
    return INDUSTRY_SOLUTIONS.filter((item) => {
      // 1. Solution type filter
      const matchesSolution = 
        selectedSolution === 'All Solutions' || 
        item.solutionTypes.some((type) => type.toLowerCase() === selectedSolution.toLowerCase()) ||
        (selectedSolution === 'Business Software' && (item.solutionTypes.includes('CRM & ERP') || item.solutionTypes.includes('Internal Tools'))) ||
        (selectedSolution === 'AI & Automation' && item.solutionTypes.includes('AI & Automation'));

      if (!matchesSolution) return false;

      // 2. Industry category filter
      const matchesCategory = 
        selectedCategory === 'All Industries' || 
        item.industryCategory.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchesCategory) return false;

      // 3. Search query
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        item.solutionTitle.toLowerCase().includes(q) ||
        item.businessType.toLowerCase().includes(q) ||
        item.industryCategory.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.solutionTypes.some((st) => st.toLowerCase().includes(q)) ||
        item.keyCapabilities.some((cap) => cap.toLowerCase().includes(q))
      );
    });
  }, [selectedSolution, selectedCategory, searchQuery]);

  return (
    <section id="solutions-directory" className="pt-4 pb-20 relative">
      
      {/* =========================================================================
             UNIFIED FILTER & SEARCH CONTROL DECK
             ========================================================================= */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#10121A] border border-neutral-200 dark:border-[#242735] shadow-xl backdrop-blur-xl space-y-6">
        
        {/* Top Control Bar: Search Input & Status */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-white/[0.08]">
          <div className="relative flex-1 max-w-2xl">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search an industry, business type, solution or keyword (e.g. CA, Clinic, Real Estate, SaaS, CRM, Automation)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-xl text-sm bg-neutral-50 dark:bg-[#171B26] border border-neutral-200 dark:border-[#242735] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#174BFF] dark:focus:border-[#174BFF] shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200 dark:border-blue-900/60 font-bold">
              Showing {filteredSolutions.length} of {INDUSTRY_SOLUTIONS.length} Solutions
            </span>
            {isFiltered && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#E8623C] hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Row 1: What Can We Build? (Solution Architecture) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#174BFF] dark:text-[#60A5FA] flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>What Can We Build? (Solution Type)</span>
            </span>
            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono hidden sm:inline">
              Filter by product type
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
            {SOLUTION_TYPES.map((type) => {
              const isSelected = selectedSolution === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedSolution(type)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#174BFF] to-[#8B2CFF] text-white shadow-md shadow-[#174BFF]/25 font-bold scale-[1.02]'
                      : 'bg-neutral-50 dark:bg-[#171B26] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#242735] hover:border-[#174BFF]/50 hover:text-[#174BFF] dark:hover:text-white'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Row 2: Explore by Industry (Industry Domains) */}
        <div className="space-y-2.5 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B2CFF] dark:text-[#C084FC] flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Explore by Industry (Domain)</span>
            </span>
            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono hidden sm:inline">
              Filter by business sector
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {INDUSTRY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#174BFF] text-white font-semibold shadow-xs'
                      : 'bg-neutral-50 dark:bg-[#171B26] text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-[#242735] hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* =========================================================================
             CARDS GRID: 50+ INDUSTRY DIGITAL SOLUTIONS
             ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSolutions.map((item) => (
          <div
            key={item.slug}
            className="p-7 rounded-2xl bg-white dark:bg-[#10121A] border border-neutral-200 dark:border-[#242735] hover:border-[#174BFF]/50 dark:hover:border-[#174BFF]/60 hover:shadow-[0_12px_32px_rgba(23,75,255,0.12)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              
              {/* Top Meta: Industry Category & Business Type */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono font-bold text-[#174BFF] dark:text-[#60A5FA] px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50">
                  {item.industryCategory}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 truncate max-w-[150px]">
                  {item.businessType}
                </span>
              </div>

              {/* Solution Title & Short Description */}
              <div>
                <Link href={`/services/${item.slug}`} className="block group-hover:text-[#174BFF] transition-colors">
                  <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white leading-snug">
                    {item.solutionTitle}
                  </h3>
                </Link>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>

              {/* Solution Types (Product Architecture Tags) */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold block">
                  Solution Architecture
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.solutionTypes.map((type) => (
                    <span
                      key={type}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-[#171B26] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-[#242735] group-hover:border-[#174BFF]/30 transition-colors"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="space-y-2 pt-3 border-t border-neutral-100 dark:border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold block">
                  Key Capabilities
                </span>
                {item.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#174BFF] shrink-0 mt-0.5" />
                    <span className="leading-tight">{cap}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Actions: Explore Solution & WhatsApp */}
            <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-[#242735] flex items-center justify-between gap-3">
              <Link
                href={`/services/${item.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#174BFF] transition-colors"
              >
                <span>Explore Solution</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I'm%20interested%20in%20${encodeURIComponent(item.solutionTitle)}%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold transition-colors"
                title={`Chat with an engineer about ${item.solutionTitle}`}
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredSolutions.length === 0 && (
        <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-[#10121A] border border-neutral-200 dark:border-[#242735] max-w-xl mx-auto shadow-sm">
          <p className="text-base text-neutral-800 dark:text-neutral-200 font-semibold">
            No digital solution matched &quot;{searchQuery}&quot;.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            Need a custom digital system or hybrid architecture? We engineer bespoke platforms for any business scope.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-white hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20a%20custom%20software%20requirement%20I'd%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#174BFF] text-white hover:opacity-90 transition-opacity"
            >
              Consult an Engineer
            </a>
          </div>
        </div>
      )}

    </section>
  );
}
