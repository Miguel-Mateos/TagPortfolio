import { FC } from 'react'

export const CardHead: FC<any> = ({ children }) => {
  return (
    <div className="card-header">
      <h3>{children}</h3>
    </div>
  )
}
