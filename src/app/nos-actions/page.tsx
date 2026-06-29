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
    "Scolarité, grand âge, santé et rénovation des centres : les quatre domaines d'action de l'association dans les villages de Taksindu et Chhulemu, au Népal.",
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
      "Dans la vallée du Solu, l'association finance les frais scolaires, le matériel et, pour certains enfants, les frais de pensionnat. Au pensionnat de Chhulemu, les enfants bénéficient d'un encadrement assuré par des professeurs dévoués, dont le niveau est reconnu comme l'un des meilleurs de la région.",
      "Le parrainage individuel (600 € par an) couvre les frais et le matériel de l'enfant et inclut une aide à la famille pour compenser son absence aux travaux. Un parrainage collectif soutient les enfants sans parrain individuel.",
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
      "Au cœur de Taksindu, le Centre d'accueil pour personnes âgées offre une alternative aux maisons familiales, où la fumée des feux de bois irrite poumons et yeux des aînés. Inauguré le 13 novembre 2019 après dix-huit mois de travaux, il leur permet de vivre en autonomie tout en bénéficiant d'une assistance attentive au quotidien.",
      'Financé en grande partie par les dons, il compte dix-huit pièces conçues pour le confort de ses résidents et leur permet de vieillir dignement, entourés, au sein même de leur communauté.',
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
      "En 2008, le Dr Pascal Zellner (IFREMMONT) découvre à Taksindu un bâtiment délaissé : un ancien dispensaire créé par une association allemande, fermé faute de financements. Avec Dawa, le village de Taksindu et le soutien de l'association Cap Chulemo, le dispensaire rouvre en avril 2012.",
      "Un infirmier y assure une présence sept jours sur sept pour les premiers soins. La mise en réseau avec Lukla (Fondation Nicole Niquille) et Phablu (Dr Mingma Sherpa) est en cours, et un projet de télémédecine doit élargir l'accès aux soins.",
    ],
    facts: [
      { value: '2012', label: 'réouverture du dispensaire' },
      { value: '7j/7', label: "présence d'un infirmier" },
    ],
    image: '/images/project-dispensary.webp',
    imageAlt: 'Le dispensaire de Taksindu',
  },
  {
    id: 'renovation',
    index: '04',
    eyebrow: 'Nos chantiers',
    title: (
      <>
        Rénover les centres,{' '}
        <em className="font-light not-italic text-accent-deep [font-style:italic]">
          au plus près des besoins
        </em>
        .
      </>
    ),
    paragraphs: [
      "L'association rénove aujourd'hui sept centres dans la vallée, et d'autres chantiers suivront — pour améliorer durablement les lieux qui accueillent enfants et aînés.",
      "Parmi les travaux en cours : de nouvelles installations sanitaires pour le pensionnat, afin d'offrir aux enfants de meilleures conditions au quotidien.",
    ],
    facts: [
      { value: '7', label: 'centres en cours de rénovation' },
      { value: '+', label: "d'autres chantiers à venir", accent: true },
    ],
    image: '/images/reconstruction.webp',
    imageAlt: 'Travaux de rénovation dans la vallée du Solukumbu',
  },
];

type NewsItem = { date?: string; title: string; body: string };
type NewsGroup = { id: string; heading: string; items: NewsItem[] };

const actualites: NewsGroup[] = [
  {
    id: 'evenements',
    heading: 'Événements',
    items: [
      {
        date: 'Octobre 2025',
        title: 'Un voyage à Taksindu pour trois jeunes Français',
        body: "Trois jeunes de 16 et 17 ans, accompagnés de trois éducateurs et d'un caméraman, ont effectué un voyage entièrement autofinancé. Objectif : leur faire découvrir un autre pays, sa population et sa nature. Ils ont passé une journée et une nuit au pensionnat — où ils ont apporté des jeux pour les enfants — puis une journée et une nuit à la maison des anciens, et ont parcouru la région à pied avec cinq jeunes du pensionnat. Le jour du départ fut un déchirement : ils n'ont qu'une envie, revenir.",
      },
      {
        date: 'Novembre 2025',
        title: 'Solukumbu Trail',
        body: "L'association a de nouveau organisé le trail du Solukumbu, avec coureurs et marcheurs, qui ont pu découvrir le pensionnat et la maison des anciens.",
      },
      {
        title: 'En France et en Suisse',
        body: "Organisation d'une course à Meyrin (Suisse) et, en février 2026 à Thionville, projection du nouveau film sur l'association.",
      },
    ],
  },
  {
    id: 'pensionnat-actu',
    heading: 'Au pensionnat de Chhulemu',
    items: [
      {
        title: 'La vie du pensionnat',
        body: "Fin novembre 2025, dix enfants ont eu la grippe et sont rentrés dans leur famille ; tout le monde va bien aujourd'hui. En milieu d'année 2025, six enfants ont quitté le pensionnat pour d'autres écoles et dix-neuf ont poursuivi leur scolarité à Chhulemu. Comme le veut la tradition, Dawa a remis à chacun un khata (écharpe blanche) et un cadeau.",
      },
      {
        title: 'Parcours et rentrée',
        body: 'Soixante-quinze enfants ont été accueillis au pensionnat depuis son ouverture en 2017 ; la majorité poursuit des études supérieures (médecine, soins infirmiers, tourisme). La nouvelle année scolaire débutera fin avril 2026 : six nouveaux enfants doivent arriver, trois avec un parrain identifié et trois en parrainage collectif.',
      },
      {
        title: 'Une année de plus',
        body: "Dawa souhaite garder les enfants une année supplémentaire au pensionnat — ils rejoindraient d'autres écoles à treize ans. Un dossier a été déposé auprès du gouverneur de la région pour obtenir l'autorisation nécessaire.",
      },
    ],
  },
  {
    id: 'anciens-actu',
    heading: 'À la maison des anciens (Taksindu)',
    items: [
      {
        title: 'Les résidents',
        body: "Vingt aînés y vivent, âgés de 67 à 99 ans. Deux personnes ont été hospitalisées à Katmandou ; l'une doit revenir prochainement, le retour de la doyenne, plus fragile, reste incertain. Depuis 2019, deux résidents nous ont quittés.",
      },
      {
        title: 'Au quotidien',
        body: "L'aide-cuisinier engagé en mai 2024 est reparti pour raisons familiales ; il a été remplacé par une cuisinière, et tout se passe bien. Le groupe du Solukumbu Trail a partagé un repas avec les anciens, sur la terrasse haute de la maison.",
      },
    ],
  },
  {
    id: 'contexte-nepal',
    heading: 'Contexte au Népal',
    items: [
      {
        date: 'Septembre 2025',
        title: 'Un tournant politique',
        body: "D'importantes manifestations, menées par des étudiants et de jeunes citoyens contre la corruption et après le blocage des réseaux sociaux le 4 septembre, ont conduit à la démission du Premier ministre. Sushila Karki a assuré l'intérim dès le 12 septembre, devenant la première femme Première ministre du pays. Les élections du 5 mars 2026 se sont déroulées dans le calme : Balendra Shah, maire de Katmandou (35 ans), prend les rênes du pays.",
      },
      {
        date: 'Fin octobre 2025',
        title: 'Conditions climatiques',
        body: "Des conditions inhabituelles ont provoqué inondations et glissements de terrain autour de Katmandou, tandis que d'importantes chutes de neige bloquaient des trekkeurs plusieurs jours dans les régions de l'Everest et du Manaslu.",
      },
      {
        title: 'Nouvelles années',
        body: 'Le nouvel an tibétain (Sherpa Loshar 2153) a été célébré le 18 février 2026, et le nouvel an népalais (Nava Varsha 2083) le 14 avril 2026.',
      },
    ],
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
        lede="À Taksindu et Chhulemu, dans la vallée du Solukumbu à 280 km de Kathmandu, l'association agit sur quatre fronts complémentaires : la scolarité des enfants, l'accueil des aînés, l'accès aux soins et la rénovation des centres."
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

      <section
        id="actualites"
        className="scroll-mt-24 border-t border-border bg-bg py-20 md:py-[120px]"
      >
        <Container>
          <Reveal>
            <Eyebrow>Actualités</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 mb-4 max-w-[640px] font-display text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08] tracking-[-0.02em] text-text">
              Des nouvelles{' '}
              <em className="font-light not-italic text-accent-deep [font-style:italic]">
                de la vallée
              </em>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mb-14 max-w-[560px] text-[15.5px] leading-[1.7] text-text-2">
              Les temps forts récents de l&apos;association, au Népal comme en France.
            </p>
          </Reveal>

          <div className="space-y-14 md:space-y-16">
            {actualites.map((group) => (
              <div key={group.id}>
                <Reveal>
                  <h3 className="mb-6 font-display text-[22px] font-normal tracking-[-0.015em] text-text">
                    {group.heading}
                  </h3>
                </Reveal>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <Reveal key={item.title}>
                      <article className="h-full rounded-3xl border border-border bg-bg-surface p-7 sm:p-8">
                        {item.date ? (
                          <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.06em] text-accent-deep">
                            {item.date}
                          </span>
                        ) : null}
                        <h4 className="mb-2.5 font-display text-[19px] font-normal tracking-[-0.01em] text-text">
                          {item.title}
                        </h4>
                        <p className="text-[14.5px] leading-[1.65] text-text-2">{item.body}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
