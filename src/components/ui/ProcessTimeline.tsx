'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

  // Track scroll progress through the process timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 70%']
  });

  // Smooth out the progress bar animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E8623C]/5 dark:bg-[#E8623C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header (Preserved Intro) */}
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
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
        
        {/* Continuous Connecting Vertical Line (Base Track) */}
        <div 
          className="absolute top-6 bottom-12 w-[3px] bg-neutral-200 dark:bg-white/[0.08] left-6 sm:left-8 md:left-1/2 -translate-x-1/2 rounded-full" 
          aria-hidden="true"
        />

        {/* Animated Gradient Progress Line (Fills on Scroll) */}
        <motion.div
          style={{ scaleY, transformOrigin: 'top' }}
          className="absolute top-6 bottom-12 w-[3px] bg-gradient-to-b from-[#E8623C] via-[#F59E0B] to-[#E8623C] left-6 sm:left-8 md:left-1/2 -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(232,98,60,0.6)] z-10"
          aria-hidden="true"
        />

        {/* 4 Continuous Journey Steps */}
        <div className="space-y-16 sm:space-y-24">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Central Number Badge on the Continuous Spine */}
                <div 
                  className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-8 z-20 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4 }}
                    className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white dark:bg-[#12151D] border-2 border-[#E8623C] shadow-lg shadow-[#E8623C]/20 flex items-center justify-center group"
                  >
                    <span className="font-mono text-xs sm:text-sm font-extrabold text-[#E8623C]">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Step Content Card */}
                <div
                  className={`pl-14 sm:pl-16 md:pl-0 ${
                    isEven 
                      ? 'md:col-start-1 md:text-left' 
                      : 'md:col-start-2 md:text-left'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="p-6 sm:p-8 rounded-2xl bg-white/85 dark:bg-[#12151D]/90 backdrop-blur-xl border border-neutral-200/80 dark:border-white/[0.08] hover:border-[#E8623C]/50 dark:hover:border-[#E8623C]/50 shadow-xl shadow-black/[0.03] dark:shadow-black/30 transition-all space-y-5 relative group"
                  >
                    {/* Meta Label (JetBrains Mono) */}
                    <div className="flex items-center justify-between border-b border-neutral-100 dark:border-white/[0.06] pb-3">
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#E8623C]">
                        {step.meta}
                      </span>
                    </div>

                    {/* Step Heading (Space Grotesk) & Story Hook */}
                    <div className="space-y-2.5">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic border-l-2 border-[#E8623C]/40 pl-3 py-0.5">
                        {step.hook}
                      </p>
                    </div>

                    {/* 3 Supporting Points */}
                    <div className="space-y-2.5 pt-2">
                      {step.points.map((pt, pIdx) => (
                        <div
                          key={pt.title}
                          className="p-3 sm:p-3.5 rounded-xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.04] flex items-start gap-3 text-left transition-colors group-hover:border-neutral-300 dark:group-hover:border-white/10"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#E8623C]/10 text-[#E8623C] text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {pIdx + 1}
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                              {pt.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                              {pt.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* End Section CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20 pt-8 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center"
      >
        <span className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Have a project in mind?
        </span>
        <button
          onClick={onOpenConsultation}
          className="px-6 py-3 rounded-xl bg-[#E8623C] hover:bg-[#F0744E] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#E8623C]/25 inline-flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <span>Get Free Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>

    </section>
  );
}
