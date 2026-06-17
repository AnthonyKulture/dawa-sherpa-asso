import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { HelloAssoEmbed } from '@/components/ui/HelloAssoEmbed';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'La boutique solidaire',
  description:
    "La boutique solidaire de l'association Parrains et Marraines pour le Népal : chaque achat finance les projets dans la vallée du Solukumbu.",
  alternates: { canonical: '/boutique' },
};

export default function BoutiquePage() {
  return (
    <>
      <PageHeader
        eyebrow="La boutique solidaire"
        title={
          <>
            Chaque achat{' '}
            <em className="font-light not-italic text-accent-deep [font-style:italic]">
              soutient un projet
            </em>{' '}
            au Népal.
          </>
        }
        lede="Faites un geste utile et repartez avec un objet qui a du sens : l'intégralité des bénéfices de la boutique finance la scolarité, le foyer pour aînés, le dispensaire et la reconstruction."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <HelloAssoEmbed
                src={siteConfig.helloAsso.boutique.widget}
                title="Boutique solidaire — Parrains et Marraines pour le Népal (HelloAsso)"
              />
            </Reveal>

            <Reveal>
              <p className="mt-4 text-center text-[13px] leading-relaxed text-text-2">
                La boutique ne s&apos;affiche pas ?{' '}
                <a
                  href={siteConfig.helloAsso.boutique.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm font-medium text-text underline decoration-accent-deep underline-offset-2 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Ouvrir la boutique sur HelloAsso
                  <span className="sr-only"> (nouvel onglet)</span> →
                </a>
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-6 text-center text-[13.5px] leading-relaxed text-text-2">
                Paiement 100&nbsp;% sécurisé via HelloAsso. Vous préférez soutenir l&apos;association
                autrement ?{' '}
                <Link
                  href="/faire-un-don"
                  className="rounded-sm font-medium text-text underline decoration-accent-deep underline-offset-2 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Faire un don
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
