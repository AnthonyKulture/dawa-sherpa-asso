import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type PillProps = {
  children: ReactNode;
  variant?: 'light' | 'dark' | 'overlay';
  dot?: boolean;
  className?: string;
};

const variants = {
  light: 'border-border bg-white/60 text-text backdrop-blur-md',
  dark: 'border-white/16 bg-white/[0.06] text-text-on-dark',
  overlay:
    'border-white/18 bg-[rgba(43,39,36,0.62)] text-white backdrop-blur-md backdrop-saturate-150',
};

export function Pill({ children, variant = 'light', dot = false, className }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-[-0.005em]',
        variants[variant],
        className,
      )}
    >
      {dot ? <span aria-hidden className="inline-block size-1.5 rounded-full bg-accent" /> : null}
      {children}
    </span>
  );
}
