import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/shared/FaqSection";
import MiniTestimonials from "@/components/shared/MiniTestimonials";
import Link from "next/link";

const CATEGORIES = [
  { icon: "💻", title: "Ordinateurs & Workstations", desc: "PC de bureau, laptops, stations de travail haute performance. Marques professionnelles, garanties constructeur, livraison sur site." },
  { icon: "🖥", title: "Écrans & Périphériques", desc: "Moniteurs simple et multi-écrans, claviers, souris, casques audio professionnels. Ergonomie et productivité." },
  { icon: "🌐", title: "Réseau & Infrastructure", desc: "Switches, routeurs, points d'accès WiFi, câblage structuré. Installation et configuration incluses." },
  { icon: "🖨", title: "Impression & Numérisation", desc: "Imprimantes laser, multifonctions, scanners documentaires. Contrats de maintenance disponibles." },
  { icon: "🔌", title: "Alimentation & Sécurité", desc: "Onduleurs UPS, parasurtenseurs, disques durs et solutions de sauvegarde. Continuité d'activité garantie." },
  { icon: "🛠", title: "Maintenance & Support", desc: "Contrats de maintenance préventive et corrective. Hotline technique, interventions sur site Antananarivo et régions." },
];

const PROCESS = [
  { num: "01", title: "Audit des besoins", desc: "Analyse de votre parc existant, besoins par poste de travail, contraintes budget et délais. On recommande ce qui est utile, pas ce qui est cher." },
  { num: "02", title: "Devis & sélection", desc: "Devis détaillé avec alternatives, comparaison coût/performance, garanties constructeur. Validation avec vous avant commande." },
  { num: "03", title: "Livraison & installation", desc: "Livraison sur site Antananarivo et régions. Installation, configuration, intégration réseau. Tout est opérationnel avant qu'on reparte." },
  { num: "04", title: "Support continu", desc: "Hotline technique dédiée, interventions préventives planifiées, garantie de remplacement rapide en cas de panne." },
];

const TESTIMONIALS = [
  { quote: "Ils ont équipé nos 25 postes en 2 semaines, configuration réseau incluse. Tout fonctionnait parfaitement dès le premier jour. Service irréprochable.", author: "Ravo M.", role: "Directeur Général", company: "Cabinet expertise comptable, Antananarivo" },
  { quote: "Notre infrastructure réseau datait de 2015. Ils l'ont modernisée sans interruption pendant que nos équipes travaillaient. Zéro downtime pendant les 3 jours de travaux.", author: "Jean-Luc T.", role: "Responsable IT", company: "ONG internationale, Madagascar" },
  { quote: "Le contrat de maintenance est ce qu'on a de mieux fait. Un technicien sur site en moins de 4h pour chaque incident. On n'a plus de journées perdues à cause d'une panne.", author: "Nirina A.", role: "Responsable des opérations", company: "Entreprise logistique, Antananarivo" },
];

const FAQ = [
  { q: "Proposez-vous des marques spécifiques ou êtes-vous multi-marques ?", a: "On est multi-marques et on vous conseille la marque adaptée à votre usage et votre budget. On travaille principalement avec Lenovo, HP, Dell, Asus Pro pour les postes de travail, et Cisco, TP-Link Pro, Ubiquiti pour le réseau." },
  { q: "Intervenez-vous en dehors d'Antananarivo ?", a: "Oui, on intervient dans toute la région d'Antananarivo et dans les principales villes de Madagascar. Pour les zones éloignées, un déplacement est facturé selon la distance." },
  { q: "Quelle garantie sur le matériel vendu ?", a: "Tous nos équipements sont vendus avec la garantie constructeur (minimum 1 an, souvent 3 ans pour le professionnel). On propose en complément nos propres contrats de maintenance sur site." },
  { q: "Proposez-vous de la location de matériel ?", a: "Nous proposons la location longue durée (LLD) sur certaines gammes de postes de travail et d'imprimantes. C'est une option intéressante pour préserver votre trésorerie et renouveler régulièrement votre parc." },
];

export default function MaterielPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 30%, var(--brand) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="label-tag mb-5" style={{ color: "var(--brand-lt)" }}>VENTE DE MATÉRIEL INFORMATIQUE</p>
          <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Le bon matériel.<br />
            <span style={{ color: "var(--brand-lt)" }}>Au juste prix.</span>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-2xl">
            Ordinateurs, réseau, périphériques, infrastructure serveur.
            Sélection professionnelle, conseil personnalisé, installation
            et support inclus sur Antananarivo.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}>
              Demander un devis →
            </Link>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOS GAMMES</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Équipement & Support IT.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CATEGORIES.map((c, i) => (
              <div key={i} className="p-7 border rounded-sm card-hover"
                style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "var(--white)" }}>
                <span className="text-3xl mb-4 block">{c.icon}</span>
                <h3 className="font-display text-lg mb-3" style={{ color: "var(--ink)" }}>{c.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--mid)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>COMMENT CA MARCHE</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Du devis à l'installation.
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
