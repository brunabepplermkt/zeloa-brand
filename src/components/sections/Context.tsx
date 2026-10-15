import { PhotoFrame } from "@/components/ui/Frames";
import { Accent, Label, SectionHeader } from "@/components/ui/Typography";
import { context, images } from "@/content/site";

export function Context() {
  return (
    <section id="conteudo" aria-labelledby="contexto-title" className="bg-nevoa py-24 md:py-32">
      <div className="z-container">
        <SectionHeader
          index="01"
          label={context.label}
          title={<span id="contexto-title"><Accent text={context.headline} /></span>}
          body={context.body}
        />

        {/* Pessoalmente × no celular */}
        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-6">
          <PhotoFrame
            src={images.interior.src}
            alt={images.interior.alt}
            caption={images.interior.caption}
            fig="Fig. 02"
            ratio="aspect-[3/2]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="lg:col-span-7"
          />
          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <div data-reveal className="border-t-[3px] border-noite pt-5">
              <Label className="text-grafite">Pessoalmente</Label>
              <p className="mt-3 text-h4 font-semibold text-pretty">{context.contrast.left}</p>
            </div>
            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
              className="mt-10 border-t border-bruma pt-5"
            >
              <Label className="text-grafite">No celular</Label>
              <p className="mt-3 text-h4 font-semibold text-pretty text-grafite">
                {context.contrast.right}
              </p>
            </div>
          </div>
        </div>

        {/* Jornada · estilo Planta: linhas de 1px e rótulos em mono */}
        <div className="mt-24 md:mt-32">
          <div data-reveal className="flex items-center gap-4">
            <Label className="text-noite">{context.journeyLabel}</Label>
            <span aria-hidden className="h-px flex-1 bg-bruma" />
            <Label className="hidden text-grafite sm:block">4 pontos de contato</Label>
          </div>

          <ol className="relative mt-10 grid gap-0 md:grid-cols-4">
            {context.journey.map((step, i) => (
              <li
                key={step.channel}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="relative border-l border-bruma pb-10 pl-6 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-8 md:pt-6"
              >
                {/* nó da planta */}
                <span
                  aria-hidden
                  className="absolute -left-[4px] top-0 size-[7px] bg-noite md:-top-[4px] md:left-0"
                />
                <Label className="text-grafite">
                  0{i + 1} · {step.channel}
                </Label>
                <p className="mt-3 text-h3 font-semibold">{step.action}</p>
                <p className="mt-2 max-w-[28ch] text-small text-grafite">{step.note}</p>
              </li>
            ))}
          </ol>

          <div data-reveal className="mt-10 flex items-center justify-end gap-3 md:mt-12">
            <span aria-hidden className="hidden h-px flex-1 bg-bruma md:block" />
            <span className="z-label bg-noite px-3 py-2 text-nevoa">Reserva direta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
