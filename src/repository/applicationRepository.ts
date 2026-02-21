import { fetchWithHandling } from './utils';
import type { ApplicationPayload, ApplicationResponse } from '../domain/Application';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const applyToJob = async (payload: ApplicationPayload): Promise<ApplicationResponse> => {
  const url = `${API_BASE_URL}/api/candidate/apply-to-job`;
  
  return fetchWithHandling<ApplicationResponse>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};