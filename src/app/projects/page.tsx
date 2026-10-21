import { Metadata } from 'next';
import { ProjectsPage } from '@/components/pages/ProjectsPage';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description: 'Explore VYNTOR Technologies\' selected projects and case studies across AI, custom software, web development, mobile apps, SaaS, and digital growth.',
};

export default function ProjectsPageWrapper() {
  return <ProjectsPage />;
}