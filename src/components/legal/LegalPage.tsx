import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, lede, updated, children }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lede={lede} />
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="legal-prose mx-auto max-w-3xl">{children}</div>
          </Reveal>
          <p className="mx-auto mt-14 max-w-3xl border-t border-border pt-6 text-xs uppercase tracking-[0.08em] text-text-2">
            Dernière mise à jour · {updated}
          </p>
        </Container>
      </section>
    </>
  );
}
