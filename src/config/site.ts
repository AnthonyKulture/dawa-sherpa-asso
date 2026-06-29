export const siteConfig = {
  name: 'Parrains et Marraines pour le Népal',
  shortName: 'PMPN',
  url: 'https://www.dawasherpa-asso.org',
  description:
    "Solidarité au Népal depuis 2007. L'association soutient les villages de Taksindu et Chhulemu : scolarité, grand âge, santé, rénovation des centres.",
  contact: {
    email: 'dachhiridawasherpa@gmail.com',
    phones: ['+33 4 57 43 79 43', '+33 6 04 52 42 79'],
    whatsapp: 'https://wa.me/33604524279',
    address: {
      street: '55, impasse de Tréville',
      postalCode: '74250',
      city: 'Ville-en-Sallaz',
      country: 'France',
    },
  },
  // Informations légales (page Mentions légales / Confidentialité + futur JSON-LD).
  org: {
    legalForm: 'Association loi du 1er juillet 1901',
    rna: 'W051000764',
    prefecture: 'Bonneville',
    foundedYear: 2007,
    publicationDirector: 'Dachhiri-dawa Sherpa',
  },
  socials: {
    facebook: 'https://facebook.com/dawasherpa.dachhiri',
    instagram: '',
    whatsapp: 'https://wa.me/33604524279',
  },
  // Tunnels HelloAsso. `widget` = URL suffixée /widget (code d'intégration iframe).
  helloAsso: {
    don: {
      url: 'https://www.helloasso.com/associations/parrains-et-marraines-pour-le-nepal/formulaires/1',
      widget:
        'https://www.helloasso.com/associations/parrains-et-marraines-pour-le-nepal/formulaires/1/widget',
    },
    boutique: {
      url: 'https://www.helloasso.com/associations/parrains-et-marraines-pour-le-nepal/boutiques/boutique-asso',
      widget:
        'https://www.helloasso.com/associations/parrains-et-marraines-pour-le-nepal/boutiques/boutique-asso/widget',
    },
    adhesion: {
      url: 'https://www.helloasso.com/associations/parrains-et-marraines-pour-le-nepal/adhesions/adhesion',
      widget:
        'https://www.helloasso.com/associations/parrains-et-marraines-pour-le-nepal/adhesions/adhesion/widget',
    },
  },
  nav: {
    primary: [
      { label: "L'association", href: '/#histoire' },
      { label: 'Nos actions', href: '/nos-actions' },
      { label: 'Témoignages', href: '/temoignages' },
      { label: 'Boutique', href: '/boutique' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: [
      { label: 'Faire un don', href: '/faire-un-don' },
      { label: 'Parrainer', href: '/faire-un-don' },
      { label: 'Devenir adhérent', href: '/adherer' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
