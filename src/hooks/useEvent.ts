import { useEffect } from 'react'

interface IuseEvent {
  type: string
  listener: (...args: any[]) => void
  origin: 'window' | 'document' | 'documentBody'
  depA?: any[]
}

type TuseEvent = ({ type, listener, origin, depA }: IuseEvent) => void

export const useEvent: TuseEvent = ({ type, listener, origin, depA }) => {
  const target = {
    window,
    document,
    documentBody: document.body,
    origin
  }[origin]

  useEffect(() => {
    target.addEventListener(type, listener)
    return () => target.removeEventListener(type, listener)
  }, [depA])
}
