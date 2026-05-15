import type { Metadata, Viewport } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
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
  metadataBase: new URL('https://www.dawasherpa-asso.org'),
  title: {
    default: "Parrains et Marraines pour le Népal — Au pied de l'Everest",
    template: '%s · Parrains et Marraines pour le Népal',
  },
  description:
    "Fondée en 2007 par Dawa Dachhiri Sherpa, l'association soutient les villages de Taksindu et Chhulemu dans la vallée du Solukumbu : scolarité, grand âge, santé, reconstruction.",
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
      'Solidarité au Népal depuis 2007. Soutenez la scolarité, le grand âge, la santé et la reconstruction dans la vallée du Solukumbu.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${newsreader.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
