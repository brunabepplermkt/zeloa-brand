import type { ReactNode } from "react";

/**
 * Renderiza um título em que a palavra entre [colchetes] recebe o acento editorial
 * (Instrument Serif itálico). Brand Book: "só de uma a quatro palavras por título".
 *
 * Ex.: "A experiência começa antes do [check-in]."
 */
export function Accent({ text, accentClassName = "" }: { text: string; accentClassName?: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className={`z-serif pr-[0.04em] ${accentClassName}`}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Rótulo em Geist Mono, caixa-alta. */
export function Label({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "h2" | "h3" | "div";
}) {
  return <Tag className={`z-label ${className}`}>{children}</Tag>;
}

/** A Luz · ponto âmbar. Indica presença; nunca é decoração. Uma por composição. */
export function Luz({ pulse = false, className = "" }: { pulse?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-2 shrink-0 rounded-full bg-lume ${pulse ? "z-luz-pulse" : ""} ${className}`}
    />
  );
}

/** Marcador de lista · quadrado em Noite (Brand Book, Auditoria v1.1, item 04). */
export function Marker({ className = "bg-noite" }: { className?: string }) {
  return <span aria-hidden className={`mt-[0.55em] inline-block size-[5px] shrink-0 ${className}`} />;
}

/**
 * Cabeçalho de seção em grid editorial: índice + rótulo à esquerda, título nas colunas 1–7,
 * texto de apoio nas colunas 9–12 (a coluna 8 fica vazia de propósito).
 */
export function SectionHeader({
  index,
  label,
  title,
  body,
  tone = "light",
  className = "",
}: {
  index?: string;
  label: string;
  title: ReactNode;
  body?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-noite-muted" : "text-grafite";
  const line = tone === "dark" ? "border-noite-line" : "border-bruma";
  return (
    <div className={className}>
      <div data-reveal className={`flex items-center justify-between border-t pt-5 ${line}`}>
        <Label className={tone === "dark" ? "text-nevoa" : "text-noite"}>
          {index && <span className="mr-2 opacity-60">{index} ·</span>}
          {label}
        </Label>
        <Label className={`hidden sm:block ${muted}`}>Zeloa Brand</Label>
      </div>
      <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:gap-6">
        <h2 data-reveal className="text-h1 font-bold text-balance lg:col-span-7">
          {title}
        </h2>
        {body && (
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className={`text-body-lg text-pretty lg:col-span-4 lg:col-start-9 lg:self-end ${muted}`}
          >
            {body}
          </p>
        )}
      </div>
    </div>
  );
}
