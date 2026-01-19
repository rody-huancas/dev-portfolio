import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/utils/cn.utils";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title      : "Rody Huancas",
  description: "Portfolio profesional de Rody Huancas, desarrollador Full Stack especializado en tecnologías modernas como React, Next.js, NestJs y TypeScript. Explora mis proyectos y experiencia en desarrollo web.",
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
