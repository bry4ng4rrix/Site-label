import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import Link from "next/link";

const SERVICES = [
  { icon: "🔄", title: "Saisie & collecte de données", desc: "Numérisation de documents, saisie structurée, OCR et traitement de formulaires. Précision garantie, délais respectés, volumes illimités." },
  { icon: "🧹", title: "Nettoyage & normalisation", desc: "Déduplication, mise en conformité, enrichissement de bases. Vos données brutes transformées en actif fiable et exploitable." },
  { icon: "📊", title: "Analyse & datavisualisation", desc: "Tableaux de bord, rapports automatisés, visualisations interactives. De la donnée brute à l'insight décisionnel." },
  { icon: "🤖", title: "Traitement automatisé", desc: "Scripts Python/R, pipelines ETL, automatisation des flux de données. Réduisez le temps de traitement de 80%." },
  { icon: "📋", title: "Recherche & veille", desc: "Recherches documentaires, veille concurrentielle, benchmarks sectoriels. Livrés structurés, sourcés et prêts à l'usage." },
  { icon: "🔒", title: "Gestion & archivage", desc: "Structuration, classification, archivage conforme RGPD. Vos données accessibles, sécurisées et auditables." },
];

export default function DataPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 40% 60%, var(--brand) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="label-tag mb-5" style={{ color: "var(--brand-lt)" }}>TRAITEMENT DE DONNÉES</p>
          <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Vos données sont un actif.<br />
            <span style={{ color: "var(--brand-lt)" }}>On les rend exploitables.</span>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-2xl">
            Saisie, nettoyage, analyse, automatisation. Une équipe dédiée au traitement
            de volumes de données importants, avec la rigueur d'un partenaire fiable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}>
              Parler de mon projet →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOS PRESTATIONS</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            De la donnée brute à la décision.
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
