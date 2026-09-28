'use client';

import React from 'react';

/**
 * HeroWaveArt
 * Faithful high-fidelity recreation of the organic 3D fluid gradient ribbons
 * from the official Deep Digital Labs brand identity poster.
 * Fluid sweeps in top-right and bottom-right in spectrum shades:
 * Cyan -> Blue -> Purple -> Magenta -> Orange -> Amber
 */
export function HeroWaveArt() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Top Right Organic Fluid Wave Ribbons */}
      <svg
        className="absolute -top-12 -right-16 sm:-right-8 w-[380px] sm:w-[580px] md:w-[720px] h-[480px] sm:h-[680px] opacity-75 dark:opacity-40 transition-opacity duration-500"
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wave Gradient 1: Soft Lavender to Violet to Pink */}
          <linearGradient id="topWaveGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#818CF8" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#E879F9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0" />
          </linearGradient>

          {/* Wave Gradient 2: Cyan to Electric Blue to Purple */}
          <linearGradient id="topWaveGrad2" x1="80%" y1="0%" x2="20%" y2="90%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#A855F7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Ambient Glow Filter */}
          <filter id="waveBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" result="blur" />
          </filter>
        </defs>

        {/* Ambient Top Glow */}
        <circle cx="560" cy="180" r="260" fill="url(#topWaveGrad1)" filter="url(#waveBlur)" opacity="0.6" />
        
        {/* Curving Wave Ribbons */}
        <path
          d="M700 0 C540 80, 480 260, 560 420 C620 540, 700 620, 700 620 Z"
          fill="url(#topWaveGrad1)"
        />
        <path
          d="M700 80 C570 160, 520 320, 600 480 C650 560, 700 600, 700 600 Z"
          fill="url(#topWaveGrad2)"
          opacity="0.7"
        />
        <path
          d="M700 0 C600 120, 560 220, 640 360 C680 430, 700 480, 700 480 Z"
          fill="url(#topWaveGrad1)"
          opacity="0.45"
        />
      </svg>

      {/* Bottom Right Sweeping Vibrant Fluid Spectrum Ribbons */}
      <svg
        className="absolute -bottom-20 -right-20 sm:-right-10 w-[420px] sm:w-[680px] md:w-[860px] h-[520px] sm:h-[780px] opacity-90 dark:opacity-50 transition-opacity duration-500"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Spectrum Ribbon: Violet -> Magenta -> Orange -> Golden Yellow */}
          <linearGradient id="spectrumWaveGrad" x1="10%" y1="100%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#9333EA" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E11D48" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#F97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.5" />
          </linearGradient>

          {/* Secondary Ribbon: Pink -> Coral */}
          <linearGradient id="secondaryWaveGrad" x1="30%" y1="90%" x2="80%" y2="20%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#D946EF" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#FB7185" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.2" />
          </linearGradient>

          {/* Tertiary Ribbon: Deep Blue -> Purple */}
          <linearGradient id="tertiaryWaveGrad" x1="20%" y1="100%" x2="100%" y2="40%">
            <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#4338CA" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>

          <filter id="bottomGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>

        {/* Ambient bottom-right glow */}
        <circle cx="620" cy="620" r="320" fill="url(#spectrumWaveGrad)" filter="url(#bottomGlow)" opacity="0.45" />

        {/* Deep under-wave (Dark Indigo / Royal Purple) */}
        <path
          d="M800 800 L420 800 C480 680, 580 580, 700 500 C740 470, 770 450, 800 440 Z"
          fill="url(#tertiaryWaveGrad)"
        />

        {/* Primary dramatic sweep (Violet -> Magenta -> Coral -> Amber) */}
        <path
          d="M800 800 L490 800 C560 690, 640 600, 740 520 C765 500, 785 490, 800 480 Z"
          fill="url(#spectrumWaveGrad)"
        />

        {/* Crest wave (Magenta & Coral highlight) */}
        <path
          d="M800 800 L560 800 C620 720, 690 650, 775 580 C785 570, 795 565, 800 560 Z"
          fill="url(#secondaryWaveGrad)"
        />

        {/* Warm golden-orange crest lip */}
        <path
          d="M800 800 L640 800 C690 750, 740 700, 800 640 Z"
          fill="#F97316"
          opacity="0.35"
        />
      </svg>

      {/* Subtle Central Multi-Color Aurora Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-r from-[#00D2FF]/10 via-[#7C3AED]/12 via-[#EC4899]/10 to-[#F97316]/10 blur-[130px] rounded-full pointer-events-none -z-20" />
    </div>
  );
}
