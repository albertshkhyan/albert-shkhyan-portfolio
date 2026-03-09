import { PortfolioLinksFab } from './components/PortfolioLinksFab';
import { ResumeHeader } from './components/resume/ResumeHeader';
import { ResumeLeftColumn, ResumeRightColumn } from './components/resume';

const resumePdfUrl = `${import.meta.env.BASE_URL}pdf/Albert_Shkhyan_Resume.pdf`;

function App() {
  return (
    <main className="min-h-screen bg-surface py-12" id="main-content">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ResumeHeader resumePdfUrl={resumePdfUrl} />
        <article aria-label="Resume content" className="mt-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
            <ResumeLeftColumn />
            <ResumeRightColumn />
          </div>
        </article>
      </div>
      <PortfolioLinksFab />
    </main>
  );
}

export default App;
