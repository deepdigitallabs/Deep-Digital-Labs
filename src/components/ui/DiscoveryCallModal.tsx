'use client';

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Video, 
  Phone, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  Rocket
} from 'lucide-react';

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiscoveryCallModal({ isOpen, onClose }: DiscoveryCallModalProps) {
  const [projectType, setProjectType] = useState('Website / Web App');
  const [callMode, setCallMode] = useState<'whatsapp' | 'meet' | 'phone'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  if (!isOpen) return null;

  const projectTypes = [
    'Website / Web App',
    'SaaS Platform',
    'Business Software / ERP',
    'Mobile App',
    'AI & Automation',
    'E-commerce',
    'Custom System'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#10121A] border border-neutral-200 dark:border-[#242735] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-neutral-50 dark:bg-[#141722] border-b border-neutral-200 dark:border-[#242735]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-[#174BFF] dark:text-[#60A5FA]">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white leading-tight">
                Start a Project
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Tell us what you want to build. We&apos;ll outline the architecture &amp; roadmap.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-display text-neutral-900 dark:text-white">
                Project Inquiry Received!
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-neutral-900 dark:text-white">{formData.name}</strong>. Our senior engineering team will review your <span className="text-[#174BFF] font-semibold">{projectType}</span> requirements and reach out via {callMode === 'whatsapp' ? 'WhatsApp' : callMode === 'phone' ? 'Phone' : 'Google Meet'} within 2 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(projectType)}%20(${encodeURIComponent(formData.name)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#174BFF] to-[#8B2CFF] hover:opacity-95 text-white rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md shadow-[#174BFF]/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/15 text-neutral-800 dark:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Project Type Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                  What are you looking to build? *
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {projectTypes.map((type) => {
                    const isSelected = projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#174BFF] text-white shadow-xs'
                            : 'bg-neutral-100 dark:bg-[#171B26] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#242735] hover:border-[#174BFF]/40'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Contact Mode */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                  Preferred Connection Channel
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCallMode('whatsapp')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'whatsapp'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-neutral-50 dark:bg-[#171B26] border-neutral-200 dark:border-[#242735] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallMode('meet')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'meet'
                        ? 'bg-[#174BFF] text-white border-[#174BFF] shadow-sm'
                        : 'bg-neutral-50 dark:bg-[#171B26] border-neutral-200 dark:border-[#242735] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Google Meet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallMode('phone')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'phone'
                        ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 shadow-sm'
                        : 'bg-neutral-50 dark:bg-[#171B26] border-neutral-200 dark:border-[#242735] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call</span>
                  </button>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deepak Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#171B26] border border-neutral-300 dark:border-[#242735] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#174BFF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#171B26] border border-neutral-300 dark:border-[#242735] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#174BFF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="deepak@company.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#171B26] border border-neutral-300 dark:border-[#242735] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#174BFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Brief Project Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to achieve, timeline, or current bottlenecks..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-[#171B26] border border-neutral-300 dark:border-[#242735] text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#174BFF] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Confidential · Senior Engineering Direct</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#174BFF] to-[#8B2CFF] hover:from-[#133EC9] hover:to-[#7322D9] text-white transition-all shadow-md shadow-[#174BFF]/25 active:scale-95 cursor-pointer"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
