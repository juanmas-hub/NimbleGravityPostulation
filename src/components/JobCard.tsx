import { useState } from 'react';
import type { Job } from '../domain/Job';

interface JobCardProps {
  job: Job;
  isSubmitting: boolean;
  isSuccess: boolean;
  onSubmit: (jobId: string, repoUrl: string) => void;
}

export const JobCard = ({ job, isSubmitting, isSuccess, onSubmit }: JobCardProps) => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoUrl.trim() && !isSubmitting) {
      onSubmit(job.id, repoUrl);
    }
  };

  return (
    <article style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h3>{job.title}</h3>
      
      {isSuccess ? (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#d4edda', color: '#155724', borderRadius: '4px' }}>
          ¡Postulación enviada con éxito! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <input
            type="url"
            placeholder="https://github.com/tu-usuario/tu-repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            required
            disabled={isSubmitting}
            style={{ flex: 1, padding: '0.5rem' }}
          />
          <button type="submit" disabled={!repoUrl.trim() || isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Submit'}
          </button>
        </form>
      )}
    </article>
  );
};