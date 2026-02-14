import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://decidel.app"),
  title: {
    default: "Decidel — AI-Powered Hacker News Client",
    template: "%s | Decidel",
  },
  description:
    "The smartest way to read Hacker News. AI-powered semantic filtering, thread summaries, and offline reading for iOS.",
  openGraph: {
    title: "Decidel — AI-Powered Hacker News Client",
    description:
      "Save 30+ minutes daily with Smart Mute, AI summaries, and offline reading bundles.",
    url: "https://decidel.app",
    siteName: "Decidel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@DecidelD91907",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
