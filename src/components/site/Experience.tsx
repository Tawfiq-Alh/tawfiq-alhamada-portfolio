import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const ROLES = [
  {
    role: "MEAL Assistant / Data Analyst",
    org: "Mizan Organization for Research & Human Rights",
    period: "Mar 2025 – Aug 2025",
    points: [
      "Data collection, cleaning and validation across field programs",
      "KoBo Toolbox, Google Forms, Excel and Power BI reporting stack",
      "PDM, baseline and endline surveys",
      "97% data accuracy maintained",
      "Reporting time reduced from 6 hours to 30 minutes",
    ],
  },
  {
    role: "Data Coordinator & Systems Analyst",
    org: "DIGIT Innovation Hub — UNDP Syria Initiative",
    period: "Jan 2025 – Jun 2025",
    points: [
      "Designed the CRM database architecture",
      "Defined 15+ KPIs for business performance tracking",
      "Built the Power BI performance dashboard",
      "Conversion and revenue analysis",
      "Cross-functional collaboration with business and tech teams",
    ],
  },
  {
    role: "Data Management & Program Support Volunteer",
    org: "Violet Organization",
    period: "Jan 2026 – Present",
    points: [
      "Data collection and data entry for humanitarian programs",
      "Field support and community outreach",
      "Program support and documentation",
    ],
  },
  {
    role: "Flutter Application Developer",
    org: "Property Partnership Platform",
    period: "Jan 2025 – Sep 2025",
    points: [
      "Flutter with BLoC state management",
      "REST API and Laravel backend integration",
      "Firebase services and authentication",
      "Responsive UI across device sizes",
    ],
  },
  {
    role: "Flutter Application Developer — Freelance",
    org: "Violet Kindergarten",
    period: "Mar 2023 – Sep 2023",
    points: [
      "Kindergarten management application",
      "Attendance and activity tracking",
      "Staff–parent communication features",
      "Flutter, Laravel, REST APIs",
    ],
  },
  {
    role: "IT Support & Help Desk Intern",
    org: "Loan Guarantee Fund",
    period: "One-month internship",
    points: [
      "Technical support and troubleshooting",
      "Help desk operations",
      "Internal systems and IT infrastructure",
    ],
  },
];

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="06 — Experience"
          title="A career built across data and systems"
          intro="Humanitarian data, business intelligence, and product engineering — each role added a different half of the same picture."
        />

        <div className="mt-14 max-w-4xl">
          {ROLES.map((r, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={r.role + r.org} delay={i * 50}>
                <div className="relative border-l border-border pl-8 pb-4 sm:pl-10">
                  <span
                    className={cn(
                      "absolute -left-[5px] top-6 size-2.5 rounded-full border transition-colors duration-500",
                      isOpen
                        ? "border-primary bg-primary"
                        : "border-support bg-background",
                    )}
                  />
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                        {r.period}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold sm:text-xl">{r.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{r.org}</p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "mt-6 size-5 shrink-0 text-muted-foreground transition-transform duration-500",
                        isOpen && "rotate-180 text-primary",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2 pb-6">
                        {r.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
