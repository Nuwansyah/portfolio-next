import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N-Portfolio",
  description: "Nuwansyah Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col relative">
        
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center blur-lg scale-105" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* CONTENT */}
        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}
