'use client';

import { motion } from 'framer-motion';
import { Brain, Layers, Target, GitBranch, BarChart3, Shield, Zap, Code2 } from 'lucide-react';
import { Container, Flex } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Animations';

const expertiseItems = [
  {
    icon: Brain,
    title: 'AI-First Thinking',
    description: 'We integrate artificial intelligence as a core capability, not an afterthought. From custom ML models to AI agents and generative applications, we build intelligence into every layer of your product.',
  },
  {
    icon: Layers,
    title: 'Custom-Built Solutions',
    description: 'No templates, no compromise. Every solution is architected from the ground up to match your unique business requirements, workflows, and growth trajectory.',
  },
  {
    icon: Target,
    title: 'Business-Focused Engineering',
    description: 'We measure success by your business outcomes, not lines of code. Our engineering decisions are driven by ROI, user impact, and long-term value creation.',
  },
  {
    icon: GitBranch,
    title: 'Scalable Architecture',
    description: 'Built to grow. We design systems that scale horizontally and vertically, handling traffic spikes, data growth, and feature expansion without rewrites.',
  },
];

export function Expertise() {
  return (
    <section className="bg-background-secondary" aria-labelledby="expertise-heading">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            id="expertise-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight"
          >
            Core Capabilities That Drive Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-text-secondary leading-relaxed"
          >
            Four pillars that define how we approach every engagement — ensuring your technology investments deliver measurable business value.
          </motion.p>
        </div>

        <div className="expertise-cards">
          {expertiseItems.map((item, index) => (
            <Reveal key={item.title} threshold={0.1} delay={index * 0.1}>
              <article className="expertise-card">
                <motion.div
                  className="expertise-card__icon"
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  aria-hidden="true"
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="expertise-card__title">
                    {item.title}
                </h3>
                <p className="expertise-card__description">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Flex gap="lg" className="mt-16 flex-wrap justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-border-light"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-800" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-text-primary text-sm">Rapid Prototyping</p>
              <p className="text-xs text-text-tertiary">Validate ideas early</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-border-light"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-800" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-text-primary text-sm">Security First</p>
              <p className="text-xs text-text-tertiary">Security by design</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-border-light"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-800" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-text-primary text-sm">Data-Driven</p>
              <p className="text-xs text-text-tertiary">Clear success measures</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-border-light"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-800" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-text-primary text-sm">Clean Code</p>
              <p className="text-xs text-text-tertiary">Maintainable & documented</p>
            </div>
          </motion.div>
        </Flex>
      </Container>
    </section>
  );
}