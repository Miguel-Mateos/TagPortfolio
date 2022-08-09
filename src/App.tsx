import { IRepo } from './types'
import { useEffect, useState } from 'react'
import { images } from './contants'
import { Head } from './Modules/Head/Head'
import { Repos } from './Modules/Repos/Repos'
import { Works } from './Modules/Works/Works'
import { Projects } from './Modules/Projects/Projects'
import { useLanguage } from './hooks/useLanguage'
import { About } from './Modules/About/About'
import { LangSelector } from './Components/LangSelector/LangSelector'
import { Social } from './Components/Social/Social'
import { Quote } from './Components/Quote/Quote'
import './App.css'

function App() {
  const [repos, setRepos] = useState<IRepo[] | null>(null)
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
      <LangSelector />

      <Head />

      <Quote quote={`"${t('quote')}" - Austin Freeman`} />

      <About />

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

      <Social />
    </div>
  )
}

export default App
