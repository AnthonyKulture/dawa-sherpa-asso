import type { Metadata, Viewport } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MotionProvider } from '@/components/ui/MotionProvider';
import { siteConfig } from '@/config/site';
import './globals.css';

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Parrains et Marraines pour le Népal — Au pied de l'Everest",
    template: '%s · Parrains et Marraines pour le Népal',
  },
  description:
    "Fondée en 2007 par Dawa Dachhiri Sherpa, l'association soutient les villages de Taksindu et Chhulemu dans la vallée du Solukumbu : scolarité, grand âge, santé, rénovation des centres.",
  applicationName: 'Parrains et Marraines pour le Népal',
  authors: [{ name: 'Parrains et Marraines pour le Népal' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Parrains et Marraines pour le Népal',
    title: "Parrains et Marraines pour le Népal — Au pied de l'Everest",
    description:
      'Solidarité au Népal depuis 2007. Soutenez la scolarité, le grand âge, la santé et la rénovation des centres dans la vallée du Solukumbu.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Le village de Taksindu, vallée du Solukumbu, Népal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Parrains et Marraines pour le Népal — Au pied de l'Everest",
    description:
      'Solidarité au Népal depuis 2007. Soutenez la scolarité, le grand âge, la santé et la rénovation des centres dans la vallée du Solukumbu.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Données structurées (knowledge graph). NGO = sous-type Organization de schema.org.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/DawaSherpa_asso_Logook.svg`,
  image: `${siteConfig.url}/og-image.jpg`,
  description: siteConfig.description,
  foundingDate: '2007',
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phones[0],
  areaServed: 'Népal',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.street,
    postalCode: siteConfig.contact.address.postalCode,
    addressLocality: siteConfig.contact.address.city,
    addressCountry: 'FR',
  },
  sameAs: [siteConfig.socials.facebook],
};

const jsonLd = JSON.stringify(organizationJsonLd);

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${newsreader.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD statique (siteConfig, aucune entrée utilisateur) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-text focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-bg focus:shadow-lg"
        >
          Aller au contenu
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
