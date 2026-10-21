'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Brain, 
  Code, 
  Globe, 
  Smartphone, 
  Layers, 
  TrendingUp, 
  Lightbulb, 
  Server,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { Container, Flex } from '@/components/ui/Layout';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Animations';

const categories = [
  { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'primary', count: 12 },
  { id: 'software', name: 'Software Engineering', icon: Code, color: 'blue', count: 18 },
  { id: 'web', name: 'Web Development', icon: Globe, color: 'cyan', count: 15 },
  { id: 'mobile', name: 'Mobile Development', icon: Smartphone, color: 'indigo', count: 8 },
  { id: 'saas', name: 'SaaS & Products', icon: Layers, color: 'purple', count: 10 },
  { id: 'growth', name: 'Digital Growth', icon: TrendingUp, color: 'green', count: 7 },
  { id: 'startup', name: 'Startup Strategy', icon: Lightbulb, color: 'orange', count: 9 },
  { id: 'ops', name: 'DevOps & Infrastructure', icon: Server, color: 'teal', count: 11 },
];

const articles = [
  {
    id: 'building-production-ai-agents',
    title: 'Building Production-Ready AI Agents: Architecture Patterns That Scale',
    excerpt: 'Moving from prototype to production AI agents requires careful attention to observability, error handling, and evaluation frameworks. Here\'s what we\'ve learned.',
    category: 'AI & Machine Learning',
    categoryId: 'ai',
    author: 'Sarah Chen',
    authorRole: 'AI Engineering Lead',
    publishedAt: '2024-01-15',
    readTime: '12 min read',
    tags: ['AI Agents', 'LLMs', 'Production', 'Architecture'],
    featured: true,
    image: '/projects/ai-support-platform.svg',
  },
  {
    id: 'nextjs-14-app-router-migration',
    title: 'Migrating to Next.js 14 App Router: A Complete Guide for Large Teams',
    excerpt: 'Our step-by-step approach to migrating a 200+ page enterprise application to the App Router, including streaming, server components, and performance optimization.',
    category: 'Software Engineering',
    categoryId: 'software',
    author: 'Marcus Johnson',
    authorRole: 'Principal Engineer',
    publishedAt: '2024-01-08',
    readTime: '18 min read',
    tags: ['Next.js', 'React', 'Migration', 'Performance'],
    featured: false,
    image: '/projects/manufacturing-iot.svg',
  },
  {
    id: 'headless-commerce-architecture',
    title: 'Headless Commerce Architecture: When to Decouple and How to Succeed',
    excerpt: 'Traditional monolithic platforms are limiting growth. We break down the decision framework for headless commerce and share patterns from $10M+ implementations.',
    category: 'Web Development',
    categoryId: 'web',
    author: 'Emily Rodriguez',
    authorRole: 'E-commerce Architect',
    publishedAt: '2024-01-02',
    readTime: '15 min read',
    tags: ['Headless', 'Commerce', 'Shopify', 'Next.js'],
    featured: false,
    image: '/projects/ecommerce-marketplace.svg',
  },
  {
    id: 'flutter-vs-react-native-2024',
    title: 'Flutter vs React Native in 2024: Decision Framework for Product Teams',
    excerpt: 'Both frameworks are production-ready. The choice depends on your team, timeline, and product requirements. Our practical framework for making the call.',
    category: 'Mobile Development',
    categoryId: 'mobile',
    author: 'David Park',
    authorRole: 'Mobile Engineering Lead',
    publishedAt: '2023-12-28',
    readTime: '14 min read',
    tags: ['Flutter', 'React Native', 'Cross-Platform', 'Decision Making'],
    featured: false,
    image: '/projects/healthcare-portal.svg',
  },
  {
    id: 'saas-multi-tenancy-patterns',
    title: 'Multi-Tenancy Patterns for B2B SaaS: Row-Level Security vs Schema Isolation',
    excerpt: 'Database architecture decisions early on save months of migration pain later. We compare approaches with real-world tradeoffs from our client work.',
    category: 'SaaS & Products',
    categoryId: 'saas',
    author: 'Lisa Wang',
    authorRole: 'Backend Architect',
    publishedAt: '2023-12-20',
    readTime: '16 min read',
    tags: ['SaaS', 'Multi-Tenancy', 'PostgreSQL', 'Architecture'],
    featured: true,
    image: '/projects/ai-support-platform.svg',
  },
  {
    id: 'technical-seo-checklist-2024',
    title: 'The Complete Technical SEO Checklist for 2024: Core Web Vitals & Beyond',
    excerpt: 'Google\'s algorithm updates keep raising the bar. Our comprehensive checklist covers CWV, structured data, crawl budget, and the new INP metric.',
    category: 'Digital Growth',
    categoryId: 'growth',
    author: 'James Mitchell',
    authorRole: 'Growth Engineering Lead',
    publishedAt: '2023-12-15',
    readTime: '20 min read',
    tags: ['SEO', 'Core Web Vitals', 'Performance', 'Technical SEO'],
    featured: false,
    image: '/projects/manufacturing-iot.svg',
  },
  {
    id: 'fractional-cto-when-to-hire',
    title: 'When to Hire a Fractional CTO: A Founder\'s Decision Framework',
    excerpt: 'Technical leadership without the full-time cost. We outline the signals that indicate you\'re ready, what to expect, and how to structure the engagement.',
    category: 'Startup Strategy',
    categoryId: 'startup',
    author: 'Robert Kim',
    authorRole: 'Fractional CTO / Partner',
    publishedAt: '2023-12-10',
    readTime: '11 min read',
    tags: ['Fractional CTO', 'Startups', 'Leadership', 'Fundraising'],
    featured: false,
    image: '/projects/healthcare-portal.svg',
  },
  {
    id: 'kubernetes-cost-optimization',
    title: 'Kubernetes Cost Optimization: How We Reduced Cloud Spend by 40%',
    excerpt: 'Right-sizing, spot instances, and autoscaling policies that actually work. A case study with concrete numbers and reusable Terraform modules.',
    category: 'DevOps & Infrastructure',
    categoryId: 'ops',
    author: 'Amanda Foster',
    authorRole: 'Platform Engineering Lead',
    publishedAt: '2023-12-05',
    readTime: '13 min read',
    tags: ['Kubernetes', 'AWS', 'Cost Optimization', 'FinOps'],
    featured: false,
    image: '/projects/manufacturing-iot.svg',
  },
  {
    id: 'rag-evaluation-frameworks',
    title: 'Evaluating RAG Systems: Beyond Recall@K to Business Metrics',
    excerpt: 'Standard IR metrics don\'t capture business value. We propose a framework connecting retrieval quality to user satisfaction and task completion rates.',
    category: 'AI & Machine Learning',
    categoryId: 'ai',
    author: 'Sarah Chen',
    authorRole: 'AI Engineering Lead',
    publishedAt: '2023-11-28',
    readTime: '17 min read',
    tags: ['RAG', 'Evaluation', 'LLMs', 'Metrics'],
    featured: false,
    image: '/projects/ai-support-platform.svg',
  },
  {
    id: 'react-server-components-deep-dive',
    title: 'React Server Components Deep Dive: Mental Models for the New Paradigm',
    excerpt: 'RSC changes how we think about data fetching, interactivity, and bundle size. We build mental models through practical examples and common pitfalls.',
    category: 'Software Engineering',
    categoryId: 'software',
    author: 'Marcus Johnson',
    authorRole: 'Principal Engineer',
    publishedAt: '2023-11-20',
    readTime: '22 min read',
    tags: ['React', 'RSC', 'Server Components', 'Next.js'],
    featured: true,
    image: '/projects/ecommerce-marketplace.svg',
  },
];

export function InsightsPage() {
  return (
    <>
      <section className="page-hero bg-gradient-to-b from-primary-50 to-white pt-24 lg:pt-32 pb-16 lg:pb-24" aria-labelledby="insights-hero-heading">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              Insights
            </span>
            <h1 id="insights-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
              Technical Insights &{' '}
              <span className="text-primary-600">Thought Leadership</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              Deep dives into the technologies, patterns, and decisions that shape modern software. Written by the engineers building production systems every day.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="categories-heading">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="categories-heading" className="sr-only">Browse by Category</h2>
            <p className="text-text-secondary">Filter articles by topic</p>
          </div>
          <Flex gap="sm" className="flex-wrap justify-center mb-12">
            <button className="px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-medium">All Topics</button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="px-4 py-2 rounded-xl border border-border-medium text-text-secondary text-sm font-medium hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center gap-1.5"
              >
                <cat.icon className={cn('w-4 h-4', `text-${cat.color}-600`)} aria-hidden="true" />
                {cat.name}
                <span className="px-2 py-0.5 rounded-full text-xs bg-neutral-100 text-text-tertiary">{cat.count}</span>
              </button>
            ))}
          </Flex>

          <div className="grid lg:grid-cols-2 gap-8">
            {articles.slice(0, 2).map((article, index) => {
              return (
              <Reveal key={article.id} threshold={0.1} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)' }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Card variant="default" padding="none" className="h-full overflow-hidden">
                    <div className="relative aspect-video bg-neutral-100 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={`${article.category} editorial illustration`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {article.featured && (
                        <Badge variant="secondary" className="absolute top-4 left-4 z-10">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-text-tertiary flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <Link href={`/insights/${article.id}`} className="block">
                        <CardTitle className="text-xl mb-3 group-hover:text-primary-600 transition-colors">
                          {article.title}
                        </CardTitle>
                      </Link>
                      <CardDescription className="mb-4 flex-1">{article.excerpt}</CardDescription>
                      <Flex align="center" justify="between">
                        <Flex align="center" gap="md">
                          <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center" aria-hidden="true">
                            <span className="text-xs font-bold">{article.author.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text-primary">{article.author}</p>
                            <p className="text-xs text-text-tertiary">{article.authorRole}</p>
                          </div>
                        </Flex>
                        <Flex align="center" gap="sm">
                          <span className="text-sm text-text-tertiary flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            {article.readTime}
                          </span>
                          <Link
                            href={`/insights/${article.id}`}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 group"
                          >
                            Read Article
                            <motion.span
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </motion.span>
                          </Link>
                        </Flex>
                      </Flex>
                    </CardContent>
                  </Card>
                </motion.article>
              </Reveal>
            );
          })}

            <Reveal threshold={0.1} delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid gap-6"
              >
                {articles.slice(2).map((article) => (
                  <article key={article.id} className="group">
                    <Card variant="outlined" padding="lg" className="flex flex-col sm:flex-row gap-6 hover:border-primary-200 transition-colors">
                      <div className="relative w-full sm:w-64 h-40 sm:h-auto min-h-[160px] bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0" aria-hidden="true">
                        <Image
                          src={article.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, 16rem"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                            <span className="text-xs text-text-tertiary flex items-center gap-1">
                              <Calendar className="w-3 h-3" aria-hidden="true" />
                              {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="text-xs text-text-tertiary flex items-center gap-1">
                              <Clock className="w-3 h-3" aria-hidden="true" />
                              {article.readTime}
                            </span>
                          </div>
                          <Link href={`/insights/${article.id}`} className="block">
                            <h3 className="font-semibold text-text-primary leading-tight group-hover:text-primary-600 transition-colors">
                              {article.title}
                            </h3>
                          </Link>
                          <p className="text-text-secondary text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                        </div>
                        <Flex align="center" justify="between" className="mt-4 pt-4 border-t border-border-light">
                          <Flex align="center" gap="md">
                            <div className="w-7 h-7 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center" aria-hidden="true">
                              <span className="text-xs font-bold">{article.author.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-text-primary">{article.author}</p>
                              <p className="text-[10px] text-text-tertiary">{article.authorRole}</p>
                            </div>
                          </Flex>
                          <Link
                            href={`/insights/${article.id}`}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 group"
                          >
                            Read
                            <motion.span
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </motion.span>
                          </Link>
                        </Flex>
                      </div>
                    </Card>
                  </article>
                ))}
              </motion.div>
            </Reveal>
          </div>

          <div className="mt-16 text-center">
            <motion.a
              href="/insights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Insights
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          </div>
        </Container>
      </section>

      <section className="bg-background-secondary py-16 lg:py-24" aria-labelledby="newsletter-heading">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 id="newsletter-heading" className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Get Insights Delivered
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Join 5,000+ engineers and leaders receiving our monthly technical digest. No spam, just valuable content.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3.5 rounded-xl border border-border-medium bg-white text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-text-tertiary mt-4">By subscribing, you agree to our <a href="/privacy" className="underline hover:text-primary-600">Privacy Policy</a>.</p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

function Phone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}