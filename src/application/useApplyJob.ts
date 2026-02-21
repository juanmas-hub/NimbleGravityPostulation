import { useState } from 'react';
import type { ApplicationPayload } from '../domain/Application';
import { applyToJob } from '../repository/applicationRepository';

export const useApplyJob = () => {
  const [submittingJobId, setSubmittingJobId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successJobId, setSuccessJobId] = useState<string | null>(null);

  const apply = async (payload: ApplicationPayload) => {
    setSubmittingJobId(payload.jobId);
    setSubmitError(null);
    setSuccessJobId(null);

    try {
      const response = await applyToJob(payload);
      if (response.ok) {
        setSuccessJobId(payload.jobId);
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Error al enviar la postulación');
    } finally {
      setSubmittingJobId(null);
    }
  };

  return { apply, submittingJobId, submitError, successJobId };
};