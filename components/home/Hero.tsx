import Link from "next/link";

const STATS = [
  { value: "50",    label: "postes Call Center" },
  { value: "6",     label: "domaines d'expertise" },
  { value: "FR/EN", label: "bilingue" },
  { value: "24h",   label: "délai de réponse" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--brand)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="label-tag text-white/50 mb-8 animate-fadeup">
          Antananarivo · Madagascar · International
        </div>

        <h1
          className="font-display text-white mb-6 max-w-4xl animate-fadeup-d1"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          Votre partenaire{" "}
          <span style={{ color: "var(--brand-lt)" }}>technologique</span>{" "}
          premium
        </h1>

        <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-10 font-light animate-fadeup-d2">
          Développement, Call Center 50 postes, Marketing digital, Digitalisation,
          Data et Matériel IT — une seule équipe, six expertises.
        </p>

        <div className="flex flex-wrap gap-4 mb-20 animate-fadeup-d3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-sm transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Démarrer un projet →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-light rounded-sm border border-white/20 hover:border-white/50 transition-colors"
          >
            Découvrir nos services
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden animate-fadeup-d5">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="px-6 py-5 text-center hover:bg-white/5 transition-colors"
              style={{ backgroundColor: "var(--ink)" }}
            >
              <div className="font-display text-3xl mb-1" style={{ color: "var(--brand-lt)" }}>
                {stat.value}
              </div>
              <div className="text-white/50 text-xs label-tag">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
