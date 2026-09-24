'use client';

import React, { useState } from 'react';
import { TechBadge } from './TechBadge';
import { Code2, Smartphone, TrendingUp, ShieldCheck, Layers, Server } from 'lucide-react';
import { CORE_SERVICES } from '@/data/services';

export function SkillsSection() {
  const [activeSlug, setActiveSlug] = useState<string>('websites-web-apps');

  const activeService = CORE_SERVICES.find((s) => s.slug === activeSlug) || CORE_SERVICES[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    'websites-web-apps': <Code2 className="w-5 h-5 text-blue-500" />,
    'business-software-saas': <Layers className="w-5 h-5 text-indigo-500" />,
    'mobile-app-development': <Smartphone className="w-5 h-5 text-cyan-500" />,
    'digital-growth-seo': <TrendingUp className="w-5 h-5 text-emerald-500" />,
    'cloud-ongoing-support': <Server className="w-5 h-5 text-amber-500" />
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200 dark:border-white/10">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold mb-3">
          <Layers className="w-3.5 h-3.5 text-emerald-500" />
          <span>Technology &amp; Skills Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Specialized Stacks by Engineering Discipline
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
          Cleanly categorized specializations chosen for developer velocity, sub-second execution speeds, and zero technical debt.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
        {CORE_SERVICES.map((service) => {
          const isActive = service.slug === activeSlug;
          return (
            <button
              key={service.slug}
              onClick={() => setActiveSlug(service.slug)}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
              }`}
            >
              {categoryIcons[service.slug]}
              <span>{service.displayHeading}</span>
            </button>
          );
        })}
      </div>

      {/* Active Service Specializations Grid */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800/80 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Engineering Domain
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {activeService.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-md">
            {activeService.shortDescription}
          </p>
        </div>

        {/* Specializations categorized underneath */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeService.techSpecializations.map((spec) => (
            <div
              key={spec.category}
              className="p-5 rounded-2xl bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-slate-200">
                    {spec.category}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400">
                    {spec.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {spec.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
