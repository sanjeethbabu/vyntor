import { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with VYNTOR. Discuss your project, request a consultation, or learn more about our technology services.',
};

export default function ContactPageWrapper() {
  return <ContactPage />;
}