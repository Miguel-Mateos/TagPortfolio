import { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

interface INotification {
  message: string
  onClose: () => void
}

export const Notification: FC<INotification> = ({ message, onClose }) => {
  useEffect(() => {
    const close = () => {
      onClose()
    }
    setTimeout(close, 3000)
  })
  const content = (
    <div className="notification">
      <div>
        <p className="notification-message">{message}</p>
      </div>
    </div>
  )

  return ReactDOM.createPortal(content, document.body)
}
