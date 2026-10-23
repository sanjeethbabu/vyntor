import type { Metadata, Viewport } from 'next';
import { Sora, Inter } from 'next/font/google';
import './site.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AppLoader } from '@/components/layout/AppLoader';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vastverse.com'),
  title: {
    default: 'vastverse | Innovating Your Vision',
    template: '%s | vastverse',
  },
  description: 'vastverse helps businesses transform ideas into powerful software, AI-driven solutions, intelligent automation, and scalable digital products built for growth.',
  keywords: [
    'software development',
    'AI development',
    'custom software',
    'web development',
    'mobile app development',
    'SaaS development',
    'digital transformation',
    'automation',
    'technology consulting',
  ],
  authors: [{ name: 'vastverse' }],
  creator: 'vastverse',
  publisher: 'vastverse',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vastverse.com',
    siteName: 'vastverse',
    title: 'vastverse | Innovating Your Vision',
    description: 'We turn bold ideas into intelligent digital solutions. Software development, AI, automation, and digital products for growth.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'vastverse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vastverse',
    description: 'We turn bold ideas into intelligent digital solutions.',
    images: ['/og-image.png'],
    creator: '@vastversetech',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        <ScrollProgress />
        <AppLoader />
        <Header />
        <main className="site-main flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


