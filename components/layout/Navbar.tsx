"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
const Navbard = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = mounted ? resolvedTheme ?? theme : "light";

  useEffect(() => setMounted(true), []);

const links = [
  { name: "Projets", href: "/" },
  { name: "A propos", href: "/about" },
  { name: "Blog", href: "/contact" },
];

const services = [
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


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/50 text-white backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={
                  activeTheme === "dark"
                    ? "/images/logo_dark.png"
                    : "/images/logo_light.png"
                }
                alt="logo"
                width={200}
                height={60}
                className="h-10 w-auto"
                loading="eager"
              />
            </Link>
          </div>




          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem
                  key={service.key}
                  title={service.labelFr}
                  href={service.href}
                >
                  {service.labelEn}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-md font-medium text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
           
            <Button className="bg-blue-500 text-white">
              Demarrer un projets
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
              {open ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-4 py-3 space-y-3">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
           
            <Button className="w-full bg-blue-500 text-white">Demarrer un projets</Button>
          </div>
        </div>
      )}
    </nav>
  );
};


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}


export default Navbard;
