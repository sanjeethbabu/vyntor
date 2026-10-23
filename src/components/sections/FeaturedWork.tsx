'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ExternalLink
} from 'lucide-react';
import { Container, Grid, Flex } from '@/components/ui/Layout';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Animations';

const projects = [
  {
    id: 'demo-1',
    name: 'AI-Powered Customer Support Platform',
    industry: 'SaaS / Customer Service',
    problem: 'High volume of repetitive support tickets overwhelming human agents, leading to slow response times and poor customer satisfaction.',
    solution: 'Built an AI-first support platform with intelligent ticket routing, automated responses for common queries, and AI-assisted agent suggestions — reducing resolution time by 65%.',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis', 'AWS'],
    image: '/projects/ai-support-platform.svg',
    demoUrl: '#',
    caseStudyUrl: '#',
    isDemo: true,
  },
  {
    id: 'demo-2',
    name: 'Multi-Tenant E-Commerce Marketplace',
    industry: 'Retail / E-Commerce',
    problem: 'Client needed a scalable marketplace platform supporting hundreds of vendors with complex inventory, commission, and payout logic.',
    solution: 'Developed a multi-tenant marketplace with vendor dashboards, automated commission calculations, real-time inventory sync, and integrated payment processing.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker', 'Kubernetes'],
    image: '/projects/ecommerce-marketplace.svg',
    demoUrl: '#',
    caseStudyUrl: '#',
    isDemo: true,
  },
  {
    id: 'demo-3',
    name: 'Manufacturing IoT Dashboard',
    industry: 'Manufacturing / Industrial',
    problem: 'Factory lacked real-time visibility into equipment performance, leading to unplanned downtime and maintenance inefficiencies.',
    solution: 'Created an IoT analytics platform ingesting sensor data from 200+ machines, providing predictive maintenance alerts, OEE tracking, and customizable dashboards.',
    technologies: ['React', 'TypeScript', 'TimescaleDB', 'MQTT', 'InfluxDB', 'Grafana', 'AWS IoT'],
    image: '/projects/manufacturing-iot.svg',
    demoUrl: '#',
    caseStudyUrl: '#',
    isDemo: true,
  },
  {
    id: 'demo-4',
    name: 'Healthcare Patient Portal',
    industry: 'Healthcare / HealthTech',
    problem: 'Clinic network needed a secure, HIPAA-compliant portal for patient appointments, records access, telehealth, and provider communication.',
    solution: 'Built a comprehensive patient portal with appointment scheduling, secure messaging, telehealth integration, prescription management, and audit logging.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Twilio', 'AWS', 'HIPAA Compliance'],
    image: '/projects/healthcare-portal.svg',
    demoUrl: '#',
    caseStudyUrl: '#',
    isDemo: true,
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-background-secondary" aria-labelledby="projects-heading">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4"
            >
              Featured Work
            </motion.span>
            <motion.h2
              id="projects-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary leading-tight"
            >
              Selected Projects & Case Studies
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border-medium bg-white px-6 py-3 font-medium text-text-secondary transition-colors hover:border-primary-800 hover:text-primary-800"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <Grid columns={1} gap="lg" className="lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} threshold={0.1} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="default" padding="none" className="h-full overflow-hidden group">
                  <div className="relative aspect-video bg-neutral-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.name} interface illustration`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {project.isDemo && (
                      <Badge variant="outline" className="absolute top-4 left-4 z-10">
                        Demo Project
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.industry}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-lg mb-2">{project.name}</CardTitle>
                    <CardDescription className="mb-4 flex-1">
                      {project.problem}
                    </CardDescription>
                    
                    <div className="mb-4">
                      <p className="font-medium text-text-primary text-sm mb-2">Solution Delivered</p>
                      <p className="text-sm text-text-secondary line-clamp-3">{project.solution}</p>
                    </div>
                    
                    <div className="mb-6 flex-1">
                      <p className="font-medium text-text-primary text-sm mb-2">Technology Stack</p>
                      <Flex gap="sm" className="flex-wrap">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </Flex>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                      <Link
                        href={project.caseStudyUrl}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black"
                      >
                        View Case Study
                      </Link>
                      <Link
                        href={project.demoUrl}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border-medium px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-primary-800 hover:text-primary-800"
                        aria-label={`View demo for ${project.name}`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </Grid>

        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-secondary mb-4"
          >
            These are demonstration projects showcasing our capabilities. Real client work is confidential and shared under NDA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Projects
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}