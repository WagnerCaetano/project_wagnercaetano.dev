import { ReactNode } from "react";
import "./../globals.css";
import { Mulish, Lora, Sumana } from 'next/font/google';
import NavComponent from '@/components/navComponent';
import FooterComponent from '@/components/footerComponent';

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

export const metadata = {
  title: 'Wagner Caetano',
  description: 'Fullstack professional portfolio',
};

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${mulish.variable} ${sumana.variable} bg-backgroundDark`}>
        <>
          <NavComponent shadow={true} />
          {children}
          <FooterComponent shadow={true} />
        </>
      </body>
    </html>
  );
}
