import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Bientôt disponible',
  description:
    "Le tunnel de don, de parrainage et d'adhésion arrive très prochainement. Contactez-nous en attendant.",
  robots: { index: false, follow: false },
};

export default function BientotPage() {
  return (
    <Section paddingY="lg" className="flex min-h-[calc(100svh-200px)] items-center">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Pill dot>Bientôt en ligne</Pill>
          <h1 className="mt-6 font-display text-[clamp(34px,4vw,52px)] font-light leading-[1.1] tracking-[-0.02em] text-text">
            Le tunnel de soutien{' '}
            <em className="font-light not-italic text-accent-deep [font-style:italic]">
              arrive très prochainement
            </em>
            .
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-text-2">
            En attendant la mise en ligne du paiement sécurisé, vous pouvez nous contacter
            directement pour faire un don, parrainer un enfant ou rejoindre l&apos;association. Nous
            vous répondrons sous 48&nbsp;heures.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={`mailto:${siteConfig.contact.email}?subject=Soutenir l'association`}
              variant="accent"
            >
              Nous écrire
            </Button>
            <Button href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, '')}`} variant="ghost">
              Nous appeler
            </Button>
          </div>
          <p className="mt-12 text-xs uppercase tracking-[0.08em] text-text-3">
            {siteConfig.contact.email} · {siteConfig.contact.phones[0]}
          </p>
        </div>
      </Container>
    </Section>
  );
}
