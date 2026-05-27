import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";

const PROJETS = [
  {
    tag: "CALL CENTER",
    title: "Prospection B2B France — Secteur Immobilier",
    desc: "Campagne de qualification de fichiers et prise de rendez-vous pour un réseau d'agences immobilières français. 3 mois, 12 agents dédiés, 400+ RDV qualifiés livrés.",
    metrics: ["400+ RDV qualifiés", "12 agents", "3 mois"],
    color: "var(--brand)",
  },
  {
    tag: "DÉVELOPPEMENT",
    title: "Plateforme de gestion RH — Secteur Education",
    desc: "Application web de gestion du personnel pour un réseau d'écoles privées à Madagascar. 500 utilisateurs, gestion des contrats, paie et congés.",
    metrics: ["500 utilisateurs", "React + Node.js", "6 mois"],
    color: "var(--ink)",
  },
  {
    tag: "MARKETING",
    title: "Refonte SEO & campagnes Google Ads",
    desc: "Audit SEO complet, refonte de la stratégie de contenu et gestion de campagnes Google Ads pour un e-commerçant français. +180% de trafic organique en 6 mois.",
    metrics: ["+180% trafic", "+45% conversions", "6 mois"],
    color: "var(--brand)",
  },
  {
    tag: "DIGITALISATION",
    title: "Déploiement ERP Odoo — PME Madagascar",
    desc: "Migration d'un système papier vers Odoo pour une entreprise de distribution. Comptabilité, stocks, achats et ventes centralisés. Formation de 30 employés.",
    metrics: ["30 utilisateurs formés", "Odoo", "4 mois"],
    color: "var(--ink)",
  },
  {
    tag: "DONNÉES",
    title: "Traitement & enrichissement base CRM",
    desc: "Nettoyage et enrichissement d'une base de 50 000 contacts pour une société de marketing direct. Déduplication, vérification emails, enrichissement secteur/taille.",
    metrics: ["50 000 contacts", "98% précision", "3 semaines"],
    color: "var(--brand)",
  },
  {
    tag: "INFRASTRUCTURE",
    title: "Équipement réseau bureau — Antananarivo",
    desc: "Installation complète réseau WiFi, câblage structuré, NAS et postes de travail pour un cabinet d'expertise comptable de 25 personnes.",
    metrics: ["25 postes", "Infrastructure complète", "2 semaines"],
    color: "var(--ink)",
  },
];

export default function ProjetsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, var(--brand) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="label-tag mb-5" style={{ color: "var(--brand-lt)" }}>RÉALISATIONS</p>
          <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Ce qu'on a<br />
            <span style={{ color: "var(--brand-lt)" }}>déjà construit.</span>
          </h1>
          <p className="text-white/60 text-lg font-light max-w-xl">
            Projets sélectionnés parmi nos réalisations récentes.
            Chaque chiffre est mesuré, pas estimé.
          </p>
        </div>
      </section>

      {/* Projets grid */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJETS.map((p, i) => (
              <div key={i} className="p-7 border rounded-sm card-hover flex flex-col"
                style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "var(--white)" }}>
                <span className="label-tag text-[10px] px-2 py-1 self-start mb-4 rounded-sm"
                  style={{ backgroundColor: p.color, color: "var(--white)" }}>
                  {p.tag}
                </span>
                <h3 className="font-display text-lg mb-3 flex-1" style={{ color: "var(--ink)" }}>{p.title}</h3>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "var(--mid)" }}>{p.desc}</p>
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
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
