import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-border bg-card p-8 shadow-lg">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Zap className="h-7 w-7 text-primary" />
            <span className="font-display text-2xl font-bold uppercase tracking-wider text-foreground">
              Bet<span className="text-primary">Flash</span>
            </span>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Tiago Silveira de Bittencourt
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="voce@exemplo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
