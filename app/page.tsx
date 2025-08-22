// This is a self-contained page with basic Tailwind CSS for styling.
// It has NO local component imports to ensure the build passes.

export default function DashboardPage() {
  return (
    <main style={{ backgroundColor: '#0D1B2A', color: '#E0E0E0', fontFamily: 'sans-serif', minHeight: '100vh', padding: '2rem' }}>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>AcquaSentry Dashboard</h1>
        {/* Placeholder for user/settings icon */}
      </header>

      {/* Main Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>

        {/* Map and Alerts Section (Spanning 2 columns) */}
        <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Map Widget */}
          <div style={{ backgroundColor: '#1B2B3A', padding: '1.5rem', borderRadius: '0.5rem', minHeight: '400px' }}>
            <h2 style={{ fontWeight: '600', marginBottom: '1rem' }}>Mapa de la Red</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#888' }}>
              (Visualización del mapa interactivo)
            </div>
          </div>

          {/* Alerts Widget */}
          <div style={{ backgroundColor: '#1B2B3A', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h2 style={{ fontWeight: '600', marginBottom: '1rem' }}>Alertas Críticas Recientes</h2>
            <div style={{ color: '#888' }}>(Aquí aparecerá la lista de alertas)</div>
          </div>

        </div>

        {/* Metrics Section (Spanning 1 column) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Key Metrics Card */}
          <div style={{ backgroundColor: '#1B2B3A', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Métricas Clave</h3>
            <div style={{ fontSize: '1.125rem' }}>Sentrys Online: 15 / 16</div>
            <div style={{ fontSize: '1.125rem', marginTop: '0.5rem' }}>Alertas Activas: 3</div>
          </div>

          {/* Trend Chart Card */}
          <div style={{ backgroundColor: '#1B2B3A', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Tendencia General</h3>
            <div style={{ color: '#888' }}>(Aquí aparecerá la gráfica de tendencia)</div>
          </div>
        </div>

      </div>
    </main>
  );
}
