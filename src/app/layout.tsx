import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ────────────────────────────────────────────
   SEO — Metadata
   ──────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://jpcabletray.com"),

  title: {
    default:
      "Cable Tray Manufacturer in Delhi NCR | JP Electrical & Controls",
    template: "%s | JP Electrical & Controls",
  },

  description:
    "Leading cable tray manufacturer and supplier in Delhi NCR. We offer perforated GI cable trays, powder-coated trays, cable ladders, raceways, and GI ladder trays. ISO 9001:2015 certified.",

  keywords: [
    "electrical cable tray",
    "cable tray supplier",
    "electrical cable tray manufacturers",
    "fiberglass cable tray manufacturers",
    "perforated cable tray suppliers",
    "cable tray manufacturer in india",
    "cable tray vendors",
    "cable tray manufacturer in delhi",
    "cable tray shop near me",
    "cable tray manufacturer in ghaziabad",
    "cable tray dealer",
    "cable tray near me",
    "cable tray dealers near me",
    "cable tray manufacturer in gurgaon",
    "cable tray manufacturer in greater noida",
    "cable tray price",
    "hot dip galvanized cable tray",
    "cable tray manufacturers near me",
    "raceway cable tray",
    "cable tray manufacturer in noida",
    "cable ladder supplier",
    "cable tray cable ladder",
    "cable tray manufacturer",
    "cable trays and raceways",
    "gi tray",
    "gi cable tray manufacturer",
    "cable tray distributors",
    "cable tray manufacturer in faridabad",
    "cable tray suppliers near me",
    "cable tray manufacturing company",
    "cable tray",
    "perforated cable trays",
    "ladder type cable tray",
    "gi cable tray",
    "gi perforated cable tray",
    "perforated gi cable tray",
    "powder coated cable tray",
    "cable tray supplier in delhi",
    "cable tray gi perforated",
    "cable dealer in delhi",
    "cable tray installation near me",
    "Cable Tray Manufacturing",
    "Walkway Manufacturer",
    "Walkway Cable Tray",
    "GI Perforated Cable Tray Manufacturer",
    "GI Perforated Tray",
    "Powder Coated Raceway",
    "Powder Coated Perforated Cable Tray",
    "Cable Trays & Raceways",
    "Cable Ladder Raceway",
    "Raceway Manufacturer",
    "GI Raceway",
    "Cable Tray Supplier Near Me",
    "Cable Ladder Manufacturer",
    "Ladder Cable Tray",
    "Cable Ladder Price",
    "GI Ladder Type Cable Tray",
    "Hot Dip Galvanized Perforated Cable Tray",
    "Cable Ladder Hot Dip Galvanized",
    "Hot Dip Cable Tray",
    "Hot Dipped Galvanized Cable Tray",
    "Cable Tray Distributor",
    "Ladder Cable Tray Supplier",
  ],

  authors: [{ name: "JP Electrical & Controls" }],

  creator: "JP Electrical & Controls",

  publisher: "JP Electrical & Controls",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  alternates: {
    canonical: "https://jpcabletray.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jpcabletray.com",
    siteName: "JP Electrical & Controls – Trusted Cable Tray Manufacturer in India",
    title: "Cable Tray Manufacturer in Delhi NCR | JP Electrical & Controls",
    description:
      "Leading cable tray manufacturer and supplier in Delhi NCR. Perforated GI cable trays, powder-coated trays, cable ladders, raceways, and GI ladder trays.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JP Electrical & Controls – Cable Tray Manufacturer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cable Tray Manufacturer in Delhi NCR | JP Electrical & Controls",
    description:
      "Leading cable tray manufacturer and supplier in Delhi NCR. Perforated GI cable trays, powder-coated trays, cable ladders, raceways.",
    images: ["/og-image.jpg"],
  },

  verification: {
    // Add Google Search Console verification if available
    // google: "your-verification-code",
  },

  category: "Industrial Manufacturing",
};

/* ────────────────────────────────────────────
   JSON-LD Structured Data
   ──────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jpcabletray.com/#organization",
      name: "JP Electrical & Controls",
      url: "https://jpcabletray.com",
      logo: {
        "@type": "ImageObject",
        url: "https://jpcabletray.com/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7836870201",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "J-80, Site-C, Surajpur Industrial Area",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201306",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/jpelectricalcontrols",
        "https://www.instagram.com/jpelectricalcontrols",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jpcabletray.com/#website",
      url: "https://jpcabletray.com",
      name: "JP Electrical & Controls – Trusted Cable Tray Manufacturer in India",
      description: "Expertly Engineered Cable Trays for Every Industry",
      publisher: { "@id": "https://jpcabletray.com/#organization" },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://jpcabletray.com/?s={search_term_string}",
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "search_term_string",
        },
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://jpcabletray.com/#webpage",
      url: "https://jpcabletray.com",
      name: "Cable Tray Manufacturer in Delhi NCR | JP Electrical & Controls",
      isPartOf: { "@id": "https://jpcabletray.com/#website" },
      about: { "@id": "https://jpcabletray.com/#organization" },
      description:
        "Leading cable tray manufacturer and supplier in Delhi NCR. We offer perforated GI cable trays, powder-coated trays, cable ladders, raceways, and GI ladder trays.",
      inLanguage: "en-IN",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://jpcabletray.com/#localbusiness",
      name: "JP Electrical & Controls",
      image: "https://jpcabletray.com/og-image.jpg",
      url: "https://jpcabletray.com",
      telephone: "+91-7836870201",
      email: "sales@jpelectricalcontrols.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "J-80, Site-C, Surajpur Industrial Area",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201306",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.5355,
        longitude: 77.3910,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    },
  ],
};

/* ────────────────────────────────────────────
   Layout Component
   ──────────────────────────────────────────── */
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
      <head>
        {/* ── Favicon ── */}
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />

        {/* ── Google Tag Manager ── */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P6VDBRLF');
            `,
          }}
        />

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {/* ── GTM noscript fallback ── */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6VDBRLF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
