'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Globe, 
  Smartphone, 
  Layers, 
  Cloud,
  ArrowRight
} from 'lucide-react';
import { Container, Grid } from '@/components/ui/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Animations';

const services = [
  {
    id: 'ai-intelligent-automation',
    icon: Brain,
    title: 'AI & Intelligent Automation',
    description: 'Custom AI solutions, intelligent agents, business process automation, and generative AI applications that transform operations and unlock new capabilities.',
    features: ['AI Solution Development', 'AI Agent Development', 'Process Automation', 'Generative AI Apps'],
    href: '/services/ai-intelligent-automation',
  },
  {
    id: 'custom-software-development',
    icon: Code,
    title: 'Custom Software Development',
    description: 'Bespoke business applications, internal tools, portals, legacy modernization, and database-driven systems tailored to your exact requirements.',
    features: ['Business Applications', 'Internal Portals', 'Legacy Modernization', 'API Integration'],
    href: '/services/custom-software-development',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    description: 'Modern web applications, corporate websites, e-commerce platforms, and React/Next.js development with focus on performance, SEO, and user experience.',
    features: ['Web Applications', 'Corporate Websites', 'E-commerce', 'React/Next.js'],
    href: '/services/web-development',
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS, Android, and cross-platform apps using Flutter and React Native. From concept to App Store deployment and ongoing maintenance.',
    features: ['iOS & Android', 'Flutter & React Native', 'Enterprise Apps', 'App Store Deployment'],
    href: '/services/mobile-app-development',
  },
  {
    id: 'saas-product-development',
    icon: Layers,
    title: 'SaaS Product Development',
    description: 'End-to-end SaaS development including multi-tenant architecture, subscription billing, admin portals, and AI-powered product features.',
    features: ['Multi-Tenant Architecture', 'Subscription Billing', 'Admin Portals', 'AI-Powered Features'],
    href: '/services/saas-product-development',
  },
  {
    id: 'migration',
    icon: Cloud,
    title: 'Migration',
    description: 'Move applications, data, and infrastructure to modern platforms with a clear plan, secure transfer, and carefully managed cutover.',
    features: ['Cloud Migration', 'Legacy Applications', 'Database & Data Migration', 'Cutover & Validation'],
    href: '/services/migration',
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-white" aria-labelledby="services-heading">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight"
          >
            Comprehensive Technology Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-text-secondary leading-relaxed"
          >
            Six core service categories designed to support your digital transformation journey — from initial concept to ongoing growth and optimization.
          </motion.p>
        </div>

        <Grid columns={2} gap="lg" className="lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} threshold={0.1} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card variant="interactive" padding="lg" className="h-full group">
                  <CardHeader>
                    <div className={cn(
                      'w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300',
                      'bg-neutral-100 text-primary-800 group-hover:bg-primary-800 group-hover:text-white'
                    )} aria-hidden="true">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-primary-800 hover:text-primary-600"
                    >
                      View Details
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </Grid>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary mb-4">
              Need help keeping your software reliable after launch? We also offer ongoing support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services/hosting-maintenance-support"
                className="px-4 py-2 rounded-xl bg-neutral-100 text-text-secondary hover:bg-primary-100 hover:text-primary-700 text-sm font-medium transition-colors"
              >
                Hosting, Maintenance & Support
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}