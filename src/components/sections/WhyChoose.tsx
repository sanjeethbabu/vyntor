'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  Users,
  Shield,
  RefreshCw,
  Code2,
  X,
} from 'lucide-react';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Animations';

const reasons = [
  {
    icon: Target,
    title: 'Solutions Tailored to Your Business',
    description: 'We don\'t believe in one-size-fits-all. Every architecture decision, technology choice, and feature implementation is driven by your specific business requirements and goals.',
    number: '01',
  },
  {
    icon: Brain,
    title: 'AI Integrated Where It Delivers Value',
    description: 'Artificial intelligence isn\'t a buzzword for us — it\'s a tool. We identify genuine use cases where AI creates measurable impact: automation, insights, personalization, and efficiency gains.',
    number: '02',
  },
  {
    icon: Code2,
    title: 'Clean, Maintainable, Scalable Engineering',
    description: 'Code quality isn\'t optional. We follow established patterns, write comprehensive tests, document thoroughly, and architect for change — so your investment compounds over time.',
    number: '03',
  },
  {
    icon: Users,
    title: 'Transparent Communication & Milestones',
    description: 'No black boxes. You\'ll have clear visibility into progress through regular demos, detailed documentation, and milestone-based delivery with no surprises.',
    number: '04',
  },
  {
    icon: Shield,
    title: 'Performance, Security & Reliability Built In',
    description: 'These aren\'t afterthoughts. From day one, we implement observability, security best practices, performance budgets, and disaster recovery planning.',
    number: '05',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Support & Continuous Improvement',
    description: 'Launch is just the beginning. We provide structured maintenance, feature enhancement, performance monitoring, and strategic guidance as your business evolves.',
    number: '06',
  },
];

export function WhyChooseVyntor({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const [selectedReason, setSelectedReason] = useState<(typeof reasons)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const Heading = headingLevel;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedReason && !dialog.open) {
      dialog.showModal();
    } else if (!selectedReason && dialog.open) {
      dialog.close();
    }
  }, [selectedReason]);

  return (
    <section className="why-us-section" aria-labelledby="why-choose-heading">
      <Container size="xl">
        <div className="why-us-section__intro">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Why Us
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading id="why-choose-heading" className="text-3xl sm:text-4xl font-semibold leading-tight text-text-primary">
              Why Choose VYNTOR?
            </Heading>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            We&apos;re a technology partner invested in your long-term success. Here&apos;s what sets our approach apart.
          </motion.p>
        </div>

        <div className="why-reasons">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} threshold={0.1} delay={index * 0.08}>
              <button
                type="button"
                className="why-reason"
                aria-haspopup="dialog"
                aria-label={`${reason.number}: ${reason.title}. Open details`}
                onClick={() => setSelectedReason(reason)}
              >
                <span className="why-reason__icon" aria-hidden="true">
                  <reason.icon className="h-5 w-5" />
                </span>
                <span className="why-reason__title">
                  {reason.title}
                </span>
                <span className="why-reason__description">
                  {reason.description}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <dialog
          ref={dialogRef}
          className="why-dialog"
          aria-labelledby="why-dialog-title"
          onClose={() => setSelectedReason(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault();
              event.currentTarget.close();
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
        >
          {selectedReason && (
            <div className="why-dialog__content">
              <div className="why-dialog__topline">
                <span className="why-dialog__number">{selectedReason.number} / 06</span>
                <button
                  type="button"
                  className="why-dialog__close"
                  aria-label="Close details"
                  onClick={() => dialogRef.current?.close()}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <span className="why-dialog__icon" aria-hidden="true">
                <selectedReason.icon className="h-6 w-6" />
              </span>
              <h3 id="why-dialog-title" className="why-dialog__title">{selectedReason.title}</h3>
              <p className="why-dialog__description">{selectedReason.description}</p>
            </div>
          )}
        </dialog>
      </Container>
    </section>
  );
}