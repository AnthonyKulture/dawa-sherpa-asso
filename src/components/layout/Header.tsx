import Link from 'next/link';
import { Button, ButtonArrow } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/config/site';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-xl backdrop-saturate-150">
      <Container
        as="nav"
        className="flex items-center justify-between gap-4 py-3 md:gap-8 md:py-4"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          aria-label="Accueil"
          className="flex shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <Logo className="h-9 w-auto md:h-[42px]" />
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium tracking-[-0.005em] lg:flex">
          {siteConfig.nav.primary.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md text-text transition-colors hover:text-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-2.5">
          <div className="hidden lg:block">
            <Button href="/faire-un-don" variant="ghost" size="sm">
              Adhérer
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button href="/faire-un-don" variant="accent" size="sm" className="group">
              Faire un don <ButtonArrow />
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
