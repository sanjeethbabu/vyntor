import { Metadata } from 'next';
import { ApproachPage } from '@/components/pages/ApproachPage';

export const metadata: Metadata = {
  title: 'Our Approach',
  description: 'Discover VYNTOR Technologies\' proven 5-step process: Discover, Strategize, Design, Build & Validate, Launch & Support. Structured, transparent, and results-driven.',
};

export default function ApproachPageWrapper() {
  return <ApproachPage />;
}