import { Metadata } from 'next';
import Link from 'next/link';
import { ProjectDetailPage } from '@/components/pages/ProjectDetailPage';
import { projects } from '@/lib/data/projects';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.name,
    description: project.problem,
  };
}

export default async function ProjectDetailPageWrapper({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-3xl font-extrabold text-text-primary mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="text-primary-600 hover:underline font-medium">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailPage project={project} />;
}