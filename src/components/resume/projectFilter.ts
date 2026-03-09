import type { ProjectCategory } from '../../types/resume';

export type ProjectFilter = 'all' | 'commercial' | 'personal';

export function filterProjectsByCategory(
  filter: ProjectFilter,
): (category: ProjectCategory) => boolean {
  if (filter === 'all') return () => true;
  if (filter === 'commercial') return (c) => c === 'commercial-mobile' || c === 'commercial-web';
  return (c) => c === 'personal';
}
