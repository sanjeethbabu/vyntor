'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ShoppingBag, 
  Factory, 
  Briefcase, 
  GraduationCap, 
  Truck,
  LandPlot,
  BarChart2,
  ArrowRight
} from 'lucide-react';
import { Container, Grid, Flex } from '@/components/ui/Layout';
import { Card, CardContent } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Animations';
import { industries } from '@/lib/data/industries';

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

export function IndustriesPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="industries-hero-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              Industries
            </span>
            <h1 id="industries-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              Deep Expertise Across{' '}
              <span className="text-primary-600">Industries</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              We understand the unique workflows, regulations, and challenges of each sector. Our solutions are tailored to your industry&apos;s specific needs.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="industries-grid-heading">
        <Container size="xl">
          <Grid columns={1} gap="lg" className="sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const IndustryIcon = industryIcons[industry.icon];
              return (
              <Reveal key={industry.slug} threshold={0.1} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="interactive" padding="lg" className="h-full group">
                    <CardContent className="flex flex-col h-full">
                      <div className={cn(
                        'w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300',
                        industry.bgColor,
                        `group-hover:bg-${industry.color}-600 group-hover:text-white`
                      )} aria-hidden="true">
                        <IndustryIcon className={cn('w-7 h-7', `text-${industry.color}-600 group-hover:text-white`)} />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                        {industry.description}
                      </p>
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 group mt-auto"
                      >
                        Explore {industry.name.split(' & ')[0]} Solutions
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
              );
            })}
          </Grid>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="stats-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 id="stats-heading" className="sr-only">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 mb-1">15+</div>
                <div className="text-text-secondary">Industries Served</div>
              </div>
              <div className="text-center border-x border-y-0 border-border-medium md:border-l md:border-r md:border-t-0 md:border-b-0 py-4 md:py-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 mb-1">200+</div>
                <div className="text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 mb-1">95%</div>
                <div className="text-text-secondary">Client Retention Rate</div>
              </div>
            </div>
            
            <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
              Don&apos;t see your industry listed? Our flexible approach adapts to any sector.
              We&apos;ve successfully delivered projects for organizations across healthcare, energy,
              government, non-profit, and many more verticals.
            </p>
            
            <Flex gap="md" className="justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              >
                Discuss Your Industry Needs
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-border-medium text-text-secondary font-semibold hover:border-primary-300 hover:text-primary-600 transition-colors"
              >
                View All Services
              </Link>
            </Flex>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}