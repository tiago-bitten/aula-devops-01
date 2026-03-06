import { useState } from "react";
import { Flame } from "lucide-react";

interface OddButtonProps {
  label: string;
  value: number;
  selected?: boolean;
  onClick?: () => void;
}

const OddButton = ({ label, value, selected, onClick }: OddButtonProps) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-md text-sm transition-all ${
      selected
        ? "bg-primary text-primary-foreground shadow-glow"
        : "bg-odds-bg text-foreground hover:bg-primary/20"
    }`}
  >
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="font-semibold">{value.toFixed(2)}</span>
  </button>
);

interface Match {
  id: string;
  league: string;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  time?: string;
  isLive: boolean;
  odds: { home: number; draw: number; away: number };
}

const matches: Match[] = [
  { id: "1", league: "Brasileirão Série A", teamA: "Flamengo", teamB: "Palmeiras", scoreA: 2, scoreB: 1, time: "67'", isLive: true, odds: { home: 1.85, draw: 3.40, away: 4.20 } },
  { id: "2", league: "Champions League", teamA: "Real Madrid", teamB: "Man City", scoreA: 0, scoreB: 0, time: "23'", isLive: true, odds: { home: 2.10, draw: 3.25, away: 3.50 } },
  { id: "3", league: "Premier League", teamA: "Arsenal", teamB: "Liverpool", time: "Hoje 16:00", isLive: false, odds: { home: 2.45, draw: 3.30, away: 2.90 } },
  { id: "4", league: "La Liga", teamA: "Barcelona", teamB: "Atlético Madrid", time: "Hoje 18:30", isLive: false, odds: { home: 1.75, draw: 3.60, away: 4.80 } },
  { id: "5", league: "Brasileirão Série A", teamA: "Corinthians", teamB: "São Paulo", scoreA: 1, scoreB: 1, time: "45+2'", isLive: true, odds: { home: 3.10, draw: 2.90, away: 2.50 } },
  { id: "6", league: "Serie A", teamA: "Inter Milan", teamB: "AC Milan", time: "Amanhã 15:45", isLive: false, odds: { home: 1.95, draw: 3.40, away: 3.80 } },
];

const LiveMatches = () => {
  const [selectedOdds, setSelectedOdds] = useState<Record<string, string>>({});

  const toggleOdd = (matchId: string, type: string) => {
    setSelectedOdds((prev) =>
      prev[matchId] === type ? { ...prev, [matchId]: "" } : { ...prev, [matchId]: type }
    );
  };

  return (
    <section className="container py-10">
      <div className="flex items-center gap-3 mb-6">
        <Flame className="h-6 w-6 text-accent" />
        <h2 className="font-display text-2xl font-bold uppercase text-foreground">
          Jogos em Destaque
        </h2>
        <div className="flex items-center gap-1.5 ml-3">
          <span className="h-2 w-2 rounded-full bg-live animate-pulse-live" />
          <span className="text-sm font-medium text-live">AO VIVO</span>
        </div>
      </div>

      <div className="grid gap-3">
        {matches.map((match) => (
          <div
            key={match.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-card hover:border-primary/30 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-muted-foreground">{match.league}</span>
                {match.isLive && (
                  <span className="flex items-center gap-1 text-xs font-bold text-live">
                    <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse-live" />
                    {match.time}
                  </span>
                )}
                {!match.isLive && (
                  <span className="text-xs text-muted-foreground">{match.time}</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{match.teamA}</span>
                    {match.isLive && <span className="font-display text-lg font-bold text-foreground">{match.scoreA}</span>}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-semibold text-foreground">{match.teamB}</span>
                    {match.isLive && <span className="font-display text-lg font-bold text-foreground">{match.scoreB}</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <OddButton label="1" value={match.odds.home} selected={selectedOdds[match.id] === "home"} onClick={() => toggleOdd(match.id, "home")} />
              <OddButton label="X" value={match.odds.draw} selected={selectedOdds[match.id] === "draw"} onClick={() => toggleOdd(match.id, "draw")} />
              <OddButton label="2" value={match.odds.away} selected={selectedOdds[match.id] === "away"} onClick={() => toggleOdd(match.id, "away")} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveMatches;
