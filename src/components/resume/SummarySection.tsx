import { resumeData } from '../../data/resumeData';
import { SectionHeader } from './SectionHeader';

export function SummarySection() {
  return (
    <section className="pb-6">
      <SectionHeader title="Summary" />
      <p className="text-body leading-relaxed text-body">{resumeData.summary}</p>
    </section>
  );
}
