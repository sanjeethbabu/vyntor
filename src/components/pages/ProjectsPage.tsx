'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Container, Grid, Flex } from '@/components/ui/Layout';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Animations';
import { projects } from '@/lib/data/projects';

export function ProjectsPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="projects-hero-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              Featured Work
            </span>
            <h1 id="projects-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              Selected Projects &{' '}
              <span className="text-primary-600">Case Studies</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              A selection of our work across industries and technologies. Real client projects are confidential — these demonstrate our capabilities and approach.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="projects-grid-heading">
        <Container size="xl">
          <Grid columns={1} gap="lg" className="lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.id} threshold={0.1} delay={index * 0.08}>
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
                        <Badge variant="outline" className="text-xs">
                          {project.service}
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
                        <a
                          href={project.caseStudyUrl}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
                        >
                          View Case Study
                        </a>
                        <a
                          href={project.demoUrl}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border-medium text-text-secondary text-sm font-medium hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          aria-label={`View demo for ${project.name}`}
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
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
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              >
                Discuss Your Project
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}