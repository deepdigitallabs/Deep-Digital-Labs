'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function CaseStudiesPage() {
  const filteredCases = CASE_STUDIES;

  return (
    <div className="bg-white text-[#4B5070] min-h-screen">
      
      {/* Header Section */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-white">
        {/* Soft Blurred Gradient Circles */}
        <div 
          aria-hidden="true" 
          className="absolute top-16 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FF7A1A]/15 to-[#E8338C]/15 blur-3xl pointer-events-none -z-10" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-28 right-1/4 translate-x-1/3 w-96 h-96 rounded-full bg-gradient-to-bl from-[#6A3DE8]/15 to-[#E8338C]/15 blur-3xl pointer-events-none -z-10" 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8338C]/20 bg-[#F7F5FF] text-xs font-mono font-semibold text-[#E8338C] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Work &amp; Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1B1F4B] tracking-tight leading-tight font-display">
            Real Websites &amp; <span className="brand-gradient-text">Software</span>
          </h1>

          <div className="tagline-divider max-w-sm mx-auto text-xs font-medium tracking-wider">
            Build • Grow • Digital
          </div>

          <p className="text-base sm:text-lg text-[#4B5070] leading-relaxed max-w-2xl mx-auto">
            Take a look at the live websites, booking systems, and business tools we have delivered for growing companies across India and worldwide.
          </p>
        </div>
      </section>

      {/* Case Studies Grid Section (Alternate #F7F5FF) */}
      <section className="py-16 bg-[#F7F5FF] border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCases.length === 0 ? (
            <div className="text-center py-20 p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-4">
              <p className="text-lg text-[#1B1F4B] font-semibold font-display">No projects found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredCases.map((cs) => (
                <div
                  key={cs.slug}
                  className="card-brand group flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Visual Header with Image & Live Badges */}
                    <div className="h-52 relative overflow-hidden bg-neutral-100 border-b border-neutral-200/60">
                      <div 
                        className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${cs.heroImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F4B]/85 via-[#1B1F4B]/30 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/95 text-[#1B1F4B] font-bold shadow-xs">
                          {cs.industry}
                        </span>

                        {cs.liveUrl && (
                          <a
                            href={cs.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold shadow-xs transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span>Live Site ↗</span>
                          </a>
                        )}
                      </div>

                      {/* Location Tag */}
                      <div className="absolute bottom-3 left-3.5 flex items-center gap-1 text-[11px] text-white/95 font-medium">
                        <MapPin className="w-3 h-3 text-[#FF7A1A]" />
                        <span>{cs.location}</span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8338C] font-bold">
                          {cs.client}
                        </span>
                        <h2 className="text-lg font-bold text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors leading-snug mt-0.5 font-display">
                          {cs.title}
                        </h2>
                      </div>

                      {/* Structured Info */}
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 rounded-xl bg-[#F7F5FF] border border-neutral-200/60 space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF7A1A]">
                            The Goal
                          </span>
                          <p className="text-[#4B5070] leading-relaxed line-clamp-2">
                            {cs.problem}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#F7F5FF] border border-neutral-200/60 space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8338C]">
                            What We Built
                          </span>
                          <p className="text-[#4B5070] leading-relaxed line-clamp-2">
                            {cs.whatWeBuilt}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/60 space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                            Result
                          </span>
                          <p className="text-emerald-900 font-medium leading-relaxed line-clamp-2">
                            {cs.result}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cs.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#4B5070] border border-neutral-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Bar */}
                  <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between gap-3 text-xs bg-neutral-50/50">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-1.5 font-bold text-[#1B1F4B] hover:text-[#E8338C] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {cs.liveUrl && (
                      <a
                        href={cs.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white text-[#1B1F4B] hover:text-[#E8338C] border border-neutral-200 transition-all shadow-xs"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CALL TO ACTION (Soft Lavender #F7F5FF With Animated Brand Mesh) */}
      <section className="py-24 sm:py-32 bg-[#F7F5FF] text-[#4B5070] relative overflow-hidden bg-[radial-gradient(rgba(27,31,75,0.08)_1.2px,transparent_1.2px)] [background-size:24px_24px] border-t border-neutral-200/70">
        {/* Animated Background Mesh Orbs (Tuned for Soft Lavender) */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-32 -left-20 w-[600px] h-[450px] bg-gradient-to-br from-[#FF7A1A]/16 via-[#E8338C]/14 to-transparent rounded-full blur-3xl -z-10 animate-mesh-pulse" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-32 -right-20 w-[650px] h-[500px] bg-gradient-to-tl from-[#6A3DE8]/18 via-[#E8338C]/12 to-transparent rounded-full blur-3xl -z-10 animate-float-slow" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-[#FFB81C]/14 via-[#FF7A1A]/10 to-[#E8338C]/10 rounded-full blur-3xl -z-10 animate-float-reverse" 
        />

        {/* Floating Decorative Rings */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-12 w-40 h-40 rounded-full border border-[#1B1F4B]/10 animate-float-slow -z-10 hidden md:block" 
        />
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute bottom-12 left-12 w-28 h-28 rounded-full border border-[#1B1F4B]/10 animate-float -z-10 hidden md:block" 
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 text-xs font-semibold text-[#1B1F4B] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A] animate-pulse" />
            <span>Direct WhatsApp &amp; Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1F4B] font-display leading-[1.12]">
            Want to build something similar for your <span className="brand-gradient-text">business</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#4B5070] max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We’ll understand what you need, share live demos of similar work, and give you a fair fixed quote.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20saw%20your%20case%20studies%20and%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-lg shadow-[#25D366]/30 active:scale-95 hover:-translate-y-0.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (+91 77560 63128)</span>
            </a>
          </div>

          <p className="text-xs text-[#4B5070]/80 font-medium pt-1">
            ⚡ Quick response under 15 minutes · No sales pressure · Free consultation
          </p>
        </div>
      </section>

    </div>
  );
}
