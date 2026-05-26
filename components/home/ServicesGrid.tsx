"use client";

import Link from "next/link";

const SERVICES = [
  {
    id: "dev",
    href: "/services/dev",
    tag: "Développement",
    headline: "On ne livre pas du code.",
    headlineAccent: "On livre de la croissance.",
    desc: "Applications web & mobile sur mesure, ERP, CRM, plateformes métier. Du prototype au système d'information complet.",
    items: ["Sites & e-commerce", "Apps métier sur mesure", "Mobile iOS & Android", "APIs & intégrations"],
    featured: true,
    color: "var(--brand)",
  },
  {
    id: "callcenter",
    href: "/services/callcenter",
    tag: "Call Center",
    headline: "50 voix.",
    headlineAccent: "Votre marque en France.",
    desc: "Prospection B2B, qualification de fichiers, support client bilingue FR/EN depuis Antananarivo.",
    items: ["Prospection B2B", "Qualification de fichiers", "Support entrant & sortant", "Reporting temps réel"],
    featured: false,
    badge: "50 postes",
    color: "var(--gold)",
  },
  {
    id: "marketing",
    href: "/services/marketing",
    tag: "Marketing Digital",
    headline: "Votre audience existe déjà.",
    headlineAccent: "On va la trouver.",
    desc: "SEO, SEA, réseaux sociaux, analytics. Une stratégie orientée résultats mesurables.",
    items: ["SEO / SEA", "Réseaux sociaux", "Email marketing", "Analytics & reporting"],
    featured: false,
    color: "var(--coral)",
  },
  {
    id: "digital",
    href: "/services/digital",
    tag: "Digitalisation",
    headline: "Vos processus papier",
    headlineAccent: "coûtent de l'argent.",
    desc: "Audit, conseil, déploiement ERP/CRM, formation équipes. Transformation numérique complète.",
    items: ["Audit & conseil", "Déploiement ERP/CRM", "Automatisation (RPA)", "Formation & conduite"],
    featured: false,
    color: "var(--brand-lt)",
  },
  {
    id: "data",
    href: "/services/data",
    tag: "Traitement de données",
    headline: "Vos données dorment.",
    headlineAccent: "On les réveille.",
    desc: "Numérisation, saisie, nettoyage, structuration et analyse. Physique comme numérique.",
    items: ["Numérisation documents", "Nettoyage & déduplication", "Structuration & migration", "Visualisation & analyse"],
    featured: false,
    color: "var(--brand)",
  },
  {
    id: "materiel",
    href: "/services/materiel",
    tag: "Matériel IT",
    headline: "L'infrastructure",
    headlineAccent: "qui tient la route.",
    desc: "Ordinateurs, serveurs, réseau, périphériques. Conseil, livraison et installation B2B.",
    items: ["Postes de travail & laptops", "Serveurs & NAS", "Réseau (Cisco, Ubiquiti)", "Installation & support"],
    featured: false,
    color: "var(--mid)",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOS EXPERTISES</p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
              6 expertises.<br />
              <span style={{ color: "var(--brand)" }}>1 équipe.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="label-tag text-xs px-5 py-2.5 border-2 rounded-sm transition-colors hover:text-white"
            style={{ borderColor: "var(--brand)", color: "var(--brand)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--brand)";
            }}
          >
            DÉMARRER UN PROJET →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="group relative flex flex-col p-8 card-hover"
              style={{ backgroundColor: s.featured ? "var(--ink)" : "var(--white)" }}
            >
              {/* Badge */}
              {s.badge && (
                <span
                  className="absolute top-6 right-6 label-tag text-[10px] px-2 py-1"
                  style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
                >
                  {s.badge}
                </span>
              )}

              {/* Tag */}
              <p
                className="label-tag text-[10px] mb-6"
                style={{ color: s.featured ? "rgba(255,255,255,0.4)" : "var(--mid)" }}
              >
                {s.tag}
              </p>

              {/* Headline */}
              <h3
                className="font-display text-2xl mb-4 leading-tight"
                style={{ color: s.featured ? "var(--white)" : "var(--ink)" }}
              >
                {s.headline}{" "}
                <span style={{ color: s.color }}>{s.headlineAccent}</span>
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6 font-light"
                style={{ color: s.featured ? "rgba(255,255,255,0.5)" : "var(--mid)" }}
              >
                {s.desc}
              </p>

              {/* Items list */}
              <ul className="mt-auto space-y-1.5">
                {s.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: s.featured ? "rgba(255,255,255,0.6)" : "var(--mid)" }}
                  >
                    <span style={{ color: s.color }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <span
                className="mt-6 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: s.color }}
              >
                En savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
