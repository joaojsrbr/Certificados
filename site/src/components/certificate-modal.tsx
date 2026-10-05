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
  Copy,
  Check,
  Award,
  Sparkles,
  BookOpen,
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
    navigator.clipboard.writeText(certificate.pdfUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl bg-[#0c1018]/95 border-white/10 text-white backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] sm:rounded-2xl p-6 overflow-hidden">
        {/* Decorative Top Accent Light */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400" />

        <DialogHeader className="pt-2 text-left">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-2xl" role="img" aria-label={inst?.name || "Certificado"}>
              {inst?.icon || "📜"}
            </span>
            <Badge
              variant="outline"
              className={inst?.badgeStyle || "bg-violet-500/10 text-violet-300 border-violet-500/20"}
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
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Destaque
              </Badge>
            )}
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            {certificate.name}
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-sm mt-1">
            Emitido por {certificate.institution}
          </DialogDescription>
        </DialogHeader>

        {/* Certificate Card Preview Style */}
        <div className="relative mt-2 p-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 shrink-0">
              <Award className="w-8 h-8 text-violet-400" />
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="leading-relaxed">
                {certificate.description ||
                  "Certificação oficial comprovando domínio prático e conceitual nas tecnologias e metodologias correspondentes."}
              </p>
              {inst?.description && (
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{inst.description}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
            {certificate.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-gray-300 border border-white/5 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-2">
          <a
            href={certificate.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 h-9 px-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-violet-600/25 transition-all duration-300 cursor-pointer"
          >
            <span>Visualizar PDF Oficial</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <Button
            type="button"
            variant="outline"
            onClick={handleCopyLink}
            className="border-white/15 bg-white/5 hover:bg-white/10 text-gray-200 transition-colors"
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
