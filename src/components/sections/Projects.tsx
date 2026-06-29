import Image from 'next/image';
import Link from 'next/link';
import { Button, ButtonArrow } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger, RevealStaggerItem } from '@/components/ui/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';

type Project = {
  category: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  href: string;
};

const projects: Project[] = [
  {
    category: 'Éducation',
    title: 'École de Taksindu',
    body: 'Frais de scolarité, matériel et, pour certains, pensionnat — pour les enfants de la vallée du Solu.',
    image: '/images/project-school.webp',
    alt: "Enfants de l'école de Taksindu",
    href: '/nos-actions#scolarite',
  },
  {
    category: 'Santé',
    title: 'Dispensaire de Taksindu',
    body: 'Rouvert en 2012, accessible à toute la vallée. Un infirmier assure les premiers soins, sept jours sur sept.',
    image: '/images/project-dispensary.webp',
    alt: 'Dispensaire de Taksindu',
    href: '/nos-actions#sante',
  },
  {
    category: 'Rénovation',
    title: 'Rénovation de centres',
    body: "Sept centres en cours de rénovation, et d'autres à venir, ainsi que de nouvelles installations sanitaires pour le pensionnat.",
    image: '/images/project-houses.webp',
    alt: 'Travaux de rénovation dans la vallée du Solukumbu',
    href: '/nos-actions#renovation',
  },
];

export function Projects() {
  return (
    <section className="border-t border-border bg-bg-surface py-20 md:py-[120px]">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Sur le terrain"
            title={
              <>
                Nos projets{' '}
                <em className="font-light not-italic text-accent-deep [font-style:italic]">
                  en cours
                </em>
                , dans la vallée.
              </>
            }
            action={
              <Button href="#histoire" variant="ghost" className="group">
                Tous les projets <ButtonArrow />
              </Button>
            }
          />
        </Reveal>

        <RevealStagger className="grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <RevealStaggerItem key={p.title}>
              <Link
                href={p.href}
                className="group block h-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-bg-surface transition-[transform,box-shadow] duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[0_28px_56px_-28px_rgba(43,39,36,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-text backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
                <div className="px-6 pb-7 pt-6 sm:px-7">
                  <h3 className="mb-2 font-display text-[22px] font-normal tracking-[-0.015em] text-text">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-text-2">{p.body}</p>
                </div>
              </Link>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
