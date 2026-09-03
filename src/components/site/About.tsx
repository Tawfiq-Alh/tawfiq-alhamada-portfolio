import { Database, Sparkles, BarChart3, Brush, Compass } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const PIPELINE = [
  { label: "Collect", icon: Database },
  { label: "Clean", icon: Brush },
  { label: "Analyze", icon: Sparkles },
  { label: "Visualize", icon: BarChart3 },
  { label: "Decide", icon: Compass },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="About Me"
          intro="I'm a Software Engineer and Data Analyst with experience across software development, data management, monitoring and evaluation, reporting, business intelligence, and systems analysis."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              My engineering background means I understand databases, applications, APIs, and the
              systems that produce data in the first place. My analytics work means I know how to
              turn what those systems generate into KPIs, dashboards, and reports that leadership
              actually uses.
            </p>
            <p>
              I work at the intersection of software engineering, business intelligence, and applied
              AI — bridging the gap between{" "}
              <span className="text-foreground">Raw Data → Analysis → Insights → Decisions</span>.
            </p>
            <blockquote className="panel rounded-xl border-l-2 border-l-primary p-6 text-lg leading-relaxed text-foreground">
              "I don't just analyze data — I understand the systems behind it and how to turn it
              into decisions."
            </blockquote>
          </Reveal>

          <Reveal delay={120} className="panel rounded-2xl p-6 sm:p-8">
            <p className="eyebrow">The workflow</p>
            <ul className="mt-6 space-y-4">
              {PIPELINE.map((step, i) => (
                <li key={step.label} className="group flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2/50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <step.icon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{step.label}</p>
                    <div className="mt-2 h-px w-full bg-border" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    0{i + 1}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
