import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceDetailPage } from '@/components/pages/ServiceDetailPage';
import { serviceCategories } from '@/lib/data/services';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.find(s => s.id === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPageWrapper({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceCategories.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-3xl font-extrabold text-text-primary mb-4">Service Not Found</h1>
          <p className="text-text-secondary mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="text-primary-600 hover:underline font-medium">Back to Services</Link>
        </div>
      </div>
    );
  }

  return <ServiceDetailPage service={service} />;
}