"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: "var(--coral)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="label-tag text-white/60 mb-6">PRÊT À DÉMARRER ?</p>

        <h2
          className="font-display text-white mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.0 }}
        >
          Votre projet mérite mieux
          qu'une agence généraliste.
        </h2>

        <p className="text-white/80 text-xl italic mb-8 font-display">
          Quittez la posture d'acheteur. Prenez la place de partenaire.
        </p>

        <p className="text-white/70 font-light text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Décrivez-nous votre besoin. On vous répond sous 24h avec une
          proposition concrète — pas un formulaire de plus.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white font-medium px-8 py-4 rounded-sm text-sm transition-all hover:bg-gray-50 active:scale-95"
            style={{ color: "var(--coral)" }}
          >
            Parlons-en →
          </Link>
          <Link
            href="/services/callcenter"
            className="inline-flex items-center gap-2 border border-white/40 text-white font-light px-8 py-4 rounded-sm text-sm transition-all hover:border-white hover:bg-white/10"
          >
            Voir l'offre Call Center
          </Link>
        </div>

        {/* Réassurance */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {[
            "Réponse sous 24h garantie",
            "Devis gratuit et sans engagement",
            "Interlocuteur dédié dès le premier échange",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/60 text-xs">
              <span className="text-white/40">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
