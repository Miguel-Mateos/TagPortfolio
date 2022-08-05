import { useEffect, useState } from 'react'
import { images } from './contants'
import { Head } from './Modules/Head/Head'
import { Repos } from './Modules/Repos/Repos'
import './App.css'
import { Works } from './Modules/Works/Works'
import { Projects } from './Modules/Projects/Projects'
import { useAppContext } from './Context/ContextApi'
import { useLanguage } from './hooks/useLanguage'
import { Footer } from './Modules/Footer/Footer'
import { Github } from './Icons/Github'
import { Linkedin } from './Icons/Linkedin'

export interface IRepo {
  name: string
  clone_url: string
  created_at: string
  description: string
  updated_at: string
  homepage: string
}

function App() {
  const [repos, setRepos] = useState<IRepo[] | null>(null)
  const { changeLanguage } = useAppContext() as any
  const { t } = useLanguage()

  const Icons = (): any =>
    images.map((image, index) => {
      const odd = index % 2 === 0
      return (
        <span key={index}>
          <img
            src={image}
            width="3rem"
            height="3rem"
            className={`icon-image ${odd ? 'inverse' : ''}`}
            alt="skill icon"
          />
        </span>
      )
    })

  const getRepos = async () => {
    const repos = await fetch(import.meta.env.VITE_GITHUB_URI)
    const data = await repos.json()
    setRepos(data)
  }

  useEffect(() => {
    getRepos()
    return () => setRepos(null)
  }, [])

  return (
    <div className="App">
      <div className="language title">
        <span className="language-name" onClick={() => changeLanguage('en-ES')}>
          ES
        </span>
        <span className="language-name" onClick={() => changeLanguage('en-US')}>
          EN
        </span>
      </div>
      <Head />
      <section>
        <div className="subtitle-container">
          <h2>&quot;{t('quote')}&quot; - Austin Freeman</h2>
        </div>
      </section>
      <section
        className="icons-section"
        style={{
          marginTop: '5rem',
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          position: 'sticky'
        }}
      >
        <Icons />
      </section>
      <section className="default-section">
        <div className="description">
          <Works />
          <Projects />
        </div>
      </section>
      <section className="default-section">
        <div className="description">
          <Repos repos={repos as IRepo[]} />
        </div>
      </section>
      <section className="default-section_right">
        <button className="button minimal linkedin">
          <a
            href="https://www.linkedin.com/in/i%C3%B1igo-moreno-ramos-175928167/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </button>
        <button className="button minimal github">
          <a href="https://github.com/Eneko96" target="_blank">
            <Github />
          </a>
        </button>
      </section>
    </div>
  )
}

export default App
