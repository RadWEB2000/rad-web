import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "css/Global.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Geologica:wght@100..900&family=Kode+Mono:wght@400..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Poppins:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
