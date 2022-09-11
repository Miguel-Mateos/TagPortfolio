export const Footer = () => {
  return (
    <div
      style={{
        padding: '80px 144px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'var(--neutral800)'
      }}
    >
      <div style={{ display: 'flex', gap: '32px', color: 'var(--neutral0)' }}>
        <small>Linkedin</small>
        <small>Download CV</small>
      </div>
      <small style={{ color: 'var(--neutral500)' }}>Iñigo Moreno 2022</small>
    </div>
  )
}
