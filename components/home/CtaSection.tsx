"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Gradient orbs for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-32 w-80 h-80 rounded-full opacity-20 blur-3xl bg-white" />
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-coral" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="label-tag text-blue-100 mb-6">PRÊT À DÉMARRER ?</p>

        <h2
          className="font-display text-white mb-8"
          style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.1 }}
        >
          Votre projet mérite mieux<br />
          qu'une agence généraliste.
        </h2>

        <p className="text-blue-50 text-xl mb-8">
          Quittez la posture d'acheteur. Prenez la place de partenaire.
        </p>

        <p className="text-blue-100 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Décrivez-nous votre besoin. On vous répond sous 72h avec une
          proposition concrète — pas un formulaire de plus.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-lg text-sm transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
          >
            Parlons-en →
          </Link>
          <Link
            href="/services/callcenter"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10 hover:shadow-lg"
          >
            Voir l'offre Call Center
          </Link>
        </div>

        {/* Réassurance */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Réponse sous 72h garantie",
            "Devis gratuit et sans engagement",
            "Interlocuteur dédié dès le premier échange",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-blue-100 text-sm">
              <span className="text-white font-bold">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
