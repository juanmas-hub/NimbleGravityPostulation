import type { Job } from '../domain/Job';
import { JobCard } from '../components/JobCard';

interface JobsSectionProps {
  jobs: Job[];
  isLoading: boolean;
  error: string | null;
  onApply: (jobId: string, repoUrl: string) => void;
}

export default function JobsSection({ jobs, isLoading, error, onApply }: JobsSectionProps) {
  return (
    <section>
      <h2>Posiciones Abiertas</h2>
      
      {isLoading && <p>Cargando posiciones...</p>}
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      <div>
        {jobs.map((job) => (
          <JobCard 
            key={job.id} 
            job={job} 
            onSubmit={onApply} 
          />
        ))}
      </div>
    </section>
  );
}