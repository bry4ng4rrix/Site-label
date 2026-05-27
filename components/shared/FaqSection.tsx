"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqSection({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-3xl mx-auto">
        <p className="label-tag mb-3" style={{ color: "var(--brand)" }}>FAQ</p>
        <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ color: "var(--ink)" }}>
          Questions fréquentes.
        </h2>
        <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-6 transition-colors hover:opacity-80"
              >
                <span className="font-display text-lg" style={{ color: "var(--ink)" }}>{item.q}</span>
                <span className="text-xl flex-shrink-0 transition-transform duration-300"
                  style={{ color: "var(--brand)", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="pb-6 text-sm font-light leading-relaxed" style={{ color: "var(--mid)" }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
