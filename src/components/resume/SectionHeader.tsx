type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <header className="mb-spacing-section-tight">
      <h2 className="text-heading font-bold uppercase tracking-wide text-heading">
        {title}
      </h2>
      <div className="mt-2 h-[var(--border-width-underline)] w-full bg-heading" />
    </header>
  );
}
