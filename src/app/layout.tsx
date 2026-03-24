import type { Metadata } from "next";
import { cookies } from "next/headers";
import { DM_Sans } from "next/font/google";
import { cn } from "@/utils/cn.utils";
import { themeScript } from "@/utils/theme-script";
import { rootMetadata } from "@/seo/metadata";
import { I18nProvider } from "@/i18n/I18nProvider";
import { localeCookieName, resolveLocale } from "@/i18n/config";
import { jsonLd, personJsonLd, websiteJsonLd } from "@/seo/schema";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets : ["latin"],
});

export const metadata: Metadata = rootMetadata;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const initialLocale = resolveLocale(cookieStore.get(localeCookieName)?.value);

  return (
    <html lang={initialLocale} suppressHydrationWarning>
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
        <I18nProvider initialLocale={initialLocale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
