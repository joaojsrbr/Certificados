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
import { StudioHeader } from "@/components/studio-header";
import { BentoStats } from "@/components/bento-stats";
import { CertificateCard } from "@/components/certificate-card";
import { CertificateModal } from "@/components/certificate-modal";
import { StudioLivePreview } from "@/components/studio-live-preview";
import { InstitutionAccordion } from "@/components/institution-accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  X,
  Award,
  Sparkles,
  LayoutGrid,
  Columns2,
  ListFilter,
  Filter,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("Todas");
  const [selectedInstitution, setSelectedInstitution] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "studio" | "institution">("grid");
  const [studioActiveCert, setStudioActiveCert] = useState<CertificateItem>(
    ALL_CERTIFICATES[0]
  );
  const [modalActiveCert, setModalActiveCert] =
    useState<CertificateItem | null>(null);

  // Filter logic
  const filteredCertificates = useMemo(() => {
    return ALL_CERTIFICATES.filter((cert) => {
      // Tech filter
      if (selectedTech && !cert.tags.some((t) => t.toLowerCase() === selectedTech.toLowerCase())) {
        return false;
      }

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
  }, [search, selectedCategory, selectedInstitution, selectedTech]);

  const hasActiveFilters =
    search.trim() !== "" ||
    selectedCategory !== "Todas" ||
    selectedInstitution !== "all" ||
    selectedTech !== null;

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("Todas");
    setSelectedInstitution("all");
    setSelectedTech(null);
  };

  // Studio navigation
  const currentStudioIndex = useMemo(() => {
    return filteredCertificates.findIndex((c) => c.id === studioActiveCert?.id);
  }, [filteredCertificates, studioActiveCert]);

  const handlePrevStudio = () => {
    if (filteredCertificates.length === 0) return;
    const nextIdx =
      currentStudioIndex <= 0
        ? filteredCertificates.length - 1
        : currentStudioIndex - 1;
    setStudioActiveCert(filteredCertificates[nextIdx]);
  };

  const handleNextStudio = () => {
    if (filteredCertificates.length === 0) return;
    const nextIdx =
      currentStudioIndex >= filteredCertificates.length - 1
        ? 0
        : currentStudioIndex + 1;
    setStudioActiveCert(filteredCertificates[nextIdx]);
  };

  const handleCardClick = (cert: CertificateItem) => {
    if (viewMode === "studio") {
      setStudioActiveCert(cert);
    } else {
      setModalActiveCert(cert);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-indigo-500/30 selection:text-white pb-16">
      {/* Background Effect */}
      <BackgroundAurora />

      {/* Edge-to-Edge Studio Header */}
      <StudioHeader
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        selectedTech={selectedTech}
        onSelectTech={setSelectedTech}
        totalCount={ALL_CERTIFICATES.length}
      />

      {/* Bento Stats Summary - Full Width */}
      <BentoStats />

      {/* Main Container - Maximum Width Usage */}
      <main className="w-full px-4 sm:px-8 xl:px-12 py-4">
        {/* Controls Bar */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#090c14]/80 p-4 sm:p-5 backdrop-blur-xl mb-6 shadow-xl shadow-black/20">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por tecnologia (Java, Angular, Spring...), nome ou instituição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-9 bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-400 focus-visible:ring-indigo-500 rounded-xl h-10 text-sm w-full"
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

            {/* Quick Actions & Live Count */}
            <div className="flex items-center justify-between lg:justify-end gap-3 text-xs text-gray-400">
              <span className="font-mono">
                Exibindo <strong className="text-white font-bold">{filteredCertificates.length}</strong> de {ALL_CERTIFICATES.length} certificados
              </span>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10 h-8 px-2.5 cursor-pointer"
                >
                  Limpar todos os filtros
                </Button>
              )}
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-3 mt-3 border-t border-white/[0.05] scrollbar-none">
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
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02] font-bold"
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

          {/* Institution Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 mt-2.5 border-t border-white/[0.04] scrollbar-none text-xs">
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

        {/* Dynamic Content View */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-24 px-4 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
            <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-1">
              Nenhum certificado encontrado
            </h3>
            <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">
              Não encontramos resultados para os filtros selecionados.
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 text-white cursor-pointer"
            >
              Restaurar todos os filtros
            </Button>
          </div>
        ) : viewMode === "studio" ? (
          /* Studio Split View (50% list + 50% giant live viewer) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Interactive List of Cards */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-2.5 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1 scrollbar-none">
              {filteredCertificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  onSelect={handleCardClick}
                  isSelected={studioActiveCert?.id === cert.id}
                  compact={true}
                />
              ))}
            </div>

            {/* Right Column: Giant Live PDF Viewer */}
            <div className="lg:col-span-7 xl:col-span-7">
              <StudioLivePreview
                certificate={studioActiveCert}
                onPrev={handlePrevStudio}
                onNext={handleNextStudio}
                currentIndex={Math.max(0, currentStudioIndex)}
                totalCount={filteredCertificates.length}
              />
            </div>
          </div>
        ) : viewMode === "grid" ? (
          /* Full Width Ultra-Wide Grid (Up to 5 columns on big screens) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onSelect={handleCardClick}
              />
            ))}
          </div>
        ) : (
          /* Institution Accordion View */
          <div className="max-w-5xl mx-auto">
            <InstitutionAccordion
              certificates={filteredCertificates}
              onSelectCertificate={handleCardClick}
            />
          </div>
        )}
      </main>

      {/* Modal Dialog (used in Grid and Institution view) */}
      <CertificateModal
        certificate={modalActiveCert}
        isOpen={Boolean(modalActiveCert)}
        onClose={() => setModalActiveCert(null)}
      />

      {/* Footer */}
      <footer className="w-full border-t border-white/[0.08] bg-[#05070c]/90 backdrop-blur-xl py-10 px-4 sm:px-8 xl:px-12 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">João Vitor da Silva Rocha</span>
            <span>•</span>
            <span>Fullstack Developer</span>
            <span>•</span>
            <span className="text-emerald-400">36 Certificações</span>
          </div>

          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} • Next.js, shadcn/ui & Tailwind CSS • 100% PDFs Nativos
          </p>
        </div>
      </footer>
    </div>
  );
}
