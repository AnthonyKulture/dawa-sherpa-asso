export const siteConfig = {
  name: 'Parrains et Marraines pour le Népal',
  shortName: 'PMPN',
  url: 'https://www.dawasherpa-asso.org',
  description:
    "Solidarité au Népal depuis 2007. L'association soutient les villages de Taksindu et Chhulemu : scolarité, grand âge, santé, reconstruction.",
  contact: {
    email: 'dachhiridawasherpa@gmail.com',
    phones: ['+33 4 57 43 79 43', '+33 6 04 52 42 79'],
    whatsapp: 'https://wa.me/33604524279',
  },
  socials: {
    facebook: 'https://facebook.com/dawasherpa.dachhiri',
    instagram: '',
    whatsapp: 'https://wa.me/33604524279',
  },
  nav: {
    primary: [
      { label: "L'association", href: '/#histoire' },
      { label: 'Actions', href: '/#actions' },
      { label: 'Reconstruction', href: '/#reconstruction' },
      { label: 'Témoignages', href: '/#temoignage' },
    ],
    actions: [
      { label: 'Faire un don', href: '/bientot' },
      { label: 'Parrainer', href: '/bientot' },
      { label: 'Devenir adhérent', href: '/bientot' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
