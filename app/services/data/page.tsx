import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import MiniTestimonials from "@/components/shared/MiniTestimonials";
import Link from "next/link";

const SERVICES = [
  { icon: "🔄", title: "Saisie & collecte de données", desc: "Numérisation de documents, saisie structurée, OCR et traitement de formulaires. Précision garantie, délais respectés, volumes illimités." },
  { icon: "🧹", title: "Nettoyage & normalisation", desc: "Déduplication, mise en conformité, enrichissement de bases. Vos données brutes transformées en actif fiable et exploitable." },
  { icon: "📊", title: "Analyse & datavisualisation", desc: "Tableaux de bord, rapports automatisés, visualisations interactives. De la donnée brute à l'insight décisionnel." },
  { icon: "🤖", title: "Traitement automatisé", desc: "Scripts Python/R, pipelines ETL, automatisation des flux de données. Réduisez le temps de traitement de 80%." },
  { icon: "📋", title: "Recherche & veille", desc: "Recherches documentaires, veille concurrentielle, benchmarks sectoriels. Livrés structurés, sourcés et prêts à l'usage." },
  { icon: "🔒", title: "Gestion & archivage", desc: "Structuration, classification, archivage conforme RGPD. Vos données accessibles, sécurisées et auditables." },
];

const PROCESS = [
  { num: "01", title: "Cadrage & format", desc: "Analyse de vos sources de données, formats existants, volumes et contraintes. On définit la structure de sortie avant de commencer." },
  { num: "02", title: "Traitement & contrôle qualité", desc: "Saisie ou transformation avec double contrôle qualité. Taux d'erreur garanti inférieur à 0,5% sur les missions de saisie." },
  { num: "03", title: "Livraison structurée", desc: "Export dans le format qui vous convient : Excel, CSV, JSON, base de données. Documentation des transformations appliquées." },
  { num: "04", title: "Validation & ajustements", desc: "Revue avec vous, corrections si nécessaire, documentation finale. On ne considère la mission terminée qu'à votre satisfaction." },
];

const TESTIMONIALS = [
  { quote: "50 000 contacts nettoyés et enrichis en 3 semaines. Le taux de délivrabilité de nos campagnes email est passé de 67% à 94%. Retour sur investissement immédiat.", author: "Julien P.", role: "Head of Growth", company: "Marketing direct, France" },
  { quote: "Ils ont numérisé 12 ans d'archives papier en 2 mois. Chaque document est indexé, recherchable, conforme RGPD. On a enfin une base documentaire exploitable.", author: "Isabelle C.", role: "Directrice Administrative", company: "Cabinet notarial, Lyon" },
  { quote: "Notre rapport de veille concurrentielle mensuel prenait 3 jours à produire en interne. Label Technology le livre en 48h, plus complet et mieux structuré.", author: "Kevin A.", role: "Directeur Stratégie", company: "Groupe industriel, Madagascar" },
];

const FAQ = [
  { q: "Comment garantissez-vous la qualité des données saisies ?", a: "Double saisie indépendante sur les missions critiques, contrôle qualité à chaque étape, rapport d'erreurs fourni. On garantit un taux de précision supérieur à 99,5% sur les missions de saisie structurée." },
  { q: "Quels volumes pouvez-vous traiter ?", a: "Notre équipe dédiée peut traiter de 10 000 à plusieurs millions d'entrées selon le type de traitement. On peut scaler en 48h si le volume augmente pendant la mission." },
  { q: "Comment sont protégées nos données sensibles ?", a: "Accès restreint aux données, accord de confidentialité (NDA) systématique, données traitées sur serveurs sécurisés. Nos process sont conformes aux exigences RGPD pour les données de citoyens européens." },
  { q: "Dans quels formats livrez-vous les données ?", a: "Excel, CSV, JSON, SQL, Google Sheets, ou directement dans votre CRM/base de données via API. On s'adapte à vos outils existants, pas l'inverse." },
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
            de volumes importants, avec la rigueur d'un partenaire fiable.
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

      {/* Process */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOTRE MÉTHODE</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Rigueur à chaque étape.
          </h2>
          <div className="grid md:grid-cols-4 gap-px bg-black/8">
            {PROCESS.map((p, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: "var(--white)" }}>
                <div className="font-display text-5xl mb-6 opacity-15" style={{ color: "var(--brand)", lineHeight: 1 }}>{p.num}</div>
                <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: "var(--brand)" }} />
                <h3 className="font-display text-lg mb-3" style={{ color: "var(--ink)" }}>{p.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--mid)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MiniTestimonials items={TESTIMONIALS} />
      <FaqSection items={FAQ} />
      <CtaSection />
      <Footer />
    </main>
  );
}
