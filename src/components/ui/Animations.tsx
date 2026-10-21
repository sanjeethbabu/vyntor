'use client';

import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  className,
  ...props
}: FadeInProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={directions[direction]}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export function StaggerItem({ children, delay = 0, className, ...props }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  lift?: number;
  scale?: number;
}

export function HoverLift({ children, lift = 8, scale = 1.02, className, ...props }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -lift, scale, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface FloatingProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
}

export function Floating({ children, amplitude = 10, duration = 3, className, ...props }: FloatingProps) {
  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface PulseProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  scale?: number;
  duration?: number;
}

export function Pulse({ children, scale = 1.05, duration = 2, className, ...props }: PulseProps) {
  return (
    <motion.div
      animate={{ scale: [1, scale, 1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  duration?: number;
}

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  className,
  ...props
}: SlideInProps) {
  const directions = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  return (
    <motion.div
      initial={directions[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export function Reveal({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: rootMargin, amount: threshold }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ReducedMotionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={false}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}