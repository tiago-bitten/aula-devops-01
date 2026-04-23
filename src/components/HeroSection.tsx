import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Zap, Gift } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      <div className="relative container py-16 md:py-24">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
            <Gift className="h-4 w-4" />
            Bônus de boas-vindas até R$ 500
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Bem-vindo, Tiago Silveira de Bittencourt
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-tight text-foreground">
            Aposte nos <span className="text-primary text-glow">melhores</span> jogos
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Odds imbatíveis, saques rápidos e centenas de mercados ao vivo. Sua sorte começa aqui.
          </p>
          <div className="flex gap-3">
            <Button size="lg" className="bg-primary text-primary-foreground font-display uppercase text-lg tracking-wide hover:bg-primary/90 shadow-glow">
              <Zap className="h-5 w-5 mr-2" />
              Apostar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground font-display uppercase text-lg tracking-wide hover:bg-secondary">
              Criar Conta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
