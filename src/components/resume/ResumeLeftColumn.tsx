import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { resumeData } from '../../data/resumeData';
import { DemoModal } from './DemoModal';
import { DatedEntry } from './DatedEntry';
import { Divider } from './Divider';
import { SectionHeader } from './SectionHeader';
import { SummarySection } from './SummarySection';
import {
  COLUMN_ENTRANCE_DELAY,
  COLUMN_OFFSET_X,
  RESUME_SPRING,
} from './resumeAnimations';

const slideInFromLeft = {
  hidden: { opacity: 0, x: -COLUMN_OFFSET_X },
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

export function ResumeLeftColumn() {
  const { experience, projects, moreProjectsIntro, moreProjectsLinks } = resumeData;
  const [demoModal, setDemoModal] = useState<{ title: string; gifSrc: string } | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedMotionVariants : slideInFromLeft;

  return (
    <motion.div
      className="flex flex-col gap-spacing-section"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <SummarySection />

      <section className="pb-6">
        <SectionHeader title="Professional Experience" />
        {experience.map((entry, i) => (
          <div key={i}>
            {i > 0 && <Divider />}
            <DatedEntry entry={entry} />
          </div>
        ))}
      </section>

      <section className="pb-6">
        <SectionHeader title="Projects" />
        {projects.map((entry, i) => (
          <div key={i}>
            {i > 0 && <Divider />}
            <DatedEntry
              entry={entry}
              onOpenDemo={
                entry.demoGif
                  ? (title, gifUrl) => setDemoModal({ title, gifSrc: gifUrl })
                  : undefined
              }
            />
          </div>
        ))}
        <p className="mt-4 text-body text-muted">
          {moreProjectsIntro}
          {moreProjectsLinks.map((link, i) => (
            <span key={link.href}>
              {i > 0 && ' or '}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                {link.label}
              </a>
            </span>
          ))}
          .
        </p>
      </section>

      {demoModal && (
        <DemoModal
          open={!!demoModal}
          title={demoModal.title}
          gifSrc={demoModal.gifSrc}
          onClose={() => setDemoModal(null)}
        />
      )}
    </motion.div>
  );
}
