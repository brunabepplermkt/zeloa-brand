import { Accent, Label, Luz, SectionHeader } from "@/components/ui/Typography";
import { expertise } from "@/content/site";

export function Expertise() {
  const { conversation, glossary } = expertise;

  return (
    <section
      id="especialidade"
      aria-labelledby="especialidade-title"
      className="bg-noite py-24 text-nevoa md:py-32"
    >
      <div className="z-container">
        <SectionHeader
          index="03"
          label={expertise.label}
          title={
            <span id="especialidade-title">
              {expertise.headline.map((line, i) => (
                <span key={i} className={i === 1 ? "block mt-1 sm:mt-2" : "block"}>
                  <Accent text={line} accentClassName="text-lume" />
                </span>
              ))}
            </span>
          }
          body={expertise.body}
          tone="dark"
        />

        {/* Comparativo de Conversa · Antes × Depois */}
        <div data-reveal className="mt-16 md:mt-24">
          <div className="border-t border-noite-line pt-5 flex items-center justify-between">
            <Label className="text-noite-muted">{conversation.label}</Label>
            <span className="z-label hidden text-noite-muted sm:inline-block">WhatsApp na prática</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Antes: Sem site próprio */}
            <div className="flex flex-col justify-between border border-noite-line bg-noite-2/60 p-6 md:p-8">
              <div>
                <div className="flex items-center justify-between border-b border-noite-line pb-4">
                  <span className="z-label text-noite-muted">{conversation.before.tag}</span>
                  <span className="font-mono text-[11px] text-noite-muted">4 mensagens · atrito</span>
                </div>
                <div className="mt-6 space-y-3">
                  {conversation.before.messages.map((msg, idx) => {
                    const isClient = idx % 2 === 0;
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col ${isClient ? "items-start" : "items-end"}`}
                      >
                        <span className="font-mono text-[10px] text-noite-muted/80 mb-1">
                          {isClient ? "Hóspede" : "Você"}
                        </span>
                        <div
                          className={`max-w-[85%] px-4 py-2.5 text-small ${
                            isClient
                              ? "bg-noite-line/70 text-nevoa"
                              : "border border-noite-line bg-noite text-nevoa/90"
                          }`}
                        >
                          {msg}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="mt-8 border-t border-noite-line pt-4 font-mono text-[11px] text-noite-muted">
                Sem informações prévias, cada conversa vira uma troca lenta de dados básicos.
              </p>
            </div>

            {/* Depois: Com site Zeloa */}
            <div className="flex flex-col justify-between border border-hora-clara/30 bg-noite-2 p-6 md:p-8 relative">
              <div>
                <div className="flex items-center justify-between border-b border-noite-line pb-4">
                  <span className="z-label text-nevoa flex items-center gap-2">
                    <Luz pulse />
                    {conversation.after.tag}
                  </span>
                  <span className="z-label text-musgo bg-musgo/10 px-2 py-0.5 border border-musgo/30">
                    {conversation.after.status}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="font-mono text-[10px] text-noite-muted/80 mb-1 block">
                    Hóspede (mensagem preenchida pelo site)
                  </span>
                  <div className="bg-nevoa p-5 text-noite shadow-z-md">
                    <p className="text-body font-medium leading-relaxed">
                      &ldquo;{conversation.after.message}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-bruma pt-3 font-mono text-[11px] text-grafite">
                      <span>Origem: Página do Chalé</span>
                      <span className="text-musgo font-medium">Link do Pix gerado</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-8 border-t border-noite-line pt-4 font-mono text-[11px] text-hora-clara">
                O hóspede chega qualificado: datas, pessoas e acomodação já estão definidos.
              </p>
            </div>
          </div>
        </div>

        {/* Glossário de Especialidade · Linhas de Planta */}
        <div data-reveal className="mt-20 md:mt-32">
          <div className="flex items-center gap-4 border-t border-noite-line pt-5">
            <Label className="text-nevoa">Glossário de especialidade</Label>
            <span aria-hidden className="h-px flex-1 bg-noite-line" />
            <Label className="hidden text-noite-muted sm:block">10 fundamentos</Label>
          </div>

          <div className="mt-10 grid gap-px bg-noite-line sm:grid-cols-2 lg:grid-cols-5">
            {glossary.map((item, i) => (
              <div
                key={item.term}
                className="bg-noite p-5 flex flex-col justify-between transition-colors hover:bg-noite-2"
              >
                <div>
                  <span className="font-mono text-[11px] text-noite-muted block">
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </span>
                  <h4 className="mt-2 text-h4 font-bold text-nevoa leading-snug">
                    {item.term}
                  </h4>
                </div>
                <p className="mt-4 text-small text-noite-muted leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
