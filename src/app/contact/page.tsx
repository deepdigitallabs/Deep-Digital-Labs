'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Website & Web Application',
    details: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyInstagram = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('Hi Deep Digital Labs, I want to discuss a project.');
      setToastMessage('Inquiry copied to clipboard! Opening Instagram...');
      setTimeout(() => setToastMessage(null), 3500);
    }
    window.open('https://ig.me/m/deepdigitallabs', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-32 pb-24 bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-[#12151D] text-xs font-mono font-semibold text-[#E8623C] shadow-xs">
            <span>Direct WhatsApp &amp; Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white tracking-tight font-display">
            Let’s Build Something <span className="text-[#E8623C]">That Scales.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Tell us about what you want to build. We’ll understand your requirements and get back to you directly with a clear timeline and fair pricing.
          </p>
        </div>

        {/* Quick Action WhatsApp Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#E8623C]/10 via-[#E8623C]/5 to-transparent border border-[#E8623C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#E8623C] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#E8623C]/20">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Want an instant answer?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Chat directly with our developer on WhatsApp without filling forms.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#E8623C]/20 flex items-center justify-center gap-2 shrink-0 active:scale-98"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Simple Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm">
            
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Message Received!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-neutral-900 dark:text-white">{formData.fullName}</strong>. We received your note and will reply directly within 2 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        service: 'Website & Web Application',
                        details: ''
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-neutral-100 dark:bg-white/[0.06] hover:bg-neutral-200 text-xs font-semibold text-neutral-800 dark:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                    Tell us about your project
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Fill in your details below and we’ll get back to you with clear timelines and fair pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.08] text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#E8623C] placeholder:text-neutral-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.08] text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#E8623C] placeholder:text-neutral-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.08] text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#E8623C] placeholder:text-neutral-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.08] text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#E8623C] transition-colors"
                    >
                      <option value="Website & Web Application">Website &amp; Web Application</option>
                      <option value="Mobile App (Android/iOS)">Mobile App (Android / iOS)</option>
                      <option value="Business Software / ERP">Custom Business Software / ERP</option>
                      <option value="Website Redesign & Speed">Website Redesign &amp; Speed Boost</option>
                      <option value="Other Project">Other Custom Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    What would you like to build? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what your business does and what kind of website or app you need..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.08] text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#E8623C] placeholder:text-neutral-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Direct developer response · 100% privacy</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#E8623C]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Contacts Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8623C]">
                Direct Contacts
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Direct WhatsApp</div>
                    <a
                      href="https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-neutral-900 dark:text-white hover:text-emerald-500 transition-colors"
                    >
                      Chat With Developer
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8623C]/10 text-[#E8623C] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Email Address</div>
                    <a
                      href="mailto:deepdigitallabs@gmail.com"
                      className="font-bold text-neutral-900 dark:text-white hover:text-[#E8623C] transition-colors"
                    >
                      deepdigitallabs@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Instagram DM</div>
                    <button
                      type="button"
                      onClick={handleCopyInstagram}
                      className="font-bold text-neutral-900 dark:text-white hover:text-pink-500 transition-colors text-left cursor-pointer"
                    >
                      @deepdigitallabs
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Response Speed</div>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      Within 2 hours (Mon–Sat)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pune Studio Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-neutral-200/80 dark:border-white/[0.08] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 dark:text-white">
                <MapPin className="w-4 h-4 text-[#E8623C]" />
                <span>Pune Web Studio · Headquarters</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Deep Digital Labs<br />
                Pune, Maharashtra 411001, India<br />
                Serving businesses across Pune, Maharashtra, and worldwide.
              </p>
              <div className="pt-1">
                <Link
                  href="/pune-website-development-company"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8623C] hover:underline"
                >
                  <span>Explore Pune Web Studio page</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Action Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold border border-neutral-800 dark:border-neutral-200 animate-in fade-in slide-in-from-bottom-5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
