import { motion, useReducedMotion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import { ProficiencyIndicator } from './ProficiencyIndicator';
import { SectionHeader } from './SectionHeader';
import { SkillsSection } from './SkillsSection';
import { StrengthItem } from './StrengthItem';
import { Divider } from './Divider';
import { IconGithub, IconLinkedIn } from './Icons';
import {
  COLUMN_ENTRANCE_DELAY,
  COLUMN_OFFSET_X,
  RESUME_SPRING,
} from './resumeAnimations';

const socialIconMap = {
  linkedin: IconLinkedIn,
  github: IconGithub,
} as const;

const slideInFromRight = {
  hidden: { opacity: 0, x: COLUMN_OFFSET_X },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...RESUME_SPRING, delay: COLUMN_ENTRANCE_DELAY },
  },
};

const reducedMotionVariants = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 1, x: 0 },
};

export function ResumeRightColumn() {
  const { languages, social, strengths } = resumeData;
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedMotionVariants : slideInFromRight;

  return (
    <motion.div
      className="flex flex-col gap-spacing-section"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <SkillsSection />

      {languages.length > 0 && (
        <section className="pb-6">
          <SectionHeader title="Languages" />
          <div className="mt-spacing-section-tight flex flex-wrap gap-x-6 gap-y-4">
            {languages.map((lang, i) => (
              <ProficiencyIndicator key={i} language={lang} />
            ))}
          </div>
        </section>
      )}

      <section className="pb-6">
        <SectionHeader title="Find me online" />
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {social.map((item, i) => {
            const Icon = socialIconMap[item.icon];
            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark"
                aria-label={`${item.name} profile`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </section>

      <section className="pb-6">
        <SectionHeader title="Strengths" />
        <div className="mt-10">
          {strengths.map((s, i) => (
            <div key={i}>
              {i > 0 && <Divider />}
              <StrengthItem strength={s} />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
