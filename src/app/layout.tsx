import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/utils/cn.utils";
import { themeScript } from "@/utils/theme-script";
import { rootMetadata } from "@/seo/metadata";
import { jsonLd, personJsonLd, websiteJsonLd } from "@/seo/schema";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets : ["latin"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(personJsonLd)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteJsonLd)}
        />
      </head>
      
      <body className={cn("antialiased bg-foreground text-background dark:text-foreground dark:bg-background", dmSans.className)}>
        {children}
      </body>
    </html>
  );
}
