import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PavitraBhakti | Pure Sacred Pooja Samagri & Divine Essentials",
  description: "Buy 100% Pure, Organic & Blessed Sampoorna Pooja Kits, Pure Brassware, Diya, Natural Dhoop, Agarbatti, Ganga Jal & Divine Murtis delivered directly to your doorstep.",
  keywords: ["pooja samagri online", "pooja kit", "brass diya", "dhoop agarbatti", "navratri pooja thali", "pavitra bhakti store"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className="antialiased bg-[#FFFDF7] text-[#2D241E]">
        {children}
      </body>
    </html>
  );
}
