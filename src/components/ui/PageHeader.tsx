import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
};

export function PageHeader({ eyebrow, title, lede, className }: PageHeaderProps) {
  return (
    <section
      className={cn('border-b border-border bg-bg-soft pb-14 pt-16 md:pb-20 md:pt-24', className)}
    >
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          ) : null}
          <Reveal delay={0.06}>
            <h1 className="mt-5 font-display text-[clamp(36px,4.4vw,60px)] font-light leading-[1.06] tracking-[-0.02em] text-text">
              {title}
            </h1>
          </Reveal>
          {lede ? (
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-2 sm:text-[17px]">
                {lede}
              </p>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
