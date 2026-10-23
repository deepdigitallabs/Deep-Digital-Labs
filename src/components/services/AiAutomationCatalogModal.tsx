'use client';

import React, { useState } from 'react';
import { X, Search, Check, Bot, Sparkles, ExternalLink, MessageSquare } from 'lucide-react';
import { AI_AUTOMATION_CATEGORIES, AiAutomationCategory } from '@/data/aiAutomationCategories';
import Link from 'next/link';

interface AiAutomationCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (categoryTitle: string) => void;
}

export function AiAutomationCatalogModal({
  isOpen,
  onClose,
  onSelectCategory
}: AiAutomationCatalogModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCatId, setSelectedCatId] = useState<string>(AI_AUTOMATION_CATEGORIES[0].id);

  if (!isOpen) return null;

  const filteredCategories = AI_AUTOMATION_CATEGORIES.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.capabilities.some(cap => cap.toLowerCase().includes(searchQuery.toLowerCase())) ||
    c.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeCategory = AI_AUTOMATION_CATEGORIES.find(c => c.id === selectedCatId) || AI_AUTOMATION_CATEGORIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-[#11141B] border border-neutral-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#151922] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-neutral-900 dark:text-white flex items-center gap-2">
                <span>13 AI &amp; Workflow Automation Categories</span>
                <span className="hidden sm:inline-flex text-[11px] font-mono px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#E8623C] font-semibold">
                  Autonomous Pipelines
                </span>
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Eliminate human bottlenecks with conversational AI agents and event-driven workflows.
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
              placeholder="Search automation categories (e.g. n8n, WhatsApp, RAG, Voice, OCR, Database)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#E8623C] transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-500 whitespace-nowrap hidden md:inline">
              Showing {filteredCategories.length} of 13
            </span>
            <Link
              href="/services/chat-bot-development"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E8623C] hover:underline"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-0">
          
          {/* Left Column: Categories List */}
          <div className="md:col-span-5 border-r border-neutral-200 dark:border-white/10 overflow-y-auto divide-y divide-neutral-100 dark:divide-white/5 bg-neutral-50/50 dark:bg-black/20">
            {filteredCategories.map((item) => {
              const isSelected = item.id === activeCategory.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCatId(item.id)}
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
                      <h4 className={`text-sm font-semibold truncate ${
                        isSelected ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
                      }`}>
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mb-1.5">
                      {item.description}
                    </p>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400">
                      {item.tag} · {item.capabilities.length} Capabilities
                    </span>
                  </div>
                </button>
              );
            })}

            {filteredCategories.length === 0 && (
              <div className="p-8 text-center text-neutral-500 text-xs">
                No automation categories found matching &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>

          {/* Right Column: Detailed View of Selected Category */}
          <div className="md:col-span-7 p-6 md:p-8 overflow-y-auto flex flex-col justify-between bg-white dark:bg-[#11141B]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-orange-100 dark:bg-orange-950/60 text-[#E8623C]">
                  CATEGORY {activeCategory.number}
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {activeCategory.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                {activeCategory.title}
              </h3>
              
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200/70 dark:border-white/10 mb-6">
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>

              {/* Capabilities */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8623C]" />
                  <span>Integrated Capabilities ({activeCategory.capabilities.length})</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCategory.capabilities.map((capName, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 dark:bg-[#161A24] border border-neutral-200/80 dark:border-white/10 text-xs text-neutral-800 dark:text-neutral-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="font-medium leading-tight">{capName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-neutral-500 font-mono">
                n8n &amp; Python Pipelines · Zero Lock-in
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCategory) {
                      onSelectCategory(activeCategory.title);
                    }
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-xs active:scale-98 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request Scoping</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
