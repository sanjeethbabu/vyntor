'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
} from 'lucide-react';
import { Container, Grid, Flex } from '@/components/ui/Layout';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Animations';

const values = [
  {
    icon: Target,
    title: 'Business Outcomes First',
    description: 'We measure success by your results — revenue growth, efficiency gains, customer satisfaction — not by lines of code written or hours billed.',
  },
  {
    icon: Lightbulb,
    title: 'Pragmatic Innovation',
    description: 'We use cutting-edge technology where it creates real value, not for its own sake. Every architectural decision has a business rationale.',
  },
  {
    icon: Shield,
    title: 'Trust Through Transparency',
    description: 'No black boxes. You get clear communication, regular demos, detailed documentation, and full code ownership from day one.',
  },
  {
    icon: Users,
    title: 'Partnership, Not Vendor',
    description: 'We embed with your team, understand your business, and think long-term. Your success is our success — literally.',
  },
  {
    icon: Zap,
    title: 'Speed with Quality',
    description: 'We move fast without breaking things. Automated testing, CI/CD, and code reviews are non-negotiable — they\'re how we ship confidently.',
  },
  {
    icon: Heart,
    title: 'Craftsmanship Matters',
    description: 'Clean code, thoughtful UX, comprehensive docs, and maintainable architecture. We build things we\'re proud to put our name on.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former Google AI engineer and startup CTO. 15+ years building scalable systems and leading engineering teams. Passionate about AI for business impact.',
    initials: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    bio: 'Ex-Stripe, Airbnb. Distributed systems expert. Architected platforms handling billions of requests. Believes in boring technology, exciting products.',
    initials: 'MJ',
  },
  {
    name: 'Priya Sharma',
    role: 'VP of Engineering',
    bio: 'Former Meta, Palantir. Built ML infrastructure and developer platforms. Advocates for developer experience and inclusive engineering culture.',
    initials: 'PS',
  },
  {
    name: 'David Park',
    role: 'Head of AI',
    bio: 'PhD ML from Stanford. Published at NeurIPS, ICML. Translates research into production AI systems. Focus: reliable, explainable, valuable AI.',
    initials: 'DP',
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Design',
    bio: 'Ex-Figma, IDEO. Design systems and product design leader. Believes great design is invisible — it just works. Accessibility champion.',
    initials: 'LT',
  },
  {
    name: 'James Wilson',
    role: 'Head of Delivery',
    bio: 'Former Thoughtworks, Pivotal. Agile delivery at scale. Ensures projects ship on time, on budget, with quality. Client success obsessed.',
    initials: 'JW',
  },
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'Started with a mission: help businesses turn ideas into intelligent digital products.' },
  { year: '2021', title: 'First 10 Clients', description: 'Delivered MVP to production for 10 startups across SaaS, FinTech, and HealthTech.' },
  { year: '2022', title: 'AI Practice Launch', description: 'Formalized AI & Intelligent Automation as core capability. Built 15+ AI production systems.' },
  { year: '2023', title: 'Enterprise Expansion', description: 'Added Fortune 500 clients. Achieved SOC 2 Type II. Team grew to 30+ engineers.' },
  { year: '2024', title: 'Global Reach', description: 'Clients across 4 continents. 200+ projects delivered. 95% client retention rate.' },
];

export function AboutPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="about-hero-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              About VYNTOR
            </span>
            <h1 id="about-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              Building Technology{' '}
              <span className="text-primary-600">That Drives Growth</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl">
              We&apos;re a team of engineers, designers, and strategists who believe technology should amplify human potential. 
              We help ambitious companies turn bold ideas into intelligent digital solutions — from AI-powered automation to scalable SaaS platforms.
            </p>
            <Flex gap="md" className="flex-wrap">
              <Button size="lg" asChild>
                <a href="/contact">Start a Project</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/approach">See How We Work</a>
              </Button>
            </Flex>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="values-heading">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-text-secondary">
              These aren&apos;t just words on a wall. They&apos;re how we make decisions every day — from who we hire to how we architect systems.
            </p>
          </div>

          <Grid columns={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} threshold={0.1} delay={index * 0.08}>
                <Card variant="default" padding="lg" className="h-full group">
                  <CardContent className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors" aria-hidden="true">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="team-heading">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="team-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-text-secondary">
              Experienced builders from world-class technology companies. We&apos;ve scaled systems to billions of users and know what it takes to ship.
            </p>
          </div>

          <Grid columns={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} threshold={0.1} delay={index * 0.08}>
                <Card variant="outlined" padding="lg" className="h-full">
                  <CardContent className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 text-sm font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="journey-heading">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="journey-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-text-secondary">
              From a small team with a big vision to a global technology partner.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 -translate-x-1/2 hidden lg:block"
              aria-hidden="true"
            />
            
            <div className="space-y-12 relative z-10">
              {milestones.map((milestone, index) => (
                <Reveal key={milestone.year} threshold={0.1} delay={index * 0.1}>
                  <motion.div
                    className="flex items-start gap-6 group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex-shrink-0 w-20 text-right pr-4 lg:w-24">
                      <div className="relative">
                        <span className="text-2xl sm:text-3xl font-extrabold text-primary-600">{milestone.year}</span>
                        <div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white lg:left-[calc(100%-8px)]" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-1">{milestone.title}</h3>
                      <p className="text-text-secondary">{milestone.description}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="stats-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-600 mb-1">30+</div>
              <div className="text-text-secondary">Engineers & Designers</div>
            </div>
            <div className="border-x border-y-0 border-border-medium md:border-l md:border-r md:border-t-0 md:border-b-0 py-4 md:py-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-600 mb-1">200+</div>
              <div className="text-text-secondary">Projects Delivered</div>
            </div>
            <div className="border-x border-y-0 border-border-medium md:border-l md:border-r md:border-t-0 md:border-b-0 py-4 md:py-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-600 mb-1">15+</div>
              <div className="text-text-secondary">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-600 mb-1">95%</div>
              <div className="text-text-secondary">Client Retention</div>
            </div>
          </motion.div>
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
                Let&apos;s Build Something Together
              </h2>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
                We&apos;re always excited to hear about new challenges. Whether you have a fully formed project or just an idea, let&apos;s talk.
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
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}