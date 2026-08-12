import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageShell } from "@/components/site/PageShell";
import { BRAND, PROJECTS } from "@/lib/site-data";

const DESCRIPTION =
  "Découvrez les réalisations de Mohamed Nassik : identités visuelles, packagings, affiches et sites web pour des marques marocaines.";

export const Route = createFileRoute("/portfolio/")({
  head: () => {
    const title = `Portfolio — Identité, print & sites web | ${BRAND.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: title },
        { property: "og:description", content: DESCRIPTION },
      ],
    };
  },
  component: PortfolioPage,
});

const filters = ["Tout", "Identité visuelle", "Impression", "Site web"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tout");
  const visible = filter === "Tout" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Des marques marocaines, <span className="text-gradient-ember">des projets concrets</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Identité visuelle, print et sites web : chaque projet a sa propre histoire. En voici
            quelques-unes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? "border-transparent btn-gradient"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
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
                <h2 className="mt-2 text-lg font-bold">{p.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Votre projet pourrait être le prochain</h2>
          <Link
            to="/contact"
            className="btn-gradient mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
