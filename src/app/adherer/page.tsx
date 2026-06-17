import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { HelloAssoEmbed } from '@/components/ui/HelloAssoEmbed';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Devenir adhérent',
  description:
    "Rejoignez l'association Parrains et Marraines pour le Népal : l'adhésion vous permet de participer activement à la vie de l'association. Inscription sécurisée via HelloAsso.",
  alternates: { canonical: '/adherer' },
};

export default function AdhererPage() {
  return (
    <>
      <PageHeader
        eyebrow="Devenir adhérent"
        title={
          <>
            Rejoignez{' '}
            <em className="font-light not-italic text-accent-deep [font-style:italic]">
              l&apos;association
            </em>
            .
          </>
        }
        lede="L'adhésion s'étend sur une année civile et vous ouvre les portes de la vie de l'association : participez aux initiatives, suivez les projets de près et soutenez durablement la vallée du Solukumbu."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <HelloAssoEmbed
                src={siteConfig.helloAsso.adhesion.widget}
                title="Formulaire d'adhésion — Parrains et Marraines pour le Népal (HelloAsso)"
              />
            </Reveal>

            <Reveal>
              <p className="mt-4 text-center text-[13px] leading-relaxed text-text-2">
                Le formulaire ne s&apos;affiche pas&nbsp;?{' '}
                <a
                  href={siteConfig.helloAsso.adhesion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm font-medium text-text underline decoration-accent-deep underline-offset-2 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Adhérer sur HelloAsso
                  <span className="sr-only"> (nouvel onglet)</span>
                  <span aria-hidden="true"> →</span>
                </a>
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-6 text-center text-[13.5px] leading-relaxed text-text-2">
                Inscription 100&nbsp;% sécurisée via HelloAsso. Vous préférez simplement{' '}
                <Link
                  href="/faire-un-don"
                  className="rounded-sm font-medium text-text underline decoration-accent-deep underline-offset-2 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  faire un don
                </Link>
                &nbsp;?
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
