import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyEnquire } from "@/components/sticky-enquire";
import { WhatsappButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site-data";
import "./globals.css";

const TITLE = "NEET Coaching with Hostel in Kannad, Aurangabad | Jamia Umer Bin Khattab NEET Academy";
const DESCRIPTION =
  "Residential NEET coaching in Kannad, Maharashtra with separate classes and hostel facilities for boys and girls, a secure campus, and a Deeni Mahaul. Batches for 11th, 12th, and Repeaters.";
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (vercelProductionUrl ? `https://${vercelProductionUrl}` : site.url);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: TITLE,
    template: `%s | ${site.name}`
  },
  description: DESCRIPTION,
  keywords: [
    "NEET coaching Kannad",
    "residential NEET academy Aurangabad",
    "NEET coaching with hostel Maharashtra",
    "Islamic NEET academy Marathwada",
    "NEET coaching Kunjkheda",
    "Jamia Umer Bin Khattab"
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: siteUrl,
    siteName: site.name,
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: siteUrl,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jamia Kunjkheda Campus",
    addressLocality: "Kannad",
    addressRegion: "Maharashtra",
    addressCountry: "IN"
  },
  areaServed: "Maharashtra, India",
  openingHours: "Mo-Sa 09:30-17:30"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SiteHeader />
        <div className="pb-16 md:pb-0">{children}</div>
        <SiteFooter />
        <WhatsappButton />
        <StickyEnquire />
      </body>
    </html>
  );
}
