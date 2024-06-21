import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import localfont from "next/font/local";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
