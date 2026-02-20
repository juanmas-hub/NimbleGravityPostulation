// Hook, si escalamos hay que hacer una carpeta hooks
import { useState, useEffect } from 'react';
import type { Candidate } from '../domain/Candidate';
import { getCandidateByEmail } from '../repository/candidateRepository';

export const useCandidate = (email: string) => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      setError('Email no configurado en el entorno.');
      setIsLoading(false);
      return;
    }

    const fetchCandidate = async () => {
      try {
        const data = await getCandidateByEmail(email);
        setCandidate(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCandidate();
  }, [email]);

  return { candidate, isLoading, error };
};