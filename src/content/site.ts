/**
 * Conteúdo da landing page da Zeloa Brand.
 *
 * Tudo o que é editável fica aqui: textos, contatos, serviços, projetos e imagens.
 * Os componentes só leem este arquivo, então trocar copy ou dados não exige mexer no layout.
 *
 * Tom de voz (Brand Book · seção 10): claro antes de bonito, específico, calmo,
 * trata por "você" e fala de hóspedes, nunca de "leads".
 */

/* ------------------------------------------------------------------ */
/* Marca e contatos                                                     */
/* ------------------------------------------------------------------ */

export const brand = {
  /**
   * Atenção: o Brand Book v1.2+ usa "Zeloa Brands" (plural, @zeloabrands).
   * Troque aqui se decidir seguir a grafia do Brand Book.
   */
  name: "Zeloa Brand",
  descriptor: "Brand", // aparece depois da régua fina, ao lado do wordmark
  signature: "Tecnologia com zelo.",
  positioning: "Marcas e experiências digitais para hospedagens que querem vender melhor.",
  url: "https://zeloa.io", // TODO: confirmar domínio final
  locale: "pt_BR",
};

export const contact = {
  /** TODO: substituir pelo número real · formato internacional, só dígitos */
  whatsappNumber: "5548900000000",
  whatsappDisplay: "(48) 9 0000-0000",
  whatsappMessage:
    "Olá! Vim pelo site da Zeloa e quero conversar sobre a presença digital da minha hospedagem.",
  /** TODO: substituir pelo e-mail real */
  email: "contato@zeloa.io",
  /** TODO: confirmar perfil */
  instagramHandle: "@zeloabrands",
  instagramUrl: "https://instagram.com/zeloabrands",
  responseTime: "Respondemos no WhatsApp em até 1 dia útil.",
};

export function whatsappHref(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/* Navegação                                                            */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Especialidade", href: "#especialidade" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
];

/* ------------------------------------------------------------------ */
/* Imagens                                                              */
/* ------------------------------------------------------------------ */

/**
 * IMAGENS ILUSTRATIVAS: geradas na direção fotográfica do Brand Book (seção 09)
 * apenas para compor a página. Não são fotos de clientes.
 * Substitua por fotos reais com a Receita Zeloa aplicada.
 */
export const images = {
  hero: {
    src: "/images/hero-cabana-hora-azul.jpg",
    alt: "Cabana de madeira na serra ao anoitecer, com as janelas acesas e araucárias ao fundo",
    caption: "Arquitetura · Hora azul · Luz interna acesa",
  },
  interior: {
    src: "/images/interior-luz-janela.jpg",
    alt: "Quarto de cabana com cama de linho e luz lateral entrando por uma janela ampla com floresta na névoa",
    caption: "Interior · Luz lateral da janela · 35mm",
  },
  detail: {
    src: "/images/detalhe-cafe.jpg",
    alt: "Mãos servindo café passado em uma xícara de cerâmica sobre mesa de madeira",
    caption: "Detalhe · Café passado · 50mm",
  },
  landscape: {
    src: "/images/paisagem-nevoa.jpg",
    alt: "Campos de altitude com araucárias cobertos pela névoa da manhã",
    caption: "Natureza · Névoa da manhã · Horizonte a 1/3",
  },
};

/* ------------------------------------------------------------------ */
/* 1 · Hero                                                             */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Estúdio de marca e presença digital para hospedagens",
  types: ["Cabanas", "Chalés", "Pousadas", "Glampings"],
  // A palavra entre [colchetes] recebe o acento editorial em serifa itálica.
  headline: ["Sua hospedagem já é especial.", "Sua marca também precisa [parecer]."],
  subheadline:
    "Criamos sites, identidade visual e conteúdo para cabanas, chalés, pousadas e glampings. Uma presença digital à altura da experiência, pensada para levar o hóspede até a reserva direta.",
  primaryCta: "Quero transformar minha marca",
  secondaryCta: { label: "Conhecer os serviços", href: "#servicos" },
  availability: {
    label: "Disponibilidade · Novembro",
    status: "Sincronizado",
    days: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    booked: [9, 10, 16, 17, 18],
    selected: [13, 14, 15],
    action: "Reservar 13 a 15/11",
  },
  strip: ["Sites e landing pages", "Identidade visual", "Conteúdo e anúncios", "Reserva direta"],
};

/* ------------------------------------------------------------------ */
/* 2 · Contexto                                                         */
/* ------------------------------------------------------------------ */

export const context = {
  label: "Antes da reserva",
  headline: "A experiência começa antes do [check-in].",
  body: "Antes de reservar, o hóspede conhece sua hospedagem pelo Instagram, pelo Google ou pelo site. Se a apresentação digital parece comum, a experiência real nem chega a ser considerada.",
  contrast: {
    left: "Pessoalmente, a lareira, o silêncio e o café da manhã falam por si.",
    right: "No celular, eles dependem de fotos, palavras e uma página que carrega rápido.",
  },
  journeyLabel: "O caminho do hóspede até você",
  journey: [
    { channel: "Instagram", action: "Descobre", note: "A grade transmite o clima do lugar em três segundos." },
    { channel: "Google", action: "Pesquisa", note: "Procura o nome e encontra (ou não) um site próprio." },
    { channel: "Site", action: "Compara", note: "Olha as acomodações, as fotos, as diárias, as datas livres." },
    { channel: "WhatsApp", action: "Decide", note: "Pergunta o que falta e reserva direto com você." },
  ],
};

/* ------------------------------------------------------------------ */
/* 3 · Serviços                                                         */
/* ------------------------------------------------------------------ */

export type ServiceVisual = "site" | "guide" | "branding" | "content" | "solutions";

export type Service = {
  id: string;
  index: string;
  title: string;
  lead: string;
  description: string;
  items: string[];
  visual: ServiceVisual;
};

export const servicesIntro = {
  label: "Serviços",
  headline: "Do Instagram à reserva, cada ponto de contato com o mesmo [cuidado].",
  body: "Você pode começar por uma frente ou organizar tudo de uma vez. Em qualquer caso, o ponto de partida é a sua hospedagem, não um template.",
};

export const services: Service[] = [
  {
    id: "sites",
    index: "01",
    title: "Sites e landing pages",
    lead: "Sites pensados para hospedagens, não adaptados de outro negócio.",
    description:
      "Uma página para cada acomodação, fotos que carregam rápido no celular e um caminho claro até a reserva: pelo WhatsApp já com as datas, ou direto no seu motor de reservas.",
    items: [
      "Apresentação das acomodações",
      "Pensado primeiro para o celular",
      "WhatsApp com mensagem pronta",
      "Integração com motor de reservas",
      "Calendário sincronizado por iCal",
      "SEO básico e carregamento rápido",
    ],
    visual: "site",
  },
  {
    id: "guia",
    index: "02",
    title: "Guia Zeloa · Manual do hóspede",
    lead: "Tudo o que o hóspede precisa saber, sem você precisar repetir 20 vezes por semana.",
    description:
      "Um guia digital personalizado com a sua marca para o hóspede abrir no celular por link ou QR Code na acomodação. Senha do Wi-Fi com 1 clique para copiar, instruções de check-in, funcionamento da lareira e ofurô, e as melhores dicas de passeios e restaurantes da região.",
    items: [
      "Wi-Fi com cópia de senha em 1 clique",
      "Instruções de chegada e chaves",
      "Como usar lareira, ofurô e ar-condicionado",
      "Guia curado de restaurantes e passeios",
      "Placa de mesa com QR Code em madeira/acrílico",
      "Sem app: abre direto no navegador do celular",
    ],
    visual: "guide",
  },
  {
    id: "branding",
    index: "03",
    title: "Branding e identidade visual",
    lead: "Uma marca que traduz o que o hóspede sente quando chega.",
    description:
      "Criamos ou refinamos a identidade da sua hospedagem a partir do que ela tem de único: o lugar, a arquitetura, o jeito de receber. O resultado é um sistema simples de aplicar no dia a dia.",
    items: [
      "Estratégia e posicionamento",
      "Logotipo e assinaturas",
      "Paleta e tipografia",
      "Direção visual e fotográfica",
      "Brand book",
      "Aplicações: placas, cardápio, enxoval",
    ],
    visual: "branding",
  },
  {
    id: "conteudo",
    index: "04",
    title: "Conteúdo e marketing",
    lead: "Uma presença consistente, sem você precisar postar no improviso.",
    description:
      "Planejamos e produzimos o conteúdo do Instagram e os criativos dos anúncios com a mesma linguagem do site. Menos post genérico, mais motivos para alguém escolher a sua data.",
    items: [
      "Social media",
      "Criativos para Instagram",
      "Campanhas sazonais e feriados",
      "Anúncios com relatório simples",
      "Edição de fotos com padrão único",
      "Textos e legendas",
    ],
    visual: "content",
  },
  {
    id: "solucoes",
    index: "05",
    title: "Soluções digitais",
    lead: "Ferramentas que facilitam a jornada do hóspede e a sua operação.",
    description:
      "Organizamos o que costuma ficar para depois: calendário que se atualiza sozinho, links certos na bio, Google Meu Negócio, mensagens que respondem as perguntas de sempre.",
    items: [
      "Sincronização com Airbnb e Booking",
      "Motor de reservas e Pix",
      "Google Meu Negócio",
      "Link da bio organizado",
      "Respostas rápidas no WhatsApp",
      "Domínio e e-mail profissional",
    ],
    visual: "solutions",
  },
];

/* ------------------------------------------------------------------ */
/* 4 · Especialistas em hospedagens                                     */
/* ------------------------------------------------------------------ */

export const expertise = {
  label: "Especialidade",
  headline: ["Não fazemos sites para qualquer negócio.", "Nós entendemos [hospedagens]."],
  body: "A gente fala a sua língua. Sabe que feriado prolongado lota em março, que hóspede com pet pergunta antes de tudo e que reserva dupla estraga um fim de semana inteiro.",
  glossary: [
    { term: "Diária e temporada", note: "Valores por noite e por acomodação, com alta, baixa e feriados." },
    { term: "Calendário e disponibilidade", note: "O hóspede vê o que está livre sem precisar perguntar." },
    { term: "Motor de reservas", note: "Integramos o seu, ou indicamos o que faz sentido para o seu tamanho." },
    { term: "Airbnb e Booking", note: "Sincronização por iCal para não ter reserva dupla nem bloqueio manual." },
    { term: "WhatsApp", note: "Conversas que já chegam com datas, número de pessoas e acomodação." },
    { term: "Fotos das acomodações", note: "Ordem, corte e edição que mostram cada espaço como ele é." },
    { term: "Diferenciais da propriedade", note: "Lareira, ofurô, vista, pet: o que faz alguém escolher você, em destaque." },
    { term: "Venda direta", note: "O hóspede veio por você. A reserva também pode ser sua, sem comissão." },
    { term: "Experiência do hóspede", note: "Do primeiro clique às instruções de chegada, tudo com o mesmo cuidado." },
    { term: "Turismo e região", note: "Trilhas, vinícolas, cachoeiras: o contexto que vende a viagem inteira." },
  ],
  conversation: {
    label: "A mesma pergunta, com e sem estrutura",
    before: {
      tag: "Sem site próprio",
      messages: ["Oi, tem vaga?", "Pra quando?", "Feriado de novembro", "Quantas pessoas?"],
    },
    after: {
      tag: "Com site Zeloa",
      message:
        "Oi! Vi no site que o Chalé está livre de 14 a 16/11. Somos 2 adultos e um pet. Posso reservar?",
      status: "Datas disponíveis",
    },
  },
};

/* ------------------------------------------------------------------ */
/* 5 · Portfólio                                                        */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string;
  name: string;
  location?: string;
  services: string[];
  summary: string;
  href?: string;
  /** Foto do projeto */
  image?: { src: string; alt: string };
  /** Cena do quadro de direção de arte (fallback) */
  scene: "hora-azul" | "nevoa" | "interior" | "mata";
  placeholder: boolean;
  tag?: string;
};

export const portfolioIntro = {
  label: "Projetos",
  headline: "Hospedagens com uma presença à altura do [lugar].",
  body: "Estudos de caso ilustrativos demonstrando como arquitetura, fotografia e tecnologia se unem para gerar reservas diretas e elevar o valor da diária.",
};

export const projects: Project[] = [
  {
    id: "projeto-01",
    name: "Cabana Morada da Serra",
    location: "Urubici, SC",
    services: ["Site com reservas", "Identidade visual", "Direção fotográfica"],
    summary:
      "Arquitetura contemporânea na serra. Criamos a marca, o site com integração direta de iCal e WhatsApp com dados pré-selecionados, reduzindo atritos até a confirmação.",
    scene: "hora-azul",
    image: {
      src: "/images/projeto-morada-cabana.jpg",
      alt: "Cabana de madeira e vidro na serra iluminada na hora azul com névoa",
    },
    placeholder: false,
    tag: "Exemplo ilustrativo · Estudo de caso",
  },
  {
    id: "projeto-02",
    name: "Chalé Terra & Bruma",
    location: "São Bento do Sul, SC",
    services: ["Branding", "Social media", "Guia de hospitalidade"],
    summary:
      "Posicionamento centrado em desconexão e café artesanal. Direção visual da experiência matinal, papelaria tátil de boas-vindas e narrativa editorial para redes sociais.",
    scene: "interior",
    image: {
      src: "/images/projeto-cafe-artesanal.jpg",
      alt: "Mesa de café da manhã colonial com café coado e pão artesanal com luz natural",
    },
    placeholder: false,
    tag: "Exemplo ilustrativo · Estudo de caso",
  },
  {
    id: "projeto-03",
    name: "Pousada Vila das Araucárias",
    location: "Campos do Jordão, SP",
    services: ["Landing page", "Apresentação de suítes", "Tráfego para inverno"],
    summary:
      "Apresentação imersiva das acomodações. Fotos em alta resolução leves no celular, descrição dos diferenciais da suíte e campanhas segmentadas para alta temporada.",
    scene: "nevoa",
    image: {
      src: "/images/projeto-quarto-suite.jpg",
      alt: "Quarto com cama de linho, lareira e janela com vista panorâmica para araucárias",
    },
    placeholder: false,
    tag: "Exemplo ilustrativo · Estudo de caso",
  },
  {
    id: "projeto-04",
    name: "Refúgio Alto da Mantiqueira",
    location: "Gonçalves, MG",
    services: ["Site de alta conversão", "Motor de reservas", "WhatsApp integrado"],
    summary:
      "Experiência com ofurô nas montanhas. Consulta de disponibilidade transparente para o hóspede escolher a data sem idas e vindas, gerando segurança para reservas antecipadas.",
    scene: "mata",
    image: {
      src: "/images/projeto-deck-ofuro.jpg",
      alt: "Deck suspenso de madeira com ofurô aquecido ao entardecer com vista para o vale",
    },
    placeholder: false,
    tag: "Exemplo ilustrativo · Estudo de caso",
  },
];

/* ------------------------------------------------------------------ */
/* 6 · Processo                                                         */
/* ------------------------------------------------------------------ */

export const processIntro = {
  label: "Processo",
  headline: "Quatro etapas, prazos claros, nenhuma surpresa.",
};

export const processSteps = [
  {
    index: "01",
    title: "Imersão",
    body: "Entendemos sua hospedagem, seu público e seus objetivos. Conversamos, olhamos fotos, canais e números.",
    output: "Diagnóstico da presença atual",
  },
  {
    index: "02",
    title: "Direção",
    body: "Definimos estratégia, estética e estrutura: o que comunicar, como deve parecer e por onde o hóspede vai reservar.",
    output: "Direção visual e mapa do site",
  },
  {
    index: "03",
    title: "Criação",
    body: "Desenvolvemos sua nova presença digital, com rodadas de ajuste combinadas desde o começo.",
    output: "Marca, site e conteúdo",
  },
  {
    index: "04",
    title: "Lançamento",
    body: "Publicamos, configuramos e deixamos tudo pronto para você usar, com um passo a passo simples.",
    output: "Tudo no ar e configurado",
  },
];

/* ------------------------------------------------------------------ */
/* 7 · Sobre                                                            */
/* ------------------------------------------------------------------ */

export const about = {
  label: "Sobre a Zeloa",
  headline: "Zelo é cuidado atento, feito com [intenção].",
  paragraphs: [
    "A Zeloa nasceu da convivência com hospedagens. Vimos de perto lugares incríveis, cuidados em cada detalhe, que no celular pareciam iguais a todos os outros.",
    "Hoje criamos marcas, sites e rotinas digitais para hospedagens independentes. Com o mesmo cuidado que vocês têm com cada hóspede.",
  ],
  values: [
    { title: "Zelo nos detalhes", body: "Uma foto bem cortada, uma mensagem sem erro, um botão que diz o que faz." },
    { title: "Clareza", body: "Preço claro, prazo claro, interface clara." },
    { title: "Autonomia", body: "Reserva direta e relação com o hóspede sem intermediário obrigatório." },
    { title: "Calma", body: "Tecnologia que tira peso. Mais tempo para receber bem." },
  ],
};

/* ------------------------------------------------------------------ */
/* 8 · CTA final                                                        */
/* ------------------------------------------------------------------ */

export const finalCta = {
  label: "Vamos conversar",
  headline: "Sua hospedagem merece uma presença digital à altura da experiência que oferece.",
  body: "Conte um pouco sobre a sua hospedagem. Respondemos com perguntas, não com um pacote pronto.",
  cta: "Quero conversar sobre meu projeto",
  message:
    "Olá! Quero conversar sobre um projeto para a minha hospedagem. Ela se chama ___ e fica em ___.",
};
