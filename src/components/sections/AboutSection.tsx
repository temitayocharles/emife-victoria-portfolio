import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          eyebrow="About"
          title="A clear strategy partner for modern brand growth."
          description="Victoria works at the intersection of brand messaging, campaign structure, and digital storytelling. The focus is simple: make the brand easier to understand, easier to trust, and easier to choose."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Audience-first thinking",
              text: "Every recommendation starts with the people the brand needs to reach and the decision they need to make."
            },
            {
              title: "Structured execution",
              text: "Ideas are translated into calendars, campaign phases, deliverables, owners, and performance checkpoints."
            },
            {
              title: "Measurable storytelling",
              text: "Content is planned with purpose, so brand communication supports awareness, engagement, and conversion."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 shadow-card">
              <h3 className="text-xl font-semibold text-cream">{item.title}</h3>
              <p className="mt-4 leading-7 text-cream/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
