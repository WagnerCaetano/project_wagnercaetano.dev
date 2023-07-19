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
  title: 'Wagner Caetano Professional Portfolio',
  description: 'Fullstack software engineer professional portfolio',
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
          gtag('js', new Date());

          gtag('config', 'G-R8K99S28BX');
          `}
        </Script>
      </head>
      <body className={`${lora.variable} ${mulish.variable} ${sumana.variable} bg-backgroundDark`}>{children}</body>
    </html>
  );
}
