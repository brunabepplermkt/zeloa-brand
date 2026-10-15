import { Facade } from "@/components/brand/Facade";
import { ButtonLink } from "@/components/ui/Button";
import { Label, Luz } from "@/components/ui/Typography";
import { contact, finalCta, whatsappHref } from "@/content/site";

export function FinalCta() {
  return (
    <section
      id="contato"
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-noite py-28 text-nevoa md:py-36"
    >
      {/* A Fachada como textura/fundo arquitetônico ao pé da seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-center opacity-30 md:opacity-40"
      >
        <Facade cols={20} floors={6} seed={11} className="h-64 w-full max-w-[1400px] object-cover object-bottom" />
      </div>

      <div className="z-container relative">
        <div className="max-w-3xl">
          <div data-reveal className="flex items-center gap-4 border-t border-noite-line pt-5">
            <Label className="text-nevoa">{finalCta.label}</Label>
            <span aria-hidden className="h-px flex-1 bg-noite-line" />
            <span className="z-label inline-flex items-center gap-2 text-nevoa">
              <Luz pulse />
              {contact.responseTime}
            </span>
          </div>

          <h2
            id="cta-title"
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
            className="mt-8 text-display font-bold text-balance"
          >
            {finalCta.headline}
          </h2>

          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
            className="mt-6 text-body-lg text-pretty text-noite-muted md:mt-8"
          >
            {finalCta.body}
          </p>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "300ms" }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <ButtonLink
              variant="primary-light"
              href={whatsappHref(finalCta.message)}
              external
              className="text-[16px]"
            >
              {finalCta.cta}
            </ButtonLink>
          </div>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "380ms" }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-noite-line pt-6 font-mono text-[11px] text-noite-muted"
          >
            <span>
              WhatsApp:{" "}
              <a
                href={whatsappHref(finalCta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nevoa hover:underline"
              >
                {contact.whatsappDisplay}
              </a>
            </span>
            <span>
              E-mail:{" "}
              <a href={`mailto:${contact.email}`} className="text-nevoa hover:underline">
                {contact.email}
              </a>
            </span>
            <span>
              Instagram:{" "}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nevoa hover:underline"
              >
                {contact.instagramHandle}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
