import { useMemo, useState } from 'react'
import { Card } from '../../../Components/v2/Card/Card'
import { dateBookings } from '../../../utils/dateBookings'

const BookCard: React.FC<any> = ({ onClick, id, active, day }) => {
  return (
    <Card
      style={{
        width: '275px',
        padding: '24px',
        outline: active ? '2px solid var(--primary400)' : 'none',
        transition: 'outline 0.1s ease-in-out'
      }}
      onClick={() => onClick(id)}
    >
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

export const BookSelector: React.FC<any> = ({ onChange }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const days: Date[] = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map(() => dateBookings()),
    []
  )

  const changeHandler = (val: number) => {
    setSelected(val)
    onChange(val, 'calendar')
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
              onClick={changeHandler}
              active={selected === index}
              id={index}
            />
          ))}
      </div>
      <input type="hidden" name="calendar" value={selected ?? ''} />
    </div>
  )
}
