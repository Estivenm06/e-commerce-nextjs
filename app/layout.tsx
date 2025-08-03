import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { ContextProvider } from "./context/context";
import { Modals } from "@ui5/webcomponents-react";

import "./globals.css";
import { Header } from "./ui/common/Header";
import { Menu } from "./ui/common/Menu";
import { Alert } from "./ui/common/Alert";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Application",
  description: "E-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <ContextProvider>
            <div className="py-1 border-b-1 border-[#b9b7a7]">
              <Menu />
            </div>
            <header className="shadow-md">
              <Header  />
            </header>
            <main className="flex-1 py-10 h-full">
              <Modals />
              {children}
            </main>
            <Alert />
          </ContextProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
