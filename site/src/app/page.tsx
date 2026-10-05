"use client";

import { useState, useMemo } from "react";
import {
  ALL_CERTIFICATES,
  CATEGORIES,
  CategoryType,
  CertificateItem,
  INSTITUTIONS,
} from "@/lib/certificates";
import { BackgroundAurora } from "@/components/background-aurora";
import { HeroHeader } from "@/components/hero-header";
import { BentoStats } from "@/components/bento-stats";
import { CertificateCard } from "@/components/certificate-card";
import { CertificateModal } from "@/components/certificate-modal";
import { InstitutionAccordion } from "@/components/institution-accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  X,
  LayoutGrid,
  ListFilter,
  Sparkles,
  Award,
  Layers,
  FileCheck,
  Mail,
  Send,
  MessageCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("Todas");
  const [selectedInstitution, setSelectedInstitution] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "institution">("grid");
  const [activeCertificate, setActiveCertificate] =
    useState<CertificateItem | null>(null);

  // Filter logic
  const filteredCertificates = useMemo(() => {
    return ALL_CERTIFICATES.filter((cert) => {
      // Search term
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesName = cert.name.toLowerCase().includes(query);
        const matchesInst = cert.institution.toLowerCase().includes(query);
        const matchesTag = cert.tags.some((t) =>
          t.toLowerCase().includes(query)
        );
        const matchesCategory = cert.category.toLowerCase().includes(query);
        if (
          !matchesName &&
          !matchesInst &&
          !matchesTag &&
          !matchesCategory
        ) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== "Todas" && cert.category !== selectedCategory) {
        return false;
      }

      // Institution filter
      if (
        selectedInstitution !== "all" &&
        cert.institutionKey !== selectedInstitution
      ) {
        return false;
      }

      return true;
    });
  }, [search, selectedCategory, selectedInstitution]);

  const hasActiveFilters =
    search.trim() !== "" ||
    selectedCategory !== "Todas" ||
    selectedInstitution !== "all";

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("Todas");
    setSelectedInstitution("all");
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Background Effect */}
      <BackgroundAurora />

      {/* Hero Section */}
      <HeroHeader />

      <div className="mx-auto max-w-6xl px-4">
        <Separator className="bg-white/[0.08]" />
      </div>

      {/* Bento Grid Stats */}
      <BentoStats />

      <div className="mx-auto max-w-6xl px-4">
        <Separator className="bg-white/[0.08]" />
      </div>

      {/* Main Exploration Section */}
      <section
        id="certificados-section"
        className="mx-auto max-w-6xl px-4 pt-12 pb-24"
      >
        {/* Section Heading & View Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explorador de Certificações</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Galeria de Credenciais Oficiais
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Clique em qualquer certificado para visualizar o documento PDF embutido sem sair da página.
            </p>
          </div>

          {/* View mode toggle with shadcn Tabs */}
          <Tabs
            value={viewMode}
            onValueChange={(v) => setViewMode(v as "grid" | "institution")}
            className="self-start md:self-auto"
          >
            <TabsList className="bg-[#0b0e17] border border-white/[0.08] p-1 rounded-xl h-auto">
              <TabsTrigger
                value="grid"
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-gray-400 rounded-lg text-xs py-1.5 px-3 flex items-center gap-1.5 transition-all"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grade de Cards</span>
              </TabsTrigger>
              <TabsTrigger
                value="institution"
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-gray-400 rounded-lg text-xs py-1.5 px-3 flex items-center gap-1.5 transition-all"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Por Instituição</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Filter Controls Bar */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#090c14]/80 p-4 sm:p-5 backdrop-blur-xl mb-8 space-y-4 shadow-xl shadow-black/20">
          {/* Search bar & quick stats */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por Java, Angular, Spring, Harvard, SQL..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-9 bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-400 focus-visible:ring-indigo-500 rounded-xl h-10 text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-3 text-xs text-gray-400">
              <span className="font-mono">
                <strong className="text-white font-bold">
                  {filteredCertificates.length}
                </strong>{" "}
                de {ALL_CERTIFICATES.length} certificados
              </span>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10 h-8 px-2.5 cursor-pointer"
                >
                  Limpar filtros
                </Button>
              )}
            </div>
          </div>

          {/* Category Filter Pills using shadcn Tabs */}
          <div className="pt-1">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count =
                  cat === "Todas"
                    ? ALL_CERTIFICATES.length
                    : ALL_CERTIFICATES.filter((c) => c.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]"
                        : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.07] border border-white/5"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Institution Selector Pills */}
          <div className="pt-2 border-t border-white/[0.05]">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
              <span className="text-[11px] text-gray-400 uppercase font-semibold mr-1 shrink-0">
                Instituição:
              </span>
              <button
                onClick={() => setSelectedInstitution("all")}
                className={`px-2.5 py-1 rounded-lg text-xs transition-colors shrink-0 cursor-pointer ${
                  selectedInstitution === "all"
                    ? "bg-white/15 text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Todas (9)
              </button>
              {Object.entries(INSTITUTIONS).map(([key, inst]) => {
                const isSelected = selectedInstitution === key;
                const count = ALL_CERTIFICATES.filter(
                  (c) => c.institutionKey === key
                ).length;

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedInstitution(key)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-colors shrink-0 cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600/30 text-indigo-200 border border-indigo-500/40 font-medium"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{inst.icon}</span>
                    <span>{inst.shortName}</span>
                    <span className="text-[10px] text-gray-400 font-mono">
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
            <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-1">
              Nenhum certificado encontrado
            </h3>
            <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">
              Não encontramos resultados para &quot;{search}&quot; com os filtros selecionados.
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 text-white cursor-pointer"
            >
              Restaurar todos os filtros
            </Button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onSelect={(selected) => setActiveCertificate(selected)}
              />
            ))}
          </div>
        ) : (
          <InstitutionAccordion
            certificates={filteredCertificates}
            onSelectCertificate={(selected) => setActiveCertificate(selected)}
          />
        )}
      </section>

      {/* Interactive Modal Dialog with Embedded PDF Viewer */}
      <CertificateModal
        certificate={activeCertificate}
        isOpen={Boolean(activeCertificate)}
        onClose={() => setActiveCertificate(null)}
      />

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#05070c]/90 backdrop-blur-xl py-12">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 font-bold">
              JV
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                João Vitor da Silva Rocha
              </p>
              <p className="text-xs text-gray-400">
                Desenvolvedor Fullstack • Vitória, ES - Brasil
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a
              href="https://github.com/joaojsrbr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="mailto:joaovitor.jsr@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://t.me/joaojsrbr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://api.whatsapp.com/send?phone=5527998993682&text=Oi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} • Construído com Next.js, shadcn/ui & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
