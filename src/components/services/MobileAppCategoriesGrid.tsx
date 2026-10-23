'use client';

import React, { useState } from 'react';
import { Search, Check, Sparkles, ArrowRight } from 'lucide-react';
import { MOBILE_APP_CATEGORIES } from '@/data/mobileAppCategories';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

export function MobileAppCategoriesGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'native-offline' | 'enterprise-field' | 'commerce-booking' | 'cloud-ai'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterCategory = (cat: typeof MOBILE_APP_CATEGORIES[0]) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      cat.title.toLowerCase().includes(q) ||
      cat.description.toLowerCase().includes(q) ||
      cat.tag.toLowerCase().includes(q) ||
      cat.capabilities.some(c => c.toLowerCase().includes(q));

    if (!matchesSearch) return false;

    if (activeTab === 'all') return true;
    if (activeTab === 'native-offline') {
      return ['01', '02', '03', '04'].includes(cat.number);
    }
    if (activeTab === 'enterprise-field') {
      return ['05', '06', '09', '13'].includes(cat.number);
    }
    if (activeTab === 'commerce-booking') {
      return ['07', '08', '10', '11'].includes(cat.number);
    }
    if (activeTab === 'cloud-ai') {
      return ['12', '14', '15', '16'].includes(cat.number);
    }
    return true;
  };

  const filtered = MOBILE_APP_CATEGORIES.filter(filterCategory);

  const handleEnquire = (title: string) => {
    setSelectedCategory(title);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#E8623C] font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Mobile Engineering Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            16 Mobile Application Categories
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed">
            High-performance mobile applications built for customers, employees and field teams with secure backend integrations, real-time updates and offline-first capabilities.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-80 relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search mobile categories (e.g. Flutter, Offline, GPS, UPI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#E8623C] transition-colors"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs">
        {[
          { key: 'all', label: `All Categories (${MOBILE_APP_CATEGORIES.length})` },
          { key: 'native-offline', label: 'Cross-Platform & Offline (4)' },
          { key: 'enterprise-field', label: 'Enterprise & Field (4)' },
          { key: 'commerce-booking', label: 'Commerce & Payments (4)' },
          { key: 'cloud-ai', label: 'Cloud, AI & Store CI/CD (4)' },
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

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filtered.map((cat) => (
          <div
            key={cat.id}
            className="p-7 rounded-2xl bg-white dark:bg-[#0F1219] border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group"
          >
            <div>
              {/* Top row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-[#E8623C]">
                  {cat.number}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-gray-400 font-medium">
                  {cat.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-[#E8623C] transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-5">
                {cat.description}
              </p>

              {/* Capability Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/10">
                {cat.capabilities.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-[11px] font-medium text-slate-700 dark:text-gray-300"
                  >
                    <Check className="w-3 h-3 text-[#E8623C] shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400 dark:text-gray-500">
                {cat.capabilities.length} Capabilities
              </span>
              <button
                type="button"
                onClick={() => handleEnquire(cat.title)}
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
            No categories matched &quot;{searchQuery}&quot;.
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
        initialProjectDetails={selectedCategory ? `Interested in: ${selectedCategory}` : undefined}
      />
    </div>
  );
}
