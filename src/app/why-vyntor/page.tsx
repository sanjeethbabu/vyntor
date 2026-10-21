import type { Metadata } from 'next';
import { WhyChooseVyntor } from '@/components/sections/WhyChoose';

export const metadata: Metadata = {
  title: 'Why Us',
  description: 'See how VYNTOR combines tailored solutions, practical AI, scalable engineering, clear communication, and long-term support.',
};

export default function WhyVyntorPage() {
  return <WhyChooseVyntor headingLevel="h1" />;
}
