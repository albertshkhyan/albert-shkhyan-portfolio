import type { ProjectBadge, ProjectEntry } from '../../types/resume';
import { IconExternalLink, IconPlay } from './Icons';

const LOGO_BOX_SIZE = 48;

const BADGE_LABELS: Record<ProjectBadge, string> = {
  live: 'LIVE',
  demo: 'DEMO',
  appStore: 'APP STORE',
};

type ProjectCardProps = {
  entry: ProjectEntry;
  onOpenDemo?: (title: string, gifUrl: string) => void;
};

export function ProjectCard({ entry, onOpenDemo }: ProjectCardProps) {
  const {
    title,
    titleHref,
    logo,
    date,
    location,
    tags,
    role,
    description,
    bullets,
    demoGif,
    badges,
    links,
  } = entry;

  const actionLinks = links ?? [];
  const hasDemoButton = demoGif && onOpenDemo;
  const hasLegacyExtra = !links?.length && entry.extra;

  return (
    <article className="text-body pb-8">
      <div className="flex gap-4">
        {logo && (
          <div
            className="flex shrink-0 items-center justify-center overflow-hidden rounded border border-border bg-surface-subtle"
            style={{ width: LOGO_BOX_SIZE, height: LOGO_BOX_SIZE }}
            aria-hidden
          >
            <img
              src={logo}
              alt=""
              className={`max-h-full max-w-full object-contain ${
                title === 'Reserve-Me'
                  ? 'brightness-0 invert dark:brightness-100 dark:invert-0'
                  : !['Mementix', 'TeeSheet', 'MyFits', 'TicketShield', 'TeeSwap', 'GiftReggies'].includes(title)
                    ? 'dark:brightness-0 dark:invert'
                    : ''
              }`}
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-heading-lg font-bold text-heading">
              {titleHref ? (
                <a
                  href={titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-heading no-underline hover:text-muted"
                >
                  {title}
                  <IconExternalLink />
                </a>
              ) : (
                title
              )}
            </h3>
            <span className="text-caption text-muted">
              {date} {location !== '—' ? `• ${location}` : ''}
            </span>
          </div>

          {badges && badges.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-surface-subtle px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-muted ring-1 ring-border"
                >
                  {BADGE_LABELS[b]}
                </span>
              ))}
            </div>
          )}

          {tags && tags.length > 0 && (
            <p className="mt-2 text-xs text-muted">
              {tags.join(' • ')}
            </p>
          )}
          {role && (
            <p className="mt-1 text-caption text-muted">Role: {role}</p>
          )}

          <div className="mt-4 max-w-[65ch]">
            {description && (
              <p className="text-body leading-relaxed">{description}</p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-body leading-relaxed">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {hasDemoButton && (
              <button
                type="button"
                onClick={() => onOpenDemo(title, demoGif)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-caption font-medium text-heading no-underline transition-colors hover:border-border-strong hover:bg-surface-subtle"
              >
                <IconPlay />
                Demo
              </button>
            )}
            {actionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-caption font-medium text-primary no-underline transition-colors hover:border-primary hover:bg-surface-subtle"
              >
                <IconExternalLink />
                {link.label}
              </a>
            ))}
            {hasLegacyExtra && (
              <a
                href={entry.extra!.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-caption font-medium text-primary no-underline transition-colors hover:border-primary hover:bg-surface-subtle"
              >
                <IconExternalLink />
                {entry.extra!.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
