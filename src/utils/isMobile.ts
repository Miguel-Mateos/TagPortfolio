import { useLayoutEffect, useState } from 'react'

export const isMobile = window.innerWidth < 768
export const isDesktop = window.innerWidth >= 768

type TWidth = 'mobile' | 'desktop'
type UseMobile = ({ dynamic }: { dynamic?: boolean }) => { layoutWidth: TWidth }

export const useLayoutWidth: UseMobile = ({ dynamic }) => {
  const [width, setWidth] = useState<TWidth>(isMobile ? 'mobile' : 'desktop')

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setWidth('mobile')
    } else setWidth('desktop')
  }
  useLayoutEffect(() => {
    if (dynamic) {
      window.addEventListener('resize', () => handleResize())
    }

    return () => {
      if (dynamic) {
        window.removeEventListener('resize', () => handleResize())
      }
    }
  }, [])

  return {
    layoutWidth: width
  }
}
