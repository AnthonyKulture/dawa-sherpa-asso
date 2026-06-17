import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { HelloAssoEmbed } from '@/components/ui/HelloAssoEmbed';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Faire un don',
  description:
    "Soutenez l'association Parrains et Marraines pour le Népal : don ponctuel ou régulier, paiement sécurisé via HelloAsso. Scolarité, grand âge, santé, reconstruction.",
  alternates: { canonical: '/faire-un-don' },
};

export default function FaireUnDonPage() {
  return (
    <>
      <PageHeader
        eyebrow="Soutenir l'association"
        title={
          <>
            Votre don,{' '}
            <em className="font-light not-italic text-accent-deep [font-style:italic]">
              une vie qui change
            </em>{' '}
            dans la vallée.
          </>
        }
        lede="Chaque contribution finance directement la scolarité des enfants, le foyer pour aînés, le dispensaire et la reconstruction à Taksindu et Chhulemu. Don ponctuel ou régulier, en quelques secondes."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <HelloAssoEmbed
                src={siteConfig.helloAsso.don.widget}
                title="Formulaire de don — Parrains et Marraines pour le Népal (HelloAsso)"
              />
            </Reveal>

            <Reveal>
              <p className="mt-4 text-center text-[13px] leading-relaxed text-text-2">
                Le formulaire ne s&apos;affiche pas&nbsp;?{' '}
                <a
                  href={siteConfig.helloAsso.don.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm font-medium text-text underline decoration-accent-deep underline-offset-2 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Ouvrir le formulaire sur HelloAsso
                  <span className="sr-only"> (nouvel onglet)</span>
                  <span aria-hidden="true"> →</span>
                </a>
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-6 text-center text-[13.5px] leading-relaxed text-text-2">
                Paiement 100&nbsp;% sécurisé via HelloAsso, la solution de paiement des
                associations. Vous recevez votre confirmation et votre justificatif par courriel.
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-8 rounded-3xl border border-border bg-bg-soft px-7 py-6 text-center text-[14.5px] leading-relaxed text-text-2 sm:px-8">
                Vous souhaitez plutôt{' '}
                <Link
                  href="/adherer"
                  className="rounded-sm font-medium text-text underline decoration-accent-deep underline-offset-2 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-soft"
                >
                  adhérer à l&apos;association
                </Link>
                &nbsp;? Pour <strong className="font-medium text-text">parrainer un enfant</strong>{' '}
                (600&nbsp;€ par an), accompagnement personnalisé&nbsp;:{' '}
                <Link
                  href="/contact"
                  className="rounded-sm font-medium text-text underline decoration-accent-deep underline-offset-2 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-soft"
                >
                  contactez-nous
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
