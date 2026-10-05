import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Mail, 
  MessageSquare
} from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-[#08090C] border-t border-neutral-200 dark:border-white/[0.08] pt-16 pb-12 relative overflow-hidden text-neutral-800 dark:text-white transition-colors duration-200">
      {/* Spectrum Accent Top Border */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D2FF] via-[#7C3AED] via-[#EC4899] via-[#E8623C] to-transparent opacity-80" />

      {/* Multi-Spectrum Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-gradient-to-br from-[#7C3AED]/10 via-[#EC4899]/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/4 w-[400px] h-[220px] bg-gradient-to-tr from-[#00D2FF]/8 via-[#E8623C]/8 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-neutral-200 dark:border-white/[0.08]">
          
          {/* Brand Info (4 Columns) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Deep Digital Labs Home">
              <Image 
                src="/images/logo-single.png" 
                alt="Deep Digital Labs" 
                width={1536} 
                height={1024} 
                unoptimized
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
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
              High-performance business websites, custom operational software, and mobile apps engineered for growing businesses in Pune and India.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#E8623C] shrink-0" />
              <span>Pune, Maharashtra 411001, India</span>
            </div>
          </div>

          {/* 1. Services */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/websites-web-apps" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/services/business-software-saas" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Business Software
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/chat-bot-development" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Company */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Locations */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono">
              Locations
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/pune-website-development-company" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Pune
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  India
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white/80 font-mono">
              Contact
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:deepdigitallabs@gmail.com" 
                  className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E8623C]" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/deepdigitallabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-400 transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/deepdigitallabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            © 2026 Deep Digital Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 text-[11px] font-mono">
            <span>Crafted in Pune • Built for Indian Scale</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
