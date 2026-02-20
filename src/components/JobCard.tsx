import { useState } from 'react';
import type { Job } from '../domain/Job';

interface JobCardProps {
  job: Job;
  onSubmit: (jobId: string, repoUrl: string) => void;
}

export const JobCard = ({ job, onSubmit }: JobCardProps) => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (repoUrl.trim()) {
      onSubmit(job.id, repoUrl);
    }
  };

  return (
    <article style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h3>{job.title}</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <input
          type="url"
          placeholder="https://github.com/tu-usuario/tu-repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          required
          style={{ flex: 1, padding: '0.5rem' }}
        />
        <button type="submit" disabled={!repoUrl.trim()}>
          Submit
        </button>
      </form>
    </article>
  );
};