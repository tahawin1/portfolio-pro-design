import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";

import { BRAND, NAV_LINKS, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
            H<span className="text-gradient-ember">design</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {BRAND.owner}, {BRAND.tagline.toLowerCase()} à {BRAND.city}. Identité visuelle, print et
            sites web, un seul interlocuteur.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="transition-colors hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" /> {BRAND.phoneDesign}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" /> {BRAND.phoneDev}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0" />
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-foreground">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> {BRAND.city}, {BRAND.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name} — {BRAND.owner}, {BRAND.city}.
          </p>
          <p>Identité visuelle · Print · Web</p>
        </div>
      </div>
    </footer>
  );
}
