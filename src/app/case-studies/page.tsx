'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  const filteredCases = CASE_STUDIES;

  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight font-display">
            Real Websites &amp; Software <br />
            <span className="text-[#E8623C]">Built for Growing Businesses</span>
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            See the websites, booking systems, and business tools we have built for businesses in Pune and across India.
          </p>
        </div>

        {/* Case Studies Bento Grid */}
        {filteredCases.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-3xl bg-neutral-50 dark:bg-[#0D0E12] border border-neutral-200 dark:border-white/10 space-y-4">
            <p className="text-lg text-neutral-800 dark:text-neutral-200 font-semibold font-display">No projects found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCases.map((cs) => (
              <div
                key={cs.slug}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-[#E8623C]/60 dark:hover:border-[#E8623C]/60 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Visual Header with Image & Live Badges */}
                  <div className="h-52 relative overflow-hidden bg-neutral-100 dark:bg-black border-b border-neutral-200 dark:border-white/10">
                    <div 
                      className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105 opacity-100"
                      style={{ backgroundImage: `url(${cs.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-black/80 text-neutral-800 dark:text-neutral-200 font-bold backdrop-blur-md border border-white/20">
                        {cs.industry}
                      </span>

                      {cs.liveUrl && (
                        <a
                          href={cs.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/90 hover:bg-emerald-600 text-white font-bold shadow-xs transition-colors backdrop-blur-md"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>Live Site ↗</span>
                        </a>
                      )}
                    </div>

                    {/* Location Tag */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1 text-[11px] text-white/90 font-medium">
                      <MapPin className="w-3 h-3 text-[#E8623C]" />
                      <span>{cs.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8623C] font-bold">
                        {cs.client}
                      </span>
                      <h2 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-snug mt-0.5">
                        {cs.title}
                      </h2>
                    </div>

                    {/* Problem / Solution / Result Structured Evidence */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                          Problem
                        </span>
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed line-clamp-2">
                          {cs.problem}
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8623C]">
                          What We Built
                        </span>
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed line-clamp-2">
                          {cs.whatWeBuilt}
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                          Result
                        </span>
                        <p className="text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed line-clamp-2">
                          {cs.result}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cs.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-6 py-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between gap-3 text-xs bg-neutral-50/50 dark:bg-white/[0.01]">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {cs.liveUrl && (
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-white/10 text-neutral-800 dark:text-neutral-200 hover:bg-[#E8623C] hover:text-white dark:hover:bg-[#E8623C] dark:hover:text-white border border-neutral-200 dark:border-white/10 transition-all shadow-2xs"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Block */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-slate-900 text-white space-y-6 text-center shadow-lg transition-colors duration-200">
          <span className="text-xs font-mono font-bold tracking-widest uppercase bg-white/10 text-emerald-400 px-3.5 py-1 rounded-full">
            Pune Developer Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto text-white">
            Let’s Build Something That Scales.
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Tell us about what you want to build. We’ll understand your requirements and get back to you directly with a clear timeline and fair pricing.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              <span>Book a 30-Minute Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917756063128?text=Hi,%20I%20want%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-md active:scale-95"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
