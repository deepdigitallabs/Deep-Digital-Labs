import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blogPosts';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | Deep Digital Labs Insights`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Deep Digital Labs`,
      description: post.summary,
    },
  };
}

function parseInline(text: string): React.ReactNode[] {
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-slate-950 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/10 font-mono text-xs text-slate-800 dark:text-slate-200">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      i++;
      continue;
    }

    // Code block
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      elements.push(
        <pre key={elements.length} className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 text-xs sm:text-sm font-mono overflow-x-auto my-6 leading-relaxed">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // Heading 3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={elements.length} className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white pt-8 pb-2 tracking-tight">
          {parseInline(line.replace('### ', ''))}
        </h3>
      );
      i++;
      continue;
    }

    // Heading 2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={elements.length} className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white pt-10 pb-3 tracking-tight">
          {parseInline(line.replace('## ', ''))}
        </h2>
      );
      i++;
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={elements.length} className="list-decimal pl-6 space-y-2.5 my-5 text-slate-700 dark:text-gray-300 text-base sm:text-lg">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Bullet list
    if (/^[-*]\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[-*]\s/, ''));
        i++;
      }
      elements.push(
        <ul key={elements.length} className="list-disc pl-6 space-y-2.5 my-5 text-slate-700 dark:text-gray-300 text-base sm:text-lg">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Standard paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('### ') &&
      !lines[i].trim().startsWith('## ') &&
      !lines[i].trim().startsWith('```') &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !/^[-*]\s/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      elements.push(
        <p key={elements.length} className="text-slate-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg my-4">
          {parseInline(paraLines.join(' '))}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[currentIndex];

  if (!post) {
    notFound();
  }

  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deep Digital Labs',
      logo: 'https://deepdigitallabs.com/logo.png',
    },
    datePublished: post.date,
  };

  return (
    <div className="pt-28 pb-24 bg-white text-[#4B5070] min-h-screen">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-4">
        <div className="flex items-center gap-2 text-xs text-[#4B5070] font-medium">
          <Link href="/" className="hover:text-[#E8338C] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <Link href="/blog" className="hover:text-[#E8338C] transition-colors">Guides</Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="text-[#1B1F4B] font-semibold">{post.category}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <div className="space-y-6 pb-8 border-b border-neutral-200/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#E8338C]/10 text-[#E8338C] border border-[#E8338C]/20 shadow-xs">
              {post.category}
            </span>
            <span className="text-xs text-[#4B5070] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FF7A1A]" /> {post.readTime}
            </span>
            <span className="text-xs text-neutral-400">•</span>
            <span className="text-xs text-[#4B5070]">
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1F4B] tracking-tight leading-[1.15] font-display">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4B5070] leading-relaxed">
            {post.summary}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-neutral-200/70 text-xs sm:text-sm text-[#4B5070]">
            <div>
              By <span className="font-bold text-[#1B1F4B]">{post.author}</span> • {post.authorRole}
            </div>
            <div className="text-xs text-[#4B5070]/80">
              Pune Studio, India
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-8 border-b border-neutral-200/80 prose-neutral">
          {renderContent(post.content)}
        </div>

        {/* Article Footer Note */}
        <div className="my-10 p-7 sm:p-8 rounded-3xl bg-[#F7F5FF] border border-neutral-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 card-brand">
          <div className="space-y-1">
            <div className="text-base font-bold text-[#1B1F4B] font-display">Deep Digital Labs</div>
            <p className="text-xs sm:text-sm text-[#4B5070] leading-relaxed max-w-lg">
              Have a project you want to scope? Message our developers directly on WhatsApp for an honest assessment and fair quote.
            </p>
          </div>
          <a
            href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20read%20your%20article%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 text-xs font-bold"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Navigation to Next Article */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B1F4B] hover:text-[#E8338C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Guides</span>
          </Link>

          <Link
            href={`/blog/${nextPost.slug}`}
            className="inline-flex items-center gap-3 p-4 px-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#E8338C]/40 transition-all text-right group shadow-xs hover:shadow-md"
          >
            <div>
              <div className="text-[10px] uppercase font-bold text-[#FF7A1A]">Next Guide</div>
              <div className="text-sm font-bold text-[#1B1F4B] group-hover:text-[#E8338C] transition-colors">{nextPost.title}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#1B1F4B] group-hover:text-[#E8338C] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </article>

    </div>
  );
}
