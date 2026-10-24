'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  if (subscribed) {
    return (
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 max-w-md mx-auto font-medium shadow-xs flex items-center justify-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>You&apos;re subscribed! You&apos;ll receive our practical guide once a month.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
      <input
        type="email"
        required
        placeholder="Enter your email (e.g. rahul@company.com)..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3 rounded-full bg-white border border-neutral-300 text-xs sm:text-sm text-[#1B1F4B] focus:outline-none focus:border-[#E8338C] focus:ring-2 focus:ring-[#E8338C]/20 placeholder:text-[#4B5070]/50 shadow-2xs transition-all"
      />
      <button
        type="submit"
        className="btn-primary shrink-0 text-xs font-bold py-3 px-6 shadow-md shadow-[#E8338C]/20 cursor-pointer"
      >
        Get Free Guides
      </button>
    </form>
  );
}
