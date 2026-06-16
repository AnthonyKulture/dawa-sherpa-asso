import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

const reconStats = [
  { num: '10', label: 'reconstruites à neuf' },
  { num: '12', label: 'réparées entièrement' },
  { num: '5', label: 'restent à bâtir', accent: true },
];

export function Reconstruction() {
  return (
    <section id="reconstruction" className="bg-bg-soft py-20 md:py-[120px]">
      <Container>
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>Avril 2015 · L&apos;après-séisme</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 mb-6 font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.08] tracking-[-0.02em]">
                Plus de dix ans après,{' '}
                <em className="font-light not-italic text-accent-deep [font-style:italic]">
                  cinq maisons
                </em>{' '}
                restent à bâtir.
              </h2>
            </Reveal>
            <div className="space-y-4 max-w-[540px] text-base leading-[1.72] text-[#4A4239]">
              <Reveal delay={0.16}>
                <p>
                  Aux premières heures du séisme, des tôles et des toiles pour abriter les familles.
                  En juin 2015, le chantier de reconstruction commence — pierre par pierre, poutre
                  par poutre, avec les villageois eux-mêmes.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p>
                  Aujourd&apos;hui, les maisons se dressent fièrement d&apos;un étage et demi.
                  Toutes les familles ont reçu des tôles métalliques pour protéger personnes et
                  récoltes. Mais l&apos;effort n&apos;est pas terminé.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {reconStats.map((s) => (
                  <div key={s.label}>
                    <div
                      className={`font-display text-3xl font-normal tracking-[-0.02em] ${s.accent ? 'text-accent-deep' : 'text-text'}`}
                    >
                      {s.num}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.04em] text-text-2">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/reconstruction.webp"
                alt="Maison reconstruite après le séisme dans la vallée du Solukumbu"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
