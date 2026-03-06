import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/utils/cn.utils";
import { themeScript } from "@/utils/theme-script";
import { seoConfig } from "@/config/seo.config";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title: {
    default : seoConfig.defaultTitle,
    template: "%s | Rody Huancas",
  },
  description : seoConfig.defaultBio,
  keywords    : [
    ...seoConfig.aliases,
    "Full Stack Developer",
    "Desarrollador Full Stack",
    "Desarrollador Web Perú",
    "Next.js",
    "React",
    "TypeScript",
    "Portafolio",
  ],
  authors     : [{ name: seoConfig.authorName }],
  creator     : seoConfig.authorName,
  publisher   : seoConfig.authorName,
  metadataBase: new URL(seoConfig.siteUrl),
  alternates  : {
    canonical: seoConfig.siteUrl,
  },
  openGraph   : {
    type       : "website",
    locale     : seoConfig.locale,
    url        : seoConfig.siteUrl,
    title      : seoConfig.defaultTitle,
    description: seoConfig.defaultBio,
    siteName   : seoConfig.siteName,
    images     : [
      {
        url   : "/logo.svg",
        width : 1200,
        height: 630,
        alt   : seoConfig.siteName,
      },
    ],
  },
  twitter: {
    card       : "summary_large_image",
    title      : seoConfig.defaultTitle,
    description: seoConfig.defaultBio,
    images     : ["/logo.svg"],
  },
  robots: {
    index : true,
    follow: true,
    googleBot: {
      index        : true,
      follow       : true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context"   : "https://schema.org",
    "@type"      : "Person",
    name         : seoConfig.authorName,
    alternateName: seoConfig.aliases,
    url          : seoConfig.siteUrl,
    jobTitle     : seoConfig.role,
    email        : seoConfig.contactEmail,
    sameAs       : seoConfig.socialProfiles,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type"   : "WebSite",
    name      : seoConfig.siteName,
    url       : seoConfig.siteUrl,
    inLanguage: "es-PE",
    author    : {
      "@type": "Person",
      name   : seoConfig.authorName,
    },
  };

  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      
      <body className={cn("antialiased bg-foreground text-background dark:text-foreground dark:bg-background", dmSans.className)}>
        {children}
      </body>
    </html>
  );
}
