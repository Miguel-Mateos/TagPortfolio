import { handleDownloadResumee } from '../../../utils/downloadCV'
import './styles.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <a
          href="https://linkedin.com/in/miguel-mateos/"
          target="_blank"
          className="footer-nav-anchor"
          role="link"
          rel="noreferrer"
        >
          <small>Linkedin</small>
        </a>
        <a
          className="footer-nav-anchor"
          onClick={handleDownloadResumee}
          href="#"
        >
          <small style={{ cursor: 'pointer' }}>Download CV</small>
        </a>
        <a
          href="https://github.com/Eneko96" // Pon el link a lo que quieras
          target="_blank"
          className="footer-nav-anchor"
          role="link"
          rel="noreferrer"
        >
          <small title="Archivo Footer linea 31 y 25">
            Link que quieras (hover 3s)
          </small>
        </a>
        <a className="footer-nav-anchor" href="tel:0852049402">
          <small>Este es mi movil</small>
        </a>
      </nav>
      <div className="footer-name">
        <small>Miguel Mateos 2022</small>
      </div>
    </footer>
  )
}
