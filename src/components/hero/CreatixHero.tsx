'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Star, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

interface CreatixHeroProps {
  onOpenDiscovery?: () => void;
}

// Lime Green Radial Sunburst / Starburst Icon
function GreenStarburst({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="10" fill="#84cc16" />
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 44 * Math.cos((deg * Math.PI) / 180)}
          y2={50 + 44 * Math.sin((deg * Math.PI) / 180)}
          stroke="#84cc16"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

// Hand-drawn playful doodles (green sparks & arrow)
function GreenSparks({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" stroke="#84cc16" strokeWidth="3" strokeLinecap="round">
      <path d="M 12 18 C 16 12, 22 14, 25 10" />
      <path d="M 28 22 C 34 18, 40 22, 42 16" />
      <path d="M 8 32 C 14 30, 18 36, 22 34" />
    </svg>
  );
}

function CurvedArrowDoodle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 18 45 C 10 32, 14 18, 28 14 C 36 12, 44 18, 46 28" />
      <polyline points="40,26 46,28 48,22" />
    </svg>
  );
}

export function CreatixHero({ onOpenDiscovery }: CreatixHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);

  const handleOpenDiscovery = () => {
    if (onOpenDiscovery) {
      onOpenDiscovery();
    } else {
      setDiscoveryOpen(true);
    }
  };

  return (
    <div className="w-full bg-[#050811] px-2 sm:px-4 md:px-6 pt-3 pb-8">
      
      {/* Outer Giant Rounded Bento Canvas */}
      <section className="relative w-full max-w-[1400px] mx-auto bg-white rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-2xl overflow-hidden pt-5 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 text-slate-900">
        
        {/* ========================================================================= */}
        {/* TOP FLOATING ISLAND NAVBAR ("PILL NAVBAR") */}
        {/* ========================================================================= */}
        <header className="relative z-30 max-w-4xl mx-auto mb-10 sm:mb-14">
          <nav className="rounded-full bg-[#0a0e17] px-6 sm:px-8 py-3.5 flex items-center justify-between text-white shadow-2xl border border-white/10">
            
            {/* Desktop Left Nav Links */}
            <div className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide text-slate-200">
              <Link href="/about" className="hover:text-[#84cc16] transition-colors">
                About Us
              </Link>
              <Link href="/services" className="hover:text-[#84cc16] transition-colors">
                Services
              </Link>
            </div>

            {/* Center Brand Logo with Green Starburst */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <GreenStarburst className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                Creatix
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 border-l border-slate-700 pl-2">
                by Deep Digital Labs
              </span>
            </Link>

            {/* Desktop Right Nav Links */}
            <div className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide text-slate-200">
              <Link href="/case-studies" className="hover:text-[#84cc16] transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-[#84cc16] transition-colors">
                Reviews
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={handleOpenDiscovery}
                className="px-3 py-1 rounded-full bg-[#84cc16] text-black text-[11px] font-bold"
              >
                Hire Us
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>

          {/* Mobile Menu Dropdown Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 p-4 rounded-3xl bg-[#0a0e17] border border-slate-800 shadow-2xl text-center space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-200 hover:text-[#84cc16]"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-200 hover:text-[#84cc16]"
              >
                Services
              </Link>
              <Link 
                href="/case-studies" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-200 hover:text-[#84cc16]"
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-200 hover:text-[#84cc16]"
              >
                Reviews &amp; Contact
              </Link>
            </div>
          )}
        </header>

        {/* ========================================================================= */}
        {/* HERO TITLE & DECORATIVE ACCENTS */}
        {/* ========================================================================= */}
        <div className="relative text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          
          {/* Top-Left Green Sunburst Doodle Accent */}
          <div className="absolute -top-6 -left-4 sm:top-0 sm:left-4 hidden sm:block pointer-events-none">
            <GreenStarburst className="w-14 h-14 sm:w-20 sm:h-20 animate-spin-slow opacity-90" />
          </div>

          {/* Top-Right Decorative Sparks */}
          <div className="absolute top-2 right-2 sm:right-6 hidden sm:block pointer-events-none">
            <div className="flex flex-col gap-1 items-end">
              <div className="w-6 h-1.5 bg-[#84cc16] rounded-full rotate-12" />
              <div className="w-4 h-1.5 bg-[#84cc16] rounded-full -rotate-6" />
            </div>
          </div>

          {/* H1 Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-extrabold text-[#0d121c] tracking-[-0.035em] leading-[1.10] px-2">
            Empowering Brands <br className="hidden sm:inline" />
            Through Creative Solutions
          </h1>

        </div>

        {/* ========================================================================= */}
        {/* HERO BODY: 3-COLUMN FLANKED COMPOSITION (DESKTOP) / RESPONSIVE (MOBILE) */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN: DESCRIPTION & "INNOVATE YOUR BRAND" OUTLINE BUTTON */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 order-2 lg:order-1">
            
            {/* Green tick doodle */}
            <div className="flex gap-1.5 text-[#84cc16] mb-1">
              <div className="w-3 h-1 bg-[#84cc16] rounded-full rotate-45" />
              <div className="w-4 h-1 bg-[#84cc16] rounded-full -rotate-12" />
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
              From web development to branding, we deliver innovative strategies that elevate your brand and drive growth. Let’s create something exceptional together.
            </p>

            <button
              onClick={handleOpenDiscovery}
              className="mt-2 px-6 py-2.5 rounded-full border border-slate-900 text-xs font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              Innovate Your Brand
            </button>

          </div>

          {/* --------------------------------------------------------------------- */}
          {/* CENTER COLUMN: CELEBRATING WOMAN PHOTO & FLOATING DUAL-ACTION CAPSULE */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 relative">
            
            {/* Hand-drawn arrow doodle on the left pointing towards center */}
            <div className="absolute -left-6 sm:left-4 bottom-16 hidden sm:block pointer-events-none">
              <CurvedArrowDoodle className="w-14 h-14" />
            </div>

            {/* Circular Backdrop & Center Visual */}
            <div className="relative w-[280px] sm:w-[360px] lg:w-[410px] aspect-square">
              
              {/* Soft Circle Halo Backdrop */}
              <div className="absolute inset-2 sm:inset-4 rounded-full bg-[#f1f4f8] shadow-inner" />

              {/* Celebrating Businesswoman Photo (Masked/Blended seamlessly) */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-end justify-center">
                <img
                  src="/images/creatix-hero-woman.jpg"
                  alt="Creative director celebrating client success"
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>

              {/* Floating Dual-Action Capsule over the torso at bottom center */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 z-20 w-max max-w-[95%]">
                <div className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-full bg-[#0a0e17]/95 backdrop-blur-md border border-white/20 shadow-2xl">
                  
                  {/* Vibrant Lime-Green Solid Button */}
                  <button
                    onClick={handleOpenDiscovery}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#84cc16] hover:bg-[#99e622] text-slate-950 font-extrabold text-xs tracking-tight shadow-md hover:shadow-lg transition-transform active:scale-95 cursor-pointer"
                  >
                    Start Your Project
                  </button>

                  {/* Secondary Outline/Text Action */}
                  <Link
                    href="/contact"
                    className="px-3 sm:px-4 py-2 text-white/90 hover:text-white font-semibold text-xs tracking-tight transition-colors whitespace-nowrap"
                  >
                    Let&apos;s Collaborate
                  </Link>

                </div>
              </div>

            </div>

          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: 5 LIME STARS & "10 YEARS EXPERIENCE" METRIC */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-2 order-3">
            
            {/* 5 Lime-Green Stars */}
            <div className="flex items-center gap-1 text-[#84cc16]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#84cc16] text-[#84cc16]" />
              ))}
            </div>

            {/* Large Bold Metric */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0d121c] tracking-tight">
              10 Years
            </div>

            {/* Sub-label */}
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              Experience
            </div>

          </div>

        </div>

      </section>

      {/* Discovery Modal */}
      {discoveryOpen && (
        <DiscoveryCallModal
          isOpen={discoveryOpen}
          onClose={() => setDiscoveryOpen(false)}
        />
      )}

    </div>
  );
}
