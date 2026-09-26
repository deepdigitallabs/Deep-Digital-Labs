'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  Smartphone, 
  TrendingUp, 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  ChevronDown, 
  Star, 
  Calendar, 
  Check,
  Globe,
  ShoppingBag,
  Headphones,
  Search,
  Users,
  Laptop,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
import { ProcessTimeline } from '@/components/ui/ProcessTimeline';
import { Marquee } from '@/registry/magicui/marquee';
import { Globe as InteractiveGlobe } from '@/registry/magicui/globe';
import { cn } from '@/lib/utils';
import { CASE_STUDIES } from '@/data/caseStudies';

// Kombai Laurel Leaf SVGs
function LaurelLeft() {
  return (
    <svg viewBox="-168.3 -94.3 90.6 166" className="h-6 w-auto shrink-0 text-[#E8623C] opacity-80" aria-hidden="true">
      <path d="M-80.9 58.78Q-107.95 40.84 -139.24 62.86Q-105.19 80.31 -80.9 58.78M-99.76 42.27Q-122 17.61 -158.61 31.47Q-129.31 57.42 -99.76 42.27M-113.92 21.58Q-129.06 -7.3 -167.26 -3.06Q-145.73 28.78 -113.92 21.58M-122.5 -1.97Q-129.38 -31.21 -164.44 -36.18Q-152.52 -2.84 -122.5 -1.97M-124.94 -26.92Q-124.39 -54.39 -154.32 -66.76Q-151.35 -34.51 -124.94 -26.92M-121.11 -51.69Q-114.43 -75.68 -137.92 -93.3Q-142.58 -64.31 -121.11 -51.69" fill="currentColor" />
      <path d="M-80.9 58.78A100 100 0 0 1 -121.11 -51.69" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg viewBox="-168.3 -94.3 90.6 166" className="h-6 w-auto shrink-0 text-[#E8623C] opacity-80 -scale-x-100" aria-hidden="true">
      <path d="M-80.9 58.78Q-107.95 40.84 -139.24 62.86Q-105.19 80.31 -80.9 58.78M-99.76 42.27Q-122 17.61 -158.61 31.47Q-129.31 57.42 -99.76 42.27M-113.92 21.58Q-129.06 -7.3 -167.26 -3.06Q-145.73 28.78 -113.92 21.58M-122.5 -1.97Q-129.38 -31.21 -164.44 -36.18Q-152.52 -2.84 -122.5 -1.97M-124.94 -26.92Q-124.39 -54.39 -154.32 -66.76Q-151.35 -34.51 -124.94 -26.92M-121.11 -51.69Q-114.43 -75.68 -137.92 -93.3Q-142.58 -64.31 -121.11 -51.69" fill="currentColor" />
      <path d="M-80.9 58.78A100 100 0 0 1 -121.11 -51.69" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

const PUNE_REVIEWS = [
  {
    name: "Rahul B. Kavale",
    username: "@rahulkavale · CA Partner",
    body: "Deep Digital Labs gave our CA firm an exceptional digital presence. The website loads instantly, looks world-class, and our inbound client inquiries grew by 35% in 90 days.",
    img: "https://avatar.vercel.sh/rahul-kavale",
  },
  {
    name: "Operations Director",
    username: "@yashodeep · Agro Tech",
    body: "Moving our agricultural operations and inventory tracking to the web with Deep Digital Labs reduced billing cycle overhead from 3 days to real-time. DDL also built our billing and operational tools that made running day-to-day operations effortless.",
    img: "https://avatar.vercel.sh/yashodeep-agro",
  },
  {
    name: "Logistics Director",
    username: "@trustcarry · Supply Chain",
    body: "Our logistics clients now track their consignments online in real time rather than calling dispatch desks. The website works quickly on any phone.",
    img: "https://avatar.vercel.sh/trust-carry",
  },
  {
    name: "Vikram Deshmukh",
    username: "@vdeshmukh · Retail Tech",
    body: "Clean code on our own infrastructure with zero monthly builder fees. We got a full custom dashboard built in 3 weeks that saves our store team hours every day.",
    img: "https://avatar.vercel.sh/vikram-deshmukh",
  },
  {
    name: "Pradeep Shinde",
    username: "@dairyflow · Dairy SaaS",
    body: "The speed and reliability are unbelievable. 100/100 Core Web Vitals and direct WhatsApp access to the developer who actually built it. Best tech partner in Pune.",
    img: "https://avatar.vercel.sh/pradeep-shinde",
  },
  {
    name: "Anand Kulkarni",
    username: "@anandk · Corporate Law",
    body: "We were skeptical about web agencies because of past bad experiences with WordPress delays. Deep Digital Labs delivered our corporate site ahead of schedule with zero headaches.",
    img: "https://avatar.vercel.sh/anand-kulkarni",
  },
];

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleInstagramMessage = (message: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(message);
      setToastMessage('Inquiry copied to clipboard! Opening Instagram DM...');
      setTimeout(() => setToastMessage(null), 3500);
    }
    window.open('https://ig.me/m/deepdigitallabs', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#E8623C] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION                                                   */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-6 max-w-7xl mx-auto text-center overflow-hidden">
        
        {/* Ambient Cosmic Radial Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#E8623C]/20 via-[#E8623C]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

        {/* Floating Top Proof Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white/70 dark:bg-[#12151D]/80 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8623C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8623C]"></span>
          </span>
          <span className="font-bold text-neutral-900 dark:text-white tracking-tight">Pune&apos;s Trusted Web &amp; App Studio</span>
          <span className="text-neutral-300 dark:text-neutral-600">•</span>
          <span>Pune, Maharashtra</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.14] max-w-4xl mx-auto font-display">
          Pune&apos;s Website &amp; App Development Company
        </h1>

        {/* Plain-Language Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-normal max-w-3xl mx-auto leading-relaxed">
          We build simple, fast, professional websites and apps for small and growing businesses — so you look credible online and get more customers, with zero tech jargon.
        </p>

        {/* Primary & WhatsApp Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          
          <button
            onClick={() => setCallModalOpen(true)}
            className="group relative inline-flex items-center gap-3 bg-[#E8623C] hover:bg-[#F0744E] text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25 hover:shadow-xl hover:shadow-[#E8623C]/35 active:scale-98 cursor-pointer"
          >
            <span className="w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4 text-white" />
            </span>
            <span>Get a Free Website Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20website%20or%20app%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-neutral-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.06] font-semibold text-sm sm:text-base transition-all active:scale-98 text-center"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Chat With Us on WhatsApp</span>
          </a>

        </div>

        {/* Kombai Proof Badge with Laurel Leaves */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <LaurelLeft />
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
            <span><strong className="text-neutral-900 dark:text-white">10+ Systems</strong> Shipped in Production</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span>Fast &amp; Reliable Sites</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span>Direct WhatsApp Support</span>
          </div>
          <LaurelRight />
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CLIENT LOGO BAR: TRUSTED BY PUNE & REGIONAL BUSINESSES                    */}
      {/* ========================================================================= */}
      <section className="py-8 px-6 border-y border-neutral-200/80 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-white/[0.01]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold mb-6">
            Trusted by Growing Businesses Across Pune &amp; India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {[
              { name: 'Rahul B. Kavale & Co.', role: 'CA & Corporate Advisory' },
              { name: 'Yashodeep Agro', role: 'Agri-Tech Commerce' },
              { name: 'Dairy Flow Pro', role: 'Dairy Business Software' },
              { name: 'Trust Carry Logistics', role: 'Fleet & Supply Chain' },
              { name: 'Santosh Phadtare', role: 'Public Initiative' },
              { name: 'Sangola Vikas Sankalp', role: 'Civic Development' },
              { name: 'Pasarnikar Payal Amit', role: 'Brand & Media Platform' }
            ].map((client) => (
              <div
                key={client.name}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] flex flex-col items-center shadow-xs hover:border-[#E8623C]/50 transition-all select-none"
              >
                <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                  {client.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHAT WE DO (IN PLAIN WORDS)                                    */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
            Simple, high-quality digital solutions for your business.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Everything you need to look credible online, get more customers, and streamline your operations — without any technical headache.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Service 1: Business Websites */}
          <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Globe className="w-full h-full stroke-[1.2]" />
            </div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                Business Websites
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                A clean, professional website that tells people who you are and what you offer — fast-loading and great on mobile.
              </p>
            </div>
            <div className="relative z-10 pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C] shrink-0" />
              <span>Mobile-first &amp; fast-loading</span>
            </div>
          </div>

          {/* Service 2: Online Stores & Booking Tools */}
          <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <ShoppingBag className="w-full h-full stroke-[1.2]" />
            </div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                Online Stores &amp; Booking Tools
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Take orders, manage bookings, or track customers online with a simple tool built for how you work.
              </p>
            </div>
            <div className="relative z-10 pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C] shrink-0" />
              <span>UPI, cards &amp; easy tracking</span>
            </div>
          </div>

          {/* Service 3: Mobile Apps */}
          <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Smartphone className="w-full h-full stroke-[1.2]" />
            </div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                Mobile Apps
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Your own app on Android and iPhone, designed and built end-to-end for your customers or team.
              </p>
            </div>
            <div className="relative z-10 pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C] shrink-0" />
              <span>Android &amp; iOS compatible</span>
            </div>
          </div>

          {/* Service 4: Getting Found on Google (SEO) */}
          <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Search className="w-full h-full stroke-[1.2]" />
            </div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                Getting Found on Google (SEO)
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                We help your website show up when people in Pune (and beyond) search for what you do.
              </p>
            </div>
            <div className="relative z-10 pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C] shrink-0" />
              <span>Local Pune search rankings</span>
            </div>
          </div>

          {/* Service 5: Ongoing Support */}
          <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-4 md:col-span-2 lg:col-span-2">
            <div className="absolute -right-4 -bottom-4 w-36 h-36 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-emerald-500/[0.10] dark:group-hover:text-emerald-500/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Headphones className="w-full h-full stroke-[1.2]" />
            </div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                Ongoing Support
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                After launch, we stay on — fixing issues, adding pages, keeping things running, and ensuring your digital presence stays fast and secure.
              </p>
            </div>
            <div className="relative z-10 pt-2 flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Direct WhatsApp developer access · Fast response</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: HOW WE HELP YOU (BENEFITS FOR BUSINESS OWNERS)                  */}
      {/* ========================================================================= */}
      <section id="why-us" className="py-20 px-6 bg-neutral-50/50 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              How We Help You
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Why business owners choose Deep Digital Labs
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              We remove the headache of technology so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. More customers finding you online */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md hover:border-[#E8623C]/40 transition-all flex flex-col justify-between">
              <div className="absolute -right-4 -bottom-4 w-28 h-28 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Users className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-2.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  More customers finding you online
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Rank higher on local Pune searches and convert online visitors into direct calls and paying customers.
                </p>
              </div>
            </div>

            {/* 2. Works properly on phones */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md hover:border-[#E8623C]/40 transition-all flex flex-col justify-between">
              <div className="absolute -right-4 -bottom-4 w-28 h-28 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Smartphone className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-2.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  A website that works properly on phones
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Over 70% of your visitors are on mobile. Your website looks flawless and loads instantly on every screen.
                </p>
              </div>
            </div>

            {/* 3. No confusing tech talk */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md hover:border-[#E8623C]/40 transition-all flex flex-col justify-between">
              <div className="absolute -right-4 -bottom-4 w-28 h-28 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <MessageSquare className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-2.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  No confusing tech talk
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We explain everything in plain language. No buzzwords, no complicated jargon — just clear explanations and honest advice.
                </p>
              </div>
            </div>

            {/* 4. Fast, reliable sites */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md hover:border-[#E8623C]/40 transition-all flex flex-col justify-between">
              <div className="absolute -right-4 -bottom-4 w-28 h-28 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-[#E8623C]/[0.10] dark:group-hover:text-[#E8623C]/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Zap className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-2.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Fast, reliable sites that don&apos;t crash or lag
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  No slow-loading WordPress plugins or broken themes. Modern, lightweight engineering that keeps your site online 24/7.
                </p>
              </div>
            </div>

            {/* 5. Direct WhatsApp access */}
            <div className="relative overflow-hidden group p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between lg:col-span-2">
              <div className="absolute -right-3 -bottom-5 w-32 h-32 text-neutral-900/[0.04] dark:text-white/[0.04] group-hover:text-emerald-500/[0.10] dark:group-hover:text-emerald-500/[0.10] pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <PhoneCall className="w-full h-full stroke-[1.2]" />
              </div>
              <div className="relative z-10 space-y-2.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Direct WhatsApp access to your actual developer
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                  No call centers, no ticketing portals, and no waiting on hold. You chat directly with the developer building and maintaining your site.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR PROCESS — STORY-DRIVEN JOURNEY TIMELINE                    */}
      {/* ========================================================================= */}
      <ProcessTimeline onOpenConsultation={() => setCallModalOpen(true)} />

      {/* ========================================================================= */}
      {/* SECTION 5: REAL WORK & CASE STUDIES                                       */}
      {/* ========================================================================= */}
      <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
              Real projects. Real business results.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              See how we&apos;ve helped CA firms, agro businesses, logistics companies, and civic organizations look professional online.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E8623C] hover:underline self-start sm:self-auto group"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              className="rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Hero Screenshot Header */}
                <div className="h-48 sm:h-52 relative overflow-hidden bg-neutral-100 dark:bg-black/60 border-b border-neutral-200 dark:border-white/[0.08]">
                  <img
                    src={study.heroImage}
                    alt={`${study.client} website designed by Deep Digital Labs`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/10 font-bold">
                      {study.industry}
                    </span>
                    {study.liveUrl && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/90 text-white flex items-center gap-1 font-semibold backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live Site
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Location & Category */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    <span>{study.location}</span>
                    <span className="truncate max-w-[150px]">{study.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-snug">
                    {study.client}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {study.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] flex items-center gap-1"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-colors"
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CLIENT TESTIMONIALS (MAGIC UI MARQUEE)                         */}
      {/* ========================================================================= */}
      <section className="py-20 bg-neutral-50/50 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
            What Pune business owners say about us.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Real feedback from founders, CAs, and operations directors who run their businesses on our software.
          </p>
        </div>

        {/* Magic UI Double Marquee Track */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
          <Marquee pauseOnHover className="[--duration:30s]">
            {PUNE_REVIEWS.slice(0, 3).map((review) => (
              <figure
                key={review.name}
                className={cn(
                  "relative h-full w-80 sm:w-96 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300",
                  // light styles
                  "border-neutral-200/80 bg-white hover:border-[#E8623C]/50 hover:shadow-lg hover:shadow-[#E8623C]/5",
                  // dark styles
                  "dark:border-white/[0.08] dark:bg-[#12151D] dark:hover:border-[#E8623C]/50 dark:hover:shadow-lg dark:hover:shadow-[#E8623C]/10"
                )}
              >
                <div className="flex flex-row items-center gap-3">
                  <img
                    className="rounded-full ring-2 ring-[#E8623C]/20 shrink-0"
                    width={38}
                    height={38}
                    alt={review.name}
                    src={review.img}
                  />
                  <div className="flex flex-col">
                    <figcaption className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                      {review.name}
                    </figcaption>
                    <p className="text-xs font-mono text-[#E8623C]">{review.username}</p>
                  </div>
                </div>
                <blockquote className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;{review.body}&rdquo;
                </blockquote>
              </figure>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {PUNE_REVIEWS.slice(3, 6).map((review) => (
              <figure
                key={review.name}
                className={cn(
                  "relative h-full w-80 sm:w-96 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300",
                  // light styles
                  "border-neutral-200/80 bg-white hover:border-[#E8623C]/50 hover:shadow-lg hover:shadow-[#E8623C]/5",
                  // dark styles
                  "dark:border-white/[0.08] dark:bg-[#12151D] dark:hover:border-[#E8623C]/50 dark:hover:shadow-lg dark:hover:shadow-[#E8623C]/10"
                )}
              >
                <div className="flex flex-row items-center gap-3">
                  <img
                    className="rounded-full ring-2 ring-[#E8623C]/20 shrink-0"
                    width={38}
                    height={38}
                    alt={review.name}
                    src={review.img}
                  />
                  <div className="flex flex-col">
                    <figcaption className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                      {review.name}
                    </figcaption>
                    <p className="text-xs font-mono text-[#E8623C]">{review.username}</p>
                  </div>
                </div>
                <blockquote className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;{review.body}&rdquo;
                </blockquote>
              </figure>
            ))}
          </Marquee>

          {/* Left and right gradient fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-neutral-50 dark:from-[#0A0B0E] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-neutral-50 dark:from-[#0A0B0E] to-transparent z-10" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: PACKAGES (RENAMED FOR CLARITY)                                 */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Transparent Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
            Clear packages. Zero hidden costs.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Choose the right model for where your business is today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Package 1: Starter Website (formerly MVP Sprint) */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#E8623C] uppercase tracking-wider font-bold">Small Business &amp; Pro</span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">Starter Website</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                A simple, professional website for a small business or professional, live in 2–3 weeks.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Custom Design (No generic templates)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Fast-Loading &amp; Mobile-Friendly</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Contact Forms &amp; Direct WhatsApp Button</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Google Search &amp; Local SEO Setup</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100% Code &amp; Domain Ownership</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2">
              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs%2C%20I%20want%20to%20get%20started%20with%20the%20Starter%20Website%20package%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-xs font-bold text-neutral-900 dark:text-white transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>Get Started With a Website</span>
              </a>
              <button
                type="button"
                onClick={() => handleInstagramMessage("Hi Deep Digital Labs, I want to get started with the Starter Website package for my business.")}
                className="w-full py-1 text-[11px] font-medium text-neutral-500 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                <span>Or message on Instagram (@deepdigitallabs)</span>
              </button>
            </div>
          </div>

          {/* Package 2: Growth Partner (formerly Dedicated Pod) */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#151922] border-2 border-[#E8623C] shadow-xl shadow-[#E8623C]/15 flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#E8623C] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
              Most Popular
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#E8623C] uppercase tracking-wider font-bold">Monthly Partnership</span>
              <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white">Growth Partner</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Ongoing website/app work with one developer who knows your business, on a monthly plan.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-200">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0" /> Direct WhatsApp Line With Your Developer</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0" /> Regular Updates &amp; New Page Additions</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0" /> Online Stores, Booking &amp; Custom Features</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0" /> Speed &amp; Security Maintenance</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#E8623C] shrink-0" /> Zero Ticket Portals or Delays</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2">
              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs%2C%20I%20want%20to%20choose%20the%20Growth%20Partner%20monthly%20plan%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white text-xs font-bold transition-all shadow-md shadow-[#E8623C]/30 flex items-center justify-center gap-2 group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
                <span>Choose Growth Partner</span>
              </a>
              <button
                type="button"
                onClick={() => handleInstagramMessage("Hi Deep Digital Labs, I want to choose the Growth Partner monthly plan for my business.")}
                className="w-full py-1 text-[11px] font-medium text-neutral-600 hover:text-pink-600 dark:text-neutral-300 dark:hover:text-pink-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                <span>Or message on Instagram (@deepdigitallabs)</span>
              </button>
            </div>
          </div>

          {/* Package 3: Custom Systems (formerly Enterprise Modernization) */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#E8623C] uppercase tracking-wider font-bold">Established Business</span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">Custom Systems</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                For established businesses that need bigger tools, integrations, or a complete rebuild.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Custom Internal Portals &amp; Dashboards</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Multi-Branch &amp; Inventory Management</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Website Rebuilds &amp; Speed Overhauls</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Android &amp; iPhone App Integration</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Dedicated Technical SLA &amp; Support</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2">
              <a
                href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs%2C%20I%20want%20to%20discuss%20Custom%20Systems%20%26%20Software%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-xs font-bold text-neutral-900 dark:text-white transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>Discuss Custom Systems</span>
              </a>
              <button
                type="button"
                onClick={() => handleInstagramMessage("Hi Deep Digital Labs, I want to discuss Custom Systems & Software for my business.")}
                className="w-full py-1 text-[11px] font-medium text-neutral-500 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                <span>Or message on Instagram (@deepdigitallabs)</span>
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: FAQ — FILLED IN AND SIMPLIFIED                                 */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
            Questions? We&apos;ve got answers.
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'Do I own my website and code?',
              a: 'Yes, completely. The code, design, and domain are yours from day one — nothing is locked to us.'
            },
            {
              q: 'Why choose you over a template or a freelancer?',
              a: 'Your site is designed specifically for your business, not a copy-paste template — and you talk directly to the person building it, not a sales rep.'
            },
            {
              q: 'How do we stay in touch during the project?',
              a: 'Direct WhatsApp with your developer. No support tickets, no waiting on hold.'
            },
            {
              q: 'Can you fix or rebuild a website I already have?',
              a: 'Yes — we can improve your current site or rebuild it from scratch if that’s simpler.'
            },
            {
              q: 'Where are you based?',
              a: 'Pune, Maharashtra — working with businesses across India and abroad.'
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] transition-all cursor-pointer"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                  {faq.q}
                </h3>
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180 text-[#E8623C]' : ''}`} />
              </div>
              {openFaq === idx && (
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-white/[0.04] pt-3 animate-in fade-in duration-150">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: BOTTOM HIGH-IMPACT CTA BANNER                                  */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden text-center">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#E8623C]/25 to-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 dark:bg-[#0E1118] border border-neutral-800 dark:border-white/[0.08] text-white shadow-2xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Get Started Today
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-display max-w-2xl mx-auto leading-tight">
            Ready to get more customers online?
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Let&apos;s build a simple, fast, professional website or app for your business. Chat directly with your developer today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/30 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get a Free Website Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20website%20or%20app%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-neutral-700 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 text-xs font-mono text-neutral-500">
            Pune, Maharashtra · direct developer access · 100% code &amp; domain ownership
          </div>
        </div>

      </section>

      {/* Discovery Call Modal */}
      {callModalOpen && (
        <DiscoveryCallModal
          isOpen={callModalOpen}
          onClose={() => setCallModalOpen(false)}
        />
      )}

      {/* Floating Action Toast for Instagram Clipboard Copy */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold border border-neutral-800 dark:border-neutral-200 animate-in fade-in slide-in-from-bottom-5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
