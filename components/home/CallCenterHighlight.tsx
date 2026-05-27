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
    <section className="py-24 px-6 grid-bg" style={{ backgroundColor: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — texte & métriques */}
          <div>
            <p className="label-tag mb-4" style={{ color: "var(--gold)" }}>CALL CENTER · 50 POSTES</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Madagascar n'est pas<br />
              <span style={{ color: "var(--gold)" }}>un plan B.</span><br />
              C'est un avantage.
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-10 max-w-md">
              Même fuseau horaire que Paris. Maîtrise parfaite du français et de l'anglais.
              Coûts jusqu'à 60% inférieurs à l'Europe. 50 postes opérationnels, reporting temps réel.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/10 mb-10">
              {METRICS.map((m, i) => (
                <div key={i} className="py-6 px-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="font-display text-3xl mb-1" style={{ color: "var(--gold)" }}>
                    {m.value}
                  </div>
                  <div className="label-tag text-white/40 text-[10px]">{m.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/services/callcenter"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            >
              Découvrir l'offre Call Center →
            </Link>
          </div>

          {/* Right — Graphique de performance */}
          <div
            className="rounded-sm overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            <Suspense fallback={
              <div className="h-64 flex items-center justify-center">
                <span className="text-white/20 text-xs label-tag">Chargement...</span>
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
