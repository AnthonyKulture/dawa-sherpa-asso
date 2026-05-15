import { type Icon, IconCalendarRepeat, IconGift, IconUsers } from '@tabler/icons-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger, RevealStaggerItem } from '@/components/ui/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';

type HelpCard = {
  tag: string;
  icon: Icon;
  title: string;
  body: string;
  cta: string;
  href: string;
  featured?: boolean;
};

const helpCards: HelpCard[] = [
  {
    tag: '01 · Recommandé',
    icon: IconCalendarRepeat,
    title: 'Don mensuel',
    body: 'Engagement durable, impact prévisible. Vous nous permettez de planifier les projets sur le long terme.',
    cta: 'À partir de 10€ / mois →',
    href: '/bientot',
    featured: true,
  },
  {
    tag: '02',
    icon: IconGift,
    title: 'Don ponctuel',
    body: 'Un coup de pouce immédiat pour les projets en cours. Reçu fiscal envoyé sous 48 heures par email.',
    cta: 'Faire un don →',
    href: '/bientot',
  },
  {
    tag: '03',
    icon: IconUsers,
    title: 'Parrainer un enfant',
    body: "Accompagnez la scolarité d'un enfant du village. Vous recevez régulièrement ses nouvelles, ses dessins, ses bulletins.",
    cta: 'Devenir parrain →',
    href: '/bientot',
  },
];

export function Help() {
  return (
    <section id="don" className="bg-bg py-20 md:py-[120px]">
      <Container>
        <Reveal>
          <SectionHead
            eyebrow="Comment agir"
            title={
              <>
                Trois façons de{' '}
                <em className="font-light not-italic text-accent-deep [font-style:italic]">
                  soutenir
                </em>{' '}
                notre mission.
              </>
            }
            lede="Chaque don ouvre droit à une réduction d'impôt de 66%. Un don de 50€ ne vous coûte réellement que 17€ après déduction."
          />
        </Reveal>

        <RevealStagger className="grid gap-4 md:grid-cols-3">
          {helpCards.map((c) => {
            const Icon = c.icon;
            return (
              <RevealStaggerItem key={c.title}>
                <article
                  className={`flex h-full min-h-[260px] flex-col justify-between rounded-3xl border p-9 transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[0_28px_56px_-32px_rgba(43,39,36,0.18)] ${
                    c.featured
                      ? 'border-bg-dark bg-bg-dark text-text-on-dark'
                      : 'border-border bg-bg-surface text-text hover:border-border-2'
                  }`}
                >
                  <div className="mb-8 flex items-start justify-between">
                    <Icon
                      size={28}
                      className={c.featured ? 'text-accent' : 'text-accent'}
                      aria-hidden
                    />
                    <span
                      className={`text-[11px] font-medium uppercase tracking-[0.08em] ${
                        c.featured ? 'text-white/45' : 'text-text-2'
                      }`}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`mb-3 font-display text-2xl font-normal tracking-[-0.015em] ${
                        c.featured ? 'text-text-on-dark' : 'text-text'
                      }`}
                    >
                      {c.title}
                    </h3>
                    <p
                      className={`mb-6 text-sm leading-[1.65] ${
                        c.featured ? 'text-text-on-dark-2' : 'text-text-2'
                      }`}
                    >
                      {c.body}
                    </p>
                  </div>
                  <Link
                    href={c.href}
                    className={`inline-flex items-center gap-1.5 self-start rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                      c.featured
                        ? 'bg-accent text-white hover:bg-accent-deep'
                        : 'border border-border-2 text-text hover:bg-bg-soft hover:border-text'
                    }`}
                  >
                    {c.cta}
                  </Link>
                </article>
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
