import { Link } from 'react-router-dom';

const NotFound = () => (
  <main style={{ minHeight: '72vh', padding: '180px 24px 100px', textAlign: 'center' }}>
    <p style={{ color: '#0284c7', fontWeight: 700, letterSpacing: '0.08em' }}>404</p>
    <h1 style={{ margin: '12px 0', fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>Page not found</h1>
    <p style={{ maxWidth: 560, margin: '0 auto 28px', color: '#64748b' }}>The page may have moved or the address may be incorrect.</p>
    <Link to="/" style={{ display: 'inline-block', padding: '12px 22px', borderRadius: 999, background: '#0f172a', color: '#fff' }}>Return home</Link>
  </main>
);

export default NotFound;
