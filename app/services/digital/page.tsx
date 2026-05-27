import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import Link from "next/link";

const SERVICES = [
  { icon: "🗂", title: "ERP & Gestion intégrée", desc: "Odoo, SAP, solutions sur mesure. Unifiez comptabilité, stocks, RH et ventes dans un seul outil pensé pour votre réalité métier." },
  { icon: "📋", title: "Gestion documentaire", desc: "GED, workflows de validation, signature électronique. Plus de papier, plus de doublons, plus de temps perdu à chercher un fichier." },
  { icon: "👥", title: "SIRH & Paie", desc: "Logiciels RH adaptés au droit malgache et français. Gestion des congés, bulletins de paie, contrats, formations." },
  { icon: "🏪", title: "Logiciels métier", desc: "Développement d'applications sur mesure pour votre secteur : retail, santé, éducation, services publics, immobilier." },
  { icon: "🔗", title: "Intégrations & APIs", desc: "Connecter vos outils existants. CRM, ERP, plateforme e-commerce, outils comptables — on crée les ponts entre vos systèmes." },
  { icon: "🎓", title: "Formation & conduite du changement", desc: "L'outil ne suffit pas. On accompagne vos équipes avec des formations sur mesure et un suivi post-déploiement." },
];

export default function DigitalPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 40%, var(--brand) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="label-tag mb-5" style={{ color: "var(--brand-lt)" }}>DIGITALISATION & LOGICIELS DE GESTION</p>
          <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Vos processus méritent<br />
            <span style={{ color: "var(--brand-lt)" }}>mieux qu'Excel.</span>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-2xl">
            ERP, SIRH, GED, logiciels métier sur mesure. On transforme vos processus
            manuels en flux automatisés, sans casser ce qui fonctionne déjà.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}>
              Analyser mes processus →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOS SOLUTIONS</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Automatiser pour mieux travailler.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="p-7 border rounded-sm card-hover"
                style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "var(--white)" }}>
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-display text-lg mb-3" style={{ color: "var(--ink)" }}>{s.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--mid)" }}>{s.desc}</p>
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
