'use client';

import React, { useState } from 'react';
import { Search, Check, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_SOFTWARE_MODULES } from '@/data/businessSoftwareModules';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

export function BusinessSoftwareModulesGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'sales-finance' | 'operations' | 'field-dispatch' | 'tech'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState('');

  const filterModule = (mod: typeof BUSINESS_SOFTWARE_MODULES[0]) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      mod.title.toLowerCase().includes(q) ||
      mod.audience.toLowerCase().includes(q) ||
      mod.tag.toLowerCase().includes(q) ||
      mod.features.some(f => f.toLowerCase().includes(q));

    if (!matchesSearch) return false;

    if (activeTab === 'all') return true;
    if (activeTab === 'sales-finance') {
      return ['01', '02', '03', '04', '05'].includes(mod.number);
    }
    if (activeTab === 'operations') {
      return ['06', '07', '08', '09', '10'].includes(mod.number);
    }
    if (activeTab === 'field-dispatch') {
      return ['11', '12', '13', '14', '15'].includes(mod.number);
    }
    if (activeTab === 'tech') {
      return ['16', '17', '18'].includes(mod.number);
    }
    return true;
  };

  const filtered = BUSINESS_SOFTWARE_MODULES.filter(filterModule);

  const handleEnquire = (title: string) => {
    setSelectedModule(title);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#E8623C] font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            18 Custom Business Software Modules
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed">
            Tailor-made mini-ERPs, internal dashboards, and operational engines designed around your exact dispatch, accounting, and sales operations.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-80 relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search modules &amp; workflows (e.g. CRM, GST, Fleet, HRMS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#E8623C] transition-colors"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs">
        {[
          { key: 'all', label: `All Modules (${BUSINESS_SOFTWARE_MODULES.length})` },
          { key: 'sales-finance', label: 'Sales & Finance (5)' },
          { key: 'operations', label: 'Operations & HR (5)' },
          { key: 'field-dispatch', label: 'Field & Logistics (5)' },
          { key: 'tech', label: 'IoT & Custom Tech (3)' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer font-medium ${
              activeTab === tab.key
                ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-xs'
                : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filtered.map((mod) => (
          <div
            key={mod.id}
            className="p-7 rounded-2xl bg-white dark:bg-[#0F1219] border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group"
          >
            <div>
              {/* Top row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-[#E8623C]">
                  MODULE {mod.number}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-gray-400 font-medium">
                  {mod.tag}
                </span>
              </div>

              {/* Title & Audience */}
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-[#E8623C] transition-colors">
                {mod.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-5">
                {mod.audience}
              </p>

              {/* Feature Bullets */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/10">
                {mod.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-[11px] font-medium text-slate-700 dark:text-gray-300"
                  >
                    <Check className="w-3 h-3 text-[#E8623C] shrink-0" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400 dark:text-gray-500">
                {mod.features.length} Features Included
              </span>
              <button
                type="button"
                onClick={() => handleEnquire(mod.title)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8623C] hover:text-[#D7532F] transition-colors cursor-pointer"
              >
                <span>Request Scoping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-slate-50 dark:bg-white/5 rounded-2xl border border-dashed border-slate-200 dark:border-white/10">
          <p className="text-sm text-slate-600 dark:text-gray-400">
            No modules matched &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-3 text-xs font-mono text-[#E8623C] hover:underline cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Discovery Modal */}
      <DiscoveryCallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProjectDetails={selectedModule ? `Interested in: ${selectedModule}` : undefined}
      />
    </div>
  );
}
