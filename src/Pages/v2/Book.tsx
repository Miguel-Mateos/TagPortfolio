import React, { useMemo, useRef, useState } from 'react'
import { Card } from '../../Components/v2/Card/Card'
import { HeadLine } from '../../Components/v2/HeadLine/HeadLine'
import { dateBookings } from '../../utils/dateBookings'
import { Input, Radio, TextArea } from '../../Components/Inputs/Input'
import './book.css'

const eventConstant = {
  summary: 'Hello World',
  location: '',
  start: {
    dateTime: '2022-08-28T09:00:00-07:00',
    timeZone: 'America/Los_Angeles'
  },
  end: {
    dateTime: '2022-08-28T17:00:00-07:00',
    timeZone: 'America/Los_Angeles'
  },
  recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
  attendees: [],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 },
      { method: 'popup', minutes: 10 }
    ]
  }
}

// Temporal solution
const requiredFields = [
  'name',
  'surname',
  'email',
  'company_name',
  'anual_revenue',
  'calendar'
]

export const Book = () => {
  const [errors, setErrors] = useState<string[]>([])
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const entries = [...formData.entries()]
    let error = false
    let auxErrors = errors
    entries.forEach((entry) => {
      if (requiredFields.includes(entry[0])) {
        if (!entry[1]) {
          error = true
          auxErrors = [...auxErrors, entry[0]]
        }
        if (entry[1] && auxErrors.includes(entry[0])) {
          auxErrors = auxErrors.filter((item) => item !== entry[0])
        }
      }
    })
    if (auxErrors.length > 0) setErrors(auxErrors)
    if (!error) {
      const data = Object.fromEntries(formData)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target
    if (requiredFields.includes(name)) {
      if (value && errors.includes(name) && value) {
        setErrors(errors.filter((item) => item !== name))
      }
    }
  }

  const handleExternalChange = (val: number, name: string) => {
    if (requiredFields.includes(name)) {
      if (val && errors.includes(name)) {
        setErrors(errors.filter((item) => item !== name))
      }
    }
  }

  return (
    <div>
      <HeadLine title="Nice to e-meet you!" />
      <HeadBook />
      <form
        onChange={onChange}
        onSubmit={onSubmit}
        style={{
          width: '583px',
          display: 'grid',
          gap: '32px',
          marginTop: '20px',
          marginLeft: '40px'
        }}
      >
        <div style={{ display: 'flex', gap: '32px' }}>
          <Input
            error={errors.includes('name')}
            label="Name"
            required
            name="name"
          />
          <Input
            error={errors.includes('surname')}
            label="Surname"
            required
            name="surname"
          />
        </div>
        <Input
          error={errors.includes('email')}
          label="Email"
          required
          name="email"
          type="email"
        />
        <Input
          error={errors.includes('company_name')}
          label="Company Name"
          required
          name="company_name"
        />
        <select placeholder="Select Option" name="position">
          <option value="Front End Developer">Front End Developer</option>
          <option value="UX/UI Developer">UX/UI Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>
        <TextArea label="Something else about" name="message" />
        <div>
          <label className="caption">Anual Salary Range</label>
          <div className="book-radio-grouper">
            <Radio name="anual_revenue" label="40.000 € - 50.000 €" />
            <Radio name="anual_revenue" label="40.000 € - 50.000 €" />
            <Radio name="anual_revenue" label="40.000 € - 50.000 €" />
            <Radio name="anual_revenue" label="More" />
          </div>
        </div>
        <BookSelector onChange={handleExternalChange} />
        <button className="large" style={{ width: 'fit-content' }}>
          Book
        </button>
        {errors.length > 0 && <small>Required Values Must be Fulfilled</small>}
        <p style={{ marginBottom: '101px' }}>
          I am not saving any of this details. By clicking book you are just
          booking a call (:
        </p>
      </form>
    </div>
  )
}

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

const BookSelector: React.FC<any> = ({ onChange }) => {
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

const HeadBook = () => (
  <div
    className="book-title"
    style={{
      backgroundColor: 'var(--neutral100)',
      padding: '79px 0 20px 40px'
    }}
  >
    <h2>Book a Call</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias nihil
      commodi quam. Ad corporis facilis optio, unde rerum amet provident.
      Voluptates impedit iusto fugiat assumenda ducimus magnam vel commodi.
    </p>
  </div>
)
