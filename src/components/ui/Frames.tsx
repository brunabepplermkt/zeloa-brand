import Image from "next/image";
import type { ReactNode } from "react";

type Scene = "hora-azul" | "nevoa" | "interior" | "mata";

/**
 * Moldura editorial: foto + legenda técnica em mono separada por linha fina.
 * Brand Book · seção 08 (Molduras): "uma moldura com corte por página".
 */
export function PhotoFrame({
  src,
  alt,
  caption,
  fig,
  ratio = "aspect-[4/5]",
  corte = false,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  tone = "light",
  className = "",
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  fig?: string;
  ratio?: string;
  corte?: boolean;
  priority?: boolean;
  sizes?: string;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  const line = tone === "dark" ? "border-noite-line text-noite-muted" : "border-bruma text-grafite";
  return (
    <figure className={className}>
      <div className={`z-zoom relative overflow-hidden bg-noite-2 ${ratio} ${corte ? "z-corte z-corte-lg" : ""}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        {children}
      </div>
      {(caption || fig) && (
        <figcaption className={`mt-3 flex items-start justify-between gap-4 border-t pt-3 ${line}`}>
          <span className="z-label">{caption}</span>
          {fig && <span className="z-label shrink-0">{fig}</span>}
        </figcaption>
      )}
    </figure>
  );
}

const scenes: Record<Scene, string> = {
  // Fachada na hora azul · luz interna acesa
  "hora-azul":
    "radial-gradient(60% 40% at 50% 88%, rgba(245,176,62,.55), rgba(245,176,62,0) 70%), linear-gradient(180deg, #1d4458 0%, #16303a 55%, #0e1e25 100%)",
  // Névoa da manhã · horizonte a 1/3
  nevoa:
    "radial-gradient(80% 30% at 50% 62%, rgba(243,245,244,.55), rgba(243,245,244,0) 70%), linear-gradient(180deg, #c3cfcd 0%, #9db3a6 58%, #3d5c4f 100%)",
  // Interior · luz lateral da janela
  interior:
    "radial-gradient(55% 70% at 12% 40%, rgba(255,250,240,.6), rgba(255,250,240,0) 70%), linear-gradient(100deg, #8a8f8a 0%, #5f6a6b 50%, #2a3a40 100%)",
  // Mata · luz rasante entre árvores
  mata:
    "linear-gradient(115deg, rgba(243,245,244,0) 30%, rgba(243,245,244,.28) 42%, rgba(243,245,244,0) 54%), linear-gradient(180deg, #4f665b 0%, #3d5c4f 50%, #16303a 100%)",
};

/**
 * Quadro de direção de arte (placeholder de foto).
 * Brand Book: "Só luz e cor da cena, grão de filme e guias de terço.
 * Leem como orientação para o fotógrafo, não como foto falsa."
 */
export function ArtFrame({
  scene,
  label,
  ratio = "aspect-[3/2]",
  className = "",
}: {
  scene: Scene;
  label?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "Espaço reservado para foto do projeto"}
      className={`z-grain relative overflow-hidden ${ratio} ${className}`}
      style={{ backgroundImage: scenes[scene] }}
    >
      {/* Guias de terço */}
      <div aria-hidden className="absolute inset-0">
        <span className="absolute inset-y-0 left-1/3 w-px bg-white/15" />
        <span className="absolute inset-y-0 left-2/3 w-px bg-white/15" />
        <span className="absolute inset-x-0 top-1/3 h-px bg-white/15" />
        <span className="absolute inset-x-0 top-2/3 h-px bg-white/15" />
      </div>
      {label && (
        <span className="z-label absolute bottom-4 left-4 text-nevoa/85">{label}</span>
      )}
    </div>
  );
}
