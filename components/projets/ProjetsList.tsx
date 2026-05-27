"use client";

import { useState } from "react";

type Projet = {
  tag: string;
  title: string;
  desc: string;
  metrics: string[];
  color: string;
};

const PROJETS: Projet[] = [
  { tag: "CALL CENTER", title: "Prospection B2B France — Secteur Immobilier", desc: "Campagne de qualification de fichiers et prise de rendez-vous pour un réseau d'agences immobilières français. 3 mois, 12 agents dédiés, 400+ RDV qualifiés livrés.", metrics: ["400+ RDV qualifiés", "12 agents", "3 mois"], color: "var(--brand)" },
  { tag: "CALL CENTER", title: "Support client multicanal — E-commerce FR", desc: "Gestion des appels entrants, emails et chat pour une boutique en ligne française. 98% de satisfaction client mesuré sur 6 mois.", metrics: ["98% satisfaction", "8 agents", "6 mois"], color: "var(--brand)" },
  { tag: "DÉVELOPPEMENT", title: "Plateforme de gestion RH — Secteur Education", desc: "Application web de gestion du personnel pour un réseau d'écoles privées à Madagascar. 500 utilisateurs, gestion des contrats, paie et congés.", metrics: ["500 utilisateurs", "React + Node.js", "6 mois"], color: "var(--ink)" },
  { tag: "DÉVELOPPEMENT", title: "Application mobile logistique iOS/Android", desc: "Application React Native de suivi de flotte et gestion des livraisons. Synchronisation temps réel, offline-first, 200 chauffeurs.", metrics: ["200 utilisateurs", "React Native", "4 mois"], color: "var(--ink)" },
  { tag: "MARKETING", title: "Refonte SEO & campagnes Google Ads", desc: "Audit SEO complet, refonte de la stratégie de contenu et gestion de campagnes Google Ads pour un e-commerçant français. +180% de trafic organique.", metrics: ["+180% trafic", "+45% conversions", "6 mois"], color: "var(--brand)" },
  { tag: "MARKETING", title: "Stratégie social media B2B — LinkedIn", desc: "Community management et stratégie de contenu LinkedIn pour un cabinet de conseil. Audience triplée, 15 leads qualifiés par mois.", metrics: ["×3 audience", "15 leads/mois", "4 mois"], color: "var(--brand)" },
  { tag: "DIGITALISATION", title: "Déploiement ERP Odoo — PME Madagascar", desc: "Migration d'un système papier vers Odoo pour une entreprise de distribution. Comptabilité, stocks, achats et ventes centralisés. Formation de 30 employés.", metrics: ["30 utilisateurs", "Odoo", "4 mois"], color: "var(--ink)" },
  { tag: "DIGITALISATION", title: "SIRH sur mesure — Réseau d'hôtels", desc: "Logiciel de gestion RH adapté au droit malgache pour un groupe hôtelier. Bulletins de paie, gestion des plannings, suivi des absences.", metrics: ["250 employés", "Sur mesure", "5 mois"], color: "var(--ink)" },
  { tag: "DONNÉES", title: "Traitement & enrichissement base CRM", desc: "Nettoyage et enrichissement d'une base de 50 000 contacts pour une société de marketing direct. Déduplication, vérification emails, enrichissement secteur.", metrics: ["50 000 contacts", "98% précision", "3 semaines"], color: "var(--brand)" },
  { tag: "DONNÉES", title: "Numérisation archives documentaires", desc: "12 ans d'archives papier numérisés, indexés et classés en GED pour un cabinet notarial. Recherche full-text, conformité RGPD.", metrics: ["80 000 docs", "GED complète", "2 mois"], color: "var(--brand)" },
  { tag: "INFRASTRUCTURE", title: "Équipement réseau bureau — Antananarivo", desc: "Installation complète réseau WiFi, câblage structuré, NAS et postes de travail pour un cabinet de 25 personnes.", metrics: ["25 postes", "Infrastructure complète", "2 semaines"], color: "var(--ink)" },
  { tag: "INFRASTRUCTURE", title: "Infrastructure réseau ONG internationale", desc: "Modernisation complète de l'infrastructure réseau d'une ONG internationale, 3 sites à Antananarivo. Zéro downtime pendant les travaux.", metrics: ["3 sites", "Cisco", "3 semaines"], color: "var(--ink)" },
];

const TAGS = ["TOUS", "CALL CENTER", "DÉVELOPPEMENT", "MARKETING", "DIGITALISATION", "DONNÉES", "INFRASTRUCTURE"];

const TAG_COLORS: Record<string, string> = {
  "CALL CENTER": "var(--brand)",
  "DÉVELOPPEMENT": "var(--ink)",
  "MARKETING": "var(--brand)",
  "DIGITALISATION": "var(--ink)",
  "DONNÉES": "var(--brand)",
  "INFRASTRUCTURE": "var(--ink)",
};

export default function ProjetsList() {
  const [active, setActive] = useState("TOUS");

  const filtered = active === "TOUS" ? PROJETS : PROJETS.filter(p => p.tag === active);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-12">
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className="px-4 py-2 text-xs rounded-sm transition-all"
              style={
                active === tag
                  ? { backgroundColor: "var(--brand)", color: "var(--white)" }
                  : { backgroundColor: "var(--white)", color: "var(--mid)", border: "1px solid rgba(0,0,0,0.12)" }
              }
            >
              {tag}
              {tag !== "TOUS" && (
                <span className="ml-2 opacity-60">
                  ({PROJETS.filter(p => p.tag === tag).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <div key={`${active}-${i}`}
              className="p-7 border rounded-sm card-hover flex flex-col"
              style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "var(--white)" }}>
              <span
                className="label-tag text-[10px] px-2 py-1 self-start mb-4 rounded-sm"
                style={{ backgroundColor: TAG_COLORS[p.tag] || "var(--brand)", color: "var(--white)" }}>
                {p.tag}
              </span>
              <h3 className="font-display text-lg mb-3 flex-1 leading-snug" style={{ color: "var(--ink)" }}>
                {p.title}
              </h3>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "var(--mid)" }}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.metrics.map((m, j) => (
                  <span key={j} className="text-[11px] px-2.5 py-1 rounded-sm"
                    style={{ backgroundColor: "rgba(30,63,171,0.06)", color: "var(--brand)" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm font-light" style={{ color: "var(--mid)" }}>
          {filtered.length} réalisation{filtered.length > 1 ? "s" : ""} {active !== "TOUS" ? `en ${active.toLowerCase()}` : "au total"}
        </p>
      </div>
    </section>
  );
}
