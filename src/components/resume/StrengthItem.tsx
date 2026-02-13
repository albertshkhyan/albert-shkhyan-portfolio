import type { StrengthData } from '../../types/resume';
import { IconGear, IconLightbulb, IconUsers } from './Icons';

const iconMap = {
  gear: IconGear,
  lightbulb: IconLightbulb,
  users: IconUsers,
} as const;

type StrengthItemProps = {
  strength: StrengthData;
};

export function StrengthItem({ strength }: StrengthItemProps) {
  const Icon = iconMap[strength.icon];
  return (
    <div className="flex gap-3 text-body">
      <Icon />
      <div>
        <p className="font-bold text-heading">{strength.title}</p>
        <p className="mt-0.5 text-body text-muted">{strength.description}</p>
      </div>
    </div>
  );
}
