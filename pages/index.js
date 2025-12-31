export default function Home() {
  return (
    <div style={{ fontFamily: 'monospace', padding: '40px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
      <title>Syzygy Design | Ryan Stevenson</title>
      
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Syzygy Design</h1>
      
      <p>
        <strong>Mechanical Architecture & Product Design</strong><br />
        Independent consultancy led by <strong>Ryan Stevenson</strong>.<br />
        Built on the rigor of the Apple Vision Products Group.
      </p>

      <p style={{ marginTop: '20px' }}>
        Specializing in NX-native design, DFM, and NPI execution.
      </p>

      <p style={{ marginTop: '30px' }}>
        Contact: <a href="mailto:Ryan@thinksyzygy.com" style={{ color: 'blue', textDecoration: 'underline' }}>Ryan@thinksyzygy.com</a>
      </p>

      <footer style={{ marginTop: '60px', opacity: 0.5, fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Calculating Infinity LLC
      </footer>
    </div>
  )
}
