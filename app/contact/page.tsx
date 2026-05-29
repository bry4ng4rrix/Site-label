import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Démarrez votre projet avec Label Technology",
  description:
    "Contactez Label Technology pour démarrer votre projet. Développement web, call center, marketing digital, ERP. Réponse sous 72h. Antananarivo, Madagascar.",
};

export default function ContactPage() {
  return (
    <main>

      <section className="min-h-screen px-6 pt-28 pb-16" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="label-tag mb-4" style={{ color: "var(--brand)" }}>CONTACT</p>
              <h1 className="font-display text-5xl md:text-6xl mb-6 leading-tight" style={{ color: "var(--ink)" }}>
                Parlons de<br />votre projet.
              </h1>
              <p className="text-base font-light leading-relaxed mb-12" style={{ color: "var(--mid)" }}>
                Décrivez-nous votre besoin. Un expert vous répond sous 72h avec
                une proposition concrète — pas un formulaire générique.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>Adresse</p>
                    <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
                      Akany Riandrano, Manajak Ilafy<br />
                      Antananarivo Avaradrano, Madagascar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>Téléphone</p>
                    <a href="tel:+261340503129" className="text-sm font-light hover:underline" style={{ color: "var(--brand)" }}>
                      +261 34 05 031 29
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">✉️</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>Email</p>
                    <a href="mailto:contact@labeltechnology.mg" className="text-sm font-light hover:underline" style={{ color: "var(--brand)" }}>
                      contact@labeltechnology.mg
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">🕐</span>
                  <div>
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--ink)" }}>Horaires</p>
                    <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
                      Lun–Ven : 08h00 – 18h00 (UTC+3)<br />
                      Call Center : 24h/24, 7j/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
