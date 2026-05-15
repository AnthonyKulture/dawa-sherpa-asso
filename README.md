# Parrains et Marraines pour le Népal

Site officiel de l'association loi 1901 fondée en 2007 par Dawa Dachhiri Sherpa. Solidarité au Népal, vallée du Solukumbu : scolarité, grand âge, santé, reconstruction.

## Stack

- **Next.js 16** (App Router, React 19, Server Components)
- **Tailwind v4** (config CSS-first via `@theme` dans `src/app/globals.css`)
- **TypeScript** strict + `noUncheckedIndexedAccess`
- **Biome** (formatter + linter unique — remplace ESLint/Prettier)
- **Tabler Icons** (modulaire, tree-shaké)
- **next/font** (Newsreader display + Manrope sans-serif)
- Hébergement cible : **Cloudflare Pages**
- CMS futur (Phase 3) : **Sanity**

## Démarrer

Prérequis : Node ≥ 20, pnpm ≥ 10.

```bash
pnpm install
pnpm dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Effet |
|---|---|
| `pnpm dev` | Serveur de développement (Turbopack) |
| `pnpm build` | Build de production |
| `pnpm start` | Démarre le build de prod localement |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | Biome (format + lint, check uniquement) |
| `pnpm lint:fix` | Biome avec auto-fix |
| `pnpm format` | Biome format uniquement |

## Structure

```
src/
├── app/                  # App Router : pages, layouts, metadata
│   ├── globals.css       # Tokens design (Tailwind v4 @theme)
│   ├── layout.tsx        # Layout racine (Header + Footer)
│   ├── page.tsx          # Home
│   └── bientot/          # Page d'attente CTAs don/parrainage
├── components/
│   ├── layout/           # Header, Footer, MobileNav
│   └── ui/               # Primitives (Button, Pill, Section, etc.)
├── config/               # Configuration site (nav, contact)
└── lib/                  # Helpers (cn, etc.)
docs/decisions.md         # ADR léger des choix techniques
maquette.html             # Maquette de référence (à ne pas modifier)
```

## Conventions

- Pas de `any`, pas de mock de logique métier.
- Pas de commentaires "quoi" — uniquement "pourquoi" si non-évident.
- Tous les textes FR éditables devront passer par le CMS Sanity (Phase 3+).
- Accessibilité non-négociable : focus visible, navigation clavier, `prefers-reduced-motion`.

## Déploiement

Le repo `AnthonyKulture/dawa-sherpa-asso` est connecté à Cloudflare Pages (Phase 5). Tout push sur `main` déclenche un déploiement preview.

## Documentation

- [docs/decisions.md](docs/decisions.md) — décisions techniques et alternatives écartées
- [CLAUDE.md](CLAUDE.md) — instructions Claude Code (générales)
- [maquette.html](maquette.html) — design de référence visuel (HTML statique)
