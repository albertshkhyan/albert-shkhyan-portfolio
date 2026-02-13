export interface DatedEntryData {
  title: string;
  titleHref?: string;
  logo?: string;
  subtitle?: string;
  subtitleHref?: string;
  date: string;
  location: string;
  bullets?: string[];
  description?: string;
  extra?: { label: string; href: string };
  /** Tech stack tags (e.g. React Native • TypeScript). Used in project layout. */
  tags?: string[];
  /** Role line (e.g. Frontend Engineer). Used in project layout. */
  role?: string;
  /** Demo GIF URL for preview modal. Used in project layout. */
  demoGif?: string;
}

export interface LanguageData {
  name: string;
  level: string;
  filledDots: number;
}

export interface SocialLinkData {
  name: string;
  href: string;
  icon: 'linkedin' | 'github';
}

export interface StrengthData {
  title: string;
  description: string;
  icon: 'gear' | 'lightbulb' | 'users';
}

export type SkillItem = string | { name: string; href: string };

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface ContactData {
  phone: string;
  email: string;
  linkedinUrl: string;
  location: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  about?: string;
  contact: ContactData;
  summary: string;
  skills: SkillGroup[];
  experience: DatedEntryData[];
  projects: DatedEntryData[];
  languages: LanguageData[];
  social: SocialLinkData[];
  strengths: StrengthData[];
  /** Intro text before the links, e.g. "For more projects, please visit my " */
  moreProjectsIntro: string;
  /** Links shown after intro, e.g. LinkedIn page, GitHub */
  moreProjectsLinks: { label: string; href: string }[];
}
