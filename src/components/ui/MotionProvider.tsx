'use client';

import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * Fait respecter `prefers-reduced-motion` aux animations motion/react (Reveal*).
 * Le bloc @media du globals.css ne neutralise que les animations CSS ; motion
 * pilote opacity/transform en JS et nécessite cet opt-in explicite.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
