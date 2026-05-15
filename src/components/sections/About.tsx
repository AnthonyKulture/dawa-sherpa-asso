import Image from 'next/image';
import { Button, ButtonArrow } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <section id="histoire" className="py-20 md:py-[120px]">
      <Container>
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-[72px]">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/about-portrait.webp"
                alt="Dawa Dachhiri Sherpa, fondateur de l'association, dans la vallée du Solukumbu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_38%]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>À propos · Le fondateur</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 mb-7 max-w-[560px] font-display text-[clamp(36px,4vw,58px)] font-light leading-[1.08] tracking-[-0.02em]">
                Du sommet de l&apos;Everest{' '}
                <em className="font-light not-italic text-accent-deep [font-style:italic]">
                  aux salles de classe
                </em>{' '}
                du village.
              </h2>
            </Reveal>
            <div className="space-y-4 max-w-[540px] text-[15.5px] leading-[1.75] text-[#4A4239]">
              <Reveal delay={0.18}>
                <p>
                  Originaire du village de Chulemo-Taksindu, perché à 2&nbsp;700 mètres
                  d&apos;altitude, Dawa a grandi au sein d&apos;une grande famille de neuf enfants.
                  Son engagement humanitaire a pris racine dans son parcours de sportif, le
                  conduisant à organiser des courses de trails dans l&apos;Himalaya népalais.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p>
                  Au-delà de la découverte de cette région exceptionnelle, Dawa a intégré des
                  actions humanitaires visant à soutenir la scolarité et l&apos;hébergement des
                  enfants, puis à accueillir les personnes âgées de la vallée du Solukumbu.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Forts de cette expérience, notre association a à cœur de sensibiliser et mobiliser
                  tous ceux que nous côtoyons aux défis auxquels le Népal est confronté, en
                  particulier depuis le séisme dévastateur d&apos;avril 2015.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.36}>
              <div className="mt-8">
                <Button href="#histoire" variant="dark" className="group">
                  Lire l&apos;histoire complète <ButtonArrow />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
