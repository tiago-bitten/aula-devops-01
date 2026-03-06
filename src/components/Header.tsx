import { Trophy, Zap, Star, TrendingUp, Wallet, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="h-7 w-7 text-primary" />
            <span className="font-display text-2xl font-bold uppercase tracking-wider text-foreground">
              Bet<span className="text-primary">Flash</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { icon: Trophy, label: "Esportes" },
              { icon: Star, label: "Cassino" },
              { icon: TrendingUp, label: "Ao Vivo" },
            ].map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-md px-3 py-1.5">
            <Wallet className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">R$ 1.250,00</span>
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
            <Search className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Buscar</span>
          </Button>
          <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-secondary">
            <User className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="md:hidden text-foreground">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
