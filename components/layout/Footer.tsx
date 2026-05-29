import Image from "next/image";
import Link from "next/link";

const LINKS = {
  Services: [
    { label: "Développement Web & Mobile", href: "/services/dev" },
    { label: "Call Center 50 postes",       href: "/services/callcenter" },
    { label: "Marketing Digital",           href: "/services/marketing" },
    { label: "Digitalisation",             href: "/services/digital" },
    { label: "Traitement de données",       href: "/services/data" },
    { label: "Matériel informatique",       href: "/services/materiel" },
  ],
  Entreprise: [
    { label: "À propos",     href: "/a-propos" },
    { label: "Nos projets",  href: "/projets" },
    { label: "Blog",         href: "/blog" },
    { label: "Contact",      href: "/contact" },
    { label: "Mentions légales", href: "/mentions-legales" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/logo-navbar-white.svg"
              alt="Label Technology"
              width={180}
              height={34}
              className="mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              Votre partenaire technologique premium depuis Antananarivo, Madagascar.
              Développement, Call Center, Marketing, Data et Matériel IT.
            </p>
            <div className="space-y-3 text-sm text-gray-500">
              <p>Akany Riandrano, Manjaka Ilafy</p>
              <p>Antananarivo Avaradrano, Madagascar</p>
              <a
                href="tel:+261340503129"
                className="block hover:text-white transition-colors"
              >
                +261 34 05 031 29
              </a>
              <a
                href="mailto:contact@labeltechnology.mg"
                className="block hover:text-white transition-colors"
              >
                contact@labeltechnology.mg
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <p className="label-tag text-gray-500 text-[10px] mb-6">{section.toUpperCase()}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Label Technology · Consulting & Services · Antananarivo, Madagascar
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot inline-block" />
            <span className="text-gray-600 text-xs">labeltechnology.mg</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
