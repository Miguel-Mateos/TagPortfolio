import { useState } from 'react'

export const Head = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          Welcome To My <span>Portfolio</span>
        </h1>
      </div>
      <picture className="image-container">
        {!loaded && (
          <div style={{ height: '27rem', width: '650px', display: 'flex' }}>
            <div className="loader"></div>
          </div>
        )}
        <img
          alt="head image"
          className="header-image"
          src="/first_image.jpeg"
          loading="eager"
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </header>
  )
}
