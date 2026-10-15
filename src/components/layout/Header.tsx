"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLockup } from "@/components/brand/Logo";
import { brand, contact, nav, whatsappHref } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Sobre o hero (Noite) o header é transparente e claro; depois do scroll vira Névoa.
  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-300 ease-[var(--ease-zeloa)] ${
        solid
          ? "border-b border-bruma/80 bg-nevoa/88 text-noite backdrop-blur-md"
          : "border-b border-transparent text-nevoa"
      }`}
    >
      <a
        href="#conteudo"
        className="z-label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-nevoa focus:px-3 focus:py-2 focus:text-noite"
      >
        Pular para o conteúdo
      </a>
      <div className="z-container flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#topo" aria-label={`${brand.name}, voltar ao início`} className="relative z-10">
          <BrandLockup descriptor={brand.descriptor} />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] font-medium opacity-80 transition-opacity duration-200 hover:opacity-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className={`z-corte z-corte-sm hidden min-h-11 items-center px-5 pr-6 text-[15px] font-semibold transition-colors duration-200 sm:inline-flex ${
              solid ? "bg-noite text-nevoa hover:bg-noite-2" : "bg-nevoa text-noite hover:bg-branco"
            }`}
          >
            Falar no WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="relative z-10 -mr-2 inline-flex size-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 bg-noite text-nevoa lg:hidden"
      >
        <div className="z-container flex h-full flex-col pb-10 pt-[calc(var(--header-h)+32px)]">
          <nav aria-label="Menu">
            <ul className="border-t border-noite-line">
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-noite-line">
                  <a
                    ref={i === 0 ? firstLink : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 text-h3 font-semibold"
                  >
                    {item.label}
                    <span className="z-label text-noite-muted">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="z-corte flex min-h-14 items-center justify-between bg-nevoa px-6 pr-8 text-[15px] font-semibold text-noite"
            >
              Falar no WhatsApp
              <span className="z-label text-grafite">{contact.whatsappDisplay}</span>
            </a>
            <p className="z-label mt-6 text-noite-muted">{brand.signature}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
