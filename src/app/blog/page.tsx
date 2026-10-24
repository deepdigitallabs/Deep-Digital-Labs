import React from 'react';
import { Metadata } from 'next';
import { Mail, BookOpen, Sparkles } from 'lucide-react';
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
          {/* NEWSLETTER SUBSCRIPTION BOX (BUSINESS-FOCUSED)                            */}
          {/* ========================================================================= */}
          <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#F7F5FF] border border-neutral-200/80 text-center space-y-6 shadow-sm max-w-3xl mx-auto relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-[#FF7A1A]/10 to-[#E8338C]/15 blur-2xl pointer-events-none" 
            />

            <div className="icon-gradient-circle mx-auto">
              <Mail className="w-5 h-5" />
            </div>
            
            <div className="max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B1F4B] font-display">
                Get Practical Guides in Your Inbox
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed">
                Actionable breakdowns of website costs, WhatsApp conversion tactics, local SEO, and custom software strategy for Pune &amp; Indian businesses.
              </p>
            </div>

            <NewsletterForm />
            
            <div className="text-xs text-[#4B5070]/80">
              Zero spam. One practical guide per month. Unsubscribe anytime in 1-click.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
