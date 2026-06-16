import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal, RevealStagger, RevealStaggerItem } from '@/components/ui/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contactez l'association Parrains et Marraines pour le Népal : courriel, téléphone, WhatsApp et adresse du siège.",
  alternates: { canonical: '/contact' },
};

const { contact, socials, org, name } = siteConfig;

const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
const fullAddress = `${contact.address.street}, ${contact.address.postalCode} ${contact.address.city}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${name}, ${fullAddress}`,
)}`;

type Line = { text: string; href?: string };

const channels: {
  icon: typeof IconMail;
  eyebrow: string;
  title: string;
  lines: Line[];
  note?: string;
}[] = [
  {
    icon: IconMail,
    eyebrow: '01',
    title: 'Écrivez-nous',
    lines: [{ text: contact.email, href: `mailto:${contact.email}` }],
    note: 'Nous répondons sous 48 heures.',
  },
  {
    icon: IconPhone,
    eyebrow: '02',
    title: 'Appelez-nous',
    lines: contact.phones.map((p) => ({ text: p, href: telHref(p) })),
    note: 'Du lundi au vendredi.',
  },
  {
    icon: IconBrandWhatsapp,
    eyebrow: '03',
    title: 'WhatsApp',
    lines: [{ text: contact.phones[1], href: socials.whatsapp }],
    note: 'Messages et appels, où que vous soyez.',
  },
  {
    icon: IconMapPin,
    eyebrow: '04',
    title: 'Le siège',
    lines: [
      { text: contact.address.street },
      { text: `${contact.address.postalCode} ${contact.address.city}` },
      { text: 'Voir sur la carte', href: mapsHref },
    ],
  },
];

const bureau = [
  { role: 'Président', name: 'Dachhiri-dawa Sherpa' },
  { role: 'Vice-président', name: 'Pascal Zellner' },
  { role: 'Secrétaire', name: 'Lionel Chapuis' },
  { role: 'Trésorière', name: 'Annie Sherpa' },
  { role: "Président d'honneur", name: 'Patrick Michel' },
];

const comite = [
  'Isabelle Chapuis',
  'Daniel Cambernon',
  'Eric Dussuchal',
  'Cécile Naegelen',
  'Daniel Naegelen',
  'Céline Guévin',
  'Agnès Hermant',
];

function isExternal(href?: string) {
  return Boolean(href?.startsWith('http'));
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Parlons-en.{' '}
            <em className="font-light not-italic text-accent-deep [font-style:italic]">
              Nous sommes à votre écoute
            </em>
            .
          </>
        }
        lede="Une question sur un parrainage, un don, un projet ou une visite au Népal ? Écrivez-nous, appelez-nous : une personne de l'association vous répondra personnellement."
      />

      <section className="py-20 md:py-[120px]">
        <Container>
          <h2 className="sr-only">Nos coordonnées</h2>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <RevealStaggerItem key={c.title} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-bg-surface p-7 transition-[transform,border-color,box-shadow] duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:border-border-2 hover:shadow-[0_28px_56px_-32px_rgba(43,39,36,0.18)] sm:p-8">
                    <div className="mb-7 flex items-start justify-between">
                      <Icon size={26} className="text-accent" aria-hidden />
                      <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-text-2">
                        {c.eyebrow}
                      </span>
                    </div>
                    <h3 className="mb-3 font-display text-xl font-normal tracking-[-0.015em] text-text">
                      {c.title}
                    </h3>
                    <div className="space-y-1.5 text-[14.5px] leading-[1.55] text-text-2">
                      {c.lines.map((line) =>
                        line.href ? (
                          <a
                            key={line.text}
                            href={line.href}
                            {...(isExternal(line.href)
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className="-my-1.5 inline-flex items-center gap-1 break-all rounded-sm py-1.5 font-medium text-text transition-colors hover:text-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
                          >
                            {line.text}
                            {isExternal(line.href) ? (
                              <>
                                <span aria-hidden>&nbsp;→</span>
                                <span className="sr-only"> (nouvel onglet)</span>
                              </>
                            ) : null}
                          </a>
                        ) : (
                          <p key={line.text}>{line.text}</p>
                        ),
                      )}
                    </div>
                    {c.note ? (
                      <p className="mt-auto pt-5 text-[12.5px] leading-snug text-text-2">
                        {c.note}
                      </p>
                    ) : null}
                  </div>
                </RevealStaggerItem>
              );
            })}
          </RevealStagger>

          <Reveal>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl border border-border bg-bg-soft px-7 py-6 text-[13.5px] text-text-2 sm:px-8">
              <span>
                Suivez l&apos;association au quotidien sur les réseaux et restez informé(e) des
                actualités du village.
              </span>
              <div className="flex gap-2.5">
                {socials.facebook ? (
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de l'association (nouvel onglet)"
                    className="flex size-11 items-center justify-center rounded-full border border-border-2 text-text transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-soft"
                  >
                    <IconBrandFacebook size={18} aria-hidden />
                  </a>
                ) : null}
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de l'association (nouvel onglet)"
                  className="flex size-11 items-center justify-center rounded-full border border-border-2 text-text transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-soft"
                >
                  <IconBrandWhatsapp size={18} aria-hidden />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Envoyer un courriel"
                  className="flex size-11 items-center justify-center rounded-full border border-border-2 text-text transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-soft"
                >
                  <IconMail size={18} aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-bg-soft py-20 md:py-[120px]">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="L'équipe"
              title={
                <>
                  Le bureau de{' '}
                  <em className="font-light not-italic text-accent-deep [font-style:italic]">
                    l&apos;association
                  </em>
                  .
                </>
              }
              lede="Des bénévoles engagés, en France et au Népal, qui font vivre l'association tout au long de l'année."
            />
          </Reveal>

          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bureau.map((member) => (
              <RevealStaggerItem key={member.name} className="h-full">
                <div className="h-full rounded-3xl border border-border bg-bg-surface p-7 sm:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-terra">
                    {member.role}
                  </p>
                  <p className="mt-2 font-display text-[22px] font-normal tracking-[-0.015em] text-text">
                    {member.name}
                  </p>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.1}>
            <div className="mt-4 rounded-3xl border border-border bg-bg-surface p-7 sm:p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-text-2">
                Comité exécutif
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-text-2">{comite.join(' · ')}</p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-10 text-[13px] leading-relaxed text-text-2">
              {org.legalForm}, déclarée auprès de la préfecture de {org.prefecture} · RNA {org.rna}{' '}
              · Siège : {fullAddress}.{' '}
              <Link
                href="/mentions-legales"
                className="rounded-sm text-text-2 underline underline-offset-2 transition-colors hover:text-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-soft"
              >
                Mentions légales
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
