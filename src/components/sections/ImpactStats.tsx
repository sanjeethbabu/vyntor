'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Layout';

const impactStats = [
  { value: 9, suffix: '+', label: 'Digital Solutions Delivered' },
  { value: 99.6, suffix: '%', label: 'On-Time Delivery' },
  { value: 10, suffix: '+', label: 'Engineers & Designers' },
];

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const formattedCount = useTransform(count, (latest) => {
    const formatted = Number.isInteger(value)
      ? Math.floor(latest).toString().padStart(2, '0')
      : latest.toFixed(1);
    return `${formatted}${suffix}`;
  });
  const accessibleValue = `${Number.isInteger(value) ? value.toString().padStart(2, '0') : value}${suffix}`;

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 1.8,
      ease: 'easeOut',
    });
    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <dd ref={ref} className="home-stats__value" aria-label={accessibleValue}>
      <span className="sr-only">{accessibleValue}</span>
      <motion.span aria-hidden="true">{formattedCount}</motion.span>
    </dd>
  );
}

export function ImpactStats() {
  return (
    <section className="home-stats" aria-label="VYNTOR impact at a glance">
      <Container size="xl">
        <dl className="home-stats__grid">
          {impactStats.map(({ value, suffix, label }) => (
            <div className="home-stats__card" key={label}>
              <dt className="home-stats__label">{label}</dt>
              <AnimatedStat value={value} suffix={suffix} />
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
