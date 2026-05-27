import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import MiniTestimonials from "@/components/shared/MiniTestimonials";
import Link from "next/link";

const SERVICES = [
  { icon: "🗂", title: "ERP & Gestion intégrée", desc: "Odoo, SAP, solutions sur mesure. Unifiez comptabilité, stocks, RH et ventes dans un seul outil pensé pour votre réalité métier." },
  { icon: "📋", title: "Gestion documentaire", desc: "GED, workflows de validation, signature électronique. Plus de papier, plus de doublons, plus de temps perdu à chercher un fichier." },
  { icon: "👥", title: "SIRH & Paie", desc: "Logiciels RH adaptés au droit malgache et français. Gestion des congés, bulletins de paie, contrats, formations." },
  { icon: "🏪", title: "Logiciels métier", desc: "Développement d'applications sur mesure pour votre secteur : retail, santé, éducation, services publics, immobilier." },
  { icon: "🔗", title: "Intégrations & APIs", desc: "Connecter vos outils existants. CRM, ERP, plateforme e-commerce, outils comptables — on crée les ponts entre vos systèmes." },
  { icon: "🎓", title: "Formation & conduite du changement", desc: "L'outil ne suffit pas. On accompagne vos équipes avec des formations sur mesure et un suivi post-déploiement." },
];

const PROCESS = [
  { num: "01", title: "Cartographie des processus", desc: "Audit de vos flux existants, identification des goulots d'étranglement, priorisation des gains rapides. On comprend votre métier avant de proposer un outil." },
  { num: "02", title: "Choix & paramétrage", desc: "Sélection de la solution adaptée (standard ou sur mesure), paramétrage selon votre organisation, intégration avec vos systèmes existants." },
  { num: "03", title: "Déploiement progressif", desc: "Migration par module, tests avec vos données réelles, ajustements itératifs. Pas de big bang risqué — une transition maîtrisée." },
  { num: "04", title: "Formation & support", desc: "Formation de vos équipes sur site ou à distance, documentation utilisateur, support post-déploiement pendant 3 mois minimum." },
];

const TESTIMONIALS = [
  { quote: "On gérait notre PME avec 7 fichiers Excel différents. Après le déploiement Odoo avec Label Technology, tout est centralisé. On a gagné 15h de travail par semaine.", author: "Pierre F.", role: "Gérant", company: "Distribution B2B, Madagascar" },
  { quote: "La migration de notre système de paie a été parfaitement gérée. Zéro erreur sur les 45 bulletins du premier mois, et nos RH sont autonomes en 2 semaines.", author: "Hanta R.", role: "DRH", company: "Réseau d'écoles, Antananarivo" },
  { quote: "Ils ont connecté notre CRM Salesforce à notre ERP en 3 semaines. Les synchros de données qui nous prenaient 2h par jour sont maintenant automatiques.", author: "Laurent V.", role: "Operations Manager", company: "Filiale française, Madagascar" },
];

const FAQ = [
  { q: "Odoo ou solution sur mesure — comment choisir ?", a: "Odoo couvre 80% des besoins d'une PME standard, est rapide à déployer et moins coûteux. Une solution sur mesure est justifiée quand vos processus sont vraiment spécifiques et non couverts par un ERP standard. On vous aide à trancher lors du cadrage." },
  { q: "Combien de temps prend un déploiement ERP ?", a: "Un déploiement Odoo basique (comptabilité + stocks) : 4 à 8 semaines. Un ERP complet avec formation : 3 à 6 mois. On déploie module par module pour limiter les risques et permettre à vos équipes de s'adapter progressivement." },
  { q: "Peut-on garder nos données existantes ?", a: "Oui, la migration des données est systématiquement incluse dans nos projets. On nettoie, normalise et importe vos données existantes. On ne démarre jamais de zéro sauf si vous le souhaitez." },
  { q: "Intervenez-vous en France pour des déploiements sur site ?", a: "Nos déploiements sont majoritairement à distance pour la France. Pour des formations sur site ou des projets complexes, on peut intervenir en France selon disponibilité. La grande majorité de nos clients français sont satisfaits des formations à distance." },
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

      {/* Process */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOTRE MÉTHODE</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Une transition sans turbulences.
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
