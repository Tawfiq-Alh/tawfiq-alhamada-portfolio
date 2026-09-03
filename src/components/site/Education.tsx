import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="07 — Education" title="Academic foundation" />

        <Reveal className="mt-12 max-w-4xl">
          <div className="panel relative overflow-hidden rounded-2xl p-7 sm:p-10">
            <div className="grid-motif pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(60%_80%_at_90%_20%,black,transparent)]" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-primary/35 text-primary">
                <GraduationCap className="size-7" />
              </span>
              <div>
                <p className="eyebrow">2019 – 2025</p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Bachelor of Science — Software Engineering &amp; Information Systems
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  Specialization: Software Engineering
                </p>
                <p className="mt-1 text-base text-foreground/85">
                  Damascus University — Damascus, Syria
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Databases",
                    "Systems Analysis",
                    "Software Architecture",
                    "Information Systems",
                    "Algorithms",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
