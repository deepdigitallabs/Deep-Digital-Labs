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
  Search,
  Users,
  Headphones,
  Laptop,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';
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

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [caseFilter, setCaseFilter] = useState<'All' | 'Business' | 'Agri' | 'Civic'>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredCaseStudies = caseFilter === 'All' 
    ? CASE_STUDIES 
    : caseFilter === 'Business'
    ? CASE_STUDIES.filter(c => c.industry === 'Corporate' || c.industry === 'Logistics')
    : caseFilter === 'Agri'
    ? CASE_STUDIES.filter(c => c.industry === 'Agri-Tech')
    : CASE_STUDIES.filter(c => c.industry === 'Civic Tech' || c.industry === 'Personal Branding');

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
          <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
              Business Websites
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A clean, professional website that tells people who you are and what you offer — fast-loading and great on mobile.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>Mobile-first &amp; fast-loading</span>
            </div>
          </div>

          {/* Service 2: Online Stores & Booking Tools */}
          <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
              Online Stores &amp; Booking Tools
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Take orders, manage bookings, or track customers online with a simple tool built for how you work.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>UPI, cards &amp; easy tracking</span>
            </div>
          </div>

          {/* Service 3: Mobile Apps */}
          <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C]">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
              Mobile Apps
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Your own app on Android and iPhone, designed and built end-to-end for your customers or team.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>Android &amp; iOS compatible</span>
            </div>
          </div>

          {/* Service 4: Getting Found on Google (SEO) */}
          <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
              Getting Found on Google (SEO)
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              We help your website show up when people in Pune (and beyond) search for what you do.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#E8623C] font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>Local Pune search rankings</span>
            </div>
          </div>

          {/* Service 5: Ongoing Support */}
          <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all space-y-4 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 border border-[#E8623C]/20 flex items-center justify-center text-[#E8623C]">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
              Ongoing Support
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              After launch, we stay on — fixing issues, adding pages, keeping things running, and ensuring your digital presence stays fast and secure.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
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
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                More customers finding you online
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Rank higher on local Pune searches and convert online visitors into direct calls and paying customers.
              </p>
            </div>

            {/* 2. Works properly on phones */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                A website that works properly on phones
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Over 70% of your visitors are on mobile. Your website looks flawless and loads instantly on every screen.
              </p>
            </div>

            {/* 3. No confusing tech talk */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                No confusing tech talk
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We explain everything in plain language. No buzzwords, no complicated jargon — just clear explanations and honest advice.
              </p>
            </div>

            {/* 4. Fast, reliable sites */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Fast, reliable sites that don&apos;t crash or lag
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                No slow-loading WordPress plugins or broken themes. Modern, lightweight engineering that keeps your site online 24/7.
              </p>
            </div>

            {/* 5. Direct WhatsApp access */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md space-y-3 lg:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Direct WhatsApp access to your actual developer
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                No call centers, no ticketing portals, and no waiting on hold. You chat directly with the developer building and maintaining your site.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR PROCESS (PLAIN-ENGLISH VERSION)                             */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
            From idea to launch in 4 simple steps.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            A transparent, collaborative workflow where you are in control at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 4 Numbered Steps */}
          <div className="lg:col-span-5 space-y-3">
            {[
              {
                id: 0,
                num: '01',
                title: 'Tell us about your business',
                desc: 'A quick call or WhatsApp chat about what you need, your business goals, and what you want your website or app to achieve.'
              },
              {
                id: 1,
                num: '02',
                title: 'We design it',
                desc: 'You see and approve a visual preview before we write a single line of code, so you are 100% happy with how it looks.'
              },
              {
                id: 2,
                num: '03',
                title: 'We build it',
                desc: 'Typically ready in 2–4 weeks. Built with modern, reliable technology that loads fast and works smoothly on all devices.'
              },
              {
                id: 3,
                num: '04',
                title: 'We launch & support you',
                desc: 'Your site goes live, and we are on call afterward to keep things running smoothly, fix any issues, and add updates.'
              }
            ].map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === step.id
                    ? 'bg-white dark:bg-[#12151D] border-[#E8623C] shadow-lg shadow-[#E8623C]/10 scale-[1.02]'
                    : 'bg-white/40 dark:bg-white/[0.02] border-neutral-200 dark:border-white/[0.06] hover:border-neutral-400 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-sm font-bold ${activeStep === step.id ? 'text-[#E8623C]' : 'text-neutral-400'}`}>
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                {activeStep === step.id && (
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pl-7">
                    {step.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Visual Preview Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-xl text-neutral-900 dark:text-white space-y-5">
              
              {/* Dynamic Step View 0 */}
              {activeStep === 0 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <span className="text-xs font-mono text-[#E8623C] font-semibold">STEP 01 · INITIAL CONSULTATION</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Free · 20 mins</span>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-neutral-900 dark:text-white">1. Understanding Your Customers</div>
                      <p className="text-neutral-500 dark:text-neutral-400">Who visits your website, and what action should they take?</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-neutral-900 dark:text-white">2. Scope &amp; Budget Clarity</div>
                      <p className="text-neutral-500 dark:text-neutral-400">A clear, fixed quote with zero hidden surprise charges.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-neutral-900 dark:text-white">3. Direct Developer Discussion</div>
                      <p className="text-neutral-500 dark:text-neutral-400">Talk directly on phone or WhatsApp with the engineer who will build it.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Step View 1 */}
              {activeStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <span className="text-xs font-mono text-[#E8623C] font-semibold">STEP 02 · DESIGN &amp; VISUAL APPROVAL</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Week 1</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-neutral-900 dark:text-white">Visual Preview</div>
                      <p className="text-neutral-500 dark:text-neutral-400">Interactive preview of how your website will look.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-neutral-900 dark:text-white">Mobile-First Layout</div>
                      <p className="text-neutral-500 dark:text-neutral-400">Tailored specifically for smartphone screens.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400">Your Feedback First</div>
                      <p className="text-neutral-500 dark:text-neutral-400">We adjust colors and layouts until you love it.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-[#E8623C]">No Templates</div>
                      <p className="text-neutral-500 dark:text-neutral-400">Designed uniquely for your specific business.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Step View 2 */}
              {activeStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <span className="text-xs font-mono text-[#E8623C] font-semibold">STEP 03 · DEVELOPMENT &amp; TESTING</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Weeks 2–3</span>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                      <span>Lightning Load Speed:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">Under 1 second</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                      <span>Google Search SEO Setup:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Ready for Pune Search</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                      <span>Forms &amp; WhatsApp Integration:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Instant Inquiries</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
                      <span>Live Demo Link:</span>
                      <span className="text-[#E8623C] font-semibold">Test on your own phone</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Step View 3 */}
              {activeStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <span className="text-xs font-mono text-[#E8623C] font-semibold">STEP 04 · LAUNCH &amp; ONGOING SUPPORT</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Live &amp; Monitored</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-neutral-900 dark:text-white">Domain &amp; SSL Connected</div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Your site goes live with secure green padlock.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-neutral-900 dark:text-white">100% Ownership</div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">All code, domain, and assets belong to you.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400">Dedicated Support</div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Quick fixes and assistance whenever you need.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <div className="font-bold text-[#E8623C]">Growth Ready</div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Add new pages and features easily as you expand.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Card Action */}
              <div className="pt-2 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">Have a project in mind?</span>
                <button
                  onClick={() => setCallModalOpen(true)}
                  className="text-xs font-bold text-[#E8623C] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

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

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] self-start sm:self-auto">
            {[
              { id: 'All', label: 'All Projects' },
              { id: 'Business', label: 'Business & CA' },
              { id: 'Agri', label: 'Agri & Software' },
              { id: 'Civic', label: 'Civic Tech' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCaseFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  caseFilter === tab.id
                    ? 'bg-[#E8623C] text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.slug}
              className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-lg hover:border-[#E8623C]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Industry */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E8623C] font-bold">
                    {study.industry}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-400">
                    {study.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-snug">
                  {study.client}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {study.summary}
                </p>

                {/* Key Result Pill */}
                {study.keyResult && (
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.06] text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{study.keyResult}</span>
                  </div>
                )}

              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] flex items-center gap-1"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CLIENT TESTIMONIALS                                            */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 bg-neutral-50/50 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
              What Pune business owners say about us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Deep Digital Labs gave our CA firm an exceptional digital presence. The website loads instantly, looks world-class, and our inbound client inquiries grew by 35% in 90 days.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Rahul B. Kavale</div>
                  <div className="text-[11px] text-neutral-500">Managing Partner, CA Firm</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Verified Client</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Moving our agricultural operations and inventory tracking to the web with Deep Digital Labs reduced billing cycle overhead from 3 days to real-time. No fluff, just working tools.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Operations Director</div>
                  <div className="text-[11px] text-neutral-500">Yashodeep Agro Tech</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Verified Client</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;Our logistics clients now track their consignments online in real time rather than calling dispatch desks. The website works quickly on any phone.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Logistics Director</div>
                  <div className="text-[11px] text-neutral-500">Trust Carry Logistics</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Verified Client</span>
              </div>
            </div>

          </div>

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
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 hover:border-neutral-900 dark:hover:border-white text-xs font-bold text-neutral-900 dark:text-white transition-colors cursor-pointer"
            >
              Get Started With a Website
            </button>
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
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white text-xs font-bold transition-all shadow-md shadow-[#E8623C]/30 cursor-pointer"
            >
              Choose Growth Partner
            </button>
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
            <button
              onClick={() => setCallModalOpen(true)}
              className="w-full py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 hover:border-neutral-900 dark:hover:border-white text-xs font-bold text-neutral-900 dark:text-white transition-colors cursor-pointer"
            >
              Discuss Custom Systems
            </button>
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

    </div>
  );
}
