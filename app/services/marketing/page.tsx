import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import MiniTestimonials from "@/components/shared/MiniTestimonials";
import Link from "next/link";

const SERVICES = [
  { icon: "🎯", title: "Stratégie digitale", desc: "Audit de présence, positionnement, plan d'action 90 jours. On définit les canaux qui convertissent pour votre marché, pas les canaux à la mode." },
  { icon: "🔍", title: "SEO & Contenu", desc: "Référencement naturel long terme. Audit technique, stratégie de mots-clés, production de contenu optimisé. Résultats mesurables à 6 mois." },
  { icon: "📣", title: "Publicité digitale", desc: "Google Ads, Meta Ads, LinkedIn Ads. Campagnes performantes avec suivi ROI précis. Budget maîtrisé, conversions maximisées." },
  { icon: "📱", title: "Social Media", desc: "Community management, création de contenu, calendrier éditorial. Présence cohérente sur les réseaux pertinents pour votre audience." },
  { icon: "📧", title: "Email Marketing", desc: "Newsletters, séquences automation, nurturing leads. Des messages qui arrivent au bon moment, à la bonne personne." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Tableaux de bord personnalisés, attribution multi-touch, optimisation continue. Chaque euro dépensé est tracé et justifié." },
];

const PROCESS = [
  { num: "01", title: "Audit de présence", desc: "Analyse SEO technique, audit des comptes publicitaires existants, benchmark concurrentiel. On part de ce qui existe pour construire dessus." },
  { num: "02", title: "Stratégie & plan d'action", desc: "Ciblage audience, sélection des canaux, objectifs SMART et KPIs. Un plan sur 90 jours, réaliste et mesurable." },
  { num: "03", title: "Exécution & optimisation", desc: "Création de contenus, lancement des campagnes, A/B testing continu. On optimise chaque semaine en fonction des données." },
  { num: "04", title: "Reporting & itération", desc: "Rapport mensuel détaillé, call de suivi, ajustements stratégiques. Transparence totale sur ce qui fonctionne et ce qu'on améliore." },
];

const TESTIMONIALS = [
  { quote: "En 6 mois de SEO, notre trafic organique a augmenté de 180%. On apparaît maintenant sur des requêtes qu'on n'aurait jamais imaginé atteindre.", author: "Camille R.", role: "CEO", company: "E-commerce mode, France" },
  { quote: "Les campagnes Google Ads ont divisé notre coût d'acquisition par 2,4 en 3 mois. L'équipe sait exactement quels leviers actionner.", author: "Antoine M.", role: "Directeur Commercial", company: "SaaS B2B, Lyon" },
  { quote: "On leur a confié notre stratégie social media de A à Z. Notre communauté LinkedIn a triplé en 4 mois avec un engagement qu'on n'avait jamais eu.", author: "Nadia B.", role: "Responsable Marketing", company: "Cabinet conseil, Paris" },
];

const FAQ = [
  { q: "En combien de temps voit-on des résultats SEO ?", a: "Le SEO est un investissement long terme. Les premiers résultats mesurables apparaissent en 3 à 4 mois. Un positionnement solide se construit sur 6 à 12 mois. C'est pour ça qu'on combine souvent SEO et campagnes payantes au démarrage." },
  { q: "Quel budget minimum pour les campagnes Google Ads ?", a: "On recommande un minimum de 500€/mois de budget publicitaire pour avoir des données significatives. Nos honoraires de gestion viennent en sus. En dessous, l'optimisation est difficile et les résultats peu représentatifs." },
  { q: "Travaillez-vous sur des marchés en dehors de la France ?", a: "Oui — France, Belgique, Suisse, Afrique francophone, Madagascar. Notre expertise SEO couvre les marchés francophones. Nos équipes bilingues couvrent aussi les marchés anglophones." },
  { q: "Proposez-vous des contrats sans engagement ?", a: "On propose des missions ponctuelles (audit, stratégie) et des retainers mensuels avec préavis de 30 jours. On ne croit pas aux contrats longue durée imposés — notre rétention vient de nos résultats." },
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

      {/* Process */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOTRE APPROCHE</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            De l'audit aux résultats.
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
