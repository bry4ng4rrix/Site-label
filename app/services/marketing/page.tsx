import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import Link from "next/link";

const SERVICES = [
  { icon: "🎯", title: "Stratégie digitale", desc: "Audit de présence, positionnement, plan d'action 90 jours. On définit les canaux qui convertissent pour votre marché, pas les canaux à la mode." },
  { icon: "🔍", title: "SEO & Contenu", desc: "Référencement naturel long terme. Audit technique, stratégie de mots-clés, production de contenu optimisé. Résultats mesurables à 6 mois." },
  { icon: "📣", title: "Publicité digitale", desc: "Google Ads, Meta Ads, LinkedIn Ads. Campagnes performantes avec suivi ROI précis. Budget maîtrisé, conversions maximisées." },
  { icon: "📱", title: "Social Media", desc: "Community management, création de contenu, calendrier éditorial. Présence cohérente sur les réseaux pertinents pour votre audience." },
  { icon: "📧", title: "Email Marketing", desc: "Newsletters, séquences automation, nurturing leads. Des messages qui arrivent au bon moment, à la bonne personne." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Tableaux de bord personnalisés, attribution multi-touch, optimisation continue. Chaque euro dépensé est tracé et justifié." },
];

export default function MarketingPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, var(--brand) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="label-tag mb-5" style={{ color: "var(--brand-lt)" }}>MARKETING DIGITAL</p>
          <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Votre audience existe.<br />
            <span style={{ color: "var(--brand-lt)" }}>On va la trouver.</span>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-2xl">
            SEO, publicité, social media, email marketing. Des stratégies mesurables,
            pas des promesses. On parle ROI dès le premier brief.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}>
              Obtenir un audit gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOS EXPERTISES</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Du trafic à la conversion.
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
