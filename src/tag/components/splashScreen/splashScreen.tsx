import React, { useEffect, useState } from 'react'

export interface ISplashScreen {
  /**
   * Set a fixed colour as a background for splash screen component
   */
  backgroundColor?: string
  /**
   * Set an image as a background for splash screen component
   */
  backgroundImageURI?: string
  /**
   * Set an video/animation as a background for splash screen component
   */
  backgroundVideoURI?: string
  /**
   * Set an image of a person or company
   */
  logoURI: string
  /**
   * Add class for splash screen component
   */
  className?: string
  [others: string]: any
}

export const SplashScreen: React.FC<ISplashScreen> = (props) => {
  const {
    backgroundColor,
    backgroundImageURI,
    backgroundVideoURI,
    logoURI,
    className,
    children,
    ...rest
  } = props

  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 672)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 672) setMobile(true)
      else setMobile(false)
    })
    return () => window.removeEventListener('resize', () => null)
  }, [])

  const logo = (
    <div
      className="logo-wrapper"
      data-testid={rest ? `${rest['data-testid']}-logo-wrapper` : undefined}
    >
      <img
        src={logoURI}
        alt="logo"
        className="logo-image"
        data-testid={rest ? `${rest['data-testid']}-logo-image` : undefined}
      />
    </div>
  )

  const backgroundVideo = (
    <div
      data-testid={rest ? `${rest['data-testid']}-video-wrapper` : undefined}
      className="video-wrapper"
    >
      <video autoPlay muted loop>
        <source src={backgroundVideoURI} type="video/mp4" />
      </video>
    </div>
  )

  if (mobile) {
    return (
      <div
        className="tag-ds splash-screen"
        data-testid={rest ? `${rest['data-testid']}-container` : undefined}
        style={
          backgroundColor
            ? { backgroundColor }
            : backgroundImageURI
            ? { backgroundImage: `url(${backgroundImageURI})` }
            : undefined
        }
      >
        {backgroundVideoURI && backgroundVideo}
        {logo && logo}
      </div>
    )
  } else {
    return <></>
  }
}
