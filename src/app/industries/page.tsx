import { Metadata } from 'next';
import { IndustriesPage } from '@/components/pages/IndustriesPage';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'VYNTOR Technologies serves startups, retail, manufacturing, professional services, education, logistics, real estate, and finance with tailored technology solutions.',
};

export default function IndustriesPageWrapper() {
  return <IndustriesPage />;
}