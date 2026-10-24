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
  Sparkles
} from 'lucide-react';

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectDetails?: string;
}

export function DiscoveryCallModal({ isOpen, onClose, initialProjectDetails }: DiscoveryCallModalProps) {
  const [projectType, setProjectType] = useState('Website / Web App');
  const [callMode, setCallMode] = useState<'whatsapp' | 'meet' | 'phone'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: initialProjectDetails || ''
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1F4B]/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white border border-neutral-200/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-neutral-200/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7A1A]/10 via-[#E8338C]/10 to-[#6A3DE8]/10 text-[#E8338C] flex items-center justify-center border border-[#E8338C]/20 shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#E8338C]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-[#1B1F4B] leading-tight">
                Start a Project
              </h3>
              <p className="text-xs text-[#4B5070] mt-0.5">
                Tell us what you want to build. We&apos;ll outline the architecture &amp; roadmap.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-[#1B1F4B] hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto bg-white">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold font-display text-[#1B1F4B]">
                Project Inquiry Received
              </h4>
              <p className="text-sm text-[#4B5070] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1B1F4B]">{formData.name}</strong>. Our senior engineering team will review your <span className="text-[#E8338C] font-semibold">{projectType}</span> requirements and reach out via {callMode === 'whatsapp' ? 'WhatsApp' : callMode === 'phone' ? 'Phone' : 'Google Meet'} within 2 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(projectType)}%20(${encodeURIComponent(formData.name)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-[#1B1F4B] rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Project Type Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1B1F4B] mb-2">
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
                            ? 'bg-gradient-to-r from-[#FF7A1A] to-[#E8338C] text-white shadow-xs'
                            : 'bg-[#F7F5FF] text-[#1B1F4B] border border-neutral-200/80 hover:border-[#E8338C]/50 hover:bg-white'
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
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1B1F4B] mb-2">
                  Preferred Connection Channel
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCallMode('whatsapp')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'whatsapp'
                        ? 'bg-[#25D366]/10 border-[#25D366] text-[#1B1F4B] shadow-2xs font-bold'
                        : 'bg-neutral-50 border-neutral-200/80 text-[#4B5070] hover:border-neutral-300'
                    }`}
                  >
                    <MessageSquare className={`w-3.5 h-3.5 ${callMode === 'whatsapp' ? 'text-[#25D366]' : 'text-[#4B5070]'}`} />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallMode('meet')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'meet'
                        ? 'bg-[#6A3DE8]/10 border-[#6A3DE8] text-[#1B1F4B] shadow-2xs font-bold'
                        : 'bg-neutral-50 border-neutral-200/80 text-[#4B5070] hover:border-neutral-300'
                    }`}
                  >
                    <Video className={`w-3.5 h-3.5 ${callMode === 'meet' ? 'text-[#6A3DE8]' : 'text-[#4B5070]'}`} />
                    <span>Google Meet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallMode('phone')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'phone'
                        ? 'bg-[#FF7A1A]/10 border-[#FF7A1A] text-[#1B1F4B] shadow-2xs font-bold'
                        : 'bg-neutral-50 border-neutral-200/80 text-[#4B5070] hover:border-neutral-300'
                    }`}
                  >
                    <Phone className={`w-3.5 h-3.5 ${callMode === 'phone' ? 'text-[#FF7A1A]' : 'text-[#4B5070]'}`} />
                    <span>Direct Call</span>
                  </button>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200/90 text-sm text-[#1B1F4B] placeholder:text-neutral-400 focus:outline-none focus:border-[#E8338C] focus:ring-2 focus:ring-[#E8338C]/15 transition-all shadow-2xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200/90 text-sm text-[#1B1F4B] placeholder:text-neutral-400 focus:outline-none focus:border-[#E8338C] focus:ring-2 focus:ring-[#E8338C]/15 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@company.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200/90 text-sm text-[#1B1F4B] placeholder:text-neutral-400 focus:outline-none focus:border-[#E8338C] focus:ring-2 focus:ring-[#E8338C]/15 transition-all shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B1F4B] mb-1">
                  Brief Project Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you want to achieve, timeline, key features, or current bottlenecks..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200/90 text-sm text-[#1B1F4B] placeholder:text-neutral-400 focus:outline-none focus:border-[#E8338C] focus:ring-2 focus:ring-[#E8338C]/15 transition-all shadow-2xs resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#4B5070]">
                  <ShieldCheck className="w-4 h-4 text-[#E8338C] shrink-0" />
                  <span>100% Confidential · Senior Engineering Direct</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#FF7A1A] via-[#E8338C] to-[#6A3DE8] hover:opacity-95 text-white transition-all shadow-md shadow-[#E8338C]/20 active:scale-95 cursor-pointer"
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
