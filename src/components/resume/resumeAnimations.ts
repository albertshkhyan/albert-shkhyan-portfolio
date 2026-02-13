/**
 * Shared resume entrance animation config.
 * - Single place for spring and delay tuning.
 * - Only transform (x, y) and opacity for GPU-friendly animation.
 */

export const RESUME_SPRING = {
  type: 'spring' as const,
  stiffness: 80,
  bounce: 0.26,
};

/** Delay before column animations start (after header). */
export const COLUMN_ENTRANCE_DELAY = 0.28;

/** Header: slide up distance (px). */
export const HEADER_OFFSET_Y = 56;

/** Columns: slide distance (px). */
export const COLUMN_OFFSET_X = 120;
