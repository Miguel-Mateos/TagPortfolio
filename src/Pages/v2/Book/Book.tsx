import React, { useEffect, useRef, useState } from 'react'
import { isEqual } from 'lodash'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { Input, Radio, TextArea } from '../../../Components/Inputs/Input'
import { useAppContextV2 } from '../../../Context/ContextV2'
import { BookSelector } from './BookCard'
import { requiredFields } from './utils'
import './book.css'
import { ILog } from '@Context/types'
import useEmail from './useEmail'
import ReCaptcha from 'react-google-recaptcha'

export const Book = () => {
  const { sendEmail } = useEmail()
  const recaptchaRef = useRef<ReCaptcha>(null)
  const { createEvent, addLog } = useAppContextV2()
  const [errors, setErrors] = useState<string[]>([])
  const logger = useRef({} as ILog)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (formRef.current) {
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        const { calendar, anual_revenue, ...rest } = data as any
        const log: ILog = {
          salary_range: anual_revenue,
          available: calendar || null,
          ...rest
        }
        if (!isEqual(log, logger.current)) {
          logger.current = log
          if (log.name && log.email && log.company_name) {
            addLog(log)
          }
        }
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const entries = [...formData.entries()]

    console.log(recaptchaRef.current?.getValue())

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
      sendEmail(
        Object.fromEntries(formData) as any,
        recaptchaRef.current?.getValue() ?? ''
      )
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    // const form = e.currentTarget as HTMLFormElement
    const { name, value } = e.target
    if (requiredFields.includes(name)) {
      if (value && errors.includes(name) && value) {
        setErrors(errors.filter((item) => item !== name))
      }
    }
    // const formData = new FormData(form)
    // const entries = [...formData.entries()]
    // const data = Object.fromEntries(entries)
    // console.log(data)
  }

  const handleExternalChange = (val: number, name: string) => {
    if (requiredFields.includes(name)) {
      if (val && errors.includes(name)) {
        setErrors(errors.filter((item) => item !== name))
      }
    }
  }

  return (
    <div role="main">
      <HeadLine title="Nice to e-meet you!" />
      <HeadBook />

      <form
        onChange={onChange}
        onSubmit={onSubmit}
        className="book-form"
        ref={formRef}
      >
        <div className="book-form-name-surname">
          <Input
            error={errors.includes('name') ? 'This field is required' : ''}
            label="Name"
            required
            name="name"
          />
          <Input
            error={errors.includes('surname') ? 'This field is required' : ''}
            label="Surname"
            required
            name="surname"
          />
        </div>

        <Input
          error={errors.includes('email') ? 'This field is required' : ''}
          label="Email"
          required
          name="email"
          type="email"
        />
        <Input
          error={
            errors.includes('company_name') ? 'This field is required' : ''
          }
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
        <ReCaptcha
          ref={recaptchaRef}
          sitekey="6LebQIIiAAAAAHfBJ2xBSFvB-GEVD3DXRcRItH8y
          "
          onChange={(e) => console.log(e)}
        />

        {errors.length > 0 && <small>Required Values Must be Fulfilled</small>}
        <p className="book-recopilation-message">
          I am not saving any of this details. By clicking book you are just
          booking a call (:
        </p>
      </form>
    </div>
  )
}

const HeadBook = () => (
  <div className="book-title">
    <h2>Book a Call</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias nihil
      commodi quam. Ad corporis facilis optio, unde rerum amet provident.
      Voluptates impedit iusto fugiat assumenda ducimus magnam vel commodi.
    </p>
  </div>
)
