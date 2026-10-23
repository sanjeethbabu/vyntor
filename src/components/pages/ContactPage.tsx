'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Container, Grid } from '@/components/ui/Layout';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Animations';
import { cn } from '@/lib/utils';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const services = [
    'AI & Intelligent Automation',
    'Custom Software Development',
    'Web Development',
    'Mobile App Development',
    'SaaS Product Development',
    'Migration',
    'Hosting, Maintenance & Support',
    'Not sure yet',
  ];

  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-20 lg:pt-28 pb-12 lg:pb-16" aria-labelledby="contact-hero-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 id="contact-hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-6">
              Let&apos;s Start a{' '}
              <span className="text-primary-600">Conversation</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              Have a project in mind? Need technical guidance? Just want to say hello? 
              We&apos;d love to hear from you. Fill out the form or reach out directly — we typically respond within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="contact-form-heading">
        <Container size="xl">
          <Grid columns={1} gap="lg" className="lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Reveal threshold={0.1}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div>
                    <h2 id="contact-form-heading" className="text-3xl font-extrabold text-text-primary mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-text-secondary">
                      Tell us about your project, goals, and timeline. The more detail you share, the better we can prepare for our conversation.
                    </p>
                  </div>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-4"
                      role="alert"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                        <p className="text-green-700 mt-1">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-4"
                      role="alert"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-red-800">Something Went Wrong</p>
                        <p className="text-red-700 mt-1">Please try again or email us directly at hello@vastverse.com</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                          Full Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          error={errors.name}
                          disabled={status === 'submitting'}
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                          Email Address <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          error={errors.email}
                          disabled={status === 'submitting'}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                        Company / Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border bg-white text-text-primary',
                          'placeholder:text-text-tertiary',
                          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                          'disabled:opacity-50 disabled:cursor-not-allowed',
                          'transition-colors',
                          errors.service ? 'border-red-300' : 'border-border-medium hover:border-border-dark'
                        )}
                        disabled={status === 'submitting'}
                      >
                        <option value="">Select a service (optional)</option>
                        {services.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                        Project Details <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your project, goals, timeline, budget range, and any specific requirements..."
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border bg-white text-text-primary resize-y min-h-[120px]',
                          'placeholder:text-text-tertiary',
                          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                          'disabled:opacity-50 disabled:cursor-not-allowed',
                          'transition-colors',
                          errors.message ? 'border-red-300' : 'border-border-medium hover:border-border-dark'
                        )}
                        disabled={status === 'submitting'}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.message}</p>
                      )}
                      <p id="message-hint" className="mt-1.5 text-sm text-text-tertiary">
                        Minimum 20 characters. Include timeline, budget range, and key requirements for a more accurate response.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </Reveal>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Reveal threshold={0.1} delay={0.1}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-3 gap-6"
                >
                  <Card variant="default" padding="lg" className="text-center h-full">
                    <CardContent>
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                        <Mail className="w-7 h-7" />
                      </div>
                      <CardTitle className="mb-2">Email Us</CardTitle>
                      <CardDescription className="mb-4">Best for detailed inquiries</CardDescription>
                      <a
                        href="mailto:hello@vastverse.com"
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                      >
                        hello@vastverse.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card variant="default" padding="lg" className="text-center h-full">
                    <CardContent>
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                        <Phone className="w-7 h-7" />
                      </div>
                      <CardTitle className="mb-2">Call Us</CardTitle>
                      <CardDescription className="mb-4">Mon-Fri, 9am-6pm EST</CardDescription>
                      <a
                        href="tel:+15551234567"
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </CardContent>
                  </Card>

                  <Card variant="default" padding="lg" className="text-center h-full">
                    <CardContent>
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <CardTitle className="mb-2">Visit Us</CardTitle>
                      <CardDescription className="mb-4">By appointment only</CardDescription>
                      <address className="not-italic text-primary-600 hover:text-primary-700 font-medium transition-colors">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105
                      </address>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>

              <Reveal threshold={0.1} delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-background-secondary rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-text-primary mb-4">What Happens Next?</h3>
                  <ol className="space-y-4 text-text-secondary">
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center" aria-hidden="true">1</span>
                      <div>
                        <p className="font-medium text-text-primary">We Review</p>
                        <p className="text-sm">Our team reviews your inquiry within 4 business hours.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center" aria-hidden="true">2</span>
                      <div>
                        <p className="font-medium text-text-primary">We Connect</p>
                        <p className="text-sm">We&apos;ll email you to schedule a 30-minute discovery call at your convenience.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center" aria-hidden="true">3</span>
                      <div>
                        <p className="font-medium text-text-primary">We Explore</p>
                        <p className="text-sm">On the call, we discuss your goals, challenges, and outline potential approaches.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center" aria-hidden="true">4</span>
                      <div>
                        <p className="font-medium text-text-primary">We Propose</p>
                        <p className="text-sm">You receive a tailored proposal with scope, timeline, and investment — no obligation.</p>
                      </div>
                    </li>
                  </ol>
                </motion.div>
              </Reveal>
            </div>
          </Grid>
        </Container>
      </section>

      <section className="bg-background-secondary py-12 lg:py-16" aria-labelledby="faq-heading">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary">
              Quick answers to common questions. Can&apos;t find yours? <a href="#contact-form-heading" className="text-primary-600 hover:underline font-medium">Just ask us</a>.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What is your typical response time?',
                a: 'We respond to all inquiries within 24 business hours. For urgent matters, please call us directly at +1 (555) 123-4567.'
              },
              {
                q: 'Do you sign NDAs before initial discussions?',
                a: 'Yes, we\'re happy to sign a mutual NDA before any detailed project discussion. Just let us know in your message.'
              },
              {
                q: 'What is your minimum project size?',
                a: 'We typically engage on projects starting at $25K USD. For smaller needs, we may recommend our starter packages or refer you to trusted partners.'
              },
              {
                q: 'Do you work with startups?',
                a: 'Absolutely. We help early-stage companies with technical planning, MVP development, and architecture, with flexible engagement models.'
              },
              {
                q: 'Can you work with our existing team?',
                a: 'Yes, we offer staff augmentation and dedicated team models where our engineers integrate directly with your in-house team.'
              },
            ].map((faq, index) => (
              <Reveal key={index} threshold={0.1} delay={index * 0.05}>
                <details className="group bg-white rounded-2xl border border-border-light">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset">
                    <span className="font-medium text-text-primary pr-4">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: 0 }}
                      className="text-text-tertiary flex-shrink-0"
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                    </motion.span>
                  </summary>
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}



