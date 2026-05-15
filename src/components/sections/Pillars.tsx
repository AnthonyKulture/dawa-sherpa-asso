import {
  type Icon,
  IconHeartHandshake,
  IconSchool,
  IconStethoscope,
  IconTools,
} from '@tabler/icons-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger, RevealStaggerItem } from '@/components/ui/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';

type Pillar = {
  num: string;
  icon: Icon;
  title: string;
  body: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    num: '01',
    icon: IconSchool,
    title: 'Enfance & scolarité',
    body: "Permettre à chaque enfant une éducation solide, quel que soit son contexte familial ou financier. Soutien direct aux familles et à l'école du village.",
    href: '#histoire',
  },
  {
    num: '02',
    icon: IconHeartHandshake,
    title: 'Grand âge',
    body: 'Un foyer chaleureux au cœur du village pour les aînés. Autonomie préservée, dignité, transmission intergénérationnelle au quotidien.',
    href: '#histoire',
  },
  {
    num: '03',
    icon: IconStethoscope,
    title: 'Santé',
    body: "Le dispensaire de Taksindu, ouvert en 2012 sous l'impulsion de Pascal Zellner, dessert toute la vallée. Soins essentiels, prévention, urgences.",
    href: '#reconstruction',
  },
  {
    num: '04',
    icon: IconTools,
    title: 'Reconstruction',
    body: "Après le séisme d'avril 2015, 33 maisons reconstruites ou réparées dans le village. Il reste 5 maisons à bâtir.",
    href: '#reconstruction',
  },
];

export function Pillars() {
  return (
    <section id="actions" className="border-y border-border bg-bg-surface py-20 md:py-[120px]">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Nos engagements"
            title={
              <>
                Quatre piliers pour soutenir{' '}
                <em className="font-light not-italic text-accent-deep [font-style:italic]">
                  durablement
                </em>{' '}
                la vallée.
              </>
            }
            lede="Chacun de ces axes répond à un besoin identifié sur le terrain, en concertation avec les communautés du Solukumbu."
          />
        </Reveal>

        <RevealStagger className="grid gap-5 md:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <RevealStaggerItem key={p.title}>
                <article className="group relative rounded-3xl border border-border bg-bg p-8 transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_28px_56px_-32px_rgba(43,39,36,0.18)] md:p-10">
                  <span className="absolute right-8 top-6 font-display text-sm italic text-text-3">
                    {p.num}
                  </span>
                  <div className="mb-6 flex size-14 items-center justify-center rounded-[18px] border border-border bg-bg-surface">
                    <Icon size={26} className="text-accent-deep" aria-hidden />
                  </div>
                  <h3 className="mb-3.5 font-display text-2xl font-normal tracking-[-0.015em] text-text">
                    {p.title}
                  </h3>
                  <p className="mb-6 text-sm leading-[1.65] text-text-2">{p.body}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text"
                  >
                    En savoir plus{' '}
                    <span
                      aria-hidden
                      className="inline-block text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </article>
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
