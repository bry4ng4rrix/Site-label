"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  { key: "dev",        href: "/services/dev",        labelFr: "Développement",         labelEn: "Development" },
  { key: "callcenter", href: "/services/callcenter",  labelFr: "Call Center",           labelEn: "Call Center", badge: "50P" },
  { key: "marketing",  href: "/services/marketing",   labelFr: "Marketing Digital",     labelEn: "Digital Marketing" },
  { key: "digital",    href: "/services/digital",     labelFr: "Digitalisation",        labelEn: "Digitalization" },
  { key: "data",       href: "/services/data",        labelFr: "Traitement de données", labelEn: "Data Processing" },
  { key: "materiel",   href: "/services/materiel",    labelFr: "Matériel IT",           labelEn: "IT Equipment" },
];

export default function Navbar() {
  const [locale, setLocale]       = useState<"fr" | "en">("fr");
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = (fr: string, en: string) => (locale === "fr" ? fr : en);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200" 
          : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 shrink-0">
          <Image
            src="/logo-navbar-white.svg"
            alt="Label Technology"
            width={200}
            height={38}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-gray-700 hover:text-gray-900 label-tag text-xs transition-colors flex items-center gap-1">
              {t("SERVICES", "SERVICES")}
              <span className="text-[10px]">▾</span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.key}
                    href={s.href}
                    className="flex items-center justify-between px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors text-sm"
                  >
                    <span>{t(s.labelFr, s.labelEn)}</span>
                    {s.badge && (
                      <span className="bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                        {s.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { href: "/projets",  fr: "PROJETS",  en: "PROJECTS" },
            { href: "/a-propos", fr: "À PROPOS",  en: "ABOUT" },
            { href: "/blog",     fr: "BLOG",      en: "BLOG" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 label-tag text-xs transition-colors"
            >
              {t(item.fr, item.en)}
            </Link>
          ))}
        </div>

        {/* Right side: lang switcher + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language switcher */}
          <button
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1.5 text-xs text-gray-700 hover:text-gray-900 hover:border-gray-400 transition-colors label-tag"
          >
            <span className={locale === "fr" ? "text-gray-900 font-semibold" : "text-gray-500"}>FR</span>
            <span className="text-gray-300">/</span>
            <span className={locale === "en" ? "text-gray-900 font-semibold" : "text-gray-500"}>EN</span>
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-[var(--brand)] hover:bg-[var(--brand-lt)] text-white text-xs font-semibold px-4 py-2 rounded-md transition-all hover:shadow-lg label-tag"
          >
            {t("DÉMARRER UN PROJET →", "START A PROJECT →")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-800 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-5 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-gray-800 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 pb-6 animate-fadeup">
          <div className="pt-4 space-y-1">
            {SERVICES.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                className="flex items-center justify-between py-2.5 text-gray-700 hover:text-gray-900 text-sm border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                <span>{t(s.labelFr, s.labelEn)}</span>
                {s.badge && (
                  <span className="bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {s.badge}
                  </span>
                )}
              </Link>
            ))}
            {[
              { href: "/projets",  fr: "Projets",  en: "Projects" },
              { href: "/a-propos", fr: "À propos",  en: "About" },
              { href: "/blog",     fr: "Blog",      en: "Blog" },
              { href: "/contact",  fr: "Contact",   en: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 text-gray-700 hover:text-gray-900 text-sm border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {t(item.fr, item.en)}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-xs text-gray-700 label-tag"
            >
              {locale === "fr" ? "FR / EN" : "EN / FR"}
            </button>
            <Link
              href="/contact"
              className="flex-1 text-center bg-[var(--brand)] text-white text-xs font-semibold px-4 py-2 rounded-md label-tag"
              onClick={() => setMenuOpen(false)}
            >
              {t("DÉMARRER UN PROJET →", "START A PROJECT →")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
