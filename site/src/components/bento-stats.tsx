"use client";

import {
  Award,
  GraduationCap,
  Layers,
  Sparkles,
  CheckCircle2,
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
    <section className="w-full px-4 sm:px-8 xl:px-12 py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
        {/* Metric 1 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#090c14]/80 p-5 backdrop-blur-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-white tracking-tight">
                  {totalCerts}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  100% PDFs Nativos
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Certificados Profissionais Verificados
              </p>
            </div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#090c14]/80 p-5 backdrop-blur-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-white tracking-tight">
                  19
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Santander Bootcamp
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Fullstack Java, Spring Cloud & Angular
              </p>
            </div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#090c14]/80 p-5 backdrop-blur-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-white tracking-tight">
                  {totalInstitutions}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  Harvard, Google, DIO
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Instituições de Ensino Reconhecidas
              </p>
            </div>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#090c14]/80 p-5 backdrop-blur-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-white tracking-tight">
                  14
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Credenciais Top
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Especializações de Nível Avançado
              </p>
            </div>
          </div>
        </div>

        {/* Full-width distribution ticker */}
        <div className="md:col-span-4 rounded-xl border border-white/[0.06] bg-[#07090f]/60 p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-300">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Distribuição de Competências:</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {Object.entries(categoriesCount).map(([cat, count]) => (
              <div key={cat} className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="text-gray-400">{cat}:</span>
                <span className="px-1.5 py-0.2 rounded bg-white/[0.05] text-indigo-300 font-bold">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
