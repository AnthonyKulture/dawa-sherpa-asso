import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
} from '@tabler/icons-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/config/site';

const columns = [
  {
    title: 'Plan du site',
    links: [
      { label: "L'association", href: '/#histoire' },
      { label: 'Nos actions', href: '/#actions' },
      { label: 'Reconstruction', href: '/#reconstruction' },
      { label: 'Témoignages', href: '/#temoignage' },
    ],
  },
  {
    title: 'Agir',
    links: [
      { label: 'Faire un don', href: '/bientot' },
      { label: 'Parrainer un enfant', href: '/bientot' },
      { label: 'Devenir adhérent', href: '/bientot' },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-bg-dark pb-8 pt-20 text-text-on-dark-2">
      <Container>
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/55">
              Association loi 1901 fondée en 2007 par Dawa Dachhiri Sherpa. Solukumbu, Népal. Reçu
              fiscal pour tout don supérieur à 10€.
            </p>
            <div className="mt-6 flex gap-2.5">
              {siteConfig.socials.facebook ? (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-full border border-white/18 text-text-on-dark transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <IconBrandFacebook size={16} aria-hidden />
                </a>
              ) : null}
              {siteConfig.socials.instagram ? (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full border border-white/18 text-text-on-dark transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <IconBrandInstagram size={16} aria-hidden />
                </a>
              ) : null}
              {siteConfig.socials.whatsapp ? (
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex size-9 items-center justify-center rounded-full border border-white/18 text-text-on-dark transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <IconBrandWhatsapp size={16} aria-hidden />
                </a>
              ) : null}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-full border border-white/18 text-text-on-dark transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <IconMail size={16} aria-hidden />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-text-on-dark">
                {column.title}
              </h2>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/65 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-text-on-dark">
              Contact
            </h2>
            <ul className="space-y-2 text-[13px] text-white/65">
              {siteConfig.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="transition-colors hover:text-accent"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="break-all transition-colors hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-white/45">
          <span>
            © {year} {siteConfig.name} · Tous droits réservés
          </span>
          <div className="flex gap-4">
            {siteConfig.nav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
