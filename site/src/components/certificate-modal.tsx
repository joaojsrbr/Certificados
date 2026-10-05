"use client";

import { useState } from "react";
import { CertificateItem, INSTITUTIONS } from "@/lib/certificates";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Download,
  Copy,
  Check,
  Award,
  Sparkles,
  BookOpen,
  Maximize2,
} from "lucide-react";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const inst = INSTITUTIONS[certificate.institutionKey];

  const handleCopyLink = () => {
    const fullUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${certificate.pdfUrl}`
        : certificate.pdfUrl;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl sm:max-w-4xl bg-[#090b12]/95 border-white/[0.12] text-white backdrop-blur-2xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] sm:rounded-2xl p-5 sm:p-6 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Subtle Top Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400" />

        <DialogHeader className="pt-2 text-left shrink-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-2xl" role="img" aria-label={inst?.name || "Certificado"}>
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
              className="bg-white/10 text-gray-200 border-white/10"
            >
              {certificate.category}
            </Badge>
            {certificate.highlight && (
              <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Destaque
              </Badge>
            )}
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            {certificate.name}
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-xs sm:text-sm mt-0.5">
            {certificate.description ||
              `Certificado emitido oficialmente por ${certificate.institution}`}
          </DialogDescription>
        </DialogHeader>

        {/* Embedded Interactive PDF Viewer */}
        <div className="relative my-3 flex-1 min-h-[300px] sm:min-h-[420px] rounded-xl border border-white/10 bg-black/40 overflow-hidden shadow-inner flex flex-col">
          <iframe
            src={`${certificate.pdfUrl}#toolbar=0`}
            title={certificate.name}
            className="w-full h-full flex-1 rounded-xl bg-[#141721]"
          />

          {/* Fallback & Overlay helper */}
          <div className="px-4 py-2 bg-[#0c0f18]/90 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
            <span className="truncate pr-2 font-mono text-[11px]">
              {certificate.fileName}
            </span>
            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 hover:underline"
            >
              <span>Abrir em tela cheia</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="shrink-0 flex flex-wrap gap-1.5 pt-1">
          {certificate.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-md bg-white/[0.05] text-gray-300 border border-white/5 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-2.5 mt-3 pt-3 border-t border-white/[0.08] shrink-0">
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 h-9 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-lg shadow-indigo-600/25 transition-all duration-200 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Abrir PDF Diretamente</span>
          </a>

          <a
            href={certificate.pdfUrl}
            download={certificate.fileName}
            className="flex items-center justify-center gap-2 h-9 px-4 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Baixar Arquivo</span>
          </a>

          <Button
            type="button"
            variant="outline"
            onClick={handleCopyLink}
            className="border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 h-9 rounded-xl"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-emerald-400">Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                <span>Copiar Link</span>
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
