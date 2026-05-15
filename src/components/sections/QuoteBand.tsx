import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function QuoteBand() {
  return (
    <section className="bg-bg py-20 text-center md:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[760px]">
            <p className="font-display text-[clamp(24px,2.6vw,34px)] font-light italic leading-[1.35] tracking-[-0.01em] text-text">
              «&nbsp;Ensemble, tissons des liens durables et contribuons à l&apos;
              <em className="font-light text-accent-deep">épanouissement</em> de ces communautés
              exceptionnelles au cœur de l&apos;Himalaya.&nbsp;»
            </p>
            <div className="mt-5 text-xs font-medium uppercase tracking-[0.06em] text-text-2">
              Manifeste de l&apos;association · 2007
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
