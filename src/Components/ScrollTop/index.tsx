import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ children }: { children: any }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.querySelector('[role=mainContent]')?.scrollIntoView()
  }, [pathname])

  return <>{children}</>
}
