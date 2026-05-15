import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'accent' | 'dark' | 'ghost' | 'ghostLight';
type Size = 'md' | 'sm';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.005em] font-sans whitespace-nowrap cursor-pointer touch-manipulation select-none transition-[transform,background-color,border-color,box-shadow] duration-300 ease-[var(--ease-soft)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60';

const sizes: Record<Size, string> = {
  md: 'min-h-[48px] px-6 py-3.5 text-sm',
  sm: 'min-h-[40px] px-5 py-2.5 text-[13px]',
};

const variants: Record<Variant, string> = {
  accent:
    'bg-accent text-white hover:bg-accent-deep hover:shadow-[0_12px_32px_-16px_rgba(216,152,96,0.6)]',
  dark: 'bg-text text-bg hover:bg-[#3A332E]',
  ghost: 'border border-border-2 bg-transparent text-text hover:border-text hover:bg-bg-soft',
  ghostLight:
    'border border-[rgba(245,240,232,0.22)] bg-[rgba(245,240,232,0.06)] text-text-on-dark backdrop-blur-sm hover:border-[rgba(245,240,232,0.4)] hover:bg-[rgba(245,240,232,0.14)]',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

type AsButton = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export type ButtonProps = AsLink | AsButton;

export function Button(props: ButtonProps) {
  const { variant = 'accent', size = 'md', className, children, ...rest } = props;
  const styles = cn(base, sizes[size], variants[variant], className);

  if ('href' in rest && rest.href !== undefined) {
    const { href, external, ...anchorRest } = rest;
    if (external) {
      return (
        <a href={href} className={styles} target="_blank" rel="noopener noreferrer" {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function ButtonArrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  );
}
