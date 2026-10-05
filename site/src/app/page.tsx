"use client";

import { useState, useMemo } from "react";
import { certificateGroups } from "@/lib/certificates";
import { CertificateSection } from "@/components/certificate-section";
import { StatsBar } from "@/components/stats-bar";
import { Search, Award, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredGroups = useMemo(() => {
    if (!search.trim()) return certificateGroups;
    const q = search.toLowerCase();
    return certificateGroups
      .map((group) => ({
        ...group,
        certificates: group.certificates.filter(
          (cert) =>
            cert.name.toLowerCase().includes(q) ||
            group.institution.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.certificates.length > 0);
  }, [search]);

  const totalCerts = certificateGroups.reduce(
    (acc, g) => acc + g.certificates.length,
    0
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                João Vitor da Silva Rocha
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Certificados e conquistas profissionais em tecnologia,
                desenvolvimento e gestão.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full max-w-md mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar certificados..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card/50 backdrop-blur-sm border-border/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsBar
        totalCerts={totalCerts}
        totalInstitutions={certificateGroups.length}
      />

      {/* Certificate Sections */}
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        {filteredGroups.length === 0 ? (
          <div className="text-center py-20">
            <Award className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Nenhum certificado encontrado para &quot;{search}&quot;
            </p>
          </div>
        ) : (
          filteredGroups.map((group) => (
            <CertificateSection key={group.institution} group={group} />
          ))
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} João Vitor da Silva Rocha
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/joaojsrbr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:joaovitor.jsr@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://t.me/joaojsrbr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
