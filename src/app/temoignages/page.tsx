import type { Metadata } from 'next';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal, RevealStagger, RevealStaggerItem } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Témoignages',
  description:
    "Les parcours de jeunes femmes scolarisées grâce à l'association Parrains et Marraines pour le Népal, de Taksindu à Kathmandu.",
  alternates: { canonical: '/temoignages' },
};

type Testimonial = {
  name: string;
  title: string;
  meta: string;
  excerpt: string[];
};

// Extraits verbatim repris du site de l'association (témoignages recueillis en 2024).
const testimonials: Testimonial[] = [
  {
    name: 'Lhamu Sherpa',
    title: "Quelqu'un est soudainement entré dans ma vie",
    meta: '19 ans · district du Solukhumbu · parrainée par Didier',
    excerpt: [
      "Moi, c'est Lhamu Sherpa. Je suis une jeune fille de 19 ans originaire de ce beau pays, le Népal. Je suis née dans le district du Solukhumbu, entouré de montagnes et de collines.",
      "J'ai trois sœurs et un frère ; je suis la quatrième enfant de notre famille. Mes parents étaient agriculteurs. Mon père avait un bon cœur et des pensées positives : il était comme un surhomme pour moi.",
    ],
  },
  {
    name: 'Lhakpa Doma Tamang',
    title: "L'école à tout prix pour les filles",
    meta: 'Élève en classe de 12e · parrainée par Yves, avec Dawa et Annie',
    excerpt: [
      "Je suis née dans une famille simple d'agriculteurs. Quand j'étais petite, ma mère m'a envoyée à l'école. Je me rappelle que cela a été difficile pour elle, dans cette société très patriarcale : elle a dû affronter les hommes et son beau-père.",
      "J'ai trouvé des mains secourables comme Yves, mon parrain, et Dawa. Grâce à eux, j'ai pu terminer le secondaire ; aujourd'hui, je suis en classe de 12e.",
    ],
  },
  {
    name: 'Tenzing Doma Sherpa',
    title: 'Un rêve : devenir médecin',
    meta: 'Étudiante en sciences à Kathmandu · parrainée par Dominique et Isabelle',
    excerpt: [
      "Mon nom est Tenzing Doma Sherpa. Je vis à Kathmandu et j'étudie la science en grade 11. Mon but dans la vie est de devenir médecin.",
      "Enfant, devant un reportage sur des médecins soignant gratuitement des familles dans une région reculée, je me suis dit : et si je devenais médecin, moi aussi ? À partir de cet instant, j'ai été déterminée.",
    ],
  },
  {
    name: 'Mingmar Lhemi Sherpa',
    title: "Sur les chemins de l'hôpital et du trail",
    meta: 'Assistante de santé · née à Taksindu en 1999 · marraine : Sylvie',
    excerpt: [
      "Je suis née le 13 avril 1999 à Taksindu Deku. Enfant, je marchais vingt-cinq minutes pour rejoindre l'école primaire de Chhulemu.",
      "Grâce au soutien de l'association et de ma marraine Sylvie, j'ai pu poursuivre mes études et devenir assistante de santé. En 2019, j'ai terminé deuxième des 320 km du Solukhumbu Trail.",
    ],
  },
];

export default function TemoignagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Témoignages"
        title={
          <>
            Des voix venues{' '}
            <em className="font-light not-italic text-accent-deep [font-style:italic]">
              de la vallée
            </em>
            .
          </>
        }
        lede="Derrière chaque parrainage, une histoire. Ces jeunes femmes, accompagnées par l'association, racontent leur parcours — de Taksindu à Kathmandu."
      />

      <section className="py-20 md:py-[120px]">
        <Container>
          <RevealStagger className="mx-auto grid max-w-3xl gap-5">
            {testimonials.map((t) => (
              <RevealStaggerItem key={t.name}>
                <article className="rounded-3xl border border-border bg-bg-surface p-8 sm:p-10">
                  <span
                    aria-hidden
                    className="block font-display text-5xl leading-none text-accent/30"
                  >
                    «
                  </span>
                  <h2 className="-mt-3 font-display text-[clamp(24px,2.6vw,30px)] font-light italic leading-[1.25] tracking-[-0.01em] text-terra">
                    {t.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[15.5px] leading-[1.75] text-[#4A4239]">
                    {t.excerpt.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                  <footer className="mt-7 border-t border-border pt-5">
                    <p className="font-display text-lg font-normal text-text">{t.name}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-text-2">{t.meta}</p>
                  </footer>
                </article>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          <Reveal>
            <p className="mx-auto mt-10 max-w-3xl text-center text-[13.5px] leading-relaxed text-text-2">
              Témoignages recueillis en 2024, traduits du népalais et de l&apos;anglais.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
