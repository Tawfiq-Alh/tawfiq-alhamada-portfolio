import { useCountUp, useReveal } from "@/hooks/use-reveal";

const STATS = [
  { value: 97, suffix: "%", label: "Data Accuracy" },
  { value: 7, suffix: "+", label: "Featured Projects" },
];

function Stat({
  value,
  suffix,
  label,
  format,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  format?: (n: number) => string;
  start: boolean;
}) {
  const n = useCountUp(value, 1800, start);
  return (
    <div className="border-l border-border pl-5 sm:pl-6">
      <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">
        {format ? format(n) : Math.round(n)}
        <span className="text-foreground/70">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.25);

  return (
    <section className="relative border-t border-border/60 py-20 sm:py-24">
      <div className="grid-motif pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">04 — Impact in numbers</p>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-5">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} suffix={s.suffix} start={shown} />
          ))}
          <div className="border-l border-border pl-5 sm:pl-6">
            <p className="font-display text-4xl font-semibold sm:text-5xl">
              6h <span className="text-primary">→</span> 30m
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Reporting Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
