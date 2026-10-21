export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  technologies: string[];
  useCases: UseCase[];
  faqs: FAQ[];
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  industry: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: string[];
  challenges: string[];
  solutions: string[];
}

export interface Project {
  id: string;
  name: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  isDemo: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  service: string;
  projectDescription: string;
  budget?: string;
  contactMethod?: string;
}

export interface ContactFormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary_large_image' | 'summary';
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: object;
}