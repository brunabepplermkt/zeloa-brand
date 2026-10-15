import { Label, SectionHeader } from "@/components/ui/Typography";
import { processIntro, processSteps } from "@/content/site";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="bg-nevoa py-24 text-noite md:py-32">
      <div className="z-container">
        <SectionHeader
          index="05"
          label={processIntro.label}
          title={<span id="processo-title">{processIntro.headline}</span>}
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {processSteps.map((step, i) => (
            <article
              key={step.index}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              className="flex flex-col justify-between border-t-[3px] border-noite pt-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-noite">
                    ETAPA {step.index}
                  </span>
                  <span className="size-[5px] bg-noite" aria-hidden />
                </div>
                <h3 className="mt-4 text-h3 font-bold text-noite">{step.title}</h3>
                <p className="mt-3 text-body text-grafite leading-relaxed">
                  {step.body}
                </p>
              </div>

              <div className="mt-8 border-t border-bruma pt-4">
                <Label className="text-grafite">Entrega</Label>
                <p className="mt-1.5 font-mono text-[12px] font-semibold text-noite">
                  {step.output}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
