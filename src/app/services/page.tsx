import { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore VYNTOR Technologies\' comprehensive technology services — AI & intelligent automation, custom software development, web & mobile development, SaaS products, and digital growth solutions.',
};

interface ServicesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ServicesPageWrapper({ searchParams }: ServicesPageProps) {
  const { category } = await searchParams;
  return <ServicesPage initialCategoryId={category} />;
}