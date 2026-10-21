import { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'VYNTOR Technologies Privacy Policy - How we collect, use, and protect your personal information.',
};

export default function PrivacyPageWrapper() {
  return <PrivacyPage />;
}