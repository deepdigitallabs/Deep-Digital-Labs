import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ShieldCheck,
  Smartphone,
  Search,
  Zap,
  TrendingUp,
  Layers,
  Phone,
  MessageSquare,
  Sparkles,
  Store,
  Shirt,
  Laptop,
  Truck,
  FileText,
  Lock,
  BarChart3,
  MapPin,
  CreditCard,
  RefreshCw,
  Gift,
  Share2,
  Check,
  ShoppingBag,
  ShoppingCart,
  Users,
  Award,
  Globe2,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { EcommercePageClient } from './EcommercePageClient';

export const metadata: Metadata = {
  title: "E-Commerce Website Design Company in Pune | Deep Digital Labs",
  description: "Fast, conversion-focused e-commerce website design in Pune. We build Shopify, WooCommerce & custom Next.js stores with Razorpay, UPI & instant checkout.",
  keywords: [
    "e-commerce website design in Pune",
    "ecommerce website development Pune",
    "Shopify developer Pune",
    "WooCommerce website Pune",
    "online store development Pune",
    "Next.js ecommerce Pune",
    "custom online store Pune",
    "e-commerce agency Pune",
    "Razorpay UPI integration Pune",
    "best ecommerce website design Pune"
  ],
  alternates: {
    canonical: "https://deepdigitallabs.com/ecommerce-website-design-pune",
  },
  openGraph: {
    title: "E-Commerce Website Design Company in Pune | Deep Digital Labs",
    description: "Fast, conversion-focused e-commerce website design in Pune. We build Shopify, WooCommerce, and custom Next.js stores with Razorpay, UPI & mobile checkout.",
    url: "https://deepdigitallabs.com/ecommerce-website-design-pune",
    siteName: "Deep Digital Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website Design Company in Pune | Deep Digital Labs",
    description: "Build an online store that turns visitors into paying customers. Shopify, WooCommerce, and Next.js stores engineered in Pune.",
  }
};

export default function EcommerceWebsiteDesignPunePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://deepdigitallabs.com/#localbusiness',
        name: 'Deep Digital Labs - E-Commerce Website Design in Pune',
        url: 'https://deepdigitallabs.com/ecommerce-website-design-pune',
        telephone: '+91-91751-52244',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pune',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411001',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.5204,
          longitude: 73.8567
        },
        description: 'E-commerce website design and development services in Pune for startups, direct-to-consumer (D2C) brands, retailers, and wholesale distributors.'
      },
      {
        '@type': 'Service',
        name: 'E-Commerce Website Design & Development',
        serviceType: 'E-Commerce Web Design',
        provider: {
          '@id': 'https://deepdigitallabs.com/#organization'
        },
        areaServed: [
          { '@type': 'City', name: 'Pune' },
          { '@type': 'City', name: 'Pimpri-Chinchwad' },
          { '@type': 'Country', name: 'India' }
        ],
        description: 'Conversion-optimized e-commerce websites built on Shopify, WooCommerce, or custom Next.js architecture with payment gateway integration, product search, and mobile optimization.'
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does an e-commerce website cost in Pune?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pricing starts from ₹24,999 and depends on the number of products, features, integrations, and level of customization. We share a clear quote after understanding your requirements.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I manage products and orders myself?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Every store comes with an easy admin dashboard to add products, update prices and stock, and manage orders. We also provide a walkthrough after launch.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you build Shopify and WooCommerce websites?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We build on Shopify and WooCommerce, and we also develop custom stores in Next.js and React when you need more flexibility and speed.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which payment gateways do you integrate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Razorpay, Stripe, PayU, PayPal, and UPI, along with cash on delivery where it suits your business.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will my e-commerce website be SEO-friendly?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We use clean product URLs, optimized page structure, product schema, and fast load times so your products can rank on Google.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will my website work well on mobile?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Stores are designed mobile-first, since most online shoppers browse and buy on their phones.'
            }
          },
          {
            '@type': 'Question',
            name: 'How long does it take to build an online store?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Timelines depend on scope, but most stores launch within 2–4 weeks of finalizing requirements.'
            }
          }
        ]
      }
    ]
  };

  const solutions = [
    {
      title: 'Online retail stores',
      desc: 'Seamless browsing, quick categories, and friction-free add-to-cart journeys for multi-product retail businesses.',
      icon: Store,
      tag: 'Retail'
    },
    {
      title: 'D2C and brand websites',
      desc: 'Distinctive visual storytelling that highlights brand identity, builds customer loyalty, and drives repeat direct sales.',
      icon: Sparkles,
      tag: 'Direct-to-Consumer'
    },
    {
      title: 'Fashion and apparel stores',
      desc: 'Visual lookbooks, multi-variant sizing matrices, high-res image zoom, and instant mobile fit guides.',
      icon: Shirt,
      tag: 'Fashion'
    },
    {
      title: 'Electronics and gadget sellers',
      desc: 'Detailed technical specifications, side-by-side product comparisons, warranty highlights, and serial tracking.',
      icon: Laptop,
      tag: 'Tech & Electronics'
    },
    {
      title: 'Beauty and skincare brands',
      desc: 'Ingredient spotlights, skin-type filters, customer before/after reviews, and recurring subscription options.',
      icon: Sparkles,
      tag: 'Beauty'
    },
    {
      title: 'Grocery and local delivery stores',
      desc: 'Pincode delivery validation, daily order cut-off slots, quick re-ordering lists, and zero commission burdens.',
      icon: Truck,
      tag: 'Hyperlocal'
    },
    {
      title: 'Wholesale and B2B ordering portals',
      desc: 'Tiered wholesale pricing, bulk order quantity discounts, GST invoice downloads, and credit payment approvals.',
      icon: Layers,
      tag: 'B2B & Wholesale'
    },
    {
      title: 'Digital product and course businesses',
      desc: 'Instant secure download links, customer account licensing, video player embeds, and zero physical shipping friction.',
      icon: FileText,
      tag: 'Digital Goods'
    },
    {
      title: 'Manufacturer catalogues with enquiry flows',
      desc: 'Engineered for manufacturers who need quotation requests, custom quantity estimations, and WhatsApp inquiry workflows.',
      icon: BarChart3,
      tag: 'Industrial'
    }
  ];

  const commonProblems = [
    {
      issue: 'High cart abandonment',
      impact: 'Customers leave when checkout takes too many steps or forces complex account creation.'
    },
    {
      issue: 'Long, confusing checkout steps',
      impact: 'Clunky forms and unclear progress bars make buyers lose patience right before paying.'
    },
    {
      issue: 'Weak product filtering and navigation',
      impact: 'Shoppers cannot find the exact size, color, or price range they want, so they bounce.'
    },
    {
      issue: 'Slow-loading product pages',
      impact: 'A 2-second delay drops conversions by over 20%, especially on mobile 4G networks.'
    },
    {
      issue: 'Few trust signals & unclear policies',
      impact: 'Missing customer reviews, hidden return policies, and absent security badges scare buyers away.'
    },
    {
      issue: 'Poor mobile shopping experience',
      impact: 'Tiny buttons, non-responsive tables, and difficult mobile keyboards kill 80% of Pune shoppers.'
    },
    {
      issue: 'Payment failures & gateway errors',
      impact: 'Unreliable checkout switches cause UPI timeouts and lost revenue that never recovers.'
    },
    {
      issue: 'Low visibility on Google for product searches',
      impact: 'Lacking canonical tags, structured schema, and fast indexing means competitors capture all organic traffic.'
    }
  ];

  const approachSteps = [
    {
      num: '01',
      title: 'Understanding your products, pricing, and target customers',
      desc: 'We start by analyzing your margins, average order value, target demographics in Pune and across India, and how your competitors position themselves.'
    },
    {
      num: '02',
      title: 'Building category structures around how people search and shop',
      desc: 'We structure clear taxonomy, intuitive filters (size, price, brand, use-case), and internal linking so customers land on the exact product in 2 clicks.'
    },
    {
      num: '03',
      title: 'Designing a clean, conversion-friendly UI/UX',
      desc: 'We eliminate visual clutter. High-contrast buy buttons, distraction-free product galleries, and instant sticky CTAs keep buyers focused on completing orders.'
    },
    {
      num: '04',
      title: 'Building trust through reviews, policy clarity, and layout',
      desc: 'We integrate verified review badges, transparent delivery timeframes, easy return guarantees, and secure payment credentials at every friction point.'
    },
    {
      num: '05',
      title: 'Streamlining checkout to cut drop-offs',
      desc: 'We build 1-page checkouts with guest checkout enabled, autofill address fields, and 1-tap instant UPI payments to minimize drop-offs.'
    }
  ];

  const whatIsIncluded = [
    {
      title: 'Custom homepage and shop layout',
      desc: 'Tailored brand aesthetic that reflects your unique market positioning, not generic cloned templates.'
    },
    {
      title: 'Product and category page setup',
      desc: 'High-converting product displays with multi-image sliders, inventory badges, and clear specifications.'
    },
    {
      title: 'Fully responsive, mobile-first design',
      desc: 'Engineered specifically for thumb zones on smartphones, ensuring fluid touch gestures and rapid navigation.'
    },
    {
      title: 'Speed optimization for product-heavy stores',
      desc: 'Next-gen WebP image compression, edge CDN delivery, and code minification for sub-second load times.'
    },
    {
      title: 'SEO-friendly URL structure and product schema',
      desc: 'Clean URLs (e.g. /shop/product-name) and automated JSON-LD schema so Google shows rich star ratings and pricing in search.'
    },
    {
      title: 'Secure payment gateway integration',
      desc: 'Full setup of Razorpay, Stripe, PayU, PayPal, and instant UPI QR payments with 100% PCI-DSS compliance.'
    },
    {
      title: 'Cart and checkout flow optimization',
      desc: 'Frictionless slide-out cart drawers, order bumps, free shipping progress bars, and minimal checkout steps.'
    },
    {
      title: 'Shipping, tax, and order configuration',
      desc: 'Automatic GST invoicing, zone-based shipping rules, courier API hooks (Shiprocket, Delhivery), and COD verification.'
    },
    {
      title: 'WhatsApp and enquiry integration',
      desc: 'Floating WhatsApp order assistance, automated order confirmation pings, and direct customer communication.'
    },
    {
      title: 'Easy-to-use admin dashboard',
      desc: 'Manage your entire store without touching code: update stock, adjust pricing, view analytics, and export orders easily.'
    }
  ];

  const salesBoostFeatures = [
    {
      title: 'Smart filters and sorting',
      desc: 'Filter instantly by price range, brand, color, size, and in-stock status without frustrating full page reloads.',
      icon: Search
    },
    {
      title: 'Upsell and cross-sell sections',
      desc: 'Smart "Frequently Bought Together" recommendations and post-purchase add-ons that lift Average Order Value (AOV).',
      icon: TrendingUp
    },
    {
      title: 'Customer reviews and ratings',
      desc: 'Verified photo and video review collection that builds immediate buyer confidence and social proof.',
      icon: Award
    },
    {
      title: 'Abandoned cart recovery setup',
      desc: 'Automated WhatsApp and email reminders to bring shoppers back with saved carts and gentle incentives.',
      icon: RefreshCw
    },
    {
      title: 'Coupons and discount logic',
      desc: 'Create percentage discounts, BOGO offers, free shipping thresholds, and first-time buyer coupons effortlessly.',
      icon: Gift
    },
    {
      title: 'Order tracking and customer accounts',
      desc: 'Self-service customer portal where buyers can track courier dispatch status, view past invoices, and manage addresses.',
      icon: Truck
    },
    {
      title: 'Analytics and conversion tracking readiness',
      desc: 'Pre-configured Google Analytics 4 (GA4) e-commerce events, Meta Pixel, and Google Ads conversion tags.',
      icon: BarChart3
    },
    {
      title: 'Product schema for better Google visibility',
      desc: 'Structured Product & Offer schema that helps your catalog appear in Google Shopping and organic rich snippets.',
      icon: ShieldCheck
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirement Understanding',
      desc: 'We learn about your products, audience, competitors, and sales goals.'
    },
    {
      step: '02',
      title: 'Store Structure and Flow Planning',
      desc: 'We plan the category hierarchy, product page layout, and checkout journey.'
    },
    {
      step: '03',
      title: 'Design and Development',
      desc: 'We build a modern, mobile-first store on the platform that fits you best.'
    },
    {
      step: '04',
      title: 'Product and Conversion Setup',
      desc: 'We place products, offers, calls to action, and trust elements where they convert.'
    },
    {
      step: '05',
      title: 'SEO and Speed Optimization',
      desc: 'We set up a search-ready structure with fast load times and schema markup.'
    },
    {
      step: '06',
      title: 'Launch and Support',
      desc: 'We launch your store, walk you through the dashboard, and stay available after delivery.'
    }
  ];

  const puneLocalities = [
    'Pune Camp & MG Road',
    'Pimpri-Chinchwad (PCMC)',
    'Kothrud & Karve Nagar',
    'Baner & Balewadi High Street',
    'Wakad & Pimple Saudagar',
    'Hinjewadi IT Hub',
    'Viman Nagar & Airport Road',
    'Hadapsar & Magarpatta City',
    'Koregaon Park & Kalyani Nagar',
    'Aundh & Model Colony',
    'Shivaji Nagar & FC Road',
    'Senapati Bapat Road'
  ];

  const whyChooseUs = [
    {
      title: 'Modern Tech Stack',
      desc: 'Next.js, React, Node.js, and Django for custom high-speed stores, plus Shopify and WooCommerce when managed platforms suit your budget.',
      icon: Cpu
    },
    {
      title: 'Strong Focus on Conversion Rate Optimization',
      desc: 'We do not build digital brochures. Every layout, button placement, and micro-copy is calculated to turn visitors into paying customers.',
      icon: TrendingUp
    },
    {
      title: 'Automation & Integrations',
      desc: 'WhatsApp order notifications, CRM syncing, n8n automated workflows, inventory alerts, and AI-powered search.',
      icon: Zap
    },
    {
      title: 'SEO & Google Visibility Support',
      desc: 'Local Pune search positioning, Google Merchant Center feed readiness, and clean semantic markup for top organic rankings.',
      icon: Globe2
    },
    {
      title: 'Transparent, Affordable Pricing',
      desc: 'Clear upfront quotes starting from ₹24,999. Zero hidden charges, zero unexpected hosting markups, and full code & store ownership.',
      icon: ShieldCheck
    },
    {
      title: 'Ongoing Support After Launch',
      desc: 'We do not disappear after deployment. You get direct developer access via phone and WhatsApp for updates and scaling guidance.',
      icon: Users
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#E8623C] selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-6 max-w-6xl mx-auto text-center overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8623C]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white/70 dark:bg-[#12151D]/80 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium mb-6 shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-[#E8623C]" />
          <span>E-Commerce Website Design Services for Online Businesses in Pune</span>
        </div>

        <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white font-display max-w-5xl mx-auto leading-[1.12]">
          E-Commerce Website Design in Pune That Turns Visitors into Customers
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          An online store is more than a product catalogue. It has to build trust, make buying effortless, and bring customers back. At Deep Digital Labs, we design and develop fast, conversion-focused e-commerce websites for startups, retailers, and growing brands in Pune and across India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <Link
            href="/contact?service=ecommerce-audit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/25 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get a Free Website Audit</span>
          </Link>

          <a
            href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs%2C%20I%20am%20looking%20for%20an%20e-commerce%20website%20design%20in%20Pune."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-white/[0.12] bg-white dark:bg-white/[0.04] text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] font-bold text-sm sm:text-base transition-all shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>Talk to Us on WhatsApp</span>
          </a>
        </div>

        {/* Quick Highlights / Trust Pills */}
        <div className="mt-12 pt-8 border-t border-neutral-200/80 dark:border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-3.5 rounded-xl bg-white/50 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.04]">
            <div className="text-xs font-mono text-[#E8623C] font-bold">⚡ SPEED</div>
            <div className="text-sm font-bold text-neutral-900 dark:text-white mt-1">Sub-Second Loads</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Core Web Vitals optimized</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/50 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.04]">
            <div className="text-xs font-mono text-emerald-500 font-bold">💳 PAYMENTS</div>
            <div className="text-sm font-bold text-neutral-900 dark:text-white mt-1">UPI &amp; Razorpay</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Zero drop-off checkout</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/50 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.04]">
            <div className="text-xs font-mono text-blue-500 font-bold">📱 MOBILE FIRST</div>
            <div className="text-sm font-bold text-neutral-900 dark:text-white mt-1">Thumb-Friendly UX</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Built for Indian shoppers</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white/50 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.04]">
            <div className="text-xs font-mono text-amber-500 font-bold">🛡️ OWNERSHIP</div>
            <div className="text-sm font-bold text-neutral-900 dark:text-white mt-1">100% Code &amp; Data</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">No proprietary lock-in</div>
          </div>
        </div>
      </section>

      {/* Section 2: Professional E-Commerce Website Development for Online Stores */}
      <section className="py-20 px-6 bg-neutral-50/60 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Engineering Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
              Professional E-Commerce Website Development for Online Stores
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Selling online is different from running a regular business website. Your store has to guide people from browsing to product selection to a secure checkout without friction. Every extra step, slow page, or unclear policy costs you a sale.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Whether you want a <strong className="text-neutral-900 dark:text-white">Shopify store</strong>, a <strong className="text-neutral-900 dark:text-white">WooCommerce website</strong>, or a <strong className="text-neutral-900 dark:text-white">fully custom store built on Next.js and React</strong>, our focus stays the same: higher conversions and a store that scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Clean, conversion-optimized layouts
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Design that removes clutter and guides buyer eyes toward product value, clear pricing, and prominent buy buttons.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Smart product navigation &amp; filtering
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Instant live search, multi-attribute filtering (size, color, price, availability), and intuitive category hierarchies.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Secure payment gateway integration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Seamless Razorpay, Stripe, PayU, PayPal, and instant UPI QR payments with automated webhook failover and COD validation.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Mobile-first shopping experience
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Designed for one-thumb mobile browsing, sticky add-to-cart buttons, quick bottom sheets, and swift checkout flows.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Cart &amp; checkout drop-off reduction
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Guest checkout, autofill addresses, clear delivery estimates, and transparent return guarantees to curb cart abandonment.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] shadow-sm hover:border-[#E8623C]/50 transition-all space-y-3">
              <div className="w-11 h-11 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center font-bold">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                SEO-ready store structure &amp; URLs
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Clean product URLs, automated schema markup, Google Merchant Center feed exports, and lightning-fast server responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: E-Commerce Solutions We Build */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Tailored Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
            E-Commerce Solutions We Build
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Each business gets a layout, product display strategy, and feature set tailored to how its customers actually buy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] hover:border-[#E8623C] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/[0.06] text-[#E8623C] flex items-center justify-center group-hover:bg-[#E8623C] group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-300">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-[#E8623C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-white/[0.04] flex items-center gap-1.5 text-xs font-semibold text-[#E8623C]">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Common Problems Online Stores Face */}
      <section className="py-20 px-6 bg-neutral-50/60 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
              The Reality of Underperforming Stores
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
              Common Problems Online Stores Face
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Most underperforming stores share the same issues that silently kill sales and waste marketing spend:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-red-500/20 dark:border-red-500/10 space-y-2 hover:border-red-500/40 transition-all"
              >
                <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>{prob.issue}</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {prob.impact}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Digital Labs Solution Banner */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#E8623C]/10 via-transparent to-transparent border border-[#E8623C]/30 text-center max-w-4xl mx-auto space-y-2">
            <p className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
              These problems directly hurt sales and brand credibility.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              We design every store to avoid them from day one with proven conversion architecture and rigorous pre-launch testing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach: Strategy First, Design Second */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
            Our Approach: Strategy First, Design Second
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            We don&apos;t use one-size-fits-all templates. Every store starts with your products, margins, and buyers.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {approachSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:border-[#E8623C]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8623C]/10 text-[#E8623C] font-mono font-bold text-lg flex items-center justify-center shrink-0">
                {step.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: What's Included in Every E-Commerce Website */}
      <section className="py-20 px-6 bg-neutral-50/60 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Complete Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
              What&apos;s Included in Every E-Commerce Website
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Your store is built to be secure, scalable, and ready to grow with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatIsIncluded.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Features That Boost Sales */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Revenue Maximizers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
            Features That Boost Sales
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Depending on your business, we add features that improve usability and increase average order value:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {salesBoostFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] hover:border-[#E8623C]/50 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 8: Our Process */}
      <section className="py-20 px-6 bg-neutral-50/60 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Step-by-Step Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
              Our Process
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              A transparent, structured development journey from initial brainstorm to public launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-3 relative overflow-hidden"
              >
                <div className="text-4xl font-mono font-bold text-[#E8623C]/20 absolute top-4 right-4 select-none">
                  {p.step}
                </div>
                <div className="text-xs font-mono font-bold text-[#E8623C]">
                  PHASE {p.step}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Serving E-Commerce Businesses in Pune and Beyond */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Pune &amp; Regional Reach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
            Serving E-Commerce Businesses in Pune and Beyond
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We work with online businesses across <strong className="text-neutral-900 dark:text-white">Pune, Pimpri-Chinchwad, Kothrud, Baner, Wakad, Hinjewadi, Viman Nagar, Hadapsar, and Koregaon Park</strong>, as well as brands across India and internationally.
          </p>
          <p className="text-sm text-[#E8623C] font-semibold">
            If you&apos;re looking for an e-commerce website developer in Pune, you&apos;re in the right place.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {puneLocalities.map((loc) => (
            <div
              key={loc}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 shadow-xs flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E8623C]" />
              <span>{loc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10: Why Choose Deep Digital Labs */}
      <section className="py-20 px-6 bg-neutral-50/60 dark:bg-[#0A0B0E] border-y border-neutral-200/80 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
              Our Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display">
              Why Choose Deep Digital Labs
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Engineered for merchants and brands that want real revenue growth, direct communication, and lasting technical ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] space-y-3 hover:border-[#E8623C]/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                    {w.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 11: FAQs (Interactive Client Component) */}
      <EcommercePageClient />

      {/* Section 12: Call to Action */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-neutral-950 text-white relative overflow-hidden space-y-6 shadow-2xl border border-neutral-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8623C]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#E8623C] text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Developer Access · Pune Engineering Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display max-w-2xl mx-auto">
            Get a Free Website Audit for Your Online Store
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Ready to launch a new store or fix one that isn&apos;t converting? Let&apos;s talk.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <Link
              href="/contact?service=ecommerce-audit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#E8623C]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get a Free Website Audit</span>
            </Link>

            <a
              href="tel:+919175152244"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-neutral-700 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now (+91 91751 52244)</span>
            </a>

            <a
              href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs%2C%20I%20want%20to%20discuss%20an%20e-commerce%20website%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Starting from ₹24,999
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Live in 2–4 Weeks
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Code &amp; Domain Ownership
            </span>
          </div>
        </div>
      </section>

      {/* Cross-linking back to Pune Main Studio & Solutions */}
      <section className="pb-16 px-6 max-w-4xl mx-auto text-center text-xs text-neutral-500 dark:text-neutral-400">
        <p>
          Also looking for general corporate websites or custom business software? Visit our{' '}
          <Link href="/pune-website-development-company" className="text-[#E8623C] hover:underline font-semibold">
            Pune Website Development Studio
          </Link>{' '}
          or explore our{' '}
          <Link href="/solutions" className="text-[#E8623C] hover:underline font-semibold">
            Industry Solutions
          </Link>.
        </p>
      </section>
    </div>
  );
}
