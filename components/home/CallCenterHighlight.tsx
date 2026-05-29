"use client";

import { Suspense, lazy } from "react";
import Link from "next/link";

const PerformanceChart = lazy(() => import("@/components/callcenter/PerformanceChart"));

const METRICS = [
  { value: "50",     label: "postes opérationnels" },
  { value: "FR/EN",  label: "bilingue certifié" },
  { value: "24h/24", label: "disponibilité" },
  { value: "100%",   label: "reporting client" },
];

export default function CallCenterHighlight() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--gold)" }}
        />
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: "var(--coral)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — texte & métriques */}
          <div>
            <p className="label-tag mb-4" style={{ color: "var(--gold)" }}>CALL CENTER · 50 POSTES</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Madagascar n'est pas<br />
              <span style={{ color: "var(--gold)" }}>un plan B.</span><br />
              C'est un avantage.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 max-w-md text-lg">
              Même fuseau horaire que Paris. Maîtrise parfaite du français et de l'anglais.
              Coûts jusqu'à 60% inférieurs à l'Europe. 50 postes opérationnels, reporting temps réel.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {METRICS.map((m, i) => (
                <div key={i} className="p-6 rounded-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="font-display text-3xl mb-2" style={{ color: "var(--gold)" }}>
                    {m.value}
                  </div>
                  <div className="label-tag text-gray-400 text-[10px]">{m.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/services/callcenter"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-sm rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            >
              Découvrir l'offre Call Center →
            </Link>
          </div>

          {/* Right — Graphique de performance */}
          <div className="rounded-xl overflow-hidden border border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            <Suspense fallback={
              <div className="h-64 flex items-center justify-center">
                <span className="text-gray-500 text-xs label-tag">Chargement...</span>
              </div>
            }>
              <PerformanceChart />
            </Suspense>
          </div>

        </div>
      </div>
    </section>
  );
}
