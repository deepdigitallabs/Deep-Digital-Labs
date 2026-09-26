'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  meta: string;
  phase: string;
  timing: string;
  title: string;
  hook: string;
  points: {
    title: string;
    description: string;
  }[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    meta: 'STEP 01 · INITIAL CONSULTATION · Free · 20 mins',
    phase: 'INITIAL CONSULTATION',
    timing: 'Free · 20 mins',
    title: 'Tell us about your business',
    hook: 'A quick call or WhatsApp chat about what you need, your business goals, and what you want your website or app to achieve.',
    points: [
      {
        title: 'Understanding Your Customers',
        description: 'Who visits your website, and what action should they take?'
      },
      {
        title: 'Scope & Budget Clarity',
        description: 'A clear, fixed quote with zero hidden surprise charges.'
      },
      {
        title: 'Direct Developer Discussion',
        description: 'Talk directly on phone or WhatsApp with the engineer who will build it.'
      }
    ]
  },
  {
    number: '02',
    meta: 'STEP 02 · DESIGN & PREVIEW · 3–5 days',
    phase: 'DESIGN & PREVIEW',
    timing: '3–5 days',
    title: 'We design it',
    hook: 'Before a single line of code is written, you see exactly what your customers will see.',
    points: [
      {
        title: 'Your Brand, Visualized',
        description: 'Colors, fonts, and layout built around what makes your business different, not a generic template.'
      },
      {
        title: 'A Clickable Preview',
        description: 'Walk through every page like a real visitor would, and flag anything before it\'s built.'
      },
      {
        title: 'Refine Until It\'s Right',
        description: 'Feedback rounds included, so the design matches what\'s in your head.'
      }
    ]
  },
  {
    number: '03',
    meta: 'STEP 03 · DEVELOPMENT · 2–3 weeks',
    phase: 'DEVELOPMENT',
    timing: '2–3 weeks',
    title: 'We build it',
    hook: 'This is where the design becomes a real, working website — built by hand, not assembled from plugins.',
    points: [
      {
        title: 'Clean, Fast Code',
        description: 'Every page built for speed, so customers don\'t leave while it loads.'
      },
      {
        title: 'Progress You Can See',
        description: 'Regular updates as pages go live, not silence until launch day.'
      },
      {
        title: 'Tested Everywhere',
        description: 'Checked on phones, tablets, and desktops before it reaches you.'
      }
    ]
  },
  {
    number: '04',
    meta: 'STEP 04 · LAUNCH & SUPPORT · Ongoing',
    phase: 'LAUNCH & SUPPORT',
    timing: 'Ongoing',
    title: 'We launch & support you',
    hook: 'Launch day isn\'t the finish line — it\'s the start of your website actually working for you.',
    points: [
      {
        title: 'A Smooth Go-Live',
        description: 'Domain, hosting, and security handled, so nothing breaks on day one.'
      },
      {
        title: 'You\'re Trained, Not Left Behind',
        description: 'A short walkthrough so you can update text and photos yourself, anytime.'
      },
      {
        title: 'Still On Call',
        description: 'Direct WhatsApp access for fixes, tweaks, and new features, long after launch.'
      }
    ]
  }
];

interface ProcessTimelineProps {
  onOpenConsultation?: () => void;
}

export function ProcessTimeline({ onOpenConsultation }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pathD, setPathD] = useState<string>('');

  // Track scroll progress through the process timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 85%']
  });

  // Smooth spring physics for fluid line drawing animation
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Beacon illumination as scroll reaches the button
  const beaconOpacity = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);
  const beaconScale = useTransform(scrollYProgress, [0.82, 0.96], [0.4, 1]);

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !buttonRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      const isMobile = window.innerWidth < 640;
      const startX = isMobile ? 20 : 22;
      const startY = 24;

      const endX = Math.round(buttonRect.left - containerRect.left);
      const endY = Math.round(buttonRect.top - containerRect.top + buttonRect.height / 2);

      const cornerRadius = 32;
      const curveStartY = Math.max(startY, endY - cornerRadius);
      const curveEndX = startX + cornerRadius;

      if (endX > startX + cornerRadius) {
        const d = `M ${startX} ${startY} L ${startX} ${curveStartY} Q ${startX} ${endY} ${curveEndX} ${endY} L ${endX} ${endY}`;
        setPathD(d);
      } else {
        const d = `M ${startX} ${startY} L ${startX} ${endY}`;
        setPathD(d);
      }
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    const timeout = setTimeout(updatePath, 150);
    return () => {
      window.removeEventListener('resize', updatePath);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="process" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E8623C]/5 dark:bg-[#E8623C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header (Preserved Intro) */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
        <span className="text-xs font-mono uppercase tracking-widest text-[#E8623C] font-bold">
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
          From idea to launch in 4 simple steps.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          A transparent, collaborative workflow where you are in control at every stage.
        </p>
      </div>

      {/* Timeline Journey Container */}
      <div ref={containerRef} className="relative">
        
        {/* Unified Continuous SVG Line (One Single Path: 01 -> 02 -> 03 -> 04 -> Curves into CTA button) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="timeline-flow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8623C" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#E8623C" />
            </linearGradient>
            <filter id="timeline-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Base Unfilled Track */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="currentColor"
              className="text-neutral-200 dark:text-white/[0.08]"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Animated Flowing Line (Draws continuously down and directly into the button on scroll) */}
          {pathD && (
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#timeline-flow-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength }}
              filter="url(#timeline-glow)"
            />
          )}
        </svg>

        {/* 4 Continuous Journey Steps (Full-Width, No Empty Space) */}
        <div className="space-y-6 sm:space-y-7">
          {PROCESS_STEPS.map((step) => {
            return (
              <div
                key={step.number}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Central Number Badge on the Continuous Spine */}
                <div className="relative z-20 shrink-0 pt-2 sm:pt-3">
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-[#12151D] border-2 border-[#E8623C] shadow-md shadow-[#E8623C]/20 flex items-center justify-center group"
                  >
                    <span className="font-mono text-xs font-extrabold text-[#E8623C]">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Step Content Card — Uses full remaining width with horizontal points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 p-5 sm:p-6 rounded-2xl bg-white/85 dark:bg-[#12151D]/90 backdrop-blur-xl border border-neutral-200/80 dark:border-white/[0.08] hover:border-[#E8623C]/50 dark:hover:border-[#E8623C]/50 shadow-lg shadow-black/[0.03] dark:shadow-black/25 transition-all relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                    
                    {/* Left side: Meta, Title, Story Hook (5 cols on lg) */}
                    <div className="lg:col-span-5 space-y-2">
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#E8623C]">
                        {step.meta}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-snug italic border-l-2 border-[#E8623C]/40 pl-3 py-0.5">
                        {step.hook}
                      </p>
                    </div>

                    {/* Right side: 3 Supporting Points (7 cols on lg, arranged horizontally in 3 columns) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t lg:border-t-0 lg:border-l border-neutral-100 dark:border-white/[0.06] pt-3 lg:pt-0 lg:pl-6">
                      {step.points.map((pt, pIdx) => (
                        <div
                          key={pt.title}
                          className="p-3 rounded-xl bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/[0.04] space-y-1 flex flex-col justify-start"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-[#E8623C]/10 text-[#E8623C] text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                              {pIdx + 1}
                            </span>
                            <strong className="text-neutral-900 dark:text-white font-semibold text-xs truncate">
                              {pt.title}
                            </strong>
                          </div>
                          <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-snug">
                            {pt.description}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* Journey Finale — CTA button where the line docks */}
        <div className="relative pt-10 sm:pt-12 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center justify-center text-center relative z-20"
          >
            <span className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2.5">
              Have a project in mind?
            </span>
            <div className="relative inline-flex items-center">
              <button
                ref={buttonRef}
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#E8623C]/30 hover:shadow-[#E8623C]/50 hover:scale-[1.02] inline-flex items-center gap-2 cursor-pointer active:scale-95 relative z-20"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Glowing beacon docking at the button's left edge when line arrives */}
              <motion.div
                style={{
                  opacity: beaconOpacity,
                  scale: beaconScale
                }}
                className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#E8623C] shadow-[0_0_14px_#E8623C] flex items-center justify-center pointer-events-none z-30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
