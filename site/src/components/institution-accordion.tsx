"use client";

import { useState } from "react";
import { CertificateItem, INSTITUTIONS } from "@/lib/certificates";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface InstitutionAccordionProps {
  certificates: CertificateItem[];
  onSelectCertificate: (cert: CertificateItem) => void;
}

export function InstitutionAccordion({
  certificates,
  onSelectCertificate,
}: InstitutionAccordionProps) {
  const grouped = Object.keys(INSTITUTIONS).reduce<
    Record<string, CertificateItem[]>
  >((acc, key) => {
    const list = certificates.filter((c) => c.institutionKey === key);
    if (list.length > 0) {
      acc[key] = list;
    }
    return acc;
  }, {});

  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({
    dio: true,
    descomplica: true,
    harvard: true,
  });

  const toggleKey = (key: string) => {
    setExpandedKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    Object.keys(grouped).forEach((k) => (all[k] = true));
    setExpandedKeys(all);
  };

  const collapseAll = () => {
    setExpandedKeys({});
  };

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between text-xs text-gray-400 px-1 mb-2">
        <span>Mostrando {Object.keys(grouped).length} instituições</span>
        <div className="flex items-center gap-3 font-medium">
          <button
            onClick={expandAll}
            className="hover:text-indigo-300 transition-colors cursor-pointer"
          >
            Expandir todos
          </button>
          <span>•</span>
          <button
            onClick={collapseAll}
            className="hover:text-indigo-300 transition-colors cursor-pointer"
          >
            Recolher todos
          </button>
        </div>
      </div>

      {Object.entries(grouped).map(([key, certs]) => {
        const inst = INSTITUTIONS[key];
        const isExpanded = expandedKeys[key];

        return (
          <div
            key={key}
            className="rounded-2xl border border-white/[0.08] bg-[#0a0d15]/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/15"
          >
            {/* Header Accordion Button */}
            <button
              onClick={() => toggleKey(key)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 select-none cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="text-2xl" role="img" aria-label={inst?.name || ""}>
                  {inst?.icon || "🏛️"}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">
                      {inst?.name || key}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 truncate mt-0.5 max-w-xl">
                    {inst?.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Badge
                  variant="outline"
                  className={inst?.badgeStyle || "border-white/10 text-gray-300"}
                >
                  {certs.length} {certs.length === 1 ? "certificado" : "certificados"}
                </Badge>
                <div className="p-1.5 rounded-lg bg-white/[0.04] text-gray-400">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </div>
            </button>

            {/* Accordion Body */}
            {isExpanded && (
              <div className="px-5 pb-5 pt-1 border-t border-white/[0.05] divide-y divide-white/[0.04]">
                {certs.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => onSelectCertificate(cert)}
                    className="py-3 flex items-center justify-between gap-3 group hover:bg-white/[0.02] rounded-xl px-2.5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-white/[0.04] text-gray-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors truncate">
                            {cert.name}
                          </span>
                          {cert.highlight && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-2 py-0.2 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                              <Sparkles className="w-2.5 h-2.5" /> Destaque
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] text-gray-400">
                            {cert.category}
                          </span>
                          <span className="text-gray-400 text-[10px]">•</span>
                          <div className="flex items-center gap-1.5 overflow-hidden">
                            {cert.tags.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="text-[10px] text-gray-400 font-mono"
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Abrir PDF oficial diretamente"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] hover:bg-indigo-600 text-gray-300 hover:text-white border border-white/10 hover:border-indigo-500 transition-all duration-200"
                      >
                        <span>PDF</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
