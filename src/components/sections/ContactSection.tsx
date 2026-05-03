import { contactLinks } from "@/lib/portfolio-data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-gold/20 bg-gold/10 p-8 shadow-glow md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-gold">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream md:text-5xl">
                Ready to build a sharper brand presence?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/70">
                Reach out for brand strategy, campaign planning, content systems, or a polished portfolio refresh.
              </p>
            </div>
            <div className="rounded-3xl border border-cream/10 bg-ink/70 p-6">
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring flex items-center justify-between rounded-2xl border border-cream/10 bg-cream/[0.04] p-4 transition hover:border-gold/50"
                  >
                    <span>
                      <span className="block text-sm text-cream/50">{link.label}</span>
                      <span className="mt-1 block font-semibold text-cream">{link.value}</span>
                    </span>
                    <span className="text-gold">Open</span>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-xs leading-6 text-cream/45">
                Update the email and social links in <code>src/lib/portfolio-data.ts</code> before production launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
