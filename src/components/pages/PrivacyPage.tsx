'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Animations';

const lastUpdated = 'January 15, 2024';
const effectiveDate = 'January 15, 2024';

export function PrivacyPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="privacy-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 id="privacy-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Introduction</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  VYNTOR Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website vyntor.com (the &quot;Site&quot;) or use our services.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Please read this policy carefully. By accessing or using our Site, you agree to the 
                  collection and use of information in accordance with this policy. If you do not agree 
                  with our policies and practices, please do not use our Site.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-text-primary mb-2">2.1 Personal Information</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may collect personally identifiable information that you voluntarily provide to us when 
                  you fill out forms on our Site, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company/organization name</li>
                  <li>Project details and requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-text-primary mb-2">2.2 Automatic Data Collection</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  When you visit our Site, we automatically collect certain information about your device and usage:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>IP address and geolocation (country/city level)</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Device identifiers</li>
                </ul>

                <h3 className="text-xl font-semibold text-text-primary mb-2">2.3 Cookies and Tracking Technologies</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use cookies, web beacons, and similar tracking technologies to track activity on our Site 
                  and hold certain information. See our <a href="/cookies" className="text-primary-600 hover:underline">Cookie Policy</a> for details.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. How We Use Your Information</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you information about our services, updates, and promotions (with your consent)</li>
                  <li>To improve our Site, services, and user experience</li>
                  <li>To analyze usage trends and administer the Site</li>
                  <li>To detect, prevent, and address technical issues and fraud</li>
                  <li>To comply with legal obligations</li>
                  <li>To enforce our Terms & Conditions</li>
                </ul>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.15}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (hosting, analytics, email delivery, CRM)</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our users or the public</li>
                  <li><strong>With Consent:</strong> When you give us explicit permission to share your information</li>
                </ul>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Data Security</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security assessments and vulnerability scanning</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. 
                  While we strive to use commercially acceptable means to protect your information, we cannot 
                  guarantee its absolute security.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.25}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">6. Your Rights</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
                  <li><strong>Restriction:</strong> Request limitation of processing</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, commonly used format</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  To exercise these rights, please contact us at <a href="mailto:privacy@vyntor.com" className="text-primary-600 hover:underline">privacy@vyntor.com</a>. 
                  We will respond within 30 days as required by applicable law.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">7. Data Retention</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required or permitted by law.
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Contact form submissions: 3 years after last contact</li>
                  <li>Newsletter subscriptions: Until you unsubscribe</li>
                  <li>Analytics data: 26 months (Google Analytics default)</li>
                  <li>Legal/compliance records: As required by applicable law</li>
                </ul>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.35}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">8. International Data Transfers</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Our operations are based in the United States. If you are accessing our Site from outside the U.S., 
                  please be aware that your information may be transferred to, stored, and processed in the U.S. 
                  where our servers are located and our central database operates.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We ensure appropriate safeguards are in place for international transfers, including Standard 
                  Contractual Clauses where required.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Our Site is not directed to children under 16. We do not knowingly collect personal information 
                  from children under 16. If you are a parent or guardian and believe your child has provided us 
                  with personal information, please contact us at <a href="mailto:privacy@vyntor.com" className="text-primary-600 hover:underline">privacy@vyntor.com</a>.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.45}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">10. Third-Party Links</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Our Site may contain links to third-party websites, services, or applications. We are not responsible 
                  for the privacy practices or content of these third parties. We encourage you to review their 
                  privacy policies before providing any information.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">11. Changes to This Policy</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page and updating the &quot;Last Updated&quot; date at the top.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  For material changes, we will provide a more prominent notice (such as a banner on our Site 
                  or email notification) prior to the change taking effect.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.55}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">12. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <address className="not-italic text-text-secondary leading-relaxed">
                  <p>VYNTOR Technologies</p>
                  <p>123 Innovation Drive</p>
                  <p>San Francisco, CA 94105, USA</p>
                  <p>Email: <a href="mailto:privacy@vyntor.com" className="text-primary-600 hover:underline">privacy@vyntor.com</a></p>
                  <p>Phone: +1 (555) 123-4567</p>
                </address>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-border-light"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">13. California Privacy Rights (CCPA/CPRA)</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA) 
                  as amended by the California Privacy Rights Act (CPRA):
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Right to know what personal information is collected, used, shared, or sold</li>
                  <li>Right to delete personal information (with exceptions)</li>
                  <li>Right to opt-out of the sale or sharing of personal information</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                  <li>Right to correct inaccurate personal information</li>
                  <li>Right to limit use and disclosure of sensitive personal information</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  We do not sell personal information as defined by the CCPA/CPRA. To exercise your rights, 
                  submit a request via email to <a href="mailto:privacy@vyntor.com" className="text-primary-600 hover:underline">privacy@vyntor.com</a> or call +1 (555) 123-4567.
                </p>
              </motion.div>
            </Reveal>

            <Reveal threshold={0.1} delay={0.65}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-border-light"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">14. European Economic Area (GDPR)</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you are located in the EEA, you have the following rights under the General Data 
                  Protection Regulation (GDPR):
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed mb-6">
                  <li>Lawful basis for processing: We process data based on consent, contract performance, legitimate interests, or legal obligations</li>
                  <li>Right to lodge a complaint with a supervisory authority</li>
                  <li>Data Protection Officer: Contact <a href="mailto:dpo@vyntor.com" className="text-primary-600 hover:underline">dpo@vyntor.com</a></li>
                </ul>
              </motion.div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}