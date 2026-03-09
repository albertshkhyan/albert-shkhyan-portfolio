import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, LayoutGrid, Sparkles } from 'lucide-react';

const PORTFOLIO_LINKS = [
  {
    href: 'https://albertshkhyan.github.io/3d-portfolio-solar-system-/',
    label: '3D Solar System',
    icon: Globe,
    ariaLabel: 'Open 3D Solar System portfolio',
  },
  {
    href: 'https://albertshkhyan.github.io/solo-leveling-portfolio/',
    label: 'Anime portfolio',
    icon: Sparkles,
    ariaLabel: 'Open anime portfolio (Solo Leveling)',
  },
] as const;

const MENU_VARIANTS = {
  closed: {
    opacity: 0,
    scale: 0.8,
    y: 8,
    transition: { duration: 0.15 },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

const ITEM_VARIANTS = {
  closed: { opacity: 0, y: 4 },
  open: { opacity: 1, y: 0 },
};

export function PortfolioLinksFab() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target as Node)) return;
      close();
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close]);

  return (
    <div
      ref={containerRef}
      className="no-print fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      role="group"
      aria-label="Other portfolios"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="fab-menu"
            className="flex flex-col items-end gap-2"
            initial="closed"
            animate="open"
            exit="closed"
            variants={MENU_VARIANTS}
          >
            {PORTFOLIO_LINKS.map(({ href, label, icon: Icon, ariaLabel }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={ITEM_VARIANTS}
                className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-surface shadow-md ring-1 ring-border hover:bg-surface-subtle hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={ariaLabel}
                title={label}
              >
                <Icon className="size-5 shrink-0" aria-hidden />
                <span className="pr-3 pl-1 text-caption font-medium">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close portfolio links' : 'More portfolios'}
        aria-haspopup="true"
        className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        whileTap={{ scale: 0.96 }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden
        >
          <LayoutGrid className="size-5" />
        </motion.span>
      </motion.button>
    </div>
  );
}
