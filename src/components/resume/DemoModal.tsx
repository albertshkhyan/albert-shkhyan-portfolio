import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const backInUpTransition = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 24,
};

type DemoModalProps = {
  open: boolean;
  title: string;
  gifSrc: string;
  onClose: () => void;
};

export function DemoModal({ open, title, gifSrc, onClose }: DemoModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-lg border border-border bg-surface shadow-xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={backInUpTransition}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
          <h2 id="demo-modal-title" className="text-heading font-bold text-heading">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-muted hover:bg-surface-subtle hover:text-body"
            aria-label="Close"
          >
            <X size={20} aria-hidden />
          </button>
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-4">
          <img
            src={gifSrc}
            alt={`${title} demo`}
            className="max-h-[60vh] max-w-full rounded object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
