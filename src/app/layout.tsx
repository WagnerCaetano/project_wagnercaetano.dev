import { ReactNode } from 'react';
import './globals.css';
import { Mulish, Lora, Sumana } from 'next/font/google';
import { Metadata } from 'next';
import { keywordsDeveloper } from '@/assets/metadata/keywords';
import Script from 'next/script';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  display: 'swap',
  preload: false,
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  preload: false,
});

const sumana = Sumana({
  subsets: ['latin'],
  variable: '--font-sumana',
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Wagner Caetano - Software Developer',
  description: 'Hello, my name is Wagner, I am a Full-stack Software Developer with a passion for designing and developing innovative software solutions.',
  keywords: keywordsDeveloper,
  authors: {
    name: 'Wagner Caetano',
    url: 'https://www.linkedin.com/in/wagner-caetano/',
  },
  robots: 'index, follow',
  applicationName: 'Wagner Caetano Portfolio',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon.ico',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
      sizes: '16x16',
      type: 'image/png',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://wagnercaetano.dev',
    title: 'Wagner Caetano Professional Portfolio',
    description:
      'I am a Full-stack Software Developer with a passion for designing and developing innovative software solutions. With extensive knowledge and expertise in both frontend and backend development',
    images: [
      {
        url: 'https://s3.sa-east-1.amazonaws.com/wagnercaetano.dev-portfolio-images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wagner Caetano Professional Portfolio',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R8K99S28BX"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', import LoadingSpinner from '@/components/loadingSpinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full flex flex-1 place-content-center h-screen">
      <LoadingSpinner />
    </div>
  );
}
new Date());

          gtag('config', 'G-R8K99S28BX');
          `}
        </Script>
      </head>
      <body className={`${lora.variable} ${mulish.variable} ${sumana.variable} bg-backgroundDark`}>{children}</body>
    </html>
  );
}
