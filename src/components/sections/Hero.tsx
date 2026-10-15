import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/Frames";
import { Accent, Label } from "@/components/ui/Typography";
import { hero, images, whatsappHref } from "@/content/site";

/** Mini calendário de disponibilidade: tecnologia discreta sobre a foto. */
function AvailabilityCard() {
  const { availability } = hero;
  return (
    <div className="w-[min(100%,300px)] bg-nevoa p-4 text-noite shadow-z-lg">
      <div className="flex items-center justify-between">
        <Label className="text-grafite">{availability.label}</Label>
        <span className="z-label inline-flex items-center gap-1.5 text-musgo">
          <span aria-hidden className="size-[5px] bg-musgo" />
          {availability.status}
        </span>
      </div>
      <ul className="mt-4 grid grid-cols-7 gap-1" aria-label="Datas de novembro">
        {availability.days.map((d) => {
          const booked = availability.booked.includes(d);
          const selected = availability.selected.includes(d);
          return (
            <li
              key={d}
              className={`flex aspect-square items-center justify-center font-mono text-[11px] ${
                selected
                  ? "bg-noite text-nevoa"
                  : booked
                    ? "z-hatch text-grafite/70 line-through"
                    : "border border-bruma bg-branco"
              }`}
            >
              <span className="sr-only">
                {d} de novembro, {selected ? "selecionado" : booked ? "indisponível" : "livre"}
              </span>
              <span aria-hidden>{d}</span>
            </li>
          );
        })}
      </ul>
      <div className="z-corte z-corte-sm mt-3 flex min-h-10 items-center justify-between bg-noite px-3 pr-5 text-[13px] font-semibold text-nevoa">
        {availability.action}
        <span aria-hidden>→</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-noite text-nevoa"
    >
      {/* Linhas de planta muito sutis no fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="z-container relative h-full">
          <span className="absolute inset-y-0 left-[20px] w-px bg-noite-line/50 md:left-[40px] xl:left-[64px]" />
          <span className="absolute inset-y-0 right-[20px] w-px bg-noite-line/50 md:right-[40px] xl:right-[64px]" />
        </div>
      </div>

      <div className="z-container pb-10 pt-[calc(var(--header-h)+28px)] md:pt-[calc(var(--header-h)+48px)]">
        <div className="flex items-start justify-between gap-6 border-t border-noite-line pt-5">
          <Label className="max-w-[24ch] text-noite-muted sm:max-w-none">{hero.eyebrow}</Label>
          <Label className="hidden text-noite-muted md:block">{hero.types.join(" · ")}</Label>
        </div>

        <div className="mt-10 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7 lg:pt-6">
            <h1 id="hero-title" className="text-display font-bold text-balance">
              {hero.headline.map((line, i) => (
                <span
                  key={i}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                  className={`block ${i === 1 ? "mt-2 text-nevoa/72 md:mt-3" : ""}`}
                >
                  <Accent text={line} accentClassName="text-lume" />
                </span>
              ))}
            </h1>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "240ms" }}
              className="mt-8 max-w-[34rem] text-body-lg text-pretty text-noite-muted md:mt-10"
            >
              {hero.subheadline}
            </p>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "320ms" }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <ButtonLink variant="primary-light" href={whatsappHref()} external>
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink variant="ghost-light" href={hero.secondaryCta.href} arrow={false}>
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "180ms" }}
            className="relative lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9"
          >
            <PhotoFrame
              src={images.hero.src}
              alt={images.hero.alt}
              caption={images.hero.caption}
              fig="Fig. 01"
              corte
              priority
              tone="dark"
              sizes="(min-width: 1280px) 400px, (min-width: 1024px) 42vw, 100vw"
              className="ml-auto max-w-[520px] lg:max-w-none"
            />
            {/* No desktop o calendário avança sobre a coluna vazia; no celular fica sobre a foto */}
            <div className="absolute bottom-16 left-4 md:left-6 lg:-left-24 lg:bottom-20 xl:-left-32">
              <AvailabilityCard />
            </div>
          </div>
        </div>

        <ul
          aria-label="O que fazemos"
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-noite-line pt-5 md:mt-24 md:flex md:justify-between"
        >
          {hero.strip.map((item, i) => (
            <li key={item} className="z-label text-noite-muted">
              <span className="mr-2 text-nevoa/40">0{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
