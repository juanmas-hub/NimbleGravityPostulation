import { useState, useEffect } from 'react';
import type { Job } from '../domain/Job';
import { getJobsList } from '../repository/jobRepository';

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobsList();
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido al cargar las posiciones');
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, isLoading, error };
};