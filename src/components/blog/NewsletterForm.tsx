'use client';

import React, { useState } from 'react';

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
      <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-300 dark:border-[#D4FF00]/40 text-xs text-neutral-900 dark:text-[#D4FF00] max-w-md mx-auto font-medium shadow-sm">
        ✓ You&apos;re subscribed! You&apos;ll receive our monthly teardown on SaaS architecture and performance.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
      <input
        type="email"
        required
        placeholder="Enter your work email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3.5 rounded-full bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] placeholder:text-neutral-400 dark:placeholder:text-gray-500 shadow-sm transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-full font-bold text-xs bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-colors shrink-0 shadow-md active:scale-95 cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
}
