import { FC, useEffect, useState } from 'react'
import './styles.css'

interface ICarouselProps {
  title: string
  arr: string[]
}

export const TextCarousel: FC<ICarouselProps> = ({ title, arr }) => {
  const [active, setActive] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        if (arr.length > 0) {
          return (prev + 1) % arr.length
        }
        return 0
      })
    }, 4500)

    return () => clearInterval(interval)
  }, [arr])

  return (
    <div className="text-carousel-container">
      <h2 className="text-carousel-subtitle">{title}</h2>
      <div className="text-carousel-text-container">
        {arr.map((employee, index) => (
          <h3
            key={`${index}-employee`}
            style={{
              display: active !== index ? 'none' : 'block'
            }}
          >
            {employee}
          </h3>
        ))}
      </div>
    </div>
  )
}
