import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ children }: { children: any }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.querySelector('.layout')?.scrollIntoView()
  }, [pathname])

  return <>{children}</>
}
