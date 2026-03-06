import { Dribbble, Trophy, Crosshair, Bike, Gamepad2, Volleyball, Swords } from "lucide-react";

const sports = [
  { icon: Dribbble, label: "Futebol", count: 342 },
  { icon: Trophy, label: "Basquete", count: 128 },
  { icon: Crosshair, label: "Tênis", count: 95 },
  { icon: Gamepad2, label: "eSports", count: 67 },
  { icon: Volleyball, label: "Vôlei", count: 43 },
  { icon: Bike, label: "Ciclismo", count: 21 },
  { icon: Swords, label: "MMA", count: 38 },
];

const SportsNav = () => {
  return (
    <section className="container py-8">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {sports.map((sport, i) => (
          <button
            key={sport.label}
            className={`flex flex-col items-center gap-2 min-w-[90px] rounded-lg border px-4 py-4 transition-all ${
              i === 0
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            <sport.icon className="h-6 w-6" />
            <span className="text-xs font-semibold whitespace-nowrap">{sport.label}</span>
            <span className="text-[10px] font-medium opacity-70">{sport.count}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default SportsNav;
