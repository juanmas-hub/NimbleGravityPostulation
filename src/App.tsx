import { useCandidate } from './application/useCandidate';
import './App.css';

const CANDIDATE_EMAIL = import.meta.env.VITE_CANDIDATE_EMAIL;

function App() {
  const { candidate, isLoading, error } = useCandidate(CANDIDATE_EMAIL);

  return (
    <main className="app-container">
      <h1>Nimble Gravity Challenge</h1>
      
      <section className="candidate-info">
        <h2>Mis Datos de Candidato</h2>
        
        {isLoading && <p>Cargando datos del candidato...</p>}
        
        {error && <p className="error-text">Error: {error}</p>}
        
        {candidate && (
          <article className="card">
            <p><strong>Nombre:</strong> {candidate.firstName} {candidate.lastName}</p>
            <p><strong>Email:</strong> {candidate.email}</p>
            <p><strong>Candidate ID:</strong> {candidate.candidateId}</p>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;