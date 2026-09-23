import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Deep Digital Labs',
  description: 'Learn how Deep Digital Labs collects, uses, and safeguards client data, intellectual property, and confidential information.',
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Legal &amp; Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
            Effective Date: February 1, 2026 • Last Updated: February 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="py-10 space-y-10 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              1. Overview &amp; Commitment
            </h2>
            <p>
              At <strong>Deep Digital Labs</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), protecting the privacy and confidentiality of our clients, website visitors, and partners is fundamental to our software engineering practice. This Privacy Policy details how we collect, process, store, and safeguard your personal data and project-related information when you use our website (deepdigitallabs.com) or engage our digital product engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              2. Information We Collect
            </h2>
            <p>We only collect information that is strictly necessary to deliver high-quality digital products, provide accurate project scoping, and maintain ongoing business communications:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Client Identification &amp; Contact Details:</strong> Name, professional email address, phone number / WhatsApp number, company name, and billing address provided when submitting an inquiry or onboarding as a client.
              </li>
              <li>
                <strong>Project Specifications &amp; Technical Requirements:</strong> Product roadmaps, architecture diagrams, user stories, API credentials, and design assets shared during project discovery and development.
              </li>
              <li>
                <strong>Technical Log Data &amp; Analytics:</strong> Anonymized browser type, operating system, IP address, referral URLs, and pages visited on our website to ensure site reliability and performance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              3. Client Confidentiality &amp; Proprietary Source Code
            </h2>
            <p>
              We treat all client codebases, business logic, algorithmic models, database schemas, and proprietary trade secrets with the highest level of confidentiality.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Non-Disclosure Agreement (NDA):</strong> We gladly execute mutual NDAs prior to discussing proprietary architecture or sensitive project requirements.
              </li>
              <li>
                <strong>Zero Data Selling:</strong> We do not sell, rent, monetize, or trade any client information, user data, or source code under any circumstances.
              </li>
              <li>
                <strong>Dedicated Repository Isolation:</strong> Client repositories are created in isolated client-owned organizations or strictly restricted private GitHub/GitLab organizations.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              4. How We Use Your Information
            </h2>
            <p>The information collected is used solely for the following operational purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Developing, testing, deploying, and maintaining your web, mobile, and cloud software applications.</li>
              <li>Generating milestone invoices, contracts, and statement of work (SOW) documents.</li>
              <li>Communicating project sprint updates, technical roadmap decisions, and release notes.</li>
              <li>Monitoring application uptime, security vulnerabilities, and system health for managed clients.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              5. Third-Party Services &amp; Sub-processors
            </h2>
            <p>
              To deliver our digital products and infrastructure, we partner with industry-standard, compliant cloud providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Cloud Hosting &amp; CI/CD:</strong> Vercel, AWS (Amazon Web Services), and GitHub.</li>
              <li><strong>Billing &amp; Payment Processing:</strong> Stripe and verified banking partners for secure, PCI-DSS compliant transactions.</li>
              <li><strong>Communication:</strong> Google Workspace and Slack for project correspondence.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              6. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards. All data transmitted between your browser and our website is secured using TLS 1.3 encryption. We retain client records and project documentation only for the duration of the engagement or as required by Indian commercial and tax regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you have the right to request access to your personal data, request corrections, or request deletion of personal information where applicable by law. To exercise any of these rights, contact us at <a href="mailto:hello@deepdigitallabs.com" className="font-semibold text-slate-900 dark:text-white underline">hello@deepdigitallabs.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              8. Contact &amp; Grievance Redressal
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please contact us:
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
