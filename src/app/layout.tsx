import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "../context/ThemeProvider";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { LanguageProvider } from "../context/LanguageContext";
import { generatePersonStructuredData, generateWebSiteStructuredData } from "@/lib/seo";

const jetMono = JetBrains_Mono({
  variable: "--font-jetBrain-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = 'https://gabrielregis.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gabriel Regis",
    template: "%s | Gabriel Regis",
  },
  description: "Desenvolvedor frontend e fullstack especializado em React, Next.js e TypeScript",
  keywords: ["desenvolvedor frontend", "desenvolvedor fullstack", "React", "Next.js", "TypeScript", "JavaScript", "portfolio", "Gabriel Regis"],
  authors: [{ name: "Gabriel Regis", url: SITE_URL }],
  creator: "Gabriel Regis",
  publisher: "Gabriel Regis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Gabriel Regis",
    title: "Gabriel Regis",
    description: "Desenvolvedor frontend e fullstack especializado em React, Next.js e TypeScript.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Gabriel Regis",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data for SEO
  const personData = generatePersonStructuredData('pt');
  const websiteData = generateWebSiteStructuredData('pt');

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData),
          }}
        />
      </head>
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
