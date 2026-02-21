import { useCandidate } from './application/useCandidate';
import { useJobs } from './application/useJob';
import { useApplyJob } from './application/useApplyJob';
import CandidateSection from './sections/CandidateSection';
import JobsSection from './sections/JobSection';
import './App.css';

const CANDIDATE_EMAIL = import.meta.env.VITE_CANDIDATE_EMAIL;

export default function App() {
  const { candidate, isLoading: isCandidateLoading, error: candidateError } = useCandidate(CANDIDATE_EMAIL);
  const { jobs, isLoading: isJobsLoading, error: jobsError } = useJobs();
  const { apply, submittingJobId, submitError, successJobId } = useApplyJob();

  const handleApply = (jobId: string, repoUrl: string) => {
    if (!candidate) return; 
    
    apply({
      uuid: candidate.uuid,
      candidateId: candidate.candidateId,
      applicationId: candidate.applicationId,
      jobId,
      repoUrl
    });
  };

  return (
    <main className="app-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Nimble Gravity Challenge</h1>
      
      <CandidateSection 
        candidate={candidate} 
        isLoading={isCandidateLoading} 
        error={candidateError} 
      />

      <hr style={{ margin: '2rem 0' }} />

      <JobsSection 
        jobs={jobs} 
        isLoading={isJobsLoading} 
        error={jobsError} 
        submittingJobId={submittingJobId}
        submitError={submitError}
        successJobId={successJobId}
        onApply={handleApply} 
      />
    </main>
  );
}