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
      className="w-full py-3.5 font-semibold text-sm rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50"
      style={{ backgroundColor: "var(--brand)", color: "white" }}>
      {pending ? "Envoi en cours..." : "Envoyer le message →"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(sendContact, initialState);

  if (state.status === "success") {
    return (
      <div className="p-8 rounded-lg border-2 text-center bg-green-50 border-green-300">
        <div className="text-5xl mb-4">✓</div>
        <h2 className="font-display text-2xl mb-3 text-gray-900">
          Message envoyé.
        </h2>
        <p className="text-sm text-gray-700">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-lg border border-gray-200 bg-white">
      <h2 className="font-display text-2xl mb-6 text-gray-900">Envoyer un message</h2>

      {state.status === "error" && (
        <div className="mb-5 p-4 rounded-lg text-sm bg-red-50 text-red-700 border border-red-200">
          {state.message}
        </div>
      )}

      <form action={action} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="label-tag text-[10px] block mb-2 text-gray-700">PRÉNOM & NOM *</label>
            <input required type="text" name="name" placeholder="Jean Dupont"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-gray-900" />
          </div>
          <div>
            <label className="label-tag text-[10px] block mb-2 text-gray-700">ENTREPRISE</label>
            <input type="text" name="company" placeholder="Votre société"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-gray-900" />
          </div>
        </div>
        <div>
          <label className="label-tag text-[10px] block mb-2 text-gray-700">EMAIL PROFESSIONNEL *</label>
          <input required type="email" name="email" placeholder="jean@entreprise.com"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-gray-900" />
        </div>
        <div>
          <label className="label-tag text-[10px] block mb-2 text-gray-700">SERVICE CONCERNÉ</label>
          <select name="service"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-gray-900">
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
          <label className="label-tag text-[10px] block mb-2 text-gray-700">VOTRE MESSAGE *</label>
          <textarea required name="message" rows={5} placeholder="Décrivez votre projet ou votre besoin..."
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none bg-white text-gray-900" />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
