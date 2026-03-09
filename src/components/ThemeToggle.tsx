import { motion } from 'framer-motion';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type ThemePreference } from '../contexts/themeContext';

const OPTIONS: { value: ThemePreference; icon: typeof Sun; label: string }[] = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'dark', icon: Moon, label: 'Dark' },
  { value: 'system', icon: Monitor, label: 'System' },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="no-print flex items-center rounded-full bg-surface-subtle p-0.5 ring-1 ring-border dark:ring-border-strong"
      role="group"
      aria-label="Theme"
    >
      {OPTIONS.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-pressed={theme === value}
          aria-label={`Theme: ${label}`}
          title={label}
          className={`relative flex min-h-8 min-w-8 items-center justify-center rounded-full transition-colors hover:text-body focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface ${
            theme === value ? 'text-primary' : 'text-muted'
          }`}
          whileTap={{ scale: 0.96 }}
        >
          {theme === value && (
            <motion.span
              layoutId="theme-toggle-indicator"
              className="absolute inset-0 rounded-full bg-surface shadow-sm ring-1 ring-border"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative">
            <Icon className="size-4" aria-hidden />
          </span>
        </motion.button>
      ))}
    </div>
  );
}
