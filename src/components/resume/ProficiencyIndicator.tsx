import type { LanguageData } from '../../types/resume';

const TOTAL_DOTS = 5;

type ProficiencyIndicatorProps = {
  language: LanguageData;
};

export function ProficiencyIndicator({ language }: ProficiencyIndicatorProps) {
  const { name, level, filledDots } = language;
  return (
    <div className="text-body">
      <p className="font-semibold text-heading">{name}</p>
      <p className="text-caption text-muted">{level}</p>
      <div className="mt-2 flex gap-1" role="img" aria-label={`${filledDots} of ${TOTAL_DOTS}`}>
        {Array.from({ length: TOTAL_DOTS }, (_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < filledDots ? 'bg-primary' : 'border border-border-strong bg-surface'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
