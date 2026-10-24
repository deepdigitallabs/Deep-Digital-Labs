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
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
          Custom Business Software Modules
        </h2>
        <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed">
          Tailor-made mini-ERPs, internal dashboards, and operational engines designed around your exact dispatch, accounting, and sales operations.
        </p>
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {BUSINESS_SOFTWARE_MODULES.map((mod) => (
          <div
            key={mod.id}
            className="p-7 rounded-2xl bg-white dark:bg-[#0F1219] border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-neutral-600 transition-all shadow-xs flex flex-col justify-between group"
          >
            <div>
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
