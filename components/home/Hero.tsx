"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STATS = [
  { value: "50",    label: "postes Call Center" },
  { value: "6",     label: "domaines d'expertise" },
  { value: "FR/EN", label: "bilingue" },
  { value: "24h",   label: "délai de réponse" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Blue glow accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--brand)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Location tag */}
        <div
          className={`label-tag text-white/50 mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Antananarivo · Madagascar · International
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-white mb-6 max-w-4xl transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          Votre partenaire{" "}
          <span style={{ color: "var(--brand-lt)" }}>technologique</span>{" "}
          premium
        </h1>

        {/* Subtitle */}
        <p
          className={`text-white/60 text-lg max-w-2xl leading-relaxed mb-10 font-light transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Développement, Call Center 50 postes, Marketing digital, Digitalisation,
          Data et Matériel IT — une seule équipe, six expertises.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap gap-4 mb-20 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-sm transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Démarrer un projet
            <span>→</span>
          </Link>
          <Link
            href="/services/dev"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-light rounded-sm border border-white/20 hover:border-white/50 transition-colors"
          >
            Découvrir nos services
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-[var(--ink)] px-6 py-5 text-center hover:bg-white/5 transition-colors"
            >
              <div
                className="font-display text-3xl mb-1"
                style={{ color: "var(--brand-lt)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-xs label-tag">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
