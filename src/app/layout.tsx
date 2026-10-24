import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepdigitallabs.com"),
  title: "Deep Digital Labs | Website & Software Development Company in Pune",
  description: "Deep Digital Labs builds high-speed websites, custom business software, ERPs, and mobile apps for businesses in Pune. Simple process, 2 to 3 weeks delivery, direct developer access.",
  authors: [{ name: "Deepak Dukare", url: "https://deepdigitallabs.com" }],
  alternates: {
    canonical: "https://deepdigitallabs.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Deep Digital Labs | Website & Software Development Company in Pune",
    description: "Deep Digital Labs builds high-speed websites, custom business software, ERPs, and mobile apps for businesses in Pune. Simple process, 2 to 3 weeks delivery, direct developer access.",
    url: "https://deepdigitallabs.com",
    siteName: "Deep Digital Labs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deep Digital Labs - Website & Software Development Company in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Digital Labs | Website & Software Development Company in Pune",
    description: "Websites, custom software, ERPs, and mobile apps engineered for growing businesses in Pune. 100% code ownership.",
    creator: "@deepdigitallabs",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`} data-theme="light">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col selection:bg-[#E8623C] selection:text-white transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
