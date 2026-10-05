import { Award, Building2 } from "lucide-react";

interface StatsBarProps {
  totalCerts: number;
  totalInstitutions: number;
}

export function StatsBar({ totalCerts, totalInstitutions }: StatsBarProps) {
  return (
    <div className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalCerts}</p>
              <p className="text-xs text-muted-foreground">Certificados</p>
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalInstitutions}</p>
              <p className="text-xs text-muted-foreground">Instituições</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
