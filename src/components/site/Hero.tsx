import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import portrait from "@/assets/tawfiq-portrait.jpg";

const NODES = [
  { x: 12, y: 22 },
  { x: 34, y: 12 },
  { x: 62, y: 26 },
  { x: 84, y: 15 },
  { x: 20, y: 58 },
  { x: 48, y: 46 },
  { x: 78, y: 60 },
  { x: 30, y: 84 },
  { x: 66, y: 88 },
  { x: 92, y: 44 },
];

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 5],
  [5, 2],
  [5, 6],
  [6, 9],
  [4, 7],
  [7, 8],
  [8, 6],
];

function DataMesh() {
  const ref = useRef<SVGSVGElement>(null);
  const [p, setP] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setP({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-auto absolute inset-0 size-full"
      aria-hidden="true"
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="currentColor"
          className="text-support/40"
          strokeWidth={0.15}
        />
      ))}
      {NODES.map((n, i) => {
        const d = Math.hypot(n.x - p.x, n.y - p.y);
        const pull = Math.max(0, 1 - d / 34);
        const cx = n.x + (p.x - n.x) * pull * 0.16;
        const cy = n.y + (p.y - n.y) * pull * 0.16;
        return (
          <g key={i}>
            {pull > 0.05 && (
              <line
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="currentColor"
                className="text-primary"
                strokeWidth={0.12}
                opacity={pull * 0.6}
              />
            )}
            <circle
              cx={cx}
              cy={cy}
              r={0.5 + pull * 0.8}
              className="text-primary"
              fill="currentColor"
              opacity={0.35 + pull * 0.55}
              style={{ transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)" }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 120 44" className="h-11 w-full" aria-hidden="true">
      <polyline
        points="0,36 16,30 32,33 48,20 64,24 80,12 96,15 120,4"
        fill="none"
        stroke="currentColor"
        className="text-primary"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeDasharray="200"
        style={{ animation: "dash-flow 6s linear infinite" }}
      />
      <polyline
        points="0,36 16,30 32,33 48,20 64,24 80,12 96,15 120,4"
        fill="none"
        stroke="currentColor"
        className="text-primary/25"
        strokeWidth={6}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="grid-motif pointer-events-none absolute inset-0 opacity-[0.28] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Data • Technology • AI
            </span>
          </div>

          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl xl:text-7xl">
            Software Engineer
            <span className="mx-2 text-primary">×</span>
            <br className="hidden sm:block" />
            Data Analyst
            <span className="mx-2 text-primary">×</span>
            AI Consultant
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            Turning data, technology, and AI into smarter decisions and scalable solutions.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I combine software engineering with data analytics to transform complex, messy data
            into actionable insights, dashboards, KPIs, and intelligent solutions — understanding
            both the systems that generate data and the decisions it should drive.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
            >
              Let's Work Together
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/tawfiq-alhamada", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Tawfiq-Alh", label: "GitHub" },
              { icon: Instagram, href: "https://instagram.com/tawfiq_alhamada", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
            <span className="rule-line hidden flex-1 sm:block" />
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 hidden lg:block">
            <DataMesh />
          </div>

          <div className="relative mx-auto max-w-md">
            <div className="panel relative overflow-hidden rounded-2xl">
              <img
                src={portrait}
                alt="Portrait of Tawfiq Al Hamada, Software Engineer and Data Analyst"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  Damascus, Syria — Available worldwide
                </p>
              </div>
            </div>

            <div className="float-soft panel absolute -left-6 top-10 w-40 rounded-xl p-4 sm:-left-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Data accuracy
              </p>
              <p className="mt-1 text-2xl font-semibold text-primary">97%</p>
              <MiniChart />
            </div>

            <div
              className="float-soft panel absolute -right-4 bottom-16 w-44 rounded-xl p-4 sm:-right-10"
              style={{ animationDelay: "1.4s" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Reporting time
              </p>
              <p className="mt-1 text-lg font-semibold">
                6h <span className="text-primary">→</span> 30m
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                <div className="h-full w-[14%] rounded-full bg-primary" />
              </div>
            </div>

            <div
              className="float-soft panel absolute -right-2 top-2 rounded-lg px-3 py-2 font-mono text-[10px] text-muted-foreground sm:-right-8"
              style={{ animationDelay: "0.7s" }}
            >
              SELECT insight FROM raw_data;
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl items-center gap-3 px-5 text-muted-foreground sm:px-8">
        <ArrowDown className="size-4 animate-bounce" />
        <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
          Raw data → Insight → Decision
        </span>
      </div>
    </section>
  );
}
