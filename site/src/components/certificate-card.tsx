"use client";

import { CertificateItem, INSTITUTIONS } from "@/lib/certificates";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, FileText, ArrowUpRight } from "lucide-react";

interface CertificateCardProps {
  certificate: CertificateItem;
  onSelect: (cert: CertificateItem) => void;
}

export function CertificateCard({
  certificate,
  onSelect,
}: CertificateCardProps) {
  const inst = INSTITUTIONS[certificate.institutionKey];

  return (
    <div
      onClick={() => onSelect(certificate)}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c101a]/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/40 hover:bg-[#101624]/90 hover:shadow-[0_12px_36px_-10px_rgba(139,92,246,0.22)] cursor-pointer overflow-hidden"
    >
      {/* Top subtle highlight shimmer */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/15 group-hover:via-violet-400/50 to-transparent transition-all duration-500" />

      {/* Background glow in hover */}
      <div 
        className="absolute -right-12 -top-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: inst?.glowColor || "rgba(139, 92, 246, 0.25)" }}
      />

      <div>
        {/* Header: Institution & Highlight Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl" role="img" aria-label={inst?.name || ""}>
              {inst?.icon || "📜"}
            </span>
            <span className="text-xs font-medium text-gray-400 truncate max-w-[170px] sm:max-w-[200px]">
              {inst?.shortName || certificate.institution}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {certificate.highlight && (
              <span className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Top
              </span>
            )}
            <Badge
              variant="outline"
              className="text-[11px] px-2 py-0.5 bg-white/[0.04] text-gray-300 border-white/10"
            >
              {certificate.category}
            </Badge>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors duration-200 line-clamp-2 leading-snug">
          {certificate.name}
        </h3>

        {/* Short description */}
        {certificate.description && (
          <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {certificate.description}
          </p>
        )}
      </div>

      {/* Footer: Tags & Action Button */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1 max-w-[70%] overflow-hidden h-6">
          {certificate.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-gray-400 border border-white/5 font-mono"
            >
              {tag}
            </span>
          ))}
          {certificate.tags.length > 2 && (
            <span className="text-[10px] px-1.5 py-0.5 text-gray-400 font-mono">
              +{certificate.tags.length - 2}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title="Abrir PDF oficial"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-violet-600 hover:text-white text-gray-300 border border-white/10 hover:border-violet-500 transition-all duration-200"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
