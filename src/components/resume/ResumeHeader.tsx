import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import {
  HEADER_OFFSET_Y,
  RESUME_SPRING,
} from './resumeAnimations';
import { IconLocation, IconMail, IconPhone } from './Icons';

const slideInUp = {
  hidden: { opacity: 0, y: HEADER_OFFSET_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: RESUME_SPRING,
  },
};

const reducedMotionVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export type ResumeHeaderProps = {
  resumePdfUrl?: string;
};

export function ResumeHeader({ resumePdfUrl }: ResumeHeaderProps) {
  const { name, tagline, about, contact } = resumeData;
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedMotionVariants : slideInUp;

  return (
    <motion.header
      className="border-b border-divider pb-4"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-display font-extrabold uppercase tracking-tight text-heading">
            {name}
          </h1>
          <p className="mt-1 text-heading-lg font-normal text-primary">
            {tagline}
          </p>
          {about && (
            <p className="mt-2 text-body text-muted max-w-xl">{about}</p>
          )}
        </div>
        {resumePdfUrl && (
          <a
            href={resumePdfUrl}
            download="Albert_Shkhyan_Resume.pdf"
            className="no-print text-caption font-medium text-primary hover:text-primary-dark underline"
            aria-label="Download original CV"
          >
            Download CV
          </a>
        )}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-body sm:flex sm:flex-wrap sm:gap-x-6 sm:text-caption">
        <span className="flex items-center gap-1.5">
          <IconPhone />
          <a
            href={`tel:${contact.phone}`}
            className="hover:text-primary"
            aria-label="Phone number"
          >
            {contact.phone}
          </a>
        </span>
        <span className="flex items-center gap-1.5">
          <IconMail />
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-primary"
            aria-label="Email address"
          >
            {contact.email}
          </a>
        </span>
        <span className="flex items-center gap-1.5">
          <Linkedin className="shrink-0 text-body" size={16} aria-hidden />
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </span>
        <span className="flex items-center gap-1.5">
          <IconLocation />
          {contact.location}
        </span>
      </div>
    </motion.header>
  );
}
