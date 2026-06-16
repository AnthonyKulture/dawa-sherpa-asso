# Décisions techniques (ADR léger)

Chaque entrée : **date**, **décision**, **alternatives écartées**, **conséquences**.

---

## 2026-05-15 · ADR-001 — Stack frontend : Next.js 16 App Router

**Décision** : Next.js 16.2 (App Router, React 19, Server Components par défaut).

**Alternatives écartées** :
- *Astro* : excellent pour un site statique pur, mais limite l'évolution si on ajoute plus tard des features dynamiques (espace adhérent, paiement, etc.).
- *Remix/React Router* : moins d'intégrations natives (image optim, fonts, métadonnées) que Next.

**Conséquences** : un peu plus de boilerplate qu'Astro, mais on garde toutes les portes ouvertes côté évolution sans refonte.

---

## 2026-05-15 · ADR-002 — Tailwind v4 CSS-first (pas de `tailwind.config.ts`)

**Décision** : tokens design déclarés dans `src/app/globals.css` via `@theme { ... }`. Pas de fichier de config TS.

**Alternatives écartées** :
- *Tailwind v3 + config TS* : familier mais demande de maintenir deux sources de vérité (CSS variables + JS config) si on veut exposer les tokens au runtime.

**Conséquences** : une seule source pour les tokens (CSS), exposés gratuitement à JS via `var(--color-accent)`. Tooling tiers (Biome CSS, Stylelint) doit activer `tailwindDirectives` ou ignorer le fichier.

---

## 2026-05-15 · ADR-003 — Biome remplace ESLint + Prettier

**Décision** : un seul outil (Biome 2.4) pour le format + le lint. Pas d'ESLint, pas de Prettier.

**Alternatives écartées** :
- *ESLint + Prettier + eslint-config-next* : 5-10× plus lent, conflits récurrents entre les deux, plus de plugins à mettre à jour.

**Conséquences** : pas de plugin Next.js officiel pour Biome → on perd quelques règles spécifiques (ex. détection `<img>` au lieu de `<Image>`). On compense avec des conventions internes.

CSS désactivé dans Biome car Tailwind v4 utilise des directives (`@theme`, `@utility`) que le parser CSS Biome supporte uniquement via `tailwindDirectives: true`. Activé, formatter+linter CSS désactivés pour éviter les conflits.

---

## 2026-05-15 · ADR-004 — Tabler Icons en module React, pas en webfont

**Décision** : `@tabler/icons-react`, imports nommés par icône.

**Alternatives écartées** :
- *Webfont CDN `@tabler/icons-webfont`* (utilisé dans la maquette HTML) : impact LCP (font 200kB+), pas tree-shakeable, requêtes externes.

**Conséquences** : seules les icônes utilisées sont bundlées. Bundle initial plus léger. Plus d'icon = un import à ajouter, pas de magie de classes.

---

## 2026-05-15 · ADR-005 — Pas de boutique, pas de paiement (Phase 1-2)

**Décision** : tous les CTAs "Faire un don / Parrainer / Adhérer" pointent vers `/bientot` (page d'attente sobre avec coordonnées email/téléphone). Section Boutique de la maquette retirée. Help Card #4 (boutique solidaire) retirée.

**Alternatives écartées** :
- *Stripe Checkout dès Phase 1* : ajoute compte Stripe, webhooks, reçus fiscaux, RGPD paiement, tests E2E — pas le périmètre demandé.
- *HelloAsso* : option viable plus tard (gratuit pour assos, reçus fiscaux automatiques), mais pas demandé pour l'instant.

**Conséquences** : déploiement plus rapide. Quand le tunnel de don sera prêt, on supprime `/bientot` et on branche les CTAs sur le vrai parcours.

---

## 2026-05-15 · ADR-006 — Sanity pour le CMS (Phase 3, pas avant)

**Décision** : Sanity (project "Dawa Sherpa Asso", ID `9r491xx8`, dataset `production` à confirmer) pour le blog et les pages éditables par les admins non-techs. Studio embarqué dans Next à `/studio`.

**Alternatives écartées** :
- *Payload* : excellent mais demande une DB (Postgres/Mongo) qu'on n'a pas envie d'opérer pour un usage léger.
- *MDX / Contentlayer* : nécessite que l'admin sache git/markdown — exclu.

**Conséquences** : dépendance externe à Sanity (free tier suffisant : 3 utilisateurs, 10k docs). Branchement reporté à Phase 3 pour ne pas alourdir le scaffolding.

---

## 2026-05-15 · ADR-007 — TypeScript strict + `noUncheckedIndexedAccess`

**Décision** : `strict: true`, `noUncheckedIndexedAccess: true`, `noImplicitOverride: true`, `forceConsistentCasingInFileNames: true`.

**Conséquences** : l'accès tableau retourne `T | undefined` → on attrape les bugs hors-bornes au compile time. Demande quelques tuples `as const` pour les listes statiques (cf. `siteConfig`).

---

## 2026-05-15 · ADR-008 — Cloudflare Pages comme cible de prod

**Décision** : hébergement final sur Cloudflare Pages.

**Conséquences** :
- Pour l'instant pas de `output: 'export'` dans `next.config.ts` — on garde la possibilité d'utiliser des routes serveur.
- Choix entre static export ou `@cloudflare/next-on-pages` reporté à Phase 5 (au moment du déploiement).
- Connexion Pages ↔ GitHub via le dashboard Cloudflare (1 clic) à faire manuellement au premier déploiement.

---

## 2026-05-15 · ADR-009 — FR-only en Phase 1-4

**Décision** : pas de `next-intl` ni de routing localisé pour l'instant. `<html lang="fr">`, textes en dur ou via Sanity.

**Conséquences** : si EN est demandé plus tard (Phase 5+), on ajoute `next-intl` et on duplique les routes. Pas de dette technique anticipée — la structure App Router le permet sans refactor majeur.

---

## 2026-06-16 · ADR-010 — La page « Appel à projet » est abandonnée

**Décision** : la page `/appel-a-projet` de l'ancien site (et son dossier de candidature PMPN téléchargeable) n'est pas reprise dans la refonte.

**Contexte** : sur l'ancien site, cette page ne détaillait aucun projet concret (juste un dossier à télécharger) ; décision du client le 2026-06-16 de ne pas la conserver.

**Conséquences** : une entrée de moins dans le plan de refonte. Si un appel à projet ponctuel doit réapparaître plus tard, il pourra être porté par le futur blog/actualités (Sanity, ADR-006) plutôt que par une page dédiée permanente.
