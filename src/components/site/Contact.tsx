import { useState, type FormEvent } from "react";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

const CHANNELS = [
  { icon: Mail, label: "Email", value: "tq.alhamada@gmail.com", href: "mailto:tq.alhamada@gmail.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/tawfiq-alhamada",
    href: "https://www.linkedin.com/in/tawfiq-alhamada",
  },
  { icon: Github, label: "GitHub", value: "Tawfiq-Alh", href: "https://github.com/Tawfiq-Alh" },
  { icon: MessageCircle, label: "WhatsApp", value: "+963 995 004 688", href: "https://wa.me/963995004688" },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@tawfiq_alhamada",
    href: "https://instagram.com/tawfiq_alhamada",
  },
];

const SERVICES = [
  "Data Analysis & Cleaning",
  "Power BI Dashboard Development",
  "Excel Reporting & Automation",
  "KPI Design & Reporting",
  "Software Development",
  "AI Automation",
  "AI Consulting",
  "Something else",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: SERVICES[0], message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.service} — enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:tq.alhamada@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…", {
      description: "Your message is ready to send to Tawfiq.",
    });
  };

  const field =
    "w-full rounded-md border border-input bg-surface/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <section id="contact" className="relative border-t border-border/60 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="08 — Contact"
          title="Let's Turn Data Into Decisions"
          intro="Have a dataset, reporting challenge, business problem, or process that could be improved with technology, analytics, or AI? Let's talk."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form onSubmit={submit} className="panel space-y-5 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={`mt-3 ${field}`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className={`mt-3 ${field}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="eyebrow">
                  Project / Service
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={`mt-3 ${field}`}
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-background">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the data, the problem, and the decision it should support."
                  className={`mt-3 resize-none ${field}`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                Start a Conversation
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="panel group flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm text-foreground">{c.value}</span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
