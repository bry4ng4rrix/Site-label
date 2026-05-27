import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Développement Web & Mobile — Next.js, React, Node.js",
  description:
    "Sites web, applications mobiles, APIs, e-commerce. Stack Next.js/React/Node.js. Standards ESN européenne, délais startup. Devis gratuit en 24h depuis Antananarivo.",
};
import FaqSection from "@/components/shared/FaqSection";
import MiniTestimonials from "@/components/shared/MiniTestimonials";
import Link from "next/link";

const SERVICES = [
  { icon: "🌐", title: "Sites & Applications Web", desc: "De la landing page au SaaS complexe. React, Next.js, architecture scalable. Livré avec les performances Core Web Vitals au vert." },
  { icon: "📱", title: "Applications Mobiles", desc: "iOS & Android natifs ou React Native cross-platform. UX pensée pour la conversion, pas pour l'esthétique seule." },
  { icon: "⚡", title: "APIs & Back-end", desc: "Node.js, Python, bases de données relationnelles et NoSQL. Architecture microservices ou monolithe — selon ce que votre usage justifie." },
  { icon: "🔧", title: "Refonte & Migration", desc: "Legacy à moderniser ? On reprend l'existant, on le ré-architecture, on migre sans interruption de service." },
  { icon: "🛒", title: "E-commerce", desc: "Shopify, WooCommerce, solutions sur mesure. Tunnel d'achat optimisé, intégrations paiement, gestion stocks." },
  { icon: "🔒", title: "Audit & Sécurité", desc: "Revue de code, audit de sécurité, tests de pénétration applicatifs. Vos données et celles de vos clients, protégées." },
];

const STACK = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "React Native", "Tailwind CSS", "Docker", "AWS", "Vercel", "Figma"];

const PROCESS = [
  { num: "01", title: "Audit & cadrage", desc: "Analyse de votre existant, définition des user stories, architecture technique. On ne code pas avant de comprendre." },
  { num: "02", title: "Design & prototypage", desc: "Maquettes Figma validées avec vous. Charte graphique, parcours utilisateur, responsive design avant la première ligne de code." },
  { num: "03", title: "Développement itératif", desc: "Sprints de 2 semaines avec démos régulières. Vous voyez l'application prendre forme, vous pouvez ajuster à chaque étape." },
  { num: "04", title: "Livraison & suivi", desc: "Mise en production, formation, documentation. On reste disponibles — maintenance et évolutions selon vos besoins." },
];

const TESTIMONIALS = [
  { quote: "L'équipe a livré notre plateforme RH en 4 mois, dans les délais et dans le budget. La qualité du code et l'architecture sont au niveau d'une ESN parisienne, pour un tiers du prix.", author: "Marc D.", role: "DSI", company: "Groupe éducatif, Madagascar" },
  { quote: "Notre site e-commerce a été refondu de A à Z. Résultat : +65% de conversions et un temps de chargement divisé par 3. On travaille maintenant sur la version mobile.", author: "Sophie L.", role: "Directrice Marketing", company: "Retailer FR, Paris" },
  { quote: "Ils ont modernisé notre API legacy en microservices sans une seule interruption de service. Migration transparente pour nos 8 000 utilisateurs quotidiens.", author: "Thomas K.", role: "CTO", company: "SaaS B2B, France" },
];

const FAQ = [
  { q: "Quels sont vos délais typiques pour un projet web ?", a: "Un site vitrine : 3 à 6 semaines. Une application web : 2 à 6 mois selon la complexité. On établit un planning précis lors du cadrage, et on le tient." },
  { q: "Travaillez-vous avec des technologies spécifiques ou s'adaptez-vous ?", a: "On maîtrise Next.js, React, Node.js, PostgreSQL, React Native. On peut s'adapter à votre stack existante si nécessaire. On choisit toujours la technologie la plus adaptée à votre usage, pas celle qu'on préfère." },
  { q: "Comment se déroule la collaboration à distance ?", a: "Daily standup optionnel, démos hebdomadaires, slack dédié. On est sur UTC+3 — 2h de décalage avec Paris en été. En pratique, pas de friction : nos clients oublient souvent qu'on est à Madagascar." },
  { q: "Proposez-vous de la maintenance après livraison ?", a: "Oui, sous forme de contrat mensuel ou de tickets à la demande. On garantit une réponse sous 4h en heures ouvrées pour les bugs critiques." },
  { q: "Quel est le budget minimum pour un projet de développement ?", a: "Tout dépend du périmètre. Un site vitrine commence à partir de 800€. Une application web sur mesure entre 3 000€ et 15 000€. On établit un devis précis après le premier échange." },
];

export default function DevPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center grid-bg px-6 pt-24 pb-16"
        style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, var(--brand) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="label-tag mb-5" style={{ color: "var(--brand-lt)" }}>DÉVELOPPEMENT WEB & MOBILE</p>
          <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            On ne livre pas du code.<br />
            <span style={{ color: "var(--brand-lt)" }}>On livre de la croissance.</span>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-2xl">
            Web, mobile, API, e-commerce. Depuis Antananarivo, avec les standards
            d'une ESN européenne et les délais d'une startup.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}>
              Démarrer un projet →
            </Link>
            <Link href="/projets"
              className="inline-flex items-center gap-2 px-6 py-3 font-light text-sm border border-white/20 text-white rounded-sm hover:border-white/50 transition-colors">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>CE QU'ON FAIT</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "var(--ink)" }}>
            Du code qui travaille pour vous.
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
            De l'idée à la mise en ligne.
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

      {/* Stack */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-8 text-center" style={{ color: "var(--brand)" }}>NOTRE STACK TECHNIQUE</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {STACK.map((tech, i) => (
              <span key={i} className="px-4 py-2 text-sm font-medium rounded-sm border"
                style={{ borderColor: "var(--brand)", color: "var(--brand)", backgroundColor: "rgba(30,63,171,0.04)" }}>
                {tech}
              </span>
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
