import type { DatedEntryData } from '../../types/resume';
import { IconCalendar, IconExternalLink, IconLocation, IconPlay } from './Icons';

const LOGO_BOX_SIZE = 48;

type DatedEntryProps = {
  entry: DatedEntryData;
  onOpenDemo?: (title: string, gifUrl: string) => void;
};

function ProjectLayout({
  entry,
  onOpenDemo,
}: {
  entry: DatedEntryData;
  onOpenDemo?: (title: string, gifUrl: string) => void;
}) {
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
    extra,
    demoGif,
  } = entry;

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
              className="max-h-full max-w-full object-contain"
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
              {date} • {location}
            </span>
          </div>

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
            {demoGif && onOpenDemo && (
              <button
                type="button"
                onClick={() => onOpenDemo(title, demoGif)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-caption font-medium text-heading no-underline hover:border-border-strong hover:bg-surface-subtle"
              >
                <IconPlay />
                Demo
              </button>
            )}
            {extra && (
              <a
                href={extra.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-caption font-medium text-primary no-underline hover:border-primary hover:bg-surface-subtle"
              >
                {extra.label}
                <IconExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ExperienceLayout({ entry }: { entry: DatedEntryData }) {
  const {
    title,
    titleHref,
    logo,
    subtitle,
    subtitleHref,
    date,
    location,
    bullets,
    description,
    extra,
  } = entry;

  return (
    <article className="text-body pb-6">
      {logo && (
        <img
          src={logo}
          alt=""
          className="mb-3 h-12 w-auto object-contain"
        />
      )}
      <h3 className="text-heading-lg font-bold text-heading">
        {titleHref ? (
          <a
            href={titleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {subtitle && (
        <p className="mt-1">
          {subtitleHref ? (
            <a
              href={subtitleHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-lg font-semibold text-primary hover:text-primary-dark underline"
            >
              {subtitle}
            </a>
          ) : (
            <span className="text-body-lg font-semibold text-primary">
              {subtitle}
            </span>
          )}
        </p>
      )}
      <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-caption text-muted">
        <span className="inline-flex items-baseline gap-1.5">
          <IconCalendar />
          {date}
        </span>
        <span className="inline-flex items-baseline gap-1.5">
          <IconLocation />
          {location}
        </span>
      </div>
      {bullets && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-body">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {description && <p className="mt-2 text-body">{description}</p>}
      {extra && (
        <p className="mt-2 text-body">
          <span className="font-medium">{extra.label} </span>
          <a
            href={extra.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark underline"
          >
            {extra.href}
          </a>
        </p>
      )}
    </article>
  );
}

export function DatedEntry({ entry, onOpenDemo }: DatedEntryProps) {
  const isProject = Boolean(entry.logo);
  return isProject ? (
    <ProjectLayout entry={entry} onOpenDemo={onOpenDemo} />
  ) : (
    <ExperienceLayout entry={entry} />
  );
}
