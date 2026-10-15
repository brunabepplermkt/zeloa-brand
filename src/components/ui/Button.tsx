import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "primary-light" | "ghost" | "ghost-light";

const base =
  "group relative inline-flex min-h-11 items-center justify-center gap-3 text-[15px] font-semibold leading-none tracking-[0.005em] transition-colors duration-200 ease-[var(--ease-zeloa)] focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  // Principal em Noite com o Corte (Brand Book · seção 12)
  primary: "z-corte bg-noite px-6 py-4 pr-8 text-nevoa hover:bg-noite-2",
  // Versão sobre fundos Noite
  "primary-light": "z-corte bg-nevoa px-6 py-4 pr-8 text-noite hover:bg-branco",
  ghost: "px-1 py-3 text-noite",
  "ghost-light": "px-1 py-3 text-nevoa",
};

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="size-4 transition-transform duration-300 ease-[var(--ease-zeloa)] group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  arrow?: boolean;
  external?: boolean;
};

/** Botão/link. Sempre "verbo + objeto": o botão diz o que acontece depois do clique. */
export function ButtonLink({
  variant = "primary",
  children,
  arrow = true,
  external = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  const isGhost = variant.startsWith("ghost");
  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      <span className={isGhost ? "z-link pb-1" : undefined}>{children}</span>
      {arrow && <Arrow />}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
