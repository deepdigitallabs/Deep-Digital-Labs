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
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HEADER: BUYER-FIRST KNOWLEDGE BASE                                        */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8623C]/10 border border-[#E8623C]/20 text-[#E8623C] text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practical Business Insights · Pune &amp; India</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight font-display">
            Business Guides, Pricing &amp; Tech Strategy
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Practical answers to the questions business owners actually ask: realistic website costs in Pune, capturing WhatsApp leads, replacing spreadsheets, and ranking on Google. Zero confusing tech talk.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE BLOG GRID (CATEGORY TABS + SEARCH + CARDS)                    */}
        {/* ========================================================================= */}
        <BlogGrid posts={BLOG_POSTS} />

        {/* ========================================================================= */}
        {/* NEWSLETTER SUBSCRIPTION BOX (BUSINESS-FOCUSED)                            */}
        {/* ========================================================================= */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 text-center space-y-6 shadow-xs max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-[#E8623C] flex items-center justify-center mx-auto shadow-xs">
            <Mail className="w-6 h-6" />
          </div>
          
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-display">
              Get Practical Business &amp; Tech Guides in Your Inbox
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400 leading-relaxed">
              Actionable advice on website costs, capturing WhatsApp leads, local SEO, and automating operational workflows for Pune and Indian businesses.
            </p>
          </div>

          <NewsletterForm />
          
          <div className="text-[11px] text-neutral-500 dark:text-gray-500">
            Zero spam. One practical article per month. Unsubscribe at any time.
          </div>
        </div>

      </div>
    </div>
  );
}
