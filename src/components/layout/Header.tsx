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
        className="flex items-center justify-between gap-8 py-4.5"
        aria-label="Navigation principale"
      >
        <Link href="/" aria-label="Accueil" className="flex shrink-0">
          <Logo className="h-10 w-auto md:h-[42px]" />
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium tracking-[-0.005em] md:flex">
          {siteConfig.nav.primary.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-text transition-colors hover:text-accent-deep">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <Button href="/bientot" variant="ghost" className="hidden md:inline-flex">
            Adhérer
          </Button>
          <Button href="/bientot" variant="accent" className="group hidden sm:inline-flex">
            Faire un don <ButtonArrow />
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
