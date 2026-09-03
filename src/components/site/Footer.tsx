import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { handleExternalClick } from "@/lib/open-external";

const SOCIALS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/tawfiq-alhamada/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Tawfiq-Alh", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/tawfiq_alhamada/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/963995004688", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">Tawfiq Al Hamada</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Software Engineer • Data Analyst • AI Consultant
            </p>
            <p className="mt-5 max-w-md text-sm text-foreground/80">
              Building smarter solutions with Data, Technology &amp; AI.
            </p>
          </div>
          <div className="flex items-center gap-5">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                onClick={handleExternalClick(href)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="rule-line mt-10" />
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tawfiq Al Hamada. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
