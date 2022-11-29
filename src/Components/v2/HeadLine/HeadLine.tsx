import { forwardRef } from 'react'
import './styles.css'

interface HeadLineProps {
  title: string
  ref: React.RefObject<HTMLHeadingElement>
}

const Head: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadLineProps
> = ({ title }, ref) => {
  return (
    <header ref={ref} className="headline-header">
      {title && (
        <p id="about" className="headline-about">
          {title}
        </p>
      )}
    </header>
  )
}

export const HeadLine = forwardRef(Head)
