import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

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
                Décrivez-nous votre besoin. Un expert vous répond sous 24h avec
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
            <div className="p-8 rounded-sm border" style={{ backgroundColor: "var(--white)", borderColor: "rgba(0,0,0,0.08)" }}>
              <h2 className="font-display text-2xl mb-6" style={{ color: "var(--ink)" }}>Envoyer un message</h2>
              <form className="space-y-5" action="mailto:contact@labeltechnology.mg" method="post">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>PRÉNOM & NOM *</label>
                    <input required type="text" name="name" placeholder="Jean Dupont"
                      className="w-full px-4 py-3 text-sm border rounded-sm outline-none focus:border-brand transition-colors"
                      style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--ink)" }} />
                  </div>
                  <div>
                    <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>ENTREPRISE</label>
                    <input type="text" name="company" placeholder="Votre société"
                      className="w-full px-4 py-3 text-sm border rounded-sm outline-none focus:border-brand transition-colors"
                      style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--ink)" }} />
                  </div>
                </div>
                <div>
                  <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>EMAIL PROFESSIONNEL *</label>
                  <input required type="email" name="email" placeholder="jean@entreprise.com"
                    className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--ink)" }} />
                </div>
                <div>
                  <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>SERVICE CONCERNÉ</label>
                  <select name="service"
                    className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors bg-white"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--ink)" }}>
                    <option value="">Choisir un service...</option>
                    <option value="dev">Développement Web & Mobile</option>
                    <option value="callcenter">Call Center</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="digital">Digitalisation</option>
                    <option value="data">Traitement de données</option>
                    <option value="materiel">Matériel informatique</option>
                  </select>
                </div>
                <div>
                  <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>VOTRE MESSAGE *</label>
                  <textarea required name="message" rows={5} placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors resize-none"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--ink)" }} />
                </div>
                <button type="submit"
                  className="w-full py-3.5 font-medium text-sm rounded-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}>
                  Envoyer le message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
