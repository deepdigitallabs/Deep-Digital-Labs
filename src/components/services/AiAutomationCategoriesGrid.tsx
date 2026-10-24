'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { AI_AUTOMATION_CATEGORIES } from '@/data/aiAutomationCategories';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

export function AiAutomationCategoriesGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
          Automation &amp; AI
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1B1F4B] tracking-tight mt-1">
          AI &amp; Workflow Automation Categories
        </h2>
        <p className="text-sm text-[#4B5070] mt-2 max-w-2xl leading-relaxed">
          Save time on repetitive work, connect legacy databases, and implement conversational WhatsApp bots and AI agents that handle everyday customer requests.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {AI_AUTOMATION_CATEGORIES.map((cat) => (
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

              {/* Capability Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {cat.capabilities.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F5FF] border border-neutral-200/70 text-[11px] font-semibold text-[#1B1F4B]"
                  >
                    <Check className="w-3 h-3 text-[#E8338C] shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
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
