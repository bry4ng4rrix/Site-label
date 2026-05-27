"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3.5 font-medium text-sm rounded-sm transition-all hover:opacity-90 disabled:opacity-50"
      style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}>
      {pending ? "Envoi en cours..." : "Envoyer le message →"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(sendContact, initialState);

  if (state.status === "success") {
    return (
      <div className="p-8 rounded-sm border text-center"
        style={{ backgroundColor: "rgba(30,63,171,0.04)", borderColor: "var(--brand)" }}>
        <div className="text-4xl mb-4">✓</div>
        <h2 className="font-display text-2xl mb-3" style={{ color: "var(--ink)" }}>
          Message envoyé.
        </h2>
        <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-sm border" style={{ backgroundColor: "var(--white)", borderColor: "rgba(0,0,0,0.08)" }}>
      <h2 className="font-display text-2xl mb-6" style={{ color: "var(--ink)" }}>Envoyer un message</h2>

      {state.status === "error" && (
        <div className="mb-5 p-3 rounded-sm text-sm" style={{ backgroundColor: "rgba(255,77,109,0.08)", color: "#dc2626" }}>
          {state.message}
        </div>
      )}

      <form action={action} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>PRÉNOM & NOM *</label>
            <input required type="text" name="name" placeholder="Jean Dupont"
              className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors focus:border-[#1E3FAB]"
              style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--ink)" }} />
          </div>
          <div>
            <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>ENTREPRISE</label>
            <input type="text" name="company" placeholder="Votre société"
              className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors"
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
            <option value="Call Center">Call Center</option>
            <option value="Développement Web & Mobile">Développement Web & Mobile</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Digitalisation">Digitalisation & ERP</option>
            <option value="Traitement de données">Traitement de données</option>
            <option value="Matériel informatique">Matériel informatique</option>
          </select>
        </div>
        <div>
          <label className="label-tag text-[10px] block mb-2" style={{ color: "var(--mid)" }}>VOTRE MESSAGE *</label>
          <textarea required name="message" rows={5} placeholder="Décrivez votre projet ou votre besoin..."
            className="w-full px-4 py-3 text-sm border rounded-sm outline-none transition-colors resize-none"
            style={{ borderColor: "rgba(0,0,0,0.12)", color: "var(--ink)" }} />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
