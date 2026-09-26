'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code2,
  Smartphone,
  TrendingUp, 
  ArrowRight, 
  Sparkles,
  Layers,
  Server,
  Zap,
  Bot
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [discoveryModalOpen, setDiscoveryModalOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <div className="flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 bg-white/85 dark:bg-[#0B0D12]/85 backdrop-blur-xl border border-neutral-200/80 dark:border-white/[0.08] rounded-2xl shadow-xl transition-all duration-200">
          
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#E8623C] to-[#F59E0B] p-[1.5px] shadow-sm shadow-[#E8623C]/20">
              <div className="w-full h-full bg-white dark:bg-[#0E1015] rounded-[6px] flex items-center justify-center">
                <span className="font-extrabold text-sm text-[#E8623C] tracking-tighter">D</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-neutral-900 dark:text-white tracking-tight flex items-center gap-1.5 leading-none">
                Deep Digital Labs
              </span>
              <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">
                Technology Builds Tomorrow
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            
            {/* Services with Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/services" 
                className="hover:text-neutral-900 dark:hover:text-[#E8623C] transition-colors flex items-center gap-1 py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#E8623C]' : 'text-neutral-400 dark:text-neutral-500'}`} />
              </Link>

              {/* Mega Menu Container */}
              {megaMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[740px] bg-white/95 dark:bg-[#12151D]/98 backdrop-blur-2xl border border-neutral-200 dark:border-white/[0.08] rounded-2xl p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pb-4 border-b border-neutral-100 dark:border-white/[0.08]">
                    
                    {/* 1. Websites & Web Apps */}
                    <Link 
                      href="/services/websites-web-apps" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-neutral-50/70 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.06] border border-neutral-200/60 dark:border-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 shrink-0">
                          <Code2 className="w-4 h-4 text-[#E8623C]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          01 — Web Apps &amp; SaaS
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                        Next.js 15, high-speed portals &amp; modern e-commerce.
                      </p>
                    </Link>

                    {/* 2. Business Software */}
                    <Link 
                      href="/services/business-software-saas" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-neutral-50/70 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.06] border border-neutral-200/60 dark:border-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 shrink-0">
                          <Layers className="w-4 h-4 text-[#E8623C]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          02 — Custom ERP &amp; SaaS
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                        Multi-tenant software, custom billing &amp; workflow engines.
                      </p>
                    </Link>

                    {/* 3. Mobile Apps */}
                    <Link 
                      href="/services/mobile-app-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-neutral-50/70 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.06] border border-neutral-200/60 dark:border-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 shrink-0">
                          <Smartphone className="w-4 h-4 text-[#E8623C]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          03 — Mobile Native
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                        iOS &amp; Android with Flutter, offline sync &amp; biometrics.
                      </p>
                    </Link>

                    {/* 4. Digital Growth & SEO */}
                    <Link 
                      href="/services/digital-growth-seo" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-neutral-50/70 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.06] border border-neutral-200/60 dark:border-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 shrink-0">
                          <TrendingUp className="w-4 h-4 text-[#E8623C]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          04 — Growth &amp; SEO
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                        Core Web Vitals, programmatic SEO &amp; conversion funnels.
                      </p>
                    </Link>

                    {/* 5. Chat Bot Development */}
                    <Link 
                      href="/services/chat-bot-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-neutral-50/70 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/[0.06] border border-neutral-200/60 dark:border-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10 shrink-0">
                          <Bot className="w-4 h-4 text-[#E8623C]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          05 — Chat Bot Development
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                        Automated WhatsApp and website customer support bots.
                      </p>
                    </Link>

                    {/* 6. All Capabilities */}
                    <Link 
                      href="/services" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-gradient-to-br from-[#E8623C]/5 to-transparent hover:bg-[#E8623C]/10 border border-[#E8623C]/20 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-[#E8623C]/20 shrink-0">
                          <Sparkles className="w-4 h-4 text-[#E8623C]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#E8623C] group-hover:underline transition-colors leading-tight">
                          All Services &amp; Packages
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                        Explore all deliverables, pricing scopes &amp; sprint timelines.
                      </p>
                    </Link>

                  </div>

                  {/* Mega Menu Footer */}
                  <div className="pt-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                      <Sparkles className="w-3.5 h-3.5 text-[#E8623C]" />
                      <span>Standout Engineering · Zero AI Slop</span>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setMegaMenuOpen(false)}
                      className="text-[#E8623C] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Explore all capabilities</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <a href="#why-us" className="hover:text-neutral-900 dark:hover:text-[#E8623C] transition-colors">
              Why Us
            </a>
            <Link href="/case-studies" className="hover:text-neutral-900 dark:hover:text-[#E8623C] transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-neutral-900 dark:hover:text-[#E8623C] transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-[#E8623C] transition-colors">
              Blog
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setDiscoveryModalOpen(true)}
              className="group relative inline-flex items-center gap-2 bg-[#E8623C] hover:bg-[#F0744E] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#E8623C]/20 hover:shadow-lg hover:shadow-[#E8623C]/30 active:scale-98 cursor-pointer"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions: Contact + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDiscoveryModalOpen(true)}
              className="bg-[#E8623C] text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-2xl bg-white/95 dark:bg-[#12151D]/98 backdrop-blur-2xl border border-neutral-200 dark:border-white/[0.08] shadow-2xl text-left space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
              >
                <span>Services &amp; Architecture</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#E8623C]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 py-2 space-y-2 border-l border-neutral-200 dark:border-white/10 mt-1">
                  <Link 
                    href="/services/websites-web-apps" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-1"
                  >
                    01 — Web Apps &amp; SaaS
                  </Link>
                  <Link 
                    href="/services/business-software-saas" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-1"
                  >
                    02 — Custom ERP &amp; SaaS
                  </Link>
                  <Link 
                    href="/services/mobile-app-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-1"
                  >
                    03 — Mobile Native
                  </Link>
                  <Link 
                    href="/services/digital-growth-seo" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-1"
                  >
                    04 — Digital Growth &amp; SEO
                  </Link>
                  <Link 
                    href="/services/chat-bot-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-1"
                  >
                    05 — Chat Bot Development
                  </Link>
                  <Link 
                    href="/services" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-[#E8623C] hover:underline py-1"
                  >
                    All Services &amp; Packages →
                  </Link>
                </div>
              )}
            </div>

            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              Why Us
            </a>
            <Link 
              href="/case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              Work &amp; Case Studies
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Discovery Call Modal */}
      {discoveryModalOpen && (
        <DiscoveryCallModal
          isOpen={discoveryModalOpen}
          onClose={() => setDiscoveryModalOpen(false)}
        />
      )}
    </>
  );
}
