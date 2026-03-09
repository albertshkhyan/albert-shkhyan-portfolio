type SectionHeaderProps = {
  title: string;
  rightContent?: React.ReactNode;
};

export function SectionHeader({ title, rightContent }: SectionHeaderProps) {
  return (
    <header className="mb-spacing-section-tight flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-heading font-bold uppercase tracking-wide text-heading">
        {title}
      </h2>
      {rightContent}
      <div className="mt-2 h-[var(--border-width-underline)] w-full bg-heading basis-full" />
    </header>
  );
}
