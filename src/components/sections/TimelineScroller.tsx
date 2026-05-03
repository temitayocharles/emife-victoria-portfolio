import SectionHeader from "@/components/ui/SectionHeader";
import { timeline } from "@/lib/portfolio-data";

export default function TimelineScroller() {
  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Timeline"
          title="A concise growth story."
          description="A clean career timeline gives visitors a fast understanding of Victoria's direction, capability, and current focus."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-cream/10 md:left-1/2" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <article key={item.year} className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>div]:col-start-2" : ""}`}>
                <span className="absolute left-[0.82rem] top-7 h-4 w-4 rounded-full border border-gold bg-ink md:left-[calc(50%-0.5rem)]" />
                <div className="ml-12 rounded-3xl border border-cream/10 bg-charcoal p-7 md:ml-0">
                  <p className="text-sm font-bold text-gold">{item.year}</p>
                  <h3 className="mt-3 text-xl font-semibold text-cream">{item.title}</h3>
                  <p className="mt-3 leading-7 text-cream/62">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
