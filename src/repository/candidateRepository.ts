import type { Candidate } from '../domain/Candidate';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCandidateByEmail = async (email: string): Promise<Candidate> => {
  const url = `${API_BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`;
  return fetchWithHandling<Candidate>(url);
};

const fetchWithHandling = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error HTTP: ${response.status}`);
  }
  
  return response.json();
};