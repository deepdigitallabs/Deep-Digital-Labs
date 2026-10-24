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

  // Helper for category badge styling
  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case 'Pricing & Costs':
        return 'bg-[#E8338C]/10 text-[#E8338C] border-[#E8338C]/25';
      case 'Lead Generation':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Business Guides':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Software Strategy':
        return 'bg-[#6A3DE8]/10 text-[#6A3DE8] border-[#6A3DE8]/25';
      case 'SaaS Architecture':
      case 'Mobile & AI':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-slate-100 text-[#1B1F4B] border-slate-200';
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-neutral-200/70">
        
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
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'btn-primary shadow-md'
                    : 'bg-white hover:bg-[#F7F5FF] text-[#1B1F4B] hover:text-[#E8338C] border border-neutral-200/80 shadow-2xs'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/25 text-white' : 'bg-neutral-100 text-[#4B5070]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Instant Search Bar */}
        <div className="relative min-w-[260px] sm:min-w-[300px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4B5070]/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides (e.g. Pune, Cost, WhatsApp)..."
            className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white border border-neutral-200/80 text-xs text-[#1B1F4B] placeholder:text-[#4B5070]/50 focus:outline-none focus:border-[#E8338C] focus:ring-2 focus:ring-[#E8338C]/15 shadow-2xs transition-all"
          />
        </div>

      </div>

      {/* No Results Fallback */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 space-y-3 bg-[#F7F5FF] rounded-3xl p-8 border border-neutral-200/60">
          <BookOpen className="w-8 h-8 text-[#FF7A1A] mx-auto" />
          <h3 className="text-lg font-bold text-[#1B1F4B] font-display">
            No articles match your search
          </h3>
          <p className="text-xs text-[#4B5070]">
            Try adjusting your search query or reset the filter to view all articles.
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-xs font-bold text-[#E8338C] hover:underline cursor-pointer"
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
            className="group block p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#E8338C]/50 transition-all shadow-md hover:shadow-2xl relative overflow-hidden card-brand"
          >
            {/* Soft decorative gradient in background of card */}
            <div 
              aria-hidden="true" 
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#FF7A1A]/10 via-[#E8338C]/10 to-[#6A3DE8]/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" 
            />

            <div className="flex flex-wrap items-center gap-3 mb-5 relative z-10">
              <span className={`px-3.5 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(featuredPost.category)}`}>
                {featuredPost.category}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFB81C]/15 text-[#9E6500] border border-[#FFB81C]/30">
                <Sparkles className="w-3 h-3 text-[#FF7A1A]" />
                <span>Featured Guide</span>
              </span>
              <span className="text-xs text-[#4B5070] flex items-center gap-1 ml-auto">
                <Clock className="w-3.5 h-3.5 text-[#FF7A1A]" /> {featuredPost.readTime}
              </span>
              <span className="text-xs text-[#4B5070]/70">
                {featuredPost.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors tracking-tight leading-tight font-display relative z-10">
              {featuredPost.title}
            </h2>

            <p className="text-[#4B5070] text-sm sm:text-base leading-relaxed mt-4 max-w-4xl relative z-10">
              {featuredPost.summary}
            </p>

            <div className="mt-8 pt-5 border-t border-neutral-200/70 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="text-xs text-[#4B5070]">
                By <span className="text-[#1B1F4B] font-bold">{featuredPost.author}</span> • {featuredPost.authorRole} • Pune
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#E8338C] text-white text-xs font-bold shadow-md shadow-[#E8338C]/20 group-hover:shadow-[#E8338C]/35 group-hover:translate-x-1 transition-all">
                <span>Read Full Guide</span>
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
              className="group flex flex-col justify-between p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#6A3DE8]/40 hover:shadow-xl hover:-translate-y-1 transition-all card-brand"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getCategoryBadgeClass(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-[#4B5070]/70 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-[#FF7A1A]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors leading-snug font-display">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5070] mt-3 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs">
                <span className="text-[#4B5070]/80 text-[11px]">{post.author}</span>
                <span className="text-[#E8338C] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
