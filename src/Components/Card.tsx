import { FC, ReactNode } from 'react'

interface ICard {
  className?: string
  children: ReactNode
}

export const Card: FC<ICard> = ({ className, children }) => {
  return <div className={`card ${className || ''}`}>{children}</div>
}
