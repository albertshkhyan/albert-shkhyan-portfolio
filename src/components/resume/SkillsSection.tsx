import type { SkillItem } from '../../types/resume';
import { resumeData } from '../../data/resumeData';
import { SectionHeader } from './SectionHeader';

const skillLabel = (item: SkillItem): string =>
  typeof item === 'string' ? item : item.name;

export function SkillsSection() {
  return (
    <section className="pb-6">
      <SectionHeader title="Skills" />
      <div className="flex flex-col gap-4">
        {resumeData.skills.map((group, i) => (
          <div key={i} role="group" aria-labelledby={`skills-category-${i}`}>
            <h4
              id={`skills-category-${i}`}
              className="mb-2 text-caption font-semibold uppercase tracking-wide text-muted"
            >
              {group.category}
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {group.items.map((item, j) => {
                const name = skillLabel(item);
                const href = typeof item === 'string' ? undefined : item.href;
                const className =
                  'border-b border-primary text-body font-medium text-heading';
                return (
                  <li key={j}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${className} text-primary hover:text-primary-dark underline`}
                        aria-label={`${name} (external link)`}
                      >
                        {name}
                      </a>
                    ) : (
                      <span className={className}>{name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
