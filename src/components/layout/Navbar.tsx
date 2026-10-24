'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Bot,
  MessageSquare
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
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <div className="flex items-center justify-between px-5 sm:px-6 py-2.5 bg-white/90 dark:bg-[#0E1117]/90 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-2xl shadow-sm transition-all duration-150">
          
          {/* Brand Logo - Full Logo */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3" aria-label="Deep Digital Labs Home">
            <div className="relative h-10 sm:h-12 flex items-center shrink-0">
              <Image
                src="/images/logo-full.png"
                alt="Deep Digital Labs - Pune"
                width={600}
                height={203}
                priority
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            <Link href="/" className="hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors py-1">
              Home
            </Link>

            {/* Services with Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/#services" 
                className="hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors flex items-center gap-1 py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#E8623C]' : 'text-neutral-400'}`} />
              </Link>

              {/* Mega Menu Container */}
              {megaMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white dark:bg-[#12151C] border border-neutral-200 dark:border-white/10 rounded-2xl p-5 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pb-4 border-b border-neutral-100 dark:border-white/10">
                    
                    {/* 1. Websites & Web Apps */}
                    <Link 
                      href="/services/websites-web-apps" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] shrink-0">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          Web Apps &amp; SaaS
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed pl-7">
                        Fast Next.js portals &amp; modern web apps.
                      </p>
                    </Link>

                    {/* 2. Business Software */}
                    <Link 
                      href="/services/business-software-saas" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] shrink-0">
                          <Layers className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          Custom ERP &amp; Software
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed pl-7">
                        Billing, inventory, and back-office tools.
                      </p>
                    </Link>

                    {/* 3. Mobile Apps */}
                    <Link 
                      href="/services/mobile-app-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] shrink-0">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          Mobile Applications
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed pl-7">
                        High-performance iOS &amp; Android apps.
                      </p>
                    </Link>

                    {/* 4. Digital Growth & SEO */}
                    <Link 
                      href="/services/digital-growth-seo" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] shrink-0">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          Growth &amp; SEO
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed pl-7">
                        Local search visibility &amp; conversions.
                      </p>
                    </Link>

                    {/* 5. AI & Automation */}
                    <Link 
                      href="/services/chat-bot-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-tight">
                          AI &amp; Automation
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed pl-7">
                        WhatsApp bots &amp; workflow pipelines.
                      </p>
                    </Link>

                    {/* 6. All Capabilities */}
                    <Link 
                      href="/#services" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl bg-orange-50/60 dark:bg-orange-950/30 hover:bg-orange-100/60 dark:hover:bg-orange-950/50 transition-all group border border-orange-200/50 dark:border-orange-800/30"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-lg bg-[#E8623C] text-white shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#E8623C] group-hover:underline transition-colors leading-tight">
                          All Services
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed pl-7">
                        Explore full deliverables and pricing.
                      </p>
                    </Link>

                  </div>

                  {/* Mega Menu Footer */}
                  <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3 text-neutral-500">
                      <Link
                        href="/case-studies"
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] font-medium transition-colors"
                      >
                        Client Case Studies
                      </Link>
                      <span>•</span>
                      <Link
                        href="/ecommerce-website-design-pune"
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] font-medium transition-colors"
                      >
                        Pune E-Commerce
                      </Link>
                    </div>
                    <Link
                      href="/#services"
                      onClick={() => setMegaMenuOpen(false)}
                      className="text-[#E8623C] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>View all services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors py-1">
              Work
            </Link>
            <Link href="/about" className="hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors py-1">
              About
            </Link>
            <Link href="/blog" className="hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors py-1">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors py-1">
              Contact
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20an%20inquiry%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-emerald-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden xl:inline">+91 77560 63128</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
            <button
              onClick={() => setDiscoveryModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#E8623C] hover:bg-[#D7532F] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-98 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20an%20inquiry%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200 dark:border-white/10 shadow-xl text-left space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              Home
            </Link>

            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#E8623C]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 py-2 space-y-2 border-l border-neutral-200 dark:border-white/10 mt-1">
                  <Link 
                    href="/services/websites-web-apps" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-0.5"
                  >
                    Web Apps &amp; SaaS
                  </Link>
                  <Link 
                    href="/services/business-software-saas" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-0.5"
                  >
                    Custom ERP &amp; Software
                  </Link>
                  <Link 
                    href="/services/mobile-app-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-0.5"
                  >
                    Mobile Applications
                  </Link>
                  <Link 
                    href="/services/digital-growth-seo" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-0.5"
                  >
                    Digital Growth &amp; SEO
                  </Link>
                  <Link 
                    href="/services/chat-bot-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] py-0.5"
                  >
                    AI &amp; Automation
                  </Link>
                  <Link 
                    href="/#services" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-[#E8623C] hover:underline pt-1"
                  >
                    All Services &amp; Packages →
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#E8623C]"
            >
              Blog
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
