import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales de l'association Parrains et Marraines pour le Népal : éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: '/mentions-legales' },
};

const { contact, org, name } = siteConfig;

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      lede="Informations relatives à l'éditeur et à l'hébergeur de ce site, conformément à la loi pour la confiance dans l'économie numérique (LCEN)."
      updated="16 juin 2026"
    >
      <h2>Éditeur du site</h2>
      <p>
        Le présent site est édité par l&apos;association <strong>{name}</strong>, {org.legalForm},
        déclarée auprès de la préfecture de {org.prefecture}.
      </p>
      <ul>
        <li>
          <strong>Numéro RNA :</strong> {org.rna}
        </li>
        <li>
          <strong>Siège social :</strong> {contact.address.street}, {contact.address.postalCode}{' '}
          {contact.address.city}, {contact.address.country}
        </li>
        <li>
          <strong>Courriel :</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <strong>Téléphone :</strong> {contact.phones.join(' · ')}
        </li>
        <li>
          <strong>Directeur de la publication :</strong> {org.publicationDirector}, en qualité de
          président de l&apos;association.
        </li>
      </ul>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par <strong>Cloudflare, Inc.</strong> (service Cloudflare Pages), 101
        Townsend Street, San Francisco, CA 94107, États-Unis — téléphone : +1 888 993 5273 —{' '}
        <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">
          www.cloudflare.com
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
        .
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, photographies, logo, éléments
        graphiques et leur agencement) est la propriété de l&apos;association {name}, sauf mention
        contraire, et est protégé par le droit d&apos;auteur. Toute reproduction, représentation ou
        diffusion, totale ou partielle, sans autorisation préalable écrite, est interdite et
        constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
      </p>
      <p>
        Les photographies illustrant les villages, les enfants et les bénéficiaires sont diffusées
        avec l&apos;accord des personnes concernées ou de leurs représentants, dans le respect de
        leur dignité.
      </p>

      <h2>Liens hypertextes</h2>
      <p>
        Ce site peut contenir des liens vers des sites tiers (réseaux sociaux, partenaires,
        plateforme de don). L&apos;association ne saurait être tenue responsable du contenu ni des
        pratiques de ces sites externes, qui disposent de leurs propres conditions
        d&apos;utilisation et politiques de confidentialité.
      </p>

      <h2>Responsabilité</h2>
      <p>
        L&apos;association s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
        informations diffusées sur ce site, mais ne peut en garantir l&apos;exhaustivité. Toute
        imprécision peut être signalée par courriel à{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> ; elle sera corrigée dans les
        meilleurs délais.
      </p>
    </LegalPage>
  );
}
