import type { Candidate } from '../domain/Candidate';

interface CandidateSectionProps {
  candidate: Candidate | null;
  isLoading: boolean;
  error: string | null;
}

export default function CandidateSection({ candidate, isLoading, error }: CandidateSectionProps) {
  return (
    <section>
      <h2>Mis Datos</h2>
      
      {isLoading && <p>Cargando datos...</p>}
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {candidate && (
        <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p><strong>Candidato:</strong> {candidate.firstName} {candidate.lastName}</p>
          <p><strong>ID:</strong> {candidate.candidateId}</p>
        </div>
      )}
    </section>
  );
}