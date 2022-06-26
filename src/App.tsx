import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './Components/Card'
import { Repos } from './Modules/Repos'

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
  const images = [
    '/css.png',
    '/js.png',
    '/react.png',
    '/typescript.png',
    '/node.png',
    '/mongo.png',
    'flutter.png',
    '/deno.png',
    '/rust.png',
    '/heroku.png',
    '/sass.png',
    '/html.png',
    '/github.png',
    '/docker.png'
  ]

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

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>
            Welcome To My <span>Portfolio</span>
          </h1>
          <div>patata</div>
        </div>
        <picture className="image-container">
          <img className="header-image" src="/first_image.jpeg" />
        </picture>
      </header>
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
      <section className="cards-section">
        <div>
          <Card>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
            architecto sint reprehenderit ab, dicta aut. Optio sint, at libero
            alias modi itaque quisquam atque a aperiam excepturi error dolore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
            architecto sint reprehenderit ab, dicta aut. Optio sint, at libero
            alias modi itaque quisquam atque a aperiam excepturi error dolore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
            architecto sint reprehenderit ab, dicta aut. Optio sint, at libero
            alias modi itaque quisquam atque a aperiam excepturi error dolore.
          </Card>
        </div>
        <Card>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
          architecto sint reprehenderit ab, dicta aut. Optio sint, at libero
          alias modi itaque quisquam atque a aperiam excepturi error dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
          architecto sint reprehenderit ab, dicta aut. Optio sint, at libero
          alias modi itaque quisquam atque a aperiam excepturi error dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
          architecto sint reprehenderit ab, dicta aut. Optio sint, at libero
          alias modi itaque quisquam atque a aperiam excepturi error dolore.
        </Card>
      </section>
      <section style={{ marginTop: '10rem' }}>
        <Repos repos={repos as IRepo[]} />
      </section>
      <footer></footer>
    </div>
  )
}

export default App
