import React from 'react';

interface TechMarqueeProps {
  headline?: string;
}

export function TechMarquee({ headline }: TechMarqueeProps) {
  const technologies = [
    { name: 'React 19', tag: 'Core' },
    { name: 'Next.js 15', tag: 'Framework' },
    { name: 'Node.js', tag: 'Backend' },
    { name: 'Python / FastAPI', tag: 'AI & Data' },
    { name: 'AWS Cloud', tag: 'Infra' },
    { name: 'Flutter', tag: 'Mobile' },
    { name: 'PostgreSQL', tag: 'Database' },
    { name: 'Tailwind CSS v4', tag: 'UI Engine' },
    { name: 'Docker & K8s', tag: 'DevOps' },
    { name: 'Stripe API', tag: 'Billing' },
    { name: 'Redis', tag: 'Cache' },
    { name: 'Vercel Edge', tag: 'CDN' },
    { name: 'GraphQL', tag: 'API' },
    { name: 'React Native', tag: 'Mobile' }
  ];

  // Duplicate for smooth seamless loop
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="w-full py-10 relative overflow-hidden bg-[#050914]/80 border-y border-slate-800/80">
      
      {/* Side gradient masks for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#050811] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#050811] to-transparent pointer-events-none" />

      {headline && (
        <div className="text-center mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            {headline}
          </h2>
        </div>
      )}

      {/* Infinite scrolling track */}
      <div className="flex animate-marquee gap-6">
        {marqueeItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/50 transition-all cursor-default shrink-0 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
            <span className="font-semibold text-sm text-slate-200 tracking-tight">
              {tech.name}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
              {tech.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientTrustMarquee() {
  const clients = [
    { name: 'Rahul B. Kavale & Co.', market: 'Corporate & Legal' },
    { name: 'Dairy Flow Pro', market: 'SaaS / Dairy ERP' },
    { name: 'Yashodeep Agro', market: 'Agri-Tech Platform' },
    { name: 'Trust Carry Logistics', market: 'Logistics & Supply Chain' },
    { name: 'Karyala Jodo', market: 'Political Tech & Mobilization' },
    { name: 'Sangola Vikas Sankalp', market: 'Civic & Campaign Portal' },
    { name: 'Prasaraka (Payal & Amit)', market: 'Political Branding & Spokesperson' }
  ];

  const duplicated = [...clients, ...clients];

  return (
    <div className="w-full py-8 relative overflow-hidden bg-[#03060c] border-b border-slate-900">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#03060c] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#03060c] to-transparent pointer-events-none" />

      <div className="text-center mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Trusted by forward-thinking startups and enterprises across the US, UK, and APAC
        </p>
      </div>

      <div className="flex animate-marquee gap-8 items-center">
        {duplicated.map((client, idx) => (
          <div 
            key={`${client.name}-${idx}`} 
            className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity shrink-0"
          >
            <div className="w-2 h-2 rounded-sm bg-slate-600" />
            <span className="text-sm font-bold text-slate-300 tracking-tight">
              {client.name}
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              ({client.market})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
