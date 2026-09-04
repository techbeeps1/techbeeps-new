import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, SITE_URL } from "@/lib/seo-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TechBeeps Services | Custom Software, Web & Mobile App Development",
    template: "%s | TechBeeps Services",
  },
  description:
    "TechBeeps is a premier software development & IT consulting agency delivering high-performance web applications, iOS/Android mobile apps, cloud architectures, and AI solutions.",
  keywords: [
    "TechBeeps",
    "TechBeeps Services",
    "Software Development Company",
    "Web Development Services",
    "Mobile App Development",
    "Next.js Development",
    "React Native Development",
    "AI Development Services",
    "Cloud Consulting",
    "UI UX Design Agency",
  ],
  authors: [{ name: "TechBeeps Services", url: SITE_URL }],
  creator: "TechBeeps",
  publisher: "TechBeeps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechBeeps Services | Custom Software, Web & Mobile App Development",
    description:
      "Transform your business with cutting-edge web development, mobile applications, cloud engineering, and AI digital transformation services.",
    url: SITE_URL,
    siteName: "TechBeeps Services",
    images: [
      {
        url: "/services-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps Services Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBeeps Services | Software & App Development",
    description:
      "Premier software engineering and AI digital transformation services.",
    images: ["/services-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WEBSITE_SCHEMA),
          }}
        />
      </head>
      <body className={`${roboto.variable} ${roboto.className} min-h-screen flex flex-col font-sans`}>       
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8Z2S4P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>      
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8Z2S4P');`,
          }}
        />       
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9TCQ4CH4KS"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9TCQ4CH4KS');
            `,
          }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}