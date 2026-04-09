import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold uppercase text-foreground">
                Bet<span className="text-primary">Flash</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              A melhor plataforma de apostas esportivas do Brasil. Aposte com segurança e diversão.
            </p>
          </div>
          {[
            { title: "Esportes", links: ["Futebol", "Basquete", "Tênis", "eSports"] },
            { title: "Empresa", links: ["Sobre nós", "Termos de uso", "Política de privacidade", "Jogo responsável"] },
            { title: "Suporte", links: ["Central de ajuda", "Contato", "FAQ", "Chat ao vivo"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <button type="button" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 BetFlash. Todos os direitos reservados. Jogue com responsabilidade. 18+
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
