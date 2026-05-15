import { Button, ButtonArrow } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { Section } from '@/components/ui/Section';

export default function Home() {
  return (
    <Section paddingY="md" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="lg:pr-2">
            <Pill dot>Solidarité au Népal · depuis 2007</Pill>
            <h1 className="mt-6 font-display text-[clamp(34px,4.2vw,56px)] font-light leading-[1.08] tracking-[-0.02em] text-text">
              Au pied de l&apos;Everest,{' '}
              <em className="font-light not-italic text-accent-deep [font-style:italic]">
                une promesse
              </em>{' '}
              tenue depuis 17&nbsp;ans.
            </h1>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[1.65] text-text-2">
              Fondée par Dawa Dachhiri Sherpa, coureur d&apos;ultra-trail népalais,
              l&apos;association soutient les villages de Taksindu et Chhulemu — scolarité, foyer
              pour aînés, dispensaire, reconstruction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/bientot" variant="accent" className="group">
                Parrainer un enfant <ButtonArrow />
              </Button>
              <Button href="/#histoire" variant="ghost">
                Découvrir l&apos;association
              </Button>
            </div>
          </div>
          <div
            aria-hidden
            className="relative hidden h-[440px] rounded-3xl bg-bg-soft lg:block lg:h-[600px]"
          >
            <div className="absolute inset-0 flex items-center justify-center text-sm text-text-3">
              Collage 4 images · placeholder Phase 2
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
