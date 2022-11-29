/* eslint-disable import/no-absolute-path */
import {
  Sidebar,
  SidebarButton,
  SidebarDivider
} from '@TagDs/components/sidebar/sidebar'
import { Footer } from '../../Components/v2/Footer/Footer'
import { PreFooter } from '../../Components/v2/PreFooter/PreFooter'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleDownloadResumee } from '../../utils/downloadCV'
import { useEffect, useState } from 'react'
import book from '/newIcons/book-o.svg'
import oBook from '/newIcons/book.svg'
import chat from '/newIcons/chat-o.svg'
import oChat from '/newIcons/chat.svg'
import download from '/newIcons/download-o.svg'
import oDownload from '/newIcons/download.svg'
import nLocation from '/newIcons/location-o.svg'
import oLocation from '/newIcons/location.svg'
import work from '/newIcons/work-o.svg'
import oWork from '/newIcons/work.svg'
import folder from '/newIcons/folder-o.svg'
import oFolder from '/newIcons/folder.svg'
import view from '/newIcons/view-o.svg'
import oView from '/newIcons/view.svg'
import logo from '/Logo.svg'
import './styles.css'
const TITLE_OFFSET = 100

export const Layout: React.FC<any> = ({ children }) => {
  const [selected, setSelected] = useState('button2')

  const navigate = useNavigate()
  const location = useLocation()

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') navigate('/')
    const element = document.getElementById(id)
    if (element) {
      document.body.scrollTop = element.offsetTop - TITLE_OFFSET
    }
  }

  const handleHome = () => {
    if (location.pathname !== '/') navigate('/')
    document.body.scrollTop = 0
  }

  useEffect(() => {
    const { pathname } = location
    if (pathname.includes('/Study')) {
      setSelected('button6')
      const focuser = document.getElementsByClassName('focuser')
      if (focuser.length) {
        const focuserElement = focuser[0] as HTMLElement
        focuserElement.style.top = `${
          document.getElementById('button6')!.offsetTop
        }px`
      }
    }
  }, [location])

  return (
    <div className="tag-ds layout">
      <div className="layout-inner">
        <Sidebar
          logo={
            <img
              src={logo}
              alt="logo"
              style={{ width: '34px', height: '49px', objectFit: 'cover' }}
              onClick={handleHome}
            />
          }
          collapsed
        >
          <SidebarDivider key={0}>sections</SidebarDivider>
          <SidebarButton
            key={1}
            className={selected === 'button2' ? 'selected' : ''}
            icon={
              <img
                src={selected === 'button2' ? oLocation : nLocation}
                alt="svg"
              />
            }
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
            icon={<img src={selected === 'button3' ? oWork : work} alt="svg" />}
            className={selected === 'button3' ? 'selected' : ''}
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
            icon={<img src={selected === 'button4' ? oBook : book} alt="svg" />}
            className={selected === 'button4' ? 'selected' : ''}
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
            icon={<img src={selected === 'button5' ? oView : view} alt="svg" />}
            className={selected === 'button5' ? 'selected' : ''}
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
            icon={
              <img src={selected === 'button6' ? oFolder : folder} alt="svg" />
            }
            className={selected === 'button6' ? 'selected' : ''}
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
            key={7}
            icon={<img src={selected === 'button8' ? oChat : chat} alt="svg" />}
            className={selected === 'button8' ? 'selected' : ''}
            id="button8"
            label="Book a Call"
            href="#"
            onPressed={() => {
              setSelected('button8')
              navigate('/Book')
            }}
          />
          <SidebarButton
            key={8}
            href="#"
            icon={
              <img
                src={selected === 'button9' ? oDownload : download}
                alt="svg"
              />
            }
            className={selected === 'button9' ? 'selected' : ''}
            id="button9"
            label="Resume"
            onPressed={handleDownloadResumee}
          />
        </Sidebar>
        <div className="layout-content">{children}</div>
      </div>
      {location.pathname !== '/Book' && location.pathname !== '/Dashboard' && (
        <PreFooter />
      )}
      {location.pathname !== '/Dashboard' && <Footer />}
    </div>
  )
}
