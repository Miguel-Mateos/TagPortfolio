import {
  Sidebar,
  SidebarButton,
  SidebarDivider
} from '../../Components/v2/sidebar/sidebar'
import { Footer } from '../../Components/v2/Footer/Footer'
import { PreFooter } from '../../Components/v2/PreFooter/PreFooter'
import './styles.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleDownloadResumee } from '../../utils/downloadCV'

export const Layout: React.FC<any> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleScroll = (id: string) => {
    if (location.pathname !== '/') navigate('/')
    const element = document.getElementById(id)
    console.log('hola')
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="tag-ds layout">
      <div style={{ display: 'flex' }}>
        <Sidebar collapsed className="sb-fix">
          <SidebarDivider key={0}>sections</SidebarDivider>
          <SidebarButton
            key={1}
            icon={<span className="material-icons">person</span>}
            id="button2"
            label="About"
            onPressed={() => handleScroll('about')}
          />
          <SidebarButton
            key={2}
            icon={<span className="material-icons">work</span>}
            id="button3"
            label="Work"
            onPressed={() => handleScroll('work')}
          />
          <SidebarButton
            key={3}
            icon={<span className="material-icons">description</span>}
            id="button4"
            label="Studies"
            onPressed={() => handleScroll('studies')}
          />
          <SidebarButton
            key={4}
            icon={<span className="material-icons">devices</span>}
            id="button5"
            label="Tech Stack"
            onPressed={() => handleScroll('teckstack')}
          />
          <SidebarButton
            key={5}
            icon={<span className="material-icons">feed</span>}
            id="button6"
            label="Case Studies"
            onPressed={() => handleScroll('casestudies')}
          />
          <SidebarDivider key={9}>contact</SidebarDivider>
          <SidebarButton
            key={6}
            icon={<span className="material-icons">home</span>}
            id="button7"
            label="Linkedin"
          />
          <SidebarButton
            key={7}
            icon={<span className="material-icons">videocam</span>}
            id="button8"
            label="Book a Call"
            onPressed={() => navigate('/Book')}
          />
          <SidebarButton
            key={8}
            icon={<span className="material-icons">file_download</span>}
            id="button9"
            label="Resume"
            onPressed={handleDownloadResumee}
          />
        </Sidebar>
        <div style={{ width: '100%', marginLeft: '80px' }}>{children}</div>
      </div>
      {location.pathname !== '/Book' && <PreFooter />}
      <Footer />
    </div>
  )
}
