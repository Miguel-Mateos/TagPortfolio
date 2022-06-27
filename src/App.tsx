import { useContext, useEffect, useState } from 'react'
import { Card } from './Components/Card'
import { images } from './contants'
import { Head } from './Modules/Head/Head'
import { Repos } from './Modules/Repos/Repos'
import { useAppContext } from './Context/ContextApi'
import './App.css'

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
  const { description, works } = useAppContext() as any

  const Icons = (): any =>
    images.map((image, index) => {
      const odd = index % 2 === 0
      return (
        <span key={index}>
          <img src={image} className={`icon-image ${odd ? 'inverse' : ''}`} />
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

  const refineDescription = (str: string) => {
    const json = JSON.parse(str) as Object

    return Object.values(json).map((val) => <p>{val}</p>)
  }

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
        <div className="description">
          <h3>{description}</h3>
          <div className="work">
            {works.length > 0 && (
              <>
                <p className="work-title" style={{ width: '100%' }}>
                  {works[0].Name} &nbsp;
                  <span className="work-position">as {works[0].Position}</span>
                </p>
                <p className="work-subtitle">
                  From {''}
                  {Intl.DateTimeFormat('default', {
                    month: 'long'
                  }).format(new Date(works[0].Start))}
                  &nbsp;To&nbsp;
                  {Intl.DateTimeFormat('default', {
                    month: 'long'
                  }).format(new Date(works[0].Finish))}
                </p>
                {refineDescription(works[0].description)}
              </>
            )}
          </div>
        </div>
      </section>
      <section style={{ marginTop: '10rem' }}>
        <Repos repos={repos as IRepo[]} />
      </section>
      <footer></footer>
    </div>
  )
}

export default App
