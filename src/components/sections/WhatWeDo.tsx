'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Search,
  ShoppingCart,
  Smartphone,
  Code2,
  Layers,
  Users,
  Palette,
  Database,
  BarChart2,
} from 'lucide-react';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Animations';

const services = [
  { icon: Globe, title: 'Website Development' },
  { icon: Search, title: 'SEO' },
  { icon: ShoppingCart, title: 'Ecommerce Development' },
  { icon: Smartphone, title: 'Mobile App Development' },
  { icon: Code2, title: 'Software Development' },
  { icon: BarChart2, title: 'Search Engine Optimization' },
  { icon: Layers, title: 'Customized Software' },
  { icon: Users, title: 'Social Media Management' },
  { icon: Palette, title: 'Graphic Designing' },
  { icon: Database, title: 'ERP Development' },
];

export function WhatWeDo() {
  return (
    <section className="bg-white" aria-labelledby="what-we-do-heading">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            id="what-we-do-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary leading-tight"
          >
            Services That Drive Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-text-secondary leading-relaxed"
          >
            End-to-end digital solutions — from strategy and design to development, marketing, and ongoing optimization.
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} threshold={0.1} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgb(0 0 0 / 0.12)' }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="service-card"
              >
                <div className="service-card__icon" aria-hidden="true">
                  <service.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-700 text-white font-medium text-sm hover:bg-primary-800 transition-colors"
          >
            View All Services
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </motion.a>
        </div>
      </Container>
    </section>
  );
}