import type { Job } from '../domain/Job';
import { JobCard } from '../components/JobCard';

interface JobsSectionProps {
  jobs: Job[];
  isLoading: boolean;
  error: string | null;
  submittingJobId: string | null;
  submitError: string | null;
  successJobId: string | null;
  onApply: (jobId: string, repoUrl: string) => void;
}

export default function JobsSection({ 
  jobs, isLoading, error, 
  submittingJobId, submitError, successJobId, onApply 
}: JobsSectionProps) {
  return (
    <section>
      <h2>Posiciones Abiertas</h2>
      
      {isLoading && <p>Cargando posiciones...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {submitError && (
        <div style={{ background: '#f8d7da', color: '#721c24', padding: '0.5rem', borderRadius: '4px', marginBottom: '1rem' }}>
          {submitError}
        </div>
      )}
      
      <div>
        {jobs.map((job) => (
          <JobCard 
            key={job.id} 
            job={job} 
            isSubmitting={submittingJobId === job.id}
            isSuccess={successJobId === job.id}
            onSubmit={onApply} 
          />
        ))}
      </div>
    </section>
  );
}