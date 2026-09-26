import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Search, 
  Users, 
  ShieldCheck, 
  Star,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Website Development Company in Pune | Deep Digital Labs",
  description: "Looking for a trusted website development company in Pune? Deep Digital Labs creates fast, professional websites and apps for growing Pune businesses. Direct developer access & 100% code ownership.",
  keywords: [
    "website development company in Pune",
    "web design company Pune",
    "web development services Pune",
    "best website developer in Pune",
    "WordPress alternative Pune",
    "small business website Pune",
    "app development company Pune",
    "e-commerce website development Pune"
  ],
  openGraph: {
    title: "Website Development Company in Pune | Deep Digital Labs",
    description: "Deep Digital Labs builds fast, mobile-friendly websites and apps for small & growing businesses in Pune. Free consultation & direct developer access.",
    url: "https://deepdigitallabs.com/pune-website-development-company",
  }
};

export default function PuneWebsiteDevelopmentPage() {
  const puneLocalities = [
    'Baner & Balewadi',
    'Hinjawadi IT Park',
    'Shivaji Nagar & FC Road',
    'Kothrud & Karve Nagar',
    'Viman Nagar & Kalyani Nagar',
    'Hadapsar & Magarpatta',
    'Wakad & Pimple Saudagar',
    'PCMC (Pimpri-Chinchwad)',
    'Camp & Swargate'
  ];

  const industriesServed = [
    { title: 'CA Firms & Corporate Advisory', desc: 'Trustworthy, high-credibility websites that generate verified corporate inbound inquiries.' },
    { title: 'Agri-Tech & Commerce', desc: 'Custom product catalogs, inventory management, and fast billing software.' },
    { title: 'Logistics & Supply Chain', desc: 'Consignment tracking platforms, client portals, and fleet operations.' },
    { title: 'Healthcare & Clinics', desc: 'Doctor appointment booking, clinic locations, and patient communication portals.' },
    { title: 'Real Estate & Construction', desc: 'High-speed property showcases, lead capture forms, and project brochures.' },
    { title: 'Retail & Local E-Commerce', desc: 'Direct online ordering with UPI payments, WhatsApp alerts, and zero marketplace commission.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#E8623C] selection:text-white">
      
      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white/70 dark:bg-[#12151D]/80 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#E8623C]" />
          <span>Local Engineering Studio in Pune, Maharashtra</span>
        </div>

        <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white font-display max-w-4xl mx-auto leading-tight">
          Website Development Company in Pune
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          We help small businesses, professionals, and growing enterprises in Pune build clean, fast-loading, mobile-friendly websites that turn local visitors into paying customers — with zero tech jargon.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <a
            href="https://wa.me/919175152244?text=Hi,%20I%20am%20looking%20for%20a%20website%20development%20company%20in%20Pune."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Us on WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] text-neutral-800 dark:text-white hover:bg-neutral-100 font-semibold text-sm sm:text-base transition-all"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Deep Digital Labs in Pune */}
      <section className="py-16 px-6 bg-neutral-50/50 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
              Built for Pune Businesses That Want Real Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">Direct Developer Access</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                You talk directly to the software engineer building your website via WhatsApp or phone. No agency sales reps or frustrating ticket queues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">Pune Local SEO Ready</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Optimized from day one for Google Search and Google Maps, helping customers across Pune discover your business before your competitors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">100% Ownership</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                You own 100% of your code, design assets, and domain. No monthly platform lock-ins or proprietary CMS restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pune Localities Covered */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Pune Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white font-display">
            Serving Businesses Across All Pune Neighborhoods
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Whether you run a firm in Baner, a startup in Hinjawadi, or a retail hub in Kothrud, we provide fast, in-person and digital support.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {puneLocalities.map((loc) => (
            <div
              key={loc}
              className="px-4 py-2 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 shadow-xs flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E8623C]" />
              <span>{loc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-6 bg-neutral-50/50 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Industries We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white font-display">
              Proven Experience Across Pune Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industriesServed.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-2"
              >
                <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white text-base">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for Pune Businesses */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display">
            Common Questions From Pune Business Owners
          </h2>
        </div>

        <div className="space-y-4 text-left">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-2">
            <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">
              How much does a professional website cost in Pune?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Our Starter Website package begins with transparent pricing and no hidden costs. You receive custom design, mobile responsiveness, domain setup, and local SEO included.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-2">
            <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">
              How long does it take to launch?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Most business websites in Pune are ready in 2 to 4 weeks. You approve a visual preview first before we finalize the build.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-2">
            <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">
              Can we meet in person in Pune?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Yes, our engineering team is based in Pune. We are happy to coordinate in-person strategy sessions or communicate directly via WhatsApp and Google Meet.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="p-10 rounded-3xl bg-neutral-950 text-white space-y-5">
          <h2 className="text-2xl sm:text-4xl font-bold font-display">
            Start Your Pune Website Project Today
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Get an honest review of what your business needs, with zero tech jargon. Chat with our Pune developer team now.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20website%20project%20in%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#E8623C] text-white font-bold text-sm hover:bg-[#F0744E] transition-all"
            >
              Chat on WhatsApp: +91 91751 52244
            </a>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-neutral-700 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
