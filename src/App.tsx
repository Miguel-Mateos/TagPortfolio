import { useEffect, useState } from 'react'
import './App.css'

interface IRepo {
  name: string,
  clone_url: string,
  created_at: string,
  description: string,
  updated_at: string,
  homepage: string,
}

function App() {
  const [repos, setRepos] = useState<IRepo[]| null>(null)
  const [moreRepos, setMoreRepos] = useState<boolean>(false)
  const [clipboard, setClipboard] = useState<number|null>(null)
  const rtf = new Intl.RelativeTimeFormat('default', { style: 'short' })
  let timer: any
  const images = ['/css.png', '/js.png', '/react.png',
  '/typescript.png', '/node.png', '/mongo.png',
  'flutter.png', '/deno.png', '/rust.png',
  '/heroku.png', '/sass.png', '/html.png',
  '/github.png', '/docker.png']

  const Icons = (): any => 
    images.map((image, index) => {
      const odd = index % 2 === 0
      return <span key={index}><img src={image} className={`icon-image ${odd ? 'inverse' : ''}`} /></span>
    })

  const getRepos = async () => {
    const repos = await fetch('https://api.github.com/users/eneko96/repos');
    const data = await repos.json();
    setRepos(data)
  }

  useEffect(() => {
    getRepos()
    return () => setRepos(null)
  }, [])

  const copyToClipboard = (text: string, idx: number) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
    setClipboard(idx)
    clearTimeout(timer)
    timer = setTimeout(() => setClipboard(null), 2000)
    }
  }

  IntersectionObserver

  return (
    <div className="App">
      <header className='header'>
        <div className='header-content'>
          <h1>Welcome To My <span>Portfolio</span></h1>
        </div>
        <picture className='image-container'>
          <img className='header-image' src='/first_image.jpeg'/>
        </picture>
      </header>
      <section>
        <div className='subtitle-container'>
          <h2>"Simplicity is the soul of efficiency" - Austin Freeman</h2>
        </div>
      </section>
      <section className='icons-section' style={{ marginTop: '5rem', display: 'flex', gap: '2rem', justifyContent: 'center', position: 'sticky' }}>
        <Icons />
      </section>
      <section className='cards-section' style={{ marginTop: '15rem', display: 'flex', justifyContent: 'space-around'}}>
        <div className='card'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.
        </div>
        <div className='card'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.

        </div>
      </section>
      <section style={{ marginTop: '10rem'}}>
        <h2>Repos</h2>
        <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
        {repos && (moreRepos ? repos : repos.slice(0, 4)).map((repo, index) => (
          <div key={index} className='card fade-in' style={{ flex: '1 1 20rem', justifyContent: 'center'}}>
              <h3>{repo.name}</h3>
            <div style={{ textAlign: 'left', marginTop: '2rem', padding: '0 1rem'}}>
              <p>Description: {repo.description || 'No Description Provided'}</p>
              <p>Created: {Intl.DateTimeFormat('default', { year: '2-digit', month: '2-digit', day: '2-digit'}).format(new Date(repo.created_at))}</p>
              <p>Last Updated: {rtf.format(-1, 'day')}</p>
              <a href={'https://' + repo.homepage} target='_blank'>{repo.homepage?.replace('https://', '')}</a>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
                <button className='button'><a href={repo.clone_url} target='_blank'>Go to Repo</a></button>
                <button className={`button ${clipboard === index ? 'copied' : ''}`} onClick={() => copyToClipboard(`git clone ${repo.clone_url}`, index)}>Clone</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        <button className='button minimal' onClick={() => setMoreRepos(!moreRepos)}>{moreRepos ? 'See Less...' : 'See More...'}</button>
      </section>
    </div>
  )
}

export default App
