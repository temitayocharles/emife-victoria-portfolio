type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-cream/70 md:text-lg">{description}</p> : null}
    </div>
  );
}
