import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className='header'>
        <div className='header-content'>
          <h1>Welcome To My Gadeem <span>Portfolio</span></h1>
        </div>
        <picture>
          <img className='header-image' src='/first_image.jpeg'/>
        </picture>
      </header>
    </div>
  )
}

export default App
