import { useCandidate } from './application/useCandidate';
import { useJobs } from './application/useJob';
import CandidateSection from './sections/CandidateSection';
import JobsSection from './sections/JobSection';
import './App.css';

const CANDIDATE_EMAIL = import.meta.env.VITE_CANDIDATE_EMAIL;

export default function App() {
  const { candidate, isLoading: isCandidateLoading, error: candidateError } = useCandidate(CANDIDATE_EMAIL);
  const { jobs, isLoading: isJobsLoading, error: jobsError } = useJobs();

  const handleApply = (jobId: string, repoUrl: string) => {
    if (!candidate) return; 
    console.log(`Aplicando al job ${jobId} con el repo: ${repoUrl} usando el UUID: ${candidate.uuid}`);
  };

  return (
    <main className="app-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Nimble Gravity Challenge</h1>
      
      <CandidateSection candidate={candidate} isLoading={isCandidateLoading} error={candidateError} />

      <hr style={{ margin: '2rem 0' }} />

      <JobsSection jobs={jobs} isLoading={isJobsLoading} error={jobsError} onApply={handleApply} />
    </main>
  );
}