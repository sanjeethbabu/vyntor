'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Boxes, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout';

const capabilities = [
  { icon: Sparkles, label: 'Applied AI' },
  { icon: Code2, label: 'Custom software' },
  { icon: Boxes, label: 'Digital products' },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="home-hero relative isolate flex items-center overflow-hidden bg-secondary-950 text-white">
      <motion.div
        className="home-hero__image"
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: 'easeOut' }}
      >
        <Image
          src="/homepic.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <Container size="xl" className="relative z-10 w-full py-14 sm:py-20 lg:py-24">
        <div className="max-w-[48rem]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75"
          >
            <span className="h-px w-8 bg-primary-400" />
            vastverse
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="max-w-[13ch] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.4rem]"
          >
            Your next big idea,
            <span className="home-hero__headline-accent block">built to go further.</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.18 }}
            className="mt-6 max-w-[38rem] text-base leading-relaxed text-white/75 sm:text-lg"
          >
            We bring practical AI, cloud, and modern software together to solve real business challenges.
            From first sketch to launch and beyond, we build digital products around your goals—and ready for what comes next.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href="/contact" className="gap-2">
                Let&apos;s build something
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              Explore what we do
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.ul
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-5"
            aria-label="vastverse capabilities"
          >
            {capabilities.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm text-white/70">
                <Icon className="h-4 w-4 text-primary-300" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.65 }}
        className="home-hero__callout absolute bottom-8 right-6 z-10 hidden items-center gap-3 rounded-2xl border border-white/15 bg-secondary-950/55 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:flex lg:bottom-12 lg:right-[max(3rem,calc((100vw-80rem)/2))]"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500/20 text-primary-200">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <span>
          <strong className="block text-sm font-medium">Built around your business</strong>
          <span className="mt-0.5 block text-xs text-white/60">Thoughtful tech. Lasting impact.</span>
        </span>
        <ArrowUpRight className="ml-3 h-4 w-4 text-white/50" aria-hidden="true" />
      </motion.div>
    </section>
  );
}



