import { navigationItems } from "@/lib/portfolio-data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/80 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="focus-ring rounded-md text-sm font-semibold uppercase tracking-[0.28em] text-cream">
          Victoria Emife
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-medium text-cream/70 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink"
        >
          Work with me
        </a>
      </nav>
    </header>
  );
}
