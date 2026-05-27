import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
import MiniTestimonials from "@/components/shared/MiniTestimonials";

const EQUIPE = [
  { initiales: "LT", nom: "Direction", role: "Fondateur & CEO", desc: "Vision stratégique, développement commercial international. 4 ans à construire Label Technology depuis Antananarivo." },
  { initiales: "DT", nom: "Pôle Dev", role: "Lead Développeur", desc: "Architecte des projets web et mobile. Expert Next.js, Node.js, PostgreSQL. Certifié AWS Solutions Architect." },
  { initiales: "CC", nom: "Pôle Call Center", role: "Responsable Opérations", desc: "Supervision des 50 agents. Standards qualité, formation continue, SLA clients. Ancienne consultante CCaaS Paris." },
  { initiales: "MK", nom: "Pôle Marketing", role: "Head of Digital", desc: "SEO, Ads, social media. Ex-agence digitale à Bruxelles. Gère les stratégies digitales de nos clients FR/EU." },
  { initiales: "DS", nom: "Pôle Data", role: "Data Manager", desc: "Traitement de données à grande échelle, pipelines ETL, datavisualisation. Python, SQL, Power BI." },
  { initiales: "IT", nom: "Pôle Infra", role: "Responsable IT", desc: "Parc matériel, réseau, infrastructure. Certifications Cisco et Microsoft. Support technique de l'ensemble de l'équipe." },
];

const TEMOIGNAGES_CLIENTS = [
  { quote: "En 18 mois de partenariat, Label Technology est devenu une extension naturelle de notre équipe. Réactivité, qualité, transparence — c'est rare de trouver les trois ensemble.", author: "François D.", role: "CEO", company: "Startup B2B, Paris" },
  { quote: "On a commencé par un projet de développement web, puis on leur a confié notre call center, puis notre SEO. Aujourd'hui ils gèrent 3 pôles pour nous. C'est la définition d'un partenaire.", author: "Marie-Claire V.", role: "COO", company: "Groupe retail, Lyon" },
  { quote: "La combinaison de talent local et standards européens qu'ils proposent est vraiment unique en Afrique de l'Est. On les recommande systématiquement à notre réseau.", author: "Dr. Andry R.", role: "Président", company: "Association Tech Madagascar" },
];

const VALEURS = [
  { num: "01", title: "Exigence", desc: "On ne livre pas ce qui est acceptable. On livre ce qui est excellent. Chaque projet sort avec la même attention, qu'il s'agisse d'une PME ou d'un grand compte." },
  { num: "02", title: "Transparence", desc: "Pas de boîte noire. Vous voyez ce qui se passe, quand ça se passe. Reportings réguliers, communication directe, zéro surprise." },
  { num: "03", title: "Réactivité", desc: "Madagascar = UTC+3. On travaille pendant vos heures de bureau. Délais tenus. Réponses rapides. Parce que votre temps a de la valeur." },
  { num: "04", title: "Partenariat", desc: "On ne fait pas de la prestation. On construit des partenariats durables. Vos succès sont nos succès." },
];

const CHIFFRES = [
  { value: "60+", label: "Collaborateurs" },
  { value: "4", label: "Ans d'expérience" },
  { value: "50", label: "Postes Call Center" },
  { value: "6", label: "Pôles de services" },
  { value: "FR/EN", label: "Bilingue certifié" },
  { value: "24h/24", label: "Disponibilité" },
];

export default function AProposPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, var(--brand) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="label-tag mb-5" style={{ color: "var(--brand-lt)" }}>À PROPOS</p>
          <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Antananarivo.<br />
            <span style={{ color: "var(--brand-lt)" }}>Standards européens.</span>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">
            Fondée il y a 4 ans à Madagascar, Label Technology est aujourd'hui
            un partenaire technologique de référence pour les entreprises
            françaises, africaines et malgaches.
          </p>
        </div>
      </section>

      {/* Chiffres */}
      <section style={{ backgroundColor: "var(--brand)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
          {CHIFFRES.map((c, i) => (
            <div key={i} className="text-center py-7 px-4">
              <div className="font-display text-3xl text-white mb-1">{c.value}</div>
              <div className="label-tag text-white/50 text-[10px]">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-tag mb-4" style={{ color: "var(--brand)" }}>NOTRE HISTOIRE</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight" style={{ color: "var(--ink)" }}>
                Né à Madagascar.<br />
                <span style={{ color: "var(--brand)" }}>Pensé pour le monde.</span>
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed" style={{ color: "var(--mid)" }}>
                <p>
                  Label Technology a été fondée avec une conviction simple : Madagascar dispose
                  d'un vivier de talents extraordinaire — ingénieux, bilingues, réactifs —
                  que les entreprises européennes et africaines ignorent encore trop souvent.
                </p>
                <p>
                  En 4 ans, nous avons construit une équipe de 60 collaborateurs couvrant
                  6 pôles de services complémentaires : développement web et mobile, call center
                  50 postes, marketing digital, digitalisation, traitement de données et
                  vente de matériel informatique.
                </p>
                <p>
                  Notre modèle : externalisation de qualité, à coût compétitif, avec la
                  transparence et l'exigence d'un partenaire interne.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-sm border"
              style={{ backgroundColor: "var(--white)", borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl" style={{ color: "var(--brand)" }}>2022</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>Fondation</p>
                    <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
                      Création de Label Technology à Antananarivo avec une équipe de 10 personnes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl" style={{ color: "var(--brand)" }}>2023</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>Call Center 20 postes</p>
                    <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
                      Ouverture du pôle Call Center avec 20 agents certifiés FR/EN.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl" style={{ color: "var(--brand)" }}>2024</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>50 postes & 6 pôles</p>
                    <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
                      Extension à 50 postes call center et déploiement de tous les pôles de services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-4xl" style={{ color: "var(--brand)" }}>2026</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>60+ collaborateurs</p>
                    <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
                      Équipe de 60 experts, clients en France, Afrique et Madagascar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOS VALEURS</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Ce qui nous guide.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-black/5">
            {VALEURS.map((v, i) => (
              <div key={i} className="p-8" style={{ backgroundColor: "var(--white)" }}>
                <p className="font-display text-5xl mb-4" style={{ color: "rgba(30,63,171,0.12)" }}>{v.num}</p>
                <h3 className="font-display text-2xl mb-3" style={{ color: "var(--ink)" }}>{v.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--mid)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe dirigeante */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>L'ÉQUIPE</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>
            Les gens derrière le travail.
          </h2>
          <p className="text-base font-light mb-16 max-w-xl" style={{ color: "var(--mid)" }}>
            6 pôles, 6 responsables, 60 collaborateurs. Une équipe construite sur la durée.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EQUIPE.map((m, i) => (
              <div key={i} className="p-7 border rounded-sm card-hover"
                style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "var(--white)" }}>
                <div className="w-12 h-12 rounded-sm flex items-center justify-center font-display text-lg text-white mb-5"
                  style={{ backgroundColor: "var(--brand)" }}>
                  {m.initiales}
                </div>
                <h3 className="font-display text-lg mb-0.5" style={{ color: "var(--ink)" }}>{m.nom}</h3>
                <p className="label-tag text-[10px] mb-3" style={{ color: "var(--brand)" }}>{m.role}</p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--mid)" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MiniTestimonials items={TEMOIGNAGES_CLIENTS} />
      <CtaSection />
      <Footer />
    </main>
  );
}
