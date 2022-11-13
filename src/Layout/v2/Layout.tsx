import {
  Sidebar,
  SidebarButton,
  SidebarDivider
} from '@TagDs/components/sidebar/sidebar'
import { Footer } from '../../Components/v2/Footer/Footer'
import { PreFooter } from '../../Components/v2/PreFooter/PreFooter'
import './styles.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleDownloadResumee } from '../../utils/downloadCV'
import { useState } from 'react'

export const Layout: React.FC<any> = ({ children }) => {
  const [selected, setSelected] = useState('button2')
  const navigate = useNavigate()
  const location = useLocation()
  const handleScroll = (id: string) => {
    if (location.pathname !== '/') navigate('/')
    const element = document.getElementById(id)
    if (element) {
      document.body.scrollTop = element.offsetTop
    }
  }

  const iconHandler = (id: string) => {
    if (selected === id) return 'material-icons'
    return 'material-icons-outlined'
  }
  console.log(selected)

  return (
    <div className="tag-ds layout">
      <div style={{ display: 'flex' }}>
        <Sidebar collapsed className="sb-fix">
          <SidebarDivider key={0}>sections</SidebarDivider>
          <SidebarButton
            key={1}
            icon={<span className={iconHandler('button2')}>person</span>}
            id="button2"
            href="#"
            label="About"
            onPressed={() => {
              setSelected('button2')
              handleScroll('about')
            }}
            selected={selected === 'button2'}
          />
          <SidebarButton
            key={2}
            icon={
              <span className={iconHandler('button3')}>
                {selected === 'button3' ? 'work' : 'work_outline'}
              </span>
            }
            id="button3"
            href="#"
            label="Work"
            onPressed={() => {
              setSelected('button3')
              handleScroll('work')
            }}
            selected={selected === 'button3'}
          />
          <SidebarButton
            key={3}
            icon={<span className={iconHandler('button4')}>description</span>}
            id="button4"
            href="#"
            label="Studies"
            onPressed={() => {
              setSelected('button4')
              handleScroll('studies')
            }}
            selected={selected === 'button4'}
          />
          <SidebarButton
            key={4}
            icon={<span className={iconHandler('button5')}>devices</span>}
            id="button5"
            href="#"
            label="Tech Stack"
            onPressed={() => {
              setSelected('button5')
              handleScroll('teckstack')
            }}
            selected={selected === 'button5'}
          />
          <SidebarButton
            key={5}
            icon={<span className={iconHandler('button6')}>feed</span>}
            id="button6"
            href="#"
            label="Case Studies"
            onPressed={() => {
              setSelected('button6')
              handleScroll('casestudies')
            }}
            selected={selected === 'button6'}
          />
          <SidebarDivider key={9}>contact</SidebarDivider>
          <SidebarButton
            key={6}
            icon={<span className={iconHandler('button7')}>home</span>}
            id="button7"
            href="#"
            label="Linkedin"
            onPressed={() => {
              setSelected('button7')
              window.open(
                'https://www.linkedin.com/in/i%C3%B1igo-moreno-ramos/'
              )
            }}
            selected={selected === 'button7'}
          />
          <SidebarButton
            key={7}
            icon={<span className={iconHandler('button8')}>videocam</span>}
            id="button8"
            label="Book a Call"
            href="#"
            onPressed={() => navigate('/Book')}
          />
          <SidebarButton
            key={8}
            href="#"
            icon={<span className={iconHandler('button9')}>file_download</span>}
            id="button9"
            label="Resume"
            onPressed={handleDownloadResumee}
          />
          {/* <SidebarButton
            key={10}
            icon={<span className={iconHandler('button2')}>dashboard</span>}
            id="button10"
            label="Dashboard"
            onPressed={() => navigate('/Dashboard')}
          /> */}
        </Sidebar>
        <div style={{ width: '100%', marginLeft: '80px' }}>{children}</div>
      </div>
      {location.pathname !== '/Book' && location.pathname !== '/Dashboard' && (
        <PreFooter />
      )}
      {location.pathname !== '/Dashboard' && <Footer />}
    </div>
  )
}
