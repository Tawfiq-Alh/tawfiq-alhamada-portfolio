import { useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import { PROJECTS, type Project } from "./projects-data";
import { Reveal, SectionHeading } from "./Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const STEPS = [
  { key: "challenge", label: "Challenge", hint: "What problem was being solved?" },
  { key: "approach", label: "Approach", hint: "How was the problem analyzed?" },
  { key: "technology", label: "Technology", hint: "What tools were used?" },
  { key: "solution", label: "Solution", hint: "What was built?" },
  { key: "impact", label: "Impact", hint: "What measurably improved?" },
] as const;

function CaseStudy({ project }: { project: Project }) {
  return (
    <DialogContent
      className="max-h-[90vh] max-w-4xl overflow-y-auto border-border bg-background p-0"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-56 w-full object-cover sm:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="eyebrow">{project.category}</p>
          <DialogTitle className="mt-3 font-display text-2xl font-semibold sm:text-4xl">
            {project.title}
          </DialogTitle>
        </div>
      </div>

      <div className="space-y-8 p-6 sm:p-8">
        <ol className="space-y-6">
          {STEPS.map((s, i) => (
            <li key={s.key} className="relative pl-10">
              <span className="absolute left-0 top-0 flex size-7 items-center justify-center rounded-full border border-primary/40 font-mono text-[11px] text-primary">
                {i + 1}
              </span>
              {i < STEPS.length - 1 && (
                <span className="absolute left-[13px] top-8 h-[calc(100%-0.5rem)] w-px bg-border" />
              )}
              <h3 className="text-base font-semibold">{s.label}</h3>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.hint}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.caseStudy[s.key]}
              </p>
            </li>
          ))}
        </ol>

        <div className="rule-line" />

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface-2/40 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-4" />
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </DialogContent>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="05 — Featured Projects"
          title="Work that changed a decision"
          intro="Each project is a case study: the problem, the analysis, the build, and the measurable result."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 90} className={i === 0 ? "lg:col-span-2" : ""}>
              <article
                onClick={() => setOpen(p)}
                className="panel group relative h-full cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 ${
                      i === 0 ? "h-64 sm:h-80" : "h-52"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-md border border-primary/40 bg-background/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-primary backdrop-blur">
                    {p.no}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="eyebrow">{p.category}</p>
                  <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  {p.flow && (
                    <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {p.flow.map((f, idx) => (
                        <span key={f} className="flex items-center gap-2">
                          <span className="rounded border border-border px-2 py-1">{f}</span>
                          {idx < p.flow!.length - 1 && <span className="text-primary">→</span>}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.impact.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-sm text-foreground/85">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                        {m}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/70 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      View Case Study
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    {p.links[0] && (
                      <a
                        href={p.links[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${p.title} on GitHub`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        {open && <CaseStudy project={open} />}
      </Dialog>
    </section>
  );
}
