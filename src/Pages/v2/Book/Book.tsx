import React, { useState } from 'react'
import { HeadLine } from '../../../Components/v2/HeadLine/HeadLine'
import { Input, Radio, TextArea } from '../../../Components/Inputs/Input'
import { useAppContextV2 } from '../../../Context/ContextV2'
import { BookSelector } from './BookCard'
import { requiredFields } from './utils'
import './book.css'

export const Book = () => {
  const { createEvent } = useAppContextV2()
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
      const { anual_revenue, calendar, position, ...rest } = data
      createEvent({
        salary: anual_revenue,
        day: new Date(),
        vacancy: position,
        ...rest
      })
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
