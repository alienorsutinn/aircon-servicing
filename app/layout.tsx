import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Service Cost Checker Malaysia – Check Typical Prices Before You Book",
  description: "Check typical costs for home services in Malaysia. Focused price ranges for aircon, plumbing, and electrical services in Klang Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
