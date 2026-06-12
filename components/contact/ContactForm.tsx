"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full"
      style={{ backgroundColor: "var(--brand)", color: "var(--white)" }}
    >
      {pending ? "Envoi en cours..." : "Envoyer le message →"}
    </Button>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(sendContact, initialState);

  if (state.status === "success") {
    return (
      <Card className="text-center border" style={{ borderColor: "var(--brand)" }}>
        <CardContent className="pt-8 pb-8">
          <div className="text-4xl mb-4">✓</div>
          <h2 className="font-display text-2xl mb-3" style={{ color: "var(--ink)" }}>
            Message envoyé.
          </h2>
          <p className="text-sm font-light" style={{ color: "var(--mid)" }}>
            {state.message}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <CardHeader>
        <CardTitle className="font-display text-2xl" style={{ color: "var(--ink)" }}>
          Envoyer un message
        </CardTitle>
      </CardHeader>
      <CardContent>
        {state.status === "error" && (
          <div
            className="mb-5 p-3 rounded-sm text-sm"
            style={{ backgroundColor: "rgba(255,77,109,0.08)", color: "#dc2626" }}
          >
            {state.message}
          </div>
        )}

        <form action={action} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" style={{ color: "var(--mid)" }}>
                PRÉNOM &amp; NOM *
              </Label>
              <Input
                required
                id="name"
                type="text"
                name="name"
                placeholder="Jean Dupont"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" style={{ color: "var(--mid)" }}>
                ENTREPRISE
              </Label>
              <Input
                id="company"
                type="text"
                name="company"
                placeholder="Votre société"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" style={{ color: "var(--mid)" }}>
              EMAIL PROFESSIONNEL *
            </Label>
            <Input
              required
              id="email"
              type="email"
              name="email"
              placeholder="jean@entreprise.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" style={{ color: "var(--mid)" }}>
              SERVICE CONCERNÉ
            </Label>
            <Select name="service">
              <SelectTrigger id="service">
                <SelectValue placeholder="Choisir un service..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Call Center">Call Center</SelectItem>
                <SelectItem value="Développement Web & Mobile">Développement Web &amp; Mobile</SelectItem>
                <SelectItem value="Marketing Digital">Marketing Digital</SelectItem>
                <SelectItem value="Digitalisation">Digitalisation &amp; ERP</SelectItem>
                <SelectItem value="Traitement de données">Traitement de données</SelectItem>
                <SelectItem value="Matériel informatique">Matériel informatique</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" style={{ color: "var(--mid)" }}>
              VOTRE MESSAGE *
            </Label>
            <Textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder="Décrivez votre projet ou votre besoin..."
              className="resize-none"
            />
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
