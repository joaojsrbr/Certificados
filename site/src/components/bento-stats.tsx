"use client";

import {
  Award,
  GraduationCap,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  BookOpen,
  Building,
} from "lucide-react";
import { ALL_CERTIFICATES, INSTITUTIONS } from "@/lib/certificates";

export function BentoStats() {
  const totalCerts = ALL_CERTIFICATES.length;
  const totalInstitutions = Object.keys(INSTITUTIONS).length;

  const categoriesCount = {
    Backend: ALL_CERTIFICATES.filter((c) => c.category === "Backend").length,
    Frontend: ALL_CERTIFICATES.filter((c) => c.category === "Frontend").length,
    Mobile: ALL_CERTIFICATES.filter((c) => c.category === "Mobile").length,
    Dados: ALL_CERTIFICATES.filter((c) => c.category === "Dados").length,
    Fundamentos: ALL_CERTIFICATES.filter((c) => c.category === "Fundamentos").length,
    "Gestão & TI": ALL_CERTIFICATES.filter((c) => c.category === "Gestão & TI").length,
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Certificados (Bento Large) */}
        <div className="relative md:col-span-1 lg:col-span-1 rounded-2xl border border-white/10 bg-[#0c101a]/70 p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group hover:border-violet-500/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/15 rounded-full blur-2xl group-hover:bg-violet-600/25 transition-colors" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verificados
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {totalCerts}
            </div>
            <h2 className="text-sm font-semibold text-gray-300 mt-1">
              Certificados Profissionais
            </h2>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Todos armazenados em PDF de alta resolução e com hash no GitHub.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
            <span>Repositório Oficial</span>
            <span className="text-violet-300 font-mono">100% Auditável</span>
          </div>
        </div>

        {/* Card 2: Formação de Destaque (Fullstack & Descomplica) */}
        <div className="relative md:col-span-2 lg:col-span-2 rounded-2xl border border-white/10 bg-[#0c101a]/70 p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-600/10 rounded-full blur-3xl group-hover:bg-cyan-600/20 transition-colors" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-cyan-300">
                  Formações Principais
                </span>
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-gray-300 border border-white/10">
                Santander + Descomplica
              </span>
            </div>

            <h2 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
              Bootcamp Fullstack & Especializações em TI
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-violet-300 font-semibold text-xs mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Santander Bootcamp
                </div>
                <p className="text-xs text-gray-400">
                  Java Avançado, Spring Cloud, Angular, Microservices & PostgreSQL.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-blue-300 font-semibold text-xs mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Faculdade Descomplica
                </div>
                <p className="text-xs text-gray-400">
                  DB Developer, Mobile Developer, POO & Smart Data Structures.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
            <span>Destaque Acadêmico</span>
            <span className="text-cyan-300 font-mono">25+ Certificados DIO & Descomplica</span>
          </div>
        </div>

        {/* Card 3: Instituições Reconhecidas */}
        <div className="relative md:col-span-1 lg:col-span-1 rounded-2xl border border-white/10 bg-[#0c101a]/70 p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/15 rounded-full blur-2xl group-hover:bg-emerald-600/25 transition-colors" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Nacional & Global
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {totalInstitutions}
            </div>
            <h2 className="text-sm font-semibold text-gray-300 mt-1">
              Instituições Parceiras
            </h2>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Harvard (CC50), Google (Coursera), DIO, Balta.io, IFES, Sebrae e mais.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
            <span>Credenciais</span>
            <span className="text-emerald-300 font-mono">100% Concluídos</span>
          </div>
        </div>

        {/* Card 4: Distribuição por Especialidade (Full Width Bento Bar) */}
        <div className="relative md:col-span-3 lg:col-span-4 rounded-2xl border border-white/10 bg-[#0c101a]/70 p-6 backdrop-blur-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/[0.06] text-white">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-bold text-white tracking-wide">
                Distribuição por Domínio de Conhecimento
              </h2>
            </div>
            <span className="text-xs text-gray-400">
              Mapeamento de 36 certificados por foco técnico
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {Object.entries(categoriesCount).map(([category, count]) => {
              const percentage = Math.round((count / totalCerts) * 100);
              return (
                <div
                  key={category}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span className="font-medium text-gray-300 truncate">
                      {category}
                    </span>
                    <span className="font-mono text-violet-400">{count}</span>
                  </div>
                  <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(percentage * 2, 15)}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-gray-400 text-right mt-1 font-mono">
                    {percentage}% do total
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
