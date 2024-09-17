import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://riahy.com"),
  alternates: {
    canonical: "https://riahy.com",
  },
  title: "Kourosh Riahidehkordi",
  description:
    "A programmer interested in creating software, video games and simulations.",
  keywords:
    "Kourosh Riahidehkordi Software Engineer Game Development Simulation Software Mixed Reality Virtual Reality (VR) Augmented Reality (AR) Unreal Engine Unity",
  openGraph: {
    locale: "en_US",
    siteName: "Kourosh Riahidehkordi",
    type: "website",
    title: "Kourosh Riahidehkordi",
    description:
      "Kourosh Riahidehkordi is a programmer interested in creating software, video games and simulations.",
    url: "https://riahy.com",
    images: [
      {
        url: "./k.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kourosh Riahidehkordi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
