'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Search, Sparkles, BookOpen } from 'lucide-react';
import { BlogPost, BlogCategory } from '@/data/blogPosts';

interface BlogGridProps {
  posts: BlogPost[];
}

type FilterCategory = 'All' | 'Pricing & Costs' | 'Lead Generation' | 'Business Guides' | 'Software Strategy' | 'Engineering & Tech';

export function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: FilterCategory[] = [
    'All',
    'Pricing & Costs',
    'Lead Generation',
    'Business Guides',
    'Software Strategy',
    'Engineering & Tech'
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category filter matching
      let matchesCategory = true;
      if (selectedCategory === 'Engineering & Tech') {
        matchesCategory = post.category === 'SaaS Architecture' || post.category === 'Mobile & AI';
      } else if (selectedCategory !== 'All') {
        matchesCategory = post.category === selectedCategory;
      }

      // Search query matching
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        matchesSearch = 
          post.title.toLowerCase().includes(query) ||
          post.summary.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query);
      }

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="space-y-12">
      
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-white/10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            
            // Calculate count for this tab
            let count = 0;
            if (category === 'All') {
              count = posts.length;
            } else if (category === 'Engineering & Tech') {
              count = posts.filter(p => p.category === 'SaaS Architecture' || p.category === 'Mobile & AI').length;
            } else {
              count = posts.filter(p => p.category === category).length;
            }

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-[#E8623C] dark:text-white shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.05] dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-neutral-200 dark:bg-white/10 text-neutral-500 dark:text-neutral-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Instant Search Bar */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides (e.g. Pune, Cost, WhatsApp)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#E8623C] dark:focus:border-[#E8623C] transition-all"
          />
        </div>

      </div>

      {/* No Results Fallback */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <BookOpen className="w-8 h-8 text-neutral-400 mx-auto" />
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
            No articles match your search
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Try adjusting your search query or reset the filter to view all articles.
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-xs font-bold text-[#E8623C] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Featured Primary Article */}
      {featuredPost && (
        <div className="mb-12">
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="group block p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#E8623C]/50 transition-all shadow-xs hover:shadow-xl dark:shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase font-bold bg-[#E8623C]/10 text-[#E8623C] border border-[#E8623C]/20 shadow-xs">
                {featuredPost.category}
              </span>
              <span className="text-xs font-mono text-neutral-500 dark:text-gray-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neutral-500" /> {featuredPost.readTime}
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-gray-500">
                {featuredPost.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors tracking-tight leading-tight font-display">
              {featuredPost.title}
            </h2>

            <p className="text-neutral-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-4 max-w-4xl">
              {featuredPost.summary}
            </p>

            <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
              <div className="text-xs text-neutral-500 dark:text-gray-400">
                By <span className="text-neutral-900 dark:text-white font-semibold">{featuredPost.author}</span> • {featuredPost.authorRole}
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E8623C] group-hover:translate-x-1 transition-transform">
                <span>Read Practical Guide</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid of Remaining Articles */}
      {gridPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-[#E8623C]/50 transition-all shadow-xs hover:shadow-lg dark:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-gray-400 mb-3">
                  <span className="text-[#E8623C] font-semibold">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-[#E8623C] transition-colors leading-snug font-display">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 mt-3 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400 dark:text-gray-500">{post.author}</span>
                <span className="text-[#E8623C] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}
