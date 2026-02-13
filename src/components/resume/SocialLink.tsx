import type { SocialLinkData } from '../../types/resume';
import { IconGithub, IconLinkedIn } from './Icons';

const iconMap = {
  linkedin: IconLinkedIn,
  github: IconGithub,
} as const;

type SocialLinkProps = {
  item: SocialLinkData;
};

export function SocialLink({ item }: SocialLinkProps) {
  const Icon = iconMap[item.icon];
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block text-body"
    >
      <div className="flex items-center gap-3">
        <span className="text-primary">
          <Icon />
        </span>
        <div>
          <p className="font-bold text-heading">{item.name}</p>
          <p className="text-caption text-primary group-hover:text-primary-dark underline">
            {item.href}
          </p>
        </div>
      </div>
    </a>
  );
}
