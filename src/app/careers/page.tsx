import type { Metadata } from 'next';
import { CareersPage } from '@/components/pages/CareersPage';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore a career with VYNTOR Technologies. Share your experience and apply to join our team.',
};

export default function CareersPageWrapper() {
  return <CareersPage />;
}
