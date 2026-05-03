import { services } from "@/lib/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Services"
          title="Practical marketing support for brands that need structure."
          description="Each service is designed to turn broad brand goals into clear, executable workstreams."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 transition hover:border-gold/40">
              <h3 className="text-2xl font-semibold text-cream">{service.title}</h3>
              <p className="mt-4 leading-7 text-cream/65">{service.description}</p>
              <ul className="mt-6 grid gap-3 text-sm text-cream/70">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
