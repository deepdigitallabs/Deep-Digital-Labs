'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { BUSINESS_SOFTWARE_MODULES } from '@/data/businessSoftwareModules';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

export function BusinessSoftwareModulesGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState('');

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#E8338C] font-semibold">
          ERP &amp; Operations
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1B1F4B] tracking-tight mt-1">
          Custom Business Software Modules
        </h2>
        <p className="text-sm text-[#4B5070] mt-2 max-w-2xl leading-relaxed">
          Tailor-made mini-ERPs, internal dashboards, and operational engines designed around your exact dispatch, accounting, and sales operations.
        </p>
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {BUSINESS_SOFTWARE_MODULES.map((mod) => (
          <div
            key={mod.id}
            className="p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#E8338C]/40 hover:shadow-xl transition-all shadow-xs flex flex-col justify-between group card-brand"
          >
            <div>
              {/* Title & Audience */}
              <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2 group-hover:text-[#E8338C] transition-colors">
                {mod.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed mb-5">
                {mod.audience}
              </p>

              {/* Feature Bullets */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {mod.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F5FF] border border-neutral-200/70 text-[11px] font-semibold text-[#1B1F4B]"
                  >
                    <Check className="w-3 h-3 text-[#E8338C] shrink-0" />
                    <span>{feat}</span>
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
        initialProjectDetails={selectedModule ? `Interested in: ${selectedModule}` : undefined}
      />
    </div>
  );
}
