import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';

type SectionHeadProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  action?: ReactNode;
  align?: 'split' | 'center';
  className?: string;
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
};

export function SectionHead({
  eyebrow,
  title,
  lede,
  action,
  align = 'split',
  className,
  tone = 'light',
  as = 'h2',
}: SectionHeadProps) {
  const Title = as;
  const titleColor = tone === 'light' ? 'text-text' : 'text-text-on-dark';
  const ledeColor = tone === 'light' ? 'text-text-2' : 'text-text-on-dark-2';

  if (align === 'center') {
    return (
      <div className={cn('mx-auto max-w-3xl text-center', className)}>
        {eyebrow ? (
          <div className="mb-4 flex justify-center">
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          </div>
        ) : null}
        <Title className={cn('font-display text-[clamp(36px,3.6vw,54px)] font-light', titleColor)}>
          {title}
        </Title>
        {lede ? (
          <p className={cn('mx-auto mt-5 max-w-xl text-[15px] leading-relaxed', ledeColor)}>
            {lede}
          </p>
        ) : null}
        {action ? <div className="mt-8 flex justify-center">{action}</div> : null}
      </div>
    );
  }

  return (
    <div
      className={cn('mb-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-6', className)}
    >
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <Title
          className={cn('mt-4 font-display text-[clamp(36px,3.6vw,54px)] font-light', titleColor)}
        >
          {title}
        </Title>
      </div>
      {lede ? (
        <p className={cn('max-w-[340px] text-[15px] leading-relaxed', ledeColor)}>{lede}</p>
      ) : null}
      {action}
    </div>
  );
}
