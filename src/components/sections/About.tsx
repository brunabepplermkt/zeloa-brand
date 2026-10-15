import { Accent, Label, SectionHeader } from "@/components/ui/Typography";
import { about, brand } from "@/content/site";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-nevoa py-24 text-noite md:py-32">
      <div className="z-container">
        <SectionHeader
          index="06"
          label={about.label}
          title={<span id="sobre-title"><Accent text={about.headline} /></span>}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8 md:mt-24">
          {/* Manifesto / História */}
          <div data-reveal className="space-y-6 lg:col-span-5">
            <div className="border-t-[3px] border-noite pt-6">
              <Label className="text-grafite">Origem</Label>
              <div className="mt-4 space-y-4">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-body-lg text-pretty text-noite/90 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 font-mono text-[13px] font-semibold text-noite">
                — {brand.signature}
              </p>
            </div>
          </div>

          {/* 4 Valores */}
          <div data-reveal className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-8 sm:grid-cols-2">
              {about.values.map((val, i) => (
                <div
                  key={val.title}
                  className="flex flex-col justify-between border-t border-bruma pt-5"
                >
                  <div>
                    <span className="font-mono text-[11px] text-grafite block">
                      0{i + 1} · VALOR
                    </span>
                    <h3 className="mt-3 text-h3 font-bold text-noite">{val.title}</h3>
                    <p className="mt-2 text-body text-grafite leading-relaxed">
                      {val.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
