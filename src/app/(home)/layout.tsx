import { ReactNode } from 'react';
import './../globals.css';
import FooterComponent from '@/components/footerComponent';
import NavComponent from '@/components/navComponent';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavComponent shadow={false} />
      {children}
      <FooterComponent shadow={true} />
    </>
  );
}
