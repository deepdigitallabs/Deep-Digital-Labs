'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { MOBILE_APP_CATEGORIES } from '@/data/mobileAppCategories';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

export function MobileAppCategoriesGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Mobile Application Categories
        </h2>
        <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed">
          High-performance mobile applications built for customers, employees and field teams with secure backend integrations, real-time updates and offline-first capabilities.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOBILE_APP_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0F1219] border border-slate-200/90 dark:border-white/10 hover:border-[#E8623C]/40 dark:hover:border-[#E8623C]/40 transition-all shadow-xs flex flex-col justify-between group"
          >
            <div>
              {/* Title & Description */}
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-[#E8623C] transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-5">
                {cat.description}
              </p>

              {/* Capability List */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-gray-500 font-bold block mb-3">
                  Deliverables &amp; Tech Stack
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {cat.capabilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300 font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Discovery Modal */}
      <DiscoveryCallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProjectDetails={selectedCategory ? `Interested in: ${selectedCategory}` : undefined}
      />
    </div>
  );
}
