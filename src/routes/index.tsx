import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { BRAND, PROCESS_STEPS, PROJECTS, REFERENCES, SERVICES, STATS, VALUES } from "@/lib/site-data";

const TITLE = "Infographiste & Développeur Freelance à Casablanca | Hdesign";
const DESCRIPTION =
  "Mohamed Nassik, infographiste, webdesigner et développeur freelance à Casablanca depuis 10 ans : identité visuelle, print, sites web sur mesure.";
const HERO_IMAGE = "https://hdesign.ma/style/images/art/freelance_maroc.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Index,
});

const featuredProjects = PROJECTS.slice(0, 3);

function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {BRAND.city} · {BRAND.country} · Freelance
            </p>
            <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
              Infographiste, webdesigner &{" "}
              <span className="text-gradient-ember">développeur freelance</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {BRAND.owner}, 10 ans au service des marques marocaines. Identité visuelle, print et
              sites web : un seul interlocuteur, de la conception à la mise en ligne.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Demander un devis gratuit
              </Link>
              <Link
                to="/portfolio"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Voir le portfolio
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-gradient-ember">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--gradient-ember)" }}
            />
            <img
              src={HERO_IMAGE}
              alt="Print, gadgets et packaging réalisés par un infographiste freelance à Casablanca"
              className="surface-card w-full rounded-lg object-cover"
              loading="eager"
            />
            <div className="surface-card absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-lg p-4 sm:block">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="h-4 w-4 text-primary" /> 10 ans d'expérience
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Au service des marques marocaines, de la conception au suivi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-secondary/40 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ils m'ont fait confiance
          </p>
          <div className="mt-6 grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-6">
            {REFERENCES.slice(0, 6).map(([name, src]) => (
              <div
                key={name}
                className="flex aspect-square items-center justify-center overflow-hidden rounded-md bg-background p-3"
              >
                <img src={src} alt={`Logo ${name}`} loading="lazy" className="max-h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Ce que je réalise pour vous</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Je mets mes compétences au service de vos projets : de la stratégie de marque à la
              réalisation, puis au suivi.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:opacity-80"
          >
            Tous les services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              className="surface-card group overflow-hidden rounded-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Hdesign */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Pourquoi travailler avec Hdesign</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Réalisations récentes</h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:opacity-80"
          >
            Voir tout le portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="surface-card group overflow-hidden rounded-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={p.cover}
                alt={`Projet ${p.name}`}
                loading="lazy"
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <span className="text-xs uppercase tracking-[0.2em] text-primary">{p.category}</span>
                <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Comment ça se passe</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="surface-card rounded-lg p-6">
                <span className="font-display text-3xl font-extrabold text-gradient-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="surface-card overflow-hidden rounded-xl">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Parlons de <span className="text-gradient-ember">votre projet</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Un logo, une refonte, un site e-commerce ou une campagne print ? Décrivez votre besoin,
                je reviens vers vous avec une proposition claire et un délai précis.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/contact"
                className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Demander un devis gratuit
              </Link>
              <Link
                to="/a-propos"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
