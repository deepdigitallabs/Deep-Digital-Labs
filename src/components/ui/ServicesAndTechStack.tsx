'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { TechBadge } from '@/components/ui/TechBadge';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  solutions: string[];
  tech: string[];
}

export const CONSOLIDATED_SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Websites & Web Applications',
    slug: 'websites-web-apps',
    description:
      'Modern, blazing-fast business websites, e-commerce stores, custom web applications, and admin dashboards engineered for speed and conversion.',
    solutions: [
      'E-commerce Platforms',
      'Customer Portals',
      'Admin Dashboards',
      'High-Converting Landing Pages',
      'Booking & Appointment Systems',
      'API Integration & Middleware'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
  },
  {
    id: '02',
    title: 'Business Software & SaaS',
    slug: 'business-software-saas',
    description:
      'Custom business software, CRM systems, ERP solutions, management dashboards, and automated cloud workflows.',
    solutions: [
      'Multi-tenant SaaS',
      'Custom CRM/ERP',
      'Automated Workflows',
      'Subscription Billing',
      'Customer Management Systems',
      'Cloud Databases & Auth'
    ],
    tech: ['Python (FastAPI)', 'Go', 'AWS (EC2, S3, RDS)', 'Docker', 'Redis', 'Stripe API']
  },
  {
    id: '03',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description:
      'High-performance Android, iOS, and cross-platform mobile apps with real-time push notifications and secure in-app payments.',
    solutions: [
      'Cross-platform Apps',
      'Native iOS/Android',
      'Real-time Tracking',
      'Secure Payments',
      'Push Notifications',
      'Offline-First Sync'
    ],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'WebSockets']
  },
  {
    id: '04',
    title: 'Digital Growth & SEO',
    slug: 'digital-growth-seo',
    description:
      'Developer-led SEO, local Google search domination, website performance optimization, and conversion growth.',
    solutions: [
      'Technical SEO Audits',
      'Core Web Vitals Optimization',
      'Local Search Domination',
      'Analytics Setup',
      'Google Search Console',
      'Conversion Rate Optimization'
    ],
    tech: ['Google Search Console', 'GA4', 'Schema Markup', 'Vercel Analytics', 'Lighthouse CI']
  },
  {
    id: '05',
    title: 'Chat Bot Development',
    slug: 'chat-bot-development',
    description:
      'Smart WhatsApp Business & website chat bots that answer customer inquiries 24/7, book appointments, and capture high-intent leads.',
    solutions: [
      'WhatsApp Business API Bots',
      'Website Live Chat Assistants',
      '24/7 Lead Capture & Routing',
      'Automated Appointment Booking',
      'CRM & Google Sheets Sync',
      'Live Human Team Handover'
    ],
    tech: ['WhatsApp Cloud API', 'OpenAI', 'Claude', 'Node.js', 'Next.js', 'Webhooks']
  }
];

export function ServicesAndTechStack() {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = CONSOLIDATED_SERVICES[activeTab];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#070b12] border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Unified Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            What We Do &amp; How We Build It
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We focus on building reliable software that delivers real business results. 
            Our specialized stacks are chosen for developer velocity, sub-second execution speeds, and zero technical debt.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left: Tab Navigation */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            {CONSOLIDATED_SERVICES.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                      : 'bg-white dark:bg-[#0c101c] text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-slate-800/90 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#101626]'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-white/20 text-white dark:bg-slate-900/10 dark:text-slate-900'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                        }`}
                      >
                        {service.id}
                      </span>
                      <span className="font-bold text-sm sm:text-base tracking-tight">
                        {service.title}
                      </span>
                    </div>
                    
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                        isActive
                          ? 'translate-x-0 text-white dark:text-slate-900'
                          : 'text-slate-400 dark:text-slate-500 group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Animated Content Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-white dark:bg-[#0c101c] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Category {currentService.id}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Standard Production Stack
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                    {currentService.title}
                  </h3>

                  <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                    {currentService.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8 border-b border-slate-100 dark:border-slate-800/80">
                    
                    {/* Core Solutions */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Core Solutions</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {currentService.solutions.map((sol, i) => (
                          <li
                            key={i}
                            className="flex items-center text-xs sm:text-sm text-slate-700 dark:text-slate-300 gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>Technologies &amp; Tools</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentService.tech.map((tech, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.15 }}
                          >
                            <TechBadge name={tech} size="sm" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                    Direct Senior Engineer Implementation • 100% Code Ownership
                  </span>

                  <Link
                    href={`/services/${currentService.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                  >
                    <span>Deep-dive {currentService.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesAndTechStack;
