import Link from "next/link";

const STATS = [
  { value: "50",    label: "postes Call Center" },
  { value: "7",     label: "domaines d'expertise" },
  { value: "FR/EN", label: "bilingue certifié" },
  { value: "72h",   label: "délai de réponse" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-20">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{ background: "var(--brand)" }}
        />
        <div className="absolute top-10 right-20 w-[400px] h-[400px] rounded-full opacity-3 blur-3xl"
          style={{ background: "var(--coral)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="label-tag text-gray-600 mb-6 animate-fadeup">
          Antananarivo · Madagascar · International
        </div>

        <h1 className="font-display text-gray-900 mb-8 max-w-5xl animate-fadeup-d1"
          style={{ fontSize: "clamp(44px, 8vw, 96px)", lineHeight: 1.05 }}
        >
          La technologie au service{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand), var(--brand-lt))" }}>
            de votre croissance.
          </span>
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-6 animate-fadeup-d2" style={{ lineHeight: 1.8 }}>
          Développement web, Call Center 50 postes FR/EN, Marketing digital,
          Digitalisation, Traitement de données, Matériel IT & Comptabilité —
          une seule équipe, sept expertises, des résultats mesurables.
        </p>

        <p className="text-gray-500 text-base mb-12 max-w-2xl animate-fadeup-d2">
          <span className="italic">"Votre vision, notre expertise : l'alliance qui transforme le potentiel en performance."</span>
        </p>

        <div className="flex flex-wrap gap-4 mb-24 animate-fadeup-d3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95"
            style={{ backgroundColor: "var(--coral)" }}
          >
            Démarrer un projet →
          </Link>
          <Link
            href="/services/callcenter"
            className="inline-flex items-center gap-2 px-8 py-3 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Call Center 50 postes
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeup-d5">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="px-6 py-8 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all hover:-translate-y-1 bg-white/50 backdrop-blur"
            >
              <div className="font-display text-4xl mb-2 text-transparent bg-clip-text" 
                style={{ backgroundImage: "linear-gradient(135deg, var(--brand), var(--brand-lt))" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 text-xs label-tag">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
