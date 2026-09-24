'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  Palette
} from 'lucide-react';
import { DiscoveryCallModal } from '@/components/ui/DiscoveryCallModal';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: The Basics
    fullName: '',
    email: '',
    phone: '',
    companyWebsite: '',
    // Step 2: The Project
    services: [] as string[],
    projectStage: 'Just an idea',
    // Step 3: Budget & Timeline
    budget: '₹1.5 Lakhs – ₹3 Lakhs',
    timeline: 'Within 1-2 months',
    // Step 4: Details
    details: ''
  });

  const toggleService = (srv: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter(s => s !== srv)
        : [...prev.services, srv]
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white text-neutral-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Let’s Build Something <span className="text-neutral-900 dark:text-[#D4FF00] underline decoration-neutral-300 dark:decoration-transparent">That Scales.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Tell us about what you want to build. We’ll understand your requirements and get back to you directly with a clear timeline and fair pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Multi-Step Qualification Form */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-2xl relative">
            
            {/* Step Progress Indicators */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-gray-400 mb-2">
                <span className="text-neutral-900 dark:text-[#D4FF00] font-bold">Step 0{step} / 04</span>
                <span className="text-neutral-700 dark:text-gray-300 font-medium">
                  {step === 1 && 'The Basics'}
                  {step === 2 && 'Product Scope'}
                  {step === 3 && 'Budget & Timeline'}
                  {step === 4 && 'Technical Context'}
                </span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-neutral-900 dark:bg-[#D4FF00] h-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-[#D4FF00]/10 text-emerald-600 dark:text-[#D4FF00] flex items-center justify-center mx-auto border border-emerald-200 dark:border-[#D4FF00]/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Project Inquiry Received!</h3>
                <p className="text-neutral-600 dark:text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-neutral-900 dark:text-[#D4FF00] font-semibold">{formData.fullName}</span>. Our Pune architecture leads have received your specifications. We will email you at <span className="text-neutral-900 dark:text-[#D4FF00] font-semibold">{formData.email}</span> within 24 hours with our initial scoping proposal.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-full bg-neutral-200 dark:bg-white/10 hover:bg-neutral-300 dark:hover:bg-white/20 text-sm font-semibold text-neutral-800 dark:text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={() => setCallModalOpen(true)}
                    className="px-6 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Strategy Call
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                
                {/* STEP 1: The Basics */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-neutral-900 dark:text-white">1. Tell Us About Yourself</h2>
                      <p className="text-xs text-neutral-500 dark:text-gray-400">Basic contact details so we can reach out with our technical review.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] placeholder:text-neutral-400 dark:placeholder:text-gray-600 transition-colors shadow-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="rahul@company.in"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] placeholder:text-neutral-400 dark:placeholder:text-gray-600 transition-colors shadow-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] placeholder:text-neutral-400 dark:placeholder:text-gray-600 transition-colors shadow-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                          Company / Business Name (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kavale & Co. or Yashodeep Agro"
                          value={formData.companyWebsite}
                          onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] placeholder:text-neutral-400 dark:placeholder:text-gray-600 transition-colors shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          if (!formData.fullName || !formData.email || !formData.phone) {
                            alert('Please enter your full name, work email, and phone number.');
                            return;
                          }
                          setStep(2);
                        }}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Next: Product Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: The Project */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-neutral-900 dark:text-white">2. What are you building?</h2>
                      <p className="text-xs text-neutral-500 dark:text-gray-400">Select the services you need assistance with.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-2.5">
                        Services (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { name: 'SaaS & Web Development', icon: <Layers className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" /> },
                          { name: 'Mobile App Development', icon: <Smartphone className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" /> },
                          { name: 'Digital Growth & SEO', icon: <Globe className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" /> },
                          { name: 'Cloud & Ongoing Support', icon: <Palette className="w-4 h-4 text-neutral-900 dark:text-[#D4FF00]" /> }
                        ].map((item) => {
                          const active = formData.services.includes(item.name);
                          return (
                            <button
                              type="button"
                              key={item.name}
                              onClick={() => toggleService(item.name)}
                              className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                                active
                                  ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-[#D4FF00]/10 dark:border-[#D4FF00] dark:text-white'
                                  : 'bg-white dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-400 hover:border-neutral-400 dark:hover:border-white/30'
                              }`}
                            >
                              {item.icon}
                              <span className="text-xs font-semibold">{item.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-2">
                        What stage is your product in?
                      </label>
                      <select
                        value={formData.projectStage}
                        onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#0F0F11] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00]"
                      >
                        <option value="Just an idea">New Concept / MVP</option>
                        <option value="Wireframes ready">Designs / Requirements Ready</option>
                        <option value="Existing product needs scaling">Existing Software Needing Upgrade / Redesign</option>
                        <option value="Other">Monthly Maintenance / Support Retainer</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Next: Budget &amp; Timeline</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Budget & Timeline */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-neutral-900 dark:text-white">3. Investment &amp; Schedule</h2>
                      <p className="text-xs text-neutral-500 dark:text-gray-400">All prices in Indian Rupees (INR). GST invoicing provided.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Estimated Project Budget (INR)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['₹50k – ₹1.5 Lakhs', '₹1.5 Lakhs – ₹3 Lakhs', '₹3 Lakhs – ₹7 Lakhs', '₹7 Lakhs+ (Platform)'].map((tier) => (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setFormData({ ...formData, budget: tier })}
                            className={`p-4 rounded-2xl border text-center font-mono text-xs font-bold transition-all cursor-pointer ${
                              formData.budget === tier
                                ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-[#D4FF00]/10 dark:border-[#D4FF00] dark:text-[#D4FF00]'
                                : 'bg-white dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-400 hover:border-neutral-400 dark:hover:border-white/30'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Target Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#0F0F11] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00]"
                      >
                        <option value="Urgent (2 to 4 weeks)">Urgent (2 to 4 weeks)</option>
                        <option value="Within 1-2 months">Standard (1 to 2 months)</option>
                        <option value="Within 2-3 months">Quarterly (2 to 3 months)</option>
                        <option value="Monthly Retainer">Ongoing Monthly Retainer</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Next: Final Context</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: The Details */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-neutral-900 dark:text-white">4. Project Details &amp; Goals</h2>
                      <p className="text-xs text-neutral-500 dark:text-gray-400">Give us context on key user flows, integrations, or existing roadblocks.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        Tell us more about your project *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Describe what you want to achieve, user personas, integrations (e.g. Stripe, OpenAI, ClickHouse), or any technical constraints..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] placeholder:text-neutral-400 dark:placeholder:text-gray-600 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 text-xs text-neutral-700 dark:text-gray-300 flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-[#D4FF00] shrink-0" />
                      <span>We automatically treat all project submissions with strict non-disclosure.</span>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Send Project Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>

          {/* Right Column: Alternative Contact Info & Pune HQ details */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Discovery Call Card */}
            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-200 dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-[#D4FF00] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Prefer to talk directly?</h3>
                <p className="text-xs text-neutral-600 dark:text-gray-400 mt-1 leading-relaxed">
                  Skip the form and reserve a 30-minute scoping session directly with our Principal Architect.
                </p>
              </div>
              <button
                onClick={() => setCallModalOpen(true)}
                className="w-full py-3 rounded-full font-bold text-xs bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Book 30-Min Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Connect Details */}
            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 space-y-4 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-gray-500 font-bold">
                Direct Channels
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neutral-700 dark:text-[#D4FF00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-500 dark:text-gray-500">Email Directly</div>
                    <a href="mailto:deepdigitallabs@gmail.com" className="text-neutral-900 dark:text-white font-medium hover:underline">
                      deepdigitallabs@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-neutral-700 dark:text-[#D4FF00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-500 dark:text-gray-500">WhatsApp / Slack Direct</div>
                    <a href="https://wa.me/919175152244" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-white font-medium hover:underline">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <InstagramIcon className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-500 dark:text-gray-500">Instagram DM</div>
                    <a href="https://www.instagram.com/deepdigitallabs/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-white font-medium hover:underline">
                      @deepdigitallabs (Direct Message)
                    </a>
                  </div>
                </div>


              </div>
            </div>

            {/* Physical HQ Address */}
            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-900 dark:text-[#D4FF00] font-bold">
                <MapPin className="w-4 h-4" />
                <span>Pune, India</span>
              </div>
              <p className="text-xs text-neutral-700 dark:text-gray-300 leading-relaxed">
                Deep Digital Labs<br />
                Pune, MH 411001, India 🇮🇳
              </p>
            </div>

          </div>

        </div>

      </div>

      <DiscoveryCallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />
    </div>
  );
}
