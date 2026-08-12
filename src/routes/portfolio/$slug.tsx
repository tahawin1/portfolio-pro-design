import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { BRAND, PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.name} — Projet ${loaderData.category} | ${BRAND.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.text },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.text },
        { property: "og:image", content: loaderData.cover },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length] ?? project;

  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Retour au portfolio
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">{project.category}</span>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.highlights.map((h) => (
            <span key={h} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {h}
            </span>
          ))}
        </div>

        <img
          src={project.cover}
          alt={`Projet ${project.name}`}
          className="surface-card mt-10 w-full rounded-lg object-cover"
          loading="eager"
        />

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.gallery.map((g) => (
            <img
              key={g}
              src={g}
              alt={`${project.name} — réalisation`}
              loading="lazy"
              className="surface-card aspect-square rounded-md object-cover transition-transform hover:-translate-y-1"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="surface-card overflow-hidden rounded-xl">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-10">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Un projet <span className="text-gradient-ember">similaire</span> en tête ?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Décrivez votre besoin, je reviens vers vous avec une proposition claire.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/contact"
                  className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: next.slug }}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Projet suivant : {next.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
