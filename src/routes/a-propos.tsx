import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { BRAND, PROJECTS, STATS, VALUES } from "@/lib/site-data";

const TITLE = `À propos — ${BRAND.owner} | ${BRAND.name}`;
const DESCRIPTION =
  "Infographiste devenu aussi développeur, Mohamed Nassik accompagne les marques marocaines depuis 10 ans, de l'identité visuelle au site web.";
const PORTRAIT_IMAGE = "https://hdesign.ma/style/images/art/Identit%C3%A9-de-Marque.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    title: "Les débuts en design",
    text: "Premiers pas dans le graphisme et le print, au contact direct des imprimeurs et des petites marques marocaines.",
  },
  {
    title: "Spécialisation identité de marque",
    text: "Montée en compétence sur des projets d'identité visuelle complets, du logo à la charte graphique.",
  },
  {
    title: "Élargissement au web",
    text: "Ajout du développement web aux compétences, pour accompagner les marques jusqu'à la mise en ligne.",
  },
  {
    title: "Aujourd'hui",
    text: "Un accompagnement de bout en bout — identité, print et web — pour des dizaines de marques marocaines.",
  },
];

const skills = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "Figma",
  "HTML / CSS",
  "React",
  "WordPress",
  "SEO on-page",
];

function AboutPage() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              À propos
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              {BRAND.owner}, <span className="text-gradient-ember">designer & développeur</span>
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Depuis 10 ans à {BRAND.city}, j'aide des marques marocaines à construire une image
              cohérente : de la création d'un logo à la mise en ligne d'un site web, en passant par
              tous les supports imprimés qui font le quotidien d'une entreprise.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Après plusieurs années comme graphiste, j'ai ajouté le développement web à mes
              compétences pour pouvoir accompagner mes clients jusqu'au bout — sans avoir à
              coordonner plusieurs prestataires qui ne se parlent pas entre eux.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Discutons de votre projet
              </Link>
              <Link
                to="/portfolio"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Voir le portfolio
              </Link>
            </div>
          </div>
          <img
            src={PORTRAIT_IMAGE}
            alt={`Studio ${BRAND.name} à ${BRAND.city}`}
            className="surface-card w-full rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-14 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-3xl font-bold text-gradient-ember">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Le parcours</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((step, i) => (
            <div key={step.title} className="surface-card rounded-lg p-6">
              <span className="font-display text-3xl font-extrabold text-gradient-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values + skills */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ce qui guide mon travail</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div key={v.title}>
                  <h3 className="font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Outils & compétences</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="surface-card rounded-full px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent work teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Quelques réalisations</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="surface-card group overflow-hidden rounded-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={p.cover}
                alt={p.name}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="p-4 text-sm font-semibold">{p.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
