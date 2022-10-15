import { useMemo, useState } from 'react'
import { Card } from '../../../../Components/v2/Card/Card'
import { dateBookings } from '../../../../utils/dateBookings'

interface IBookCard {
  onClick: ({ id, day }: { id: number; day: string }) => any
  id: number
  active: boolean
  day: string
}

const BookCard: React.FC<IBookCard> = ({ onClick, id, active, day }) => {
  return (
    <Card
      style={{
        width: '275px',
        padding: '24px',
        outline: active ? '2px solid var(--primary400)' : 'none',
        transition: 'outline 0.1s ease-in-out',
        position: 'relative'
      }}
      onClick={() => onClick({ id, day })}
    >
      <input
        type="checkbox"
        style={{
          appearance: 'none',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        value={day}
        name="calendar"
      />
      <div
        style={{
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span className="material-icons">calendar_month</span>
        <span className="small">{day}</span>
      </div>
      <div
        style={{
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span className="material-icons">timer</span>
        <span className="small">17:30 PM</span>
      </div>
    </Card>
  )
}

export const BookSelector: React.FC<any> = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const days: string[] = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map(() => dateBookings()),
    []
  )

  const changeHandler = ({ id, day }: { id: number; day: string }) => {
    setSelected(id)
  }

  return (
    <div>
      <div
        className="small"
        style={{ textTransform: 'uppercase', marginBottom: '8px' }}
      >
        Choose Next Slot Available
      </div>
      <div
        className="bookcard-list"
        style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}
      >
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <BookCard
              key={index}
              day={days[index]}
              onClick={(id) => changeHandler({ id: id.id, day: id.day })}
              active={selected === index}
              id={index}
            />
          ))}
      </div>
    </div>
  )
}
