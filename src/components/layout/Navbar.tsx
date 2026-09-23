'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  Smartphone,
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <div className="flex items-center justify-between px-6 py-3.5 bg-white/90 dark:bg-black/75 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 rounded-full shadow-lg dark:shadow-2xl transition-all duration-200">
          
          {/* Brand Logo */}
          <Link href="/" className="font-bold text-lg sm:text-xl text-neutral-900 dark:text-white tracking-tight flex items-center">
            <span>Deep Digital Labs</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-gray-300">
            
            {/* Services with Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/services" 
                className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1 py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-neutral-900 dark:text-[#D4FF00]' : 'text-neutral-400 dark:text-gray-400'}`} />
              </Link>

              {/* Mega Menu Container */}
              {megaMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white/95 dark:bg-[#0F0F11]/95 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-100 dark:border-white/10">
                    
                    {/* Pillar 1: SaaS & Web Development */}
                    <Link 
                      href="/services/saas-web-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-4 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200/60 dark:border-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10">
                          <Layers className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" />
                        </div>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors">
                          SaaS &amp; Web Development
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed pl-8">
                        Scalable software, startup MVPs, and high-performance Next.js websites.
                      </p>
                    </Link>

                    {/* Pillar 2: Mobile App Development */}
                    <Link 
                      href="/services/mobile-app-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-4 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200/60 dark:border-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10">
                          <Smartphone className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" />
                        </div>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors">
                          Mobile App Development
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed pl-8">
                        Fast, beautiful iOS and Android apps with Flutter and React Native.
                      </p>
                    </Link>

                    {/* Pillar 3: Digital Growth & SEO */}
                    <Link 
                      href="/services/digital-growth-seo" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-4 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200/60 dark:border-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10">
                          <TrendingUp className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" />
                        </div>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors">
                          Digital Growth &amp; SEO
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed pl-8">
                        Rank higher on Google, dominate local search, and automate marketing.
                      </p>
                    </Link>

                    {/* Pillar 4: Cloud & Ongoing Support */}
                    <Link 
                      href="/services/cloud-ongoing-support" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-4 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200/60 dark:border-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-black/60 border border-neutral-200 dark:border-white/10">
                          <ShieldCheck className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" />
                        </div>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors">
                          Cloud &amp; Ongoing Support
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed pl-8">
                        AWS/Vercel hosting, security patches, and guaranteed 99.9% uptime.
                      </p>
                    </Link>

                  </div>

                  {/* Mega Menu Footer */}
                  <div className="pt-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500 dark:text-gray-400">
                      <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-[#D4FF00]" />
                      <span>Plain English, High Impact</span>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setMegaMenuOpen(false)}
                      className="text-neutral-900 dark:text-[#D4FF00] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Explore Services Overview</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Insights
            </Link>
            <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Right Actions: Theme Toggle + CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-[#D4FF00] px-5 py-2 rounded-full text-sm font-semibold transition-all active:scale-95 cursor-pointer shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Actions: Theme Toggle + Start + Menu */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-neutral-900 text-white dark:bg-[#D4FF00] dark:text-black px-3.5 py-1.5 rounded-full text-xs font-bold"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-neutral-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-2 p-5 rounded-3xl bg-white dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-2xl text-left space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-neutral-800 dark:text-gray-200 hover:text-neutral-900 dark:hover:text-[#D4FF00]"
              >
                <span>Services &amp; Architecture</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-neutral-900 dark:text-[#D4FF00]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 py-2 space-y-2 border-l border-neutral-200 dark:border-white/10 mt-1">
                  <Link 
                    href="/services/saas-web-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00] py-1"
                  >
                    1. SaaS &amp; Web Development
                  </Link>
                  <Link 
                    href="/services/mobile-app-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00] py-1"
                  >
                    2. Mobile App Development
                  </Link>
                  <Link 
                    href="/services/digital-growth-seo" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00] py-1"
                  >
                    3. Digital Growth &amp; SEO
                  </Link>
                  <Link 
                    href="/services/cloud-ongoing-support" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00] py-1"
                  >
                    4. Cloud &amp; Ongoing Support
                  </Link>
                  <Link 
                    href="/services" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-neutral-900 dark:text-[#D4FF00] font-bold py-1.5 border-t border-neutral-100 dark:border-white/5 mt-1"
                  >
                    All Services Overview →
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00]"
            >
              Work &amp; Case Studies
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00]"
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00]"
            >
              Insights
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-800 dark:text-gray-200 hover:text-black dark:hover:text-[#D4FF00]"
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
