import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export default function MiniTestimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto">
        <p className="label-tag mb-10 text-center" style={{ color: "var(--brand)" }}>
          ILS NOUS FONT CONFIANCE
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Card
              key={i}
              className="border flex flex-col"
              style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "var(--white)" }}
            >
              <CardContent className="pt-7 pb-3 flex flex-col flex-1 gap-4">
                <span className="font-display text-4xl leading-none" style={{ color: "var(--brand)" }}>
                  &ldquo;
                </span>
                <p className="text-sm font-light leading-relaxed flex-1" style={{ color: "var(--ink)" }}>
                  {t.quote}
                </p>
              </CardContent>

              <CardFooter
                className="pt-4 border-t"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <div>
                  <p className="font-medium text-sm" style={{ color: "var(--ink)" }}>{t.author}</p>
                  <p className="text-xs font-light" style={{ color: "var(--mid)" }}>
                    {t.role} — {t.company}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
