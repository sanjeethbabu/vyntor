'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight,
  Brain,
  Briefcase,
  ChevronDown, 
  Code,
  Cloud,
  Factory,
  Globe,
  GraduationCap,
  LandPlot,
  Layers,
  Rocket,
  ShoppingBag,
  Shield,
  Smartphone,
  Target,
  Truck,
  Zap,
  BarChart2
} from 'lucide-react';
import { useState } from 'react';
import { Container, Flex, Grid } from '@/components/ui/Layout';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Animations';

interface IndustryDetailPageProps {
  industry: {
    name: string;
    description: string;
    longDescription: string;
    icon: string;
    color: string;
    services: string[];
    challenges: string[];
    solutions: string[];
    caseStudies: { title: string; description: string; outcome: string }[];
  };
}

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  ShoppingBag,
  Factory,
  Briefcase,
  GraduationCap,
  Truck,
  LandPlot,
  BarChart2,
};

export function IndustryDetailPage({ industry }: IndustryDetailPageProps) {
  const [openChallenge, setOpenChallenge] = useState<string | null>(null);

  const IconComponent = industryIcons[industry.icon];

  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="industry-title">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-600 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Industries
            </Link>
            
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <IconComponent className="w-4 h-4" aria-hidden="true" />
              {industry.name}
            </span>
            
            <h1 id="industry-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              {industry.name}
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl">
              {industry.longDescription}
            </p>
            
            <Flex gap="md" className="flex-wrap">
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Request Industry Case Studies</Link>
              </Button>
            </Flex>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="challenges-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 id="challenges-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Industry Challenges We Solve
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Every industry has unique pain points. Here are the most common challenges we help {industry.name.toLowerCase()} organizations overcome.
            </p>

            <div className="space-y-4">
              {industry.challenges.map((challenge, index) => (
                <Reveal key={challenge} threshold={0.1} delay={index * 0.05}>
                  <motion.button
                    onClick={() => setOpenChallenge(openChallenge === challenge ? null : challenge)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-white rounded-2xl border border-border-light hover:border-primary-200 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    aria-expanded={openChallenge === challenge}
                    aria-controls={`challenge-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Target className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-text-primary pr-4">{challenge}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: openChallenge === challenge ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-text-tertiary flex-shrink-0"
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </motion.button>
                </Reveal>
              ))}
            </div>

            <AnimatePresence>
              {openChallenge && (
                <motion.div
                  key={openChallenge}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 p-6 bg-background-secondary rounded-2xl border border-border-light"
                >
                  <h3 className="font-semibold text-text-primary mb-3">Our Approach to: {openChallenge}</h3>
                  <p className="text-text-secondary">
                    We address this through a combination of {industry.solutions.slice(0, 3).join(', ')}, and other tailored approaches. 
                    <Link href="/contact" className="text-primary-600 hover:underline font-medium ml-1">
                      Let&apos;s discuss your specific situation.
                    </Link>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="solutions-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 id="solutions-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Our Solutions for {industry.name}
            </h2>
            <p className="text-lg text-text-secondary">
              Tailored capabilities designed for the {industry.name.toLowerCase()} sector.
            </p>
          </div>

          <Grid columns={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
            {industry.solutions.map((solution, index) => (
              <Reveal key={solution} threshold={0.1} delay={index * 0.05}>
                <Card variant="default" padding="lg" className="h-full group">
                  <CardContent>
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors" aria-hidden="true">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{solution}</h3>
                    <p className="text-text-secondary text-sm">
                      Customized for {industry.name.toLowerCase()} workflows and requirements.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="case-studies-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 id="case-studies-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Selected Work in {industry.name}
            </h2>
            <p className="text-lg text-text-secondary">
              Demonstration projects showcasing our capabilities in your sector. Real client work is confidential and shared under NDA.
            </p>
          </div>

          <Grid columns={1} gap="lg" className="md:grid-cols-2">
            {industry.caseStudies.map((study, index) => (
              <Reveal key={study.title} threshold={0.1} delay={index * 0.1}>
                <Card variant="outlined" padding="lg" className="h-full">
                  <CardContent>
                    <Flex align="center" justify="between" className="mb-3">
                      <Badge variant="secondary">{industry.name}</Badge>
                      <Badge variant="outline" className="text-primary-600 border-primary-200 bg-primary-50">
                        {study.outcome}
                      </Badge>
                    </Flex>
                    <CardTitle className="mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{study.description}</CardDescription>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 group"
                    >
                      Discuss Similar Project
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
              </Reveal>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="services-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Relevant Services for {industry.name}
            </h2>
            <p className="text-lg text-text-secondary">
              Our service categories that most commonly apply to {industry.name.toLowerCase()} engagements.
            </p>
          </div>

          <Grid columns={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'AI & Intelligent Automation', href: '/services/ai-intelligent-automation', icon: Brain },
              { title: 'Custom Software Development', href: '/services/custom-software-development', icon: Code },
              { title: 'Web Development', href: '/services/web-development', icon: Globe },
              { title: 'Mobile App Development', href: '/services/mobile-app-development', icon: Smartphone },
              { title: 'SaaS Product Development', href: '/services/saas-product-development', icon: Layers },
              { title: 'Migration', href: '/services/migration', icon: Cloud },
              { title: 'Hosting & Support', href: '/services/hosting-maintenance-support', icon: Shield },
            ].map((svc, index) => (
              <Reveal key={svc.title} threshold={0.1} delay={index * 0.05}>
                <Link
                  href={svc.href}
                  className="block p-6 bg-white rounded-2xl border border-border-light hover:border-primary-200 hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors" aria-hidden="true">
                    <svc.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-text-primary">{svc.title}</h3>
                </Link>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="cta-heading">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 p-1 text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
              <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                Let&apos;s Solve Your {industry.name} Challenges
              </h2>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
                We understand the unique pressures of your industry. Let&apos;s discuss how our technical expertise can drive measurable outcomes for your organization.
              </p>
              <Flex gap="md" className="justify-center flex-wrap">
                <Button variant="secondary" size="xl" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="ghost" size="xl" className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50" asChild>
                  <Link href="/services" className="flex items-center gap-2">
                    View All Services
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
              </Flex>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}