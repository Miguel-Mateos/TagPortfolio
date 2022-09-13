import { handleDownloadResumee } from '../../../utils/downloadCV'

export const Footer = () => {
  return (
    <div
      style={{
        zIndex: 3,
        position: 'relative',
        padding: '80px 144px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'var(--neutral800)'
      }}
    >
      <div style={{ display: 'flex', gap: '32px', color: 'var(--neutral0)' }}>
        <a
          href="https://www.linkedin.com/in/i%C3%B1igo-moreno-ramos-175928167/"
          target="_blank"
          style={{ color: 'var(--neutral0)', textTransform: 'capitalize' }}
        >
          <small>Linkedin</small>
        </a>
        <small onClick={handleDownloadResumee} style={{ cursor: 'pointer' }}>
          Download CV
        </small>
        <a
          href="https://github.com/Eneko96"
          target="_blank"
          style={{ color: 'var(--neutral0)', textTransform: 'capitalize' }}
        >
          <small>Github</small>
        </a>
      </div>
      <small style={{ color: 'var(--neutral500)' }}>Iñigo Moreno 2022</small>
    </div>
  )
}
