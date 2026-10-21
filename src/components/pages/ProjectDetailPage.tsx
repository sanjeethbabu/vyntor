'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight,
  Code, 
  Users,
  Smartphone,
  Brain,
  Globe,
  Layers,
  TrendingUp,
  Lightbulb,
  Server,
  Calendar,
  DollarSign,
} from 'lucide-react';
import { Container, Flex, Grid } from '@/components/ui/Layout';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectDetailPageProps {
  project: {
    id: string;
    name: string;
    industry: string;
    problem: string;
    solution: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    caseStudyUrl: string;
    isDemo: boolean;
    service: string;
  };
}

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'AI & Intelligent Automation': Brain,
  'Custom Software Development': Code,
  'Web Development': Globe,
  'Mobile App Development': Smartphone,
  'SaaS Product Development': Layers,
  'Digital Growth & Marketing': TrendingUp,
  'Startup Consulting': Lightbulb,
  'Hosting & Support': Server,
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const ServiceIcon = serviceIcons[project.service] || Code;

  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="project-title">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-600 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Projects
            </Link>
            
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Badge variant="secondary">{project.industry}</Badge>
              <Badge variant="outline" className="flex items-center gap-1.5">
                <ServiceIcon className="w-3 h-3" aria-hidden="true" />
                {project.service}
              </Badge>
              {project.isDemo && (
                <Badge variant="outline" className="border-amber-300 text-amber-700 bg-amber-50">
                  Demo Project
                </Badge>
              )}
            </div>
            
            <h1 id="project-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              {project.name}
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl">
              {project.problem}
            </p>
            
            <Flex gap="md" className="flex-wrap">
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Similar Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Related Services</Link>
              </Button>
            </Flex>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white pb-8 sm:pb-12" aria-label={`${project.name} preview`}>
        <Container size="xl">
          <div className="relative mx-auto aspect-[16/8] max-w-6xl overflow-hidden rounded-2xl border border-border-light shadow-[0_24px_70px_rgba(21,26,36,0.09)] sm:rounded-3xl">
            <Image
              src={project.image}
              alt={`${project.name} interface illustration`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="solution-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="solution-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-6">
                Our Solution
              </h2>
              <div className="prose prose-primary max-w-none">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">{project.solution}</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="details-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="details-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-8">
                Project Details
              </h2>
              
              <Grid columns={1} gap="lg" className="md:grid-cols-3 mb-12">
                <Card variant="default" padding="lg" className="text-center">
                  <CardContent>
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <p className="text-2xl font-extrabold text-text-primary">4-6 Months</p>
                    <p className="text-text-secondary text-sm mt-1">Typical Duration</p>
                  </CardContent>
                </Card>
                <Card variant="default" padding="lg" className="text-center">
                  <CardContent>
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                      <DollarSign className="w-7 h-7" />
                    </div>
                    <p className="text-2xl font-extrabold text-text-primary">$50K-$500K+</p>
                    <p className="text-text-secondary text-sm mt-1">Project Range</p>
                  </CardContent>
                </Card>
                <Card variant="default" padding="lg" className="text-center">
                  <CardContent>
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                      <Users className="w-7 h-7" />
                    </div>
                    <p className="text-2xl font-extrabold text-text-primary">3-8 People</p>
                    <p className="text-text-secondary text-sm mt-1">Team Size</p>
                  </CardContent>
                </Card>
              </Grid>

              <div className="mb-12">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Technology Stack</h3>
                <Flex gap="sm" className="flex-wrap">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-6">Key Outcomes</h3>
                <Grid columns={1} gap="md" className="sm:grid-cols-2">
                  <Card variant="outlined" padding="lg">
                    <CardContent>
                      <h4 className="font-semibold text-text-primary mb-2">Problem Solved</h4>
                      <p className="text-text-secondary">{project.problem}</p>
                    </CardContent>
                  </Card>
                  <Card variant="outlined" padding="lg">
                    <CardContent>
                      <h4 className="font-semibold text-text-primary mb-2">Solution Delivered</h4>
                      <p className="text-text-secondary">{project.solution}</p>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            </motion.div>
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
                Have a Similar Challenge?
              </h2>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how we can apply this experience to your project. We&apos;ll share relevant insights and outline a potential approach.
              </p>
              <Flex gap="md" className="justify-center flex-wrap">
                <Button variant="secondary" size="xl" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="ghost" size="xl" className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50" asChild>
                  <Link href="/projects" className="flex items-center gap-2">
                    View More Projects
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