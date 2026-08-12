import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const TITLE = "Infographiste & Développeur Freelance à Casablanca | HDesign";
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

const PHONE_DESIGN = "+212 675 33 73 18";
const PHONE_DEV = "+212 660 59 48 46";

const services = [
  {
    title: "Identité visuelle",
    image: "https://hdesign.ma/style/images/art/Identit%C3%A9-de-Marque.jpg",
    text: "Logo, charte graphique et image de marque stratégique, de la conception au suivi.",
  },
  {
    title: "Design web & développement",
    image: "https://hdesign.ma/style/images/art/Design%20Web.jpg",
    text: "Sites vitrines, e-commerce et applications sur mesure : rapides, responsives, référencés.",
  },
  {
    title: "Print & packaging",
    image: "https://hdesign.ma/style/images/art/Print%20Design.jpg",
    text: "Affiches, brochures, catalogues, étiquettes et packaging prêts pour l'impression.",
  },
];

const stats = [
  { value: "10", label: "ans d'expérience" },
  { value: "1", label: "interlocuteur unique" },
  { value: "100+", label: "projets livrés" },
  { value: "48h", label: "premiers visuels" },
];

type Project = {
  name: string;
  category: "Identité visuelle" | "Impression" | "Site web";
  text: string;
  cover: string;
  gallery: string[];
};

const projects: Project[] = [
  {
    name: "Amayya",
    category: "Impression",
    text: "Boulanger, pâtissier, chocolatier et glacier à Casablanca. Identité, packaging et campagnes print.",
    cover: "https://hdesign.ma/style/images/art/slider%20amaya.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/logo-amaya.jpg",
      "https://hdesign.ma/style/images/art/packaging-plateaux.jpg",
      "https://hdesign.ma/style/images/art/brochure-3-volets.jpg",
      "https://hdesign.ma/style/images/art/panneau-publicitaire-amayya.jpg",
    ],
  },
  {
    name: "Femme du Maroc",
    category: "Identité visuelle",
    text: "Magazine féminin et organisateur de l'événement Caftan : affiches, habillage et supports digitaux.",
    cover: "https://hdesign.ma/style/images/art/flyer--facebook.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/affiche-entierer-caftan-2013.jpg",
      "https://hdesign.ma/style/images/art/blog-caftan2016-791x960.jpg",
      "https://hdesign.ma/style/images/art/FDM.png",
      "https://hdesign.ma/style/images/art/panneau-publicitaire-kiosque.jpg",
    ],
  },
  {
    name: "Speak Up",
    category: "Impression",
    text: "Centre d'apprentissage de l'anglais : logo, affiches événementielles et panneaux publicitaires.",
    cover: "https://hdesign.ma/style/images/art/slider%20speak%20up.png",
    gallery: [
      "https://hdesign.ma/style/images/art/logo-speakup1.jpg",
      "https://hdesign.ma/style/images/art/affiche-A3-evenement.jpg",
      "https://hdesign.ma/style/images/art/affiche-speakup-anglais-for-kids.jpg",
      "https://hdesign.ma/style/images/art/panneau-publicitaire-anglais-kids.jpg",
    ],
  },
  {
    name: "Luno Business",
    category: "Identité visuelle",
    text: "Import-export de produits alimentaires à Casablanca : identité, carte de visite, catalogue et magazine.",
    cover: "https://hdesign.ma/style/images/art/page-couverteur.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/logo-luno%20(2).jpg",
      "https://hdesign.ma/style/images/art/carte-visite.jpg",
      "https://hdesign.ma/style/images/art/catalogue.jpg",
      "https://hdesign.ma/style/images/art/creation-magazine.jpg",
    ],
  },
  {
    name: "Art Glass",
    category: "Site web",
    text: "Fabricant de vitrages isolants à Casablanca depuis 2010 : site web et communication publicitaire.",
    cover: "https://hdesign.ma/style/images/art/pub-hdesign-art-glass.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/creation-site-web.jpg",
      "https://hdesign.ma/style/images/art/site-web-art.jpg",
    ],
  },
  {
    name: "Goldin",
    category: "Site web",
    text: "Premier portail de bijouterie, joaillerie et horlogerie au Maroc : plateforme desktop et mobile.",
    cover: "https://hdesign.ma/style/images/art/slider-hdesign.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/creation-site-web%20(2).jpg",
      "https://hdesign.ma/style/images/art/site-web-goldin.jpg",
      "https://hdesign.ma/style/images/art/site-web-portable-goldin.jpg",
    ],
  },
  {
    name: "Les Douceurs du Maroc",
    category: "Impression",
    text: "Produits du terroir marocain en ligne : étiquettes, affiches et déclinaisons packaging.",
    cover: "https://hdesign.ma/style/images/art/slider-les-etiquette-huile-miel.jpg",
    gallery: [
      "https://hdesign.ma/style/images/art/etiquette-amlou.jpg",
      "https://hdesign.ma/style/images/art/miel-caroubier.jpg",
      "https://hdesign.ma/style/images/art/etiquette-epices.jpg",
      "https://hdesign.ma/style/images/art/affiche-ftour.jpg",
    ],
  },
];

const references = [
  ["ahlan", "https://hdesign.ma/style/images/art/ahlan-card.jpg"],
  ["amayya", "https://hdesign.ma/style/images/art/amayya.jpg"],
  ["Femme du Maroc", "https://hdesign.ma/style/images/art/fdm.jpg"],
  ["Ghita Chraibi", "https://hdesign.ma/style/images/art/ghita-chraibi.jpg"],
  ["GPS Fan", "https://hdesign.ma/style/images/art/gps-fan.jpg"],
  ["Iklil", "https://hdesign.ma/style/images/art/iklil.jpg"],
  ["Les Douceurs du Maroc", "https://hdesign.ma/style/images/art/les-douceurs-du-maroc.jpg"],
  ["Les Jardins du Rif", "https://hdesign.ma/style/images/art/les-jardins-du-rif.jpg"],
  ["Luno Business", "https://hdesign.ma/style/images/art/luno-business.jpg"],
  ["Olivart Art Gallery", "https://hdesign.ma/style/images/art/olivart-art-gallery.jpg"],
  ["Opes Cosmetics", "https://hdesign.ma/style/images/art/opes-cosmetics.jpg"],
  ["SerTV", "https://hdesign.ma/style/images/art/sertv.jpg"],
];

const filters = ["Tout", "Identité visuelle", "Impression", "Site web"] as const;

function Index() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tout");
  const visible = filter === "Tout" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
            H<span className="text-gradient-ember">design</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#portfolio" className="transition-colors hover:text-foreground">
              Portfolio
            </a>
            <a href="#references" className="transition-colors hover:text-foreground">
              Références
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <a
            href={`tel:${PHONE_DEV.replace(/\s/g, "")}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Discutons projet
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Casablanca · Maroc · Freelance
              </p>
              <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
                Infographiste, webdesigner &{" "}
                <span className="text-gradient-ember">développeur freelance</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Mohamed Nassik, 10 ans au service des marques marocaines. Identité visuelle, print
                et sites web : un seul interlocuteur, de la conception à la mise en ligne.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href="#portfolio"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Voir le portfolio
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl font-bold text-accent">{s.value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-full opacity-30 blur-3xl"
                style={{ background: "var(--gradient-ember)" }}
              />
              <img
                src={HERO_IMAGE}
                alt="Print, gadgets et packaging réalisés par un infographiste freelance à Casablanca"
                className="surface-card w-full rounded-lg object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Ce que je réalise pour vous</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Je mets mes compétences au service de vos projets : de la stratégie de marque à la
            réalisation, puis au suivi.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
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
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      filter === f
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-14">
              {visible.map((p) => (
                <article key={p.name} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <img
                      src={p.cover}
                      alt={`Projet ${p.name}`}
                      loading="lazy"
                      className="surface-card w-full rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-accent">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {p.gallery.map((g) => (
                        <img
                          key={g}
                          src={g}
                          alt={`${p.name} — réalisation`}
                          loading="lazy"
                          className="surface-card aspect-square rounded-md object-cover transition-transform hover:-translate-y-1"
                        />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Références */}
        <section id="references" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Quelques références</h2>
          <p className="mt-3 text-muted-foreground">
            Des marques qui sont devenues des partenaires — grandes entreprises comme jeunes
            structures.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {references.map(([name, src]) => (
              <div
                key={name}
                className="surface-card flex aspect-square items-center justify-center overflow-hidden rounded-md p-3"
              >
                <img
                  src={src}
                  alt={`Logo ${name}`}
                  loading="lazy"
                  className="max-h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="surface-card overflow-hidden rounded-xl">
              <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
                <div>
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Parlons de <span className="text-gradient-ember">votre projet</span>
                  </h2>
                  <p className="mt-4 max-w-md text-muted-foreground">
                    Un logo, une refonte, un site e-commerce ou une campagne print ? Décrivez votre
                    besoin, je reviens vers vous avec une proposition claire et un délai précis.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href={`tel:${PHONE_DESIGN.replace(/\s/g, "")}`}
                    className="flex items-center justify-between rounded-lg border border-border px-5 py-4 transition-colors hover:bg-secondary"
                  >
                    <span className="text-sm text-muted-foreground">Infographiste</span>
                    <span className="font-semibold">{PHONE_DESIGN}</span>
                  </a>
                  <a
                    href={`tel:${PHONE_DEV.replace(/\s/g, "")}`}
                    className="flex items-center justify-between rounded-lg border border-border px-5 py-4 transition-colors hover:bg-secondary"
                  >
                    <span className="text-sm text-muted-foreground">Développeur</span>
                    <span className="font-semibold">{PHONE_DEV}</span>
                  </a>
                  <a
                    href={`https://wa.me/212660594846`}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg bg-primary px-5 py-4 text-center font-semibold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
                  >
                    Écrire sur WhatsApp
                  </a>
                  <p className="text-center text-xs text-muted-foreground">
                    Basé à Casablanca — disponible partout au Maroc et à l'international.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Hdesign — Mohamed Nassik, Casablanca.</p>
          <p>Identité visuelle · Print · Web</p>
        </div>
      </footer>
    </div>
  );
}
