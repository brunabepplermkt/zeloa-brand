import { ArtFrame, PhotoFrame } from "@/components/ui/Frames";
import { Accent, Label, SectionHeader } from "@/components/ui/Typography";
import { portfolioIntro, projects } from "@/content/site";

export function Portfolio() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="bg-pedra py-24 text-noite md:py-32">
      <div className="z-container">
        <SectionHeader
          index="04"
          label={portfolioIntro.label}
          title={<span id="projetos-title"><Accent text={portfolioIntro.headline} /></span>}
          body={portfolioIntro.body}
        />

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-8">
          {projects.map((project, i) => {
            // Grade assimétrica: 7 col / 5 col, depois 5 col / 7 col
            const colSpan = i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <article
                key={project.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 120}ms` }}
                className={`flex flex-col justify-between ${colSpan}`}
              >
                <div>
                  {project.image ? (
                    <PhotoFrame
                      src={project.image.src}
                      alt={project.image.alt}
                      caption={`${project.name} · ${project.location}`}
                      fig={`0${i + 1}`}
                      ratio="aspect-[16/10]"
                      corte={i === 0}
                    />
                  ) : (
                    <div className="relative border border-bruma bg-branco p-2 shadow-z-md">
                      <ArtFrame
                        scene={project.scene}
                        ratio="aspect-[16/10]"
                        label={`Direção de arte · Cena 0${i + 1}`}
                      />
                      <div className="mt-2 flex items-center justify-between px-2 py-1 font-mono text-[10px] text-grafite">
                        <span>Guia de composição 35mm</span>
                        <span>{project.scene}</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 border-t border-bruma pt-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-grafite">{project.location}</Label>
                      {project.tag ? (
                        <span className="z-label border border-bruma bg-nevoa/90 px-2 py-0.5 text-grafite">
                          {project.tag}
                        </span>
                      ) : project.placeholder ? (
                        <span className="z-label bg-bruma/60 px-2 py-0.5 text-grafite">
                          Em documentação
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-h3 font-bold">{project.name}</h3>
                    <p className="mt-2 text-small text-grafite leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 pt-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="border border-bruma bg-nevoa px-2.5 py-1 font-mono text-[11px] text-noite/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
