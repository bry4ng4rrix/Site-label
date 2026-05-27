import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";
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

      {/* Stack */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--white)" }}>
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

      <CtaSection />
      <Footer />
    </main>
  );
}
