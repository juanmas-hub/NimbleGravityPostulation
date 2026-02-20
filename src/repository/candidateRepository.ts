import type { Candidate } from '../domain/Candidate';
import { fetchWithHandling } from './utils';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCandidateByEmail = async (email: string): Promise<Candidate> => {
  const url = `${API_BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`;
  return fetchWithHandling<Candidate>(url);
};
