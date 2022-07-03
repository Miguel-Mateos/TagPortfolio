import { FC, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useAppContext } from '../../Context/ContextApi'

export const Notification: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { notification } = useAppContext() as any

  useEffect(() => {
    if (ref.current) {
      if (notification) ref.current.style.display = 'block'
      else ref.current.style.display = 'none'
    }
  }, [notification])

  const content = (
    <div ref={ref} className="notification">
      <div>
        <p className="notification-msg">{notification}</p>
      </div>
    </div>
  )

  return ReactDOM.createPortal(content, document.body)
}
