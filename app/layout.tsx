import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Label Technology — Partenaire Technologique Premium | Antananarivo",
    template: "%s | Label Technology",
  },
  description:
    "Label Technology : développement web & mobile, call center 50 postes FR/EN, marketing digital, digitalisation, traitement de données. Depuis Antananarivo, pour la France et l'Afrique.",
  keywords: [
    "Label Technology",
    "call center Madagascar",
    "développement web Madagascar",
    "marketing digital Madagascar",
    "externalisation Madagascar",
    "ERP Madagascar",
    "traitement données Madagascar",
    "Antananarivo tech",
  ],
  authors: [{ name: "Label Technology", url: "https://labeltechnology.mg" }],
  creator: "Label Technology",
  publisher: "Label Technology",
  metadataBase: new URL("https://labeltechnology.mg"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://labeltechnology.mg",
    siteName: "Label Technology",
    title: "Label Technology — Partenaire Technologique Premium",
    description:
      "Call center 50P, développement web, marketing digital, ERP. Depuis Antananarivo, avec l'exigence d'un partenaire européen.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Label Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Label Technology — Partenaire Technologique Premium",
    description:
      "Call center 50P, développement web, marketing digital, ERP. Depuis Antananarivo.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
