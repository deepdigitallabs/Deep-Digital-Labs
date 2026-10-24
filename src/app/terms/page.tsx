import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, ArrowLeft, ShieldCheck, Mail, MessageSquare, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Deep Digital Labs',
  description: 'Terms of Service agreement governing custom software engineering, SaaS development, cloud infrastructure, and IT services provided by Deep Digital Labs.',
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#4B5070] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4B5070] hover:text-[#E8338C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-neutral-200/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5FF] text-[#1B1F4B] border border-neutral-200/80 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-[#6A3DE8]" />
            <span>Legal Agreement &amp; Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B1F4B] tracking-tight">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#4B5070]">
            <span><strong className="text-[#1B1F4B]">Effective Date:</strong> October 1, 2026</span>
            <span>•</span>
            <span><strong className="text-[#1B1F4B]">Last Updated:</strong> October 2026</span>
          </div>

          <p className="text-sm text-[#4B5070] leading-relaxed pt-2">
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between <strong className="text-[#1B1F4B]">Deep Digital Labs</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at Pune, MH 411001, India, and the client, company, or individual (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) engaging our services.
          </p>

          <p className="text-xs text-[#717694] italic">
            By signing a Proposal, Statement of Work (SOW), or by utilizing our services, you agree to be bound by these Terms. If you do not agree, you must not engage our services.
          </p>
        </div>

        {/* Content Body */}
        <div className="py-10 space-y-12 text-[#4B5070] text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">01.</span>
              Scope of Services
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">1.1 Statements of Work (SOW):</strong> All services (including but not limited to custom software development, web/mobile app development, SaaS platforms, SEO, and cloud hosting) will be detailed in a mutually agreed-upon Proposal or SOW.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">1.2 Changes to Scope:</strong> Any requests outside the approved SOW will be considered &quot;Change Requests.&quot; We reserve the right to adjust timelines and pricing for Change Requests, which must be approved in writing (including via WhatsApp or email) before work commences.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">02.</span>
              Client Obligations
            </h2>
            <p>To ensure project success, the Client agrees to:</p>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">2.1 Assets &amp; Access:</strong> Provide all necessary content, assets, API keys, and third-party access (e.g., AWS, GitHub, domain registrars) in a timely manner.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">2.2 Feedback &amp; Approvals:</strong> Provide feedback and approvals within the timeframes specified in the SOW (typically 3–5 business days). Delays caused by the Client will result in proportional extensions to the project timeline.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">2.3 Lawful Materials:</strong> Ensure that all materials provided to us do not infringe on any third-party intellectual property rights and are lawful.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">03.</span>
              Payment Terms &amp; GST Compliance
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">3.1 Milestone Billing:</strong> Payments are tied to measurable milestones (e.g., Prototype, Alpha, Production Launch) as outlined in the SOW.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">3.2 Invoicing &amp; Taxes:</strong> All invoices will include an 18% Goods and Services Tax (GST) as mandated by Indian law. The Client is responsible for paying all applicable taxes.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">3.3 Payment Timeline:</strong> Invoices are due within <strong>7 days</strong> of receipt.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">3.4 Late Payments:</strong> Overdue invoices will incur a late fee of <strong>1.5% per month</strong> (or the maximum rate permitted by Indian law).
              </p>
              <p>
                <strong className="text-[#1B1F4B]">3.5 Right to Suspend:</strong> We reserve the right to pause all development, withhold code access, or suspend hosting services if payments are more than 14 days overdue, without liability for any resulting delays.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">04.</span>
              Intellectual Property (IP) Rights
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">4.1 Pre-Existing IP:</strong> Deep Digital Labs retains all rights to its pre-existing code, frameworks, libraries, and tools (&quot;Background IP&quot;) used to build your solution. We grant you a perpetual, non-exclusive, royalty-free license to use this Background IP as part of the delivered software.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">4.2 Custom Deliverables:</strong> While we push code to your GitHub/GitLab repository from Day 1 for transparency, <strong className="text-[#1B1F4B]">legal title and full Intellectual Property rights to the custom-developed code shall formally transfer to the Client ONLY upon receipt of full and final payment</strong> for the respective milestone or project. Until full payment is received, Deep Digital Labs retains a legal security interest in the code.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">4.3 Open Source:</strong> Any third-party or open-source software incorporated into the project remains subject to its respective original licenses.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">05.</span>
              Confidentiality &amp; Non-Disclosure
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">5.1 Confidentiality:</strong> Both parties agree to keep all proprietary information, business logic, trade secrets, and technical data strictly confidential.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">5.2 Survival &amp; NDA:</strong> This obligation survives the termination of this agreement for a period of <strong>three (3) years</strong>. We are happy to sign a mutual Non-Disclosure Agreement (NDA) prior to project commencement if requested.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">06.</span>
              Warranties and Disclaimers
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">6.1 Limited Warranty:</strong> We warrant that the custom software will perform substantially in accordance with the SOW for a period of <strong>30 days</strong> following final delivery (&quot;Warranty Period&quot;). We will fix any reproducible bugs reported during this period at no additional cost.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">6.2 &quot;As Is&quot; After Warranty:</strong> After the Warranty Period, the software is provided &quot;AS IS.&quot; Any further modifications, feature additions, or bug fixes will be billed under a separate Maintenance/AMC agreement.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">6.3 Third-Party Services:</strong> We do not warrant or guarantee the uptime, security, or functionality of third-party services (e.g., AWS, payment gateways, external APIs, or hosting providers).
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">07.</span>
              Limitation of Liability
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">7.1 Maximum Liability:</strong> To the maximum extent permitted by Indian law, Deep Digital Labs’ total aggregate liability for any claims arising out of or related to these Terms or the SOW shall <strong>not exceed the total amount actually paid by the Client to us in the six (6) months preceding the claim</strong>.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">7.2 Exclusion of Consequential Damages:</strong> Under no circumstances shall Deep Digital Labs be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or reputational harm, even if we have been advised of the possibility of such damages.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">08.</span>
              Term and Termination
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">8.1 Termination for Cause:</strong> Either party may terminate the agreement if the other party materially breaches these Terms and fails to cure such breach within 14 days of written notice.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">8.2 Termination for Convenience:</strong> The Client may terminate the project at any time by providing 14 days&apos; written notice. In such an event, the Client shall pay Deep Digital Labs for all work completed, hours logged, and non-cancelable expenses incurred up to the termination date.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">8.3 Effect of Termination:</strong> Upon termination and full payment, we will hand over all completed code and assets. If payment is incomplete, we reserve the right to retain the code until the outstanding balance is settled.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">09.</span>
              Independent Contractor Relationship
            </h2>
            <div className="pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                Deep Digital Labs is an independent contractor. Nothing in these Terms shall be construed to create a partnership, joint venture, agency, or employer-employee relationship between the parties.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">10.</span>
              Governing Law and Dispute Resolution
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">10.1 Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the Republic of India, including the Information Technology Act, 2000.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">10.2 Exclusive Jurisdiction:</strong> Any disputes arising out of or in connection with this agreement shall be subject to the <strong>exclusive jurisdiction of the courts in Pune, Maharashtra, India</strong>.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">10.3 Arbitration:</strong> Prior to litigation, both parties agree to attempt to resolve the dispute amicably through good-faith negotiations. If unresolved within 30 days, the dispute shall be referred to a sole arbitrator in Pune, in accordance with the Arbitration and Conciliation Act, 1996.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">11.</span>
              Force Majeure
            </h2>
            <div className="pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                We shall not be liable for any delay or failure in performance resulting from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemics, war, terrorism, government actions, or widespread internet/infrastructure failures.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">12.</span>
              General Provisions
            </h2>
            <div className="space-y-2 pl-4 sm:pl-6 border-l-2 border-neutral-200/80">
              <p>
                <strong className="text-[#1B1F4B]">12.1 Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">12.2 Entire Agreement:</strong> These Terms, along with the signed SOW and any mutually executed NDA, constitute the entire agreement between the parties and supersede all prior communications.
              </p>
              <p>
                <strong className="text-[#1B1F4B]">12.3 Amendments:</strong> We reserve the right to update these Terms. The updated version will apply to all new SOWs signed after the &quot;Last Updated&quot; date.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F4B] tracking-tight flex items-center gap-2">
              <span className="text-[#6A3DE8] font-mono text-base font-bold">13.</span>
              Contact Information
            </h2>
            <p>
              For any legal notices, questions, or concerns regarding these Terms, please contact us at:
            </p>

            <div className="p-6 rounded-2xl bg-[#F7F5FF] border border-neutral-200/80 space-y-3 text-sm">
              <div className="font-bold text-base text-[#1B1F4B] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E8338C]" />
                <span>Deep Digital Labs</span>
              </div>
              <div className="flex items-start gap-2.5 text-[#4B5070]">
                <MapPin className="w-4 h-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Pune, MH 411001, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#4B5070]">
                <Mail className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                <a href="mailto:deepdigitallabs@gmail.com" className="text-[#1B1F4B] font-medium hover:text-[#E8338C] hover:underline transition-colors">
                  deepdigitallabs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#4B5070]">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/917756063128" target="_blank" rel="noopener noreferrer" className="text-[#1B1F4B] font-medium hover:text-[#25D366] hover:underline transition-colors">
                  Chat on WhatsApp (+91 77560 63128)
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
