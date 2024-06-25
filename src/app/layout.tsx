import type { Metadata } from "next";
import "./globals.css";

import localfont from "next/font/local";
import { HeaderPage } from "@/components/HeaderPage";

const myriad = localfont({
  src: [
    {
      path: "../../public/fonts/MYRIADPRO-REGULAR.woff",
    },
  ],
  variable: "--font-myriad",
});

const myriadBold = localfont({
  src: [
    {
      path: "../../public/fonts/MYRIADPRO-BOLD.woff",
    },
  ],
  variable: "--font-myriad-bold",
});

export const metadata: Metadata = {
  title: "Cedraz Imoveis",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${myriad.variable} scroll-smooth snap-start snap-mandatory overflow-x-hidden`}
    >
      <body>
        <HeaderPage />
        {children}
      </body>
    </html>
  );
}
