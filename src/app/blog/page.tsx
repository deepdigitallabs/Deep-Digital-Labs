import React from 'react';
import { Metadata } from 'next';
import { Mail, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogPosts';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { NewsletterForm } from '@/components/blog/NewsletterForm';

export const metadata: Metadata = {
  title: 'Business Guides, Pricing & Tech Strategy | Deep Digital Labs Pune',
  description: 'Practical guides on business website costs in Pune, WhatsApp lead generation, custom software pricing in India, local SEO for CA firms, and operational software strategy.',
  keywords: [
    'website cost Pune 2026',
    'business website price Pune',
    'how to get WhatsApp leads website',
    'custom software cost India',
    'manufacturing website features Pune',
    'CA firm Google SEO Pune',
    'restaurant WhatsApp ordering system',
    'replace excel custom software'
  ]
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-24 bg-white text-[#4B5070] min-h-screen">
      
      {/* ========================================================================= */}
      {/* HERO: PRACTICAL KNOWLEDGE BASE                                            */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F5FF] via-[#F7F5FF]/60 to-white pt-12 pb-16 border-b border-neutral-200/60 bg-grid-dots">
        {/* Soft Background Mesh Blurs */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF7A1A]/15 via-[#E8338C]/15 to-[#6A3DE8]/15 rounded-full blur-3xl -z-10 animate-[mesh-pulse_10s_ease-in-out_infinite]" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-[#1B1F4B] shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>Practical Guides for Indian Businesses · Pune Studio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1F4B] tracking-tight leading-[1.15] font-display">
              Business Guides, Pricing &amp;{' '}
              <span className="brand-gradient-text">Tech Strategy</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5070] leading-relaxed max-w-2xl mx-auto">
              Real answers to the questions business owners actually ask: transparent website costs in Pune, capturing WhatsApp leads, replacing spreadsheets with custom software, and ranking on Google. Zero confusing tech talk.
            </p>

            {/* Quick Filter Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#1B1F4B]">
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200/70 shadow-xs">
                ⚡ Real Pune Cost Breakdowns
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200/70 shadow-xs">
                💬 WhatsApp Lead Funnels
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200/70 shadow-xs">
                📊 Spreadsheet Replacement
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200/70 shadow-xs">
                🔒 100% Code Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE BLOG GRID (CATEGORY TABS + SEARCH + CARDS)                    */}
      {/* ========================================================================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid posts={BLOG_POSTS} />

          {/* ========================================================================= */}
          {/* NEWSLETTER SUBSCRIPTION BOX (VIBRANT LOGO SPECTRUM CARD)                  */}
          {/* ========================================================================= */}
          <div className="mt-24 relative rounded-3xl p-[2.5px] bg-gradient-to-r from-[#FF7A1A] via-[#E8338C] to-[#6A3DE8] shadow-2xl max-w-3xl mx-auto overflow-hidden group">
            
            <div className="p-8 sm:p-12 rounded-[22px] bg-[#1B1F4B] text-white text-center space-y-6 relative overflow-hidden bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px]">
              
              {/* Animated Glowing Logo Gradient Mesh Orbs */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute -top-24 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF7A1A]/35 via-[#E8338C]/25 to-transparent blur-3xl animate-mesh-pulse -z-10" 
              />
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute -bottom-24 -right-20 w-64 h-64 rounded-full bg-gradient-to-tl from-[#6A3DE8]/40 via-[#E8338C]/25 to-transparent blur-3xl animate-float-slow -z-10" 
              />
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-44 rounded-full bg-gradient-to-r from-[#FFB81C]/20 via-[#FF7A1A]/15 to-[#E8338C]/15 blur-2xl animate-float-reverse -z-10" 
              />

              {/* Floating Decorative Ring */}
              <div 
                aria-hidden="true"
                className="pointer-events-none absolute top-4 right-6 w-20 h-20 rounded-full border border-white/10 animate-float-slow -z-10 hidden sm:block" 
              />

              {/* Mail Icon in 3D Logo Gradient Badge */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF7A1A] via-[#E8338C] to-[#6A3DE8] text-white flex items-center justify-center shadow-lg shadow-[#E8338C]/40 mx-auto animate-float">
                <Mail className="w-6 h-6 text-white" />
              </div>
              
              <div className="max-w-xl mx-auto space-y-2.5 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-[#FFB81C]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB81C] animate-pulse" />
                  <span>Free Monthly Insights</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                  Get <span className="bg-gradient-to-r from-[#FFB81C] via-[#FF7A1A] to-[#E8338C] bg-clip-text text-transparent">Practical Guides</span> in Your Inbox
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-lg mx-auto">
                  Actionable breakdowns of website costs, WhatsApp conversion tactics, local SEO, and custom software strategy for Pune &amp; Indian businesses.
                </p>
              </div>

              <div className="relative z-10">
                <NewsletterForm />
              </div>
              
              <div className="text-xs text-slate-300 relative z-10 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Zero spam. One practical guide per month. Unsubscribe anytime in 1-click.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
