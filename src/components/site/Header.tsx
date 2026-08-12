import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { BRAND, NAV_LINKS } from "@/lib/site-data";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          H<span className="text-gradient-ember">design</span>
        </Link>

        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-foreground ${active ? "font-semibold text-foreground" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${BRAND.phoneDev.replace(/\s/g, "")}`}
            className="btn-gradient rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            Discutons projet
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Ouvrir le menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.to}>
                  <Link
                    to={link.to}
                    className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <div className="mt-6 space-y-2 border-t border-border pt-6">
              <a
                href={`tel:${BRAND.phoneDesign.replace(/\s/g, "")}`}
                className="flex items-center gap-2 rounded-md border border-border px-3 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> {BRAND.phoneDesign}
              </a>
              <a
                href={`tel:${BRAND.phoneDev.replace(/\s/g, "")}`}
                className="flex items-center gap-2 rounded-md border border-border px-3 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> {BRAND.phoneDev}
              </a>
              <SheetClose asChild>
                <Link
                  to="/contact"
                  className="btn-gradient block rounded-full px-4 py-3 text-center text-sm font-semibold"
                >
                  Discutons projet
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden border-t border-border/70 bg-secondary/50 md:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-5 py-3 sm:justify-end sm:gap-4">
          <a
            href={`tel:${BRAND.phoneDesign.replace(/\s/g, "")}`}
            className="surface-card flex items-center gap-2 rounded-full px-4 py-2 text-base font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span>
              Infographiste <span className="font-extrabold">{BRAND.phoneDesign}</span>
            </span>
          </a>
          <a
            href={`tel:${BRAND.phoneDev.replace(/\s/g, "")}`}
            className="surface-card flex items-center gap-2 rounded-full px-4 py-2 text-base font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span>
              Développeur <span className="font-extrabold">{BRAND.phoneDev}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
