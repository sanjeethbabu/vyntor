import { Metadata } from 'next';
import { TermsPage } from '@/components/pages/TermsPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'VYNTOR Technologies Terms & Conditions - Terms of use for our website and services.',
};

export default function TermsPageWrapper() {
  return <TermsPage />;
}