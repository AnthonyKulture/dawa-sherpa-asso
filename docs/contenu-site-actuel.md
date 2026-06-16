# Contenu du site actuel (à refondre)

Source : https://www.dawasherpa-asso.org/ — relevé le 2026-06-16.
Sert de **source de vérité éditoriale** pour la refonte. Les textes sont repris fidèlement ; les approximations/erreurs repérées sur l'ancien site sont signalées par ⚠️.

---

## Identité de l'association

- **Nom** : Parrains et Marraines pour le Népal
- **Statut** : association loi du 1er juillet 1901, déclarée auprès de la **préfecture de Bonneville**
- **RNA** : `W051000764` ⚠️ (le préfixe `W051` correspond habituellement à la Marne, alors que Bonneville est en Haute-Savoie — à vérifier auprès du client)
- **Fondée en** : 2007, par **Dawa Dachhiri Sherpa**
- **Villages soutenus** : Taksindu et Chhulemu (orthographié aussi « Chulemo »), vallée du Solukumbu, à ~280 km de Kathmandu
  - ⚠️ La page « Nos actions » écrit « vallée du Khumbu » et « vallée de l'Everest » — incohérences de l'ancien site. Retenir **Solukumbu / Solu**.

### Coordonnées
- **Adresse postale** : 55, impasse de Tréville, 74250 Ville-en-Sallaz, France
- **Téléphones** : +33 4 57 43 79 43 · +33 6 04 52 42 79
- **Email** : dachhiridawasherpa@gmail.com
  - ⚠️ Le header/footer de l'ancien site affiche `dachhiridawasherp@gmail.com` (sans le « a » final) — probablement une coquille. La page Contacts donne la version complète, qui est celle de notre `site.ts`.

### Bureau & comité (page Contacts)
- **Président** : Dachhiri-dawa Sherpa (le fondateur)
- **Vice-président** : Pascal Zellner
- **Secrétaire** : Lionel Chapuis
- **Trésorière** : Annie Sherpa
- **Président d'honneur** : Patrick Michel
- **Comité exécutif** : Isabelle Chapuis, Daniel Cambernon, Eric Dussuchal, Cécile Naegelen, Daniel Naegelen, Céline Guévin, Agnès Hermant

### Réseaux
- Facebook : facebook.com/dawasherpa.dachhiri
- WhatsApp : +33 6 04 52 42 79

---

## Arborescence de l'ancien site

| Libellé menu | Chemin actuel | Refonte (statut) |
|---|---|---|
| L'ASSOCIATION | `/` | Home — ✅ faite |
| NOS ACTIONS | `/les-actions` | ✅ → `/nos-actions` (Phase 2) |
| ACTUALITÉS | `/blog` | à créer (Sanity, ADR-006) |
| TÉMOIGNAGES | `/temoignages` | ✅ (Phase 3 — extraits verbatim) |
| LA BOUTIQUE | `/boutique` | ❌ retirée (ADR-005) |
| APPEL À PROJET | `/appel-a-projet` | ❌ retirée (décision client 2026-06-16) |
| CONTACTS | `/a-propos` | ✅ → `/contact` (Phase 1) |
| FAIRE UN DON | `/faire-un-don` | placeholder `/bientot` (ADR-005) |

Autres éléments : inscription **newsletter** (« Restons en contact »). Le **dossier de candidature PMPN** était rattaché à « Appel à projet », page abandonnée → non repris.

---

## Présentation (page d'accueil)

> « Bienvenue sur le site de l'association Parrains et Marraines pour le Népal ! »

> « Fondée en 2007 par Dawa Dachhiri Sherpa, coureur d'ultra-trail et fondeur népalais passionné, notre association œuvre activement en faveur du bien-être et du développement des communautés népalaises. »

**Le fondateur** : Dawa est originaire du village de Chulemo-Taksindu (2 700 m d'altitude), issu d'une famille de neuf enfants. Son engagement humanitaire vise d'abord à soutenir la scolarité et l'hébergement des enfants, puis à accueillir les personnes âgées.

---

## Les actions

### 1. Enfance & scolarité
> « Parrains et Marraines pour le Népal s'engage pleinement dans la vallée du Solu, au Népal, en soutenant la scolarisation des enfants du village. »

- L'association finance les **frais scolaires, le matériel** et, pour certains, les **frais de pensionnat**.
- Les enfants du pensionnat bénéficient d'un encadrement pédagogique structuré (professeurs).
- **Parrainage individuel : 600 € / an** — couvre les frais et le matériel scolaire, et pour certains le pensionnat ; inclut une aide financière à la famille pour compenser l'absence de l'enfant.

### 2. Grand âge — Centre d'accueil pour personnes âgées (Taksindu)
- **Inauguré le 13 novembre 2019**, après 18 mois de travaux ininterrompus.
- **18 pièces** conçues pour le confort des résidents.
- Aujourd'hui : **20 résidents âgés de 67 à 99 ans** (actualité 2025-2026).
> « Nos aînés trouvent un havre chaleureux au cœur du village, favorisant une vie autonome tout en offrant une assistance attentive. »

### 3. Santé — Le dispensaire de Taksindu
- Bâtiment délaissé **découvert en 2008**, **réouverture en avril 2012**, sous l'impulsion de **Pascal Zellner de l'Iffremont**.
- Un **infirmier** assure une présence quotidienne, **7j/7**.
- Projet d'**implémentation de la télémédecine** pour se connecter à d'autres structures régionales.

### 4. Reconstruction post-séisme (avril 2015)
- **10 maisons** reconstruites quasiment à neuf
- **12 maisons** réparées → **total de 33 maisons** (chiffres tels quels sur l'ancien site ⚠️ l'addition 10+12 ≠ 33 ; il manque vraisemblablement une catégorie — à clarifier)
- **5 maisons** restant à reconstruire
- Toutes les familles ont reçu des **tôles métalliques**

---

## Faire un don / parrainer / adhérer

- **Don général** : « En faisant un don, vous participez à la réalisation des différents projets de l'association et la construction de la maison pour personnes âgées dans le village Chhulemu. »
- **Parrainage d'un enfant : 600 € / an** — paie les frais et le matériel scolaire de l'enfant, et pour certains le pensionnat. Tous les enfants parrainés vivant au pensionnat sont encadrés par des professeurs.
- **Adhésion** : s'étend sur une **année civile** ; ouvre la participation aux différentes initiatives de l'association.
- ⚠️ Aucun détail sur l'ancien site concernant : moyens de paiement, IBAN, reçus fiscaux / réduction d'impôt. À obtenir du client (cf. ADR-005, tunnel reporté).

---

## Témoignages (4 portraits de bénéficiaires, datés 1er janvier 2024)

1. **Lhamu Sherpa** — « Quelqu'un est soudainement entré dans ma vie »
   > « Je suis une jeune fille de 19 ans originaire de ce beau pays, le Népal. »
2. **Lhakpa Doma Tamang** — « L'école à tout prix pour les filles »
   > « Je suis née dans une famille simple d'agriculteurs. »
3. **Tenzing Doma Sherpa** — « Un rêve : devenir médecin »
   > « Actuellement je vis à Kathmandu et étudie la science en grade 11. »
4. **Mingmar Lhemi Sherpa** — « Sur les chemins de l'hôpital »
   > « Je suis née le 13 avril 1999 à Taksindu Deku. »

(Textes intégraux à récupérer auprès du client ou page par page si besoin.)

---

## Actualités (blog) — sujets récents relevés

- **Manifestations & événements (depuis août 2025)** : voyage à Taksindu en octobre 2025 avec des jeunes Français, trail du Solukumbu en novembre 2025, course en Suisse, projection de film en février 2026.
- **Contexte politique & climatique au Népal (sept. 2025 – avr. 2026)** : manifestations étudiantes anti-corruption en septembre 2025 → démission du Premier ministre ; Mme Sushila Karki assure l'intérim (1re femme PM) ; élections de mars 2026 → Balendra Shah ; conditions climatiques difficiles fin octobre 2025.
- **Pensionnat de Chhulemu** : 75 enfants accueillis depuis 2017 ; en 2025, 6 départs, 19 poursuivent ; 6 nouveaux pensionnaires après les vacances.
- **Maison des anciens à Taksindu** : 20 résidents (67–99 ans) ; nouvelle aide-cuisinière.

---

## À clarifier avec le client
1. RNA `W051000764` vs préfecture de Bonneville (préfixe département incohérent).
2. Total des maisons reconstruites (10 + 12 ≠ 33).
3. Email officiel à confirmer (avec ou sans « a » final).
4. Moyens de paiement / IBAN / reçus fiscaux pour le futur tunnel de don. **MAJ 2026-06-16** : les affirmations « reçu fiscal / réduction d'impôt 66 % » ont été **retirées de la home** (Footer + section « Comment agir ») et passées au conditionnel sur la page Confidentialité, en attendant que le client confirme l'éligibilité art. 200 CGI. À réactiver (sans le faux « seuil de 10 € ») une fois confirmé.
5. ~~« Appel à projet » / dossier PMPN~~ → **abandonnée** (décision client du 2026-06-16).
6. Le blog/actualités passe-t-il par Sanity (ADR-006) ou reste-t-il statique pour l'instant ?
