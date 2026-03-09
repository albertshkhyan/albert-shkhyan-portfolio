import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { resumeData } from '../../data/resumeData';
import type { ProjectCategory } from '../../types/resume';
import { DemoModal } from './DemoModal';
import { DatedEntry } from './DatedEntry';
import { Divider } from './Divider';
import { ProjectCard } from './ProjectCard';
import { ProjectFilterToggle } from './ProjectFilterToggle';
import { filterProjectsByCategory, type ProjectFilter } from './projectFilter';
import { SectionHeader } from './SectionHeader';
import { SummarySection } from './SummarySection';
import {
  COLUMN_ENTRANCE_DELAY,
  COLUMN_OFFSET_X,
  RESUME_SPRING,
} from './resumeAnimations';

const CATEGORY_SECTIONS: { key: ProjectCategory; title: string; intro?: string }[] = [
  {
    key: 'commercial-mobile',
    title: 'Selected Mobile Projects',
    intro: 'Some work is proprietary, so I describe the product without sharing private code.',
  },
  { key: 'commercial-web', title: 'Selected Web Projects' },
  { key: 'personal', title: 'Personal Projects' },
];

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
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all');
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedMotionVariants : slideInFromLeft;

  const predicate = useMemo(() => filterProjectsByCategory(projectFilter), [projectFilter]);
  const groupedProjects = useMemo(() => {
    const byCategory = { 'commercial-mobile': [] as typeof projects, 'commercial-web': [] as typeof projects, personal: [] as typeof projects };
    projects.forEach((p) => {
      if (predicate(p.category)) byCategory[p.category].push(p);
    });
    return CATEGORY_SECTIONS.filter((s) => byCategory[s.key].length > 0).map((s) => ({
      ...s,
      entries: byCategory[s.key],
    }));
  }, [projects, predicate]);

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
        <SectionHeader
          title="Projects"
          rightContent={
            <ProjectFilterToggle value={projectFilter} onChange={setProjectFilter} />
          }
        />
        {groupedProjects.map((group) => (
          <div key={group.key} className="mt-8 first:mt-0">
            <h3 className="text-heading font-semibold text-heading">{group.title}</h3>
            {group.intro && (
              <p className="mt-1 text-caption text-muted">{group.intro}</p>
            )}
            <div className="mt-4">
              {group.entries.map((entry, i) => (
                <div key={`${entry.title}-${i}`}>
                  {i > 0 && <Divider />}
                  <ProjectCard
                    entry={entry}
                    onOpenDemo={
                      entry.demoGif
                        ? (title, gifUrl) => setDemoModal({ title, gifSrc: gifUrl })
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-6 text-body text-muted">
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
