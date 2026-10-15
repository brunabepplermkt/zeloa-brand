/**
 * Logos oficiais da Zeloa, copiados dos vetores do Brand Book v1.3 (seção 17).
 * Nunca recomponha o wordmark digitando com uma fonte.
 */

type WordmarkProps = {
  className?: string;
  /** Cor do ponto final. Padrão: Lume. Use "currentColor" quando o símbolo aparece junto ou em mono. */
  dot?: string;
  title?: string;
};

export function Wordmark({ className, dot = "var(--color-lume)", title = "Zeloa" }: WordmarkProps) {
  return (
    <svg
      viewBox="0 -17 205 58"
      fill="currentColor"
      className={className}
      role="img"
      aria-label={title}
    >
      <polygon points="7,0 34,0 34,11 12.5,29 34,29 34,34.3 27,40 0,40 0,29 21.5,11 0,11 0,5.7" />
      <path d="M74.5 20A15.5 15.5 0 1 0 71.7 28.9" fill="none" stroke="currentColor" strokeWidth="11" />
      <rect x="44" y="15" width="36" height="10" />
      <polygon points="84,-10.3 91,-16 95,-16 95,40 84,40" />
      <circle cx="120" cy="20" r="15.5" fill="none" stroke="currentColor" strokeWidth="11" />
      <circle cx="166" cy="20" r="15.5" fill="none" stroke="currentColor" strokeWidth="11" />
      <rect x="176" y="0" width="11" height="40" />
      <circle cx="198" cy="34" r="6" style={{ fill: dot }} />
    </svg>
  );
}

type SymbolProps = {
  className?: string;
  /** Mostra a luz. Abaixo de 24px, o Brand Book pede para removê-la. */
  light?: boolean;
  title?: string;
};

/** Símbolo Z Limiar (sem fundo). */
export function ZSymbol({ className, light = true, title }: SymbolProps) {
  return (
    <svg
      viewBox="32 32 56 56"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <polygon
        points="41,32 88,32 88,44 48.5,76 88,76 88,80.7 79,88 32,88 32,76 71.5,44 32,44 32,39.3"
        fill="currentColor"
      />
      {light && <circle cx="77.7" cy="65.7" r="6" fill="var(--color-lume)" />}
    </svg>
  );
}

/**
 * Assinatura com descritor: wordmark + régua fina + descritor em Schibsted 500.
 * Brand Book · seção 14: "O descritor fica em Schibsted 500, depois de uma régua fina,
 * nunca desenhado como logotipo."
 */
export function BrandLockup({
  descriptor,
  className = "",
  wordmarkClassName = "h-[22px] w-auto",
}: {
  descriptor?: string;
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Wordmark className={wordmarkClassName} />
      {descriptor && (
        <>
          <span aria-hidden className="h-5 w-px bg-current opacity-30" />
          <span className="text-[15px] font-medium leading-none tracking-[-0.01em]">{descriptor}</span>
        </>
      )}
    </span>
  );
}
