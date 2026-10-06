import { useState } from "react";
import { ChevronDown, ExternalLink, Github, Gitlab, Link2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

type RoleLink = {
  label: string;
  href: string;
  kind: "github" | "gitlab" | "external";
};

type RoleSection = {
  heading: string;
  points: string[];
};

type Role = {
  role: string;
  org: string;
  period: string;
  points: string[];
  intro?: string;
  sections?: RoleSection[];
  links?: RoleLink[];
};

const ROLES: Role[] = [
  {
    role: "MEAL Assistant and Data Analyst",
    org: "Mizan Organization for Research and Human Rights — Damascus, Syria",
    period: "Mar 2025 – Aug 2025",
    points: [
      "Performed data cleaning, validation, and quality assurance processes to ensure accuracy and consistency.",
      "Analyzed quantitative and qualitative datasets to identify trends and support program monitoring.",
      "Developed Excel and Power BI dashboards to track project performance indicators and operational metrics.",
      "Prepared analytical reports and summaries to support evidence-based decision-making.",
      "Supported monitoring, evaluation, and learning activities through data management and reporting processes.",
    ],
  },
  {
    role: "Data Analyst | CRM & Business Intelligence",
    org: "AFAQ Real Estate Investment Platform — Violet Organization – DIGIT Innovation Hub (UNDP Supported Initiative) | Damascus, Syria",
    period: "Apr 2025 – Jun 2025",
    points: [],
    intro:
      "As part of a cross-functional team at Violet Organization, I contributed to building AFAQ, a simulated real estate company designed from the ground up to demonstrate how technology and data can support real-world business operations.",
    sections: [
      {
        heading: "Project Overview",
        points: [
          "The project brought together a complete digital ecosystem including a corporate website, CRM system, data analytics dashboard, and a mobile application for sales representatives and brokers.",
        ],
      },
      {
        heading: "My Role",
        points: [
          "My role focused on transforming operational data into measurable business insights and decision-support tools.",
          "Built and structured a CRM database with 1,200+ records, simulating realistic customer and sales data.",
          "Designed 15+ business KPIs aligned with measurable commercial objectives.",
          "Analyzed conversion rates, Cost per Lead (CPL), and monthly revenue to evaluate business performance.",
          "Developed Power BI dashboards to monitor performance and provide management with actionable insights.",
          "Supported business decisions through data-driven analysis rather than assumptions.",
        ],
      },
      {
        heading: "Technology",
        points: [
          "Power BI · DAX · SQL · CRM · Data Analysis · KPI Design · Flutter · Laravel · Firebase",
        ],
      },
      {
        heading: "Outcome",
        points: [
          "The AFAQ project was recognized as one of the successful and distinguished projects, demonstrating how integrated software systems, CRM data, and business intelligence can work together to support better decision-making.",
        ],
      },
    ],
    links: [
      {
        label: "AFAQ — Project Overview",
        href: "https://lnkd.in/p/eMzb9VxH",
        kind: "external",
      },
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
    role: "Application Developer",
    org: "EASY Investment — Real Estate Investment Platform",
    period: "Jan 2025 – Sep 2025",
    points: [],
    intro:
      "EASY Investment is a trusted real estate investment platform that combines both economic and legal integration. It enables property owners and investors to participate easily, make secure decisions, and achieve sustainable income.",
    sections: [
      {
        heading: "Development Approach",
        points: [
          "Adopted the Waterfall Model methodology",
          "Client–Server Architecture",
        ],
      },
      {
        heading: "Tech Stack",
        points: [
          "FrontEnd: Flutter (Visual Studio / Android Studio)",
          "BackEnd: Laravel (PHPStorm)",
          "Database: MySQL (XAMPP Server)",
          "IDE Tools: IntelliJ, Android Studio",
        ],
      },
      {
        heading: "Key Outcomes",
        points: [
          "Built a platform with a clear Dashboard for both investors and legal advisors.",
          "Integrated expert team and platform manager functionalities for operational and legal support.",
        ],
      },
      {
        heading: "Skills Gained",
        points: [
          "Cross-platform mobile app development with Flutter",
          "Database management using MySQL",
          "API development and backend integration with Laravel",
          "Project lifecycle management using the Waterfall Model",
          "Collaboration within a multidisciplinary team",
          "Firebase services and authentication",
          "Responsive UI across device sizes",
        ],
      },
    ],
    links: [
      {
        label: "salvest-app",
        href: "https://github.com/Tawfiq-Alh/salvest-app",
        kind: "github",
      },
      {
        label: "real_estate_investment_lawyer_app",
        href: "https://github.com/Tawfiq-Alh/real_estate_investment_lawyer_app",
        kind: "github",
      },
    ],
  },
  {
    role: "Application Developer — Freelance",
    org: "Freelance · Damascus Governorate, Syria · Remote",
    period: "Mar 2023 – Aug 2023 · 6 mos",
    points: [],
    intro:
      "Developed a cross-platform mobile application to digitize daily operations at Violet Kindergarten, replacing manual attendance tracking and disconnected staff communication with a unified, real-time system.",
    sections: [
      {
        heading: "The Problem",
        points: [
          "The kindergarten relied on paper-based attendance logs and informal messaging between staff, leading to delayed parent updates, inconsistent activity records, and no centralized view of children's daily status.",
        ],
      },
      {
        heading: "The Solution",
        points: [
          "Built a full-featured Flutter mobile app integrated with a Laravel REST API backend, enabling staff to record attendance, log daily activities, and communicate in real time — accessible from any device, at any time.",
        ],
      },
      {
        heading: "Key Contributions",
        points: [
          "Designed and implemented 15+ intuitive UI screens covering attendance, activity logs, and staff messaging workflows.",
          "Integrated REST API endpoints to sync data between the mobile app and Laravel backend in real time.",
          "Implemented Cubit (BLoC) for predictable, testable state management across complex screens.",
          "Built and consumed Laravel backend services for authentication, attendance records, and activity data.",
          "Translated kindergarten staff requirements into data-driven features, reducing manual record-keeping time.",
          "Collaborated cross-functionally with backend developers and kindergarten staff to refine workflows based on real usage feedback.",
          "Delivered the project on schedule across a 6-month engagement.",
        ],
      },
      {
        heading: "Technologies & Skills",
        points: [
          "Flutter • Dart • Laravel • REST API • Cubit/BLoC State Management • Cross-functional Collaboration • Agile Delivery",
        ],
      },
    ],
    links: [
      {
        label: "Teacher_App",
        href: "https://gitlab.com/twfek.alhmada/teacher_app",
        kind: "gitlab",
      },
      {
        label: "Child Care Management",
        href: "https://gitlab.com/compiler4781817/child-care-management",
        kind: "gitlab",
      },
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

function LinkChip({ link }: { link: RoleLink }) {
  const Icon = link.kind === "github" ? Github : Gitlab;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/40 px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-foreground/85 transition-colors duration-300 hover:border-primary/60 hover:text-primary"
    >
      <Icon className="size-3.5" />
      {link.label}
      <ExternalLink className="size-3 text-muted-foreground" />
    </a>
  );
}

function RoleBody({ r }: { r: Role }) {
  return (
    <div className="overflow-hidden">
      <div className="space-y-5 pb-6">
        {r.intro ? (
          <p className="text-sm leading-relaxed text-foreground/85">{r.intro}</p>
        ) : null}

        {r.sections
          ? r.sections.map((s) => (
              <div key={s.heading}>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  {s.heading}
                </p>
                {s.points.length === 1 ? (
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {s.points[0]}
                  </p>
                ) : (
                  <ul className="mt-2 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          : null}

        {r.points.length > 0 ? (
          <ul className="space-y-2">
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
        ) : null}

        {r.links && r.links.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {r.links.map((l) => (
              <LinkChip key={l.href} link={l} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

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
                    <RoleBody r={r} />
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
