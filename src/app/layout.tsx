import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep Digital Labs | Next-Gen Digital Agency & Tech Studio",
  description: "Transforming ambitious visions into high-impact digital experiences with design excellence and cutting-edge engineering.",
  icons: {
    icon: "/next.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased bg-[#090b10] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
