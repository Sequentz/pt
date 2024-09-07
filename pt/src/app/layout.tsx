import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from 'next/font/local';

 


export const metadata: Metadata = {
  title: "Belgische Gorilla",
  description: "Channel the violence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <link rel="icon" href="./images/icon.png" sizes="lg" />

      <head>
        {/* Any additional head tags can be added here */}
      </head>
      <body>
          <Header />
          <main>{children}</main>
          <Footer />

      </body>
    </html>
  );
}
