"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-3xl mx-auto">
        <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>FAQ</p>
        <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ color: "var(--ink)" }}>
          Questions fréquentes.
        </h2>
        <Accordion type="single" collapsible defaultValue="item-0">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <AccordionTrigger
                className="font-display text-lg py-5 hover:no-underline hover:opacity-80 text-left"
                style={{ color: "var(--ink)" }}
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent
                className="text-sm font-light leading-relaxed pb-6"
                style={{ color: "var(--mid)" }}
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
