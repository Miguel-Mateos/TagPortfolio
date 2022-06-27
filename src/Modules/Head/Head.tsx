export const Head = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          Welcome To My <span>Portfolio</span>
        </h1>
      </div>
      <picture className="image-container">
        <img
          alt="head image"
          className="header-image"
          src="/first_image.jpeg"
          loading="eager"
        />
      </picture>
    </header>
  )
}