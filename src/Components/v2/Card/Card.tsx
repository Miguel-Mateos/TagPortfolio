import './styles.css'

export const Card: React.FC<any> = ({ children, ...rest }) => {
  return (
    <div className="card-v2" {...rest}>
      {children}
    </div>
  )
}
