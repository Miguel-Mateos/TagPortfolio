import { useEffect, useState } from 'react'
import { images } from './contants'
import { Head } from './Modules/Head/Head'
import { Repos } from './Modules/Repos/Repos'
import './App.css'
import { Works } from './Modules/Works/Works'
import { Projects } from './Modules/Projects/Projects'
import { useAppContext } from './Context/ContextApi'
import { useLanguage } from './hooks/useLanguage'

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
        <div
          className="description"
          style={{ borderColor: 'var(--quaternary)' }}
        >
          <Repos repos={repos as IRepo[]} />
        </div>
      </section>
      <footer></footer>
    </div>
  )
}

export default App
