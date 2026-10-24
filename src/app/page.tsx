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
import { PricingPackages } from '@/components/pricing/PricingPackages';

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
    <div className="relative w-full overflow-hidden bg-white text-[#4B5070]">
      
      {/* =========================================================================
             1. HERO SECTION (Light & Airy with 2 Soft Blurred Gradient Circles)
             ========================================================================= */}
      <section className="relative w-full overflow-hidden pb-16 sm:pb-20 pt-32 sm:pt-36 lg:pt-40 bg-white">
        
        {/* Soft Blurred Gradient Circles matching Logo (Pink & Orange) */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-20 -left-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-br from-[#FF9A1F]/20 via-[#FF7A1A]/10 to-transparent blur-3xl -z-10" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-10 -right-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-bl from-[#F0367A]/18 via-[#6A3DE8]/10 to-transparent blur-3xl -z-10" 
        />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8338C]/20 bg-[#F7F5FF] text-xs font-semibold text-[#1B1F4B] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Pune Studio · Available for New Projects</span>
          </div>

          {/* H1 with Gradient on ONE Key Word */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.12] text-[#1B1F4B] max-w-4xl tracking-tight">
            Your All-in-One{' '}
            <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
              Digital
            </span>{' '}
            Partner in Pune
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-xl text-[#4B5070] max-w-2xl mx-auto leading-relaxed text-center font-normal">
            Websites, mobile apps, business software, chatbots and SEO, all built by one team you can talk to directly.
          </p>

          {/* Brand Tagline Divider with Lines (Build • Grow • Digital) */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E8338C]/40"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E8338C]">
              Build &bull; Grow &bull; Digital
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E8338C]/40"></span>
          </div>

          {/* Action Buttons: Primary Brand Gradient + Secondary White with Navy Border */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
            <a
              href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20get%20a%20free%20quote%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#work"
              className="btn-secondary"
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
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#4B5070] hover:text-[#E8338C] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#FFB81C]" />
              <span>Already have a website? Send us the link for a <strong className="text-[#1B1F4B]">Free Website Audit</strong> →</span>
            </a>
          </div>

          {/* 3 Simple Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 w-full max-w-2xl border-t border-neutral-200/80 mt-2 text-xs sm:text-sm font-semibold text-[#1B1F4B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>10+ projects delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF7A1A] shrink-0" />
              <span>Based in Pune</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#6A3DE8] shrink-0" />
              <span>Replies within 1 hour</span>
            </div>
          </div>

        </div>
      </section>

      {/* Marquee Bar (Soft Lavender #F7F5FF) */}
      <section className="w-full py-6 border-y border-neutral-200/70 bg-[#F7F5FF]">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#4B5070] font-medium">
            <span className="text-[#1B1F4B]/60 font-mono text-[11px] uppercase tracking-wider font-semibold">
              Trusted by businesses across Pune:
            </span>
            {clientMarquee.map((client, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <span className="font-semibold text-[#1B1F4B]">{client.name}</span>
                <span className="text-[11px] text-[#4B5070]/70">({client.type})</span>
                {idx < clientMarquee.length - 1 && <span className="text-neutral-300 ml-1">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
             2. WHAT WE DO (White Background, Gradient Circles for Icons)
             ========================================================================= */}
      <section className="w-full py-20 bg-white border-b border-neutral-200/70" id="services">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200/80">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B] leading-[1.15]">
                Simple digital solutions that{' '}
                <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
                  grow
                </span>{' '}
                your business
              </h2>
            </div>
            <p className="text-sm text-[#4B5070] max-w-md">
              Everything built around how your business actually works, with no confusing tech jargon.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Business Websites */}
            <div className="card-brand p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="icon-gradient-circle mb-5 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5 text-[#E8338C]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2.5 group-hover:text-[#E8338C] transition-colors">
                  Business Websites
                </h3>
                <p className="text-sm text-[#4B5070] leading-relaxed mb-6">
                  Clean, fast websites that make your business look trustworthy and turn visitors into phone calls.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end text-xs">
                <Link href="/services/websites-web-apps" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Custom Business Software */}
            <div className="card-brand p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="icon-gradient-circle mb-5 group-hover:scale-105 transition-transform">
                  <Database className="w-5 h-5 text-[#FF7A1A]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2.5 group-hover:text-[#E8338C] transition-colors">
                  Business Software
                </h3>
                <p className="text-sm text-[#4B5070] leading-relaxed mb-6">
                  Simple custom portals, billing tools, and dashboards to manage your daily orders and staff without messy Excel sheets.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end text-xs">
                <Link href="/services/business-software-saas" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Mobile Apps */}
            <div className="card-brand p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="icon-gradient-circle mb-5 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5 text-[#6A3DE8]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2.5 group-hover:text-[#E8338C] transition-colors">
                  Mobile Apps
                </h3>
                <p className="text-sm text-[#4B5070] leading-relaxed mb-6">
                  Easy-to-use Android and iPhone apps for your customers, field workers, or delivery team.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end text-xs">
                <Link href="/services/mobile-app-development" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Card 4: WhatsApp Bots & SEO */}
            <div className="card-brand p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="icon-gradient-circle mb-5 group-hover:scale-105 transition-transform">
                  <Bot className="w-5 h-5 text-[#FFB81C]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2.5 group-hover:text-[#E8338C] transition-colors">
                  WhatsApp Bots &amp; SEO
                </h3>
                <p className="text-sm text-[#4B5070] leading-relaxed mb-6">
                  Get found on Google Maps and reply to customer inquiries instantly on WhatsApp, even when you&apos;re busy.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end text-xs">
                <Link href="/services/chat-bot-development" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             3. OUR WORK (Soft Lavender #F7F5FF Background)
             ========================================================================= */}
      <section className="w-full py-20 relative bg-[#F7F5FF] border-b border-neutral-200/70" id="work">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200/80">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B] leading-[1.15]">
                Real projects built for{' '}
                <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
                  real
                </span>{' '}
                businesses
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8338C] hover:underline"
            >
              <span>View all projects ({clientMarquee.length}+) →</span>
            </Link>
          </div>

          {/* 3 Top Real Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {topProjects.map((project) => (
              <div 
                key={project.slug}
                className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col group hover:border-[#E8338C]/60 transition-all shadow-xs hover:shadow-md hover:-translate-y-1"
              >
                {/* Real screenshot container */}
                <div className="relative w-full h-52 bg-neutral-100 overflow-hidden flex items-center justify-center p-2.5">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} - ${project.category}`} 
                    width={800} 
                    height={450} 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 font-mono text-[11px] font-semibold text-[#1B1F4B] shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8338C]" />
                    <span>Live Project</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase font-bold text-[#E8338C]">{project.category}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                      {project.whatWeBuilt}
                    </p>

                    {/* Result in plain words */}
                    <div className="p-3 rounded-xl bg-[#F7F5FF] border border-[#E8338C]/20">
                      <span className="text-xs font-bold text-[#1B1F4B] block">
                        Result:
                      </span>
                      <span className="text-xs text-[#4B5070] font-medium">
                        {project.result}
                      </span>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href={project.caseStudyUrl}
                      className="text-xs font-semibold text-[#E8338C] hover:underline"
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
             4. WHY CHOOSE US (White Background)
             ========================================================================= */}
      <section className="w-full py-20 bg-white border-b border-neutral-200/70" id="why-us">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 mb-12 text-center items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B]">
              A simpler way to build for the{' '}
              <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
                web
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#4B5070] max-w-xl">
              No middle managers, no endless meetings, and no hidden fees.
            </p>
          </div>

          {/* 4 Clean Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="card-brand p-7 flex flex-col gap-3">
              <div className="icon-gradient-circle font-bold text-base">
                ₹
              </div>
              <h3 className="text-lg font-bold font-display text-[#1B1F4B]">Fixed Price</h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                No surprise bills or hidden charges. We agree on the total price before starting, and that is what you pay.
              </p>
            </div>

            <div className="card-brand p-7 flex flex-col gap-3">
              <div className="icon-gradient-circle">
                <Key className="w-5 h-5 text-[#E8338C]" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1B1F4B]">You Own Everything</h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                You own 100% of your website, code, domain, and data. You are never locked into any proprietary platform.
              </p>
            </div>

            <div className="card-brand p-7 flex flex-col gap-3">
              <div className="icon-gradient-circle">
                <MessageSquare className="w-5 h-5 text-[#FF7A1A]" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1B1F4B]">Direct on WhatsApp</h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                You talk directly to Deepak and our senior developers. No junior account managers or waiting days for replies.
              </p>
            </div>

            <div className="card-brand p-7 flex flex-col gap-3">
              <div className="icon-gradient-circle">
                <Zap className="w-5 h-5 text-[#6A3DE8]" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1B1F4B]">Fast on Mobile</h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                Fast loading on mobile phones across Maharashtra, ensuring smooth experiences even on everyday network speeds.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             5. HOW IT WORKS (Soft Lavender #F7F5FF Background)
             ========================================================================= */}
      <section className="w-full py-20 bg-[#F7F5FF] border-b border-neutral-200/70" id="how-it-works">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 mb-14 text-center items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B]">
              From idea to live website in{' '}
              <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
                4 steps
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#4B5070] max-w-xl">
              A clear, straightforward process designed to launch your project on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 1: Talk */}
            <div className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7A1A]/15 to-[#E8338C]/15 text-[#E8338C] text-xs font-mono font-bold mb-4">
                  Step 01 · Days 1–2
                </span>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2">
                  Talk
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                  We discuss what your business needs, answer your questions, and agree on a clear fixed quote.
                </p>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7A1A]/15 to-[#E8338C]/15 text-[#E8338C] text-xs font-mono font-bold mb-4">
                  Step 02 · Week 1
                </span>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2">
                  Design
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                  We prepare the look, layout, and mobile experience of your website for your review and feedback.
                </p>
              </div>
            </div>

            {/* Step 3: Build */}
            <div className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7A1A]/15 to-[#E8338C]/15 text-[#E8338C] text-xs font-mono font-bold mb-4">
                  Step 03 · Week 2
                </span>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2">
                  Build
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                  We write clean code, connect WhatsApp buttons, hook up contact forms, and test on actual phones.
                </p>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FF7A1A]/15 to-[#E8338C]/15 text-[#E8338C] text-xs font-mono font-bold mb-4">
                  Step 04 · Week 3
                </span>
                <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2">
                  Launch
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                  Your website goes live on your domain. We hand over all keys and passwords so you own everything.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             6. PRICING PACKAGES (White Background)
             ========================================================================= */}
      <PricingPackages />

      {/* =========================================================================
             7. TESTIMONIALS (Soft Lavender #F7F5FF Background)
             ========================================================================= */}
      <section className="w-full py-20 bg-[#F7F5FF] border-b border-neutral-200/70" id="testimonials">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B]">
                Trusted by local business{' '}
                <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
                  owners
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#4B5070]">
                Direct feedback from founders and business owners we work with.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Deep+Digital+Labs+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-[#1B1F4B] hover:border-[#E8338C] hover:text-[#E8338C] transition-colors shadow-xs w-fit"
            >
              <span>View verified Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            
            {/* Review 1: Yashodeep Patil */}
            <div className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
              <p className="text-sm text-[#4B5070] leading-relaxed italic">
                &ldquo;Our rural dealers and farmers have zero patience for slow-loading websites. The online product catalog Deepak built opens instantly even on weak rural mobile data, and wholesale inquiries land straight into our WhatsApp.&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF9A1F] to-[#E8338C] text-white font-bold text-sm flex items-center justify-center shrink-0">
                  YP
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1B1F4B]">Yashodeep Patil</span>
                  <span className="text-xs text-[#E8338C] font-semibold">Managing Director</span>
                  <span className="text-[11px] text-[#4B5070]/70">Yashodeep Agro · Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Review 2: Vishal Shinde */}
            <div className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
              <p className="text-sm text-[#4B5070] leading-relaxed italic">
                &ldquo;Since launching our new booking portal and outstation fare estimator, our bus and Tempo Traveller charter bookings surged over 4x. Customers get accurate quotes in seconds instead of calling back and forth.&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7A1A] to-[#FFB81C] text-white font-bold text-sm flex items-center justify-center shrink-0">
                  VS
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1B1F4B]">Vishal Shinde</span>
                  <span className="text-xs text-[#E8338C] font-semibold">Founder &amp; Fleet Operator</span>
                  <span className="text-[11px] text-[#4B5070]/70">Vishal Tours &amp; Fleet · Pune</span>
                </div>
              </div>
            </div>

            {/* Review 3: Rahul Kavale */}
            <div className="bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
              <p className="text-sm text-[#4B5070] leading-relaxed italic">
                &ldquo;Deep Digital Labs transformed our firm&apos;s digital presence. The website and client tax calculation tools allow corporate clients to quickly understand our advisory services. The loading speed and design polish are remarkable.&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6A3DE8] to-[#E8338C] text-white font-bold text-sm flex items-center justify-center shrink-0">
                  RK
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1B1F4B]">Rahul Kavale</span>
                  <span className="text-xs text-[#E8338C] font-semibold">Chartered Accountant &amp; Advisory Partner</span>
                  <span className="text-[11px] text-[#4B5070]/70">Rahul B. Kavale &amp; Co. · Pune</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             8. FAQ (White Background)
             ========================================================================= */}
      <section className="w-full py-20 bg-white border-b border-neutral-200/70" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
              Questions &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1B1F4B] mt-1">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-sm text-[#4B5070] mt-2">
              Honest, simple answers to the questions business owners ask us most.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#F7F5FF] border border-neutral-200/80 p-6 sm:p-7 shadow-xs"
              >
                <h3 className="text-lg font-bold text-[#1B1F4B] font-display mb-2.5">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#4B5070] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
             9. FINAL CALL TO ACTION (The Only Dark Section: Navy #1B1F4B)
             ========================================================================= */}
      <section className="w-full py-24 relative bg-[#1B1F4B] text-white overflow-hidden" id="contact">
        
        {/* Soft radial glowing accents */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E8338C]/20 via-[#FF7A1A]/10 to-transparent rounded-full blur-3xl -z-10" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-24 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#6A3DE8]/25 via-transparent to-transparent rounded-full blur-3xl -z-10" 
        />

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: WhatsApp & Contact details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FFB81C] font-mono text-xs font-semibold mb-3 border border-white/15">
                  Let&apos;s Build Together
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight text-white">
                  Ready to grow your business{' '}
                  <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
                    online?
                  </span>
                </h2>
                <p className="text-base text-neutral-300 mt-3 leading-relaxed max-w-lg">
                  Tell us what you need. We will answer your questions, explain what is possible, and give you a fixed quote within a few hours.
                </p>
              </div>

              {/* Primary WhatsApp Action */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Fastest way to get answers:
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                    Chat directly with Deepak on WhatsApp.
                  </p>
                </div>
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-all shadow-md shadow-[#25D366]/20 active:scale-98 shrink-0 hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Free Website Audit Offer Box */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#FFB81C] font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Free Website Audit Offer</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Already have a website? Send us your website link and we will check its mobile loading speed, design issues, and Google ranking readiness for free.
                </p>
              </div>

              {/* Direct Phone & Email */}
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-300">
                <a href="tel:+917756063128" className="inline-flex items-center gap-2 hover:text-[#FF7A1A] transition-colors">
                  <Phone className="w-4 h-4 text-[#FF7A1A]" />
                  <span>Call: +91 77560 63128</span>
                </a>
                <span className="text-neutral-500">•</span>
                <a href="mailto:deepdigitallabs@gmail.com" className="inline-flex items-center gap-2 hover:text-[#E8338C] transition-colors">
                  <Mail className="w-4 h-4 text-[#E8338C]" />
                  <span>deepdigitallabs@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right: Short 3-field form */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-7 sm:p-8 rounded-3xl border border-white/15 shadow-xl text-white">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a quick message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mb-6">
                Fill in your details below and we will contact you today.
              </p>

              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message received!</h4>
                  <p className="text-xs sm:text-sm text-neutral-200">
                    Thank you, {contactName}. We will review your message and reply on WhatsApp/phone within 1 hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Ramesh Kulkarni"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8338C] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8338C] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="need" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      What do you need?
                    </label>
                    <textarea
                      id="need"
                      required
                      rows={3}
                      value={contactNeed}
                      onChange={(e) => setContactNeed(e.target.value)}
                      placeholder="e.g. I need a website for my dental clinic in Baner with appointment booking."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#E8338C] resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] hover:opacity-95 text-white font-semibold text-sm transition-all shadow-lg shadow-[#F0367A]/30 active:scale-98 cursor-pointer mt-2 hover:-translate-y-0.5"
                  >
                    Submit &amp; Get Free Quote
                  </button>

                  <p className="text-[11px] text-center text-neutral-400 pt-1">
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
