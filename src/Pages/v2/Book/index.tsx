import React, { useEffect, useRef, useState } from 'react'
import { isEqual } from 'lodash'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { Input, Radio, TextArea } from '../../../Components/Inputs/Input'
import { useAppContextV2 } from '../../../Context/ContextV2'
import { BookSelector } from './Components/BookCard'
import { requiredFields, salaryRanges } from './utils'
import { ILog } from '@Context/types'
import useEmail from './useEmail'
import ReCaptcha from 'react-google-recaptcha'
import './book.css'
import Notification from '@TagDs/components/notification/notification'

export const Book = () => {
  const { addLog } = useAppContextV2()
  const { sendEmail } = useEmail()

  const recaptchaRef = useRef<ReCaptcha>(null)
  const logger = useRef({} as ILog)
  const formRef = useRef<HTMLFormElement>(null)

  const [show, setShow] = useState(false)
  const [validRecaptcha, setValidRecaptcha] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      if (formRef.current) {
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        const {
          calendar,
          anual_revenue,
          'g-recaptcha-response': captcha,
          ...rest
        } = data as any
        const log: ILog = {
          salary_range: anual_revenue,
          available: calendar ? new Date(calendar) : null,
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
      sendEmail(Object.fromEntries(formData) as any)
      setShow(true)
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

        <TextArea label="Something else about" name="additional_information" />

        <div>
          <label className="caption">Anual Salary Range</label>
          <div className="book-radio-grouper">
            {salaryRanges.map((salary, idx) => (
              <Radio
                name="anual_revenue"
                label={salary.label}
                value={salary.value}
                key={idx + salary.value}
              />
            ))}
            <Radio name="anual_revenue" label="More" />
          </div>
        </div>

        <BookSelector onChange={handleExternalChange} />

        <button
          disabled={errors.length !== 0 || !validRecaptcha || show}
          className="large"
          style={{ width: 'fit-content' }}
        >
          Book
        </button>
        <ReCaptcha
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={(e) => e && setValidRecaptcha(true)}
        />

        {errors.length > 0 && <small>Required Values Must be Fulfilled</small>}
        <p className="book-recopilation-message">
          I am not saving any of this details. By clicking book you are just
          booking a call (:
        </p>
      </form>
      <Notification show={show} setShow={setShow} success renderAsPortal>
        The reservation has been successfully requested! Soon will you will
        recieve a google meet invitation! I am looking forward to talk with you!
      </Notification>
    </div>
  )
}

const HeadBook = () => (
  <div className="book-title">
    <h2>Book a Call</h2>
    <p>
      Would you like to chat and get to know me a bit better? Don&apos;t
      hesitate. Come in and book a call with me!
    </p>
  </div>
)
