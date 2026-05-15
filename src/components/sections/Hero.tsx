import Image from 'next/image';
import { Button, ButtonArrow } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-6 md:pb-32 md:pt-12">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:min-h-[600px]">
          {/* Texte */}
          <div className="lg:pr-2">
            <div className="hero-anim-text delay-1 mb-6">
              <Pill dot>Solidarité au Népal · depuis 2007</Pill>
            </div>
            <h1 className="hero-anim-text delay-2 mb-6 font-display text-[clamp(34px,4.2vw,56px)] font-light leading-[1.08] tracking-[-0.02em] text-text">
              Au pied de l&apos;Everest,{' '}
              <em className="font-light not-italic text-accent-deep [font-style:italic]">
                une promesse
              </em>{' '}
              tenue depuis 17&nbsp;ans.
            </h1>
            <p className="hero-anim-text delay-3 mb-8 max-w-[480px] text-[17px] leading-[1.65] text-text-2">
              Fondée par Dawa Dachhiri Sherpa, coureur d&apos;ultra-trail népalais,
              l&apos;association soutient les villages de Taksindu et Chhulemu — scolarité, foyer
              pour aînés, dispensaire, reconstruction.
            </p>
            <div className="hero-anim-text delay-4 flex flex-wrap gap-3">
              <Button href="/bientot" variant="accent" className="group">
                Parrainer un enfant <ButtonArrow />
              </Button>
              <Button href="#histoire" variant="ghost">
                Découvrir l&apos;association
              </Button>
            </div>
          </div>

          {/* Collage 4 images */}
          <div className="relative order-first h-[440px] lg:order-last lg:h-[600px]">
            {/* Image principale */}
            <div className="hero-anim-main absolute inset-0 overflow-hidden rounded-3xl shadow-[0_40px_80px_-32px_rgba(43,39,36,0.25)]">
              <Image
                src="/images/hero-main.webp"
                alt="Panorama du village de Taksindu, vallée du Solukumbu, Népal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Tag bas-gauche */}
              <div className="hero-anim-tag absolute bottom-5 left-5 z-[5]">
                <Pill dot variant="overlay">
                  Vallée du Solukumbu · 2&nbsp;700 m
                </Pill>
              </div>
            </div>

            {/* Card 1 : fillette souriante (haut-gauche, rotation -3deg) */}
            <div className="hero-anim-card-1 absolute z-[3] overflow-hidden rounded-[20px] shadow-[0_28px_56px_-20px_rgba(43,39,36,0.4)] outline outline-[6px] outline-bg -outline-offset-[3px] top-[-16px] left-[-10px] w-[130px] aspect-[3/4] lg:top-[-32px] lg:left-[-36px] lg:w-[200px]">
              <Image
                src="/images/hero-card-1.webp"
                alt="Enfant du village de Taksindu"
                fill
                sizes="200px"
                className="object-cover object-[center_25%]"
              />
            </div>

            {/* Card 2 : Dawa cérémonie (haut-droite, rotation 4deg) */}
            <div className="hero-anim-card-2 absolute z-[4] overflow-hidden rounded-[18px] shadow-[0_24px_48px_-16px_rgba(43,39,36,0.3)] outline outline-[5px] outline-bg -outline-offset-[3px] top-6 right-[-10px] w-[110px] aspect-square lg:top-12 lg:right-[-36px] lg:w-[180px]">
              <Image
                src="/images/hero-card-2.webp"
                alt="Dawa Dachhiri Sherpa lors d'une cérémonie traditionnelle"
                fill
                sizes="180px"
                className="object-cover object-[center_35%]"
              />
            </div>

            {/* Card 3 : ultra-trail (bas-droite, rotation -2deg) */}
            <div className="hero-anim-card-3 absolute z-[3] overflow-hidden rounded-[20px] shadow-[0_28px_56px_-20px_rgba(43,39,36,0.4)] outline outline-[6px] outline-bg -outline-offset-[3px] bottom-[-16px] right-6 w-[130px] aspect-[4/5] lg:bottom-[-36px] lg:right-16 lg:w-[200px]">
              <Image
                src="/images/hero-card-3.webp"
                alt="Coureurs d'ultra-trail sur les sentiers du Solu"
                fill
                sizes="200px"
                className="object-cover object-[65%_45%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
