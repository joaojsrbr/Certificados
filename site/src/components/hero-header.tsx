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
  ChevronDown,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function HeroHeader() {
  const scrollToExplore = () => {
    document.getElementById("certificados-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pt-12 pb-10 sm:pt-20 sm:pb-16 text-center overflow-hidden">
      {/* Glow orb centered on hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-violet-600/20 via-indigo-500/20 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-4xl px-4 flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-6 shadow-[0_0_20px_-3px_rgba(16,185,129,0.25)] animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Portfólio de Certificações & Especializações</span>
        </div>

        {/* Monogram / Avatar with gradient ring */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#090d16] border border-white/20 text-white font-extrabold text-2xl tracking-wider shadow-2xl">
            <span className="bg-gradient-to-br from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
              JV
            </span>
          </div>
        </div>

        {/* Name and headline */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
          <span className="bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            João Vitor
          </span>{" "}
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            da Silva Rocha
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl mb-3">
          Desenvolvedor Fullstack com foco em arquiteturas escaláveis, backend robusto e interfaces modernas.
        </p>

        <p className="text-sm text-gray-400 max-w-xl mb-8 leading-relaxed">
          Coleção oficial e auditável de 36 certificados emitidos por instituições renomadas como Harvard (CC50), DIO / Santander, Faculdade Descomplica, Google / Coursera e Balta.io.
        </p>

        {/* Social / Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href="https://github.com/joaojsrbr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-9 px-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-gray-200 hover:text-white text-sm font-medium transition-all duration-200 shadow-sm"
          >
            <GithubIcon className="w-4 h-4 text-violet-400" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5527998993682&text=Olá João Vitor, vi seu portfólio de certificados!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-9 px-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-gray-200 hover:text-white text-sm font-medium transition-all duration-200 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://t.me/joaojsrbr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-9 px-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-gray-200 hover:text-white text-sm font-medium transition-all duration-200 shadow-sm"
          >
            <Send className="w-4 h-4 text-sky-400" />
            <span>Telegram</span>
          </a>

          <a
            href="mailto:joaovitor.jsr@gmail.com"
            className="flex items-center gap-2 h-9 px-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-gray-200 hover:text-white text-sm font-medium transition-all duration-200 shadow-sm"
          >
            <Mail className="w-4 h-4 text-rose-400" />
            <span>Email</span>
          </a>
        </div>

        {/* Tech Skills Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mb-8">
          {TECH_BADGES.map((tech) => (
            <Badge
              key={tech.name}
              variant="outline"
              className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition-transform duration-200 hover:scale-105 ${tech.color}`}
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* Quick CTA to scroll down */}
        <Button
          onClick={scrollToExplore}
          className="rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold px-6 py-5 shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2"
        >
          <FileCheck className="w-4 h-4" />
          <span>Explorar 36 Certificados</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </Button>
      </div>
    </section>
  );
}
