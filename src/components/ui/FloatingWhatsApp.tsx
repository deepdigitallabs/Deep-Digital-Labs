'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-50 md:hidden">
      <a
        href="https://wa.me/917756063128?text=Hi%20Deep%20Digital%20Labs,%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with developer on WhatsApp"
        className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-xl shadow-[#25D366]/30 hover:bg-[#20ba5a] active:scale-95 transition-all"
      >
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
        <span>Chat with us</span>
      </a>
    </aside>
  );
}
