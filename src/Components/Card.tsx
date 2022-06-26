import { FC, ReactNode } from 'react'
import { CardHead as Head } from './CardHead'
import { CardBody as Body } from './CardBody'

interface ICard {
  className?: string
  children: ReactNode
}

const CardWrapper: FC<ICard> = ({ className, children }) => {
  return <div className={`card ${className || ''}`}>{children}</div>
}

export const Card = {
  Wrapper: CardWrapper,
  Head,
  Body
}
