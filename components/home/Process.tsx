"use client";

const STEPS = [
  {
    num: "01",
    title: "Écoute",
    desc: "Cadrage précis de vos enjeux avant toute proposition. On comprend votre métier, vos contraintes et vos objectifs avant de suggérer quoi que ce soit.",
    color: "var(--brand)",
  },
  {
    num: "02",
    title: "Conception",
    desc: "Pas de boîte noire. Chaque étape est validée avec vous. La solution vous appartient avant même d'être développée — vous ne découvrez pas le résultat à la livraison.",
    color: "var(--gold)",
  },
  {
    num: "03",
    title: "Exécution",
    desc: "Délais tenus, budget respecté, livrables concrets et mesurables. Notre réputation se construit livraison après livraison — pas sur des promesses en avant-vente.",
    color: "var(--coral)",
  },
  {
    num: "04",
    title: "Suivi",
    desc: "La livraison n'est pas la fin de l'histoire — c'est le premier jour de votre accélération. Support continu, itérations, évolutions. Votre interlocuteur reste le même, votre ambition grandit.",
    color: "var(--brand-lt)",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="label-tag mb-4 text-gray-600">NOTRE MÉTHODE</p>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900" style={{ lineHeight: 1.05 }}>
            Comment on travaille.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="relative p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md hover:bg-white transition-all hover:-translate-y-1 bg-white"
            >
              {/* Number */}
              <div
                className="font-display text-7xl font-extrabold mb-6 opacity-10 group-hover:opacity-15 transition-opacity"
                style={{ color: step.color, lineHeight: 0.9 }}
              >
                {step.num}
              </div>

              {/* Color bar */}
              <div
                className="w-10 h-1 mb-6 rounded-full"
                style={{ backgroundColor: step.color }}
              />

              {/* Title */}
              <h3 className="font-display text-2xl mb-4 text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-gray-700" style={{ lineHeight: 1.7 }}>
                {step.desc}
              </p>

              {/* Connector arrow (desktop only) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 z-10 text-2xl font-bold -translate-y-1/2"
                  style={{ color: step.color }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
