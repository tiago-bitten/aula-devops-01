import { Shield, Clock, CreditCard, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "100% Seguro", desc: "Dados criptografados e licenciado" },
  { icon: Clock, title: "Saque Rápido", desc: "PIX em até 5 minutos" },
  { icon: CreditCard, title: "Depósito Fácil", desc: "PIX, cartão e boleto" },
  { icon: Headphones, title: "Suporte 24h", desc: "Atendimento via chat" },
];

const FeaturesBar = () => {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
