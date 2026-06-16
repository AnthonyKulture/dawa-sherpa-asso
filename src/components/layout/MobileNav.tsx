'use client';

import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const drawer = (
    <div
      id="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className={`fixed inset-0 z-[60] overflow-hidden lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        className={`absolute inset-0 cursor-default bg-bg-dark/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`absolute inset-y-0 right-0 flex w-[min(360px,90vw)] flex-col bg-bg p-6 shadow-2xl transition-transform duration-300 ease-[var(--ease-soft)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="flex size-11 cursor-pointer touch-manipulation items-center justify-center rounded-full border border-border-2 text-text transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          >
            <IconX size={20} aria-hidden />
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="mt-8 flex flex-col gap-1.5">
          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="min-h-[48px] rounded-xl px-3 py-3 font-display text-2xl font-light text-text transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2.5 pt-8">
          <Button href="/faire-un-don" variant="accent" className="justify-center">
            Faire un don
          </Button>
          <Button href="/faire-un-don" variant="ghost" className="justify-center">
            Devenir adhérent
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="flex size-11 cursor-pointer touch-manipulation items-center justify-center rounded-full border border-border-2 text-text transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg lg:hidden"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen(true)}
      >
        <IconMenu2 size={20} aria-hidden />
      </button>

      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
