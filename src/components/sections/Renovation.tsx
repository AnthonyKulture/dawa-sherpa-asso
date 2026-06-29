import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

const renovStats = [
  { num: '7', label: 'centres en cours de rénovation' },
  { num: '+', label: "d'autres chantiers à venir", accent: true },
];

export function Renovation() {
  return (
    <section id="renovation" className="bg-bg-soft py-20 md:py-[120px]">
      <Container>
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>Nos chantiers</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 mb-6 font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.08] tracking-[-0.02em]">
                Sept centres en cours de{' '}
                <em className="font-light not-italic text-accent-deep [font-style:italic]">
                  rénovation
                </em>
                , et d&apos;autres à venir.
              </h2>
            </Reveal>
            <div className="space-y-4 max-w-[540px] text-base leading-[1.72] text-[#4A4239]">
              <Reveal delay={0.16}>
                <p>
                  L&apos;association rénove aujourd&apos;hui sept centres dans la vallée, et
                  d&apos;autres chantiers suivront — pour améliorer durablement les lieux qui
                  accueillent enfants et aînés.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p>
                  Parmi les travaux en cours&nbsp;: de nouvelles installations sanitaires pour le
                  pensionnat, afin d&apos;offrir aux enfants de meilleures conditions au quotidien.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                {renovStats.map((s) => (
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
                alt="Travaux de rénovation dans la vallée du Solukumbu"
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
