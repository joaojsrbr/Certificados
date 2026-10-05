"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TECH_BADGES } from "@/lib/certificates";
import {
  Sparkles,
  ExternalLink,
  Mail,
  Send,
  MessageCircle,
  FileCheck,
  Maximize2,
  Columns2,
  LayoutGrid,
  ListFilter,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface StudioHeaderProps {
  viewMode: "grid" | "studio" | "institution";
  onViewModeChange: (mode: "grid" | "studio" | "institution") => void;
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
  totalCount: number;
}

export function StudioHeader({
  viewMode,
  onViewModeChange,
  selectedTech,
  onSelectTech,
  totalCount,
}: StudioHeaderProps) {
  return (
    <header className="relative w-full border-b border-white/[0.08] bg-[#07090f]/90 backdrop-blur-2xl px-4 sm:px-8 xl:px-12 py-6">
      {/* Top Banner & Quick Info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-70 blur-md group-hover:opacity-100 transition duration-500" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b0e18] border border-white/20 text-white font-extrabold text-xl shadow-xl">
              <span className="bg-gradient-to-br from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                JV
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                João Vitor da Silva Rocha
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Fullstack Developer</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              Portfólio & Galeria Oficial de Certificações • 100% PDFs Nativos Verificáveis
            </p>
          </div>
        </div>

        {/* Live Counters & Social Actions */}
        <div className="flex items-center gap-3 flex-wrap justify-between lg:justify-end">
          {/* Stats Badges */}
          <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                <strong className="text-white font-bold">{totalCount}</strong>{" "}
                Certificados
              </span>
            </div>
            <span className="text-gray-400 text-xs">•</span>
            <div className="text-xs text-gray-300">
              <strong className="text-indigo-400 font-bold">9</strong> Instituições
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/joaojsrbr"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5527998993682&text=Olá João Vitor, vi seus certificados!"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="p-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/joaojsrbr"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="p-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="mailto:joaovitor.jsr@gmail.com"
              title="Email"
              className="p-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-rose-400 hover:text-rose-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Layout Switcher (Maximizing Screen Space) */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grade Ampla (5 Colunas)</span>
              <span className="sm:hidden">Grade</span>
            </button>

            <button
              onClick={() => onViewModeChange("studio")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === "studio"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Columns2 className="w-3.5 h-3.5 text-cyan-300" />
              <span className="hidden sm:inline">Modo Studio (Split Preview)</span>
              <span className="sm:hidden">Studio</span>
            </button>

            <button
              onClick={() => onViewModeChange("institution")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === "institution"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Por Instituição</span>
              <span className="sm:hidden">Lista</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tech Filter Quick Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-2 border-t border-white/[0.04] scrollbar-none">
        <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold shrink-0 mr-1">
          Tech Stack:
        </span>
        <button
          onClick={() => onSelectTech(null)}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors shrink-0 cursor-pointer ${
            selectedTech === null
              ? "bg-white/15 text-white font-bold"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Todas
        </button>
        {TECH_BADGES.map((tech) => {
          const isSelected = selectedTech === tech.name;
          return (
            <button
              key={tech.name}
              onClick={() => onSelectTech(isSelected ? null : tech.name)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-all shrink-0 cursor-pointer ${
                isSelected
                  ? "bg-indigo-600 text-white border-indigo-400 font-bold scale-105 shadow-md shadow-indigo-600/30"
                  : `bg-white/[0.02] hover:bg-white/[0.07] ${tech.color}`
              }`}
            >
              #{tech.name}
            </button>
          );
        })}
      </div>
    </header>
  );
}
