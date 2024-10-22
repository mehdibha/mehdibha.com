import type { Metadata } from "next";
import "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site-config";
import { truncateOnWord } from "@/lib/string";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: `%s - ${siteConfig.name}` },
  description: truncateOnWord(siteConfig.description, 148, true),
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: truncateOnWord(siteConfig.description, 148, true),
    siteName: siteConfig.name,
    images: [siteConfig.thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: truncateOnWord(siteConfig.description, 148, true),
    images: [siteConfig.thumbnail],
    creator: siteConfig.twitter.creator,
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Analytics />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
