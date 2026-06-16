import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Nos actions',
  description:
    "Scolarité, grand âge, santé et reconstruction : les quatre domaines d'action de l'association dans les villages de Taksindu et Chhulemu, au Népal.",
  alternates: { canonical: '/nos-actions' },
};

type Fact = { value: string; label: string; accent?: boolean };

type Pillar = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  paragraphs: string[];
  facts?: Fact[];
  stats?: Fact[];
  image?: string;
  imageAlt?: string;
};

const pillars: Pillar[] = [
  {
    id: 'scolarite',
    index: '01',
    eyebrow: 'Enfance & scolarité',
    title: (
      <>
        Donner à chaque enfant{' '}
        <em className="font-light not-italic text-accent-deep [font-style:italic]">
          le chemin de l&apos;école
        </em>
        .
      </>
    ),
    paragraphs: [
      "Dans la vallée du Solu, l'association finance les frais scolaires, le matériel et, pour certains enfants, les frais de pensionnat. Au pensionnat de Chhulemu, les enfants bénéficient d'un encadrement pédagogique structuré, assuré par des professeurs.",
      "Le parrainage individuel couvre les frais et le matériel de l'enfant, et inclut une aide à la famille pour compenser l'absence de l'enfant au travail.",
    ],
    facts: [
      { value: '600 €', label: 'par an et par enfant parrainé' },
      { value: '75', label: 'enfants accueillis au pensionnat depuis 2017' },
    ],
    image: '/images/project-school.webp',
    imageAlt: "Enfants de l'école de Taksindu, dans la vallée du Solukumbu",
  },
  {
    id: 'grand-age',
    index: '02',
    eyebrow: 'Grand âge',
    title: (
      <>
        Un foyer chaleureux{' '}
        <em className="font-light not-italic text-accent-deep [font-style:italic]">
          au cœur du village
        </em>
        .
      </>
    ),
    paragraphs: [
      "Inauguré en novembre 2019 après dix-huit mois de travaux, le Centre d'accueil pour personnes âgées de Taksindu offre à nos aînés un havre paisible, favorisant une vie autonome tout en leur apportant une assistance attentive au quotidien.",
      'Conçu pour le confort de ses résidents, il leur permet de vieillir dignement, entourés, au sein même de leur communauté.',
    ],
    stats: [
      { value: '2019', label: 'inauguration, après 18 mois de travaux' },
      { value: '18', label: 'pièces dédiées au confort des résidents' },
      { value: '20', label: 'aînés accueillis, de 67 à 99 ans' },
    ],
  },
  {
    id: 'sante',
    index: '03',
    eyebrow: 'Santé',
    title: (
      <>
        Le dispensaire,{' '}
        <em className="font-light not-italic text-accent-deep [font-style:italic]">
          accessible à toute la vallée
        </em>
        .
      </>
    ),
    paragraphs: [
      "Bâtiment délaissé découvert en 2008, le dispensaire de Taksindu a rouvert ses portes en avril 2012 sous l'impulsion de Pascal Zellner. Un infirmier y assure une présence quotidienne, sept jours sur sept.",
      "L'établissement prépare l'arrivée de la télémédecine, afin de se connecter à d'autres structures de santé de la région et d'élargir l'accès aux soins.",
    ],
    facts: [
      { value: '2012', label: 'réouverture du dispensaire' },
      { value: '7j/7', label: "présence d'un infirmier" },
    ],
    image: '/images/project-dispensary.webp',
    imageAlt: 'Le dispensaire de Taksindu',
  },
  {
    id: 'reconstruction',
    index: '04',
    eyebrow: 'Avril 2015 · Reconstruction',
    title: (
      <>
        Rebâtir,{' '}
        <em className="font-light not-italic text-accent-deep [font-style:italic]">
          pierre après pierre
        </em>
        , après le séisme.
      </>
    ),
    paragraphs: [
      "Au lendemain du séisme d'avril 2015, l'association a d'abord distribué tôles et toiles pour abriter les familles. Puis le chantier de reconstruction a commencé, mené avec les villageois eux-mêmes.",
      "Aujourd'hui, les maisons se dressent fièrement et toutes les familles ont reçu des tôles métalliques pour protéger personnes et récoltes. Mais cinq maisons restent à bâtir.",
    ],
    facts: [
      { value: '33', label: 'maisons reconstruites ou réparées' },
      { value: '5', label: 'maisons restent à bâtir', accent: true },
    ],
    image: '/images/reconstruction.webp',
    imageAlt: 'Maison reconstruite après le séisme dans la vallée du Solukumbu',
  },
];

function Facts({ facts }: { facts: Fact[] }) {
  return (
    <div
      className={cn(
        'mt-8 grid gap-6 border-t border-border pt-8',
        facts.length === 2 ? 'grid-cols-2' : 'grid-cols-3',
      )}
    >
      {facts.map((f) => (
        <div key={f.label}>
          <div
            className={cn(
              'font-display text-[clamp(28px,3vw,34px)] font-normal tracking-[-0.02em]',
              f.accent ? 'text-accent-deep' : 'text-text',
            )}
          >
            {f.value}
          </div>
          <div className="mt-1.5 text-[11px] uppercase leading-snug tracking-[0.04em] text-text-2">
            {f.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function NosActionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos actions"
        title={
          <>
            Quatre engagements,{' '}
            <em className="font-light not-italic text-accent-deep [font-style:italic]">
              une même vallée
            </em>
            .
          </>
        }
        lede="À Taksindu et Chhulemu, dans la vallée du Solukumbu à 280 km de Kathmandu, l'association agit sur quatre fronts complémentaires : la scolarité des enfants, l'accueil des aînés, l'accès aux soins et la reconstruction."
      />

      {/* Sommaire ancré vers chaque domaine */}
      <section className="border-b border-border py-12 md:py-16">
        <Container>
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`#${p.id}`}
                    className="group flex items-baseline gap-3 rounded-2xl border border-border bg-bg-surface px-5 py-4 transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:border-border-2 hover:shadow-[0_20px_40px_-28px_rgba(43,39,36,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    <span className="font-display text-2xl font-normal text-accent-deep">
                      {p.index}
                    </span>
                    <span className="text-[15px] font-medium text-text">{p.eyebrow}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {pillars.map((p, i) => {
        const visualLeft = i % 2 === 1;
        const content = (
          <div className={cn(visualLeft && 'lg:order-2')}>
            <Reveal>
              <Eyebrow>{p.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 mb-6 max-w-[560px] font-display text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08] tracking-[-0.02em] text-text">
                {p.title}
              </h2>
            </Reveal>
            <div className="max-w-[540px] space-y-4 text-[15.5px] leading-[1.75] text-[#4A4239]">
              {p.paragraphs.map((para, j) => (
                <Reveal key={para} delay={0.16 + j * 0.06}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
            {p.facts ? (
              <Reveal delay={0.3}>
                <Facts facts={p.facts} />
              </Reveal>
            ) : null}
          </div>
        );

        const visual = (
          <div className={cn(visualLeft && 'lg:order-1')}>
            <Reveal>
              {p.image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={p.image}
                    alt={p.imageAlt ?? ''}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : p.stats ? (
                <div className="rounded-3xl bg-bg-dark p-8 text-text-on-dark sm:p-10">
                  <div className="space-y-6">
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                      >
                        <div className="font-display text-[clamp(40px,5vw,56px)] font-normal leading-none tracking-[-0.02em] text-text-on-dark">
                          {s.value}
                        </div>
                        <p className="mt-2.5 text-[13.5px] leading-snug text-text-on-dark-2">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </Reveal>
          </div>
        );

        return (
          <section
            key={p.id}
            id={p.id}
            className={cn('scroll-mt-24 py-20 md:py-[120px]', visualLeft ? 'bg-bg-soft' : 'bg-bg')}
          >
            <Container>
              <div
                className={cn(
                  'grid items-center gap-12 md:gap-16 lg:gap-[72px]',
                  visualLeft ? 'lg:grid-cols-[1fr_1.05fr]' : 'lg:grid-cols-[1.05fr_1fr]',
                )}
              >
                {content}
                {visual}
              </div>
            </Container>
          </section>
        );
      })}

      <CTAFinal />
    </>
  );
}
