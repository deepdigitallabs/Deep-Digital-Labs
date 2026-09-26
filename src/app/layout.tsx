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
  title: "Deep Digital Labs | Website Development Company in Pune",
  description: "Deep Digital Labs builds websites, apps and online stores for businesses in Pune. Simple process, fast delivery, direct developer access. Get a free consultation.",
  keywords: [
    "Website Development Company in Pune",
    "web development company Pune",
    "web design company Pune",
    "app development company Pune",
    "small business website Pune",
    "e-commerce website development Pune",
    "Next.js developers Pune",
    "Flutter mobile apps Pune",
    "custom software development Pune",
    "SEO services Pune"
  ],
  authors: [{ name: "Deep Digital Labs" }],
  openGraph: {
    title: "Deep Digital Labs | Website Development Company in Pune",
    description: "Deep Digital Labs builds websites, apps and online stores for businesses in Pune. Simple process, fast delivery, direct developer access. Get a free consultation.",
    url: "https://deepdigitallabs.com",
    siteName: "Deep Digital Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Digital Labs | Website Development Company in Pune",
    description: "Deep Digital Labs builds websites, apps and online stores for businesses in Pune. Simple process, fast delivery, direct developer access.",
    creator: "@deepdigitallabs",
  },
  metadataBase: new URL("https://deepdigitallabs.com"),
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
