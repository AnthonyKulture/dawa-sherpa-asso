import { Button, ButtonArrow } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-20 text-center text-text-on-dark md:py-[140px]">
      {/* Glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(216,152,96,0.16) 0%, rgba(216,152,96,0.04) 35%, transparent 65%)',
        }}
      />
      <Container className="relative">
        <Reveal>
          <Pill dot variant="dark">
            Rejoignez-nous
          </Pill>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 mb-6 max-w-[760px] font-display text-[clamp(44px,5.5vw,76px)] font-light leading-[1.05] tracking-[-0.02em] text-text-on-dark">
            Chaque don tisse{' '}
            <em className="font-light not-italic text-accent [font-style:italic]">
              un lien durable
            </em>{' '}
            avec la vallée.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mb-9 max-w-[520px] text-base leading-[1.65] text-text-on-dark-2">
            Adhérer, donner, parrainer un enfant — chaque geste prolonge l&apos;aventure humaine de
            Taksindu et Chhulemu, au cœur de l&apos;Himalaya.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/bientot" variant="accent" className="group">
              Faire un don maintenant <ButtonArrow />
            </Button>
            <Button href="/bientot" variant="ghostLight">
              Devenir adhérent
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
