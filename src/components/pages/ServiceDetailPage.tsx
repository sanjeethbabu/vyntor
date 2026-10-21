'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle, 
  ChevronDown, 
  Code, 
  Cloud, 
  Smartphone,
  Server,
  Zap,
  Brain,
  Globe,
  Layers,
  Lightbulb,
  TrendingUp,
  Target
} from 'lucide-react';
import { useState } from 'react';
import { Container, Flex, Grid } from '@/components/ui/Layout';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Animations';

interface ServiceDetailPageProps {
  service: {
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    color: string;
    features: string[];
    technologies: string[];
    useCases: { title: string; description: string; industry: string }[];
    faqs: { question: string; answer: string }[];
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Cloud,
  Code,
  Globe,
  Smartphone,
  Layers,
  TrendingUp,
  Lightbulb,
  Server,
  Zap,
  Target,
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const IconComponent = iconMap[service.icon];

  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="service-title">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-600 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Services
            </Link>
            
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <IconComponent className="w-4 h-4" aria-hidden="true" />
              {service.title}
            </span>
            
            <h1 id="service-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              {service.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl">
              {service.longDescription}
            </p>
            
            <Flex gap="md" className="flex-wrap">
              <Button size="lg" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </Flex>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="capabilities-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              What We Deliver
            </h2>
            <p className="text-lg text-text-secondary">
              Comprehensive capabilities tailored to your requirements. Each engagement is customized — this is our core toolkit.
            </p>
          </div>

          <Grid columns={1} gap="lg" className="md:grid-cols-2">
            {service.features.map((feature, index) => (
              <Reveal key={feature} threshold={0.1} delay={index * 0.05}>
                <motion.div
                  className="flex items-start gap-4 p-6 bg-background-secondary rounded-2xl hover:bg-primary-50 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors" aria-hidden="true">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{feature}</h3>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="tech-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 id="tech-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-text-secondary">
              We choose the right tool for the job. Our stack decisions are driven by your requirements, team skills, and long-term maintainability.
            </p>
          </div>

          <Flex gap="sm" className="flex-wrap justify-center">
            {service.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </Flex>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="use-cases-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 id="use-cases-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Example Use Cases
            </h2>
            <p className="text-lg text-text-secondary">
              Real-world scenarios where we&apos;ve delivered impact. Every project is unique — these illustrate the breadth of what&apos;s possible.
            </p>
          </div>

          <Grid columns={1} gap="lg" className="md:grid-cols-2">
            {service.useCases.map((useCase, index) => (
              <Reveal key={useCase.title} threshold={0.1} delay={index * 0.1}>
                <Card variant="outlined" padding="lg" className="h-full">
                  <CardContent>
                    <Badge variant="secondary" className="mb-3 inline-block">
                      {useCase.industry}
                    </Badge>
                    <CardTitle className="mb-2">{useCase.title}</CardTitle>
                    <CardDescription className="text-base">{useCase.description}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="faqs-heading">
        <Container size="xl">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 id="faqs-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our {service.title.toLowerCase()} services. Can&apos;t find your answer? <a href="/contact" className="text-primary-600 hover:underline font-medium">Ask us directly</a>.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <Reveal key={faq.question} threshold={0.1} delay={index * 0.05}>
                <motion.div
                  className="bg-white rounded-2xl border border-border-light overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    aria-expanded={openFaq === faq.question}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium text-text-primary pr-4">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: openFaq === faq.question ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-text-tertiary flex-shrink-0"
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.question && (
                      <motion.div
                        id={`faq-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            ))}
          </div>
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
                Ready to Explore {service.title}?
              </h2>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss your specific requirements and outline how we can help. No pressure, just an honest conversation.
              </p>
              <Flex gap="md" className="justify-center flex-wrap">
                <Button variant="secondary" size="xl" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="ghost" size="xl" className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50" asChild>
                  <Link href="/approach" className="flex items-center gap-2">
                    See Our Process
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