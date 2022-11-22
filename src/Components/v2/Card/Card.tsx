import './styles.css'

interface CardProps {
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`card-v2 ${className ?? ''}`} {...rest}>
      {children}
    </div>
  )
}
