'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container, Flex } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="bg-background-secondary" aria-labelledby="cta-heading">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-card relative overflow-hidden p-6 text-center sm:p-8 lg:p-10"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Let&apos;s Build Together
            </motion.span>
            
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-primary leading-tight mb-4"
            >
              Have an Idea Worth Building?{' '}
              <span className="text-text-secondary">Let&apos;s Make It Happen.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto"
            >
              From your first concept to a scalable digital product, vastverse helps you plan, build, and improve your next solution. 
              No pressure, no sales pitch — just an honest conversation about what&apos;s possible.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Flex gap="sm" className="justify-center flex-wrap">
                <Button size="lg" asChild className="group">
                  <a href="/contact" className="flex items-center gap-2">
                    Discuss Your Project
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </motion.span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact" className="flex items-center gap-2">
                    Contact Our Team
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
              </Flex>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-text-tertiary"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-800" aria-hidden="true" />
                <span>Start with a conversation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-800" aria-hidden="true" />
                <span>NDA available on request</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-800" aria-hidden="true" />
                <span>Clear next steps</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


