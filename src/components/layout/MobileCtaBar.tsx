"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/content/site";

/**
 * Barra de WhatsApp fixa no celular.
 * Aparece depois do hero e some quando o CTA final está na tela, para não competir com ele.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    const final = document.getElementById("contato");
    if (!hero || !final || !("IntersectionObserver" in window)) return;

    let heroVisible = true;
    let finalVisible = false;
    const update = () => setVisible(!heroVisible && !finalVisible);

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroVisible = e.isIntersecting;
        if (e.target === final) finalVisible = e.isIntersecting;
      }
      update();
    });
    io.observe(hero);
    io.observe(final);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(12px,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 ease-[var(--ease-zeloa)] md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="z-corte flex min-h-14 items-center justify-between bg-noite px-5 pr-8 text-[15px] font-semibold text-nevoa shadow-z-lg"
      >
        <span>Falar no WhatsApp</span>
        <span className="z-label text-noite-muted">Resposta em 1 dia útil</span>
      </a>
    </div>
  );
}
