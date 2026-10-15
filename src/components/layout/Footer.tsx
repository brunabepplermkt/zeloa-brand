import { BrandLockup } from "@/components/brand/Logo";
import { brand, contact, nav, whatsappHref } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-noite-line bg-noite pb-16 pt-12 text-nevoa">
      <div className="z-container">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Marca e Assinatura */}
          <div>
            <a href="#topo" aria-label={`${brand.name}, voltar ao início`}>
              <BrandLockup descriptor={brand.descriptor} />
            </a>
            <p className="mt-4 font-mono text-[11px] text-noite-muted">
              {brand.signature}
            </p>
            <p className="mt-1 max-w-[32ch] text-caption text-noite-muted/80">
              {brand.positioning}
            </p>
          </div>

          {/* Navegação */}
          <div>
            <span className="z-label text-noite-muted block">Navegação</span>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-small text-nevoa/80 transition-opacity hover:text-nevoa"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato & Redes */}
          <div>
            <span className="z-label text-noite-muted block">Contato</span>
            <ul className="mt-4 space-y-2 text-small text-nevoa/80">
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nevoa"
                >
                  WhatsApp: {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-nevoa">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nevoa"
                >
                  Instagram: {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Voltar ao topo */}
          <div className="flex flex-col items-start md:items-end">
            <a
              href="#topo"
              className="z-label inline-flex items-center gap-2 border border-noite-line px-4 py-2.5 text-nevoa transition-colors hover:border-noite-muted"
            >
              Voltar ao início ↑
            </a>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-noite-line pt-6 text-caption text-noite-muted md:flex-row md:items-center">
          <p>© {currentYear} {brand.name}. Todos os direitos reservados.</p>
          <p className="font-mono text-[10px] text-noite-muted/60">
            Design em conformidade com Zeloa Brand Book v1.3
          </p>
        </div>
      </div>
    </footer>
  );
}
