type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-cream/10 bg-cream/[0.04] px-3 py-1 text-xs font-medium text-cream/75">
      {children}
    </span>
  );
}
