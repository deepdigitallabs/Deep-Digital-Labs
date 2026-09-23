'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

interface RitovexHeroProps {
  onOpenDiscovery?: () => void;
}

export function RitovexHero({ onOpenDiscovery }: RitovexHeroProps) {
  const [demoOpen, setDemoOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);

  const handleOpenDiscovery = () => {
    if (onOpenDiscovery) {
      onOpenDiscovery();
    } else {
      setDiscoveryOpen(true);
    }
  };

  return (
    <section className="relative bg-white text-slate-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-28">
      {/* SVG ClipPath Definition for the signature asymmetrical notched tab shape */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="ritovex-notched-shape" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0.06
              C 0,0.02 0.02,0 0.06,0
              L 0.44,0
              C 0.48,0 0.50,0.04 0.52,0.08
              C 0.53,0.11 0.55,0.13 0.60,0.13
              L 0.94,0.13
              C 0.98,0.13 1,0.15 1,0.19
              L 1,0.94
              C 1,0.98 0.98,1 0.94,1
              L 0.06,1
              C 0.02,1 0,0.98 0,0.94
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column on desktop, centered 1-column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================================================================= */}
          {/* LEFT / TOP COLUMN: HEADLINES & ACTION BUTTONS */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-md bg-[#f0f2f5] text-slate-700 text-xs font-medium tracking-normal border border-slate-200/80 shadow-xs">
              <span>Creative Ideas That Inspire Growth</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-[-0.03em] leading-[1.12] max-w-xl">
              World’s Best Creative Agency Team
            </h1>

            {/* Supporting Description */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-lg font-normal">
              World’s best creative agency team — crafting legendary brands through bold ideas, strategic genius, and flawless execution that dominates the global stage.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap">
              {/* Primary Solid Button */}
              <button
                onClick={handleOpenDiscovery}
                className="px-7 py-3.5 rounded-xl bg-[#111827] hover:bg-black text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                Get Started
              </button>

              {/* Watch Demo Play Button */}
              <button
                onClick={() => setDemoOpen(true)}
                className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center group-hover:border-slate-700 group-hover:scale-105 transition-all shadow-xs">
                  <Play className="w-4 h-4 fill-slate-900 text-slate-900 ml-0.5 group-hover:fill-slate-700 group-hover:text-slate-700 transition-colors" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

          </div>

          {/* ================================================================= */}
          {/* RIGHT / BOTTOM COLUMN: SIGNATURE SHAPED HERO VISUAL */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]">
              
              {/* Offset Soft-Blue Backing Card (Visible primarily on desktop bottom-right) */}
              <div 
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-[85%] h-[85%] bg-[#dbe7f3] rounded-[32px] sm:rounded-[40px] -z-0 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Main Clipped Image Card */}
              <div 
                className="relative z-10 w-full aspect-[4/3.8] sm:aspect-[4/3.7] shadow-xl transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  clipPath: 'url(#ritovex-notched-shape)',
                  WebkitClipPath: 'url(#ritovex-notched-shape)'
                }}
              >
                <img
                  src="/images/hero-creative-team.jpg"
                  alt="World's best creative agency team leader at work"
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Demo Video Modal */}
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-semibold text-white">Agency Reel &amp; Engineering Showcase</span>
              </div>
              <button
                onClick={() => setDemoOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Play className="w-7 h-7 fill-cyan-400 ml-1" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white">Engineering Digital Products at Scale</h3>
                <p className="text-sm text-slate-400">
                  See how Deep Digital Labs designs, architects, and deploys high-throughput SaaS platforms, mobile applications, and enterprise web solutions.
                </p>
              </div>
              <div className="pt-2 flex justify-center gap-4">
                <button
                  onClick={() => {
                    setDemoOpen(false);
                    handleOpenDiscovery();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors"
                >
                  Schedule a 1-on-1 Demo
                </button>
                <button
                  onClick={() => setDemoOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-slate-300 font-semibold text-xs hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Discovery Modal */}
      {discoveryOpen && (
        <DiscoveryCallModal
          isOpen={discoveryOpen}
          onClose={() => setDiscoveryOpen(false)}
        />
      )}
    </section>
  );
}
