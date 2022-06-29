import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface IModal {
  onClose: () => void
  children: React.ReactNode
}

const IconClose = ({ onClose }: { onClose: () => void }) => {
  return (
    <svg
      onClick={onClose}
      className="icon-close"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

export const Modal: FC<IModal> = ({ children, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) onClose()
  }

  const handleKeyDown = (event: KeyboardEventInit) =>
    event.key === 'Escape' && onClose()

  const content = (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content">
        <IconClose onClose={onClose} />
        {children}
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
