import { Reveal, SectionHeading } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    no: "01",
    title: "Data Analysis & Cleaning",
    desc: "Transform raw, messy, or inconsistent datasets into structured, reliable, analysis-ready data.",
    points: [
      "Data cleaning",
      "Missing-value handling",
      "Duplicate detection",
      "Data validation",
      "Data quality checks",
      "Exploratory analysis",
    ],
  },
  {
    no: "02",
    title: "Power BI Dashboard Development",
    desc: "Interactive business dashboards that turn complex datasets into understandable visual insight.",
    points: [
      "KPI dashboards",
      "Executive dashboards",
      "Business intelligence",
      "DAX",
      "Data modeling",
      "Interactive reporting",
    ],
  },
  {
    no: "03",
    title: "Excel Reporting & Automation",
    desc: "Advanced Excel reporting systems that cut repetitive manual work and improve reporting efficiency.",
    points: [
      "Pivot Tables",
      "Advanced formulas",
      "Automated reports",
      "Interactive dashboards",
      "Data consolidation",
    ],
  },
  {
    no: "04",
    title: "KPI Design & Reporting",
    desc: "Define KPIs that actually mean something, then build the reporting system that tracks performance against them.",
    points: ["KPI frameworks", "Performance tracking", "Reporting cadence", "Executive summaries"],
  },
  {
    no: "05",
    title: "Software Development",
    desc: "Modern applications and digital systems, built with clean architecture and maintainable code.",
    points: ["Flutter", "Dart", "Laravel", "REST APIs", "Firebase"],
  },
  {
    no: "06",
    title: "AI Automation",
    desc: "Identify repetitive workflows and use AI to automate research, reporting, data processing, and business tasks — practical business automation, not AI engineering.",
    points: ["Workflow mapping", "Automated research", "Report generation", "Data processing"],
  },
  {
    no: "07",
    title: "AI Consulting",
    desc: "Find practical opportunities where AI solves a real business problem.",
    points: ["Problem", "AI Opportunity", "Solution", "Workflow", "Impact"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 — Services"
          title="What I can build for you"
          intro="Engagements scoped around a measurable outcome — cleaner data, faster reporting, sharper decisions."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 60}>
              <article className="group relative h-full bg-background p-7 transition-colors duration-500 hover:bg-surface sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-primary">
                    SERVICE {s.no}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="size-1 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          <div className="hidden bg-background xl:block" />
          <div className="hidden bg-background md:block xl:hidden" />
        </div>
      </div>
    </section>
  );
}
