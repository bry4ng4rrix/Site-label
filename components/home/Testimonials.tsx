"use client";

import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "On cherchait un call center francophone fiable pour nos campagnes B2B en France. On a trouvé une équipe qui comprend nos prospects mieux que certains de nos propres commerciaux. Taux de prise de RDV en hausse de 40% dès le deuxième mois.",
    author: "François B.",
    role: "Directeur Commercial",
    company: "PME industrielle, Lyon",
    tag: "Call Center",
    color: "var(--gold)",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop&q=80",
  },
  {
    quote: "Livraison en 6 semaines, dans les délais et dans le budget. Le code est propre, la documentation complète. On a déjà démarré un deuxième projet — cette fois plus ambitieux.",
    author: "Hery R.",
    role: "Directeur Général",
    company: "Groupe éducatif, Antananarivo",
    tag: "Développement Web",
    color: "var(--brand)",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&q=80",
  },
  {
    quote: "80 000 documents numérisés en trois mois, zéro interruption de service. Chaque fichier est indexé, searchable, conforme RGPD. Label Technology a transformé une contrainte en vrai avantage opérationnel.",
    author: "Isabelle M.",
    role: "Directrice des Systèmes d'Information",
    company: "Institution publique, Madagascar",
    tag: "Traitement de données",
    color: "var(--brand-lt)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="label-tag mb-4 text-gray-600">TÉMOIGNAGES CLIENTS</p>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900" style={{ lineHeight: 1.05 }}>
            Des résultats,<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--brand), var(--brand-lt))" }}>
              pas des promesses.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all hover:-translate-y-2 flex flex-col bg-white"
            >
              <span
                className="label-tag text-[10px] mb-6 self-start px-3 py-1.5 rounded-md"
                style={{ backgroundColor: `color-mix(in srgb, ${t.color} 15%, transparent)`, color: t.color }}
              >
                {t.tag}
              </span>

              <div
                className="font-display text-4xl leading-none mb-6 opacity-30"
                style={{ color: t.color }}
              >
                "
              </div>

              <p className="text-base leading-relaxed mb-8 flex-1 text-gray-700">
                {t.quote}
              </p>

              <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.author}
                  width={44}
                  height={44}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="font-semibold text-sm text-gray-900 mb-1">
                    {t.author}
                  </div>
                  <div className="text-xs text-gray-600">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
