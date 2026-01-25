import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/utils/cn.utils";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title: {
    default : "Rody Huancas | Full Stack Developer",
    template: "%s | Rody Huancas"
  },
  description : "Portfolio profesional de Rody Huancas, especializado en React, Next.js y TypeScript.",
  keywords    : ["Rody Huancas", "Full Stack Developer", "Next.js Portfolio", "Desarrollador Web Perú"],
  authors     : [{ name: "Rody Huancas" }],
  creator     : "Rody Huancas",
  metadataBase: new URL("https://rody-huancas.dev"),
  openGraph   : {
    type       : "website",
    locale     : "es_ES",
    url        : "https://rody-huancas.dev",
    title      : "Rody Huancas | Full Stack Developer",
    description: "Explora mis proyectos y experiencia en desarrollo web moderno.",
    siteName   : "Rody Huancas Portfolio",
    images     : [
      {
        url   : "/logo.svg",
        width : 1200,
        height: 630,
        alt   : "Rody Huancas Portfolio",
      },
    ],
  },
  twitter: {
    card       : "summary_large_image",
    title      : "Rody Huancas | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en tecnologías modernas.",
    images     : ["/logo.svg"],
  },
  robots: {
    index : true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={cn("antialiased", dmSans.className)}>
        {children}
      </body>
    </html>
  );
}
