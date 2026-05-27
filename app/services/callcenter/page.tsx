import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AgentDashboard from "@/components/callcenter/AgentDashboard";
import WhyMadagascar from "@/components/callcenter/WhyMadagascar";
import CtaSection from "@/components/home/CtaSection";
import Link from "next/link";

const FORMULES = [
  {
    name: "Starter",
    seats: "5 postes",
    desc: "Pour tester et démarrer rapidement",
    items: ["Qualification de fichiers B2B","Support entrant FR","Reporting hebdomadaire","Superviseur dédié"],
    cta: "Demander un devis",
    featured: false,
  },
  {
    name: "Business",
    seats: "10–20 postes",
    desc: "Pour une externalisation structurée",
    items: ["Prospection B2B sortante","Support FR/EN","Dashboard temps réel","Reporting quotidien","Formation personnalisée","SLA garanti"],
    cta: "Demander un devis",
    featured: true,
  },
  {
    name: "Enterprise",
    seats: "20–50 postes",
    desc: "Pour une équipe dédiée complète",
    items: ["Équipe 100% dédiée","Multi-campagnes","Reporting sur mesure","Intégration CRM","Chef de projet dédié","Astreinte 24h/24"],
    cta: "Nous contacter",
    featured: false,
  },
];

const METRICS = [
  { value: "50",    label: "postes opérationnels" },
  { value: "FR/EN", label: "bilingue certifié" },
  { value: "24h/24",label: "disponibilité" },
  { value: "100%",  label: "reporting client" },
  { value: "<2h",   label: "délai d'activation" },
  { value: "4 ans", label: "d'expérience" },
];

export default function CallCenterPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor:"var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background:"radial-gradient(ellipse at 60% 40%, var(--gold) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-tag mb-5" style={{ color:"var(--gold)" }}>CALL CENTER · 50 POSTES · ANTANANARIVO</p>
              <h1 className="font-display text-white mb-6 leading-tight"
                style={{ fontSize:"clamp(40px, 6vw, 80px)" }}>
                50 voix.<br />
                <span style={{ color:"var(--gold)" }}>Votre marque</span><br />
                en France.
              </h1>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
                Prospection B2B, qualification de fichiers, support client bilingue FR/EN.
                Depuis Antananarivo, avec l'exigence d'un partenaire européen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
                  style={{ backgroundColor:"var(--gold)", color:"var(--ink)" }}>
                  Demander un devis gratuit →
                </Link>
                <a href="#formules"
                  className="inline-flex items-center gap-2 px-6 py-3 font-light text-sm border border-white/20 text-white rounded-sm hover:border-white/50 transition-colors">
                  Voir les formules
                </a>
              </div>
            </div>
            <AgentDashboard />
          </div>
        </div>
      </section>

      {/* Métriques */}
      <section style={{ backgroundColor:"var(--brand)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
          {METRICS.map((m, i) => (
            <div key={i} className="text-center py-7 px-4">
              <div className="font-display text-3xl text-white mb-1">{m.value}</div>
              <div className="label-tag text-white/50 text-[10px]">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Offre détaillée */}
      <section className="py-24 px-6" style={{ backgroundColor:"var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color:"var(--brand)" }}>NOTRE OFFRE</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color:"var(--ink)" }}>
            Ce qu'on fait pour vous.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon:"📋", title:"Qualification de fichiers B2B",
                desc:"Enrichissement, vérification et mise à jour de vos bases de données prospects. Taux de joignabilité garanti." },
              { icon:"📞", title:"Prospection commerciale",
                desc:"Campagnes sortantes sur la France, l'Europe et l'Afrique. Prise de rendez-vous qualifiés pour vos commerciaux." },
              { icon:"🎧", title:"Support client FR/EN",
                desc:"Traitement des appels entrants, gestion des réclamations, satisfaction client. Disponible 5j/7 ou 7j/7." },
              { icon:"📊", title:"Enquêtes & sondages",
                desc:"Études de satisfaction, enquêtes NPS, sondages marché. Résultats structurés et analysés." },
              { icon:"📅", title:"Prise de rendez-vous",
                desc:"Qualification des leads inbound et prise de RDV directe dans l'agenda de vos équipes commerciales." },
              { icon:"🔄", title:"Traitement des leads entrants",
                desc:"Requalification des demandes web, suivi des prospects chauds, relance automatisée." },
            ].map((s, i) => (
              <div key={i} className="p-7 border rounded-sm card-hover" style={{ borderColor:"rgba(0,0,0,0.08)", backgroundColor:"var(--white)" }}>
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-display text-lg mb-3" style={{ color:"var(--ink)" }}>{s.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color:"var(--mid)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section id="formules" className="py-24 px-6" style={{ backgroundColor:"var(--white)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color:"var(--brand)" }}>FORMULES</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color:"var(--ink)" }}>
            Choisissez votre format.
          </h2>
          <p className="text-base font-light mb-16 max-w-xl" style={{ color:"var(--mid)" }}>
            Tous les tarifs sont sur devis — adaptés à votre volume, vos horaires et vos objectifs.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-black/10">
            {FORMULES.map((f, i) => (
              <div key={i} className="p-8 flex flex-col"
                style={{ backgroundColor: f.featured ? "var(--ink)" : "var(--paper)" }}>
                {f.featured && (
                  <span className="label-tag text-[10px] px-2 py-1 self-start mb-4"
                    style={{ backgroundColor:"var(--gold)", color:"var(--ink)" }}>
                    RECOMMANDÉ
                  </span>
                )}
                <p className="label-tag text-[10px] mb-2" style={{ color: f.featured ? "rgba(255,255,255,0.3)" : "var(--mid)" }}>
                  {f.seats}
                </p>
                <h3 className="font-display text-3xl mb-2" style={{ color: f.featured ? "var(--white)" : "var(--ink)" }}>
                  {f.name}
                </h3>
                <p className="text-sm font-light mb-8" style={{ color: f.featured ? "rgba(255,255,255,0.5)" : "var(--mid)" }}>
                  {f.desc}
                </p>
                <ul className="space-y-2.5 mb-10 flex-1">
                  {f.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"
                      style={{ color: f.featured ? "rgba(255,255,255,0.7)" : "var(--mid)" }}>
                      <span style={{ color:"var(--gold)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="text-center label-tag text-xs px-5 py-3 rounded-sm transition-all"
                  style={f.featured
                    ? { backgroundColor:"var(--gold)", color:"var(--ink)" }
                    : { border:"1.5px solid var(--brand)", color:"var(--brand)" }}>
                  {f.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyMadagascar />
      <CtaSection />
      <Footer />
    </main>
  );
}
