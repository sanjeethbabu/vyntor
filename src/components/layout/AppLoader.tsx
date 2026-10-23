'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const LOADER_DURATION = 2500;
const EXIT_DURATION = 0.35;

export function AppLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hideDelay = reduceMotion ? LOADER_DURATION : LOADER_DURATION - EXIT_DURATION * 1000;
    const timeoutId = window.setTimeout(() => setIsVisible(false), hideDelay);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : EXIT_DURATION, ease: 'easeOut' }}
          role="status"
          aria-label="Loading vastverse"
        >
          <div className="app-loader__content">
            <motion.div
              className="app-loader__logo"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
            >
              <span className="app-loader__wordmark">vastverse</span>
            </motion.div>
            <div className="app-loader__track" aria-hidden="true">
              <span className="app-loader__progress" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



