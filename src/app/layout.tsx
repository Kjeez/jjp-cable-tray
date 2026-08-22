import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cable Tray Manufacturer in Delhi NCR | JP Electrical & Controls",
  description:
    "Leading cable tray manufacturer and supplier in Delhi NCR. We offer perforated GI cable trays, powder-coated trays, cable ladders, raceways, and GI ladder trays.",
  keywords:
    "cable tray, cable tray manufacturer, cable tray supplier, GI cable tray, perforated cable tray, ladder cable tray, raceway, Delhi NCR",
  openGraph: {
    title: "Cable Tray Manufacturer in Delhi NCR | JP Electrical & Controls",
    description:
      "Leading cable tray manufacturer and supplier in Delhi NCR. Perforated GI cable trays, powder-coated trays, cable ladders, raceways.",
    type: "website",
    url: "https://jpcabletray.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
