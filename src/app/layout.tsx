import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marinepineau.pro'),
  title: "Marine Pineau | Facilitatrice de Coopération",
  description:
    "J'accompagne les managers et les équipes pour mieux travailler ensemble. Formations, ateliers, coaching d'équipe et séminaires.",
  keywords: [
    "Facilitation",
    "Coopération",
    "Management",
    "Équipe",
    "Formation",
    "Ateliers",
    "Coaching",
    "Marine Pineau",
    "Qualité de vie au travail",
    "RSE",
  ],
  authors: [{ name: "Marine Pineau" }],
  creator: "Marine Pineau",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://marinepineau.pro",
    title: "Marine Pineau | Facilitatrice de Coopération",
    description:
      "J'accompagne les managers et les équipes pour mieux travailler ensemble.",
    siteName: "Marine Pineau",
    images: [
      {
        url: "/photo-marine.jpg",
        width: 800,
        height: 800,
        alt: "Marine Pineau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marine Pineau | Facilitatrice de Coopération",
    description:
      "J'accompagne les managers et les équipes pour mieux travailler ensemble.",
    images: ["/photo-marine.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marine Pineau',
    jobTitle: 'Facilitatrice de Coopération',
    url: 'https://marinepineau.pro',
    sameAs: [
      'https://www.linkedin.com/in/marine-pineau-61986127/'
    ],
    makesOffer: [
      {
        "@type": "Offer",
        "name": "Coaching d'équipe",
        "description": "Améliorer la communication, renforcer la cohésion et faire émerger des règles de fonctionnement partagées."
      },
      {
        "@type": "Offer",
        "name": "Formation Management Coopératif",
        "description": "Développer un leadership responsable et structurer une dynamique d'équipe efficace."
      },
      {
        "@type": "Offer",
        "name": "Ateliers de Prévention au Travail",
        "description": "Sensibiliser aux violences, comportements inappropriés et RPS."
      }
    ]
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased bg-marine-beige text-marine-text`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
