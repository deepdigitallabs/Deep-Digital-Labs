'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Building2, 
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
  ChevronRight,
  Filter,
  X
} from 'lucide-react';
import { INDUSTRY_CATEGORIES, INDUSTRY_SERVICES } from '@/data/industryServices';

export function IndustryServicesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-4 h-4" />,
    GraduationCap: <GraduationCap className="w-4 h-4" />,
    ShoppingBag: <ShoppingBag className="w-4 h-4" />,
    Building: <Building className="w-4 h-4" />,
    HeartPulse: <HeartPulse className="w-4 h-4" />,
    Cpu: <Cpu className="w-4 h-4" />,
  };

  const filteredServices = useMemo(() => {
    return INDUSTRY_SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        service.title.toLowerCase().includes(q) ||
        service.headline.toLowerCase().includes(q) ||
        service.shortDescription.toLowerCase().includes(q) ||
        service.categoryName.toLowerCase().includes(q) ||
        service.techStack.some((tech) => tech.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="industry-catalog" className="pt-12 pb-24 border-t border-neutral-200 dark:border-white/10">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20 text-[#E8623C] text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Industry Catalog • {INDUSTRY_SERVICES.length} Dedicated Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          Specialized Website Development By Industry
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Every industry has unique workflows, customer expectations, and technical needs. Choose your industry below to view dedicated features, timelines, and deliverables.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="mb-10 space-y-6">
        
        {/* Search Bar & Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by industry, business type, or keyword (e.g., CA, Clinic, School, Fashion)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-full text-sm bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#E8623C] dark:focus:border-[#E8623C] transition-colors"
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

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-gray-400">
            <span>
              Showing <strong className="text-neutral-900 dark:text-white">{filteredServices.length}</strong> of {INDUSTRY_SERVICES.length} Specialized Niches
            </span>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#E8623C] font-semibold hover:underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 max-w-5xl mx-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md'
                : 'bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10'
            }`}
          >
            All Sectors ({INDUSTRY_SERVICES.length})
          </button>

          {INDUSTRY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md'
                    : 'bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent'
                }`}
              >
                <span className={isSelected ? 'text-[#E8623C]' : 'text-neutral-400'}>
                  {categoryIcons[cat.iconName]}
                </span>
                <span>{cat.shortTitle}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  isSelected 
                    ? 'bg-white/20 text-white dark:bg-black/10 dark:text-neutral-900' 
                    : 'bg-neutral-200/70 dark:bg-white/10 text-neutral-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.slug}
            className="p-7 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#E8623C]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl group"
          >
            <div className="space-y-4">
              
              {/* Top Tag */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#E8623C] dark:text-[#E8623C] px-2.5 py-0.5 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20">
                  {service.categoryName}
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <Link href={`/services/${service.slug}`} className="block group-hover:text-black dark:group-hover:text-[#E8623C] transition-colors">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-snug">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mt-2">
                  {service.headline}
                </p>
                <p className="text-xs text-neutral-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Key Deliverables Bullet Points */}
              <div className="space-y-2 pt-3 border-t border-neutral-200/80 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-500 font-semibold block">
                  Industry-Specific Features
                </span>
                {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#D4FF00] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-black/40 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between gap-3">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#E8623C] transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold transition-colors"
                title={`Chat with an engineer about ${service.title}`}
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-16 p-8 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 max-w-xl mx-auto">
          <p className="text-base text-neutral-700 dark:text-gray-300 font-semibold">
            No specialized website service matched &quot;{searchQuery}&quot;.
          </p>
          <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1">
            Need a custom digital system or hybrid architecture? We engineer bespoke platforms for any business scope.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-xs font-semibold border border-neutral-300 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Request Custom Architecture
            </Link>
          </div>
        </div>
      )}

      {/* Advisory Banner */}
      <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white dark:from-[#11141D] dark:to-[#0B0D12] border border-neutral-800 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono font-bold text-[#E8623C] uppercase tracking-wider">
            Direct Developer Access • Pune &amp; Global
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Don&apos;t see your exact business model listed?
          </h3>
          <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
            We build custom web applications, APIs, multi-branch ERP systems, and workflow engines. Tell us your requirements and we&apos;ll scope a custom solution within 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-[#E8623C] hover:bg-[#F0744E] text-white shadow-lg shadow-[#E8623C]/30 transition-all active:scale-95"
          >
            <span>Discuss Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20a%20custom%20website%20requirement%20I'd%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm border border-white/20 text-white hover:bg-white/10 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </section>
  );
}
