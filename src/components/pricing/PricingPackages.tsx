'use client';

import React, { useState } from 'react';
import { 
  Check, 
  Clock, 
  MessageSquare, 
  Globe, 
  Database, 
  Smartphone, 
  Bot, 
  Sparkles,
  HelpCircle,
  ArrowRight,
  Layers,
  FileText,
  Users,
  Cpu,
  Zap
} from 'lucide-react';

interface PricingCard {
  tier: 'Basic' | 'Medium' | 'High';
  title: string;
  isPopular?: boolean;
  bestFor: string;
  readyIn: string;
  bullets: string[];
  waMessage: string;
}

interface ServiceTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  cards: PricingCard[];
}

const PRICING_TABS: ServiceTab[] = [
  {
    id: 'websites',
    label: 'Websites',
    icon: Globe,
    cards: [
      {
        tier: 'Basic',
        title: 'Basic Website',
        bestFor: 'Single-service shops, doctors, local clinics, and independent consultants needing a clean, professional web presence.',
        readyIn: 'Usually ready in 1 to 2 weeks',
        bullets: [
          'Up to 5 pages showing your services, photos, and team',
          'Fast loading on mobile phones and desktop computers',
          'Direct WhatsApp chat button and click-to-call links',
          'Google Maps location and business hours setup'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Websites - Basic Package.'
      },
      {
        tier: 'Medium',
        title: 'Growth Website',
        isPopular: true,
        bestFor: 'Growing companies, CA firms, manufacturers, and local brands wanting steady inquiries from Google.',
        readyIn: 'Usually ready in 2 to 3 weeks',
        bullets: [
          'Up to 10 custom pages with product or service catalog',
          'Fast loading on mobile with complete local SEO setup',
          'Custom lead forms that send new inquiries straight to WhatsApp',
          'Full ownership of your website code, domain, and hosting'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Websites - Medium Growth Package.'
      },
      {
        tier: 'High',
        title: 'High Custom Portal',
        bestFor: 'Businesses needing client self-service, booking engines, member logins, or online payment collection.',
        readyIn: 'Usually ready in 3 to 5 weeks',
        bullets: [
          'Custom web portal with customer login and dashboards',
          'Secure online payments and automated invoice generation',
          'Admin dashboard to manage content, leads, and orders',
          'Fast loading on mobile with dedicated launch training'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Websites - High Custom Portal Package.'
      }
    ]
  },
  {
    id: 'software',
    label: 'Business Software',
    icon: Database,
    cards: [
      {
        tier: 'Basic',
        title: 'Basic Internal Tool',
        bestFor: 'Small offices and shops wanting to replace error-prone Excel sheets with a simple, secure record system.',
        readyIn: 'Usually ready in 2 to 3 weeks',
        bullets: [
          'Clean staff login to log daily entries, orders, and clients',
          'Organized customer directory and past transaction history',
          'One-click download of summary reports to Excel and PDF',
          'Fast loading on mobile, tablets, and office computers'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Business Software - Basic Package.'
      },
      {
        tier: 'Medium',
        title: 'Custom ERP / CRM',
        isPopular: true,
        bestFor: 'Factories, wholesale distributors, and agencies managing stock, staff duties, and customer billing.',
        readyIn: 'Usually ready in 3 to 5 weeks',
        bullets: [
          'Role-based logins for staff, accountants, and managers',
          'Live inventory tracking and automated stock alerts',
          'GST invoicing, payment tracking, and balance reminders',
          'Automated daily data backups with zero data lock-in'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Business Software - Medium Package.'
      },
      {
        tier: 'High',
        title: 'Multi-Branch System',
        bestFor: 'Companies with multiple locations, warehouses, or large teams needing interconnected custom systems.',
        readyIn: 'Usually ready in 5 to 8 weeks',
        bullets: [
          'Central owner dashboard connecting multiple branches in real time',
          'Custom workflow approvals for purchases and billing',
          'Integration with WhatsApp alerts and accounting tools',
          'Complete source code handover and on-site staff training'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Business Software - High Package.'
      }
    ]
  },
  {
    id: 'apps',
    label: 'Mobile Apps',
    icon: Smartphone,
    cards: [
      {
        tier: 'Basic',
        title: 'Basic Business App',
        bestFor: 'Businesses wanting a clean, branded Android and iOS app to share catalog items and accept client inquiries.',
        readyIn: 'Usually ready in 2 to 3 weeks',
        bullets: [
          'Clean, smooth app running on both Android and iPhone',
          'Product catalog with tap-to-inquire on WhatsApp',
          'Push notifications to send seasonal announcements',
          'Full publishing on Google Play Store and Apple App Store'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Mobile Apps - Basic Package.'
      },
      {
        tier: 'Medium',
        title: 'Ordering & Customer App',
        isPopular: true,
        bestFor: 'Retailers, food brands, clinics, and service providers wanting repeat customer orders and bookings.',
        readyIn: 'Usually ready in 4 to 6 weeks',
        bullets: [
          'Customer phone OTP login with profile and saved address',
          'Integrated UPI, card, and net-banking online payments',
          'Web admin panel to manage menu items, prices, and orders',
          'Fast loading on mobile with offline data caching'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Mobile Apps - Medium Package.'
      },
      {
        tier: 'High',
        title: 'Full Dual-App Platform',
        bestFor: 'On-demand services, delivery fleets, or logistics businesses requiring connected customer and driver apps.',
        readyIn: 'Usually ready in 6 to 9 weeks',
        bullets: [
          'Two linked apps: Customer App + Partner/Driver App',
          'Live GPS map tracking and real-time status updates',
          'In-app chat, wallet system, and automated commissions',
          'Complete source code handover with cloud server setup'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Mobile Apps - High Package.'
      }
    ]
  },
  {
    id: 'chatbots',
    label: 'Chatbots & Automation',
    icon: Bot,
    cards: [
      {
        tier: 'Basic',
        title: 'WhatsApp Auto-Reply Bot',
        bestFor: 'Businesses receiving repeated basic inquiries like catalog, address, office hours, and price lists.',
        readyIn: 'Usually ready in 1 to 2 weeks',
        bullets: [
          'Instant 24/7 automated replies to common customer questions',
          'Interactive buttons to view PDF brochures and map directions',
          'Collects caller name and requirement for your sales team',
          'Works seamlessly on your existing business WhatsApp number'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Chatbots & Automation - Basic Package.'
      },
      {
        tier: 'Medium',
        title: 'Smart AI Lead Bot',
        isPopular: true,
        bestFor: 'Clinics, institutes, and service businesses needing automatic customer qualification and appointment booking.',
        readyIn: 'Usually ready in 2 to 3 weeks',
        bullets: [
          'Natural AI chat that understands English, Hindi, and Hinglish',
          'Qualifies leads automatically and schedules appointments',
          'Sends instant lead alerts to the business owner on WhatsApp',
          'Fast loading on mobile with integrated website chat widget'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Chatbots & Automation - Medium Package.'
      },
      {
        tier: 'High',
        title: 'Full Workflow Automation',
        bestFor: 'Companies wanting to connect WhatsApp, website inquiries, CRM, and billing into an automated pipeline.',
        readyIn: 'Usually ready in 3 to 5 weeks',
        bullets: [
          'Auto-generates estimates, invoices, and payment links in chat',
          'Multi-agent shared team inbox for your sales and support staff',
          'Automatic follow-up reminders to clients who went silent',
          'Custom integrations with your internal software and database'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the Chatbots & Automation - High Package.'
      }
    ]
  },
  {
    id: 'seo',
    label: 'SEO & Marketing',
    icon: Sparkles,
    cards: [
      {
        tier: 'Basic',
        title: 'Local Pune SEO',
        bestFor: 'Local shops, dental clinics, CA practices, and institutes wanting to show up in the top 3 on Google Maps.',
        readyIn: 'Usually ready in 1 to 2 weeks',
        bullets: [
          'Complete Google Business Profile setup and verification',
          'Targeting local Pune keywords for your specific area and service',
          'Direct Google review QR code and customer feedback link',
          'Clear monthly report in Class 8 language showing call growth'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the SEO & Marketing - Basic Package.'
      },
      {
        tier: 'Medium',
        title: 'Organic Growth SEO',
        isPopular: true,
        bestFor: 'Businesses wanting consistent high-quality inquiries every week without paying daily advertisement costs.',
        readyIn: 'Usually ready in 2 to 3 weeks',
        bullets: [
          'In-depth keyword research for buyer searches in your industry',
          'On-page website speed optimization and search meta tags',
          '4 customer-focused blog articles per month written for Pune buyers',
          'Fast loading on mobile to continuously boost search rankings'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the SEO & Marketing - Medium Package.'
      },
      {
        tier: 'High',
        title: 'Complete Growth Marketing',
        bestFor: 'Companies ready to scale aggressively using combined Google SEO and targeted Meta / Google Ad campaigns.',
        readyIn: 'Usually ready in 2 to 3 weeks',
        bullets: [
          'Full technical Google SEO and content authority management',
          'High-converting Google Ads and Instagram campaign setup',
          'Call and lead conversion tracking to measure real revenue',
          'Bi-weekly review meetings with our team to improve lead quality'
        ],
        waMessage: 'Hi Deep Digital Labs, I would like a free quote for the SEO & Marketing - High Package.'
      }
    ]
  }
];

const DIFFER_FACTORS = [
  {
    icon: FileText,
    title: 'Pages & Screens',
    desc: 'A 5-page informational site requires less design and testing than a 25-screen interactive application.'
  },
  {
    icon: Zap,
    title: 'Custom Features',
    desc: 'Features like customer logins, payment gateways, booking calendars, or custom calculators add development scope.'
  },
  {
    icon: Users,
    title: 'Number of Users',
    desc: 'An internal tool for 5 team members has different server and security requirements than a system built for thousands.'
  },
  {
    icon: Cpu,
    title: 'Integrations',
    desc: 'Connecting with third-party tools like WhatsApp API, GST billing software, or payment providers.'
  },
  {
    icon: Clock,
    title: 'Delivery Speed',
    desc: 'Standard delivery follows our regular milestones, while rush or expedited deadlines need dedicated focus.'
  }
];

export function PricingPackages() {
  const [activeTabId, setActiveTabId] = useState('websites');
  const activeTab = PRICING_TABS.find((t) => t.id === activeTabId) || PRICING_TABS[0];

  return (
    <section 
      className="w-full py-20 bg-white border-b border-neutral-200/80" 
      id="pricing"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 text-center items-center">
          <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1B1F4B]">
            Choose the Right Package for Your{' '}
            <span className="bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] bg-clip-text text-transparent">
              Business
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5070] max-w-2xl leading-relaxed">
            Every business is different, so we quote based on what you need. Fixed quote, pay in stages, no hidden costs, no monthly fees.
          </p>
        </div>

        {/* Service Tabs - Mobile First Horizontal Scroll */}
        <div className="w-full mb-10">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto scrollbar-none pb-2 sm:pb-0 gap-2">
            <div className="inline-flex p-1.5 rounded-full bg-[#F7F5FF] border border-neutral-200/80 shadow-xs">
              {PRICING_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] text-white shadow-md shadow-[#F0367A]/25'
                        : 'text-[#1B1F4B] hover:text-[#E8338C] hover:bg-white/60'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Package Cards for Active Tab */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {activeTab.cards.map((card) => {
            const isMedium = card.isPopular;
            return (
              <div
                key={card.tier}
                className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  isMedium
                    ? 'border-2 border-[#E8338C] shadow-lg md:-translate-y-1'
                    : 'border border-neutral-200/90 shadow-sm hover:border-[#E8338C]/40 hover:shadow-md'
                }`}
              >
                {isMedium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#E8338C] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col">
                  <div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      isMedium ? 'text-[#E8338C]' : 'text-[#1B1F4B]/60'
                    }`}>
                      {card.tier}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-[#1B1F4B] mt-1">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5070] mt-2 min-h-[48px] leading-relaxed">
                      <span className="font-semibold text-[#1B1F4B]">Best for: </span>
                      {card.bestFor}
                    </p>
                  </div>

                  {/* Price Line Replacement */}
                  <div className="py-4 border-y border-neutral-100 my-5">
                    <span className="text-[11px] text-[#E8338C] font-mono uppercase font-semibold block">
                      Pricing
                    </span>
                    <div className="text-base sm:text-lg font-bold font-display text-[#1B1F4B] mt-1">
                      Fixed quote after a free 15-minute call
                    </div>
                    <span className="text-xs text-[#4B5070] mt-1.5 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FF7A1A] shrink-0" />
                      <span>{card.readyIn}</span>
                    </span>
                  </div>

                  {/* 4 Plain-Language Bullets */}
                  <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#4B5070] mb-6">
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#E8338C] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Free Quote CTA */}
                <div className="pt-5 border-t border-neutral-100">
                  <a
                    href={`https://wa.me/917756063128?text=${encodeURIComponent(card.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      isMedium
                        ? 'bg-gradient-to-r from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] hover:opacity-95 text-white shadow-md shadow-[#F0367A]/25 hover:shadow-lg hover:-translate-y-0.5'
                        : 'bg-white border-2 border-[#1B1F4B] text-[#1B1F4B] hover:border-[#E8338C] hover:text-[#E8338C] hover:-translate-y-0.5'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Get a Free Quote</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Do Prices Differ? Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F7F5FF] border border-neutral-200/80 shadow-xs">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8338C] font-semibold">
              Transparent Factors
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1B1F4B] mt-1">
              Why do prices differ?
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5070] mt-1 leading-relaxed">
              We don&apos;t use cookie-cutter templates. Every project is scoped according to your exact requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {DIFFER_FACTORS.map((factor, idx) => {
              const FactorIcon = factor.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-white border border-neutral-200/60 shadow-2xs flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2 text-[#1B1F4B] font-semibold text-sm">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF9A1F]/15 to-[#F0367A]/15 flex items-center justify-center shrink-0 text-[#E8338C]">
                      <FactorIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{factor.title}</span>
                  </div>
                  <p className="text-xs text-[#4B5070] leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-200/60 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm font-bold text-[#1B1F4B]">
              We send a written quote within 24 hours. No pressure.
            </p>
            <span className="text-xs text-[#4B5070] font-medium">
              Clear payment milestones &bull; You own 100% of your code
            </span>
          </div>
        </div>

        {/* Not Sure What You Need? Box */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F7F5FF] via-white to-[#FFF5FA] border border-[#E8338C]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9A1F]/15 via-[#F0367A]/15 to-[#6A3DE8]/15 flex items-center justify-center shrink-0 text-[#E8338C]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-[#1B1F4B]">
                Not sure what you need?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5070] mt-1 max-w-xl leading-relaxed">
                Tell us about your business goals and current bottlenecks. In a quick 10-minute chat, we will give you honest, plain-language advice on what makes sense for your budget — even if you don&apos;t hire us.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20am%20not%20sure%20what%20package%20or%20service%20my%20business%20needs.%20Can%20we%20chat%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-7 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider transition-all shrink-0 shadow-md shadow-[#25D366]/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
