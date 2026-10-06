'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Mail, 
  MessageSquare,
  ArrowUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Phone
} from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-50 dark:bg-[#08090C] border-t border-neutral-200 dark:border-white/[0.08] pt-14 pb-12 relative overflow-hidden text-neutral-800 dark:text-white transition-colors duration-200">
      {/* Spectrum Accent Top Border */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D2FF] via-[#7C3AED] via-[#EC4899] via-[#E8623C] to-transparent opacity-80" />

      {/* Multi-Spectrum Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-gradient-to-br from-[#7C3AED]/10 via-[#EC4899]/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/4 w-[400px] h-[220px] bg-gradient-to-tr from-[#00D2FF]/8 via-[#E8623C]/8 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer Action Ribbon (Conversion UX) */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for projects • Typical reply &lt; 2 hrs</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
              Ready to engineer your next digital solution?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
              Turn your business goals into high-performance web applications, custom business software, or mobile apps with direct Pune engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20would%20like%20to%20discuss%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#E8623C] to-[#F59E0B] hover:opacity-95 text-white shadow-md shadow-[#E8623C]/20 transition-all hover:scale-[1.02] active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 transition-all hover:scale-[1.02] active:scale-98"
            >
              <span>Get Free Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-neutral-200 dark:border-white/[0.08]">
          
          {/* Brand Info (4 Columns) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Deep Digital Labs Home">
              <Image 
                src="/images/logo-single.png" 
                alt="Deep Digital Labs" 
                width={1536} 
                height={1024} 
                unoptimized
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
                  Deep<span className="text-[#E8623C]">Digital</span>Labs
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-semibold tracking-wide">
                  Build <span className="text-[#E8623C] font-bold">.</span> Grow <span className="text-[#E8623C] font-bold">.</span> Go Digital<span className="text-[#E8623C] font-bold">.</span>
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              High-performance business websites, custom operational software, and mobile apps engineered for growing businesses in Pune and across India.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#E8623C] shrink-0" />
                <span>Pune, Maharashtra 411001, India</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href="tel:+919175152244" className="hover:text-[#E8623C] transition-colors">
                  +91 91751 52244
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-[11px] font-medium text-neutral-600 dark:text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                100% Code Ownership
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-[11px] font-medium text-neutral-600 dark:text-neutral-400">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Sub-Second Speed
              </span>
            </div>
          </div>

          {/* 1. Services */}
          <div className="col-span-1 lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/websites-web-apps" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Websites &amp; Web Apps</span>
                </Link>
              </li>
              <li>
                <Link href="/services/business-software-saas" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Business Software &amp; SaaS</span>
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Mobile Apps</span>
                </Link>
              </li>
              <li>
                <Link href="/services/chat-bot-development" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">AI Chatbots &amp; Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-growth-seo" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Digital Growth &amp; SEO</span>
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-website-design-pune" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Pune E-Commerce</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Industries & Solutions */}
          <div className="col-span-1 lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono flex items-center gap-1.5">
              <span>Industries</span>
              <Sparkles className="w-3 h-3 text-[#E8623C]" />
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/industries" className="group inline-flex items-center gap-1.5 font-semibold text-[#E8623C] hover:underline py-0.5">
                  <span>50+ Solutions Directory</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Business Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">CA &amp; Financial Firms</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Real Estate Portals</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Clinics &amp; Healthcare</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Manufacturing &amp; Logistics</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div className="col-span-1 lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono">
              Company
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Our Work &amp; Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Why Choose Us</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Insights &amp; Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/pune-website-development-company" className="group inline-flex items-center gap-1 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5">
                  <span className="group-hover:translate-x-0.5 transition-transform">Pune Development Center</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Connect & Direct Channels */}
          <div className="col-span-1 lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono">
              Connect
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-neutral-600 hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors py-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:deepdigitallabs@gmail.com" 
                  className="group inline-flex items-center gap-2 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E8623C] group-hover:scale-110 transition-transform" />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/deepdigitallabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-neutral-600 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-400 transition-colors py-0.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/deepdigitallabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors py-0.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Back to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="text-center sm:text-left">
            © 2026 Deep Digital Labs. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 text-[11px] font-mono shadow-xs">
            <span>Crafted in Pune • Built for Indian Scale</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1">
              Sitemap
            </Link>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] dark:hover:text-[#E8623C] border border-neutral-200 dark:border-white/10 transition-all cursor-pointer font-medium text-xs active:scale-95"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

