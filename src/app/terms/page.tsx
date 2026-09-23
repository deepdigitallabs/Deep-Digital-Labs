import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, CheckCircle2, ArrowLeft, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Deep Digital Labs',
  description: 'Terms and conditions governing custom software engineering, web and mobile development, and cloud services provided by Deep Digital Labs.',
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-white text-slate-900 dark:bg-[#050505] dark:text-white min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 dark:bg-white/5 dark:text-white dark:border-white/10 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Agreement &amp; Terms</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Terms of Service
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
            Effective Date: February 1, 2026 • Last Updated: February 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="py-10 space-y-10 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website of <strong>Deep Digital Labs</strong> (&quot;Agency,&quot; &quot;we,&quot; or &quot;us&quot;) or engaging us for software development, SaaS engineering, mobile application development, or consulting services, you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be legally bound by these Terms of Service. If you are entering into this agreement on behalf of an entity, you warrant that you possess the authority to bind that entity to these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              2. Scope of Services
            </h2>
            <p>
              Deep Digital Labs provides technical consulting and product development services including, but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>SaaS &amp; Web Development:</strong> Custom cloud platforms, multi-tenant databases, API architecture, and Next.js applications.</li>
              <li><strong>Mobile Application Development:</strong> Cross-platform iOS and Android apps using Flutter and React Native.</li>
              <li><strong>Digital Growth &amp; Technical SEO:</strong> Core Web Vitals optimization, search indexing, schema markup, and analytics setup.</li>
              <li><strong>Cloud &amp; Ongoing Support:</strong> AWS/Vercel server deployment, database backup automation, security patching, and uptime monitoring.</li>
            </ul>
            <p className="pt-2">
              Specific project deliverables, milestones, budgets, and timelines will be defined in written Statements of Work (SOW) or project proposals mutually approved by both parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              3. Intellectual Property &amp; Source Code Ownership
            </h2>
            <p>
              We believe in complete transparency and total client code ownership:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>100% Client Ownership Upon Payment:</strong> Upon full and final payment of all agreed project milestone invoices, all custom source code, design files, database architectures, and digital assets created specifically for the project transfer entirely and irrevocably to the Client.
              </li>
              <li>
                <strong>No Vendor Lock-In:</strong> All repositories are transferred to the client&apos;s GitHub, GitLab, or cloud account with zero proprietary licensing restrictions or vendor lock-in.
              </li>
              <li>
                <strong>Open-Source Tools:</strong> Standard open-source frameworks (React, Next.js, Flutter, Tailwind, PostgreSQL) remain licensed under their respective open-source licenses (MIT, Apache 2.0).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              4. Payment Terms &amp; Invoicing
            </h2>
            <p>
              Payment structures are aligned with verified project deliverables and milestones:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Milestone-Based Billing:</strong> Standard projects are billed in milestone installments (e.g., upfront sprint deposit, prototype completion, production launch).</li>
              <li><strong>Due Dates:</strong> Invoices are payable within 7 business days of issuance unless otherwise stipulated in the SOW.</li>
              <li><strong>Taxes:</strong> All applicable taxes (including Goods and Services Tax / GST for Indian entities) will be itemized on official tax invoices.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              5. Client Responsibilities &amp; Approvals
            </h2>
            <p>
              Timely project delivery requires collaboration. The Client agrees to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide required technical access (APIs, third-party credentials, branding assets, domain DNS) in a timely manner.</li>
              <li>Review sprint deliverables and provide consolidated feedback within agreed review windows.</li>
              <li>Designate a primary decision-maker to prevent conflicting feedback and sprint roadblocks.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              6. Warranties &amp; Post-Launch Bug Support
            </h2>
            <p>
              We stand firmly behind the quality of our code:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Post-Launch Warranty:</strong> All custom builds include a standard 30-day post-launch warranty during which any bugs or defects in the delivered scope are remediated at zero additional cost.</li>
              <li><strong>Ongoing Support Plans:</strong> Beyond the warranty window, clients may elect ongoing maintenance retainers for continuous cloud monitoring, third-party API updates, and security patches.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages resulting from downtime, data loss, or business interruption. Deep Digital Labs&apos; aggregate liability under any contract or claim shall not exceed the total fees paid by the client under the specific SOW in the preceding three months.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              8. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms and any project contracts executed with Deep Digital Labs shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding arising under this Agreement shall be brought exclusively in the competent courts located in Pune, Maharashtra, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              9. Contact &amp; Inquiries
            </h2>
            <p>
              For legal inquiries, contract clarifications, or NDA requests, please contact:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0F0F11] dark:border-white/10 space-y-2 mt-4 text-xs sm:text-sm">
              <div className="font-bold text-slate-900 dark:text-white">Deep Digital Labs</div>
              <div className="text-slate-600 dark:text-gray-400">Level 5, Amar Paradigm, Baner-Hinjawadi Tech Corridor</div>
              <div className="text-slate-600 dark:text-gray-400">Pune, Maharashtra 411045, India</div>
              <div className="pt-2">
                <a href="mailto:hello@deepdigitallabs.com" className="text-slate-900 dark:text-white font-semibold hover:underline">
                  Email: hello@deepdigitallabs.com
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
