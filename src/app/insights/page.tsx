import { Metadata } from 'next';
import { InsightsPage } from '@/components/pages/InsightsPage';

export const metadata: Metadata = {
  title: 'Insights & Articles',
  description: 'Technical insights, industry perspectives, and thought leadership from the vastverse team. Explore articles on AI, software development, digital transformation, and more.',
};

export default function InsightsPageWrapper() {
  return <InsightsPage />;
}


