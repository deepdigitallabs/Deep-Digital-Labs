import React from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  MapPin, 
  Clock, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck,
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
    <footer className="bg-neutral-50 dark:bg-[#050505] border-t border-neutral-200 dark:border-white/10 pt-20 pb-12 relative overflow-hidden text-neutral-800 dark:text-white transition-colors duration-200">
      {/* Background ambient glow in dark mode */}
      <div className="hidden dark:block absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#D4FF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 5-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-neutral-200 dark:border-white/10">
          
          {/* Column 1: Brand & Pune Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-white/10 border border-neutral-300 dark:border-white/15 flex items-center justify-center group-hover:border-neutral-900 dark:group-hover:border-[#D4FF00] transition-all">
                <Terminal className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center">
                Deep Digital Labs
              </span>
            </Link>

            <p className="text-sm text-neutral-600 dark:text-gray-400 max-w-md leading-relaxed">
              We architect, engineer, and scale high-performance digital products for ambitious global brands. Full-cycle engineering, headless architectures, and dedicated cloud infrastructure.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-neutral-700 dark:text-[#D4FF00] shrink-0 mt-0.5" />
                <span>Level 5, Amar Paradigm, Baner-Hinjawadi Tech Corridor, Pune, MH 411045, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-gray-400">
                <Clock className="w-4 h-4 text-neutral-700 dark:text-[#D4FF00] shrink-0" />
                <span>IST (UTC+5:30) • Active 16-Hour Overlap with US, UK &amp; APAC</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-gray-400">
                <Mail className="w-4 h-4 text-neutral-700 dark:text-[#D4FF00] shrink-0" />
                <a href="mailto:deepdigitallabs@gmail.com" className="hover:text-neutral-900 dark:hover:text-[#D4FF00] transition-colors">
                  deepdigitallabs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-gray-400">
                <MessageSquare className="w-4 h-4 text-neutral-700 dark:text-[#D4FF00] shrink-0" />
                <a href="https://wa.me/919823012345" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-[#D4FF00] transition-colors">
                  +91 98230 12345 (WhatsApp / Slack)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-gray-400">
                <InstagramIcon className="w-4 h-4 text-pink-500 shrink-0" />
                <a href="https://www.instagram.com/deepdigitallabs/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
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
                <Link href="/services/websites-web-apps" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  01 — Websites &amp; Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services/business-software-saas" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  02 — Business Software
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  03 — Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/digital-growth-seo" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  04 — Digital Growth &amp; SEO
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-ongoing-support" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  05 — Cloud &amp; Technical Support
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/services" className="text-neutral-900 dark:text-[#D4FF00] font-semibold hover:underline inline-flex items-center gap-1">
                  All Services Overview <ArrowUpRight className="w-3.5 h-3.5" />
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
                <Link href="/about" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about#pune-advantage" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  Why Pune Engineering?
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors">
                  Contact &amp; Scoping
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & IP Guarantee */}
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
                  className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/deep-digital-labs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/deepdigitallabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/deepdigitallabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://dribbble.com/deepdigitallabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-[#D4FF00] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm7.93 9.07c-.41-.03-2.48-.15-4.75.76-.05-.12-.09-.24-.14-.37-.4-1.01-.86-2.01-1.38-2.99 2.71-1.06 4.96-.32 5.53-.13.3.82.52 1.74.74 2.73zm-3.23-4.5c-.48-.15-2.28-.75-4.66.19-.78-1.42-1.68-2.73-2.66-3.9 1.34-.56 2.82-.86 4.39-.86 1.13 0 2.2.18 3.2.53-.09.34-.18.73-.27 1.04zm-8.87-2.61c.96 1.13 1.83 2.41 2.6 3.8-2.12.63-4.14.65-4.35.65-.01-.06-.01-.13-.01-.2 0-1.63.62-3.12 1.68-4.25h.08zm-3.79 5.82c.26 0 2.84 0 5.25-.75.49.95.93 1.92 1.31 2.89-3.25 1.02-6.09 3.28-6.4 3.54-.31-1.1-.48-2.27-.48-3.48 0-.74.08-1.46.23-2.15l.09-.05zm2.74 8.71c.28-.24 2.8-2.24 5.92-3.32.9 2.37 1.34 4.54 1.48 5.3-.97.43-2.04.68-3.17.68-1.6 0-3.08-.47-4.32-1.29l.09-1.37zm8.81 1.25c-.14-.7-.57-2.76-1.42-5.06 2.14-.91 4.07-.8 4.29-.78-.17 2.49-1.32 4.67-3.05 5.94l.18-.1z"/></svg>
                  <span>Dribbble</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-gray-400">
          <div>
            © 2026 Deep Digital Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-300 shadow-sm">
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
