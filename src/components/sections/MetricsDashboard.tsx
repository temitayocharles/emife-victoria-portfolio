import { metrics } from "@/lib/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function MetricsDashboard() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Metrics"
          title="Built around outcomes, not vanity activity."
          description="The portfolio experience highlights the kind of measurable brand and campaign work clients expect: clarity, consistency, engagement, and reporting."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-3xl border border-cream/10 bg-charcoal p-6 shadow-glow">
              <p className="text-4xl font-semibold text-gold">{metric.value}</p>
              <h3 className="mt-4 text-lg font-semibold text-cream">{metric.label}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/55">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
