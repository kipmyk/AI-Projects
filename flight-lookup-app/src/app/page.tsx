import FlightResults from '@/components/FlightResults';

export default function Home() {
  return (
    <main style={{
      padding: '4rem 2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
        <div style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '900'
        }}>
          FlightTracker
        </div>
        <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Real-time flight lookup with precision. Enter your flight number to get started.
        </p>
      </header>

      <FlightResults />

      <footer style={{ marginTop: 'auto', padding: '2rem', opacity: 0.3, fontSize: '0.8rem' }}>
        © 2026 FlightTracker. Mock Data Service.
      </footer>
    </main>
  );
}
