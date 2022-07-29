import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Notification } from '../../Components/Notification/Notification'
import { useAppContext } from '../../Context/ContextApi'

export const Footer = () => {
  const form = useRef<any>(null)
  const [canSubmit, setCanSubmit] = useState(false)
  const { openNotification } = useAppContext() as any
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formValues = form.current?.elements
    const name = formValues._name.value
    const email = formValues.email.value
    const message = formValues.message.value
    if (form.current) {
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE,
          {
            _name: name,
            email: email,
            message: message
          },
          import.meta.env.VITE_EMAIL_KEY
        )
        .then(
          (result) => {
            openNotification({ message: 'Message successfully sent!' })
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }

  const handleChange = () => {
    if (form.current) {
      const formValues = form.current?.elements
      const name = formValues._name.value
      const email = formValues.email.value
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      const message = formValues.message.value
      if (name && isEmail && message) setCanSubmit(true)
      else setCanSubmit(false)
    }
  }

  return (
    <footer className="footer">
      <h1 className="title-box">Contact</h1>
      <form onChange={handleChange} ref={form} onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="_name" style={{ display: 'block' }}>
            Nombre
          </label>
          <input id="_name" type="text" placeholder="Nombre" />
        </div>
        <div className="input" style={{ marginTop: '2rem' }}>
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
          </label>
          <input id="email" type="email" placeholder="Email" />
        </div>
        <div className="input" style={{ marginTop: '2rem' }}>
          <label htmlFor="message" style={{ display: 'block' }}>
            Mensaje
          </label>
          <textarea id="message" placeholder="Mensaje" />
        </div>
        <input
          type="submit"
          className={`button minimal ${canSubmit ? '' : 'disabled'}`}
          value="Contact"
          disabled={!canSubmit}
          style={{ maxWidth: '20%' }}
        />
      </form>
    </footer>
  )
}
