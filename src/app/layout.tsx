import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google'

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'ar-SA' }]
}

type LayoutProps = Promise<{
  lang: "en-US" | "ar-SA";
}>;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Cloud Storage Calculator',
    default: 'Cloud Storage Calculator - Compare S3-Compatible Storage Costs'
  },
  description: 'Compare pricing across major object storage providers. Calculate storage, traffic, and operation costs.',
  manifest: '/ts_next_s3_providers_comparison/site.webmanifest',
  icons: {
    icon: '/ts_next_s3_providers_comparison/favicon.ico',
    apple: '/ts_next_s3_providers_comparison/apple-touch-icon.png'
  },
  metadataBase: new URL('https://degree-0.github.io/ts_next_s3_providers_comparison')
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: LayoutProps;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={lang === "ar-SA" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Cloud Storage Pricing Calculator",
              "description": "Compare pricing across major object storage providers",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Compare storage costs across providers",
                "Calculate traffic costs",
                "Estimate API operation costs",
                "Support for multiple currencies",
                "Real-time cost updates"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-zinc-200 dark:bg-zinc-950 ${inter.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
