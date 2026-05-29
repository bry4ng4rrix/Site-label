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
    headlineAccent: "Votre support permanent.",
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
    desc: "Ordinateurs, serveurs, réseau, périphériques. Conseil, livraison et installation B2B sur Antananarivo et régions.",
    items: ["Postes de travail & laptops", "Serveurs & NAS", "Réseau (Cisco, Ubiquiti)", "Installation & support"],
    featured: false,
    color: "var(--brand)",
  },
  {
    id: "comptabilite",
    href: "/services/comptabilite",
    tag: "Comptabilité",
    headline: "Vos chiffres,",
    headlineAccent: "enfin lisibles.",
    desc: "Saisie comptable, rapprochements bancaires, reporting financier mensuel. Des décisions éclairées, fondées sur des données fiables.",
    items: ["Saisie comptable & TVA", "Rapprochements bancaires", "Reporting mensuel", "Tableaux de bord dirigeants"],
    featured: false,
    color: "var(--brand-lt)",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="label-tag mb-4 text-gray-600">NOS EXPERTISES</p>
            <h2 className="font-display text-5xl md:text-6xl text-gray-900" style={{ lineHeight: 1.05 }}>
              7 expertises.<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand), var(--brand-lt))" }}>
                1 équipe.
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="label-tag text-xs px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all hover:shadow-lg"
          >
            DÉMARRER UN PROJET →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="group relative flex flex-col p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all hover:-translate-y-2 bg-white"
            >
              {/* Badge */}
              {s.badge && (
                <span
                  className="absolute top-6 right-6 label-tag text-[10px] px-2.5 py-1.5 rounded-md"
                  style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
                >
                  {s.badge}
                </span>
              )}

              {/* Tag */}
              <p className="label-tag text-[10px] mb-6 text-gray-600">
                {s.tag}
              </p>

              {/* Headline */}
              <h3 className="font-display text-2xl md:text-3xl mb-5 leading-tight text-gray-900">
                {s.headline}{" "}
                <span style={{ color: s.color }}>{s.headlineAccent}</span>
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed mb-8 text-gray-700" style={{ lineHeight: 1.7 }}>
                {s.desc}
              </p>

              {/* Items list */}
              <ul className="mt-auto space-y-2.5">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span style={{ color: s.color }} className="font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <span
                className="mt-6 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
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
