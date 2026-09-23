import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Sparkles, ArrowRight, Clock, Mail } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogPosts';
import { NewsletterForm } from '@/components/blog/NewsletterForm';

export const metadata: Metadata = {
  title: 'Articles & Guides | Deep Digital Labs',
  description: 'Guides on web development, mobile apps, and cloud architecture by Deep Digital Labs.',
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            Articles &amp; Guides
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Practical guides and lessons on building scalable web platforms, mobile apps, and cloud architecture.
          </p>
        </div>

        {/* Featured Post (Large Bento Card) */}
        {BLOG_POSTS.length > 0 && (
          <div className="mb-16">
            <Link 
              href={`/blog/${BLOG_POSTS[0].slug}`}
              className="group block p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#D4FF00]/50 transition-all shadow-sm hover:shadow-xl dark:shadow-2xl"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase font-bold bg-white dark:bg-white/5 text-neutral-900 dark:text-[#D4FF00] border border-neutral-200 dark:border-white/10 shadow-sm">
                  {BLOG_POSTS[0].category}
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-700 dark:text-[#D4FF00]" /> {BLOG_POSTS[0].readTime}
                </span>
                <span className="text-xs font-mono text-neutral-400 dark:text-gray-500">
                  {BLOG_POSTS[0].date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors tracking-tight leading-tight">
                {BLOG_POSTS[0].title}
              </h2>

              <p className="text-neutral-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-4 max-w-4xl">
                {BLOG_POSTS[0].summary}
              </p>

              <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
                <div className="text-xs text-neutral-500 dark:text-gray-400">
                  By <span className="text-neutral-900 dark:text-white font-semibold">{BLOG_POSTS[0].author}</span> • {BLOG_POSTS[0].authorRole}
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-[#D4FF00] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#D4FF00]/40 transition-all shadow-sm hover:shadow-lg dark:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-gray-400 mb-3">
                  <span className="text-neutral-900 dark:text-[#D4FF00] font-semibold">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-[#D4FF00] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 mt-3 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400 dark:text-gray-500">{post.author}</span>
                <span className="text-neutral-900 dark:text-[#D4FF00] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription Box */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 text-center space-y-6 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-[#D4FF00] flex items-center justify-center mx-auto shadow-sm">
            <Mail className="w-6 h-6" />
          </div>
          
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              Stay Ahead of SaaS Architecture &amp; Next.js Performance
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400">
              Join founders and engineers receiving our monthly teardown on high-scale Next.js, database sharding, and cloud architectures.
            </p>
          </div>

          <NewsletterForm />
          
          <div className="text-[11px] text-neutral-500 dark:text-gray-500">
            Zero spam. One email per month. Unsubscribe at any time.
          </div>
        </div>

      </div>
    </div>
  );
}
