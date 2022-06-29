import { useContext, useEffect, useState } from 'react'
import { images } from './contants'
import { Head } from './Modules/Head/Head'
import { Repos } from './Modules/Repos/Repos'
import './App.css'
import { Works } from './Modules/Works/Works'

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
    const repos = await fetch('https://api.github.com/users/eneko96/repos')
    const data = await repos.json()
    setRepos(data)
  }

  useEffect(() => {
    getRepos()
    return () => setRepos(null)
  }, [])

  return (
    <div className="App">
      <Head />
      <section>
        <div className="subtitle-container">
          <h2>
            &quot;Simplicity is the soul of efficiency&quot; - Austin Freeman
          </h2>
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
        <Works />
      </section>
      <section style={{ marginTop: '10rem' }}>
        <Repos repos={repos as IRepo[]} />
      </section>
      <footer></footer>
    </div>
  )
}

export default App
