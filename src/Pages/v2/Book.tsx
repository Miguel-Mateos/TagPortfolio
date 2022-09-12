import React, { useState } from 'react'
import { Card } from '../../Components/v2/Card/Card'
import { HeadLine } from '../../Components/v2/HeadLine/HeadLine'
import './book.css'

// Temporal solution
const requiredFields = [
  'name',
  'surname',
  'email',
  'company_name',
  'anual_revenue',
  'calendar'
]

interface CommonInputProps {
  label?: string
  name: string
  id?: string
  defaultValue?: string
  placeholder?: string
  type?: string
  required?: boolean
  error?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type TCommonInputProps<T> = CommonInputProps & T

export const Book = () => {
  const [errors, setErrors] = useState<string[]>([])
  console.log(errors)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    console.log(form)
    const formData = new FormData(form)
    const entries = [...formData.entries()]
    let error = false
    let auxErrors = errors
    entries.forEach((entry) => {
      if (requiredFields.includes(entry[0])) {
        if (!entry[1]) {
          console.log('entered', entry[0])
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
      console.log(data)
    }
  }
  return (
    <div>
      <HeadLine title="Nice to e-meet you!" />
      <div
        className="book-title"
        style={{
          backgroundColor: 'var(--neutral100)',
          padding: '79px 0 20px 40px'
        }}
      >
        <h2>Book a Call</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias
          nihil commodi quam. Ad corporis facilis optio, unde rerum amet
          provident. Voluptates impedit iusto fugiat assumenda ducimus magnam
          vel commodi.
        </p>
      </div>
      <form
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
        <BookSelector />
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

const BookCard: React.FC<any> = ({ onClick, id, active }) => {
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
        <span className="small">17 Monday, September</span>
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

const Input: React.FC<
  TCommonInputProps<React.InputHTMLAttributes<HTMLInputElement>>
> = ({
  label,
  required,
  name,
  className,
  placeholder,
  type,
  error,
  ...rest
}) => {
  console.log(error)
  return (
    <div className="input-wrapper" style={{ width: '100%' }}>
      <label className="caption">
        {label}
        {required && <small>*</small>}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        {...rest}
      />
      {error && <p className="input-helper-text">Error</p>}
    </div>
  )
}

const Radio: React.FC<
  TCommonInputProps<React.InputHTMLAttributes<HTMLInputElement>>
> = ({ label, name, id, ...rest }) => (
  <div className="tag-ds radio-container">
    <input id={id} type="radio" name={name} {...rest} />
    <label htmlFor="radio">{label}</label>
  </div>
)

const TextArea: React.FC<
  TCommonInputProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
> = ({ label, required, name, placeholder, ...rest }) => (
  <div className="tag-ds input-wrapper ">
    <label className="caption">
      {label}
      {required && <span className="required">*</span>}
    </label>
    <textarea placeholder={placeholder} {...rest} />
  </div>
)

const BookSelector = () => {
  const [selected, setSelected] = useState(null)
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
              onClick={setSelected}
              active={selected === index}
              id={index}
            />
          ))}
      </div>
      <input type="hidden" name="calendar" value={selected ?? ''} />
    </div>
  )
}
