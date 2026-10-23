'use client';

import React, { useState } from 'react';
import { X, Search, Check, ArrowRight, MessageSquare, Database, Sparkles } from 'lucide-react';
import { BUSINESS_SOFTWARE_MODULES, SoftwareModule } from '@/data/businessSoftwareModules';

interface BusinessSoftwareCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModule?: (moduleTitle: string) => void;
}

export function BusinessSoftwareCatalogModal({
  isOpen,
  onClose,
  onSelectModule
}: BusinessSoftwareCatalogModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(BUSINESS_SOFTWARE_MODULES[0].id);

  if (!isOpen) return null;

  const filteredModules = BUSINESS_SOFTWARE_MODULES.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.audience.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
    m.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeModule = BUSINESS_SOFTWARE_MODULES.find(m => m.id === selectedModuleId) || BUSINESS_SOFTWARE_MODULES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-[#11141B] border border-neutral-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#151922] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-neutral-900 dark:text-white flex items-center gap-2">
                <span>18 Custom Business Software Modules</span>
                <span className="hidden sm:inline-flex text-[11px] font-mono px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#E8623C] font-semibold">
                  Enterprise Suite
                </span>
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Tailor-made mini-ERPs, internal dashboards, and operational engines designed around your workflow.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar Strip */}
        <div className="px-6 py-3 border-b border-neutral-200 dark:border-white/10 bg-white dark:bg-[#11141B] flex items-center gap-3 shrink-0">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by module name, feature, or industry (e.g. CRM, GST, Fleet, HRMS, WMS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#E8623C] transition-colors"
            />
          </div>
          <span className="text-xs font-mono text-neutral-500 whitespace-nowrap hidden md:inline">
            Showing {filteredModules.length} of 18
          </span>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-0">
          
          {/* Left Column: Modules List */}
          <div className="md:col-span-5 border-r border-neutral-200 dark:border-white/10 overflow-y-auto divide-y divide-neutral-100 dark:divide-white/5 bg-neutral-50/50 dark:bg-black/20">
            {filteredModules.map((item) => {
              const isSelected = item.id === activeModule.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedModuleId(item.id)}
                  type="button"
                  className={`w-full text-left p-4 transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-[#181C26] border-l-4 border-l-[#E8623C] shadow-xs'
                      : 'hover:bg-neutral-100/70 dark:hover:bg-white/[0.03]'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-orange-100 dark:bg-orange-950/60 text-[#E8623C]' : 'text-neutral-400 bg-neutral-200/60 dark:bg-white/5'
                  }`}>
                    {item.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h3 className={`text-xs sm:text-sm font-bold truncate ${
                        isSelected ? 'text-[#E8623C] dark:text-white' : 'text-neutral-900 dark:text-neutral-200'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                      {item.audience}
                    </p>
                  </div>
                </button>
              );
            })}

            {filteredModules.length === 0 && (
              <div className="p-8 text-center text-xs text-neutral-500">
                No matching software modules found. Try a different keyword.
              </div>
            )}
          </div>

          {/* Right Column: Detailed View of Selected Module */}
          <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto bg-white dark:bg-[#11141B] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Module Header */}
              <div className="pb-5 border-b border-neutral-100 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E8623C] font-semibold">
                  <span className="px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60">{activeModule.number}</span>
                  <span>•</span>
                  <span>{activeModule.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                  {activeModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  {activeModule.audience}
                </p>
              </div>

              {/* Feature Capabilities Grid */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                  Key Capabilities &amp; System Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModule.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5 flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#E8623C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-xs text-neutral-800 dark:text-neutral-200 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Scope Note */}
              <div className="p-4 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-800/30 text-xs text-neutral-700 dark:text-neutral-300 space-y-1">
                <div className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8623C]" />
                  <span>100% Bespoke Code &amp; Dedicated Deployment</span>
                </div>
                <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Every module is engineered specifically for your database schemas and user permissions. Sub-second response times, automated WhatsApp/SMS alerts, and complete source code ownership.
                </p>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-neutral-500">
                Delivery timeline: 2 to 4 weeks agile sprints
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20am%20interested%20in%20discussing%20the%20${encodeURIComponent(activeModule.title)}%20module.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
