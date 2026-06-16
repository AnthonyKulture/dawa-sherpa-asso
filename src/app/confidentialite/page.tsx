import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    "Comment l'association Parrains et Marraines pour le Népal traite vos données personnelles, conformément au RGPD.",
  alternates: { canonical: '/confidentialite' },
};

const { contact, name } = siteConfig;

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Vos données"
      title="Politique de confidentialité"
      lede="Nous attachons une grande importance à la protection de votre vie privée. Cette page explique quelles données nous traitons, pourquoi, et quels sont vos droits."
      updated="16 juin 2026"
    >
      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles est l&apos;association{' '}
        <strong>{name}</strong>, dont le siège est situé {contact.address.street},{' '}
        {contact.address.postalCode} {contact.address.city}. Pour toute question relative à vos
        données, contactez-nous à <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <h2>Données que nous collectons</h2>
      <p>
        Ce site est un site vitrine : il ne dépose aucun cookie de suivi, n&apos;utilise pas
        d&apos;outil de mesure d&apos;audience publicitaire et ne collecte aucune donnée à votre
        insu lors de votre navigation. Les seules données que nous traitons sont celles que vous
        nous transmettez volontairement :
      </p>
      <ul>
        <li>
          <strong>Lorsque vous nous écrivez</strong> (par courriel ou via les liens de contact) :
          votre adresse électronique, votre nom le cas échéant, et le contenu de votre message.
        </li>
        <li>
          <strong>Lorsque vous nous appelez</strong> : votre numéro de téléphone et les informations
          que vous nous communiquez.
        </li>
        <li>
          <strong>Lors d&apos;un don, d&apos;un parrainage ou d&apos;une adhésion</strong> : les
          informations nécessaires au suivi de votre soutien et, le cas échéant, à
          l&apos;établissement d&apos;un reçu (identité, coordonnées, montant). Les paiements en
          ligne, lorsqu&apos;ils seront proposés, seront opérés par un prestataire spécialisé
          disposant de sa propre politique de confidentialité ; nous n&apos;avons jamais accès à vos
          données bancaires.
        </li>
      </ul>

      <h2>Finalités et base légale</h2>
      <ul>
        <li>Répondre à vos demandes et assurer le suivi de la relation (intérêt légitime).</li>
        <li>
          Gérer les dons, parrainages et adhésions et en assurer le suivi comptable (exécution du
          soutien que vous initiez et obligations comptables).
        </li>
        <li>
          Vous tenir informé(e) de la vie de l&apos;association, uniquement si vous y avez consenti.
        </li>
      </ul>

      <h2>Durée de conservation</h2>
      <p>
        Les messages de simple contact sont conservés le temps nécessaire à leur traitement et
        supprimés au plus tard un an après le dernier échange, sauf relation suivie. Les données
        liées aux dons et adhésions sont conservées conformément aux obligations comptables et
        fiscales applicables aux associations (jusqu&apos;à 6 ans pour les pièces justificatives).
      </p>

      <h2>Destinataires et transferts</h2>
      <p>
        Vos données sont destinées aux seuls membres habilités de l&apos;association. Elles ne sont
        ni vendues, ni louées, ni cédées à des tiers à des fins commerciales. Elles peuvent être
        traitées par nos prestataires techniques (hébergeur, plateforme de don) dans la stricte
        limite de leurs missions.
      </p>
      <p>
        Notre hébergeur, Cloudflare, Inc., est établi aux États-Unis : les données techniques de
        connexion (adresse IP, journaux) peuvent donc transiter hors de l&apos;Union européenne. Ce
        transfert est encadré par l&apos;adhésion de Cloudflare au{' '}
        <em>EU-US Data Privacy Framework</em> et par les clauses contractuelles types de la
        Commission européenne.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au Règlement général sur la protection des données (RGPD) et à la loi
        Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification,
        d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données. Vous
        pouvez exercer ces droits en nous écrivant à{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
        pouvez adresser une réclamation à la CNIL —{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          www.cnil.fr
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
        .
      </p>
    </LegalPage>
  );
}
