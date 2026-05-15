import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Background = 'bg' | 'surface' | 'soft' | 'dark';
type PaddingY = 'sm' | 'md' | 'lg' | 'xl';

const backgrounds: Record<Background, string> = {
  bg: 'bg-bg',
  surface: 'bg-bg-surface',
  soft: 'bg-bg-soft',
  dark: 'bg-bg-dark text-text-on-dark',
};

const paddings: Record<PaddingY, string> = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-[120px]',
  lg: 'py-20 md:py-[140px]',
  xl: 'py-24 md:py-40',
};

type SectionProps = {
  children: ReactNode;
  background?: Background;
  paddingY?: PaddingY;
  bordered?: boolean;
  id?: string;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children' | 'id'>;

export function Section({
  children,
  background = 'bg',
  paddingY = 'md',
  bordered = false,
  id,
  className,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgrounds[background],
        paddings[paddingY],
        bordered && 'border-y border-border',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
