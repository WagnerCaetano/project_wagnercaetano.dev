import { ReactNode } from 'react';
import './../globals.css';
import NavComponent from '@/components/navComponent';
import FooterComponent from '@/components/footerComponent';

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavComponent shadow={true} />
      {children}
      <FooterComponent shadow={true} />
    </>
  );
}
