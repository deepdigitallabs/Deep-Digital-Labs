'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  GraduationCap, 
  ShoppingBag, 
  Building, 
  HeartPulse, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  Search,
  ExternalLink
} from 'lucide-react';
import { INDUSTRY_CATEGORIES, getIndustryServicesByCategory } from '@/data/industryServices';

export function HeroIndustryShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('business-corporate');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-4 h-4" />,
    GraduationCap: <GraduationCap className="w-4 h-4" />,
    ShoppingBag: <ShoppingBag className="w-4 h-4" />,
    Building: <Building className="w-4 h-4" />,
    HeartPulse: <HeartPulse className="w-4 h-4" />,
    Cpu: <Cpu className="w-4 h-4" />,
  };

  const currentCategory = INDUSTRY_CATEGORIES.find((cat) => cat.id === selectedCategory) || INDUSTRY_CATEGORIES[0];
  const allServicesInCat = getIndustryServicesByCategory(selectedCategory);

  const displayedServices = searchQuery.trim()
    ? allServicesInCat.filter((s) => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allServicesInCat;

  return (
    <section className="relative mt-12 mb-6 max-w-7xl mx-auto px-4 sm:px-6 w-full text-left">
      {/* Background ambient container glow */}
      <div className="relative rounded-3xl bg-neutral-900/[0.03] dark:bg-white/[0.02] border border-neutral-200/90 dark:border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-xl overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#E8623C]/10 via-[#7C3AED]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#00D2FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200/80 dark:border-white/[0.08]">
          <div className="space-y-2.5 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              What kind of website does your business need?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Explore 50+ specialized website development architectures built with sub-second speeds, industry-specific features, and zero builder lock-in.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Quick Filter Search */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search websites (e.g. CA, Salon)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#E8623C] transition-colors"
              />
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#E8623C] hover:bg-[#F0744E] text-white shadow-md shadow-[#E8623C]/20 transition-all active:scale-98"
            >
              <span>All 50+ Niches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="relative z-10 pt-6 pb-6 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {INDUSTRY_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchQuery('');
                }}
                className={`group shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md scale-[1.02]'
                    : 'bg-white/80 dark:bg-[#12151D]/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/[0.06] hover:bg-neutral-100 dark:hover:bg-white/[0.05]'
                }`}
              >
                <span className={`p-1 rounded-lg ${isSelected ? 'text-[#E8623C]' : 'text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white'}`}>
                  {categoryIcons[category.iconName]}
                </span>
                <span>{category.shortTitle}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isSelected 
                    ? 'bg-white/20 text-white dark:bg-black/15 dark:text-neutral-900' 
                    : 'bg-neutral-100 dark:bg-white/10 text-neutral-500'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Header Banner */}
        <div className="relative z-10 mb-6 p-4 rounded-2xl bg-neutral-100/70 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[#E8623C] uppercase tracking-wider block">
              {currentCategory.title}
            </span>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
              {currentCategory.description}
            </p>
          </div>
          <span className="text-[11px] font-mono font-semibold text-neutral-500 dark:text-neutral-400 shrink-0">
            Showing {displayedServices.length} dedicated {displayedServices.length === 1 ? 'solution' : 'solutions'}
          </span>
        </div>

        {/* Dynamic Services Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayedServices.map((service) => (
            <div
              key={service.slug}
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/90 dark:border-white/[0.07] hover:border-[#E8623C]/60 dark:hover:border-[#E8623C]/60 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="space-y-3.5">
                {/* Card Top: Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#E8623C] font-semibold px-2.5 py-0.5 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20">
                    {service.categoryName}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <Link href={`/services/${service.slug}`} className="block group-hover:text-[#E8623C] transition-colors">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Architectural Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-white/[0.05]">
                  {service.keyBenefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-600 dark:text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {service.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-neutral-400">
                      +{service.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Dedicated Page Link & WhatsApp */}
              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between gap-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] dark:group-hover:text-[#E8623C] transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors"
                  title={`Chat about ${service.title}`}
                  aria-label={`Chat about ${service.title}`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {displayedServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              No matching websites found for &quot;{searchQuery}&quot; in this category.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#E8623C] font-semibold hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}

        {/* Bottom Banner with Travels Direct WhatsApp Highlight */}
        <div className="relative z-10 mt-8 pt-6 border-t border-neutral-200/80 dark:border-white/[0.08] space-y-3">
          {/* Highlight feature for Tours & Travels Direct WhatsApp Queries */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-[#E8623C]/10 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                <MessageSquare className="w-4 h-4" />
              </span>
              <div className="text-neutral-800 dark:text-neutral-200">
                <strong className="text-neutral-900 dark:text-white">Featured: Tours, Travels &amp; Cab Agency Website</strong> — Clients send package inquiries directly to your WhatsApp with pre-filled travel dates, passenger counts, vehicle choices &amp; hotel tiers.
              </div>
            </div>
            <Link
              href="/services/tours-and-travels-website-development"
              className="text-[#E8623C] font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>View Travels Demo &amp; Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All 50+ specialized websites come with 100% source code ownership and direct Pune engineering support.</span>
            </div>
            <Link
              href="/services"
              className="font-bold text-neutral-900 dark:text-white hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore Full Catalog on Services Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
