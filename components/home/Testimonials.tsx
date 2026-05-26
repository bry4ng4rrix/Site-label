"use client";

const TESTIMONIALS = [
  {
    quote: "On cherchait un call center sérieux pour la France. On a trouvé une équipe qui parle mieux notre marché que certains de nos propres commerciaux.",
    author: "Directeur commercial",
    company: "PME industrielle",
    location: "Lyon, France",
    tag: "Call Center",
    color: "var(--gold)",
  },
  {
    quote: "Label Technology nous a livré notre application en 6 semaines, dans les délais et le budget. Le suivi post-livraison est exemplaire. On repart pour un deuxième projet.",
    author: "Directeur général",
    company: "Entreprise de services",
    location: "Antananarivo, Madagascar",
    tag: "Développement Web",
    color: "var(--brand)",
  },
  {
    quote: "La numérisation de nos archives s'est faite sans interruption de service. 80 000 documents traités en trois mois. Sérieux, discrets, et d'une précision remarquable.",
    author: "Directeur des systèmes d'information",
    company: "Institution publique",
    location: "Madagascar",
    tag: "Traitement de données",
    color: "var(--brand-lt)",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>TÉMOIGNAGES</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
            Ils nous font confiance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 flex flex-col"
              style={{ backgroundColor: "var(--white)" }}
            >
              {/* Tag */}
              <span
                className="label-tag text-[10px] mb-6 self-start px-2 py-1"
                style={{ backgroundColor: `color-mix(in srgb, ${t.color} 12%, transparent)`, color: t.color }}
              >
                {t.tag}
              </span>

              {/* Quote mark */}
              <div
                className="font-display text-5xl leading-none mb-4 opacity-20"
                style={{ color: t.color }}
              >
                "
              </div>

              {/* Quote */}
              <p
                className="text-base leading-relaxed font-light mb-8 flex-1"
                style={{ color: "var(--ink)" }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="border-t pt-5" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                <div
                  className="font-medium text-sm mb-0.5"
                  style={{ color: "var(--ink)" }}
                >
                  {t.author}
                </div>
                <div className="text-xs" style={{ color: "var(--mid)" }}>
                  {t.company} · {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
