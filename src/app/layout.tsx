import "./globals.css";

import { Mulish, Lora } from "next/font/google";

const mulish = Mulish({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wagner Caetano",
  description: "Fullstack professional portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-backgroundDark">{children}</body>
      <link href="https://fonts.googleapis.com/css2?family=**Lora**" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=**Mulish**" rel="stylesheet" />
    </html>
  );
}
