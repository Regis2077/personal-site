import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "../context/ThemeProvider";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { LanguageProvider } from "../context/LanguageContext";

const jetMono = JetBrains_Mono({
  variable: "--font-jetBrain-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regis | Digital Garden",
  description: "Gabriel Regis, desenvolvedor frontend | fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${jetMono.variable}`}>
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
