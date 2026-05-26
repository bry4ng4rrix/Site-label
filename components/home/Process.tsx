"use client";

const STEPS = [
  {
    num: "01",
    title: "On écoute d'abord.",
    desc: "Cadrage précis de vos enjeux avant toute proposition. Pas de solution standard avant d'avoir compris votre réalité.",
    color: "var(--brand)",
  },
  {
    num: "02",
    title: "On conçoit ensemble.",
    desc: "Pas de boîte noire. Chaque étape est validée avec vous. La solution vous appartient avant même d'être développée.",
    color: "var(--gold)",
  },
  {
    num: "03",
    title: "On exécute. Vraiment.",
    desc: "Délais tenus. Budget respecté. Livrables concrets et mesurables. Notre réputation se construit livraison après livraison.",
    color: "var(--coral)",
  },
  {
    num: "04",
    title: "On reste.",
    desc: "Support continu, suivi, itération. Le projet ne s'arrête pas à la livraison. Nous restons votre partenaire dans la durée.",
    color: "var(--brand-lt)",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>NOTRE MÉTHODE</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
            Comment on travaille.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="relative p-8 group hover:bg-gray-50 transition-colors"
              style={{ backgroundColor: "var(--white)" }}
            >
              {/* Number */}
              <div
                className="font-display text-6xl font-extrabold mb-6 opacity-15 group-hover:opacity-25 transition-opacity"
                style={{ color: step.color, lineHeight: 1 }}
              >
                {step.num}
              </div>

              {/* Color bar */}
              <div
                className="w-8 h-0.5 mb-5"
                style={{ backgroundColor: step.color }}
              />

              {/* Title */}
              <h3
                className="font-display text-xl mb-4"
                style={{ color: "var(--ink)" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed font-light"
                style={{ color: "var(--mid)" }}
              >
                {step.desc}
              </p>

              {/* Connector arrow (desktop only) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 z-10 text-lg -translate-y-1/2"
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
