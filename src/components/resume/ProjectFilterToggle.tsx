import type { ProjectFilter } from './projectFilter';

const OPTIONS: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'personal', label: 'Personal' },
];

type ProjectFilterToggleProps = {
  value: ProjectFilter;
  onChange: (value: ProjectFilter) => void;
};

export function ProjectFilterToggle({ value, onChange }: ProjectFilterToggleProps) {
  return (
    <div
      className="flex items-center rounded-full bg-surface-subtle p-0.5 ring-1 ring-border"
      role="group"
      aria-label="Filter projects"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          aria-pressed={value === opt.value}
          className={`min-h-8 rounded-full px-3 text-caption font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface ${
            value === opt.value
              ? 'bg-surface text-heading shadow-sm ring-1 ring-border'
              : 'text-muted hover:text-body'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
