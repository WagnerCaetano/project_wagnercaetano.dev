import { ReactNode } from "react";
import "./../globals.css";
import { Mulish, Lora } from "next/font/google";
import FooterComponent from "@/components/footerComponent";
import NavComponent from "@/components/navComponent";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Wagner Caetano",
  description: "Fullstack professional portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${mulish.variable} bg-backgroundDark`}>
        <>
          <NavComponent shadow={false} />
          {children}
          <FooterComponent shadow={true} />
        </>
      </body>
    </html>
  );
}
