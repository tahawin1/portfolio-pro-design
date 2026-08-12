import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => {
    const title = `Contact — Demander un devis | ${BRAND.name}`;
    const description = `Contactez ${BRAND.owner} pour votre projet d'identité visuelle, de print ou de site web à ${BRAND.city}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ContactPage,
});

const PROJECT_TYPES = ["Identité visuelle", "Site web", "Print & packaging", "Autre"];

function ContactPage() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Bonjour, je m'appelle ${name || "—"}.`,
      `Type de projet : ${projectType}`,
      message ? `Message : ${message}` : "",
      contactInfo ? `Pour me recontacter : ${contactInfo}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${text}`, "_blank", "noreferrer");
  };

  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Parlons de <span className="text-gradient-ember">votre projet</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Décrivez votre besoin en quelques lignes, je reviens vers vous avec une proposition
            claire et un délai précis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={`tel:${BRAND.phoneDesign.replace(/\s/g, "")}`}
              className="surface-card flex items-center gap-4 rounded-lg px-5 py-4 transition-colors hover:bg-secondary"
            >
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Infographiste</p>
                <p className="font-semibold">{BRAND.phoneDesign}</p>
              </div>
            </a>
            <a
              href={`tel:${BRAND.phoneDev.replace(/\s/g, "")}`}
              className="surface-card flex items-center gap-4 rounded-lg px-5 py-4 transition-colors hover:bg-secondary"
            >
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Développeur</p>
                <p className="font-semibold">{BRAND.phoneDev}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient flex items-center gap-4 rounded-lg px-5 py-4 shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              <div>
                <p className="text-xs opacity-90">Réponse rapide</p>
                <p className="font-semibold">Écrire sur WhatsApp</p>
              </div>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="surface-card flex items-center gap-4 rounded-lg px-5 py-4 transition-colors hover:bg-secondary"
            >
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-semibold">{BRAND.email}</p>
              </div>
            </a>
            <div className="surface-card flex items-center gap-4 rounded-lg px-5 py-4">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Zone d'intervention</p>
                <p className="font-semibold">
                  {BRAND.city}, {BRAND.country} — et à distance à l'international
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="surface-card space-y-5 rounded-xl p-6 md:p-8">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="contactInfo">Téléphone ou email</Label>
              <Input
                id="contactInfo"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="Comment vous recontacter"
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="projectType">Type de projet</Label>
              <select
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="message">Votre projet en quelques mots</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Décrivez votre besoin, vos délais, votre budget approximatif..."
                className="mt-2 min-h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-gradient flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Envoyer via WhatsApp
            </button>
            <p className="text-center text-xs text-muted-foreground">
              En cliquant, WhatsApp s'ouvre avec votre message pré-rempli — vous gardez le contrôle
              avant l'envoi.
            </p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
