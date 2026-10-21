'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Animations';

const lastUpdated = 'January 15, 2024';
const effectiveDate = 'January 15, 2024';

export function TermsPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="terms-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 id="terms-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-text-secondary">
              Last updated: {lastUpdated} | Effective date: {effectiveDate}
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container size="xl">
          <div className="max-w-4xl mx-auto space-y-12">
            <Reveal threshold={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  By accessing and using the VYNTOR Technologies website (&quot;Site&quot;) and our services (&quot;Services&quot;), 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions 
                  (&quot;Terms&quot;) and our <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  If you do not agree to these Terms, please do not use our Site or Services. We reserve the 
                  right to modify these Terms at any time. Your continued use after changes constitutes acceptance 
                  of the new Terms.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. Services Description</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  VYNTOR Technologies provides technology consulting and development services including, but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>AI & Intelligent Automation development</li>
                  <li>Custom software development</li>
                  <li>Web and mobile application development</li>
                  <li>SaaS product development</li>
                  <li>Digital growth and marketing technology</li>
                  <li>Startup technology consulting</li>
                  <li>Hosting, maintenance, and technical support</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  Specific services, deliverables, timelines, and pricing are defined in separate Statements of Work 
                  (&quot;SOW&quot;), Master Services Agreements (&quot;MSA&quot;), or project proposals agreed upon by both parties.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. Engagement Terms</h2>
                <h3 className="text-xl font-semibold text-text-primary mb-2">3.1 Project Agreements</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Each engagement is governed by a written agreement (SOW, MSA, or proposal) that specifies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Scope of work and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Fees and payment terms</li>
                  <li>Acceptance criteria</li>
                  <li>Change request procedures</li>
                </ul>

                <h3 className="text-xl font-semibold text-text-primary mb-2">3.2 Payment Terms</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Unless otherwise specified in the agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Invoices are due within 30 days of receipt (Net 30)</li>
                  <li>Late payments may incur a 1.5% monthly interest charge</li>
                  <li>We accept wire transfer, ACH, and major credit cards</li>
                  <li>Expenses are billed at cost with receipts</li>
                </ul>

                <h3 className="text-xl font-semibold text-text-primary mb-2">3.3 Changes and Additional Work</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Changes to scope, timeline, or requirements must be documented in a written change order 
                  signed by both parties. Additional work will be billed at agreed rates or our standard rates.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.15}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Intellectual Property</h2>
                <h3 className="text-xl font-semibold text-text-primary mb-2">4.1 Ownership</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Upon full payment of all fees, all deliverables, work product, and intellectual property 
                  rights created specifically for you under an engagement (&quot;Work Product&quot;) are assigned to you.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">4.2 Background Technology</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We retain all rights to our pre-existing tools, frameworks, libraries, methodologies, and 
                  general know-how (&quot;Background Technology&quot;) used in delivering the Services. You receive a 
                  perpetual, non-exclusive, royalty-free license to use Background Technology incorporated 
                  into the Work Product for your internal business purposes.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">4.3 Third-Party Components</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Work Product may incorporate third-party open-source or commercial components. Ownership 
                  and licensing of these components remain with their respective owners and are subject to 
                  their license terms.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Confidentiality</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Both parties agree to maintain the confidentiality of all non-public information disclosed 
                  during the engagement (&quot;Confidential Information&quot;), including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Business plans, strategies, and financial information</li>
                  <li>Technical architectures, source code, and algorithms</li>
                  <li>Customer data and user information</li>
                  <li>Pricing, proposals, and contract terms</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Confidential Information excludes information that: (a) is publicly available through no 
                  fault of the receiving party; (b) was known prior to disclosure; (c) is independently 
                  developed; or (d) is rightfully received from a third party without restriction.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Confidentiality obligations survive for 3 years after the engagement ends, or longer for 
                  trade secrets.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.25}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">6. Warranties and Disclaimers</h2>
                <h3 className="text-xl font-semibold text-text-primary mb-2">6.1 Our Warranties</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We warrant that: (a) Services will be performed in a professional and workmanlike manner 
                  consistent with industry standards; (b) Work Product will materially conform to agreed 
                  specifications; (c) we have the right to grant the licenses in Section 4.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">6.2 Disclaimers</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  EXCEPT AS EXPRESSLY STATED, ALL SERVICES AND WORK PRODUCT ARE PROVIDED &quot;AS IS&quot; WITHOUT 
                  WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF 
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED 
                  OR ERROR-FREE OPERATION.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We do not warrant that our Services will meet all your requirements, achieve specific 
                  business outcomes, or be compatible with all third-party systems.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">6.3 AI and Experimental Features</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  AI-powered features, experimental functionality, and proof-of-concept deliverables are 
                  provided for evaluation purposes. They may produce inaccurate outputs, require human review, 
                  and are not suitable for high-risk decisions without additional validation.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">7. Limitation of Liability</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Neither party is liable for indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Our aggregate liability for any claim shall not exceed the total fees paid by you in the 12 months preceding the claim</li>
                  <li>These limitations apply regardless of the legal theory (contract, tort, strict liability, etc.)</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  Some jurisdictions do not allow limitation of certain damages, so some limitations may not apply to you.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.35}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">8. Indemnification</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You agree to indemnify, defend, and hold harmless VYNTOR Technologies and its officers, 
                  directors, employees, and contractors from any claims, damages, losses, liabilities, and 
                  expenses (including reasonable attorneys&apos; fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Your breach of these Terms or the engagement agreement</li>
                  <li>Your content, data, or materials provided to us</li>
                  <li>Your violation of applicable laws or third-party rights</li>
                  <li>Unauthorized use of the Services or Work Product</li>
                </ul>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">9. Term and Termination</h2>
                <h3 className="text-xl font-semibold text-text-primary mb-2">9.1 Term</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  These Terms commence on the effective date and continue until terminated by either party.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">9.2 Termination for Convenience</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Either party may terminate an engagement with 30 days&apos; written notice. You are responsible 
                  for all fees incurred through the termination date plus any non-cancelable commitments.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">9.3 Termination for Cause</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Either party may terminate immediately for material breach if the breaching party fails 
                  to cure the breach within 15 days of written notice.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">9.4 Effect of Termination</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Upon termination: (a) all licenses granted hereunder terminate; (b) you must pay all 
                  outstanding fees; (c) we will deliver all completed Work Product upon full payment; 
                  (d) Sections 4, 5, 6, 7, 8, 9.4, 10, 11, 12 survive termination.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.45}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">10. Force Majeure</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Neither party is liable for delays or failures caused by events beyond reasonable control, 
                  including natural disasters, pandemics, war, terrorism, government actions, labor disputes, 
                  internet infrastructure failures, or third-party service outages. The affected party will 
                  promptly notify the other and use reasonable efforts to resume performance.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">11. Governing Law and Dispute Resolution</h2>
                <h3 className="text-xl font-semibold text-text-primary mb-2">11.1 Governing Law</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  These Terms are governed by the laws of the State of California, USA, without regard to 
                  conflict of laws principles.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">11.2 Dispute Resolution</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Parties will first attempt to resolve disputes through good-faith negotiation. If unresolved 
                  within 30 days, either party may initiate binding arbitration in San Francisco, California, 
                  under JAMS rules. The prevailing party is entitled to reasonable attorneys&apos; fees and costs.
                </p>

                <h3 className="text-xl font-semibold text-text-primary mb-2">11.3 Injunctive Relief</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Notwithstanding the above, either party may seek injunctive relief in any court of competent 
                  jurisdiction to protect intellectual property or confidential information.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.55}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">12. General Provisions</h2>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li><strong>Entire Agreement:</strong> These Terms and the engagement agreement constitute the entire agreement</li>
                  <li><strong>Amendments:</strong> Must be in writing and signed by both parties</li>
                  <li><strong>Waiver:</strong> Failure to enforce any right is not a waiver</li>
                  <li><strong>Severability:</strong> Invalid provisions are severed; remaining provisions remain in effect</li>
                  <li><strong>Assignment:</strong> Neither party may assign without prior written consent, except to affiliates or in connection with a merger/acquisition</li>
                  <li><strong>Independent Contractors:</strong> We are independent contractors; no employment, partnership, or agency relationship is created</li>
                  <li><strong>Notices:</strong> Must be in writing via email or certified mail to the addresses in the agreement</li>
                </ul>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-border-light"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">13. Contact Information</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  For questions about these Terms, please contact us:
                </p>
                <address className="not-italic text-text-secondary leading-relaxed">
                  <p>VYNTOR Technologies</p>
                  <p>123 Innovation Drive</p>
                  <p>San Francisco, CA 94105, USA</p>
                  <p>Email: <a href="mailto:legal@vyntor.com" className="text-primary-600 hover:underline">legal@vyntor.com</a></p>
                  <p>Phone: +1 (555) 123-4567</p>
                </address>
              </motion.div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}