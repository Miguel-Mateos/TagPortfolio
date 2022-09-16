import { handleDownloadResumee } from '../../../utils/downloadCV'
import './styles.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <a
          href="https://www.linkedin.com/in/i%C3%B1igo-moreno-ramos-175928167/"
          target="_blank"
          className="footer-nav-anchor"
        >
          <small>Linkedin</small>
        </a>
        <a className="footer-nav-anchor" onClick={handleDownloadResumee}>
          <small style={{ cursor: 'pointer' }}>Download CV</small>
        </a>
        <a
          href="https://github.com/Eneko96"
          target="_blank"
          className="footer-nav-anchor"
        >
          <small>Github</small>
        </a>
      </nav>
      <small className="footer-name">Iñigo Moreno 2022</small>
    </footer>
  )
}
