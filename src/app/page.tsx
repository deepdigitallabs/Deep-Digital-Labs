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
import { IconCloud } from '@/registry/magicui/icon-cloud';
import { BlinkingSquares } from '@/components/ui/blinking-squares';
import { CursorWave } from '@/components/ui/cursor-wave';
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
    role: "Founder & CA Partner",
    company: "Rahul B. Kavale & Co.",
    location: "Pune",
    initials: "RK",
    body: "Deep Digital Labs gave our CA firm an exceptional digital presence. The website loads in under a second, looks world-class, and our inbound client inquiries grew by 35% in the first 90 days.",
  },
  {
    name: "Operations Director",
    role: "Head of Operations",
    company: "Yashodeep Agro",
    location: "Pune & Solapur",
    initials: "YA",
    body: "They built our inventory tracking and billing portal from scratch. What used to take our team 3 days of manual paperwork is now handled in real time on our phones. It made daily work effortless.",
  },
  {
    name: "Pradeep Shinde",
    role: "Founder",
    company: "Dairy Flow Pro",
    location: "Pune",
    initials: "PS",
    body: "The speed and reliability are unbelievable. 100/100 Core Web Vitals, zero monthly builder fees, and direct WhatsApp access to the developer who actually built it. Best tech partner in Pune.",
  },
];

const TECH_SLUGS = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const TECH_CATEGORIES = [
  {
    id: "all",
    name: "All Tools",
    count: 30,
    title: "Complete Modern Engineering Stack",
    description: "Every tool we choose has a single purpose: making your software fast, reliable, and maintainable without legacy dependencies.",
    slugs: TECH_SLUGS,
    features: [
      {
        title: "Sub-Second Load Times",
        desc: "SSR & Static generation ensuring instant first paints under 0.8 seconds on 4G mobile networks.",
        tag: "Speed",
      },
      {
        title: "Zero Builder Lock-In",
        desc: "You own 100% of your source code, domain, database, and infrastructure with no recurring platform fees.",
        tag: "Ownership",
      },
      {
        title: "99.99% Availability",
        desc: "Cloud deployment across AWS & Vercel edge networks with automated DDoS mitigation and SSL certificates.",
        tag: "Uptime",
      },
      {
        title: "Enterprise Grade Security",
        desc: "ACID database compliance, encrypted data in transit & at rest, and strict OWASP security standards.",
        tag: "Security",
      },
    ],
  },
  {
    id: "frontend",
    name: "Web & Frontend",
    count: 6,
    title: "Next.js 15, React 19 & TypeScript",
    description: "Ultra-fast, mobile-first web applications built with Google's Core Web Vitals in mind from day one.",
    slugs: ["typescript", "javascript", "react", "nextdotjs", "html5", "css3"],
    features: [
      {
        title: "Next.js 15 Server Components",
        desc: "Zero-bundle overhead for static content, instant navigation, and maximum search engine discoverability.",
        tag: "Next.js",
      },
      {
        title: "Strict TypeScript Safety",
        desc: "100% statically typed interfaces eliminating runtime crashes before code ever touches production.",
        tag: "TypeScript",
      },
      {
        title: "Local Pune SEO Optimization",
        desc: "Embedded JSON-LD schemas, localized breadcrumbs, and OpenGraph social preview tags built-in.",
        tag: "SEO",
      },
      {
        title: "Mobile-First 60fps UX",
        desc: "Fluid gesture-based interfaces tailored for one-handed smartphone browsing with zero input lag.",
        tag: "Mobile UI",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    count: 4,
    title: "Flutter, Dart & Native Toolchains",
    description: "Build once and launch high-performance apps on both Google Play Store and Apple App Store.",
    slugs: ["flutter", "dart", "android", "androidstudio"],
    features: [
      {
        title: "Single Codebase Architecture",
        desc: "Cut development time and maintenance cost in half without sacrificing native device performance.",
        tag: "Cross-Platform",
      },
      {
        title: "Offline-First Data Caching",
        desc: "Local SQLite storage ensures your staff or customers can work uninterrupted during connectivity drops.",
        tag: "Offline",
      },
      {
        title: "Firebase Push Notifications",
        desc: "Instant targeted messages for order dispatch, transaction alerts, and promotional announcements.",
        tag: "FCM",
      },
      {
        title: "Turnkey App Store Publishing",
        desc: "We manage certificates, keystores, store guidelines compliance, and live production releases.",
        tag: "Store Deploy",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend & Databases",
    count: 5,
    title: "Node.js, PostgreSQL & Prisma",
    description: "Scalable APIs and relational transactional engines designed for high concurrency and zero data loss.",
    slugs: ["nodedotjs", "express", "postgresql", "prisma", "firebase"],
    features: [
      {
        title: "Sub-50ms API Latency",
        desc: "Lightweight Express & Node.js microservices engineered for rapid responses and low memory footprints.",
        tag: "REST API",
      },
      {
        title: "ACID Compliant PostgreSQL",
        desc: "Enterprise relational database with foreign key constraints, indexing, and transactional integrity.",
        tag: "Postgres",
      },
      {
        title: "Type-Safe Prisma ORM",
        desc: "Automated schema migrations and database type checks preventing invalid database writes.",
        tag: "Prisma",
      },
      {
        title: "Automated Backup Snapshots",
        desc: "Daily automated database backups with point-in-time restore capability for complete peace of mind.",
        tag: "Backups",
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    count: 8,
    title: "AWS, Docker, Vercel & CI/CD",
    description: "Automated build, test, and release pipelines deployed across secure, isolated server infrastructure.",
    slugs: ["amazonaws", "docker", "vercel", "nginx", "git", "github", "gitlab", "sonarqube"],
    features: [
      {
        title: "Global Edge CDN Caching",
        desc: "Static assets cached at 300+ edge locations worldwide for under 20ms response time anywhere in India.",
        tag: "CDN",
      },
      {
        title: "Docker Isolation",
        desc: "Containerized application runtimes guaranteeing that staging exactly matches production.",
        tag: "Containers",
      },
      {
        title: "Automated CI/CD Workflows",
        desc: "Git commit hooks that automatically run test suites and deploy staging environments in minutes.",
        tag: "CI/CD",
      },
      {
        title: "DDoS Mitigation & SSL",
        desc: "Nginx reverse proxy, automated Let's Encrypt SSL certificates, and IP rate limiting for security.",
        tag: "Protection",
      },
    ],
  },
  {
    id: "qa",
    name: "QA & UI/UX",
    count: 5,
    title: "Figma, Cypress, Jest & Jira",
    description: "From pixel-perfect interactive wireframes to automated test suites catching bugs before real users do.",
    slugs: ["figma", "jest", "cypress", "testinglibrary", "jira"],
    features: [
      {
        title: "Clickable Figma Prototypes",
        desc: "Experience every screen and flow on your mobile phone before a single line of code is written.",
        tag: "UI/UX",
      },
      {
        title: "Automated End-to-End Tests",
        desc: "Cypress test bots that simulate real customer logins, form submissions, and checkouts 24/7.",
        tag: "Cypress",
      },
      {
        title: "Component Unit Testing",
        desc: "Jest & Testing Library validating core business calculations, tax logic, and form validations.",
        tag: "Jest",
      },
      {
        title: "Transparent Agile Delivery",
        desc: "Weekly sprint demos, real-time Jira progress tracking, and direct developer communication.",
        tag: "Milestones",
      },
    ],
  },
];

export default function HomePage() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTechCategory, setActiveTechCategory] = useState<string>("all");

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
        
        {/* Interactive Cursor Wave Background (React Bits Pro) */}
        <CursorWave
          cellSize={38}
          influenceRadiusVmin={26}
          attackTime={0.4}
          releaseTime={0.65}
          idleScale={0.08}
          minPeakScale={0.9}
          maxPeakScale={2.5}
          burstSpeed={1200}
          burstThickness={160}
          shapeColor="#E8623C"
          shapes={["circle", "triangle", "square"]}
          className="absolute inset-0 size-full opacity-35 dark:opacity-25 -z-10 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-auto"
        />

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

        {/* Primary Action Button */}
        <div className="mt-8 flex justify-center items-center">
          <a
            href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20website%20or%20app%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#E8623C] hover:bg-[#F0744E] text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25 hover:shadow-xl hover:shadow-[#E8623C]/35 active:scale-98 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>Chat With Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
      {/* SECTION 6: CLIENT FEEDBACK (SIMPLE & HIGH CREDIBILITY)                    */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
            What Pune business owners say about us.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Real feedback from founders, CAs, and operations directors who run their businesses on our software.
          </p>
        </div>

        {/* Clean, Simple 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUNE_REVIEWS.map((review) => (
            <div
              key={review.name}
              className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-[#E8623C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal">
                  &ldquo;{review.body}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20 text-[#E8623C] font-bold text-xs flex items-center justify-center shrink-0 font-mono">
                  {review.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white truncate">
                    {review.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    {review.role} · {review.company}
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/[0.06] text-neutral-500 dark:text-neutral-400 shrink-0">
                  {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Trust Banner */}
        <div className="mt-12 p-4 rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600 dark:text-neutral-400 font-medium text-center">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>100% Real Pune Business Reviews</span>
          </span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>5-Star Average Satisfaction</span>
          </span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Ongoing Direct WhatsApp Support</span>
          </span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6.5: OUR MODERN TECHNOLOGY STACK (INTERACTIVE & FEATURE-PACKED)   */}
      {/* ========================================================================= */}
      <section id="technologies" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E8623C]/5 dark:bg-[#E8623C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Technologies We Work On
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display leading-tight">
            Engineered with modern, battle-tested tools.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            From high-performance frontend frameworks to cloud-native microservices, mobile apps, and scalable relational databases — click any category to see our working features in action.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TECH_CATEGORIES.map((cat) => {
            const isActive = activeTechCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTechCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2",
                  isActive
                    ? "bg-[#E8623C] text-white shadow-md shadow-[#E8623C]/25 scale-105"
                    : "bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 hover:border-[#E8623C]/40 hover:text-neutral-900 dark:hover:text-white"
                )}
              >
                <span>{cat.name}</span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-1.5 py-0.5 rounded-md",
                    isActive
                      ? "bg-black/20 text-white"
                      : "bg-neutral-100 dark:bg-white/[0.06] text-neutral-500 dark:text-neutral-400"
                  )}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Features on Left, Interactive 3D Sphere on Right */}
        {(() => {
          const currentCat =
            TECH_CATEGORIES.find((c) => c.id === activeTechCategory) ||
            TECH_CATEGORIES[0];
          const currentImages = currentCat.slugs.map(
            (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
          );

          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Category Info, Working Feature Cards, & Tech Badges */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Active Category Header */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8623C]">
                      {currentCat.name} Architecture
                    </span>
                    <span className="text-xs font-mono text-emerald-500 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production Ready
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-display">
                    {currentCat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {currentCat.description}
                  </p>

                  {/* Tech Slugs Badge Row */}
                  <div className="pt-2 border-t border-neutral-100 dark:border-white/[0.06] flex flex-wrap gap-2">
                    {currentCat.slugs.map((slug) => (
                      <span
                        key={slug}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/60 dark:border-white/[0.06] text-[11px] font-mono font-medium text-neutral-800 dark:text-neutral-200 capitalize"
                      >
                        <img
                          src={`https://cdn.simpleicons.org/${slug}/${slug}`}
                          alt={slug}
                          className="w-3.5 h-3.5 object-contain"
                          loading="lazy"
                        />
                        <span>{slug.replace('dotjs', '.js')}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4 Working Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentCat.features.map((feat, idx) => (
                    <div
                      key={feat.title}
                      className="p-4 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs hover:border-[#E8623C]/50 transition-all flex flex-col justify-between space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#E8623C]/10 text-[#E8623C] font-bold">
                          {feat.tag}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs font-mono text-neutral-500">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Showing {currentCat.slugs.length} technologies in 3D sphere</span>
                  </span>
                  <span className="hidden sm:inline">Drag or swipe right sphere to inspect</span>
                </div>

              </div>

              {/* Right Column: Interactive 3D IconCloud */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center rounded-3xl bg-neutral-100/70 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.08] p-4 shadow-xl">
                  <IconCloud key={activeTechCategory} images={currentImages} />
                </div>
              </div>

            </div>
          );
        })()}

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
      {/* SECTION 9: BOTTOM HIGH-IMPACT CTA BANNER (MAGIC UI GLOBE)                 */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative overflow-hidden text-center">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#E8623C]/30 via-amber-500/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-neutral-950 dark:bg-[#0E1118] border border-neutral-800 dark:border-white/[0.08] text-white shadow-2xl px-6 sm:px-12 pt-16 pb-48 sm:pb-64">
          
          {/* Magic UI Backdrop Header Typography */}
          <span className="pointer-events-none absolute top-8 sm:top-10 select-none bg-gradient-to-b from-white/15 via-white/5 to-transparent bg-clip-text text-center text-7xl sm:text-9xl md:text-[140px] font-extrabold font-display leading-none whitespace-pre-wrap text-transparent tracking-tighter">
            WORLDWIDE
          </span>

          {/* Interactive 3D WebGL Globe */}
          <InteractiveGlobe className="top-44 sm:top-40 md:top-36 max-w-[560px]" />

          {/* Radial gradient mask over the globe */}
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />

          {/* Foreground Content */}
          <div className="relative z-20 max-w-2xl mx-auto space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20 text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Get Started Today
            </span>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display leading-tight text-white">
              Ready to get more customers online?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Let&apos;s build a simple, fast, professional website or app for your business. Chat directly with your developer today.
            </p>

            <div className="pt-2 flex justify-center items-center">
              <a
                href="https://wa.me/919175152244?text=Hi,%20I%20want%20to%20discuss%20a%20website%20or%20app%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/30 hover:shadow-[#E8623C]/50 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-neutral-400 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8623C] animate-pulse" />
              <span>Pune, Maharashtra HQ · Serving businesses worldwide</span>
            </div>
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
