import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => go("home")} className="group flex items-center gap-3 text-left">
          <span className="flex size-9 items-center justify-center rounded-md border border-primary/40 font-mono text-xs text-primary transition-colors group-hover:bg-primary/10">
            TA
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">Tawfiq Al Hamada</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Data · Tech · AI
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300",
                    active === l.id && "scale-x-100",
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go("contact")}
            className="hidden rounded-md border border-primary/50 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Let's Work Together
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="w-full border-b border-border/50 py-3 text-left text-base text-foreground/90"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go("contact")}
              className="mt-4 w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Let's Work Together
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
