"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  ChevronDown,
  Menu,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    key: "dev",
    href: "/services/dev",
    labelFr: "Développement",
    labelEn: "Development",
  },
  {
    key: "callcenter",
    href: "/services/callcenter",
    labelFr: "Call Center",
    labelEn: "Call Center",
    badge: "50P",
  },
  {
    key: "marketing",
    href: "/services/marketing",
    labelFr: "Marketing Digital",
    labelEn: "Digital Marketing",
  },
  {
    key: "digital",
    href: "/services/digital",
    labelFr: "Digitalisation",
    labelEn: "Digitalization",
  },
  {
    key: "data",
    href: "/services/data",
    labelFr: "Traitement de données",
    labelEn: "Data Processing",
  },
  {
    key: "materiel",
    href: "/services/materiel",
    labelFr: "Matériel IT",
    labelEn: "IT Equipment",
  },
];

export default function Navbar() {
  const [locale, setLocale] = useState<"fr" | "en">("fr");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = (fr: string, en: string) =>
    locale === "fr" ? fr : en;

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#0A0F1E]/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Label Technology"
            width={120}
            height={90}
            priority
            className="w-auto h-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
                    bg-transparent
                    text-white/70
                    hover:text-white
                    hover:bg-white/5
                    data-[state=open]:bg-white/5
                    data-[state=open]:text-white
                    rounded-xl
                    px-4
                  "
                >
                  SERVICES
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div
                    className="
                      w-[320px]
                      bg-[#0F172A]/95
                      backdrop-blur-xl
                      border border-white/10
                      rounded-2xl
                      p-3
                      shadow-2xl
                    "
                  >
                    <div className="space-y-1">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.key}
                          href={service.href}
                          className="
                            flex items-center justify-between
                            rounded-xl
                            px-4 py-3
                            text-sm
                            text-white/70
                            hover:text-white
                            hover:bg-white/5
                            transition-all
                          "
                        >
                          <span>
                            {t(
                              service.labelFr,
                              service.labelEn
                            )}
                          </span>

                          <div className="flex items-center gap-2">
                            {service.badge && (
                              <span
                                className="
                                  bg-amber-400
                                  text-black
                                  text-[10px]
                                  font-bold
                                  px-2 py-1
                                  rounded-full
                                "
                              >
                                {service.badge}
                              </span>
                            )}

                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Links */}
              {[
                {
                  href: "/projets",
                  fr: "PROJETS",
                  en: "PROJECTS",
                },
                {
                  href: "/a-propos",
                  fr: "À PROPOS",
                  en: "ABOUT",
                },
                {
                  href: "/blog",
                  fr: "BLOG",
                  en: "BLOG",
                },
              ].map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      px-4 py-2
                      rounded-xl
                      text-sm
                      text-white/70
                      hover:text-white
                      hover:bg-white/5
                      transition-all
                    "
                  >
                    {t(item.fr, item.en)}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Custom Language Switch */}
          <div
            className="
              flex items-center gap-3
              bg-white/5
              border border-white/10
              rounded-full
              px-3 py-2
              backdrop-blur-md
            "
          >
            <span
              className={`text-xs font-medium transition-colors ${
                locale === "fr"
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              FR
            </span>

            <Switch
              checked={locale === "en"}
              onCheckedChange={(checked) =>
                setLocale(checked ? "en" : "fr")
              }
              className="
                data-[state=checked]:bg-blue-500
                data-[state=unchecked]:bg-white/20
              "
            />

            <span
              className={`text-xs font-medium transition-colors ${
                locale === "en"
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              EN
            </span>
          </div>

          {/* CTA */}
          <Button
            asChild
            className="
              rounded-full
              px-6
              bg-white
              text-black
              hover:bg-white/90
              shadow-lg
            "
          >
            <Link href="/contact">
              {t(
                "DÉMARRER UN PROJET",
                "START A PROJECT"
              )}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                bg-[#0A0F1E]/95
                backdrop-blur-2xl
                border-white/10
                text-white
              "
            >
              <div className="mt-10 space-y-3">
                {/* Services */}
                <div className="space-y-1">
                  <div
                    className="
                      flex items-center gap-2
                      text-sm font-medium
                      text-white/60
                      mb-2
                    "
                  >
                    SERVICES
                    <ChevronDown className="w-4 h-4" />
                  </div>

                  {SERVICES.map((service) => (
                    <Link
                      key={service.key}
                      href={service.href}
                      className="
                        flex items-center justify-between
                        rounded-xl
                        px-4 py-3
                        hover:bg-white/5
                        text-white/80
                        transition-all
                      "
                    >
                      <span>
                        {t(
                          service.labelFr,
                          service.labelEn
                        )}
                      </span>

                      {service.badge && (
                        <span
                          className="
                            bg-amber-400
                            text-black
                            text-[10px]
                            font-bold
                            px-2 py-1
                            rounded-full
                          "
                        >
                          {service.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Links */}
                {[
                  {
                    href: "/projets",
                    fr: "Projets",
                    en: "Projects",
                  },
                  {
                    href: "/a-propos",
                    fr: "À propos",
                    en: "About",
                  },
                  {
                    href: "/blog",
                    fr: "Blog",
                    en: "Blog",
                  },
                  {
                    href: "/contact",
                    fr: "Contact",
                    en: "Contact",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      block
                      rounded-xl
                      px-4 py-3
                      hover:bg-white/5
                      text-white/80
                      transition-all
                    "
                  >
                    {t(item.fr, item.en)}
                  </Link>
                ))}

                {/* Mobile Switch */}
                <div
                  className="
                    flex items-center justify-between
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4 py-4
                    mt-6
                  "
                >
                  <span className="text-sm text-white/70">
                    Language
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="text-xs">FR</span>

                    <Switch
                      checked={locale === "en"}
                      onCheckedChange={(checked) =>
                        setLocale(
                          checked ? "en" : "fr"
                        )
                      }
                    />

                    <span className="text-xs">EN</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}