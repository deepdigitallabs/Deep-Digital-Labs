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
        <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
          Mobile Engineering
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1B1F4B] tracking-tight mt-1">
          Mobile Application Categories
        </h2>
        <p className="text-sm text-[#4B5070] mt-2 max-w-2xl leading-relaxed">
          High-performance mobile applications built for Android &amp; iOS with Flutter and React Native. Smooth 60fps animations, offline-first syncing, and real-time push alerts.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOBILE_APP_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#E8338C]/40 hover:shadow-xl transition-all shadow-xs flex flex-col justify-between group card-brand"
          >
            <div>
              {/* Title & Description */}
              <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2 group-hover:text-[#E8338C] transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed mb-5">
                {cat.description}
              </p>

              {/* Capability List */}
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#1B1F4B] font-bold block mb-3">
                  Deliverables &amp; Tech Stack
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {cat.capabilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#4B5070] font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-[#E8338C] shrink-0" />
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
