import { FC } from 'react'

export const CardBody: FC<any> = ({ children }) => {
  return (
    <div className="card-body">
      <p>{children}</p>
    </div>
  )
}
