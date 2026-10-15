import { ButtonLink } from "@/components/ui/Button";
import { Marker, Label, Accent, SectionHeader } from "@/components/ui/Typography";
import { services, servicesIntro, whatsappHref } from "@/content/site";
import {
  SiteVisual,
  GuideVisual,
  BrandingVisual,
  ContentVisual,
  SolutionsVisual,
} from "./ServiceVisuals";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-nevoa py-24 md:py-32">
      <div className="z-container">
        <SectionHeader
          index="02"
          label={servicesIntro.label}
          title={<span id="servicos-title"><Accent text={servicesIntro.headline} /></span>}
          body={servicesIntro.body}
        />

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.id}
                data-reveal
                className="border-t-[3px] border-noite pt-8 md:pt-12"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 lg:items-center">
                  {/* Bloco de Conteúdo */}
                  <div
                    className={`flex flex-col justify-center ${
                      isReversed
                        ? "lg:col-span-5 lg:col-start-8 lg:order-2"
                        : "lg:col-span-5 lg:order-1"
                    }`}
                  >
                    <Label className="text-grafite">
                      {service.index} · SERVIÇO
                    </Label>
                    <h3 className="mt-3 text-h2 font-bold tracking-tight text-noite">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-body-lg font-medium text-noite/90">
                      {service.lead}
                    </p>
                    <p className="mt-3 text-body text-grafite text-pretty">
                      {service.description}
                    </p>

                    {/* Entregas com marcadores ortogonais */}
                    <div className="mt-6 border-t border-bruma pt-5">
                      <Label className="text-grafite mb-3 block">O que está incluído</Label>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Marker className="bg-noite" />
                            <span className="text-small font-medium text-noite/85">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-2">
                      <ButtonLink
                        variant="ghost"
                        href={whatsappHref(
                          `Olá! Gostaria de conversar sobre o serviço de ${service.title} para a minha hospedagem.`
                        )}
                        external
                      >
                        Conversar sobre {service.title}
                      </ButtonLink>
                    </div>
                  </div>

                  {/* Visual Funcional */}
                  <div
                    className={`min-w-0 ${
                      isReversed
                        ? "lg:col-span-7 lg:col-start-1 lg:order-1"
                        : "lg:col-span-7 lg:col-start-6 lg:order-2"
                    }`}
                  >
                    {service.visual === "site" && <SiteVisual />}
                    {service.visual === "guide" && <GuideVisual />}
                    {service.visual === "branding" && <BrandingVisual />}
                    {service.visual === "content" && <ContentVisual />}
                    {service.visual === "solutions" && <SolutionsVisual />}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
