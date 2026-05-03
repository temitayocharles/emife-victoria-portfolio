import { navigationItems } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-cream">Victoria Emife</p>
          <p className="mt-2 text-sm text-cream/55">Marketing strategist and brand growth designer.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-cream/60">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
