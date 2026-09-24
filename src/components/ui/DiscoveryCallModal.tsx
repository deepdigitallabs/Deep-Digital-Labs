'use client';

import React, { useState } from 'react';
import { Calendar, Clock, X, CheckCircle2, ArrowRight, Video, Phone, Shield, MessageSquare } from 'lucide-react';

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiscoveryCallModal({ isOpen, onClose }: DiscoveryCallModalProps) {
  const [selectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('02:30 PM IST (Afternoon Slot)');
  const [callMode, setCallMode] = useState<'meet' | 'phone' | 'whatsapp'>('meet');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0F0F11] border border-neutral-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-50 dark:bg-black/40 border-b border-neutral-200 dark:border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-neutral-200 dark:bg-white/5 border border-neutral-300 dark:border-white/10 flex items-center justify-center text-neutral-900 dark:text-[#D4FF00]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">Book a Quick Call</h3>
              <p className="text-xs text-neutral-500 dark:text-gray-400">Directly with our engineering team in Pune, India</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-[#D4FF00]/10 text-emerald-600 dark:text-[#D4FF00] flex items-center justify-center mx-auto border border-emerald-300 dark:border-[#D4FF00]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Meeting Scheduled!</h4>
              <p className="text-sm text-neutral-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-neutral-900 dark:text-white">{formData.name}</span>. We will connect with you via {callMode === 'whatsapp' ? 'WhatsApp' : callMode === 'phone' ? 'Phone Call' : 'Google Meet'} at <span className="text-emerald-600 dark:text-[#D4FF00] font-semibold">{formData.phone || formData.email}</span> on {selectedDay} at {selectedTime}.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919175152244?text=Hi%20Deep%20Digital%20Labs,%20I%20just%20scheduled%20a%20call%20for%20${formData.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold inline-flex items-center justify-center gap-1.5"
                >
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-neutral-200 dark:bg-white/10 hover:bg-neutral-300 dark:hover:bg-white/20 text-neutral-800 dark:text-white rounded-full text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Communication Channel Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-gray-400 mb-2">
                  How would you prefer to connect?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCallMode('meet')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'meet'
                        ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-[#D4FF00]/20 dark:border-[#D4FF00] dark:text-[#D4FF00]'
                        : 'bg-neutral-50 dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-400'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Google Meet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallMode('whatsapp')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'whatsapp'
                        ? 'bg-emerald-600 text-white border-emerald-600 dark:bg-emerald-500/20 dark:border-emerald-400 dark:text-emerald-400'
                        : 'bg-neutral-50 dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-400'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCallMode('phone')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      callMode === 'phone'
                        ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-[#D4FF00]/20 dark:border-[#D4FF00] dark:text-[#D4FF00]'
                        : 'bg-neutral-50 dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-400'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Call</span>
                  </button>
                </div>
              </div>

              {/* Time Slot Picker in Indian Standard Time (IST) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-gray-400 mb-2">
                  Select Convenient Time Slot (IST)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    '11:00 AM IST (Morning)',
                    '02:30 PM IST (Afternoon)',
                    '05:00 PM IST (Evening)',
                    '07:30 PM IST (Late Evening)'
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                        selectedTime === slot
                          ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-[#D4FF00]/10 dark:border-[#D4FF00] dark:text-[#D4FF00] font-semibold'
                          : 'bg-neutral-50 dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-400 hover:border-neutral-400'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-gray-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-gray-400 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-gray-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@company.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-gray-400 mb-1">
                  Brief Project Note (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Need an MVP mobile app or website redesign"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-[#D4FF00] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-gray-400">
                  <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-[#D4FF00]" />
                  <span>100% Confidential • Pune Leads</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#D4FF00] dark:text-black dark:hover:bg-[#bbf000] transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Confirm Strategy Call</span>
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
