import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ContainerProps<E extends ElementType = 'div'> = {
  as?: E;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>;

export function Container<E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...rest
}: ContainerProps<E>) {
  const Component = (as ?? 'div') as ElementType;
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-(--container-content) px-5 sm:px-6 md:px-8 lg:px-10',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
