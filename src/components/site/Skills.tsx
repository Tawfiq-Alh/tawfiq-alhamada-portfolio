import { useState } from "react";
import {
  BarChart3,
  BrainCircuit,
  Wrench,
  Code2,
  KanbanSquare,
  UserRoundCheck,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const GROUPS = [
  {
    key: "bi",
    title: "Data Analysis & Business Intelligence",
    icon: BarChart3,
    note: "Core discipline",
    items: [
      "Data Collection",
      "Data Cleaning",
      "Data Validation",
      "Data Quality Assurance",
      "KPI Design",
      "Dashboard Development",
      "Data Visualization",
      "Executive Reporting",
      "Trend Analysis",
      "Variance Analysis",
      "MEAL / M&E",
    ],
  },
  {
    key: "ai",
    title: "AI & Research",
    icon: BrainCircuit,
    note: "Applied, not hype",
    items: [
      "AI-assisted Research",
      "AI-assisted Data Analysis",
      "Prompt Engineering",
      "Information Validation",
      "Fact-Checking",
      "Source Evaluation",
      "AI-assisted Reporting",
      "Insight Generation",
      "Generative AI for Data Workflows",
    ],
  },
  {
    key: "tools",
    title: "Technical Tools",
    icon: Wrench,
    note: "Daily stack",
    items: [
      "Power BI",
      "DAX",
      "Advanced Excel",
      "SQL",
      "MySQL",
      "SQLite",
      "KoBo Toolbox",
      "Google Forms",
      "XLS Forms",
      "Python / Pandas",
    ],
  },
  {
    key: "swe",
    title: "Software Engineering",
    icon: Code2,
    note: "Systems behind the data",
    items: [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "Laravel",
      "REST APIs",
      "Firebase",
      "Clean Architecture",
      "MVVM",
      "Git",
      "GitHub",
      "GitLab",
    ],
  },
  {
    key: "pm",
    title: "Project Management",
    icon: KanbanSquare,
    note: "Delivery",
    items: ["Agile", "Scrum", "Jira", "ClickUp"],
  },
  {
    key: "soft",
    title: "Professional Strengths",
    icon: UserRoundCheck,
    note: "How I work",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Data Accuracy",
      "Team Collaboration",
      "Stakeholder Communication",
      "Ethical Data Handling",
      "Adaptability",
    ],
  },
];

export function Skills() {
  const [activeKey, setActiveKey] = useState<string>("bi");

  return (
    <section id="skills" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 — Expertise"
          title="A stack built for insight, not just output"
          intro="Six connected capability areas — from collecting raw field data to shipping the applications and dashboards that make it useful."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {GROUPS.map((g, i) => {
            const active = activeKey === g.key;
            return (
              <Reveal key={g.key} delay={i * 70}>
                <article
                  onMouseEnter={() => setActiveKey(g.key)}
                  onFocus={() => setActiveKey(g.key)}
                  tabIndex={0}
                  className={cn(
                    "panel group h-full rounded-2xl p-6 outline-none transition-all duration-500",
                    active
                      ? "-translate-y-1 border-primary/40"
                      : "hover:-translate-y-1 hover:border-primary/25",
                  )}
                  style={active ? { boxShadow: "var(--shadow-glow)" } : undefined}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-lg border border-border transition-colors duration-500",
                        active ? "bg-primary text-primary-foreground" : "text-primary",
                      )}
                    >
                      <g.icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {g.note}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-snug">{g.title}</h3>

                  <div
                    className="mt-3 h-px w-full origin-left transition-transform duration-500"
                    style={{
                      background: "var(--gradient-line)",
                      transform: active ? "scaleX(1)" : "scaleX(0.25)",
                    }}
                  />

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border/70 bg-surface-2/40 px-2.5 py-1 text-xs text-foreground/80 transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
