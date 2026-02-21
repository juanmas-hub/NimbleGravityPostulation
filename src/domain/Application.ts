export interface ApplicationPayload {
  uuid: string;
  jobId: string;
  candidateId: string;
  applicationId: string;
  repoUrl: string;
}

export interface ApplicationResponse {
  ok: boolean;
}