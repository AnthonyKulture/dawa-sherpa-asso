import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger, RevealStaggerItem } from '@/components/ui/Reveal';

const stats = [
  { num: '19', punct: '.', label: "années d'engagement sur le terrain, depuis 2007" },
  { num: '75', punct: '.', label: 'enfants accueillis au pensionnat depuis 2017' },
  { num: '2700', unit: 'm', label: 'altitude des villages accompagnés dans le Solu' },
  { num: '280', unit: 'km', label: 'de Kathmandu, accessibles à pied par les sentiers' },
];

export function Stats() {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <RevealStagger className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-10">
          {stats.map((s) => (
            <RevealStaggerItem key={s.label}>
              <Reveal>
                <div className="font-display text-[clamp(52px,5.5vw,76px)] font-normal leading-[0.95] tracking-[-0.03em] tabular-nums text-text">
                  {s.num}
                  {s.punct ? <span className="text-accent">{s.punct}</span> : null}
                  {s.unit ? (
                    <span className="text-[0.4em] font-normal text-text-2">{s.unit}</span>
                  ) : null}
                </div>
                <p className="mt-4 max-w-[200px] text-[13px] leading-[1.55] text-text-2">
                  {s.label}
                </p>
              </Reveal>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
