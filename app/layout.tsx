import type { Metadata } from "next";
import { Geist, Geist_Mono } from "geist/font";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html 
      lang="fr" 
      suppressHydrationWarning
      className={cn(
        "scroll-smooth",
        geist.variable,
        geistMono.variable
      )}
    >
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
