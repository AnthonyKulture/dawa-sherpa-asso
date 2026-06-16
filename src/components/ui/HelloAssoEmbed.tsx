'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

const HELLOASSO_ORIGIN = 'https://www.helloasso.com';
const MAX_HEIGHT = 5000;

type HelloAssoEmbedProps = {
  /** URL du formulaire HelloAsso suffixée par /widget (code d'intégration HelloAsso). */
  src: string;
  /** Titre accessible de l'iframe. */
  title: string;
  /** Hauteur initiale / plancher en px ; le formulaire pousse sa vraie hauteur via postMessage. */
  minHeight?: number;
  className?: string;
};

export function HelloAssoEmbed({ src, title, minHeight = 750, className }: HelloAssoEmbedProps) {
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // HelloAsso poste { height } depuis son domaine pour dimensionner l'iframe.
      if (event.origin !== HELLOASSO_ORIGIN) return;
      const data = event.data as { height?: number } | null;
      const next = data && typeof data.height === 'number' ? data.height : Number.NaN;
      if (Number.isFinite(next) && next > 0) {
        // Suit la hauteur réelle (étape courte ou longue), bornée pour éviter tout abus.
        setHeight(Math.min(Math.max(next, minHeight), MAX_HEIGHT));
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [minHeight]);

  return (
    <iframe
      src={src}
      title={title}
      allow="payment"
      className={cn(
        'w-full overflow-hidden rounded-3xl border border-border bg-bg-surface',
        className,
      )}
      style={{ height }}
    />
  );
}
