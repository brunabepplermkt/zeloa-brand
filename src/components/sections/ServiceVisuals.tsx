import Image from "next/image";
import { Label, Luz } from "@/components/ui/Typography";
import { images } from "@/content/site";

/*
 * Visuais dos serviços. São EXEMPLOS ILUSTRATIVOS de entregas, sem nomes de clientes reais.
 * "Sua Hospedagem" é um nome genérico de demonstração.
 */

function Tag({ children = "Exemplo ilustrativo" }: { children?: string }) {
  return <Label className="text-grafite">{children}</Label>;
}

/* 01 · Site ---------------------------------------------------------------- */
export function SiteVisual() {
  const units = [
    {
      name: "Chalé da Mata",
      info: "2 pessoas · lareira · aceita pet",
      price: "R$ 480",
      image: "/images/projeto-quarto-suite.jpg",
    },
    {
      name: "Cabana do Vale",
      info: "4 pessoas · ofurô · vista panorâmica",
      price: "R$ 620",
      image: "/images/projeto-deck-ofuro.jpg",
    },
    {
      name: "Suíte Jardim",
      info: "2 pessoas · café colonial incluído",
      price: "R$ 390",
      image: "/images/projeto-morada-cabana.jpg",
    },
  ];
  return (
    <div className="relative pb-10 pr-6 sm:pr-16">
      <div className="overflow-hidden border border-bruma bg-branco shadow-z-md">
        {/* barra do navegador */}
        <div className="flex items-center gap-3 border-b border-bruma bg-nevoa px-3 py-2">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2 bg-bruma" />
            <span className="size-2 bg-bruma" />
            <span className="size-2 bg-bruma" />
          </span>
          <span className="truncate font-mono text-[11px] text-grafite">suahospedagem.zeloa.io</span>
        </div>
        <div className="relative aspect-[16/8]">
          <Image src={images.landscape.src} alt="" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noite/75 via-noite/20 to-noite/0" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 text-nevoa">
            <span className="font-serif text-[15px] italic">Sua Hospedagem</span>
            <span className="hidden gap-4 font-mono text-[10px] uppercase tracking-[0.08em] sm:flex">
              <span>Acomodações</span>
              <span>Região</span>
              <span>Reservar</span>
            </span>
          </div>
          <p className="absolute bottom-3 left-4 max-w-[24ch] text-[clamp(15px,2vw,20px)] font-bold leading-tight text-nevoa">
            Silêncio, lareira e café passado.
          </p>
        </div>

        {/* Barra de Reserva: Escolher datas e quantidade de pessoas */}
        <div className="border-y border-bruma bg-nevoa p-2.5 sm:p-3">
          <div className="grid grid-cols-12 gap-1.5 sm:gap-2 items-center">
            {/* Seletor de Datas */}
            <div className="col-span-5 border border-bruma bg-branco px-2 py-1.5 flex items-center gap-2">
              <svg className="size-3.5 text-grafite shrink-0 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <div className="min-w-0">
                <span className="font-mono text-[8px] uppercase tracking-wider text-grafite block leading-none">Datas</span>
                <span className="font-mono text-[11px] font-bold text-noite truncate block">14 a 16 nov</span>
              </div>
            </div>

            {/* Seletor de Hóspedes */}
            <div className="col-span-4 border border-bruma bg-branco px-2 py-1.5 flex items-center gap-2">
              <svg className="size-3.5 text-grafite shrink-0 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <div className="min-w-0">
                <span className="font-mono text-[8px] uppercase tracking-wider text-grafite block leading-none">Pessoas</span>
                <span className="font-mono text-[11px] font-bold text-noite truncate block">2 ad. · 1 pet</span>
              </div>
            </div>

            {/* Botão de Busca */}
            <div className="col-span-3">
              <div className="z-corte z-corte-sm flex h-full min-h-[36px] items-center justify-center bg-noite px-2 py-1 font-mono text-[10px] font-semibold text-nevoa hover:bg-noite-2 transition-colors cursor-pointer text-center">
                <span>Ver vagas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de Disponibilidade */}
        <div className="flex items-center justify-between border-b border-bruma bg-nevoa/40 px-4 py-1.5">
          <span className="font-mono text-[9px] uppercase tracking-wider text-grafite">
            3 acomodações livres no período
          </span>
          <span className="z-label text-musgo text-[9px] flex items-center gap-1">
            <span className="size-[4px] bg-musgo rounded-full" />
            Tarifa direta
          </span>
        </div>

        <ul className="divide-y divide-bruma">
          {units.map((u) => (
            <li key={u.name} className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-nevoa/50 transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative size-12 shrink-0 overflow-hidden bg-pedra border border-bruma">
                  <Image src={u.image} alt={u.name} fill sizes="48px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-noite">{u.name}</p>
                  <p className="truncate text-[12px] text-grafite">{u.info}</p>
                </div>
              </div>
              <p className="shrink-0 text-right font-mono text-[11px] text-grafite">
                a partir de <span className="block text-[13px] font-bold text-noite">{u.price}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Celular com foto da cabana de Santa Catarina */}
      <div className="absolute bottom-0 right-0 w-[38%] min-w-[140px] max-w-[210px] border-[5px] border-noite bg-noite shadow-z-lg">
        <div className="relative aspect-[9/14] bg-branco overflow-hidden">
          <Image src="/images/cabana-serra-catarinense.jpg" alt="Cabana na Serra Catarinense" fill sizes="210px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noite/95 via-noite/35 to-transparent p-3 flex flex-col justify-end">
            <span className="z-label text-hora-clara text-[9px]">Reserva Direta</span>
            <p className="text-[12px] font-bold leading-tight text-nevoa">Cabana da Serra</p>
            <div className="mt-1 flex items-center justify-between font-mono text-[9px] text-nevoa/80 border-y border-noite-line/70 py-1">
              <span>14 a 16 nov</span>
              <span>2 adultos</span>
            </div>
            <div className="z-corte z-corte-sm mt-2 flex items-center justify-between bg-nevoa px-2.5 py-1.5 text-[10px] font-semibold text-noite">
              <span>Reservar</span>
              <span className="font-mono text-[10px]">R$ 480/nt</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0">
        <Tag />
      </div>
    </div>
  );
}

/* 02 · Guia Zeloa ---------------------------------------------------------- */
export function GuideVisual() {
  return (
    <div className="relative pb-6">
      <div className="grid gap-6 sm:grid-cols-12 items-start">
        {/* Celular com o Guia Zeloa aberto no navegador */}
        <div className="sm:col-span-7 border-[5px] border-noite bg-noite shadow-z-lg">
          {/* Topo do navegador mobile */}
          <div className="flex items-center justify-between border-b border-noite-line bg-noite px-3 py-2 text-nevoa">
            <span className="font-mono text-[10px] text-noite-muted">guia.suahospedagem.com.br</span>
            <span className="z-label text-musgo flex items-center gap-1 text-[9px]">
              <span className="size-[5px] bg-musgo" />
              Ao vivo
            </span>
          </div>

          <div className="bg-nevoa p-4 text-noite">
            {/* Header da hospedagem */}
            <div className="border-b border-bruma pb-3">
              <span className="z-label text-grafite text-[10px]">Manual do Hóspede</span>
              <h4 className="font-serif text-[18px] italic text-noite">Chalé da Mata</h4>
              <p className="font-mono text-[10px] text-grafite mt-0.5">Check-in: 14h · Check-out: 11h</p>
            </div>

            {/* Ação 1: Wi-Fi com cópia em 1 clique */}
            <div className="mt-3 border border-bruma bg-branco p-3">
              <div className="flex items-center justify-between">
                <span className="z-label text-noite font-bold flex items-center gap-1.5">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
                  Wi-Fi da Cabana
                </span>
                <span className="z-label text-musgo text-[10px]">5 GHz</span>
              </div>
              <div className="mt-2 flex items-center justify-between bg-pedra/60 px-2.5 py-1.5 border border-bruma">
                <div>
                  <span className="font-mono text-[9px] text-grafite block">SENHA</span>
                  <span className="font-mono text-[12px] font-bold text-noite">floresta2026</span>
                </div>
                <span className="z-corte z-corte-sm bg-noite px-2 py-1 font-mono text-[9px] font-semibold text-nevoa">
                  Copiar
                </span>
              </div>
            </div>

            {/* Ação 2: Chaves & Portão */}
            <div className="mt-2 border border-bruma bg-branco p-3">
              <div className="flex items-center justify-between">
                <span className="z-label text-noite font-bold flex items-center gap-1.5">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Cofre de Chaves
                </span>
                <span className="font-mono text-[11px] font-bold text-noite bg-pedra px-2 py-0.5 border border-bruma">1409</span>
              </div>
              <p className="mt-1 font-mono text-[10px] text-grafite">Cofre ao lado da porta principal. Gire após retirar.</p>
            </div>

            {/* Ação 3: Instruções rápidas */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="border border-bruma bg-branco p-2.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-grafite block">Lareira</span>
                <span className="text-[12px] font-semibold text-noite block mt-0.5">Como acender</span>
                <span className="font-mono text-[9px] text-grafite block mt-1">Passo a passo →</span>
              </div>
              <div className="border border-bruma bg-branco p-2.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-grafite block">Ofurô</span>
                <span className="text-[12px] font-semibold text-noite block mt-0.5">Aquecimento</span>
                <span className="font-mono text-[9px] text-grafite block mt-1">Como ligar →</span>
              </div>
            </div>

            {/* Ação 4: Dicas dos anfitriões */}
            <div className="mt-2 border border-bruma bg-branco p-3">
              <span className="z-label text-grafite text-[9px] block">Dica dos anfitriões</span>
              <p className="text-[12px] font-semibold text-noite mt-0.5">Padaria Colonial do Vale · 5 min</p>
              <p className="font-mono text-[10px] text-grafite">Pão de fermentação natural e queijo artesanal.</p>
            </div>
          </div>
        </div>

        {/* Placa física de mesa com QR Code */}
        <div className="sm:col-span-5 flex flex-col justify-between">
          <div className="border border-bruma bg-branco p-5 shadow-z-md">
            <div className="flex items-center justify-between border-b border-bruma pb-3">
              <span className="z-label text-grafite">Placa no quarto</span>
              <Luz />
            </div>

            <div className="mt-4 flex flex-col items-center justify-center p-4 bg-nevoa border border-bruma text-center">
              {/* QR Code SVG */}
              <svg viewBox="0 0 120 120" className="size-24 text-noite" fill="currentColor" aria-hidden>
                <rect x="10" y="10" width="30" height="30" fill="currentColor" />
                <rect x="15" y="15" width="20" height="20" fill="#F3F5F4" />
                <rect x="20" y="20" width="10" height="10" fill="currentColor" />
                
                <rect x="80" y="10" width="30" height="30" fill="currentColor" />
                <rect x="85" y="15" width="20" height="20" fill="#F3F5F4" />
                <rect x="90" y="20" width="10" height="10" fill="currentColor" />
                
                <rect x="10" y="80" width="30" height="30" fill="currentColor" />
                <rect x="15" y="85" width="20" height="20" fill="#F3F5F4" />
                <rect x="20" y="90" width="10" height="10" fill="currentColor" />
                
                <rect x="48" y="15" width="8" height="8" fill="currentColor" />
                <rect x="62" y="15" width="8" height="18" fill="currentColor" />
                <rect x="48" y="32" width="14" height="8" fill="currentColor" />
                <rect x="15" y="52" width="18" height="8" fill="currentColor" />
                <rect x="42" y="48" width="18" height="18" fill="currentColor" />
                <rect x="68" y="48" width="10" height="28" fill="currentColor" />
                <rect x="86" y="52" width="20" height="8" fill="currentColor" />
                <rect x="48" y="74" width="12" height="18" fill="currentColor" />
                <rect x="85" y="72" width="18" height="8" fill="currentColor" />
                <rect x="85" y="88" width="20" height="18" fill="currentColor" />
                <rect x="68" y="84" width="8" height="22" fill="currentColor" />
              </svg>
              <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-wider text-noite">
                Aponte a câmera
              </p>
              <p className="font-mono text-[9px] text-grafite mt-0.5">
                Wi-Fi, chaves e dicas no seu celular
              </p>
            </div>

            <div className="mt-4 space-y-2 border-t border-bruma pt-3">
              <div className="flex items-center gap-2 text-small text-grafite">
                <span className="size-[5px] bg-noite shrink-0" />
                <span>Sem baixar aplicativo</span>
              </div>
              <div className="flex items-center gap-2 text-small text-grafite">
                <span className="size-[5px] bg-noite shrink-0" />
                <span>Personalizável pelo anfitrião</span>
              </div>
              <div className="flex items-center gap-2 text-small text-grafite">
                <span className="size-[5px] bg-noite shrink-0" />
                <span>Menos repetição no WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Tag>Exemplo ilustrativo · Abre por link ou QR Code na acomodação</Tag>
      </div>
    </div>
  );
}

/* 03 · Branding ------------------------------------------------------------ */
export function BrandingVisual() {
  const palette = [
    { name: "Musgo", hex: "#3D5C4F", cls: "bg-musgo" },
    { name: "Sálvia", hex: "#9DB3A6", cls: "bg-salvia" },
    { name: "Névoa", hex: "#F3F5F4", cls: "bg-nevoa border border-bruma" },
    { name: "Noite", hex: "#16303A", cls: "bg-noite-2" },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 border-l border-t border-bruma">
        <div className="border-b border-r border-bruma p-4">
          <Label className="text-grafite">Logotipo</Label>
          <div className="mt-4 flex aspect-[4/3] flex-col items-center justify-center bg-musgo text-nevoa">
            <span className="font-serif text-[clamp(22px,3vw,34px)] italic leading-none">Sua Hospedagem</span>
            <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] opacity-75">
              Serra · desde 2019
            </span>
          </div>
        </div>
        <div className="border-b border-r border-bruma p-4">
          <Label className="text-grafite">Paleta</Label>
          <ul className="mt-4 grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-1.5">
            {palette.map((c) => (
              <li key={c.name} className={`flex flex-col justify-end p-2 ${c.cls}`}>
                <span
                  className={`font-mono text-[9px] uppercase tracking-[0.08em] ${
                    c.name === "Névoa" || c.name === "Sálvia" ? "text-noite" : "text-nevoa"
                  }`}
                >
                  {c.name}
                  <span className="block opacity-70">{c.hex}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-r border-bruma p-4">
          <Label className="text-grafite">Tipografia</Label>
          <div className="mt-4 flex aspect-[4/3] flex-col justify-between bg-branco p-3">
            <span className="font-serif text-[clamp(40px,6vw,64px)] italic leading-none">Aa</span>
            <div className="font-mono text-[10px] leading-relaxed text-grafite">
              <p>Títulos · Serifa itálica</p>
              <p>Texto · Grotesca 400</p>
            </div>
          </div>
        </div>
        <div className="border-b border-r border-bruma p-4">
          <Label className="text-grafite">Aplicação</Label>
          <div className="relative mt-4 aspect-[4/3] overflow-hidden">
            <Image src={images.detail.src} alt="" fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" />
            <span className="absolute bottom-2 left-2 bg-nevoa px-2 py-1 font-serif text-[13px] italic text-musgo">
              Café da manhã
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Tag>Exemplo ilustrativo · Brand book</Tag>
      </div>
    </div>
  );
}

/* 04 · Conteúdo ------------------------------------------------------------ */
export function ContentVisual() {
  const posts = [
    {
      src: "/images/cabana-serra-catarinense.jpg",
      tag: "Serra",
      text: "Silêncio, lareira e serra.",
      alt: "Cabana contemporânea na serra catarinense",
    },
    {
      src: "/images/projeto-deck-ofuro.jpg",
      tag: "Feriado",
      text: "15/11: duas cabanas livres",
      alt: "Deck com ofurô aquecido ao pôr do sol",
    },
    {
      src: "/images/projeto-quarto-suite.jpg",
      tag: "Conforto",
      text: "Acordar com a serra na janela.",
      alt: "Quarto com vista panorâmica para araucárias",
    },
    {
      src: "/images/projeto-cafe-artesanal.jpg",
      tag: "Manhã",
      text: "Café passado e pão fresco às 8h.",
      alt: "Café artesanal coado na varanda",
    },
    {
      src: "/images/paisagem-nevoa.jpg",
      tag: "Guia",
      text: "5 trilhas a 20 min daqui.",
      alt: "Mata com araucárias e névoa",
    },
    {
      src: "/images/interior-luz-janela.jpg",
      tag: "Pausa",
      text: "O fim de semana que você adiou.",
      alt: "Interior aconchegante com luz natural",
    },
    {
      src: "/images/instagram-pet-deck.jpg",
      tag: "Pet friendly",
      text: "Seu pet também é nosso hóspede.",
      alt: "Cachorro relaxando no deck de madeira",
    },
    {
      src: "/images/hero-cabana-hora-azul.jpg",
      tag: "Chegada",
      text: "A luz acesa esperando por você.",
      alt: "Cabana na hora azul com luzes acesas",
    },
    {
      src: "/images/instagram-fogo-vinho.jpg",
      tag: "Noite",
      text: "Vinho e fogo de chão no deck.",
      alt: "Fogo de chão e taças de vinho no deck ao entardecer",
    },
  ];

  return (
    <div className="mx-auto max-w-[460px] lg:mx-0 lg:ml-auto">
      <div className="border border-bruma bg-branco p-4 shadow-z-md">
        <div className="flex items-center gap-3 border-b border-bruma pb-3.5">
          <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-bruma">
            <Image src="/images/cabana-serra-catarinense.jpg" alt="Perfil da hospedagem" fill sizes="44px" className="object-cover" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-[14px] font-semibold text-noite">suahospedagem</p>
              <span className="size-[5px] rounded-full bg-musgo" title="Conta ativa" />
            </div>
            <p className="truncate text-[12px] text-grafite">Cabanas na serra · reserva direta no link ↓</p>
          </div>
        </div>

        <ul className="mt-3.5 grid grid-cols-3 gap-[3px]">
          {posts.map((p, i) => (
            <li key={i} className="group relative aspect-[4/5] overflow-hidden bg-noite">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="150px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noite/90 via-noite/25 to-transparent p-2 sm:p-2.5 flex flex-col justify-end">
                <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-wider text-hora-clara font-medium">
                  {p.tag}
                </span>
                <p className="mt-0.5 text-[clamp(9px,1.1vw,12px)] font-bold leading-tight text-nevoa drop-shadow-sm">
                  {p.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <Tag>Exemplo ilustrativo · Grade de 9 posts com fotos da propriedade e narrativas coordenadas</Tag>
      </div>
    </div>
  );
}

/* 04 · Soluções digitais --------------------------------------------------- */
type Cell = "direct" | "ical" | "blocked" | "free" | "new";

export function SolutionsVisual() {
  const days = ["T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S"];
  const nums = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
  const rows: { unit: string; cells: Cell[] }[] = [
    { unit: "Chalé 1", cells: ["direct", "direct", "free", "new", "new", "free", "free", "ical", "ical", "free", "direct", "direct", "free", "free"] },
    { unit: "Chalé 2", cells: ["ical", "ical", "ical", "free", "direct", "direct", "free", "free", "free", "blocked", "blocked", "free", "free", "free"] },
    { unit: "Cabana 3", cells: ["free", "free", "direct", "direct", "direct", "free", "blocked", "blocked", "free", "free", "ical", "ical", "ical", "free"] },
    { unit: "Suíte 4", cells: ["blocked", "free", "free", "ical", "ical", "free", "free", "direct", "direct", "free", "free", "free", "direct", "direct"] },
  ];
  const style: Record<Cell, string> = {
    direct: "bg-noite",
    ical: "bg-hora",
    blocked: "z-hatch bg-branco",
    free: "bg-branco border border-bruma",
    new: "bg-noite",
  };
  const legend: { cell: Cell; label: string }[] = [
    { cell: "direct", label: "Reserva direta" },
    { cell: "ical", label: "Via Airbnb/Booking (iCal)" },
    { cell: "blocked", label: "Bloqueado" },
    { cell: "free", label: "Livre" },
  ];

  return (
    <div>
      <div className="border border-bruma bg-nevoa p-4 shadow-z-md sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[15px] font-semibold">Disponibilidade · próximos 14 dias</p>
          <span className="z-label inline-flex items-center gap-1.5 text-musgo">
            <span aria-hidden className="size-[5px] bg-musgo" />
            iCal sincronizado há 4 min
          </span>
        </div>

        <div className="mt-5 overflow-x-auto pb-1 [scrollbar-width:thin]">
          <table className="w-full min-w-[440px] border-separate border-spacing-[3px]">
            <caption className="sr-only">Exemplo de grade de disponibilidade por acomodação</caption>
            <thead>
              <tr>
                <th scope="col" className="sr-only">Acomodação</th>
                {nums.map((n, i) => (
                  <th key={n} scope="col" className="w-[6%] text-center font-mono text-[9px] font-normal text-grafite">
                    {days[i]}
                    <span className="block text-[10px] text-noite">{n}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.unit}>
                  <th scope="row" className="whitespace-nowrap pr-2 text-left text-[12px] font-medium">
                    {r.unit}
                  </th>
                  {r.cells.map((c, i) => (
                    <td key={i} className={`h-7 ${style[c]}`}>
                      {/* A luz: a única nova reserva do dia */}
                      {c === "new" && i === 3 && (
                        <span className="flex h-full items-center justify-center">
                          <Luz pulse className="size-[7px]" />
                        </span>
                      )}
                      <span className="sr-only">{c}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {legend.map((l) => (
            <li key={l.cell} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.06em] text-grafite">
              <span aria-hidden className={`size-3 ${style[l.cell]}`} />
              {l.label}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3 border-t border-bruma pt-4">
          <Luz />
          <p className="text-[13px]">
            <span className="font-semibold">Nova reserva direta:</span> Chalé 1, 17 a 19/11.
          </p>
        </div>
      </div>
      <div className="mt-3">
        <Tag>Exemplo ilustrativo · Dados fictícios</Tag>
      </div>
    </div>
  );
}
