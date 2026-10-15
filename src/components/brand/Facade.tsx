/**
 * A Fachada · Brand Book seção 08, elemento 3.
 * Grade de janelas, algumas acesas: abstração de uma hospedagem ocupada à noite.
 * Lajes entre andares, janelas com brilho e luz mais frequente nos andares baixos.
 *
 * Gerada de forma determinística (sem Math.random) para não haver diferença entre servidor e cliente.
 */
export function Facade({
  cols = 16,
  floors = 7,
  seed = 7,
  className = "",
}: {
  cols?: number;
  floors?: number;
  seed?: number;
  className?: string;
}) {
  const cellW = 40;
  const cellH = 56;
  const winW = 18;
  const winH = 28;
  const width = cols * cellW;
  const height = floors * cellH;

  // PRNG simples e determinístico (mulberry32)
  let t = seed >>> 0;
  const rand = () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };

  const windows: { x: number; y: number; lit: boolean }[] = [];
  for (let f = 0; f < floors; f++) {
    // Mais luz nos andares de baixo
    const p = 0.03 + (f / (floors - 1)) * 0.11;
    for (let c = 0; c < cols; c++) {
      windows.push({
        x: c * cellW + (cellW - winW) / 2,
        y: f * cellH + (cellH - winH) / 2 - 4,
        lit: rand() < p,
      });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="facade-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5B03E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F5B03E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="facade-lit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5B03E" />
          <stop offset="100%" stopColor="#C98A2A" />
        </linearGradient>
      </defs>
      {/* Lajes entre andares */}
      {Array.from({ length: floors }).map((_, f) => (
        <rect key={`slab-${f}`} x="0" y={(f + 1) * cellH - 6} width={width} height="3" fill="#0B171D" />
      ))}
      {windows.map((w, i) =>
        w.lit ? (
          <g key={i}>
            <circle cx={w.x + winW / 2} cy={w.y + winH / 2} r="26" fill="url(#facade-glow)" />
            <rect x={w.x} y={w.y} width={winW} height={winH} fill="url(#facade-lit)" opacity="0.92" />
          </g>
        ) : (
          <rect key={i} x={w.x} y={w.y} width={winW} height={winH} fill="#16303A" />
        ),
      )}
    </svg>
  );
}
