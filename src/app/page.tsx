'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  Bot, 
  ShieldCheck, 
  Key, 
  Clock, 
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

const FAQS = [
  {
    question: 'Why does a website cost this much?',
    answer: 'We do not use cheap, slow templates or bloated plugins that break after a few months. We hand-write clean code specifically for your business so your website loads fast on phones, ranks on Google, and brings you real client calls.'
  },
  {
    question: 'Do I own the website?',
    answer: 'Yes, 100%. Once final payment is made, you own your domain, website code, hosting, and database. There are no monthly platform lock-in fees or surprise renewal costs.'
  },
  {
    question: 'How long does it take?',
    answer: 'Most business websites are designed, built, and launched within 2 to 3 weeks. If you have your text and photos ready, we can often launch even faster.'
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. You can message Deepak directly on WhatsApp whenever you need text changes, new photos added, or technical help. We also offer monthly care plans if you want us to handle updates on an ongoing basis.'
  }
];

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactNeed, setContactNeed] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Top 3 real projects with plain words results and real screenshots
  const topProjects = [
    {
      slug: 'dairy-flow-pro',
      title: 'GoNidhi',
      category: 'Dairy Processing & ERP',
      image: '/images/case-studies/dairy-flow-pro.jpg',
      whatWeBuilt: 'Cloud platform for daily milk collection, automated FAT/SNF rate calculation, and SMS alerts.',
      result: '850 farmers now get milk slips by SMS automatically.',
      liveUrl: 'https://dairy-flow-pro.vercel.app',
      caseStudyUrl: '/case-studies/dairy-flow-pro'
    },
    {
      slug: 'rahul-b-kavale-and-co',
      title: 'Rahul B. Kavale & Co.',
      category: 'Tax & Advisory · Pune',
      image: '/images/case-studies/rahul-b-kavale.jpg',
      whatWeBuilt: 'Professional website with client tax calculation tools, partner credentials, and direct WhatsApp routing.',
      result: '3x more client inquiries received directly on WhatsApp.',
      liveUrl: 'https://rahulbkavaleandco.com',
      caseStudyUrl: '/case-studies/rahul-b-kavale-and-co'
    },
    {
      slug: 'vishal-travels',
      title: 'Vishal Travels',
      category: 'Tour & Fleet Mobility · Pune',
      image: '/images/case-studies/vishal-travels.png',
      whatWeBuilt: 'Direct charter booking website with instant route distance estimators and WhatsApp dispatch.',
      result: '4x more charter booking inquiries without phone tag.',
      liveUrl: 'https://toursandtravels2.vercel.app',
      caseStudyUrl: '/case-studies/vishal-travels'
    }
  ];

  const clientMarquee = [
    { name: 'Rahul B. Kavale & Co.', type: 'Tax & Advisory · Pune' },
    { name: 'GoNidhi', type: 'Dairy SaaS ERP' },
    { name: 'Yashodeep Agro', type: 'Agri-Inputs & Retail' },
    { name: 'Trust Carry Logistics', type: 'Freight & Fleet' },
    { name: 'Vishal Travels', type: 'Luxury Bus Charter · Pune' },
    { name: 'Onedesk Packaging', type: 'Industrial Packaging' }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-[#07090E] text-neutral-900 dark:text-neutral-100">
      
      {/* Background glow effects */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-gradient-to-b from-orange-500/[0.08] via-amber-500/[0.03] to-transparent blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8623C]/[0.07] rounded-full blur-[140px] -z-10" 
      />

      {/* =========================================================================
             1. HERO SECTION
             ========================================================================= */}
      <section className="relative w-full overflow-hidden pb-16 sm:pb-20 pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Pune Studio · Available for New Projects</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.12] text-neutral-900 dark:text-white max-w-4xl tracking-tight">
            Your All-in-One Digital Partner in{' '}
            <span className="text-[#E8623C]">
              Pune
            </span>
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed text-center font-normal">
            Websites, mobile apps, business software, chatbots and SEO, all built by one team you can talk to directly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20get%20a%20free%20quote%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-sm tracking-wide shadow-md shadow-[#E8623C]/20 hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#E8623C]" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-semibold text-sm hover:border-[#E8623C] hover:text-[#E8623C] dark:hover:border-[#E8623C] transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Free website audit callout */}
          <div className="pt-1">
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20can%20you%20do%20a%20free%20audit%20of%20my%20website?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#E8623C] dark:hover:text-[#E8623C] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Already have a website? Send us the link for a <strong>Free Website Audit</strong> →</span>
            </a>
          </div>

          {/* 3 Simple Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 w-full max-w-2xl border-t border-neutral-200/80 dark:border-white/10 mt-2 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>10+ projects delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E8623C] shrink-0" />
              <span>Based in Pune</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Replies within 1 hour</span>
            </div>
          </div>

        </div>
      </section>

      {/* Marquee Bar */}
      <section className="w-full py-6 border-y border-neutral-200/80 dark:border-white/10 bg-neutral-50/60 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
              Trusted by businesses across Pune:
            </span>
            {clientMarquee.map((client, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{client.name}</span>
                <span className="text-[11px] text-neutral-400">({client.type})</span>
                {idx < clientMarquee.length - 1 && <span className="text-neutral-300 dark:text-neutral-700 ml-1">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
             2. WHAT WE DO (4 Clean Cards)
             ========================================================================= */}
      <section className="w-full py-20 bg-neutral-50/50 dark:bg-[#0A0D13] border-b border-neutral-200 dark:border-white/10" id="services">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200 dark:border-white/10">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white leading-[1.15]">
                Simple digital solutions that grow your business
              </h2>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
              Everything built around how your business actually works, with no confusing tech jargon.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Business Websites */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-6 sm:p-7 border border-neutral-200/90 dark:border-white/10 hover:border-[#E8623C]/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2.5 group-hover:text-[#E8623C] transition-colors">
                  Business Websites
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Clean, fast websites that make your business look trustworthy and turn visitors into phone calls.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end text-xs">
                <Link href="/services/websites-web-apps" className="text-[#E8623C] hover:underline font-medium inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Custom Business Software */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-6 sm:p-7 border border-neutral-200/90 dark:border-white/10 hover:border-[#E8623C]/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2.5 group-hover:text-[#E8623C] transition-colors">
                  Business Software
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Simple custom portals, billing tools, and dashboards to manage your daily orders and staff without messy Excel sheets.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end text-xs">
                <Link href="/services/business-software-saas" className="text-[#E8623C] hover:underline font-medium inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Mobile Apps */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-6 sm:p-7 border border-neutral-200/90 dark:border-white/10 hover:border-[#E8623C]/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2.5 group-hover:text-[#E8623C] transition-colors">
                  Mobile Apps
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Easy-to-use Android and iPhone apps for your customers, field workers, or delivery team.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end text-xs">
                <Link href="/services/mobile-app-development" className="text-[#E8623C] hover:underline font-medium inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Card 4: WhatsApp Bots & SEO */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-6 sm:p-7 border border-neutral-200/90 dark:border-white/10 hover:border-[#E8623C]/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2.5 group-hover:text-[#E8623C] transition-colors">
                  WhatsApp Bots &amp; SEO
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Get found on Google Maps and reply to customer inquiries instantly on WhatsApp, even when you&apos;re busy.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end text-xs">
                <Link href="/services/chat-bot-development" className="text-[#E8623C] hover:underline font-medium inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             3. OUR WORK (Top 3 Real Projects with REAL Screenshots)
             ========================================================================= */}
      <section className="w-full py-20 relative bg-white dark:bg-[#07090E]" id="work">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200 dark:border-white/10">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white leading-[1.15]">
                Real projects built for real businesses
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8623C] hover:underline"
            >
              <span>View all projects ({clientMarquee.length}+) →</span>
            </Link>
          </div>

          {/* 3 Top Real Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {topProjects.map((project) => (
              <div 
                key={project.slug}
                className="bg-white dark:bg-[#12151C] rounded-2xl border border-neutral-200/90 dark:border-white/10 overflow-hidden flex flex-col group hover:border-[#E8623C]/60 transition-all shadow-xs hover:shadow-lg"
              >
                {/* Real screenshot container */}
                <div className="relative w-full h-52 bg-neutral-100 dark:bg-neutral-900 overflow-hidden flex items-center justify-center p-2.5">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} - ${project.category}`} 
                    width={800} 
                    height={450} 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 font-mono text-[11px] font-semibold text-neutral-800 dark:text-neutral-200 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C]" />
                    <span>Live Project</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase font-bold text-[#E8623C]">{project.category}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.whatWeBuilt}
                    </p>

                    {/* Result in plain words */}
                    <div className="p-3 rounded-xl bg-orange-50/70 dark:bg-white/[0.03] border border-orange-200/50 dark:border-white/5">
                      <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                        Result:
                      </span>
                      <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                        {project.result}
                      </span>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#E8623C]"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href={project.caseStudyUrl}
                      className="text-xs font-semibold text-[#E8623C] hover:underline"
                    >
                      Read Story →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
             4. WHY CHOOSE US (4 Straightforward Points)
             ========================================================================= */}
      <section className="w-full py-20 bg-neutral-50/60 dark:bg-[#0A0D13] border-y border-neutral-200 dark:border-white/10" id="why-us">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 mb-12 text-center items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              A simpler way to build for the web
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              No middle managers, no endless meetings, and no hidden fees.
            </p>
          </div>

          {/* 4 Clean Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center font-bold">
                ₹
              </div>
              <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Fixed Price</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                No surprise bills or hidden charges. We agree on the total price before starting, and that is what you pay.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">You Own Everything</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You own 100% of your website, code, domain, and data. You are never locked into any proprietary platform.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Direct on WhatsApp</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You talk directly to Deepak and our senior developers. No junior account managers or waiting days for replies.
              </p>
            </div>

            <div className="bg-white dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#E8623C] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">Fast on Mobile</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Your website loads in under 1 second, even on normal mobile data connections across Maharashtra.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             5. HOW IT WORKS (4 Simple Steps with Timelines)
             ========================================================================= */}
      <section className="w-full py-20 bg-white dark:bg-[#07090E] border-b border-neutral-200 dark:border-white/10" id="how-it-works">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 mb-14 text-center items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              From idea to live website in 4 steps
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              A clear, straightforward process designed to launch your project on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 1: Talk */}
            <div className="bg-neutral-50 dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#E8623C]/10 text-[#E8623C] text-xs font-mono font-bold mb-4">
                  Step 01 · Days 1–2
                </span>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                  Talk
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We discuss what your business needs, answer your questions, and agree on a clear fixed quote.
                </p>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="bg-neutral-50 dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#E8623C]/10 text-[#E8623C] text-xs font-mono font-bold mb-4">
                  Step 02 · Week 1
                </span>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                  Design
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We prepare the look, layout, and mobile experience of your website for your review and feedback.
                </p>
              </div>
            </div>

            {/* Step 3: Build */}
            <div className="bg-neutral-50 dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#E8623C]/10 text-[#E8623C] text-xs font-mono font-bold mb-4">
                  Step 03 · Week 2
                </span>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                  Build
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We write clean code, connect WhatsApp buttons, hook up contact forms, and test on actual phones.
                </p>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="bg-neutral-50 dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold mb-4">
                  Step 04 · Week 3
                </span>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                  Launch
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Your website goes live on your domain. We hand over all keys and passwords so you own everything.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             6. PRICING (Tailored Quotes According to Customer Scope)
             ========================================================================= */}
      <section className="w-full py-20 bg-neutral-50/50 dark:bg-[#0A0D13] border-b border-neutral-200 dark:border-white/10" id="pricing">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 mb-14 text-center items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
              Tailored to your business needs
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              Pay in stages as each part is delivered. Clear upfront quotes with no hidden costs or monthly builder fees.
            </p>
          </div>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
            
            {/* Package 1: Basic */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-white/20 transition-all">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Starter
                  </span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">
                    Basic Package
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 min-h-[36px]">
                    Best for single-service shops, doctors, consultants, and local businesses wanting a clean web presence.
                  </p>
                </div>

                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="text-xs text-neutral-400 font-mono uppercase font-semibold">Pricing</span>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">
                    Custom Quote
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
                    Tailored to your pages &amp; design scope
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Up to 5 mobile-optimized pages</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Direct WhatsApp chat button &amp; click-to-call</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Google Map address &amp; business hours</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Free domain and hosting setup</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>You own 100% of your website code</span></li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10">
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20would%20like%20a%20custom%20quote%20for%20a%20Basic%20Website%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Get a Custom Quote
                </a>
              </div>
            </div>

            {/* Package 2: Medium (Highlighted) */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 border-2 border-[#E8623C] shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#E8623C] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                Most Popular
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8623C]">
                    Growth
                  </span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">
                    Medium Package
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 min-h-[36px]">
                    Best for growing firms, manufacturers, CA practices, and service providers wanting more leads.
                  </p>
                </div>

                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="text-xs text-[#E8623C] font-mono uppercase font-semibold">Pricing</span>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">
                    Custom Quote
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
                    Tailored to your catalog &amp; lead features
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Up to 10 mobile-optimized pages</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Product or service catalog showcase</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Custom lead inquiry forms with WhatsApp alerts</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Google Business Profile &amp; local SEO setup</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Sub-1 second page load speed guarantee</span></li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10">
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20would%20like%20a%20custom%20quote%20for%20the%20Medium%20Growth%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-[#E8623C]/20"
                >
                  Get a Custom Quote
                </a>
              </div>
            </div>

            {/* Package 3: High */}
            <div className="bg-white dark:bg-[#12151C] rounded-2xl p-7 border border-neutral-200/90 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-white/20 transition-all">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Custom Scale
                  </span>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mt-1">
                    High Package
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 min-h-[36px]">
                    Best for businesses needing custom staff logins, billing portals, or mobile apps that replace Excel.
                  </p>
                </div>

                <div className="py-4 border-y border-neutral-100 dark:border-white/10">
                  <span className="text-xs text-neutral-400 font-mono uppercase font-semibold">Pricing</span>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 dark:text-white mt-1">
                    Custom Quote
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
                    Tailored to your workflows &amp; app features
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Custom software portal or Flutter mobile app</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Staff &amp; customer login system with roles</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Automated billing, invoicing &amp; order tracking</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>WhatsApp bot for automated 24/7 customer replies</span></li>
                  <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-[#E8623C] shrink-0 mt-0.5" /> <span>Complete source code and database handover</span></li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/10">
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20Custom%20Software%20or%20Mobile%20App."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Discuss Custom System
                </a>
              </div>
            </div>

          </div>

          {/* What affects the price note */}
          <div className="mt-10 p-5 rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 max-w-3xl mx-auto text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
            <span className="font-bold text-neutral-900 dark:text-white">How our pricing works: </span>
            Every business project is unique. Like leading IT companies, we assess your requirements and provide a clear, tailored quote before any work starts. You only pay for what your business actually needs, with milestone-based delivery and zero surprise costs.
          </div>

        </div>
      </section>

      {/* =========================================================================
             7. TESTIMONIALS (Real Client Quotes with Clear CA Partner Label)
             ========================================================================= */}
      <section className="w-full py-20 bg-white dark:bg-[#07090E] border-b border-neutral-200 dark:border-white/10" id="testimonials">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 dark:text-white">
                Trusted by local business owners
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Direct feedback from founders and business owners we work with.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Deep+Digital+Labs+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:border-[#E8623C] hover:text-[#E8623C] transition-colors w-fit"
            >
              <span>View verified Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            
            {/* Review 1: Yashodeep Patil */}
            <div className="bg-neutral-50 dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                &ldquo;Our rural dealers and farmers have zero patience for slow-loading websites. The online product catalog Deepak built opens instantly even on weak rural mobile data, and wholesale inquiries land straight into our WhatsApp.&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-neutral-200/60 dark:border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  YP
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">Yashodeep Patil</span>
                  <span className="text-xs text-[#E8623C] font-medium">Managing Director</span>
                  <span className="text-[11px] text-neutral-500">Yashodeep Agro · Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Review 2: Vishal Shinde */}
            <div className="bg-neutral-50 dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                &ldquo;Since launching our new booking portal and outstation fare estimator, our bus and Tempo Traveller charter bookings surged over 4x. Customers get accurate quotes in seconds instead of calling back and forth.&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-neutral-200/60 dark:border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  VS
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">Vishal Shinde</span>
                  <span className="text-xs text-[#E8623C] font-medium">Founder &amp; Fleet Operator</span>
                  <span className="text-[11px] text-neutral-500">Vishal Tours &amp; Fleet · Pune</span>
                </div>
              </div>
            </div>

            {/* Review 3: Rahul Kavale (Clearly labeled CA partner) */}
            <div className="bg-neutral-50 dark:bg-[#12151C] p-7 rounded-2xl border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                &ldquo;Deep Digital Labs transformed our firm&apos;s digital presence. The website and client tax calculation tools allow corporate clients to quickly understand our advisory services. The loading speed and design polish are remarkable.&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-neutral-200/60 dark:border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  RK
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">Rahul Kavale</span>
                  <span className="text-xs text-[#E8623C] font-medium">Chartered Accountant &amp; Advisory Partner</span>
                  <span className="text-[11px] text-neutral-500">Rahul B. Kavale &amp; Co. · Pune</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             8. FAQ (Open by Default with 4 Exact Questions)
             ========================================================================= */}
      <section className="w-full py-20 bg-neutral-50/50 dark:bg-[#0A0D13] border-b border-neutral-200 dark:border-white/10" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8623C] font-semibold">
              Questions &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Honest, simple answers to the questions business owners ask us most.
            </p>
          </div>

          {/* Cards open by default so visitors read without clicking */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#12151C] border border-neutral-200/90 dark:border-white/10 p-6 sm:p-7 shadow-xs"
              >
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display mb-2.5">
                  {faq.question}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
             9. FINAL CALL TO ACTION (WhatsApp + Short Form + Free Audit)
             ========================================================================= */}
      <section className="w-full py-20 relative bg-white dark:bg-[#07090E]" id="contact">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: WhatsApp & Contact details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8623C]/10 text-[#E8623C] font-mono text-xs font-semibold mb-3">
                  Let&apos;s Build Together
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight text-neutral-900 dark:text-white">
                  Ready to grow your business online?
                </h2>
                <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed max-w-lg">
                  Tell us what you need. We will answer your questions, explain what is possible, and give you a fixed quote within a few hours.
                </p>
              </div>

              {/* Primary WhatsApp Action */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-white/[0.02] border border-emerald-200/60 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Fastest way to get answers:
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                    Chat directly with Deepak on WhatsApp.
                  </p>
                </div>
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-all shadow-md shadow-[#25D366]/20 active:scale-98 shrink-0"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Free Website Audit Offer Box */}
              <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-white/[0.02] border border-amber-200/60 dark:border-white/10">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Free Website Audit Offer</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Already have a website? Send us your website link and we will check its mobile loading speed, design issues, and Google ranking readiness for free.
                </p>
              </div>

              {/* Direct Phone & Email */}
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                <a href="tel:+917756063128" className="inline-flex items-center gap-2 hover:text-[#E8623C]">
                  <Phone className="w-4 h-4 text-[#E8623C]" />
                  <span>Call: +91 77560 63128</span>
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <a href="mailto:deepdigitallabs@gmail.com" className="inline-flex items-center gap-2 hover:text-[#E8623C]">
                  <Mail className="w-4 h-4 text-[#E8623C]" />
                  <span>deepdigitallabs@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right: Short 3-field form */}
            <div className="lg:col-span-6 bg-neutral-50 dark:bg-[#12151C] p-7 sm:p-8 rounded-3xl border border-neutral-200/90 dark:border-white/10 shadow-sm">
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                Send a quick message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Fill in your details below and we will contact you today.
              </p>

              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">Message received!</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Thank you, {contactName}. We will review your message and reply on WhatsApp/phone within 1 hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Ramesh Kulkarni"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/30 border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8623C]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/30 border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8623C]"
                    />
                  </div>

                  <div>
                    <label htmlFor="need" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                      What do you need?
                    </label>
                    <textarea
                      id="need"
                      required
                      rows={3}
                      value={contactNeed}
                      onChange={(e) => setContactNeed(e.target.value)}
                      placeholder="e.g. I need a website for my dental clinic in Baner with appointment booking."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/30 border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8623C] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#E8623C] hover:bg-[#D7532F] text-white font-semibold text-sm transition-all shadow-md shadow-[#E8623C]/20 active:scale-98 cursor-pointer mt-2"
                  >
                    Submit &amp; Get Free Quote
                  </button>

                  <p className="text-[11px] text-center text-neutral-500 dark:text-neutral-400 pt-1">
                    No spam ever. We only contact you regarding your inquiry.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Discovery Call Modal */}
      <DiscoveryCallModal 
        isOpen={callModalOpen} 
        onClose={() => setCallModalOpen(false)} 
      />

    </div>
  );
}
