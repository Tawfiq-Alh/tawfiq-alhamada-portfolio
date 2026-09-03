import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Tawfiq Al Hamada — Software Engineer, Data Analyst & AI Consultant";
const DESCRIPTION =
  "Portfolio of Tawfiq Al Hamada: turning data, technology, and AI into smarter decisions — Power BI dashboards, KPI design, data cleaning, and software engineering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tawfiq Al Hamada",
          jobTitle: "Software Engineer, Data Analyst & AI Consultant",
          email: "mailto:tq.alhamada@gmail.com",
          alumniOf: "Damascus University",
          address: { "@type": "PostalAddress", addressLocality: "Damascus", addressCountry: "SY" },
          sameAs: [
            "https://www.linkedin.com/in/tawfiq-alhamada",
            "https://github.com/Tawfiq-Alh",
            "https://instagram.com/tawfiq_alhamada",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Stats />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
