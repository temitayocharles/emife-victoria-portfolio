import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/portfolio-data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Reputation"
          title="Professional, clear, and easy to work with."
          description="Replace these placeholders with verified client testimonials when available."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-8">
              <blockquote className="text-xl leading-9 text-cream">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-7 border-t border-cream/10 pt-5">
                <p className="font-semibold text-gold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-cream/55">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
