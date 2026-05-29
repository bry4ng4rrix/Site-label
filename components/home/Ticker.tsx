"use client";

const ITEMS = [
  "Développement Web & Mobile",
  "Call Center 50 postes FR/EN",
  "Marketing Digital & SEO",
  "Digitalisation & Logiciels",
  "Traitement de données",
  "Vente Matériel Informatique",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden py-4 border-y border-gray-200 bg-gray-50">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-6">
            <span className="font-display text-gray-700 text-sm font-semibold tracking-wide uppercase">
              {item}
            </span>
            <span className="text-gray-400 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
