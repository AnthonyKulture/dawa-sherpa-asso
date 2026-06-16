type LogoProps = {
  className?: string;
  title?: string;
  /** Garde pour compat API (Footer l'utilise). Le SVG officiel n'a pas de variante. */
  tone?: 'dark' | 'light';
};

export function Logo({ className, title = 'Parrains et Marraines pour le Népal' }: LogoProps) {
  return (
    // biome-ignore lint/performance/noImgElement: SVG statique servi par /public, pas besoin de l'optimiseur Next/Image (sortie static export)
    <img
      src="/DawaSherpa_asso_Logook.svg"
      alt={title}
      className={className}
      width={369}
      height={108}
      decoding="async"
    />
  );
}
