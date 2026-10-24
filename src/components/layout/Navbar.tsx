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
        <div className="flex items-center justify-between px-5 sm:px-6 py-2.5 bg-white/95 backdrop-blur-xl border border-neutral-200/90 rounded-full shadow-sm transition-all duration-150">
          
          {/* Brand Logo - Full Logo on clean background */}
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
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#1B1F4B]">
            <Link href="/" className="hover:text-[#E8338C] transition-colors py-1">
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
                className="hover:text-[#E8338C] transition-colors flex items-center gap-1 py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#E8338C]' : 'text-neutral-400'}`} />
              </Link>

              {/* Mega Menu Container */}
              {megaMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-white border border-neutral-200/90 rounded-2xl p-5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pb-4 border-b border-neutral-100">
                    
                    {/* 1. Websites & Web Apps */}
                    <Link 
                      href="/services/websites-web-apps" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F7F5FF] transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-2 rounded-lg bg-pink-50 text-[#E8338C] shrink-0 group-hover:scale-105 transition-transform">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors leading-tight">
                          Websites &amp; Web Apps
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4B5070] leading-relaxed pl-8">
                        Fast business portals, stores &amp; modern apps.
                      </p>
                    </Link>

                    {/* 2. Business Software */}
                    <Link 
                      href="/services/business-software-saas" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F7F5FF] transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-2 rounded-lg bg-purple-50 text-[#6A3DE8] shrink-0 group-hover:scale-105 transition-transform">
                          <Layers className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1B1F4B] group-hover:text-[#6A3DE8] transition-colors leading-tight">
                          Custom ERP &amp; Software
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4B5070] leading-relaxed pl-8">
                        Billing, inventory, CRM &amp; operations tools.
                      </p>
                    </Link>

                    {/* 3. Mobile Apps */}
                    <Link 
                      href="/services/mobile-app-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F7F5FF] transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-2 rounded-lg bg-orange-50 text-[#FF7A1A] shrink-0 group-hover:scale-105 transition-transform">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1B1F4B] group-hover:text-[#FF7A1A] transition-colors leading-tight">
                          Mobile Applications
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4B5070] leading-relaxed pl-8">
                        High-performance iOS &amp; Android apps.
                      </p>
                    </Link>

                    {/* 4. Digital Growth & SEO */}
                    <Link 
                      href="/services/digital-growth-seo" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F7F5FF] transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-2 rounded-lg bg-amber-50 text-[#D97706] shrink-0 group-hover:scale-105 transition-transform">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1B1F4B] group-hover:text-[#D97706] transition-colors leading-tight">
                          Growth &amp; SEO
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4B5070] leading-relaxed pl-8">
                        Top Google rankings &amp; buyer leads.
                      </p>
                    </Link>

                    {/* 5. AI & Automation */}
                    <Link 
                      href="/services/chat-bot-development" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl hover:bg-[#F7F5FF] transition-all group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-2 rounded-lg bg-emerald-50 text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                          <Bot className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1B1F4B] group-hover:text-[#25D366] transition-colors leading-tight">
                          AI &amp; WhatsApp Bots
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4B5070] leading-relaxed pl-8">
                        Smart chatbots, auto-replies &amp; workflows.
                      </p>
                    </Link>

                    {/* 6. All Capabilities */}
                    <Link 
                      href="/#services" 
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-xl bg-gradient-to-br from-[#F7F5FF] to-[#FFF5F8] hover:from-[#EFEAFF] hover:to-[#FFEBF2] transition-all group border border-[#E8338C]/20 shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-[#FF7A1A] via-[#E8338C] to-[#6A3DE8] text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors leading-tight">
                          All Services &amp; Pricing
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4B5070] leading-relaxed pl-8">
                        Explore full deliverables and packages.
                      </p>
                    </Link>

                  </div>

                  {/* Mega Menu Footer */}
                  <div className="pt-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3 text-[#4B5070]">
                      <span className="text-xs font-semibold text-neutral-400">Quick Links:</span>
                      <Link
                        href="/case-studies"
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-[#1B1F4B] hover:text-[#E8338C] font-semibold transition-colors"
                      >
                        Client Case Studies
                      </Link>
                      <span className="text-neutral-300">•</span>
                      <Link
                        href="/ecommerce-website-design-pune"
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-[#1B1F4B] hover:text-[#E8338C] font-semibold transition-colors"
                      >
                        Pune E-Commerce
                      </Link>
                    </div>
                    <Link
                      href="/#services"
                      onClick={() => setMegaMenuOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8338C] hover:text-[#c42372] transition-colors"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="hover:text-[#E8338C] transition-colors py-1">
              Work
            </Link>
            <Link href="/about" className="hover:text-[#E8338C] transition-colors py-1">
              About
            </Link>
            <Link href="/blog" className="hover:text-[#E8338C] transition-colors py-1">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#E8338C] transition-colors py-1">
              Contact
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20have%20an%20inquiry%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1B1F4B] hover:text-[#25D366] hover:bg-emerald-50 transition-colors border border-transparent hover:border-[#25D366]/20"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden xl:inline">+91 77560 63128</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] hover:opacity-95 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#F0367A]/20 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
              className="p-1.5 rounded-lg text-[#1B1F4B] hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-3xl bg-white border border-neutral-200/90 shadow-xl text-left space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
            >
              Home
            </Link>

            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#E8338C]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 py-2 space-y-2 border-l-2 border-[#E8338C]/30 mt-1">
                  <Link 
                    href="/services/websites-web-apps" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-[#4B5070] hover:text-[#E8338C] py-0.5"
                  >
                    Web Apps &amp; SaaS
                  </Link>
                  <Link 
                    href="/services/business-software-saas" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-[#4B5070] hover:text-[#E8338C] py-0.5"
                  >
                    Custom ERP &amp; Software
                  </Link>
                  <Link 
                    href="/services/mobile-app-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-[#4B5070] hover:text-[#E8338C] py-0.5"
                  >
                    Mobile Applications
                  </Link>
                  <Link 
                    href="/services/digital-growth-seo" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-[#4B5070] hover:text-[#E8338C] py-0.5"
                  >
                    Digital Growth &amp; SEO
                  </Link>
                  <Link 
                    href="/services/chat-bot-development" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-medium text-[#4B5070] hover:text-[#E8338C] py-0.5"
                  >
                    AI &amp; Automation
                  </Link>
                  <Link 
                    href="/#services" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-semibold text-[#E8338C] hover:underline pt-1"
                  >
                    All Services &amp; Packages →
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm active:scale-98"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
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
