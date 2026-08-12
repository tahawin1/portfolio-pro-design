import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BRAND, FAQ, PROJECTS, SERVICES } from "@/lib/site-data";

const TITLE = `Services — Identité visuelle, web & print | ${BRAND.name}`;
const DESCRIPTION =
  "Identité visuelle, design web & développement, print & packaging : les services de Mohamed Nassik, freelance à Casablanca.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Trois compétences, <span className="text-gradient-ember">un seul interlocuteur</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Identité de marque, web ou print : chaque projet est pensé sur mesure, du brief à la
            livraison des fichiers finaux.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        {SERVICES.map((service, i) => {
          const related = PROJECTS.filter((p) => p.category === service.category).slice(0, 2);
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="grid gap-10 border-b border-border py-16 md:py-20 lg:grid-cols-2 lg:items-start"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="surface-card w-full rounded-lg object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {service.category}
                </span>
                <h2 className="mt-2 text-3xl font-bold">{service.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {related.length > 0 && (
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Exemples de réalisations
                    </p>
                    <div className="mt-3 flex gap-3">
                      {related.map((p) => (
                        <Link
                          key={p.slug}
                          to="/portfolio/$slug"
                          params={{ slug: p.slug }}
                          className="surface-card group flex-1 overflow-hidden rounded-lg"
                        >
                          <img
                            src={p.cover}
                            alt={p.name}
                            loading="lazy"
                            className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <p className="p-3 text-xs font-semibold">{p.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  to="/contact"
                  className="btn-gradient mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
                >
                  Demander un devis
                </Link>
              </div>
            </section>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/60">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageShell>
  );
}
