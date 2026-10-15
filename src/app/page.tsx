import { Hero } from "@/components/sections/Hero";
import { Context } from "@/components/sections/Context";
import { Services } from "@/components/sections/Services";
import { Expertise } from "@/components/sections/Expertise";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="conteudo-principal" className="min-h-screen">
      {/* 1 · Hero (Noite) · headline + foto hora azul + widget de disponibilidade */}
      <Hero />

      {/* 2 · Contexto (Névoa) · A experiência começa antes do check-in + jornada em Planta */}
      <Context />

      {/* 3 · Serviços (Névoa) · 4 blocos editoriais alternados, cada um com um visual funcional */}
      <Services />

      {/* 4 · Especialistas (Noite) · glossário da hospedagem + antes/depois de uma conversa */}
      <Expertise />

      {/* 5 · Projetos (Pedra) · grade assimétrica com placeholders de direção de arte */}
      <Portfolio />

      {/* 6 · Processo (Névoa) · 4 etapas com filete editorial */}
      <Process />

      {/* 7 · Sobre (Névoa) · origem + 4 valores */}
      <About />

      {/* 8 · CTA final (Noite + Fachada) */}
      <FinalCta />

      {/* 9 · Footer minimalista */}
      <Footer />
    </main>
  );
}
