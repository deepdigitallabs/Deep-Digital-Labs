'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCheck, Sparkles } from 'lucide-react';

function WhatsAppIcon({ className = 'w-5 h-5 fill-current' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const QUICK_TOPICS = [
  { label: '🌐 Website for my business', text: 'Hi Deep Digital Labs, I want to discuss a new website for my business.' },
  { label: '📱 Custom software / app', text: 'Hi Deep Digital Labs, I want to build custom software / a mobile app.' },
  { label: '💬 WhatsApp automation', text: 'Hi Deep Digital Labs, I want to automate my business with WhatsApp bots.' },
  { label: '💰 Get a fixed quote', text: 'Hi Deep Digital Labs, I would like to get a quote and timeline for my project.' },
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  // Show a gentle teaser bubble after 3 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsAppWith = (msg: string) => {
    const text = encodeURIComponent(msg || 'Hi Deep Digital Labs, I want to discuss a project for my business.');
    window.open(`https://wa.me/917756063128?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppWith(customMessage || 'Hi Deep Digital Labs, I would like to discuss a project.');
  };

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* 1. Teaser Speech Bubble (Visible before user opens popup) */}
      {!isOpen && showTeaser && (
        <div className="mb-3 max-w-[280px] sm:max-w-xs bg-white text-[#1B1F4B] p-3.5 rounded-2xl rounded-br-xs shadow-2xl border border-neutral-200/80 animate-in fade-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            aria-label="Close message"
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#4B5070] flex items-center justify-center text-xs shadow-xs transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <div 
            onClick={() => {
              setIsOpen(true);
              setShowTeaser(false);
            }}
            className="cursor-pointer space-y-1"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#E8338C]">
              <Sparkles className="w-3 h-3 text-[#FFB81C]" />
              <span>Direct Developer Chat</span>
            </div>
            <p className="text-xs text-[#4B5070] font-medium leading-relaxed">
              Have a question or need a quick price estimate? Message us directly on WhatsApp 👋
            </p>
          </div>
        </div>
      )}

      {/* 2. Interactive WhatsApp Chat Popup Window */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label="WhatsApp Chat Window"
          className="mb-4 w-[calc(100vw-2.5rem)] sm:w-[360px] bg-white rounded-3xl shadow-2xl border border-neutral-200/90 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF9A1F] via-[#F0367A] to-[#6A3DE8] flex items-center justify-center text-white font-extrabold text-sm">
                    D
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-white">Deep Digital Labs</h3>
                <div className="flex items-center gap-1 text-[11px] text-emerald-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Replies in 15 mins · Pune</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
              className="w-8 h-8 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD]/40 space-y-3.5 max-h-[380px] overflow-y-auto">
            {/* Timestamp */}
            <div className="text-center">
              <span className="px-2.5 py-0.5 rounded-md bg-white/80 text-[10px] font-semibold text-[#4B5070] shadow-2xs">
                Today
              </span>
            </div>

            {/* Received Message Bubble */}
            <div className="bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-sm text-xs text-[#1B1F4B] space-y-2 max-w-[90%] border border-neutral-100">
              <div className="font-bold text-[11px] text-[#075E54]">Deep Digital Labs Team</div>
              <p className="leading-relaxed text-[#4B5070]">
                Hello! 👋 Welcome to Deep Digital Labs Pune.
              </p>
              <p className="leading-relaxed text-[#4B5070]">
                Tell us what you want to build. We’ll understand your business, give you an honest recommendation and a fair fixed quote.
              </p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-[#4B5070]/60 pt-1">
                <span>Just now</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
              </div>
            </div>

            {/* Quick Topics */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] uppercase font-bold text-[#4B5070] px-1 tracking-wider">
                Choose a topic to chat:
              </div>
              <div className="flex flex-col gap-1.5">
                {QUICK_TOPICS.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => openWhatsAppWith(topic.text)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50/60 border border-neutral-200/80 hover:border-[#25D366]/50 text-xs text-[#1B1F4B] font-medium transition-all shadow-2xs hover:shadow-xs flex items-center justify-between group cursor-pointer"
                  >
                    <span>{topic.label}</span>
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366] shrink-0 opacity-70 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-neutral-200/80">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3.5 py-2.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs text-[#1B1F4B] placeholder:text-[#4B5070]/50 focus:outline-none focus:border-[#25D366] transition-all"
              />
              <button
                type="submit"
                aria-label="Send message on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#25D366]/30 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 fill-white" />
              </button>
            </form>
            <div className="text-[10px] text-center text-[#4B5070]/70 pt-2 font-medium">
              Direct chat with lead developers · No spam
            </div>
          </div>
        </div>
      )}

      {/* 3. Main Floating WhatsApp Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTeaser(false);
        }}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer ${
          isOpen
            ? 'bg-[#1B1F4B] text-white hover:bg-[#23285c]'
            : 'bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-[#25D366]/40 hover:scale-105'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <WhatsAppIcon className="w-7 h-7 fill-white" />
            {/* Unread dot / badge */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8338C] opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E8338C] text-[10px] font-bold text-white items-center justify-center">
                1
              </span>
            </span>
          </>
        )}
      </button>

    </aside>
  );
}
