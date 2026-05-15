import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Eyebrow({
  children,
  className,
  tone = 'light',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'light' | 'dark';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 font-sans text-xs font-medium uppercase tracking-[0.08em]',
        tone === 'light' ? 'text-text-2' : 'text-text-on-dark-2',
        className,
      )}
    >
      <span aria-hidden className="inline-block h-px w-6 bg-accent" />
      {children}
    </span>
  );
}
