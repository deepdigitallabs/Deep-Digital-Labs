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
    <footer className="bg-neutral-50 dark:bg-[#080A0E] border-t border-neutral-200 dark:border-white/10 pt-14 pb-12 relative text-neutral-800 dark:text-neutral-200 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-neutral-200 dark:border-white/10">
          
          {/* Brand Info (4 Columns) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center group" aria-label="Deep Digital Labs Home">
              <Image 
                src="/images/logo-full.png" 
                alt="Deep Digital Labs" 
                width={600} 
                height={203} 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              We build websites, custom business software, and mobile apps for businesses in Pune and across India.
            </p>

            {/* Quick Contact & Location */}
            <div className="space-y-2 pt-1 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8623C] shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8623C] shrink-0" />
                <a href="tel:+917756063128" className="hover:text-[#E8623C] transition-colors font-medium">
                  +91 77560 63128
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8623C] shrink-0" />
                <a href="mailto:deepdigitallabs@gmail.com" className="hover:text-[#E8623C] transition-colors font-medium">
                  deepdigitallabs@gmail.com
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8623C]" />
                You own 100% of code
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                <Zap className="w-3.5 h-3.5 text-emerald-500" />
                Fast on mobile
              </span>
            </div>
          </div>

          {/* 1. Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/websites-web-apps" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/services/business-software-saas" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Custom Business Software
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Mobile Apps (Android &amp; iOS)
                </Link>
              </li>
              <li>
                <Link href="/services/chat-bot-development" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  WhatsApp &amp; AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/services/digital-growth-seo" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Local SEO &amp; Google Maps
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-website-design-pune" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  E-Commerce Websites
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Company */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Solutions by Industry
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5 block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white font-mono">
              Talk to Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors py-0.5 font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp: +91 77560 63128</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+917756063128" 
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5"
                >
                  <Phone className="w-4 h-4 text-[#E8623C]" />
                  <span>Call: +91 77560 63128</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:deepdigitallabs@gmail.com" 
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5"
                >
                  <Mail className="w-4 h-4 text-[#E8623C]" />
                  <span>deepdigitallabs@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Deep+Digital+Labs+Pune" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-amber-500 dark:text-neutral-400 dark:hover:text-amber-400 transition-colors py-0.5"
                >
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Pune Studio (5.0 ★ Google)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/deepdigitallabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-[#E8623C] dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors py-0.5"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/deepdigitallabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-pink-500 dark:text-neutral-400 dark:hover:text-pink-400 transition-colors py-0.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                  <span>Instagram: @deepdigitallabs</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="text-center sm:text-left">
            © 2026 Deep Digital Labs. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-[11px] font-mono">
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
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C] border border-neutral-200 dark:border-white/10 transition-all cursor-pointer font-medium text-xs"
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
