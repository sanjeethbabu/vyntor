'use client';

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
  Building2,
  Laptop,
  Smartphone,
  Database,
  Network
} from 'lucide-react';
import { Container, Grid } from '@/components/ui/Layout';
import { Card, CardContent } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Animations';

const industries = [
  {
    icon: Rocket,
    name: 'Startups & Entrepreneurs',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & E-Commerce',
  },
  {
    icon: Factory,
    name: 'Manufacturing & Industrial',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
  },
  {
    icon: GraduationCap,
    name: 'Education & Training',
  },
  {
    icon: Truck,
    name: 'Logistics & Transportation',
  },
  {
    icon: LandPlot,
    name: 'Real Estate & Property',
  },
  {
    icon: BarChart2,
    name: 'Finance & Business Operations',
  },
  {
    icon: Building2,
    name: 'Healthcare & Hospitals',
  },
];

const softwareApplications = [
  { icon: Laptop, name: 'Web Applications', description: 'Customer portals, dashboards, admin panels' },
  { icon: Smartphone, name: 'Mobile Apps', description: 'iOS, Android & cross-platform solutions' },
  { icon: Database, name: 'ERP & CRM Systems', description: 'Business process automation & management' },
  { icon: Network, name: 'SaaS Platforms', description: 'Multi-tenant products & subscription services' },
];

export function Industries() {
  return (
    <section className="home-industries bg-white" aria-labelledby="industries-heading">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-3"
          >
            Industries
          </motion.span>
          <motion.h2
            id="industries-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold leading-tight text-text-primary sm:text-3xl"
          >
            Our Business Associates
          </motion.h2>
        </div>

        <Grid columns={1} gap="sm" className="sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} threshold={0.1} delay={index * 0.08}>
              <Card variant="interactive" padding="sm" className="group h-full !rounded-xl !py-3.5">
                <CardContent className="flex items-center gap-3">
                  <div className={cn(
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300',
                    'bg-neutral-100 text-primary-800 group-hover:bg-primary-800 group-hover:text-white'
                  )} aria-hidden="true">
                    <industry.icon className="h-[1.1rem] w-[1.1rem]" />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-text-primary">
                    {industry.name}
                  </h3>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </Grid>

        <div className="mt-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg font-semibold text-text-primary mb-6"
          >
            Digital Solutions We Build
          </motion.h3>
          <Grid columns={1} gap="sm" className="sm:grid-cols-2 lg:grid-cols-4">
            {softwareApplications.map((app, index) => (
              <Reveal key={app.name} threshold={0.1} delay={index * 0.08}>
                <Card variant="interactive" padding="md" className="group h-full !rounded-xl">
                  <CardContent className="flex flex-col items-center text-center gap-3">
                    <div className={cn(
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300',
                      'bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white'
                    )} aria-hidden="true">
                      <app.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-text-primary">{app.name}</h4>
                    <p className="text-xs text-text-tertiary leading-snug">{app.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}