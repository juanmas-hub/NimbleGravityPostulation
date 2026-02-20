import type { Job } from '../domain/Job';
import { fetchWithHandling } from './utils';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getJobsList = async (): Promise<Job[]> => {
  const url = `${API_BASE_URL}/api/jobs/get-list`;
  return fetchWithHandling<Job[]>(url);
};