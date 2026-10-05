"use client";

import { useState } from "react";
import { CertificateItem, INSTITUTIONS } from "@/lib/certificates";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Download,
  Copy,
  Check,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface StudioLivePreviewProps {
  certificate: CertificateItem | null;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export function StudioLivePreview({
  certificate,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}: StudioLivePreviewProps) {
  const [copied, setCopied] = useState(false);

  if (!certificate) {
    return (
      <div className="h-full min-h-[600px] rounded-2xl border border-dashed border-white/10 bg-[#0a0d15]/50 flex flex-col items-center justify-center p-8 text-center">
        <Sparkles className="w-12 h-12 text-indigo-400/40 mb-3" />
        <h3 className="text-base font-bold text-white mb-1">
          Nenhum certificado selecionado
        </h3>
        <p className="text-xs text-gray-400 max-w-xs">
          Passe o mouse ou clique em qualquer certificado ao lado para carregar a pré-visualização ao vivo.
        </p>
      </div>
    );
  }

  const inst = INSTITUTIONS[certificate.institutionKey];

  const handleCopy = () => {
    const fullUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${certificate.pdfUrl}`
        : certificate.pdfUrl;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="sticky top-6 flex flex-col h-[calc(100vh-6rem)] rounded-2xl border border-white/[0.1] bg-[#090b12]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400" />

      {/* Header Info */}
      <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-[#0c0f18]/80 flex flex-col gap-3 shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xl" role="img" aria-label={inst?.name || ""}>
              {inst?.icon || "📜"}
            </span>
            <Badge
              variant="outline"
              className={inst?.badgeStyle || "border-white/10 text-gray-300"}
            >
              {certificate.institution}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/10 text-gray-200 border-white/10 text-xs"
            >
              {certificate.category}
            </Badge>
            {certificate.highlight && (
              <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30 text-xs flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Destaque
              </Badge>
            )}
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xs font-mono text-gray-400 mr-1">
              {currentIndex + 1} de {totalCount}
            </span>
            <button
              onClick={onPrev}
              title="Certificado anterior"
              className="p-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              title="Próximo certificado"
              className="p-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {certificate.name}
          </h2>
          {certificate.description && (
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
              {certificate.description}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all shadow-md shadow-indigo-600/25 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Abrir Tela Cheia</span>
          </a>

          <a
            href={certificate.pdfUrl}
            download={certificate.fileName}
            className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 text-xs font-medium transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Baixar PDF</span>
          </a>

          <Button
            type="button"
            variant="ghost"
            onClick={handleCopy}
            className="h-8 px-2.5 text-xs text-gray-300 hover:text-white hover:bg-white/[0.08] rounded-lg"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                <span className="text-emerald-400">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1.5" />
                <span>Copiar Link</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Embedded Live PDF Display */}
      <div className="relative flex-1 bg-black/50 overflow-hidden">
        <iframe
          key={certificate.id}
          src={`${certificate.pdfUrl}#toolbar=0`}
          title={certificate.name}
          className="w-full h-full border-0 bg-[#12151e]"
        />
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-white/[0.08] bg-[#090b12] flex items-center justify-between text-xs text-gray-400 shrink-0">
        <div className="flex items-center gap-1.5 overflow-hidden">
          {certificate.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 font-mono"
            >
              #{t}
            </span>
          ))}
        </div>
        <span className="text-[10px] text-gray-400 font-mono shrink-0 ml-2">
          {certificate.fileName}
        </span>
      </div>
    </div>
  );
}
