import {
  Calendar,
  ExternalLink,
  Github,
  Lightbulb,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Play,
  Settings,
  Users,
} from 'lucide-react';

const iconProps = { className: 'shrink-0 text-body', size: 16, 'aria-hidden': true } as const;
const socialProps = { className: 'shrink-0', size: 24, 'aria-hidden': true } as const;
const strengthProps = { className: 'shrink-0 text-primary', size: 20, 'aria-hidden': true } as const;

export function IconCalendar() {
  return <Calendar {...iconProps} />;
}

export function IconLocation() {
  return <MapPin {...iconProps} />;
}

export function IconLinkedIn() {
  return <Linkedin {...socialProps} />;
}

export function IconGithub() {
  return <Github {...socialProps} />;
}

export function IconGear() {
  return <Settings {...strengthProps} />;
}

export function IconLightbulb() {
  return <Lightbulb {...strengthProps} />;
}

export function IconUsers() {
  return <Users {...strengthProps} />;
}

export function IconPhone() {
  return <Phone {...iconProps} />;
}

export function IconMail() {
  return <Mail {...iconProps} />;
}

export function IconExternalLink() {
  return <ExternalLink {...iconProps} size={14} />;
}

export function IconPlay() {
  return <Play {...iconProps} size={14} />;
}
