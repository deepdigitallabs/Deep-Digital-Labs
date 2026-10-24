'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
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
  CheckCircle2,
  Sparkles,
  TrendingUp,
  BarChart3,
  Layers,
  Send,
  CheckCheck
} from 'lucide-react';
import { PricingPackages } from '@/components/pricing/PricingPackages';

// Technology stack for under-hero marquee
const TECH_STACK = [
  { name: 'Next.js 15', category: 'Fast Web Framework' },
  { name: 'React', category: 'Interactive UI' },
  { name: 'Flutter', category: 'Android & iOS Apps' },
  { name: 'WhatsApp Business API', category: 'Chat Automation' },
  { name: 'PostgreSQL', category: 'Secure Databases' },
  { name: 'AWS Cloud', category: 'Reliable Hosting' },
  { name: 'Node.js', category: 'Fast Backend APIs' },
  { name: 'Tailwind CSS', category: 'Modern Design' }
];

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
    answer: 'Yes. You can message our developer directly on WhatsApp whenever you need text changes, new photos added, or technical help. We also offer monthly care plans if you want us to handle updates on an ongoing basis.'
  }
];

// WhatsApp Icon Helper
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// Animated Stat Counter
function StatCounter({ target, suffix = '', label, sub }: { target: number; suffix?: string; label: string; sub: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const duration = 1200;
          const steps = 30;
          const stepValue = target / steps;
          const intervalTime = duration / steps;
          
          const timer = setInterval(() => {
            start += stepValue;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [target, hasStarted]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1F4B] font-display">
        {count}{suffix}
      </div>
      <div className="font-bold text-[#1B1F4B] text-sm mt-1">{label}</div>
      <div className="text-xs text-[#4B5070] mt-0.5">{sub}</div>
    </div>
  );
}

export default function HomePage() {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactService, setContactService] = useState('Website & Web App');
  const [contactNeed, setContactNeed] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Top 3 real projects with real screenshots and browser frames
  const topProjects = [
    {
      slug: 'dairy-flow-pro',
      title: 'GoNidhi',
      category: 'Dairy SaaS & ERP',
      urlDisplay: 'gonidhi.com/portal',
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
      urlDisplay: 'rahulbkavaleandco.com',
      image: '/images/case-studies/rahul-b-kavale.jpg',
      whatWeBuilt: 'Professional advisory website with client tax calculation tools, partner credentials, and direct WhatsApp routing.',
      result: '3x more client inquiries received directly on WhatsApp.',
      liveUrl: 'https://rahulbkavaleandco.com',
      caseStudyUrl: '/case-studies/rahul-b-kavale-and-co'
    },
    {
      slug: 'vishal-travels',
      title: 'Vishal Travels',
      category: 'Tour & Fleet Mobility · Pune',
      urlDisplay: 'vishaltravels.com/book',
      image: '/images/case-studies/vishal-travels.png',
      whatWeBuilt: 'Direct charter booking website with instant route distance estimators and WhatsApp dispatch.',
      result: '4x more charter booking inquiries without phone tag.',
      liveUrl: 'https://toursandtravels2.vercel.app',
      caseStudyUrl: '/case-studies/vishal-travels'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white text-[#4B5070]">
      
      {/* =========================================================================
             1. HERO SECTION (With Floating UI Composition & Animated Gradient Mesh)
             ========================================================================= */}
      <section className="relative w-full overflow-hidden pb-16 sm:pb-20 pt-32 sm:pt-36 lg:pt-40 bg-white bg-grid-dots">
        
        {/* Soft Animated Gradient Mesh (Pink, Orange, Purple) */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 -left-20 w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] rounded-full bg-gradient-to-br from-[#FF9A1F]/22 via-[#FF7A1A]/14 to-transparent blur-3xl -z-10 animate-mesh-pulse" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-12 -right-24 w-[500px] lg:w-[750px] h-[500px] lg:h-[750px] rounded-full bg-gradient-to-bl from-[#F0367A]/20 via-[#6A3DE8]/14 to-transparent blur-3xl -z-10 animate-mesh-pulse" 
          style={{ animationDelay: '4s' }}
        />

        {/* Faint Watermark of the Rounded "D" from Logo */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] opacity-[0.035] -z-10 select-none"
        >
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#1B1F4B]">
            <path d="M40 25 C40 20 45 15 50 15 L105 15 C150 15 185 50 185 100 C185 150 150 185 105 185 L50 185 C45 185 40 180 40 175 Z M82 54 L82 146 L104 146 C130 146 150 125 150 100 C150 75 130 54 104 54 Z" />
          </svg>
        </div>

        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Subline & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              {/* Availability Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-200/80 bg-white text-xs font-semibold text-[#1B1F4B] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Pune Studio · Available for New Projects</span>
              </div>

              {/* H1 with Gradient & Blinking Cursor on Key Word */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.12] text-[#1B1F4B] tracking-tight">
                Your All-in-One{' '}
                <span className="brand-gradient-text">
                  Digital
                </span>
                <span className="cursor-blink" aria-hidden="true" />
                {' '}Partner in Pune
              </h1>

              {/* Subline */}
              <p className="text-base sm:text-xl text-[#4B5070] max-w-xl leading-relaxed font-normal">
                Websites, mobile apps, business software, chatbots and SEO, all built by one team you can talk to directly.
              </p>

              {/* Brand Tagline Divider */}
              <div className="flex items-center gap-3 pt-1">
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#E8338C]/40"></span>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#E8338C]">
                  Build &bull; Grow &bull; Digital
                </span>
                <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#E8338C]/40"></span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20get%20a%20free%20quote%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
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

              {/* Free Website Audit Callout */}
              <div className="pt-1">
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20can%20you%20do%20a%20free%20audit%20of%20my%20website?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#4B5070] hover:text-[#E8338C] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#FFB81C]" />
                  <span>Already have a website? Send us your link for a <strong className="text-[#1B1F4B]">Free Website Audit</strong> →</span>
                </a>
              </div>

              {/* 3 Simple Trust Points */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 w-full border-t border-neutral-200/80 text-xs sm:text-sm font-semibold text-[#1B1F4B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
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

            {/* Right Column: Floating UI Mockups Composition (CSS Only) */}
            <div className="lg:col-span-5 relative w-full h-[460px] sm:h-[520px] flex items-center justify-center">
              
              {/* 1. Browser Window Mockup (Center Base) */}
              <div className="w-[90%] sm:w-[380px] lg:w-[420px] rounded-2xl bg-white border border-neutral-200/90 shadow-xl overflow-hidden animate-float z-10 transition-transform">
                {/* Browser Header with 3 colored dots */}
                <div className="px-4 py-2.5 bg-[#F7F5FF] border-b border-neutral-200/70 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFB81C]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8338C]" />
                  </div>
                  <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white border border-neutral-200/70 text-[10px] font-mono text-[#4B5070] flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                    <span>gonidhi.com</span>
                  </div>
                </div>

                {/* Real Client Project Screenshot */}
                <div className="relative w-full h-[220px] bg-neutral-100 overflow-hidden">
                  <Image
                    src="/images/case-studies/dairy-flow-pro.jpg"
                    alt="GoNidhi Dairy ERP Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                    <span>GoNidhi Dairy ERP</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#25D366] text-[9px] font-bold text-white shadow-xs">
                      Live Client System
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Phone Screen Mockup (Floating Bottom Right) */}
              <div className="hidden sm:block absolute -bottom-4 right-0 w-[170px] rounded-2xl bg-white border-2 border-[#1B1F4B] shadow-2xl p-2.5 z-20 animate-float-slow">
                <div className="w-12 h-1.5 rounded-full bg-neutral-300 mx-auto mb-2" />
                <div className="space-y-2">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#1B1F4B] to-[#252C6B] text-white space-y-1">
                    <div className="text-[9px] text-pink-300 font-mono">Mobile App · Android/iOS</div>
                    <div className="text-[11px] font-bold">GoNidhi ERP</div>
                    <div className="text-[9px] text-emerald-300">✓ 850 Farmers Synced</div>
                  </div>
                  <div className="h-6 rounded-lg bg-[#F7F5FF] border border-neutral-200 flex items-center justify-center text-[9px] font-semibold text-[#1B1F4B]">
                    Instant SMS Alerts
                  </div>
                </div>
              </div>

              {/* 3. Analytics Dashboard Metric Card (Floating Top Right) */}
              <div className="absolute top-2 -right-2 sm:-right-6 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-lg z-30 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E8338C]/15 text-[#E8338C] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#4B5070] font-medium">Inbound Calls</div>
                    <div className="text-sm font-extrabold text-[#1B1F4B]">+248% Inquiries</div>
                  </div>
                </div>
                <div className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span>↑ 3.4x faster on 4G</span>
                </div>
              </div>

              {/* 4. WhatsApp Chat Bubble Card (Floating Bottom Left) */}
              <div className="absolute bottom-2 -left-2 sm:-left-6 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-lg z-30 animate-float-reverse max-w-[220px]">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  </div>
                  <div className="text-[11px] leading-snug">
                    <span className="font-bold text-[#1B1F4B] block">Lead Developer</span>
                    <span className="text-[#4B5070]">Client portal is live! All SMS slips sent.</span>
                    <div className="flex items-center justify-end gap-1 text-[9px] text-[#4B5070]/70 mt-1">
                      <span>10:42 AM</span>
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             2. TECHNOLOGY LOGOS MARQUEE ("Tools we use to build your business")
             ========================================================================= */}
      <section className="w-full py-6 border-y border-neutral-200/70 bg-[#F7F5FF] overflow-hidden">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 mb-3 text-center">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#1B1F4B]">
            Tools we use to build your business:
          </span>
        </div>

        <div className="relative w-full overflow-hidden flex items-center">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F7F5FF] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F7F5FF] to-transparent z-10" />

          <div className="animate-tech-marquee flex items-center gap-6 sm:gap-10 whitespace-nowrap">
            {[...TECH_STACK, ...TECH_STACK].map((tool, index) => (
              <div 
                key={index} 
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-neutral-200/80 shadow-xs shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#E8338C]" />
                <span className="text-xs font-bold text-[#1B1F4B]">{tool.name}</span>
                <span className="text-[10px] text-[#4B5070] font-medium">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
             3. STATS STRIP (With Scroll Count-Up & Pulsing Available Dot)
             ========================================================================= */}
      <section className="w-full py-14 bg-white border-b border-neutral-200/70">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center items-center">
            
            <StatCounter target={10} suffix="+" label="Projects Delivered" sub="Websites, ERPs & apps" />
            <StatCounter target={99} suffix=".9%" label="Uptime Guarantee" sub="Always online for clients" />
            <StatCounter target={100} suffix="%" label="Code Ownership" sub="You own Git code & domain" />

          </div>
        </div>
      </section>

      {/* =========================================================================
             4. SERVICES (Bento Grid with Animated Mini-Visuals)
             ========================================================================= */}
      <section className="w-full py-20 bg-[#F7F5FF] border-b border-neutral-200/70" id="services">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200/80">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B] leading-[1.15]">
                Simple digital solutions that{' '}
                <span className="brand-gradient-text">
                  grow
                </span>{' '}
                your business
              </h2>
            </div>
            <p className="text-sm text-[#4B5070] max-w-md">
              Everything built around how your business actually works, with no confusing tech jargon.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tile 1 (Span 2 cols on lg): Business Websites & Web Apps */}
            <div className="lg:col-span-2 card-brand p-7 flex flex-col justify-between group relative overflow-hidden">
              <div className="space-y-4">
                <div className="icon-gradient-circle">
                  <Globe className="w-5 h-5 text-[#E8338C]" />
                </div>

                <div className="max-w-md">
                  <h3 className="text-2xl font-bold font-display text-[#1B1F4B] mb-2 group-hover:text-[#E8338C] transition-colors">
                    Business Websites &amp; Web Apps
                  </h3>
                  <p className="text-sm text-[#4B5070] leading-relaxed">
                    Clean, fast websites that make your business look trustworthy and turn visitors into phone calls and WhatsApp leads. No slow templates or plugin bloat.
                  </p>
                </div>

                {/* Upgraded Mini-Visual: Interactive High-Converting Website Preview */}
                <div className="pt-2">
                  <div className="w-full max-w-lg rounded-xl bg-white border border-neutral-200/90 shadow-md overflow-hidden">
                    {/* Browser Header Bar */}
                    <div className="px-3.5 py-2 bg-[#F7F5FF] border-b border-neutral-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
                        <span className="w-2 h-2 rounded-full bg-[#FFB81C]" />
                        <span className="w-2 h-2 rounded-full bg-[#E8338C]" />
                      </div>
                      <div className="px-2.5 py-0.5 rounded-md bg-white border border-neutral-200/80 text-[10px] font-mono text-[#4B5070] flex items-center gap-1 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                        <span>https://yourbusiness.com</span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                        Score: 99/100
                      </span>
                    </div>

                    {/* Mini Website Preview Canvas */}
                    <div className="p-3.5 space-y-3 bg-gradient-to-b from-white to-[#F7F5FF]/50">
                      {/* Mini Navbar */}
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-[10px]">
                        <div className="flex items-center gap-1.5 font-bold text-[#1B1F4B]">
                          <div className="w-4 h-4 rounded-md bg-gradient-to-br from-[#FF7A1A] to-[#E8338C] text-white flex items-center justify-center text-[9px] font-bold">
                            ✦
                          </div>
                          <span>Your Business</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2.5 text-[#4B5070] text-[9px]">
                          <span>Services</span>
                          <span>Pricing</span>
                          <span className="font-semibold text-[#E8338C]">Contact</span>
                        </div>
                      </div>

                      {/* Mini Hero Content & Lead Generator */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                        <div className="sm:col-span-7 space-y-1.5">
                          <span className="inline-block text-[9px] font-semibold text-[#E8338C] bg-[#E8338C]/10 px-2 py-0.5 rounded-full">
                            Fast &amp; High-Converting
                          </span>
                          <div className="text-xs font-extrabold text-[#1B1F4B] leading-tight font-display">
                            Turn Website Visitors Into Direct Client Calls
                          </div>
                          <div className="flex items-center gap-1.5 pt-1">
                            <span className="px-2.5 py-1 rounded-full bg-[#25D366] text-white text-[9px] font-bold shadow-xs flex items-center gap-1">
                              <WhatsAppIcon className="w-2.5 h-2.5 fill-white" />
                              <span>WhatsApp</span>
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-white border border-[#1B1F4B] text-[#1B1F4B] text-[9px] font-semibold">
                              Call Now
                            </span>
                          </div>
                        </div>

                        {/* Floating Live Lead Alert Card */}
                        <div className="sm:col-span-5 p-2.5 rounded-xl bg-white border border-emerald-200/80 shadow-xs space-y-1">
                          <div className="flex items-center justify-between text-[9px]">
                            <span className="flex items-center gap-1 font-bold text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                              <span>New Inquiry</span>
                            </span>
                            <span className="text-[8px] text-[#4B5070]">Just now</span>
                          </div>
                          <div className="text-[9px] font-semibold text-[#1B1F4B] truncate">
                            &ldquo;Looking for website &amp; quote&rdquo;
                          </div>
                          <div className="text-[8px] text-[#25D366] font-medium">
                            ✓ Routed straight to WhatsApp
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#4B5070] font-medium">Ready in 2–3 weeks</span>
                <Link href="/services/websites-web-apps" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Tile 2: Custom Business Software & ERP */}
            <div className="card-brand p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="icon-gradient-circle">
                  <Database className="w-5 h-5 text-[#FF7A1A]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2 group-hover:text-[#E8338C] transition-colors">
                    Custom Software &amp; ERP
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    Simple custom portals, billing tools, and dashboards to manage daily orders and staff without messy Excel sheets.
                  </p>
                </div>

                {/* Animated Mini-Visual: Mini Bar Chart */}
                <div className="p-3 rounded-xl bg-[#F7F5FF] border border-neutral-200/60">
                  <div className="text-[10px] font-bold text-[#1B1F4B] mb-2 flex items-center justify-between">
                    <span>Daily Invoices Processed</span>
                    <span className="text-emerald-600">+100% automated</span>
                  </div>
                  <div className="flex items-end gap-2 h-14 pt-1">
                    <div className="w-1/4 bg-neutral-200 rounded-t-sm h-[40%]" />
                    <div className="w-1/4 bg-neutral-300 rounded-t-sm h-[65%]" />
                    <div className="w-1/4 bg-[#FF7A1A]/70 rounded-t-sm h-[80%]" />
                    <div className="w-1/4 bg-gradient-to-t from-[#FF7A1A] to-[#E8338C] rounded-t-sm h-[100%]" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#4B5070] font-medium">Custom tailored</span>
                <Link href="/services/business-software-saas" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Tile 3: Mobile Apps (Android & iOS) */}
            <div className="card-brand p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="icon-gradient-circle">
                  <Smartphone className="w-5 h-5 text-[#6A3DE8]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2 group-hover:text-[#E8338C] transition-colors">
                    Mobile Apps
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    Easy-to-use Android and iPhone apps for your customers, field workers, or delivery team using Flutter.
                  </p>
                </div>

                {/* Animated Mini-Visual: Phone Outline */}
                <div className="p-3 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-10 rounded-md border-2 border-[#1B1F4B] flex flex-col items-center justify-between p-0.5">
                      <div className="w-3 h-0.5 bg-[#1B1F4B] rounded-full" />
                      <div className="w-1 h-1 bg-[#E8338C] rounded-full" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#1B1F4B]">Cross-Platform</div>
                      <div className="text-[9px] text-[#4B5070]">1 Codebase · 2 App Stores</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Fast
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#4B5070] font-medium">Native speed</span>
                <Link href="/services/mobile-app-development" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Tile 4: AI Chatbots & Automation */}
            <div className="card-brand p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="icon-gradient-circle">
                  <Bot className="w-5 h-5 text-[#FFB81C]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2 group-hover:text-[#E8338C] transition-colors">
                    AI Chatbots &amp; Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    Reply to customer inquiries instantly on WhatsApp, send automated reminders, and capture leads while you sleep.
                  </p>
                </div>

                {/* Animated Mini-Visual: Sequential Chat Bubbles */}
                <div className="p-3 rounded-xl bg-white border border-neutral-200/80 space-y-1.5 text-[10px]">
                  <div className="p-1.5 rounded-lg bg-[#F7F5FF] text-[#1B1F4B] max-w-[85%]">
                    Can I get a quote for a website?
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#25D366]/15 text-[#1B1F4B] font-medium max-w-[85%] ml-auto text-right">
                    Yes! Replying in 5 mins on WhatsApp ✓
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#4B5070] font-medium">WhatsApp &amp; AI Workflows</span>
                <Link href="/services/chat-bot-development" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

            {/* Tile 5: SEO & Growth Marketing */}
            <div className="card-brand p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="icon-gradient-circle">
                  <TrendingUp className="w-5 h-5 text-[#E8338C]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-2 group-hover:text-[#E8338C] transition-colors">
                    SEO &amp; Growth Marketing
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    Rank on Google Search and Google Maps across Pune so local customers find and call you before your competitors.
                  </p>
                </div>

                {/* Animated Mini-Visual: Line Graph Rising */}
                <div className="p-3 rounded-xl bg-white border border-neutral-200/80">
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="font-bold text-[#1B1F4B]">Google Search Rank</span>
                    <span className="text-emerald-600 font-bold">#1 Pune</span>
                  </div>
                  <svg className="w-full h-8 text-[#E8338C]" viewBox="0 0 100 30" fill="none">
                    <path d="M0 25 Q 25 20, 50 15 T 100 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="100" cy="4" r="3" fill="#FF7A1A" />
                  </svg>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[#4B5070] font-medium">Local Pune SEO</span>
                <Link href="/pune-website-development-company" className="text-[#E8338C] hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Learn more →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
             5. OUR WORK (Browser Frames with Real Screenshots & Hover Overlay)
             ========================================================================= */}
      <section className="w-full py-20 bg-white border-b border-neutral-200/70" id="work">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200/80">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B] leading-[1.15]">
                Real projects built for{' '}
                <span className="brand-gradient-text">
                  real
                </span>{' '}
                businesses
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8338C] hover:underline"
            >
              <span>View all projects →</span>
            </Link>
          </div>

          {/* 3 Top Real Projects Grid in Browser Frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topProjects.map((project) => (
              <div 
                key={project.slug}
                className="card-brand overflow-hidden flex flex-col group relative"
              >
                {/* Realistic Browser Window Frame */}
                <div className="bg-[#F7F5FF] border-b border-neutral-200/80 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFB81C]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8338C]" />
                  </div>
                  <div className="flex-1 mx-2 px-2.5 py-0.5 rounded-md bg-white border border-neutral-200/60 text-[10px] font-mono text-[#4B5070] truncate">
                    {project.urlDisplay}
                  </div>
                </div>

                {/* Screenshot Container with Hover Overlay & Button */}
                <div className="relative w-full h-56 bg-neutral-100 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} - ${project.category}`} 
                    width={800} 
                    height={450} 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay & View Case Study Button on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F4B]/90 via-[#1B1F4B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <Link
                      href={project.caseStudyUrl}
                      className="px-5 py-2.5 rounded-full bg-white text-[#1B1F4B] font-bold text-xs shadow-lg hover:bg-[#F7F5FF] transition-all transform translate-y-2 group-hover:translate-y-0"
                    >
                      View Case Study →
                    </Link>
                  </div>

                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 font-mono text-[10px] font-semibold text-[#1B1F4B] shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2.5">
                    <span className="font-mono text-xs uppercase font-bold text-[#E8338C] block">
                      {project.category}
                    </span>

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

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#1B1F4B] hover:text-[#E8338C]"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href={project.caseStudyUrl}
                      className="font-semibold text-[#E8338C] hover:underline"
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
             6. PROCESS (Horizontal Pipeline with Glowing Nodes)
             ========================================================================= */}
      <section className="w-full py-20 bg-[#F7F5FF] border-b border-neutral-200/70" id="process">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 mb-16 text-center items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B]">
              From idea to live website in{' '}
              <span className="brand-gradient-text">
                4 steps
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#4B5070] max-w-xl">
              A transparent, milestone-driven pipeline with zero corporate delays.
            </p>
          </div>

          {/* Interactive Pipeline: Horizontal on Desktop, Vertical on Mobile */}
          <div className="relative">
            
            {/* Desktop Horizontal Connecting Line */}
            <div 
              aria-hidden="true" 
              className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#FF7A1A] via-[#E8338C] to-[#6A3DE8] -z-0" 
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              
              {/* Step 1: Talk */}
              <div className="card-brand p-6 flex flex-col justify-between items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-[#FF7A1A] shadow-md flex items-center justify-center font-display font-extrabold text-lg text-[#FF7A1A]">
                  01
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF7A1A] block mb-1">Days 1–2</span>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-1.5">Talk</h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    We understand your business goals, answer your questions, and agree on a clear fixed quote.
                  </p>
                </div>
              </div>

              {/* Step 2: Design */}
              <div className="card-brand p-6 flex flex-col justify-between items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-[#E8338C] shadow-md flex items-center justify-center font-display font-extrabold text-lg text-[#E8338C]">
                  02
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E8338C] block mb-1">Week 1</span>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-1.5">Design</h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    We prepare the look, layout, and mobile experience of your website for your feedback.
                  </p>
                </div>
              </div>

              {/* Step 3: Build */}
              <div className="card-brand p-6 flex flex-col justify-between items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-[#6A3DE8] shadow-md flex items-center justify-center font-display font-extrabold text-lg text-[#6A3DE8]">
                  03
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#6A3DE8] block mb-1">Week 2</span>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-1.5">Build</h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    We write clean code, connect WhatsApp buttons, hook up contact forms, and test on phones.
                  </p>
                </div>
              </div>

              {/* Step 4: Launch */}
              <div className="card-brand p-6 flex flex-col justify-between items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-[#25D366] shadow-md flex items-center justify-center font-display font-extrabold text-lg text-[#25D366]">
                  04
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#25D366] block mb-1">Week 3</span>
                  <h3 className="text-xl font-bold font-display text-[#1B1F4B] mb-1.5">Launch</h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                    Your website goes live on your domain. We hand over all keys so you own everything.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             7. WHY CHOOSE US (White Background)
             ========================================================================= */}
      <section className="w-full py-20 bg-white border-b border-neutral-200/70" id="why-us">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 mb-12 text-center items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B]">
              A simpler way to build for the{' '}
              <span className="brand-gradient-text">
                web
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#4B5070] max-w-xl">
              No middle managers, no endless meetings, and no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="card-brand p-7 flex flex-col gap-3">
              <div className="icon-gradient-circle font-bold text-base">
                ₹
              </div>
              <h3 className="text-lg font-bold font-display text-[#1B1F4B]">Fixed Quote</h3>
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
                You talk directly to our senior software developers. No junior account managers or waiting days for replies.
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
             8. PRICING PACKAGES (Packages with Tab Switcher & No Prices)
             ========================================================================= */}
      <PricingPackages />

      {/* =========================================================================
             9. TESTIMONIALS (Soft Lavender #F7F5FF Background)
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
                <span className="brand-gradient-text">
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
            <div className="card-brand p-7 flex flex-col justify-between">
              <p className="text-sm text-[#4B5070] leading-relaxed italic">
                &ldquo;Our rural dealers and farmers have zero patience for slow-loading websites. The online product catalog Deep Digital Labs built opens instantly even on weak rural mobile data, and wholesale inquiries land straight into our WhatsApp.&rdquo;
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
            <div className="card-brand p-7 flex flex-col justify-between">
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
            <div className="card-brand p-7 flex flex-col justify-between">
              <p className="text-sm text-[#4B5070] leading-relaxed italic">
                &ldquo;Deep Digital Labs transformed our firm&apos;s digital presence. The website and client tax calculation tools allow corporate clients to quickly understand our advisory services. The loading speed and design polish are remarkable.&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6A3DE8] to-[#E8338C] text-white font-bold text-sm flex items-center justify-center shrink-0">
                  RK
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1B1F4B]">Rahul Kavale</span>
                  <span className="text-xs text-[#E8338C] font-semibold">Chartered Accountant &amp; Partner</span>
                  <span className="text-[11px] text-[#4B5070]/70">Rahul B. Kavale &amp; Co. · Pune</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
             10. FAQ (White Background)
             ========================================================================= */}
      <section className="w-full py-20 bg-white border-b border-neutral-200/70" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
              Questions &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1B1F4B] mt-1">
              Frequently Asked{' '}
              <span className="brand-gradient-text">
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
                className="card-brand p-6 sm:p-7 shadow-xs"
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
             11. FINAL CALL TO ACTION (Navy #1B1F4B With Gradient Glow & Short Form)
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Headline & Large WhatsApp Button */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-pink-300 font-bold px-3 py-1 rounded-full bg-white/10 border border-white/15">
                  Let&apos;s Build Together
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight text-white mt-4">
                  Ready to grow your business{' '}
                  <span className="bg-gradient-to-r from-[#FFB81C] via-[#FF7A1A] to-[#E8338C] bg-clip-text text-transparent">
                    online
                  </span>?
                </h2>
                <p className="text-base text-slate-300 mt-3 leading-relaxed">
                  Tell us what you want to build. We’ll understand your business, give you an honest recommendation and a fair fixed quote within 24 hours.
                </p>
              </div>

              {/* Instant WhatsApp Quick Callout */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Instant Response on WhatsApp</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prefer chatting directly with our team instead of waiting for emails? Tap below to open WhatsApp with your project requirements.
                </p>
                <a
                  href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm transition-all shadow-lg shadow-[#25D366]/20 active:scale-98 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp (+91 77560 63128)</span>
                </a>
              </div>
            </div>

            {/* Right: Short Contact Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 text-[#4B5070] shadow-2xl border border-white/10">
              {contactSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B1F4B]">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-[#4B5070] max-w-sm mx-auto">
                    Thank you, <strong className="text-[#1B1F4B]">{contactName}</strong>. We received your note and will message you directly on WhatsApp within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactName('');
                      setContactPhone('');
                      setContactNeed('');
                    }}
                    className="mt-2 px-5 py-2 rounded-full border border-[#1B1F4B] text-xs font-semibold text-[#1B1F4B] hover:border-[#E8338C] hover:text-[#E8338C]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#1B1F4B]">
                      Request a Free Quote
                    </h3>
                    <p className="text-xs text-[#4B5070] mt-0.5">
                      Tell us what you need and we&apos;ll reply directly on WhatsApp.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5FF] border border-neutral-200 text-xs sm:text-sm text-[#1B1F4B] focus:outline-none focus:border-[#E8338C] placeholder:text-[#4B5070]/60 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5FF] border border-neutral-200 text-xs sm:text-sm text-[#1B1F4B] focus:outline-none focus:border-[#E8338C] placeholder:text-[#4B5070]/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                        Service Needed
                      </label>
                      <select
                        value={contactService}
                        onChange={(e) => setContactService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5FF] border border-neutral-200 text-xs sm:text-sm text-[#1B1F4B] focus:outline-none focus:border-[#E8338C] transition-colors"
                      >
                        <option value="Website & Web App">Website &amp; Web App</option>
                        <option value="Custom Business Software">Custom Business Software</option>
                        <option value="Mobile App (Android/iOS)">Mobile App (Android/iOS)</option>
                        <option value="AI Chatbots & Automation">AI Chatbots &amp; Automation</option>
                        <option value="SEO & Growth Marketing">SEO &amp; Growth Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                      Briefly describe what you need *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. We run a CA firm / clinic / factory and need a modern website and client booking form..."
                      value={contactNeed}
                      onChange={(e) => setContactNeed(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5FF] border border-neutral-200 text-xs sm:text-sm text-[#1B1F4B] focus:outline-none focus:border-[#E8338C] placeholder:text-[#4B5070]/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full btn-primary text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Developers</span>
                  </button>

                  <div className="text-[11px] text-center text-[#4B5070]">
                    Direct developer response · 100% privacy · No spam
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
