import { Metadata } from 'next';
import Link from 'next/link';
import { IndustryDetailPage } from '@/components/pages/IndustryDetailPage';
import { industries } from '@/lib/data/industries';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find(i => i.slug === slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: industry.name,
    description: industry.description,
  };
}

export default async function IndustryDetailPageWrapper({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-3xl font-extrabold text-text-primary mb-4">Industry Not Found</h1>
          <p className="text-text-secondary mb-8">The industry you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/industries" className="text-primary-600 hover:underline font-medium">Back to Industries</Link>
        </div>
      </div>
    );
  }

  return <IndustryDetailPage industry={industry} />;
}