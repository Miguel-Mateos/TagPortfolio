import './App.css'

function App() {
  const images = ['/css.png', '/js.png', '/react.png',
  '/typescript.png', '/node.png', '/mongo.png',
  'flutter.png', '/deno.png', '/rust.png',
  '/heroku.png', '/sass.png', '/html.png',
  '/github.png', '/docker.png']

  const Icons = () => 
    images.map((image, index) => {
      const odd = index % 2 === 0
      return <span key={index}><img src={image} className={`icon-image ${odd ? 'inverse' : ''}`} /></span>
    })

  return (
    <div className="App">
      <header className='header'>
        <div className='header-content'>
          <h1>Welcome To My <span>Portfolio</span></h1>
        </div>
        <picture>
          <img className='header-image' src='/first_image.jpeg'/>
        </picture>
      </header>
      <section>
        <div className='subtitle-container'>
          <h2>Put Random Learning Quote Here</h2>
        </div>
      </section>
      <section style={{ marginTop: '5rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <Icons />
      </section>
      <section style={{ marginTop: '15rem', display: 'flex', justifyContent: 'space-around'}}>
        <div className='card'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.
        </div>
        <div className='card'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo architecto sint reprehenderit ab, dicta aut. Optio sint, at libero alias modi itaque quisquam atque a aperiam excepturi error dolore.
        </div>
      </section>
    </div>
  )
}

export default App
