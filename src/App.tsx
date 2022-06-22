import './App.css'

function App() {

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
      <section style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <span id='react'>
          <img className='icon-image' src='/react.png' />
        </span>
        <span id='react'>
          <img className='icon-image' src='/react.png' />
        </span>
        <span id='react'>
          <img className='icon-image' src='/react.png' />
        </span>
        <span id='react'>
          <img className='icon-image' src='/react.png' />
        </span>

      </section>
    </div>
  )
}

export default App
