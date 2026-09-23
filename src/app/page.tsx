"use client";

import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Palette, 
  Rocket, 
  Layers, 
  Zap, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      title: "UI/UX & Brand Identity",
      desc: "Architecting bespoke digital experiences that captivate audiences, inspire loyalty, and elevate brand perception."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      title: "Full-Stack Web & Mobile",
      desc: "Robust, scalable, and high-performance applications built with modern frameworks and resilient cloud infrastructure."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "AI & Workflow Automation",
      desc: "Integrating state-of-the-art AI systems and intelligent workflow automation to unlock exponential operational efficiency."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: "Growth & SEO Architecture",
      desc: "Data-backed conversion optimization and search visibility engineering to fuel sustainable customer acquisition."
    },
  ];

  const highlights = [
    "Enterprise-grade Next.js & React architecture",
    "Tailored aesthetic experiences with micro-interactions",
    "Scalable, cloud-native deployments with 99.9% uptime",
    "Continuous iteration and dedicated technical stewardship"
  ];

  return (
    <div className="relative min-h-screen bg-[#090b10] text-slate-100 overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090b10]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              D
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-lg text-white">Deep Digital Labs</span>
              <span className="block text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Digital Agency & Studio</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#impact" className="hover:text-cyan-400 transition-colors">Impact</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Start Project
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Digital Product Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                We engineer digital experiences that <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">dominate markets</span>.
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                Deep Digital Labs crafts custom web applications, design systems, and intelligent digital products designed to scale brands faster and outperform expectations.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all bg-slate-900/40"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>

              {/* Stat badges */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-slate-400 mt-1">Uptime Reliability</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">10x</div>
                  <div className="text-xs text-slate-400 mt-1">Performance Velocity</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-400">100%</div>
                  <div className="text-xs text-slate-400 mt-1">Production Tested</div>
                </div>
              </div>
            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-950/50 bg-slate-900/60 backdrop-blur-xl p-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero-creative-team.jpg"
                    alt="Deep Digital Labs Creative & Engineering Team"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
                      <Zap className="w-3.5 h-3.5" /> High Precision Lab
                    </span>
                    <span>Next.js 16 • React 19</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    Where avant-garde aesthetic craft meets robust architectural discipline.
                  </p>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#121622]/90 border border-white/10 shadow-xl backdrop-blur-md">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Full Stack Ready</div>
                  <div className="text-[11px] text-slate-400">Vercel & Cloud Native</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 border-t border-white/5 bg-[#0b0e17]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">Our Expertise</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              Engineered for transformative business results
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              From conception to deployment, we build digital products that combine speed, resilience, and visual prestige.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 flex items-center text-xs font-medium text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] bg-slate-900">
            <Image
              src="/images/creatix-hero-woman.jpg"
              alt="Deep Digital Labs Vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-75" />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
              <Rocket className="w-3.5 h-3.5" />
              <span>Built For Uncompromising Leaders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              We eliminate friction between technical execution and brand brilliance.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              At Deep Digital Labs, we reject standard cookie-cutter templates. Every project is crafted with bespoke typography, curated color palettes, optimized Core Web Vitals, and fluid reactivity.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl border border-white/10 transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-white/5 bg-gradient-to-b from-[#0b0e17] to-[#090b10]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-indigo-950/30 to-purple-950/20 text-center space-y-6">
          <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-medium">Ready To Launch?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let&apos;s build something extraordinary together.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Reach out directly to kickstart your next digital flagship. Fast turnaround, zero fluff, maximum impact.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@deepdigitallabs.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-semibold text-slate-400">
            © {new Date().getFullYear()} Deep Digital Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
