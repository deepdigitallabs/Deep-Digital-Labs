import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
  title: "Custom Software & SaaS Development Company in Pune | Deep Digital Labs",
  description: "Deep Digital Labs builds high-performance custom software, mobile apps, and SaaS platforms for Indian businesses. 100% code ownership, direct developer access, and Pune-based engineering.",
  keywords: [
    "SaaS development company India",
    "custom web app developers",
    "mobile app development agency",
    "Next.js developers Pune",
    "Flutter app development India",
    "startup MVP engineering",
    "multi-tenant SaaS architecture"
  ],
  authors: [{ name: "Deep Digital Labs" }],
  openGraph: {
    title: "Deep Digital Labs | Engineering Scalable SaaS & Digital Products",
    description: "Built in Pune, Deployed Worldwide. High-performance SaaS, Web, and Mobile engineering for global startups.",
    url: "https://deepdigitallabs.com",
    siteName: "Deep Digital Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Digital Labs | Scalable SaaS & Digital Products",
    description: "Built in Pune, Deployed Worldwide. High-performance SaaS, Web, and Mobile engineering.",
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
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ddl_theme_choice');
                  // Primary colour is LIGHT by default for all users
                  var theme = (saved === 'dark') ? 'dark' : 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col selection:bg-[#D4FF00] selection:text-black transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
