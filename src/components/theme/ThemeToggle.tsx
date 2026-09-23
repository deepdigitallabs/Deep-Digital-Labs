'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
        theme === 'dark'
          ? 'bg-white/10 text-gray-200 hover:text-white hover:bg-white/15 border border-white/15'
          : 'bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200 border border-neutral-200'
      } ${className}`}
      title={theme === 'dark' ? 'Switch to Clean Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#D4FF00] transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300" />
      )}
    </button>
  );
}
