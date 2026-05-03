import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioProjects } from "@/lib/portfolio-data";

export default function PortfolioCarousel() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Selected Work"
          title="Portfolio projects with strategy, story, and measurable intent."
          description="These project cards are written as polished placeholders and can be replaced with real campaign case studies when available."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="group rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 shadow-card transition hover:-translate-y-1 hover:border-gold/40">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{project.category}</p>
              <h3 className="mt-5 text-2xl font-semibold text-cream">{project.title}</h3>
              <p className="mt-4 leading-7 text-cream/65">{project.summary}</p>
              <div className="mt-6 rounded-2xl border border-cream/10 bg-ink/60 p-4">
                <p className="text-sm font-semibold text-cream">Impact</p>
                <p className="mt-2 text-sm leading-6 text-cream/60">{project.impact}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
