export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.18),transparent_70%)]" />
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
            Marketing Strategist & Brand Growth Designer
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-cream md:text-7xl">
            I shape brand stories into campaigns that people remember.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/72">
            I help brands clarify their message, build audience-first campaigns, and create content systems that connect strategy to measurable growth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="focus-ring rounded-full bg-gold px-6 py-3 text-center text-sm font-bold text-ink transition hover:bg-sand"
            >
              View portfolio
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-cream/15 px-6 py-3 text-center text-sm font-bold text-cream transition hover:border-gold/60 hover:text-gold"
            >
              Start a conversation
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[3rem] bg-gold/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cream/10 bg-cream/[0.05] p-6 shadow-card backdrop-blur">
            <div className="rounded-[2rem] border border-cream/10 bg-ink p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-gold">Portfolio Snapshot</p>
              <div className="mt-8 space-y-6">
                {[
                  ["Strategy", "Brand positioning and audience clarity"],
                  ["Campaigns", "Launch plans, social direction, and reporting"],
                  ["Content", "Messaging systems built for consistency"]
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-5">
                    <p className="font-semibold text-cream">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-cream/60">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
