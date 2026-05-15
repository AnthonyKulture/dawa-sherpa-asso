import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonial() {
  return (
    <section id="temoignage" className="bg-bg-soft py-20 md:py-[140px]">
      <Container>
        <div className="grid items-center gap-12 md:gap-20 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/testimonial.webp"
                alt="Dawa Dachhiri Sherpa lors d'une visite dans la vallée du Solukumbu"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_30%]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Témoignage</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <span
                aria-hidden
                className="mt-3 block font-display text-[96px] font-light italic leading-[0.6] text-accent"
              >
                «
              </span>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mb-9 max-w-[660px] font-display text-[clamp(24px,2.8vw,36px)] font-light leading-[1.35] tracking-[-0.015em] text-text">
                Au nom des villageois, ma plus{' '}
                <em className="font-light italic text-accent-deep">profonde gratitude</em>. Sans
                vous, les nouvelles maisons ne se dresseraient pas fièrement aujourd&apos;hui dans
                la vallée.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="flex items-center gap-4">
                <div
                  aria-hidden
                  className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-terra font-display text-base text-white"
                >
                  DS
                </div>
                <div>
                  <div className="text-sm font-medium text-text">Dawa Dachhiri Sherpa</div>
                  <div className="mt-0.5 text-xs text-text-2">
                    Fondateur · Retour du chantier, 2023
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
