import React from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  MapPin, 
  Mail, 
  ArrowUpRight, 
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

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-[#08090C] border-t border-neutral-200 dark:border-white/[0.08] pt-20 pb-12 relative overflow-hidden text-neutral-800 dark:text-white transition-colors duration-200">
      {/* Background ambient glow in dark mode */}
      <div className="hidden dark:block absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#E8623C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-neutral-200 dark:border-white/[0.08]">
          
          {/* Column 1: Brand & Pune Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#E8623C] to-[#F59E0B] p-[1.5px] shadow-sm shadow-[#E8623C]/20">
                <div className="w-full h-full bg-white dark:bg-[#0E1015] rounded-[6px] flex items-center justify-center">
                  <span className="font-extrabold text-sm text-[#E8623C] tracking-tighter">D</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center leading-none">
                  Deep Digital Labs
                </span>
                <span className="text-[10px] font-mono text-[#E8623C] uppercase tracking-wider mt-1 font-semibold">
                  Technology Builds Tomorrow
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              We build simple, fast, professional websites and apps for small and growing businesses in Pune and beyond — so you look credible online and get more customers, with zero tech jargon.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                <MapPin className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" />
                <span>Pune, Maharashtra 411001, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                <Mail className="w-4 h-4 text-[#E8623C] shrink-0" />
                <a href="mailto:deepdigitallabs@gmail.com" className="hover:text-[#E8623C] transition-colors">
                  deepdigitallabs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="https://wa.me/919175152244" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                  Direct WhatsApp Engineering Line (+91 91751 52244)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                <InstagramIcon className="w-4 h-4 text-pink-500 shrink-0" />
                <a href="https://www.instagram.com/deepdigitallabs/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                  Message on Instagram (@deepdigitallabs)
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Engineering Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-white/50">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/websites-web-apps" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  01 — Web Apps &amp; SaaS
                </Link>
              </li>
              <li>
                <Link href="/services/business-software-saas" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  02 — Custom ERP &amp; Billing
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  03 — Mobile Native (Flutter)
                </Link>
              </li>
              <li>
                <Link href="/services/digital-growth-seo" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  04 — Growth &amp; Programmatic SEO
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-ongoing-support" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  05 — AWS DevSecOps &amp; Support
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/services" className="text-[#E8623C] font-semibold hover:underline inline-flex items-center gap-1">
                  All Capabilities Overview <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-white/50">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Live Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/pune-website-development-company" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Pune Web Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors">
                  Get Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-white/50">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://www.instagram.com/deepdigitallabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/deepdigitallabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#E8623C] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            © 2026 Deep Digital Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 shadow-sm">
            <span>Crafted with precision in Pune 🇮🇳 • Deployed Worldwide 🌍</span>
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
