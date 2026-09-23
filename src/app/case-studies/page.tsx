'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Search, 
  Filter, 
  Sparkles,
  ExternalLink,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const industries = ['All', 'Agri-Tech', 'Political Tech', 'Corporate', 'Logistics'];
  const services = ['All', 'SaaS', 'Web'];

  const filteredCases = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      const matchIndustry = selectedIndustry === 'All' || cs.industry.toLowerCase().includes(selectedIndustry.toLowerCase());
      const matchService = selectedService === 'All' || cs.service.toLowerCase().includes(selectedService.toLowerCase());
      const matchSearch = 
        searchQuery.trim() === '' ||
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cs.category && cs.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        cs.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchIndustry && matchService && matchSearch;
    });
  }, [selectedIndustry, selectedService, searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">

          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            Client Case Studies &amp; <br />
            <span className="text-neutral-900 dark:text-[#D4FF00] underline decoration-neutral-300 dark:decoration-transparent">Shipped Products</span>
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Real products engineered for real businesses. Explore our portfolio of high-concurrency portals, SaaS platforms, and enterprise web solutions with verified live URLs.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 mb-12 space-y-6 shadow-sm dark:shadow-2xl">
          
          {/* Top: Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-neutral-400 dark:text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product name, client, or technology (e.g. Next.js, Dairy Flow, Firebase, Sangola)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-black/50 border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500 focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] transition-all shadow-sm"
            />
          </div>

          {/* Bottom: Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pt-2 border-t border-neutral-200 dark:border-white/5">
            
            {/* Industry Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-500 dark:text-gray-500 mr-1 flex items-center gap-1.5 font-semibold">
                <Filter className="w-3.5 h-3.5 text-neutral-700 dark:text-[#D4FF00]" /> Industry:
              </span>
              {industries.map((ind) => {
                const active = selectedIndustry === ind;
                return (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                      active
                        ? 'bg-neutral-900 text-white dark:bg-[#D4FF00] dark:text-black font-bold shadow-md'
                        : 'bg-white dark:bg-white/5 text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10'
                    }`}
                  >
                    {ind}
                  </button>
                );
              })}
            </div>

            {/* Service Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-500 dark:text-gray-500 mr-1 font-semibold">
                Architecture:
              </span>
              {services.map((srv) => {
                const active = selectedService === srv;
                return (
                  <button
                    key={srv}
                    onClick={() => setSelectedService(srv)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                      active
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold shadow-md'
                        : 'bg-white dark:bg-white/5 text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10'
                    }`}
                  >
                    {srv}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-gray-400 font-mono mb-8 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#D4FF00]" />
            <span>Displaying {filteredCases.length} of {CASE_STUDIES.length} Projects</span>
          </div>
          {(selectedIndustry !== 'All' || selectedService !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedIndustry('All');
                setSelectedService('All');
                setSearchQuery('');
              }}
              className="text-neutral-900 dark:text-[#D4FF00] hover:underline font-semibold"
            >
              Reset All Filters ✕
            </button>
          )}
        </div>

        {/* Case Studies Bento Grid */}
        {filteredCases.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 space-y-4">
            <p className="text-lg text-neutral-800 dark:text-gray-300 font-semibold">No case studies found matching &quot;{searchQuery}&quot;</p>
            <p className="text-sm text-neutral-500 dark:text-gray-500 max-w-md mx-auto">Try broadening your search term or resetting the industry filters.</p>
            <button
              onClick={() => {
                setSelectedIndustry('All');
                setSelectedService('All');
                setSearchQuery('');
              }}
              className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-[#D4FF00] dark:text-black font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((cs) => (
              <div
                key={cs.slug}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#D4FF00]/60 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Visual Header with Image & Live Badges */}
                  <div className="h-44 relative overflow-hidden bg-neutral-100 dark:bg-black">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-90 dark:opacity-60"
                      style={{ backgroundImage: `url(${cs.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/10 dark:from-[#0F0F11] dark:via-[#0F0F11]/50 dark:to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-black/80 text-neutral-900 dark:text-[#D4FF00] border border-neutral-200 dark:border-white/15 backdrop-blur-md shadow-xs">
                          {cs.industry}
                        </span>
                        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-white/90 dark:bg-black/80 text-neutral-700 dark:text-gray-200 border border-neutral-200 dark:border-white/15 backdrop-blur-md shadow-xs">
                          {cs.service}
                        </span>
                      </div>

                      {cs.liveUrl && (
                        <span className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 backdrop-blur-md font-bold shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Location Tag */}
                    <div className="absolute bottom-2.5 left-3.5 flex items-center gap-1 text-[11px] text-neutral-800 dark:text-gray-300 font-medium">
                      <MapPin className="w-3 h-3 text-neutral-700 dark:text-[#D4FF00]" />
                      <span>{cs.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-gray-400 font-bold">
                        {cs.client}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors leading-snug mt-0.5 line-clamp-2">
                        {cs.title}
                      </h2>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {cs.summary}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cs.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-gray-300 border border-neutral-200 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {cs.techStack.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-400 dark:text-gray-500">
                          +{cs.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-5 py-3 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between gap-2 text-xs">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white hover:text-black dark:hover:text-[#D4FF00] transition-colors group-hover:underline"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {cs.liveUrl && (
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-900 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Block */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-slate-900 text-white space-y-6 text-center shadow-lg transition-colors duration-200">
          <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-emerald-400 px-3.5 py-1 rounded-full">
            Pune Developer Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto text-white">
            Have a project in mind? Let’s build it together.
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Talk directly with our developer team in Pune. We’ll understand what you need, share our honest ideas, and deliver clean, working code.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
