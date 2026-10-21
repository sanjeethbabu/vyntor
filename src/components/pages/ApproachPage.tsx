'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  Code, 
  Rocket, 
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Target,
  BarChart2,
} from 'lucide-react';
import { Container, Grid, Flex } from '@/components/ui/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Animations';

const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understand Your Vision',
    icon: Search,
    color: 'primary',
    bgColor: 'bg-primary-50',
    description: 'We start by deeply understanding your business, challenges, and goals. Through stakeholder workshops, technical audits, and competitive analysis, we build a shared understanding of what success looks like.',
    deliverables: [
      'Stakeholder interviews & workshops',
      'Technical landscape assessment',
      'Requirements documentation',
      'Feasibility analysis',
      'Risk identification & mitigation',
    ],
    timeline: '2-3 weeks',
    team: ['Technical Lead', 'Business Analyst', 'Solution Architect'],
  },
  {
    number: '02',
    title: 'Strategize',
    subtitle: 'Define the Roadmap',
    icon: Lightbulb,
    color: 'blue',
    bgColor: 'bg-blue-50',
    description: 'We translate insights into a concrete technical strategy and project plan. This includes architecture decisions, technology selection, team composition, and a phased roadmap with clear milestones and success criteria.',
    deliverables: [
      'Technical architecture & design docs',
      'Technology stack recommendations',
      'Project plan with milestones',
      'Resource & team plan',
      'Cost estimates & ROI modeling',
    ],
    timeline: '1-2 weeks',
    team: ['Solution Architect', 'Technical Lead', 'Project Manager'],
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Craft the Experience',
    icon: PenTool,
    color: 'purple',
    bgColor: 'bg-purple-50',
    description: 'Our design phase covers both user experience and technical design. We create wireframes, prototypes, and design systems for user-facing products, plus database schemas, API contracts, and infrastructure diagrams for backend systems.',
    deliverables: [
      'User journey maps & wireframes',
      'High-fidelity prototypes',
      'Design system & component library',
      'Database schema & API specs',
      'Infrastructure & security design',
    ],
    timeline: '2-4 weeks',
    team: ['UX/UI Designer', 'Solution Architect', 'Technical Lead'],
  },
  {
    number: '04',
    title: 'Build & Validate',
    subtitle: 'Engineer with Quality',
    icon: Code,
    color: 'green',
    bgColor: 'bg-green-50',
    description: 'We develop in 2-week sprints with continuous integration, automated testing, and regular demos. Code reviews, static analysis, and security scanning are built into our process. We validate against acceptance criteria at every step.',
    deliverables: [
      'Production-ready codebase',
      'Automated test suite (unit, integration, e2e)',
      'CI/CD pipeline & deployment automation',
      'Security & performance benchmarks',
      'Documentation & runbooks',
    ],
    timeline: '8-20 weeks',
    team: ['Full-Stack Engineers', 'QA Engineers', 'DevOps Engineer', 'Technical Lead'],
  },
  {
    number: '05',
    title: 'Launch & Support',
    subtitle: 'Deploy and Evolve',
    icon: Rocket,
    color: 'orange',
    bgColor: 'bg-orange-50',
    description: 'We manage the production rollout with staged deployments, monitoring, and rollback procedures. Post-launch, we provide hypercare support, performance optimization, and ongoing feature development through retainer or dedicated team arrangements.',
    deliverables: [
      'Production deployment & go-live',
      'Monitoring, alerting & dashboards',
      'Hypercare support (2-4 weeks)',
      'Performance optimization',
      'Ongoing maintenance & enhancements',
    ],
    timeline: 'Ongoing',
    team: ['DevOps Engineer', 'Support Engineers', 'Technical Lead'],
  },
];

const principles = [
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team — not a black box. Daily standups, shared tools, and transparent communication are standard.',
  },
  {
    icon: Target,
    title: 'Outcome-Focused',
    description: 'Every decision ties back to your business objectives. We measure success by your outcomes, not our output.',
  },
  {
    icon: Shield,
    title: 'Security by Default',
    description: 'Security is not an afterthought. Threat modeling, secure coding practices, and compliance considerations are integrated from day one.',
  },
  {
    icon: BarChart2,
    title: 'Data-Driven Decisions',
    description: 'We instrument everything. Analytics, monitoring, and user feedback drive continuous improvement post-launch.',
  },
  {
    icon: Clock,
    title: 'Predictable Delivery',
    description: 'Fixed-sprint cadence, clear milestones, and proactive risk management keep projects on track and on budget.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Without Compromise',
    description: 'Automated testing, code reviews, and architectural reviews ensure maintainable, scalable code that stands the test of time.',
  },
];

const engagementModels = [
  {
    title: 'Fixed-Price Project',
    description: 'Well-defined scope, timeline, and budget. Ideal for MVPs, migrations, and specific feature builds with clear requirements.',
    bestFor: ['MVP Development', 'Platform Migrations', 'Defined Feature Builds', 'Proof of Concepts'],
    features: ['Fixed scope & price', 'Defined timeline', 'Milestone-based payments', 'Single point of accountability'],
    icon: '📋',
  },
  {
    title: 'Dedicated Team',
    description: 'Full-time engineers integrated with your organization. Best for ongoing product development, platform evolution, and long-term partnerships.',
    bestFor: ['Product Development', 'Platform Evolution', 'Team Augmentation', 'Long-term Partnerships'],
    features: ['Team continuity', 'Monthly capacity billing', 'Scalable team size', 'Direct daily collaboration'],
    icon: '👥',
  },
  {
    title: 'Time & Materials',
    description: 'Flexible engagement for evolving requirements. Perfect for discovery phases, research projects, and advisory engagements.',
    bestFor: ['Discovery & Research', 'Technical Advisory', 'Architecture Reviews', 'Staff Augmentation'],
    features: ['Maximum flexibility', 'Hourly/daily rates', 'Weekly reporting', 'Easy scope adjustment'],
    icon: '⏱️',
  },
];

export function ApproachPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="approach-hero-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              Our Process
            </span>
            <h1 id="approach-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              A Proven 5-Step Process for{' '}
              <span className="text-primary-600">Predictable Delivery</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              From initial discovery to ongoing support, our structured approach ensures clarity, quality, 
              and alignment at every stage. No surprises — just results.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="process-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 id="process-heading" className="sr-only">Our 5-Step Process</h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Reveal key={step.number} threshold={0.1} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    'flex flex-col lg:flex-row gap-8 lg:gap-12 items-start',
                    index % 2 === 1 && 'lg:flex-row-reverse'
                  )}
                >
                  <div className={cn(
                    'flex-shrink-0 w-20 lg:w-24 text-center lg:text-left',
                    step.color === 'primary' && 'text-primary-600',
                    step.color === 'blue' && 'text-blue-600',
                    step.color === 'purple' && 'text-purple-600',
                    step.color === 'green' && 'text-green-600',
                    step.color === 'orange' && 'text-orange-600'
                  )}>
                    <div className="text-4xl lg:text-5xl font-extrabold mb-2">{step.number}</div>
                    <div className={cn(
                      'w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4',
                      step.bgColor
                    )} aria-hidden="true">
                      <step.icon className={cn('w-8 h-8 lg:w-10 lg:h-10', `text-${step.color}-600`)} />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-text-primary">{step.title}</h3>
                      <p className="text-text-secondary mt-1">{step.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-lg text-text-secondary leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                          <Clock className="w-5 h-5" aria-hidden="true" />
                          Timeline
                        </h4>
                        <p className="text-text-secondary">{step.timeline}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5" aria-hidden="true" />
                          Team
                        </h4>
                        <p className="text-text-secondary text-sm">{step.team.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" aria-hidden="true" />
                          Key Deliverables
                        </h4>
                        <ul className="text-text-secondary text-sm space-y-1">
                          {step.deliverables.slice(0, 3).map((d, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" aria-hidden="true" />
                              {d}
                            </li>
                          ))}
                          {step.deliverables.length > 3 && (
                            <li className="text-primary-600 font-medium">+{step.deliverables.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="principles-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 id="principles-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
                Our Guiding Principles
              </h2>
              <p className="text-lg text-text-secondary">
                These principles shape every decision we make, from architecture to communication.
              </p>
            </div>

            <Grid columns={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} threshold={0.1} delay={index * 0.08}>
                  <Card variant="default" padding="lg" className="h-full group">
                    <CardContent>
                      <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors" aria-hidden="true">
                        <principle.icon className="w-6 h-6" />
                      </div>
                      <CardTitle>{principle.title}</CardTitle>
                      <CardDescription className="text-base">{principle.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="engagement-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 id="engagement-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
                Flexible Engagement Models
              </h2>
              <p className="text-lg text-text-secondary">
                Choose the model that fits your stage, budget, and needs. We can also create hybrid arrangements.
              </p>
            </div>

            <Grid columns={1} gap="lg" className="md:grid-cols-3">
              {engagementModels.map((model, index) => (
                <Reveal key={model.title} threshold={0.1} delay={index * 0.1}>
                  <Card variant="default" padding="lg" className="h-full">
                    <CardHeader>
                      <div className="text-4xl mb-3" aria-hidden="true">{model.icon}</div>
                      <CardTitle>{model.title}</CardTitle>
                      <CardDescription>{model.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2 text-sm">Best For</h4>
                        <Flex gap="sm" className="flex-wrap">
                          {model.bestFor.map((item) => (
                            <Badge key={item} variant="secondary" className="text-xs">{item}</Badge>
                          ))}
                        </Flex>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2 text-sm">Key Features</h4>
                        <ul className="space-y-1.5 text-sm text-text-secondary">
                          {model.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </section>

      <section className="bg-primary-600 py-16 lg:py-24" aria-labelledby="cta-heading">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-100 text-lg mb-10">
              Let&apos;s discuss your goals and outline how we can help. First conversation is free — no obligation.
            </p>
            <Flex gap="md" className="justify-center flex-wrap">
              <Button variant="secondary" size="xl" asChild>
                <a href="/contact" className="flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="ghost" size="xl" className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50" asChild>
                <Link href="/services" className="flex items-center gap-2">
                  View Our Services
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
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