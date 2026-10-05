'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Smartphone,
  Search,
  Zap,
  TrendingUp,
  Layers,
  ChevronDown,
  ChevronUp,
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
  Calendar,
  X,
  CreditCard,
  RefreshCw,
  Gift,
  Share2,
  HelpCircle,
  Check
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does an e-commerce website cost in Pune?",
    answer: "Pricing starts from ₹24,999 and depends on the number of products, features, integrations, and level of customization. We provide an honest, transparent breakdown after understanding your catalog size and technical requirements — with zero hidden charges or recurring lock-in fees."
  },
  {
    question: "Can I manage products and orders myself?",
    answer: "Yes. Every store comes with an intuitive, easy-to-use admin dashboard to add products, adjust pricing, manage inventory stock, process orders, and generate invoices. We also provide a personalized 1-on-1 walkthrough video and live demonstration after launch."
  },
  {
    question: "Do you build Shopify and WooCommerce websites?",
    answer: "Yes. We build on Shopify and WooCommerce, and we also engineer custom headless stores in Next.js and React when your business needs extreme speed, tailored checkout flows, and sub-second page loads."
  },
  {
    question: "Which payment gateways do you integrate?",
    answer: "We seamlessly integrate Razorpay, Stripe, PayU, PayPal, and instant UPI QR payments, along with Cash on Delivery (COD) verification where it suits your Indian e-commerce business model."
  },
  {
    question: "Will my e-commerce website be SEO-friendly?",
    answer: "Yes. We implement clean product URLs, automated OpenGraph and JSON-LD schema markup, breadcrumbs, fast server-side rendering, and image compression so your product listings can rank at the top of Google search results."
  },
  {
    question: "Will my website work well on mobile?",
    answer: "Absolutely. Over 80% of online shoppers in India browse and buy on smartphones. We engineer every store mobile-first with thumb-friendly navigation, sticky add-to-cart buttons, and 1-tap UPI checkouts."
  },
  {
    question: "How long does it take to build an online store?",
    answer: "Timelines depend on scope and product catalog complexity, but most stores launch within 2–4 weeks of finalizing requirements and receiving product data."
  }
];

export function EcommercePageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [auditForm, setAuditForm] = useState({
    name: '',
    phone: '',
    websiteUrl: '',
    notes: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditSubmitted(true);
  };

  const resetAuditModal = () => {
    setIsAuditModalOpen(false);
    setAuditSubmitted(false);
    setAuditForm({ name: '', phone: '', websiteUrl: '', notes: '' });
  };

  return (
    <>
      {/* Interactive Audit Modal */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#12151D] border border-neutral-200 dark:border-white/[0.08] rounded-2xl shadow-2xl p-6 sm:p-8">
            <button
              onClick={resetAuditModal}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!auditSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E8623C] font-bold mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Free Performance &amp; Conversion Review</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white">
                  Request a Free Store Audit
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Have an existing store or planning a new one? Our Pune developers will review your site speed, mobile UX, checkout leaks, and SEO — 100% free.
                </p>

                <form onSubmit={handleAuditSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Your Name / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / StyleStore Pune"
                      value={auditForm.name}
                      onChange={(e) => setAuditForm({ ...auditForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-black/40 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8623C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-black/40 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8623C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Current Store URL (or &quot;New Store&quot;)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. yourstore.com or Planning to launch"
                      value={auditForm.websiteUrl}
                      onChange={(e) => setAuditForm({ ...auditForm, websiteUrl: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-black/40 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8623C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      What is your biggest current challenge?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. High cart drop-offs, slow mobile loading, need UPI setup..."
                      value={auditForm.notes}
                      onChange={(e) => setAuditForm({ ...auditForm, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-black/40 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8623C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-bold text-sm transition-all shadow-lg shadow-[#E8623C]/25 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send My Free Audit Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">
                  Audit Request Received!
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thanks <span className="font-semibold text-neutral-900 dark:text-white">{auditForm.name}</span>. Our lead developer in Pune will examine your requirements and send actionable tips to <span className="text-[#E8623C] font-semibold">{auditForm.phone}</span> within 24 hours.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs%2C%20I%20just%20submitted%20an%20audit%20request%20for%20${encodeURIComponent(auditForm.name)}%20(${encodeURIComponent(auditForm.websiteUrl || 'New Store')}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat Instantly on WhatsApp</span>
                  </a>
                  <button
                    onClick={resetAuditModal}
                    className="px-6 py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Action Trigger Hook */}
      <div id="audit-trigger-hook" className="hidden" onClick={() => setIsAuditModalOpen(true)} />

      {/* FAQ Accordion Component */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white font-display">
            FAQs: E-Commerce Website Design
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Everything you need to know about building, pricing, and scaling your online store in Pune.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-[#12151D] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-neutral-900 dark:text-white font-bold text-base hover:text-[#E8623C] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/[0.05] flex items-center justify-center shrink-0 text-neutral-500 dark:text-neutral-300">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#E8623C]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-white/[0.04] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Floating Audit Button Helper */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => setIsAuditModalOpen(true)}
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs tracking-wide shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/10 dark:border-black/10"
        >
          <Sparkles className="w-4 h-4 text-[#E8623C]" />
          <span>Get Free Store Audit</span>
        </button>
      </div>
    </>
  );
}
