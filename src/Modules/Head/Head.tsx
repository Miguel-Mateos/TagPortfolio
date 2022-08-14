import { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './styles.css'

export const Head = () => {
  const [loaded, setLoaded] = useState(false)
  const { t } = useLanguage()
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          {t('welcome_1')} <span>{t('welcome_2')}</span>
        </h1>
      </div>
      <picture className="image-container">
        {!loaded && (
          <div style={{ height: '27rem', width: '650px', display: 'flex' }}>
            <div className="loader"></div>
          </div>
        )}
        <picture>
          <source type="image/webp" srcSet="/first_image.webp" />
          <source type="image/jpeg" srcSet="/first_image.jpg" />
          <img
            src="/first_image.jpg"
            loading="eager"
            onLoad={() => setLoaded(true)}
            alt="head image"
            className="header-image"
          />
        </picture>
      </picture>
    </header>
  )
}
