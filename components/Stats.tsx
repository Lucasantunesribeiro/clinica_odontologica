/**
 * Stats - Componente de estatísticas/números
 */

import { cn } from "@/lib/utils";

interface Stat {
  readonly value: string;
  readonly label: string;
}

interface StatsProps {
  stats: readonly Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function Stats({ stats, columns = 4, className }: StatsProps) {
  const colsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8",
        colsClass[columns],
        className
      )}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="mb-2 font-serif text-4xl font-bold text-primary lg:text-5xl">
            {stat.value}
          </div>
          <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
